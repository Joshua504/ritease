import styles from '../styles/button.module.scss';

const Button = ({ btnText, fontSize }) => {
	const buttonStyle = {
		fontSize: fontSize || '1rem', // Default to 1rem if no fontSize is provided
	};

	return (
		<button
			className={styles.login}
			style={buttonStyle}>
			{btnText}
		</button>
	);
};

export default Button;
