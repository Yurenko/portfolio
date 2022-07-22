import { BsGithub } from 'react-icons/bs'
import { BsLink } from 'react-icons/bs'
import styles from './ProjectsCard.module.scss'
import { motion } from 'framer-motion'

const ProjectsCard = (project) => {
	const { name, img, information, stack, link, github } = project.project

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.7,
			}}
			className={styles.card}
		>
			<div className={styles.image}>
				<img src={img ? img : '/noimage.jpeg'} alt={name} />
			</div>
			<div className={styles.information}>
				<h2>{name}</h2>
				<p>{information}</p>
				<p className={styles.stack}>
					<b>Tech stack :</b> {stack}
				</p>
			</div>
			<div className={styles.links}>
				<a href={link} target="_blank" rel="noreferrer">
					<BsLink size={20} />
					<p> Live Previev</p>
				</a>
				<a href={github} target="_blank" rel="noreferrer">
					<BsGithub size={20} />
					<p>Viev Code</p>
				</a>
			</div>
		</motion.div>
	)
}

export default ProjectsCard
