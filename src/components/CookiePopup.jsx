import { useState, useEffect } from 'react';
import styles from '../styles/cookie.module.scss';
import { Link } from 'react-router-dom';

const Cookie = ({ onClose }) => {
	const [isAnimated, setIsAnimated] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		// Trigger animation after component mounts
		const timer = setTimeout(() => {
			setIsAnimated(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	const handleClose = () => {
		setIsClosing(true);
		// Wait for animation to complete before actually closing
		setTimeout(() => {
			onClose();
		}, 500); // Match the CSS transition duration
	};

	return (
		<>
			<section
				className={`${styles.cookie} ${
					isAnimated && !isClosing ? styles['slide-in'] : ''
				} ${isClosing ? styles['slide-out'] : ''}`}>
				<div className={styles.cookie__text}>
					<h3>
						Our website uses essential cookies. They help to keep you safe and
						make sure our site is working properly. We use them to understand
						how you use our site so we can create a better experience for
						everyone. By proceeding to use our website, you agree to our use of
						these cookies. You can find out more in our
						<Link to="/cookie">Cookies Policy</Link>
					</h3>
				</div>
				<section className={styles.cookie__buttons}>
					<div>
						<button className={styles.accept} onClick={handleClose}>
							I agree
						</button>
					</div>
					{/* <div>
						<button onClick={handleClose}>Reject optional cookies</button>
					</div>
					<div>
						<button onClick={handleClose}>Manage my cookies</button>
					</div> */}
				</section>
			</section>
		</>
	);
};

export default Cookie;
