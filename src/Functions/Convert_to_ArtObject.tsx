import { ArtObject } from "../Interfaces/ArtObject";
import { Convert_VAM_to_ArtObject } from "./Convert_VAM_to_ArtObject";
import { Convert_MET_to_ArtObject } from "./Convert_MET_to_ArtObject";
import { PlaceHolderArt } from "../Interfaces/PlaceHolderArtOBJ";

export function Convert_to_ArtObject(
  data: string,
  sourceAPI: string
): ArtObject[] {
  let objectList: ArtObject[] = [];

  //Note: only accept peices that have at least a title OR an artist's name
  switch (sourceAPI) {
    case "VAM":
      for (const info of data as any) {
        //Get the piece's image URLs
        const newPiece = Convert_VAM_to_ArtObject(info);
        if (newPiece.collection !== "InvalidObject") {
          objectList.push(newPiece);
        }
      }
      break;

    case "MET":
      for (const record of data as any) {
        const newPiece = Convert_MET_to_ArtObject(record);
        if (newPiece.collection !== "InvalidObject") {
          objectList.push(newPiece);
        }
      }
      break;

    default:
      objectList.push(PlaceHolderArt());
  }
  return objectList;
}
