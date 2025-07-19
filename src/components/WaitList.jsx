import styles from '../styles/waitlist.module.scss';
import Apple from '../assets/Apple Store.svg';
import Play from '../assets/Playstore.svg';
import { useState } from 'react';

const WaitList = ({ onEarlyAccessClick }) => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email.trim()) {
			setError('Please enter your email.');
			setTimeout(() => setError(''), 2000);
			return;
		}
		setError('');
		onEarlyAccessClick && onEarlyAccessClick(email.trim());
	};

	return (
		<section className={styles.main4__form}>
			<h2>Everything you need to write, sign, publish, and win</h2>
			<form onSubmit={handleSubmit}>
				<section>
					<div className={styles.inputWrapper}>
						<input
							type="email"
							placeholder="enter your email"
							className={styles.input}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button className={styles.inputButton} type="submit">
							Join waitlist
						</button>
					</div>
				{error && (
					<div
						style={{
							color: '#FFD12D',
							marginBottom: '0.5rem',
							textAlign: 'center',
							fontFamily: 'interRegular',
						}}>
						{error}
					</div>
				)}
					<p>
						By joining the waitlist, you agree to our
						<a href="/privacy">Privacy Policy</a>
					</p>
				</section>
			</form>

			<section className={styles.downloads}>
				<div>
					<a href="#">
						<img src={Apple} alt="" />
					</a>
				</div>
				<div>
					<a href="#">
						<img src={Play} alt="" />
					</a>
				</div>
			</section>
		</section>
	);
};

export default WaitList;
