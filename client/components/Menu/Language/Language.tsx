import Arrow from "../../svg/arrow";
import styles from "./Language.module.sass";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import { setLanguage } from "../../../redux/slices/AppSlice"
import {useDispatch} from "react-redux";

const Language = () => {
  const [isLanguageActive, setLanguageActive] = useState<boolean>(false);
  const [whatLanguageActive, setWhatLanguageActive] = useState<number>(0);
  const dispatch = useDispatch();
  const languages = ['RU', 'EN', 'GM'];

  const clickLanguageHandler = (index: number) => {
    setWhatLanguageActive(index);
    dispatch(setLanguage(languages[index]))
  }

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
            <li key={index + "language"} onClick={() => clickLanguageHandler(index)}>{language}</li>
          ))}
        </motion.ul>
    </div>
  );
};

export default Language;