import mailme from '../resources/images/Email.svg'
import { FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
function ContactMe() {
	const [formElements, setFormElements] = useState()

	const { name, email, message } = { formElements }
	return (
		<section className="sectionContainer">
			<h2 className="Header">Contact</h2>
			<div className="mailImageContainer">
				<img src={mailme} alt="Man with mail in hand" />
			</div>
			<div className="contactFormContainer">
				<form>
					<h2 className="formHeader">Send a message</h2>
					<input
						type="text"
						name="name"
						value={name}
						placeholder="Full Name *"
					/>
					<input type="text" name="email" value={email} placeholder="Email *" />
					<label htmlFor="message">Your Message Here</label>
					<textarea name="message" id="message" value={message} />
					<div className="submitButton">
						<button>
							Send
							<FaPaperPlane />
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default ContactMe
