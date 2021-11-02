import styles from './AboutSection.module.sass';
import {Container} from "reactstrap";
// import {}

interface IAboutSection {
  header?: boolean;
  text?: string;
  leftPositionText?: boolean;
}

const AboutSection = ({ header, text, leftPositionText }: IAboutSection) => {
  return (
    <section className={styles.AboutSection}>
      <Container>
        {header ? <h2>Biography</h2> : null}
        <div className={styles.contentWrapper}>
          <div style={{ order: leftPositionText ? 0 : 1 }} className={styles.contentText}>
            {text ? <p>{text}</p> : null}
          </div>
          <div className="imageContent">
            <img src="" alt=""/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;