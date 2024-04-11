import { ArtObject } from "../Interfaces/ArtObject";
import "../styles/exhibition_piece.css";
import Exapand_icon from "../assets/images/icons/expand_black_24dp.svg";
import Delete_icon from "../assets/images/icons/delete_black_24dp.svg";
import { useContext } from "react";
import curatorContext from "../Interfaces/AppContext";
import { ExhibitInfo } from "./Exhibit_info";

interface ExhibtionPieceProp {
  ArtWork: ArtObject;
}

export const ExhibitionPiece: React.FC<ExhibtionPieceProp> = ({ ArtWork }) => {
  const { updateExhibition } = useContext(curatorContext);
  const Delete_entry = () => {
    updateExhibition(ArtWork, true);
  };
  const Show_more = () => {};
  return (
    <div className="Exhibition_entry">
      <img
        src={ArtWork.images[0]}
        alt=""
        className="Exhibition_entry_hero_img"
      />

      <h4>{ArtWork.title}</h4>
      <section className="Exhib_hover">
        <div className="Exhib_see_more" onClick={Show_more}>
          <img src={Exapand_icon} alt="Show more arrow" />
          <p>Show more</p>
        </div>
        <div className="Exhib_delete">
          <button onClick={Delete_entry}>
            <img src={Delete_icon} alt="Delete entry" onClick={Delete_entry} />
          </button>
        </div>
      </section>
    </div>
  );
};
