import { useState } from "react";
import MainSection from "../components/sections/MainSection/MainSection";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import Menu from "../components/Menu/Menu";
import Header from "../hoc/Header";
import { useInView } from 'react-intersection-observer';

export default function Home() {

  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);


  const AboutText = [
    "We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one)\n" +
    "              is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\n" +
    "              The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long. It still\n" +
    "              came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long.",
  ]

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <MainSection/>
        <AboutSection header={true} text={AboutText[0]} />
        <AboutSection />
      </div>
    </Header>
  );
}
