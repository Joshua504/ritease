import AnimatedText from '../components/AnimatedText';
import styles from '../styles/board.module.scss';

const Riteboards = () => {
	return (
		<>
			<div className={styles.header}>
				<AnimatedText
					fontSize="4.6875rem"
					animeText="Build Influence. Earn Respect. Monetise."
				/>
			</div>
			<header></header>
		</>
	);
};

export default Riteboards;
