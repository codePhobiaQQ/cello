import {useState} from "react";
import Header from "../hoc/Header";
import Menu from "../components/Menu/Menu";

const Concerts = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section>
          Concerts
        </section>
      </div>
    </Header>
  );
};

export default Concerts;