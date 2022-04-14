import React from 'react'
import ProfilePic from '../resources/images/ProfilePic.jpeg'

function AboutMe() {
	return (
		<div className="aboutMeContainer grid ">
			<div className="firstRow grid-column12 grid">
				<div className="textContainer grid-column4">
					<h2 className="Header">
						<span className="headerDecoration invert">My</span> Story
					</h2>
				</div>
				<div className="grid-column1"></div>
				<div className="profilePicImageContainer grid-column6">
					<img
						className="profilePicImage"
						src={ProfilePic}
						alt="Rishab Profile Pic"
					/>
				</div>
			</div>
			<div className="secondRow grid">
				<div className="textContainer"></div>
				<div></div>
				<div className="resumeDownloadLinkContainer">
					<button className="resumeDownloadLink"></button>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
