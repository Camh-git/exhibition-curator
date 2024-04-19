import { ArtObject } from "../Interfaces/ArtObject";
import not_found_icon from "../assets/images/Monitor-404.svg";
import { isNotBlank } from "./IsNotBlank";
import { PlaceHolderArt } from "../Interfaces/PlaceHolderArtOBJ";

export function Convert_MET_to_ArtObject(record: any): ArtObject {
  //Get the piece's image URLs
  let image_urls: string[] = [];
  try {
    if (isNotBlank(record.primaryImage)) {
      image_urls.push(record.primaryImage);
    }
    for (const image in record.additionalImages) {
      if (isNotBlank(record.additionalImages[image])) {
        image_urls.push(record.additionalImages[image]);
      }
    }
    if (image_urls.length === 0) {
      image_urls.push(not_found_icon);
    }
  } catch {
    image_urls = [];
  }
  try {
    //Generate placeholder values, use the real ones if available, note: either obj_title or obj_artist must have a non-placeholder value
    let has_ID_info = false;
    let obj_title = "Unknown title";
    if (isNotBlank(record.title)) {
      has_ID_info = true;
      obj_title = record.title;
    }
    let obj_artist = "Unknown artist";
    if (isNotBlank(record.artistDisplayName)) {
      has_ID_info = true;
      obj_artist = record.artistDisplayName;
    }
    let obj_date = "Date unknown";
    if (isNotBlank(record.objectDate)) {
      obj_date = record.objectDate;
    }
    let obj_location = "Not disclosed/ not on display";
    if (isNotBlank(record.department)) {
      obj_location = record.department;
    }

    const isDisplayed = isNotBlank(record.department);

    //Setup description
    let description = `Here is some more info on ${obj_title}`;
    if (isNotBlank(record.objectName)) {
      description += `, Type: ${record.objectName}`;
    }
    if (isNotBlank(record.department)) {
      description += `, Department: ${record.department}`;
    }
    if (isNotBlank(record.artistNationality)) {
      description += `, Artist Nationality: ${record.artistNationality}`;
    }
    if (isNotBlank(record.artistDisplayBio)) {
      description += `, Artist bio: ${record.artistDisplayBio}`;
    }
    if (isNotBlank(record.classification)) {
      description += `, Classification: ${record.classification}`;
    }
    if (isNotBlank(record.culture)) {
      description += `, Culture: ${record.culture}`;
    }
    if (isNotBlank(record.dimensions) && record.dimensions !== null) {
      description += `, Dimensions: ${record.description}`;
    }
    if (isNotBlank(record.creditLine)) {
      description += `, Donor: ${record.creditLine}`;
    }
    const newPiece: ArtObject = {
      id: "MET" + record.ObjectID,
      title: obj_title,
      artist: obj_artist,
      date: obj_date,
      location: obj_location,
      collection: "MET", //The source API
      images: image_urls,
      onDisplay: isDisplayed,
      description: description,
    };
    if (has_ID_info) {
      return newPiece;
    } else {
      return PlaceHolderArt();
    }
  } catch {
    return PlaceHolderArt();
  }
}
