import { HashLink as Link } from 'react-router-hash-link'

function Footer() {
	return (
		<>
			<div className="grid ">
				<div className="headerContainer grid grid-column12">
					<div className="logoTextContainer grid-column3 grid-column10-mobile grid-column4-tablet grid-column3-laptop ">
						<h3 className="logoText">
							<p>
								<Link to="/">Rishaba Priyan</Link>
							</p>
						</h3>
					</div>
					<div className="navBarContainer grid-column5  grid-column8-tablet grid-column5-laptop ">
						<nav>
							<ul className="navBar">
								<li>
									<Link to="/#myWorks">Works</Link>
								</li>
								<li>
									<Link to="/#mySkills">Skills</Link>
								</li>
								<li>
									<Link to="/about-me">About Me</Link>
								</li>
								<li>
									<Link to="/#contactMe">Contact</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
