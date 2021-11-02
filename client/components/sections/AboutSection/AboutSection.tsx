import styles from './AboutSection.module.sass';
import {Container} from "reactstrap";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import {motion, useAnimation} from "framer-motion";

interface IAboutSection {
  header?: boolean;
  text?: string;
  leftPositionText?: boolean;
  photo?: any;
}

const AboutSection = ({ header, text, leftPositionText, photo }: IAboutSection) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  })

  const wrapperVariant = { hidden: {}, visible: {transition: { staggerChildren: 0.7, }} }
  const textVariantLeft = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7
      }
    },
  }
  const textVariantRight = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7
      }
    },
  }
  const photoVariant = {
    hidden: {
      scale: 0.97,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      }
    },
  }

  return (
    <section ref={ref} className={styles.AboutSection}>
      <Container className={styles.container}>
        {header ? <h2>Biography</h2> : null}
        <motion.div
          className={styles.contentWrapper}
          variants={wrapperVariant}
          initial="hidden"
          animate={inView ? "visible" : ""}
        >
          <motion.div
            style={{ order: leftPositionText ? 0 : 1 }}
            className={styles.contentText}
            variants={leftPositionText ? textVariantLeft : textVariantRight }
          >
            {text ? <p>{text}</p> : null}
          </motion.div>

          <motion.div
            className={styles.imageContent}
            variants={photoVariant}
            style={{
              margin: !leftPositionText ? "0 auto 0 0" : "",
            }}
          >
            {photo ? <img src={photo.src} alt="photo"/> : null}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;