import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link'
import { useEffect } from 'react'
function Header() {
	useEffect(() => {
		const headerElement = document.querySelector('.otherHalf')

		window.onscroll = function () {
			var top = window.scrollY
			console.log(top)
			if (top > 870) {
				headerElement.classList.add('transformFullBackground')
				headerElement.classList.remove('transformFullBackgroundWhite')
			} else {
				headerElement.classList.remove('transformFullBackground')
				headerElement.classList.add('transformFullBackgroundWhite')
			}
		}
	})

	return (
		<>
			<div className="grid topMostContainer">
				<div className="headerContainer grid grid-column9 grid-column12-mobile">
					<div className="logoTextContainer grid-column3 grid-column10-mobile grid-column4-tablet grid-column3-laptop ">
						<h3 className="logoText">
							<p>
								<Link to="/#heroSection">Rishaba Priyan</Link>
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
									<Link to="/#about-me">About Me</Link>
								</li>
								<li>
									<Link to="/#contactMe">Contact</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="navIconsConainer grid-column4 ">
						<div></div>

						<div></div>
						<div className="navFlexBox">
							<a
								href="https://github.com/RishabaPriyan"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub />
							</a>

							<a
								href="https://www.linkedin.com/in/rishaba-priyan-a31a84123/"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</div>
					</div>
				</div>
				<div className="grid-column3 otherHalf"></div>
			</div>
		</>
	)
}

export default Header
