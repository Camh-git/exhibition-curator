import { ArtObject } from "../Interfaces/ArtObject";
import "../styles/exhibition_piece.css";
interface ExhibtInfoProp {
  ArtWork: ArtObject;
}
export const ExhibitInfo: React.FC<ExhibtInfoProp> = ({ ArtWork }) => {
  return <h1>Exhibit Info</h1>;
};
