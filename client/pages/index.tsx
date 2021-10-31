import { useState } from "react";
import MainSection from "../components/sections/MainSection/MainSection";
import AboutSection from "../components/sections/AboutSection/AboutSection";
// @ts-ignore
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

export default function Home() {
  const [authVisible, setAuthVisible] = useState(false);
  return (
    <>
      <CustomCursor
        targets={['.link', '.your-css-selector']}
        customClass='custom-cursor'
        dimensions={30}
        fill='#FFF'
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      />
      <MainSection />
      <AboutSection />
      <AboutSection />
      <AboutSection />
    </>
  );
}
