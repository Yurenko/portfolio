import { useForm } from 'react-hook-form'
import styles from './Contact.module.scss'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../config/constans'

const Contact = () => {
	const {
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			text: '',
		},
	})

	const onSubmit = (e) => {
		e.preventDefault()
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
			() => {
				Swal.fire({
					icon: 'success',
					title: 'Message Sent Successfully',
				})
			},
			(error) => {
				console.log(error.text)
				Swal.fire({
					icon: 'error',
					title: 'Ooops, something went wrong',
					text: error.text,
				})
			}
		)
		e.target.reset()
	}

	return (
		<section className={styles.contact}>
			<div className="titleInformation">
				<h1>Contact me</h1>
				<p className={styles.subtitle}>
					Thank you for your interest for me! <br /> If you have any questions
					or would like to know more about me, feel free to contact me. I am
					very approachable!
				</p>
			</div>
			<form onSubmit={onSubmit} className={styles.form}>
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

				<textarea {...register('text')} placeholder="Write me" />
				{errors.issues && <span>This field is required</span>}
				<button className={styles.button}>Send message</button>
			</form>
		</section>
	)
}

export default Contact
