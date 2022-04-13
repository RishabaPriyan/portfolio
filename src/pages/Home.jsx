import React from 'react'
import HeroSection from './HeroSection'
import MyWorks from './MyWorks'
import MySkills from './MySkills'
import ContactMe from './ContactMe'

function Home() {
	return (
		<>
			<main>
				<HeroSection />
				<MyWorks />
				<MySkills />
				<ContactMe />
			</main>
		</>
	)
}

export default Home
