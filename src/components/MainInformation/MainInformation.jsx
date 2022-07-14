import styles from './MainInformation.module.scss'
import { motion } from 'framer-motion'

import myPhoto from '../../assets/images/myPhoto.jpg'
import myPhoto200 from '../../assets/images/Yura_Didenko_jz6tr3_c_scale,w_200.jpg'
import myPhoto399 from '../../assets/images/Yura_Didenko_jz6tr3_c_scale,w_399.jpg'
import myPhoto550 from '../../assets/images/Yura_Didenko_jz6tr3_c_scale,w_550.jpg'
import myPhoto671 from '../../assets/images/Yura_Didenko_jz6tr3_c_scale,w_671.jpg'
import myPhoto787 from '../../assets/images/Yura_Didenko_jz6tr3_c_scale,w_787.jpg'
import myPhoto894 from '../../assets/images/Yura_Didenko_jz6tr3_c_scale,w_894.jpg'
import myPhoto961 from '../../assets/images/Yura_Didenko_jz6tr3_c_scale,w_961.jpg'

const MainInformation = () => {
	return (
		<section className={styles.mainInformation}>
			<motion.div
				whileInView={{ x: [-10, 0], opacity: [0, 1] }}
				transition={{ duration: 0.7 }}
				className={styles.information}
			>
				Hi &#128075;, <br />
				My name is Yurii.
				<br /> I am Front-End Developer
			</motion.div>
			<motion.div
				whileInView={{ x: [10, 0], opacity: [0, 1] }}
				transition={{ duration: 0.7 }}
				className={styles.userIcon}
			>
				<img
					width="350px"
					height="350px"
					srcSet={`
						${myPhoto200} 200w,
						${myPhoto399} 399w,
						${myPhoto550} 550w,
						${myPhoto671} 671w,
						${myPhoto787} 787w,
						${myPhoto894} 894w,
						${myPhoto961} 961w,
						`}
					src={myPhoto}
					alt="myPhoto"
				/>
			</motion.div>
		</section>
	)
}

export default MainInformation
