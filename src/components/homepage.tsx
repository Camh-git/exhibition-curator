import SearchBar from "./search_bar";
import gallery_image from "../assets/images/Art gallery.jpg";
import "../styles/homepage.css";

const Home: React.FC = () => {
  return (
    <>
      <div className="homepage_spacer" />
      <SearchBar />
      <div className="homepage_spacer" />

      <section className="homepage_segment">
        <h2>What is exhibition curator?</h2>
        <div className="collumn">
          <p>
            Aut quo laboriosam est ut magnam ut velit quasi. Modi ipsum eum
            veniam fugit eum numquam. Nam sapiente vitae voluptates laudantium
            repellat perferendis pariatur. Et iusto rerum tenetur doloremque
            molestiae.
            <br />
            <br />
            Qui nesciunt aut et reprehenderit. Odit est qui nobis voluptatem
            modi eos ab incidunt. Praesentium perferendis eius cupiditate harum
            libero doloribus voluptates.
            <br />
            <br />
            Quibusdam in alias consectetur nihil reprehenderit at expedita
            omnis. Perferendis ut omnis eos eum. Praesentium eligendi tempore ut
            eaque a dolor repudiandae.
          </p>
        </div>
        <div className="collumn">
          <img src={gallery_image} alt="Art gallery" />
        </div>
      </section>
      <br />
      <br />
    </>
  );
};
export default Home;
