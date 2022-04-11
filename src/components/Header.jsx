import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
function Header() {
	return (
		<>
			<div className="headerContainer">
				<h3 className="logoText">
					<p>Rishaba Priyan</p>
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
					<FaGithub />
					<FaLinkedinIn />
				</div>
			</div>
		</>
	)
}

export default Header
