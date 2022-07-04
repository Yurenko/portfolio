import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './Header.module.scss'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Header = () => {
	return (
		<div className={styles.header}>
			<Logo />

			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/">About</NavLink>
				</li>
				<li>
					<NavLink to="/">Tech Stack</NavLink>
				</li>
				<li>
					<NavLink to="/">Project</NavLink>
				</li>
				<li>
					<NavLink to="/">Contact</NavLink>
				</li>
				<li>
					<a href="https://github.com/Yurenko" className={styles.icon}>
						<BsGithub size={30} />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/yura-didenko-7598b421b/"
						className={styles.icon}
					>
						<BsLinkedin size={30} />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Header
