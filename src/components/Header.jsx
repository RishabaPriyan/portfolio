import React from 'react'
import gitHubIcon from '../resources/icons/github.svg'
import LinkedInIcon from '../resources/icons/linkedIn.svg'
function Header() {
	return (
		<>
			<div className="Headercontainer">
				<h3 className="logoText">
					<p>Rishaba</p>
					<p>Priyan</p>
				</h3>
				<nav>
					<ul className="navBar">
						<li>Works</li>
						<li>Skills</li>
						<li>About Me</li>
						<li>Contact</li>
					</ul>
				</nav>
				<div className="navIcons">
					<img src={gitHubIcon} alt="GitHub" />
					<img src={LinkedInIcon} alt="LinkedIn" />
				</div>
			</div>
		</>
	)
}

export default Header
