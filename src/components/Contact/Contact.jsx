import { useForm } from 'react-hook-form'
import styles from './Contact.module.scss'


const Contact = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			name: '',
			email: '',
			issues: '',
		},
	})
	const onSubmit = (data) => console.log(data)

	return (
		<section className={styles.contact}>
			<div className="titleInformation">
				<h2>Contact me</h2>
				<p className={styles.subtitle}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
					labore nisium illum cupiditate reiciendis a numquam
				</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.namePerson}>
					<input
						placeholder="Your name"
						{...register('name', { required: true, maxLength: 15 })}
					/>
					{errors.name && <span>This field is required</span>}
					
					<input
						placeholder="Your email"
						type="email"
						{...register('email', { required: true, maxLength: 15 })}
					/>
					{errors.email && <span>This field is required</span>}
				</div>

				<textarea {...register('issues')} placeholder="About you" />
				{errors.issues && <span>This field is required</span>}
				<button className={styles.button}>Send message</button>
			</form>
		</section>
	)
}

export default Contact
