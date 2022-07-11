import { BsGithub } from 'react-icons/bs'
import { BsLink } from 'react-icons/bs'
import styles from './ProjectsCard.module.scss'
import myPhoto from '../../assets/images/pexels.jpeg'
import myPhoto200 from '../../assets/images/pexels-alexandr-podvalny-1227513_ei5vzy_c_scale,w_200.jpg'
import myPhoto471 from '../../assets/images/pexels-alexandr-podvalny-1227513_ei5vzy_c_scale,w_471.jpg'
import myPhoto637 from '../../assets/images/pexels-alexandr-podvalny-1227513_ei5vzy_c_scale,w_637.jpg'
import myPhoto801 from '../../assets/images/pexels-alexandr-podvalny-1227513_ei5vzy_c_scale,w_801.jpg'
import myPhoto929 from '../../assets/images/pexels-alexandr-podvalny-1227513_ei5vzy_c_scale,w_929.jpg'
import myPhoto1025 from '../../assets/images/pexels-alexandr-podvalny-1227513_ei5vzy_c_scale,w_1025.jpg'
import myPhoto1142 from '../../assets/images/pexels-alexandr-podvalny-1227513_ei5vzy_c_scale,w_1142.jpg'
import myPhoto1296 from '../../assets/images/pexels-alexandr-podvalny-1227513_ei5vzy_c_scale,w_1296.jpg'
import myPhoto1336 from '../../assets/images/pexels-alexandr-podvalny-1227513_ei5vzy_c_scale,w_1336.jpg'

const ProjectsCard = (project) => {
	const { name, information, stack, link, github } = project.project

	return (
		<div className={styles.card}>
			<img
				srcSet={`
						${myPhoto200} 200w,
						${myPhoto471} 471w,
						${myPhoto637} 637w,
						${myPhoto801} 801w,
						${myPhoto929} 929w,
						${myPhoto1025} 1025w,
						${myPhoto1142} 1142w,
						${myPhoto1296} 1296w,
						${myPhoto1336} 1336w,
						`}
				src={myPhoto}
				alt="dscd"
			/>
			<div className={styles.information}>
				<h2>{name}</h2>
				<p>{information}</p>
				<p className={styles.stack}>Tech stack : {stack}</p>
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
			</div>
		</div>
	)
}

export default ProjectsCard
