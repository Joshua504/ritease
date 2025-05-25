import { Link } from 'react-router-dom';
import styles from '../styles/nav.module.scss';
import Button from './Button';
import { useState } from 'react';

const Nav = ({ Logo }) => {
	const [activeNav, setActiveNav] = useState(0);

	const navLinks = [
		{
			name: 'home',
			link: '/',
		},
		{
			name: 'features',
			link: '/features',
		},
		{
			name: 'pricing',
			link: '/pricing',
		},
		{
			name: 'riteboards',
			link: '/riteboards',
		},
	];

	const handleNavClick = (index) => {
		setActiveNav(index);
	};

	return (
		<>
			<nav className={styles.nav}>
				<section className={styles.nav__container}>
					<div>
						<Link to="/">
							<img src={Logo} alt="" />
						</Link>
					</div>
					<ul className={styles.nav__links}>
						{navLinks.map((link, index) => (
							<Link
								key={index}
								className={`${styles.links} ${
									activeNav === index ? styles.active__link : ''
								}`}
								onClick={() => handleNavClick(index)}
								to={link.link}>
								{link.name}
							</Link>
						))}
					</ul>
					<div className={styles.nav__btns}>
						<Link className={styles.links} to="/login">
							login
						</Link>
						<Button btnText="Early Access" borderRadius="24px" />
					</div>
				</section>
			</nav>
		</>
	);
};

export default Nav;
