import { useState } from "react";
import MainSection from "../components/sections/MainSection/MainSection";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import Menu from "../components/Menu/Menu";
import Header from "../hoc/Header";
import { useInView } from 'react-intersection-observer';
import photo1 from "./../public/assets/img/AboutSection/about1.jpg"
import photo2 from "./../public/assets/img/AboutSection/about2.jpeg"
import photo3 from "./../public/assets/img/AboutSection/about3.jpeg"

export default function Home() {

  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);


  const AboutText = [
    "We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one)\n" +
    "              is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\n" +
    "              The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long. It still\n" +
    "              came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long.",
    "We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one)\n" +
    "              is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\n" +
    "              The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long. It still\n" +
    "              came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long.",
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
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <MainSection/>
        <AboutSection leftPositionText={true} photo={photo1} header={true} text={AboutText[0]} />
        <AboutSection photo={photo2} text={AboutText[1]} />
        <AboutSection leftPositionText={true} photo={photo3} text={AboutText[2]} />
      </div>
    </Header>
  );
}
