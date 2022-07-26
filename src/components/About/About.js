import data from '../../data.json'
import Educations from './Educations'

const About = () => {
	return (
		<section>
			<h2>About me</h2>
			<p>
				I am a Front End developer who is comfortable working with JavaScript,
				HTML/CSS. I have experience working with React, Redux, Redux, Redux
				Toolkit and TypeScript.
			</p>
			<h2>Education</h2>
			{data.educations.reverse().map((education) => (
				<Educations key={education.id} education={education} />
			))}
		</section>
	)
}

export default About
