import { useState } from 'react';
import styles from '../styles/faq.module.scss';
import SVG17 from '../assets/SVG(17).svg';
import SVG18 from '../assets/SVG(18).svg';

const Faq = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.faq_item}>
			<div className={styles.faq_question} onClick={() => setIsOpen(!isOpen)}>
				<h3>{question}</h3>
				<span className={`${styles.faq_icon} ${isOpen ? styles.open : ''}`}>
					<img src={isOpen ? SVG17 : SVG18} alt="" />
				</span>
			</div>
			<div className={`${styles.faq_answer} ${isOpen ? styles.open : ''}`}>
				<p>{answer}</p>
			</div>
		</div>
	);
};

export default Faq;
