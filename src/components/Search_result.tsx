import { ArtObject } from "../Interfaces/ArtObject";
import Add_icon from "../assets/images/icons/add_black_24dp.svg";
import "../styles/search_result.css";

interface ArtObjectProp {
  ArtObject: ArtObject;
}

const SearchResult: React.FC<ArtObjectProp> = ({ ArtObject }) => {
  const addBtnAlt = `Add ${ArtObject.title} to exhibition`;
  return (
    <div className="Search_object_body">
      <section className="Search_obj_add_btn">
        <button>
          <img src={Add_icon} alt={addBtnAlt} />
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
