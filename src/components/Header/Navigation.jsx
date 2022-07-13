import * as React from 'react'
import { motion } from 'framer-motion'
import RightHeader from './RightHeader'
import styles from './Header.module.scss'

const container = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
}

export const Navigation = () => (
	<motion.ul
		variants={container}
		initial="hidden"
		animate="visible"
		className={styles.burger}
	>
		<RightHeader />
	</motion.ul>
)
