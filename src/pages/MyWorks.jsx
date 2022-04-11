import houseMarketPlace from '../resources/images/House Market Place/HouseMarketPlaceFinalMockUp.png'
import gitHubFinder from '../resources/images/GitHub Finder/GitHubFinderFinalMockup.png'
import ticketSystem from '../resources/images/TicketSystem/TicketSystemFinalMockup.png'
function MyWorks() {
	return (
		<div className="myWorksContainer">
			<div className="header">Featured Projects</div>
			<div className="eachProjectContainer">
				<h2 className="projectHeader">Ticket System</h2>
				<p className="projectDescription">
					This is a website where registered users raise tickets regarding
					specific products.The website is made using MERN Stack.
				</p>
				<p className="projectNumberIndicator">1</p>
				<div className="projectImageMockup">
					<img src={ticketSystem} alt="Project showcase" />
				</div>
			</div>
			<div className="eachProjectContainer">
				<h2 className="projectHeader">House Market Place</h2>
				<p className="projectDescription">
					This is a website where registered users can share listings for either
					rent or sale. The website is made using ReactJs for FrontEnd and
					Google Firestore for backend.
				</p>
				<p className="projectNumberIndicator">2</p>
				<div className="projectImageMockup">
					<img src={houseMarketPlace} alt="Project showcase" />
				</div>
			</div>
			<div className="eachProjectContainer">
				<h2 className="projectHeader">GitHub Profile Finder</h2>
				<p className="projectDescription">
					This is a website where anyone can search and view github profiles and
					other related information .The website is made using
					ReactJs,TailwindCSS and DaisyUi for FrontEnd and GitHub API.
				</p>
				<p className="projectNumberIndicator">3</p>
				<div className="projectImageMockup">
					<img src={gitHubFinder} alt="Project showcase" />
				</div>
			</div>
		</div>
	)
}

export default MyWorks
