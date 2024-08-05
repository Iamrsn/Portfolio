import styles from "./HeroStyles.module.css";
import heroImg from "../../../assets/images/hero-img.png";
import sun from "../../../assets/images/sun.svg";
import moon from "../../../assets/images/moon.svg";
import linkedinLight from "../../../assets/images/linkedin-light.svg";
import linkedinDark from "../../../assets/images/linkedin-dark.svg";
import githubLight from "../../../assets/images/github-light.svg";
import githubDark from "../../../assets/images/github-dark.svg";
import cv from "../../../assets/RoshanMainResumeNew.pdf";
import { useTheme } from "../../../common/ThemeContext";
function Hero() {
  const{theme,toggleTheme}=useTheme();
  const themeIcon=theme==='light' ? sun :moon;
  const githubIcon=theme==='light' ? githubLight :githubDark;
  const linkedinIcon=theme==='light' ? linkedinLight :linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of roshan"
        />
        <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>Roshan
            Kumar
            Sharma
        </h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href="https://www.github.com" target="_blank">
            <img src={githubIcon} alt="github icon" /></a>
            <a href="https://www.linkedin.com" target="_blank">
            <img src={linkedinIcon} alt="github icon" /></a>
        </span>
        <p className={styles.description}>Enthusiastic entry-level Web Developer proficient in HTML5, CSS3, JavaScript, and modern frameworks like
        React.js. Familiar with C, Java, JavaScript and Networking.
        Eager to leverage trending technologies to create dynamic web applications.Hardworking, highly motivated
        professional eager to lend combined knowledge and skills to enhance performance.</p>
        <a href={cv} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
