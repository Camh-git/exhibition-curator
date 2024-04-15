import SearchBar from "./search_bar";
import gallery_image from "../assets/images/Art gallery.jpg";
import search_example from "../assets/images/Search-example.png";
import "../styles/homepage.css";

const Home: React.FC = () => {
  return (
    <>
      <div className="homepage_spacer" />
      <SearchBar />
      <div className="homepage_spacer" />

      <section className="homepage_segment_container">
        <h2>What is exhibition curator?</h2>
        <section className="homepage_segment">
          <div className="collumn">
            <p>
              Exhibition curator is a website that lets you easily assemble your
              own art exhibtion from the collections of several well known art
              galleries and museums.
              <br />
              <br />
              We offer you the ability to search through our selection of
              galleries and find the artwork that is perfect for your
              collection, then you can simply add it to your own personal
              exhibtion.
              <br />
              <br />
              So please sit back, relax and browse to your heart's content, if
              you want to know more, or find a problem please, do not hesitate
              to let us know.
              <br />
              Happy browsing!
            </p>
          </div>
          <div className="collumn">
            <img src={gallery_image} alt="Art gallery" />
          </div>
        </section>
      </section>

      <section className="homepage_segment_container_alt">
        <h2>How do I use exhibition curator?</h2>
        <section className="homepage_segment_alt">
          <div className="collumn">
            <img src={search_example} alt="Art gallery" />
          </div>
          <div className="collumn">
            <p>
              We designed the site for easy to use, you just need to search for
              art pieces and add them to your exhibition.
            </p>
            <h4>Searching</h4>
            <p>
              To search simply type the search term you are looking for into the
              search bar, which can be found at the top of the homepage and the
              "My exhibtion" page.
            </p>
            <p>
              You can also search for more advanced fields like location or
              artist by clicking the "filters" button, selecting the option you
              want and entering the artist or location into the text box.
            </p>
            <p>
              Once you are ready just press the search button and you will be
              taken to the search results page.
            </p>
            <h4>Curating an exhibtion</h4>
            <p>
              You can view your exhibtion at any time by following the link to
              the My exhibtion page.
            </p>
            <p>
              To add artworks to your exhibtion simply search the galleries
              using the search function we just talked about and click the +
              button on the side of the art piece, it will now be waiting for
              you the next time you go to the "My exhibtion" page.
            </p>
          </div>
        </section>
      </section>

      <section className="homepage_segment_container">
        <h2>API usage</h2>
        <section className="Homepage_credits">
          <p>
            This service uses the following APIs. We thank the creators for
            making them open source and ask that you respect the API's terms and
            usage limits.
          </p>
          <ul>
            <li>
              <p>The Victoria and albert museum API.</p>
              <a href="https://developers.vam.ac.uk/guide/v2/welcome.html">
                More info on the V&A API
              </a>
            </li>
            <li>
              <p>New York met museum of art API.</p>
              <a href="https://metmuseum.github.io/">
                More info on the NY met API
              </a>
            </li>
          </ul>
        </section>
      </section>

      <p>
        We thank you for using ehxibtion curator, we hope you have a pleasent
        experience and a good day.
      </p>
    </>
  );
};
export default Home;
