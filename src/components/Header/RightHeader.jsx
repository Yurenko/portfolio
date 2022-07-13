import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}

const RightHeader = () => {
	return (
		<>
			<motion.li variants={item}>
				<NavLink to="/">Home</NavLink>
			</motion.li>
			<motion.li variants={item}>
				<NavLink to="/about">About</NavLink>
			</motion.li>
			<motion.li variants={item}>
				<NavLink to="/stack">Tech Stack</NavLink>
			</motion.li>
			<motion.li variants={item}>
				<NavLink to="/projects">Projects</NavLink>
			</motion.li>
			<motion.li variants={item} i>
				<NavLink to="/contact">Contact</NavLink>
			</motion.li>
			<motion.li variants={item}>
				<a
					href="https://github.com/Yurenko"
					className={styles.icon}
					target="_blank"
					rel="noreferrer"
				>
					<BsGithub size={30} />
				</a>
			</motion.li>
			<motion.li variants={item} li>
				<a
					href="https://www.linkedin.com/in/yura-didenko-7598b421b/"
					className={styles.icon}
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin size={30} />
				</a>
			</motion.li>
		</>
	)
}

export default RightHeader
