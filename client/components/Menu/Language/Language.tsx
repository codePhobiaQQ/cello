import Arrow from "../../svg/arrow";
import styles from "./Language.module.sass";
import {useState} from "react";
import { motion } from "framer-motion";

const Language = () => {
  const [isLanguageActive, setLanguageActive] = useState<boolean>(false);
  const [whatLanguageActive, setWhatLanguageActive] = useState<number>(0);
  const languages = ['RU', 'EN', 'GM'];

  return (
    <div
      className={ isLanguageActive ? "language active" : "language" }
      onClick={() => setLanguageActive(!isLanguageActive)}
    >
      <span>{languages[whatLanguageActive]}</span>
      <Arrow />

        <motion.ul
          className={"languageList"}
          initial={{
            opacity: 0,
            pointerEvents: "inherit"
          }}
          animate={{
            opacity: !isLanguageActive ? 0 : 1,
            pointerEvents: !isLanguageActive ? "none" : "inherit"
          }}
        >
          {languages.map((language, index) => (
            <li key={index + "language"} onClick={() => setWhatLanguageActive(index)}>{language}</li>
          ))}
        </motion.ul>
    </div>
  );
};

export default Language;