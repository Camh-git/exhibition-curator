import React, { useState, useContext } from "react";
import { ArtObject } from "../Interfaces/ArtObject";
import { curatorContext } from "../Interfaces/AppContext";
import Add_icon from "../assets/images/icons/add_black_24dp.svg";
import Remove_icon from "../assets/images/icons/remove_black_24dp.svg";
import "../styles/search_result.css";

interface ArtObjectProp {
  ArtObject: ArtObject;
}

const SearchResult: React.FC<ArtObjectProp> = ({ ArtObject }) => {
  const [Added, setAdded] = useState(false);
  const { updateExhibition } = useContext(curatorContext);
  const addBtnAlt = `Add ${ArtObject.title} to exhibition`;

  const toggleAdded = () => {
    if (Added) {
      setAdded(false);
      console.log("Removing: " + ArtObject.title);
      updateExhibition(ArtObject, true);
    } else {
      setAdded(true);
      console.log("Adding: " + ArtObject.title);
      updateExhibition(ArtObject, false);
    }
  };

  return (
    <div className="Search_object_body">
      <section className="Search_obj_add_btn" onClick={toggleAdded}>
        <button>
          <img
            src={Added ? Remove_icon : Add_icon}
            alt={addBtnAlt}
            onClick={toggleAdded}
          />
        </button>
      </section>

      <section className="Search_obj_info">
        <h4>{ArtObject.title}</h4>
        <p>
          {ArtObject.artist}, {ArtObject.date}
        </p>
      </section>

      <section className="Search_obj_img">
        <img src={ArtObject.images[0]} alt="" />
      </section>
    </div>
  );
};

export default SearchResult;
