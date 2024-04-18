import { ArtObject } from "../Interfaces/ArtObject";
import "../styles/exhibition_info.css";
interface ExhibtInfoProp {
  ArtWork: ArtObject;
  toggleInfo: () => void;
}
export const ExhibitInfo: React.FC<ExhibtInfoProp> = ({
  ArtWork,
  toggleInfo,
}) => {
  return (
    <div className="Exhibit_info_container">
      <h1>{ArtWork.title}</h1>
      <img src={ArtWork.images[0]} alt="" />

      <span className="Exhibit_info_data">
        <p>{ArtWork.artist}</p>
        <p>{ArtWork.date}</p>
        <p>{ArtWork.location}</p>
      </span>

      <p className="Exhibit_info_source">Source: {ArtWork.collection}</p>
      <p>
        On display: {ArtWork.onDisplay ? <span>true</span> : <span>false</span>}
      </p>
      <h3>Description</h3>
      <p>{ArtWork.description}</p>
      <h3 onClick={toggleInfo}>Close</h3>
    </div>
  );
};
