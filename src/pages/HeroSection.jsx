import { FaHandPointDown } from 'react-icons/fa'
import LandingPageImage from '../resources/images/Landing.svg'
import TypeWriter from 'typewriter-effect'
function LandingPage() {
	return (
		<div className=" heroSectionContainer grid " id="heroSection">
			<div className=" grid-column5 grid-column12-mobile grid-column5-laptop">
				<div className="heroSection">
					<div className="heroSectionTagLine">
						<p>
							<TypeWriter
								options={{
									strings: ['Transforming ideas into enticing websites'],
									cursor: '_',
									autoStart: true,
									loop: true,
									pauseFor: 2500,
									deleteSpeed: 25,
									delay: 100,
								}}
							/>
						</p>
					</div>
					<div className="greetPhraseContainer">
						<FaHandPointDown />
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
			</div>
			<div className=" grid-column1 grid-column2-laptop"></div>
			<div className="landingPageImageContainer grid-column6 grid-column5-laptop">
				<img
					className="landingPageImage"
					src={LandingPageImage}
					alt="Guy behind a laptop"
				/>
			</div>
		</div>
	)
}

export default LandingPage
