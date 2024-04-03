import { ArtObject } from "../Interfaces/ArtObject";
import not_found_icon from "../assets/images/Monitor-404.svg";

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
        if (record._images._primary_thumbnail !== undefined) {
          image_urls.push(record._images._primary_thumbnail.toString());
        } else {
          image_urls.push(not_found_icon);
        }
        if (record._images._iiif_image_base_url !== undefined) {
          image_urls.push(record._images._iiif_image_base_url);
        }
        if (record._images._iiif_presentation_url !== undefined) {
          image_urls.push(record._images._iiif_presentation_url);
        }

        //Create the new peice and append it to the list
        const newPiece: ArtObject = {
          id: "VAM" + record.systemNumber.toString(),
          title: record._primaryTitle,
          artist: record._primaryMaker.name,
          date: record._primaryDate.toString(),
          location: record._currentLocation.displayName,
          collection: "VAM",
          images: image_urls,
          onDisplay: record._currentLocation.onDisplay,
        };
        objectList.push(newPiece);
      }
      //console.log(objectList);
      break;

    case "MET":
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
