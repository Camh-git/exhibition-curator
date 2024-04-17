export interface ArtObject {
  //TODO: replace placeholders with real data
  id: string;
  title: string;
  artist: string;
  date: string;
  location: string;
  collection: string; //The source API
  images: string[];
  onDisplay: boolean;
  description: string;
}
