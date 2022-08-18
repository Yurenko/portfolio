import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import MainInformation from './components/MainInformation/MainInformation'
import Stack from './pages/Stack/Stack'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<MainInformation />
							<Stack />
							<Projects />
							<Contact />
						</>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/stack" element={<Stack />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	)
}

export default App
