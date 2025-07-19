import styles from '../styles/button.module.scss';

const Button = ({
	btnText,
	fontSize,
	borderRadius,
	padding,
	onClick,
	className,
}) => {
	const buttonStyle = {
		'--custom-padding': padding || '0.5rem 1rem',
		'--custom-font-size': fontSize || '1rem',
		'--custom-border-radius': borderRadius || '24px',
	};

	return (
		<button
			className={`${styles.login} ${className || ''}`}
			style={buttonStyle}
			onClick={onClick}>
			{btnText}
		</button>
	);
};

export default Button;
