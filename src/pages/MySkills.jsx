import { FaCode, FaServer, FaDatabase } from 'react-icons/fa'
import skills from '../resources/images/skills.svg'

function MySkills() {
	return (
		<div className="mySkillsContainer">
			<div className="secHeader grid-column2" id="mySkills">
				<span className="headerDecoration">My </span>Skills
			</div>
			<section className="sectionContainer grid">
				<div></div>
				<div className="skillsImageContainer grid-column10 ">
					<img src={skills} alt="Guy holding skill" />
				</div>
				<div className="skillContainer grid-column12 grid">
					<div className="eachSkillContainer grid-column4">
						<div className="skillIcon">
							<FaCode />
						</div>
						<div>
							<h2 className="skillHeader">Frontend Development</h2>
						</div>
						<div>
							<p className="skillDescription">
								Working Knowledge of Javascript, HTML, CSS, TailwindCSS,
								BootStrap
							</p>
						</div>
					</div>
					<div className="eachSkillContainer grid-column4">
						<div className="skillIcon">
							<FaServer />
						</div>
						<div>
							<h2 className="skillHeader">Backend Development</h2>
						</div>
						<div>
							<p className="skillDescription">
								Working Knowledge of Java,NodeJs
							</p>
						</div>
					</div>
					<div className="eachSkillContainer grid-column4">
						<div className="skillIcon">
							<FaDatabase />
						</div>
						<div>
							<h2 className="skillHeader">Databases</h2>
						</div>
						<div>
							<p className="skillDescription">
								Working Knowledge of MongoDb,MS SQL, MySQL and FireStore
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default MySkills
