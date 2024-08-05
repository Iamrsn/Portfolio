import styles from "./ProjectsStyles.module.css";
import Digital from "../../../assets/images/images.jpeg";
import Number from "../../../assets/images/Number.png";
import Weather from "../../../assets/images/Weather.avif";
import ProjectCard from "../../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Digital}
          link="https://github.com/Iamrsn/signature"
          h3="Digital Signature"
          p=" Implement a digital signature feature on a web page using HTML for structure, CSS for design and layout of the
          signature pad, and JavaScript for interactivity and functionality such as capturing, saving, and possibly verifying
          the signature input."
        />
        <ProjectCard
          src={Number}
          link="https://github.com/Iamrsn/Number_Guessing_Game"
          h3="Number Guessing Game "
          p=" This project involves creating a Number Guessing Game using HTML, CSS, and JavaScript. The game challenges
          players to guess a randomly generated number within a specified range"
        />
        <ProjectCard
          src={Weather}
          link="https://github.com/Iamrsn/Weather_App_React"
          h3="Weather-App"
          p=" A weather app using React fetches and displays weather data from an API. It includes features like
          location-based search, current weather conditions, and a forecast, all styled for a user-friendly experience"
        />
      </div>
    </section>
  );
}

export default Projects;
