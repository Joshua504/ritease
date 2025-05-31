import { Link } from 'react-router-dom';
import styles from '../styles/nav.module.scss';
import Button from './Button';
import { useState } from 'react';

const Nav = ({ Logo }) => {
	const [activeNav, setActiveNav] = useState(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
		setIsMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(prev => !prev);
	};


	return (
		<>
			<nav className={styles.nav}>
				<section className={styles.nav__container}>
					<div>
						<Link to="/">
							<img className={styles.logo} src={Logo} alt="" />
						</Link>
					</div>
					<ul
						className={`${styles.nav__links} ${
							isMobileMenuOpen ? styles.nav__links__open : ''
						}`}>
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
						<Link
							className={`${styles.links} ${styles.links__mod}`}
							to="/">
							login
						</Link>
						<Button btnText="Early Access" borderRadius="24px" />
						<section
							className={`${styles.harmburger} ${
								isMobileMenuOpen ? styles.harmburger__open : ''
							}`}
							onClick={toggleMobileMenu}>
							<div className={styles.bars}></div>
							<div className={styles.bars}></div>
							<div className={styles.bars}></div>
						</section>
					</div>
				</section>
			</nav>
		</>
	);
};

export default Nav;
