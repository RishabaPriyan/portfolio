import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
function Header() {
	return (
		<>
			<div className="grid ">
				<div className="headerContainer grid grid-column9">
					<div className="logoTextContainer grid-column3 grid-column10-mobile grid-column4-tablet grid-column3-laptop ">
						<h3 className="logoText">
							<p>
								<a href="#heroSection">Rishaba Priyan</a>
							</p>
						</h3>
					</div>
					<div className="navBarContainer grid-column5  grid-column8-tablet grid-column5-laptop ">
						<nav>
							<ul className="navBar">
								<li>
									<a href="#myWorks">Works</a>
								</li>
								<li>
									<a href="#mySkills">Skills</a>
								</li>
								<li>
									<a href="#aboutMe">About Me</a>
								</li>
								<li>
									<a href="#contactMe">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="navIconsConainer grid-column4 ">
						<div></div>

						<div></div>
						<div className="navFlexBox">
							<a href="https://github.com/RishabaPriyan" target="_blank">
								<FaGithub />
							</a>

							<a
								href="https://www.linkedin.com/in/rishaba-priyan-a31a84123/"
								target="_blank"
							>
								<FaLinkedinIn />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
