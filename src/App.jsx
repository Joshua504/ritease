import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Logo from './assets/LOGO.svg';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Riteboards from './pages/Riteboards';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Nav Logo={Logo} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/features" element={<Features />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/riteboards" element={<Riteboards />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
