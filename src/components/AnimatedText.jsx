import styles from '../styles/animatedtext.module.scss';

const AnimatedText = ({ animeText, fontSize }) => {
	const Textstyle = {
		fontSize: fontSize || '6.25rem', // Default to 1rem if no fontSize is provided /

	};

	return <h2 className={styles.anime__title} style={Textstyle}>{animeText}</h2>;
};

export default AnimatedText;
