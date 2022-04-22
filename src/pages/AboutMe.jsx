import React from 'react'
import ProfilePic from '../resources/images/ProfilePic.jpeg'
import ReactTooltip from 'react-tooltip'

function AboutMe() {
	return (
		<div className="aboutMeContainer grid " id="about-me">
			<div className="firstRow grid-column12 grid">
				<div className="textContainer grid-column5">
					<h2 className="aboutMeHeader">
						<span className="headerDecoration invert">My</span> Story
					</h2>
					<section className="aboutMeDescription">
						<p>
							Hi, Rishaba Priyan here. I'm 25-years-old and from Tamil Nadu,
							India. I have 16 months of experience developing web applications.{' '}
						</p>
						<p>
							I love designing and coding web applications. I enjoy learning new
							stuff and try to achieve them through hard work (and teamwork).
							Maybe someday even with you...
						</p>
					</section>
				</div>
				<div className="grid-column1 empty-grid"></div>
				<div className="profilePicImageContainer grid-column6">
					<img
						className="profilePicImage"
						src={ProfilePic}
						alt="Rishab Profile Pic"
					/>
				</div>
				<div className="grid-column1 empty-grid"></div>
			</div>
			<div className="secondRow grid-column12 grid">
				<div className="textContainer grid-column4 grid-column12-mobile grid-column12-tablet grid-column12-laptop">
					<h2 className="aboutMeHeader">
						<span className="headerDecoration invert">My</span> Interests
					</h2>
					<section className="grid-column12 grid interestsSection grid-column12-laptop">
						<span className="grid-column6 grid-column12-mobile grid-column6-tablet grid-column6-laptop">
							<ul>
								<li>Web Design </li>
								<li>Art</li>
								<li>Illustrated Comics</li>
							</ul>
						</span>
						<span className="grid-column6 grid-column12-mobile grid-column6-tablet grid-column6-laptop">
							<ul>
								<li>Chess </li>
								<li>Books</li>
								<li>Mobile gaming</li>
							</ul>
						</span>
					</section>
				</div>
				<div className="grid-column2 empty-grid"></div>
				<div className="resumeDownloadLinkContainer grid-column4 grid-column12-mobile grid-column6-tablet">
					<a
						href="https://drive.google.com/file/d/1l-68ZZHHWD3jA5duH8t0VZf59lLRJiaY/view?usp=sharing"
						className="resumeDownloadLink"
						target={'_blank'}
						rel="noreferrer"
						data-tip="a drive pdf link"
					>
						Click here for my Resume
					</a>
				</div>
				<div className="grid-column2 empty-grid"></div>
			</div>
			<ReactTooltip type="info" textColor="#350b6f" backgroundColor="#fbfbfc" />
		</div>
	)
}

export default AboutMe
