import mailme from '../resources/images/Email.svg'
import { FaPaperPlane } from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactMe() {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE_ID',
				form.current,
				'YOUR_PUBLIC_KEY'
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
	}
	return (
		<section className="contactMesectionContainer">
			<h2 className="Header" id="contactMe">
				Contact
			</h2>
			<div className="contactMeContainer grid">
				<div className="mailImageContainer grid-column6">
					<img src={mailme} alt="Man with mail in hand" />
				</div>
				<div className="grid-column1"></div>
				<div className="contactFormContainer grid-column5">
					<form className="form-control" ref={form} onSubmit={sendEmail}>
						<div>
							<h2 className="formHeader">Send a message</h2>
						</div>
						<div className="formDiv">
							<div>
								<input
									type="text"
									name="user_name"
									required
									placeholder="Full Name *"
								/>
							</div>
							<div>
								<input
									type="text"
									name="user_email"
									required
									placeholder="Email *"
								/>
							</div>
							<div className="formDivMessage">
								<label htmlFor="message">Your message here</label>
							</div>
							<div>
								<textarea name="message" id="message" required />
							</div>
							<div className="submitButton">
								<button>
									Send
									<FaPaperPlane />
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactMe
