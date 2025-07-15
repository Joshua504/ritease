import styles from '../styles/button.module.scss';

const Button = ({ btnText, fontSize, borderRadius, onClick, className }) => {
 const buttonStyle = {
  fontSize: fontSize || '1rem', // Default to 1rem if no fontSize is provided
  borderRadius: borderRadius || '24', // Default to 24 if no borderRadius is provided
 };

 return (
  <button
   className={`${styles.login} ${className || ''}`}
   style={buttonStyle}
   onClick={onClick}
  >
   {btnText}
  </button>
 );
};

export default Button;
