import styles from '../styles/waitlist.module.scss';
import Apple from '../assets/Apple Store.svg'
import Play from '../assets/Playstore.svg'

const WaitList = () => {
	return (
		<section className={styles.main4__form}>
			<h2>Everything you need to write, sign, publish, and win</h2>
			<form>
				<div className={styles.inputWrapper}>
					<input
						type="text"
						placeholder="enter your email"
						className={styles.input}
					/>
					<button className={styles.inputButton}>Join waitlist</button>
				</div>
			</form>
			<p>
				By joining the waitlist, you agree to our
				<a href="#">Privacy Policy</a>
			</p>
			<section className={styles.downloads}>
				<div><a href="#"><img src={Apple} alt="" /></a></div>
				<div><a href="#"><img src={Play} alt="" /></a></div>
			</section>
		</section>
	);
};

export default WaitList;
