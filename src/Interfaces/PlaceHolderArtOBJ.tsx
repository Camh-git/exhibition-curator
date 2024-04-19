import { ArtObject } from "../Interfaces/ArtObject";
import placeholder_thumb from "../assets/images/Monitor-404.svg";
export function PlaceHolderArt(): ArtObject {
  return {
    id: "99999",
    title: "Not found",
    artist: "Not found",
    date: "1970",
    location: "None",
    collection: "InvalidObject",
    images: [placeholder_thumb],
    onDisplay: false,
    description:
      "The object was not from one of the expected APIs, or was not correctly formed",
  };
}
