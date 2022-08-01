import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import MainInformation from './components/MainInformation/MainInformation'
import Stack from './components/Stack/Stack'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

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
