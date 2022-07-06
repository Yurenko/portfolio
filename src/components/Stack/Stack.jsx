import styles from './Stack.module.scss'

const Stack = () => {
	const stackMy = [
		'react',
		'redux',
		'js',
		'typescript',
		'css',
		'api',
		'git',
		'github',
		'vscode',
		'figma',
		'photoshop',
		'sass',
	]
	return (
		<div className={styles.stack}>
			<h1>My Tech Stack</h1>
			<p> Technologies I’ve been working with recently</p>
			<div className={styles.icons}>
				{stackMy.map((el, index) => (
					<svg width="120" height="120" key={index}>
						<use href={`./sprite.svg#${el}`} />
					</svg>
				))}
			</div>
		</div>
	)
}

export default Stack
