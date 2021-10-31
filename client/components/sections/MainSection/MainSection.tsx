import styles from './MainSection.module.sass';
import bg from  '../../../public/assets/img/FirstSection.jpg';

const MainSection = () => {
  return (
    <section className={styles.MainSection}>
      <img src={bg.src} alt="bg" height={100}/>
    </section>
  );
};

export default MainSection;