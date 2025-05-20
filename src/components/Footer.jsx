import styles from '../styles/footer.module.scss';
import Button from './Button';
import Logo from '../assets/LOGO.svg';
import SVG19 from '../assets/SVG(19).svg';
import SVG20 from '../assets/SVG(20).svg';
import SVG21 from '../assets/SVG(21).svg';
import SVG22 from '../assets/SVG(22).svg';
import FOOTERLOGO from '../assets/FOOTERLOGO.svg';

const Footer = () => {
	const btnText = 'Get Started';
	const year = new Date().getFullYear();

	return (
		<footer>
			<section className={styles.main1}>
				<div>
					<img src={Logo} alt="" />
				</div>
				<div>
					<Button btnText={btnText} />
				</div>
			</section>
			<section className={styles.main2}>
				<div className={styles.main2__copyright}>
					<p>
						Ritease is your intelligent workspace to create, manage, sign, and
						monetise documents—powered by AI and secured by blockchain.
					</p>

					<p>© Ritease, {year}</p>
				</div>

				<div className={styles.main2__links}>
					<div className={styles.links}>
						<h3>Products</h3>
						<ul>
							<li>Riteditor</li>
							<li>Ritease AI</li>
							<li>Boards</li>
							<li>Ritesign</li>
							<li>Riteforms</li>
							<li>Scan-To-Text</li>
							<li>PDF Tools</li>
							<li>Document Hosting</li>
							<li>Rite SDK/API</li>
						</ul>
					</div>
					<div className={styles.links}>
						<h3>Legal</h3>
						<ul>
							<li>Privacy Policy</li>
							<li>Terms of Use</li>
						</ul>
					</div>
					<div className={styles.links}>
						<h3>Company</h3>
						<ul>
							<li>Blog</li>
						</ul>
					</div>
				</div>

				<div className={styles.main2__contact}>
					<div className={styles.socials}>
						<div>
							<a href="#">
								<img src={SVG20} alt="" />
							</a>
						</div>
						<div>
							<a href="#">
								<img src={SVG21} alt="" />
							</a>
						</div>
						<div>
							<a href="#">
								<img src={SVG22} alt="" />
							</a>
						</div>
					</div>
					<div className={styles.mail}>
						<p>
							<img src={SVG19} alt="" />
							<span>hello@ritease.com</span>
						</p>
					</div>
				</div>
			</section>
      <section className={styles.footerlogo}><img src={FOOTERLOGO} alt="" /></section>
		</footer>
	);
};

export default Footer;
