import styles from './Educations.module.scss'

const Educations = ({ education }) => {
	return (
		<div className={styles.cardBlock}>
			<div className={styles.content}>
				<span className={styles.name}>{education.name}</span>
				<span className={styles.speciality}>{education.speciality}</span>
			</div>
			<div className={styles.date}>
				<div className={styles.employment}>{education.time}</div>
				<div className={styles.timePeriod}>{education.period}</div>
			</div>
		</div>
	)
}

export default Educations
