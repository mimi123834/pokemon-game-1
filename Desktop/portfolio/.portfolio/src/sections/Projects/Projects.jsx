import styles from './ProjectsStyles.module.css';
import pokemon from '../../assets/pokemonimg.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pokemon}
          link="https://github.com/mimi123834/pokemon-game-1.git"
          h3="Pokemon Game"
          p="Game Website"
        />
      </div>
    </section>
  );
}

export default Projects;