import houseMarketPlace from '../resources/images/House Market Place/HouseMarketPlaceFinalMockUp.png'
import gitHubFinder from '../resources/images/GitHub Finder/GitHubFinderFinalMockup.png'
import ticketSystem from '../resources/images/TicketSystem/TicketSystemFinalMockup.png'
import ReactTooltip from 'react-tooltip'
import { FaInfoCircle as FaInfo } from 'react-icons/fa'
import {
	SiMongodb,
	SiExpress,
	SiReact,
	SiNodedotjs,
	SiTailwindcss,
	SiGithub,
	SiFirebase,
	SiBootstrap,
} from 'react-icons/si'

function MyWorks() {
	return (
		<div className="myWorksContainer">
			<div className="sectionHeader" id="myWorks">
				<span className="headerDecoration">Fea</span>tured Projects
			</div>
			<div className="eachProjectContainer">
				<div className=" marginProjectContainer">
					<div className="headingAndDescContainer">
						<h2 className="projectHeader">
							<a
								href="https://rishabsupportdesk.herokuapp.com/"
								target={'_blank'}
								rel="noreferrer"
								data-tip="click to visit website"
								data-for="odd"
							>
								Ticket System
								<FaInfo className="infoButton" />
							</a>
						</h2>
						<p className="projectDescription">
							This is a website where registered users, raise tickets regarding
							specific products.The website is made using MERN Stack.
							<ul className="stackIconsList">
								<li>
									<SiMongodb />
								</li>
								<li>
									<SiExpress />
								</li>
								<li>
									<SiReact />
								</li>
								<li>
									<SiNodedotjs />
								</li>
							</ul>
						</p>
					</div>
					<div className="numberAndMockupContainer">
						<div>
							<span className="projectNumberIndicator">1</span>
						</div>

						<div className="projectImageMockup ">
							<img src={ticketSystem} alt="Project showcase" />
						</div>
					</div>
				</div>
			</div>
			<div className=" eachProjectContainer even">
				<div className=" marginProjectContainer">
					<div className="headingAndDescContainer ">
						<h2 className="projectHeader">
							<a
								href="https://house-market-place-sepia.vercel.app/"
								target={'_blank'}
								rel="noreferrer"
								data-tip="click to visit website"
								data-for="even"
							>
								House Market Place
								<FaInfo className="infoButton" />
							</a>
						</h2>
						<p className="projectDescription">
							This is a website where registered users can share listings for
							either rent or sale. The website is made using ReactJs for
							FrontEnd and Google Firestore for backend.
							<ul className="stackIconsList">
								<li>
									<SiFirebase />
								</li>
								<li>
									<SiExpress />
								</li>
								<li>
									<SiReact />
								</li>
								<li>
									<SiNodedotjs />
								</li>
								<li>
									<SiBootstrap />
								</li>
							</ul>
						</p>
					</div>
					<div className="numberAndMockupContainer">
						<div>
							<span className="projectNumberIndicator">2</span>
						</div>

						<div className="projectImageMockup ">
							<img src={houseMarketPlace} alt="Project showcase" />
						</div>
					</div>
				</div>
			</div>
			<div className="eachProjectContainer">
				<div className="marginProjectContainer ">
					<div className="headingAndDescContainer">
						<h2 className="projectHeader">
							<a
								href="https://github-finder-swart-one.vercel.app/"
								target={'_blank'}
								rel="noreferrer"
								data-tip="click to visit website"
								data-for="odd"
							>
								GitHub Profile Finder
								<FaInfo className="infoButton" />
							</a>
						</h2>
						<p className="projectDescription">
							This is a website where anyone can search and view github profiles
							and other related information .The website is made using
							ReactJs,TailwindCSS and DaisyUi for FrontEnd and GitHub API.
							<ul className="stackIconsList">
								<li>
									<SiGithub />
								</li>
								<li>
									<SiExpress />
								</li>
								<li>
									<SiReact />
								</li>
								<li>
									<SiNodedotjs />
								</li>
								<li>
									<SiTailwindcss />
								</li>
							</ul>
						</p>
					</div>
					<div className="numberAndMockupContainer">
						<div>
							<span className="projectNumberIndicator">3</span>
						</div>

						<div className="projectImageMockup ">
							<img src={gitHubFinder} alt="Project showcase" />
						</div>
					</div>
				</div>
			</div>
			<ReactTooltip
				id="odd"
				type="info"
				textColor="#fbfbfc"
				backgroundColor="#350b6f"
			/>
			<ReactTooltip
				id="even"
				type="info"
				textColor="#350b6f"
				backgroundColor="#fbfbfc"
			/>
		</div>
	)
}

export default MyWorks
