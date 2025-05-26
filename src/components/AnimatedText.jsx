import styles from '../styles/animatedtext.module.scss';

const AnimatedText = ({ animeText, fontSize, className }) => {

	return (
		<h2
			className={`${styles.anime__title} ${className || ''}`}
			style={fontSize ? { fontSize } : {}}>
			{animeText}
		</h2>
	);
};

export default AnimatedText;
