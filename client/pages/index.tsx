import { useState } from "react";
import MainSection from "../components/sections/MainSection/MainSection";

export default function Home() {
  const [authVisible, setAuthVisible] = useState(false);
  return (
    <>
      <MainSection />
      <MainSection />
      <MainSection />
    </>
  );
}
