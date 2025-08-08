import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';

import './App.scss';
import Nav from './components/Nav';
import Logo from './assets/LOGO.svg';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Riteboards from './pages/Riteboards';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Reads from './pages/Reads';
import BlogPage from './pages/BlogPage';
import Blog from './pages/Blog';
import PaidBlog from './pages/PaidBlog';
import Modal from './components/Modal';
import EarlyAccessForm from './components/EarlyAccessForm';
import CookieTerms from './pages/CookieTerms';
import { useState, useEffect } from 'react';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function App() {
	const [modalOpen, setModalOpen] = useState(false);
	const [prefillEmail, setPrefillEmail] = useState('');

	const openEarlyAccessModal = (email = '') => {
		setPrefillEmail(email);
		setModalOpen(true);
	};
	const closeModal = () => setModalOpen(false);

	const handleEarlyAccessSubmit = () => {
		setPrefillEmail('');
		// Do NOT close the modal here!
	};

	return (
		<Router>
			<ScrollToTop />
			<Nav Logo={Logo} onEarlyAccessClick={openEarlyAccessModal} />
			<Routes>
				<Route
					path="/"
					element={<Home onEarlyAccessClick={openEarlyAccessModal} />}
				/>
				<Route
					path="/features"
					element={<Features onEarlyAccessClick={openEarlyAccessModal} />}
				/>
				<Route
					path="/pricing"
					element={<Pricing onEarlyAccessClick={openEarlyAccessModal} />}
				/>
				<Route path="/riteboards" element={<Riteboards />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/cookie" element={<CookieTerms />} />
				<Route path="/reads" element={<Reads />} />
				<Route path="/blog/:slug" element={<BlogPage />} />
				<Route path="/blogs" element={<Blog />} />
				<Route path="/paid" element={<PaidBlog />} />
			</Routes>
			<Footer onEarlyAccessClick={openEarlyAccessModal} />
			<Modal isOpen={modalOpen} onClose={closeModal}>
				<EarlyAccessForm
					initialEmail={prefillEmail}
					onSubmit={handleEarlyAccessSubmit}
				/>
			</Modal>
		</Router>
	);
}

export default App;
