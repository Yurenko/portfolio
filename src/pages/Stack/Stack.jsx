import styles from './Stack.module.scss'
import { motion } from 'framer-motion'
import data from '../../data.json'
import { container, item } from '../../config/motionParams'

const Stack = () => {
	return (
		<section className={styles.stack}>
			<div className="titleInformation">
				<h1>My Tech Stack</h1>
				<p> Technologies I’ve been working with recently</p>
			</div>
			<motion.ul
				className={styles.icons}
				variants={container}
				initial="hidden"
				whileInView="visible"
			>
				{data.stack.map((el, index) => (
					<motion.li key={index} className="item" variants={item}>
						<svg width="80" height="80" key={index}>
							<use href={`./sprite.svg#${el}`} />
						</svg>
					</motion.li>
				))}
			</motion.ul>
		</section>
	)
}

export default Stack
