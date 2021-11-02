import {useState} from "react";
import Header from "../hoc/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "reactstrap";
import GallerySection from "../components/sections/GallerySection/GallerySection";

const Gallery = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section className="gallerySection">
          <Container>
            <h2>Gallery</h2>
          </Container>
          <GallerySection />
        </section>
      </div>
    </Header>
  );
};

export default Gallery;