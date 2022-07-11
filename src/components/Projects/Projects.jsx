import ProjectsCard from './ProjectsCard'
import styles from './Projects.module.scss'
import data from '../../data.json'

const Projects = () => {
	return (
		<section className={styles.projects}>
			<div className="sectionTitle">
				<h1>My Tech Stack</h1>
				<p> Technologies I’ve been working with recently</p>
			</div>
			<div className={styles.cards}>
				{data.projects.map((project) => (
					<ProjectsCard key={project.id} project={project} />
				))}
			</div>
		</section>
	)
}

export default Projects
