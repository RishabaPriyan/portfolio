import React from 'react'
import HeroSection from './HeroSection'
import MyWorks from './MyWorks'
import MySkills from './MySkills'
import ContactMe from './ContactMe'
import AboutMe from './AboutMe'

function Home() {
	return (
		<>
			<main>
				<HeroSection />
				<MyWorks />
				<MySkills />
				<AboutMe />
				<ContactMe />
			</main>
		</>
	)
}

export default Home
