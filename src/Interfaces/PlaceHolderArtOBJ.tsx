import { ArtObject } from "../Interfaces/ArtObject";
import placeholder_thumb from "../assets/images/Monitor-404.svg";
export function PlaceHolderArt(): ArtObject {
  return {
    id: "99999",
    title: "Unknown title",
    artist: "Unknown artist",
    date: "1970",
    location: "Not found",
    collection: "InvalidObject",
    images: [placeholder_thumb],
    onDisplay: false,
    description:
      "The object was not from one of the expected APIs, or was not correctly formed",
  };
}
