import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";

import news from "../../assets/news.png";
import store from "../../assets/store.jpg";
import music from "../../assets/music.jpg";
import travel from "../../assets/flight.jpg";

import movies from "../../assets/movies.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={news}
          link="https://quiet-trifle-730051.netlify.app/"
          h3="News And Blogs"
          p="Daily Digest"
        />
        <ProjectCard
          src={store}
          link="https://reliable-kangaroo-b7993e.netlify.app/"
          h3="E-Commerce Store"
          p="ShopEase App"
        />

        <ProjectCard
          src={music}
          link="https://prismatic-heliotrope-b41322.netlify.app/"
          h3="Tune In"
          p="Discover Your Vibe"
        />
        <ProjectCard
          src={travel}
          link="https://superlative-sopapillas-c72cbe.netlify.app/"
          h3="Journey Mate"
          p="WanderGo"
        />
        <ProjectCard
          src={freshBurger}
          link="https://gleaming-froyo-8b6c0f.netlify.app/"
          h3="Meals Online"
          p="Food Express"
        />
        <ProjectCard
          src={movies}
          link="https://astonishing-meringue-c336ce.netlify.app/"
          h3="Movie Night"
          p="CineFlix App"
        />
      </div>
    </section>
  );
}

export default Projects;
