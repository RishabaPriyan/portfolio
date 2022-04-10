import React from 'react'
import LandingPage from './LandingPage'
import MyWorks from './MyWorks'
import MySkills from './MySkills'
import ContactMe from './ContactMe'

function Home() {
	return (
		<>
			<main>
				<LandingPage />
				<MyWorks />
				<MySkills />
				<ContactMe />
			</main>
		</>
	)
}

export default Home
