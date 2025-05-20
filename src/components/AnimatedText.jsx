import styles from '../styles/animatedtext.module.scss';

const AnimatedText = ({ animeText }) => {
	return <h2 className={styles.anime__title}>{animeText}</h2>;
};

export default AnimatedText;
