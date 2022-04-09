import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes></Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	)
}

export default App
