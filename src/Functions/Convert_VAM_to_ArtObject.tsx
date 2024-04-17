import { ArtObject } from "../Interfaces/ArtObject";
import not_found_icon from "../assets/images/Monitor-404.svg";
import { isNotBlank } from "./IsNotBlank";

export function Convert_VAM_to_ArtObject(info: any): ArtObject {
  const record = info.record;
  let image_urls: string[] = [];
  try {
    if (isNotBlank(info.meta.images._primary_thumbnail)) {
      image_urls.push(info.meta.images._primary_thumbnail);
    }
  } catch {
    image_urls.push(not_found_icon);
    console.log("Error fetching image");
  }

  //Generate placeholder values, use the real ones if available, the title or artist must have a value for the object to be added.
  let has_ID_info = false;
  let obj_title = "Unknown title";
  if (isNotBlank(record.titles[0])) {
    has_ID_info = true;
    obj_title = record.titles[0].title;
  }
  let obj_artist = "Unknown artist";
  if (isNotBlank(record.artistMakerPerson[0].name.text)) {
    has_ID_info = true;
    obj_artist = record.artistMakerPerson[0].name.text;
  }

  let obj_date = "Date unknown";
  if (isNotBlank(record.productionDates[0].date.text)) {
    obj_date = record.productionDates[0].date.text;
  }
  let obj_location = "Not disclosed/ not on display";
  if (isNotBlank(record.galleryLocations[0].current.text)) {
    obj_location = record.galleryLocations[0].current.text;
  }
  const onDisplay = isNotBlank(record.galleryLocations[0].current);

  //Setup the description
  let obj_description = "No description found";
  if (isNotBlank(record.briefDescription)) {
    obj_description = record.briefDescription;
  }
  if (isNotBlank(record.summaryDescription)) {
    if (obj_description === "") {
      obj_description = record.summaryDescription;
    } else {
      obj_description += `, Summary: ${record.summaryDescription}`;
    }
  }
  if (isNotBlank(record.physicalDescription)) {
    if (obj_description === "") {
      obj_description = record.physicalDescription;
    } else {
      obj_description += `, Physical description ${record.physicalDescription}`;
    }
  }
  //Create the new peice and append it to the list
  const newPiece: ArtObject = {
    id: "VAM" + record.systemNumber.toString(),
    title: obj_title,
    artist: obj_artist,
    date: obj_date,
    location: obj_location,
    collection: "VAM",
    images: image_urls,
    onDisplay: onDisplay,
    description: obj_description,
  };

  if (has_ID_info) {
    return newPiece;
  } else {
    return {
      id: "99999",
      title: "Not found",
      artist: "Not found",
      date: "1970",
      location: "None",
      collection: "InvalidObject",
      images: ["../assets/images/HTTP_404_animated.gif"],
      onDisplay: false,
      description:
        "The object was not from one of the expected APIs, or was not correctly formed",
    };
  }
}
