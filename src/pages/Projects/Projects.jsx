import ProjectsCard from './ProjectsCard'
import styles from './Projects.module.scss'
import data from '../../data.json'
import { motion } from 'framer-motion'

const Projects = () => {
	return (
		<section className={styles.projects}>
			<motion.div
				whileInView={{ x: [-10, 0], opacity: [0, 1] }}
				transition={{ duration: 0.7 }}
				className="titleInformation"
			>
				<h1>Projects</h1>
				<p>Things I’ve built so far</p>
			</motion.div>

			<div className={styles.cards}>
				{data.projects.map((project) => (
					<ProjectsCard key={project.id} project={project} />
				))}
			</div>
		</section>
	)
}

export default Projects
