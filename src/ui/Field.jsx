import styles from './form.module.scss'

const Field = (
	{ com, placeholder, error, type = 'text', style, ...rest },
	ref
) => {
	return (
		<div className={styles.field} style={style}>
			<label>
				<input ref={ref} type={type} {...rest} />
			</label>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
}

export default Field
