import styles from "./HeroStyles.module.css";
import heroImg from "../../../assets/images/hero-img.png";
import themeIcon from "../../../assets/images/sun.svg";
import linkedin from "../../../assets/images/linkedin-light.svg";
import github from "../../../assets/images/github-light.svg";
import cv from "../../../assets/roshanress.pdf";
function Hero() {
  return (
    <section id="hero" className={styles.conatiner}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of roshan"
        />
        <img className={styles.colorMode} src={themeIcon} alt="color mode icon" />
      </div>
      <div className={styles.info}>
        <h1>Roshan
            Kumar
            Sharma
        </h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href="https://www.github.com" target="_blank">
            <img src={github} alt="github icon" /></a>
            <a href="https://www.linkedin.com" target="_blank">
            <img src={linkedin} alt="github icon" /></a>
        </span>
        <p>With a passion for developing modern react web apps for commercial business</p>
        <a href={cv} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
