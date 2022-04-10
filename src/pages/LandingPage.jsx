import React from 'react'
import handCursor from '../resources/icons/HandCursor.svg'
import LandingPageImage from '../resources/images/Landing.svg'
function LandingPage() {
	return (
		<div className="heroSectionContainer">
			<div className="heroSection">
				<div className="heroSectionTagLine">
					<p>Beautifully</p>
					<p>Crafted web</p>
					<p>Experiences</p>
				</div>
				<div className="greetPhraseContainer">
					<img src={handCursor} alt="Hand Down" />
					<p className="greetPhrase">Meet Rishaba Priyan</p>
				</div>
				<div className="callToAction">
					<svg
						width="40"
						height="100"
						viewBox="0 0 40 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="40" height="100" rx="15" fill="white" />
						<circle
							cx="19.5"
							cy="79.5"
							r="12.5"
							fill="#350B6F"
							className="circle"
						/>
					</svg>
				</div>
			</div>
			<div className="landingPageImageContainer">
				<img
					className="landingPageImage"
					src={LandingPageImage}
					alt="guy sitting before a laptop"
				/>
			</div>
		</div>
	)
}

export default LandingPage
