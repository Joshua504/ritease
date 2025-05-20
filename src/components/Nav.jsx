import { Link } from 'react-router-dom';
import styles from '../styles/nav.module.scss';
import Button from './Button';

const Nav = ({ Logo }) => {
	const btnText = 'Early Access';

	

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
						<Link className={styles.links} to="/">
							home
						</Link>
						<Link className={styles.links} to="/features">
							features
						</Link>
						<Link className={styles.links} to="/pricing">
							pricing
						</Link>
						<Link className={styles.links} to="/riteboards">
							riteboards
						</Link>
					</ul>
					<div className={styles.nav__btns}>
						<Link className={styles.links} to="/login">
							login
						</Link>
						<Button btnText={btnText} />
					</div>
				</section>
			</nav>
		</>
	);
};

export default Nav;
