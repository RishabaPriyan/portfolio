import { FaCode, FaServer, FaDatabase } from 'react-icons/fa'
import skills from '../resources/images/skills.svg'

function MySkills() {
	return (
		<section className="sectionContainer">
			<div className="header">My Skills</div>
			<div className="skillsImageContainer">
				<img src={skills} alt="Guy holding skill" />
			</div>
			<div className="eachSkillContainer">
				<div className="skillIcon">
					<FaCode />
				</div>
				<h2 className="skillHeader">Frontend Development</h2>
				<p className="skillDescription">
					Working Knowledge of Javascript, HTML, CSS, TailwindCSS
				</p>
			</div>
			<div className="eachSkillContainer">
				<div className="skillIcon">
					<FaServer />
				</div>
				<h2 className="skillHeader">Frontend Development</h2>
				<p className="skillDescription">
					Working Knowledge of Javascript, HTML, CSS, TailwindCSS
				</p>
			</div>
			<div className="eachSkillContainer">
				<div className="skillIcon">
					<FaDatabase />
				</div>
				<h2 className="skillHeader">Frontend Development</h2>
				<p className="skillDescription">
					Working Knowledge of Javascript, HTML, CSS, TailwindCSS
				</p>
			</div>
		</section>
	)
}

export default MySkills
