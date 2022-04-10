import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about-me" element={<AboutMe />} />
					</Routes>
				</div>
				<Footer />
			</Router>
			<ToastContainer />
		</>
	)
}

export default App
