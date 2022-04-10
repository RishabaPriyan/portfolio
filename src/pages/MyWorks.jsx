import finalMockUp from '../resources/images/House Market Place/FinalMockUp.svg'
function MyWorks() {
	return (
		<div className="myWorksContainer">
			<div className="header">Featured Projects</div>
			<div className="eachProjectContainer">
				<h2 className="projectHeader">House Market Place</h2>
				<p className="projectDescription">
					This is a website where registered users can share listings for either
					rent or sale. The website is made using ReactJs for FrontEnd and
					Google Firestore for backend.
				</p>
				<p className="projectNumberIndicator">1</p>
				<div className="projectImageMockup">
					<img src={finalMockUp} alt="Project showcase" />
				</div>
			</div>
		</div>
	)
}

export default MyWorks
