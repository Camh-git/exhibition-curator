import { ArtObject } from "../Interfaces/ArtObject";
import "../styles/exhibition_piece.css";
import Exapand_icon from "../assets/images/icons/expand_white_24dp.svg";
import Delete_icon from "../assets/images/icons/delete_black_24dp.svg";
import { useContext } from "react";
import curatorContext from "../Interfaces/AppContext";

interface ExhibtionPieceProp {
  ArtWork: ArtObject;
  ShowInfo: (title: string) => void;
}

export const ExhibitionPiece: React.FC<ExhibtionPieceProp> = ({
  ArtWork,
  ShowInfo: toggleInfo,
}) => {
  const { updateExhibition, updateFocusedPiece } = useContext(curatorContext);

  const Delete_entry = (
    event: React.MouseEvent<HTMLButtonElement | HTMLImageElement, MouseEvent>
  ) => {
    event.stopPropagation();
    updateExhibition(ArtWork, true);
  };

  const Show_more = () => {
    //Set the focused art piece to this one, display the "more info" screen.
    updateFocusedPiece(ArtWork);
    toggleInfo(ArtWork.title);
  };
  return (
    <div className="Exhibition_entry" onClick={Show_more}>
      <img
        src={ArtWork.images[0]}
        alt=""
        className="Exhibition_entry_hero_img"
      />

      <h4>{ArtWork.title}</h4>
      <section className="Exhib_hover">
        <div className="Exhib_see_more">
          <img src={Exapand_icon} alt="Show more arrow" />
          <p>Click to see more</p>
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
