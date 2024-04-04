import { ArtObject } from "../Interfaces/ArtObject";
import not_found_icon from "../assets/images/Monitor-404.svg";

function isNotBlank(record: any): boolean {
  if (
    record !== "" &&
    record !== undefined &&
    record !== null &&
    record !== "Unknown"
  ) {
    return true;
  } else {
    return false;
  }
}

export function Convert_to_ArtObject(
  data: string,
  sourceAPI: string
): ArtObject[] {
  let objectList: ArtObject[] = [];

  switch (sourceAPI) {
    case "VAM":
      for (const record of data as any) {
        //Get the piece's image URLs
        let image_urls: string[] = [];
        if (isNotBlank(record._images._primary_thumbnail)) {
          image_urls.push(record._images._primary_thumbnail.toString());
        } else {
          image_urls.push(not_found_icon);
        }
        if (isNotBlank(record._images._iiif_image_base_url)) {
          image_urls.push(record._images._iiif_image_base_url);
        }
        if (isNotBlank(record._images._iiif_presentation_url)) {
          image_urls.push(record._images._iiif_presentation_url);
        }

        //Generate placeholder values, use the real ones if available
        let obj_title = "Unknown title";
        if (isNotBlank(record._primaryTitle)) {
          obj_title = record._primaryTitle;
        }
        let obj_artist = "Unknown artist";
        if (isNotBlank(record._primaryMaker.name)) {
          obj_artist = record._primaryMaker.name;
        }

        //Create the new peice and append it to the list
        const newPiece: ArtObject = {
          id: "VAM" + record.systemNumber.toString(),
          title: obj_title,
          artist: obj_artist,
          date: record._primaryDate.toString(),
          location: record._currentLocation.displayName,
          collection: "VAM",
          images: image_urls,
          onDisplay: record._currentLocation.onDisplay,
        };
        objectList.push(newPiece);
      }
      break;

    case "MET":
      for (const record of data as any) {
        //Get the piece's image URLs
        let image_urls: string[] = [];
        if (isNotBlank(record.primaryImage)) {
          image_urls.push(record.primaryImage);
        }
        for (const image in record.additionalImages) {
          if (isNotBlank(record.additionalImages[image])) {
            image_urls.push(record.additionalImages[image]);
          }
        }
        //Generate placeholder values, use the real ones if available
        let obj_title = "Unknown title";
        if (isNotBlank(record.title)) {
          obj_title = record.title;
        }
        let obj_artist = "Unknown artist";
        if (isNotBlank(record.artistDisplayName)) {
          obj_artist = record.artistDisplayName;
        }
        const isDisplayed = isNotBlank(record.department);

        const newPiece: ArtObject = {
          id: "MET" + record.ObjectID,
          title: obj_title,
          artist: obj_artist,
          date: record.objectDate,
          location: record.department,
          collection: "MET", //The source API
          images: image_urls,
          onDisplay: isDisplayed,
        };
        objectList.push(newPiece);
      }
      break;

    default:
      const default_data: ArtObject = {
        id: "99999",
        title: "Not found",
        artist: "Not found",
        date: "1970",
        location: "None",
        collection: "Default",
        images: ["../assets/images/HTTP_404_animated.gif"],
        onDisplay: false,
      };
      objectList.push(default_data);
  }
  return objectList;
}
