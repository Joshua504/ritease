import { Link } from 'react-router-dom';
import styles from '../styles/blogbanner.module.scss';

import SVG32 from '../assets/SVG(32).svg';
import SVG33 from '../assets/SVG(33).svg';

const BlogBanner = () => {
	return (
		<>
			<section className={styles.banner}>
				<div className={styles.banner__container}>
					<section className={styles.txt__area}>
						<div className={styles.banner__text}>
							<h2>Personal Sovereignty: Be a Global Citizen</h2>
							<p>
								Ritease is committed to protecting your privacy and ensuring
								your personal information is handle...
							</p>
							<div className={styles.text__flex}>
								<h4>Daniel Darlington</h4> <p>5mins read</p>
							</div>
						</div>
						<div className={styles.banner__links}>
							<a href="">
								<img src={SVG32} alt="" />
							</a>
							<a href="">
								<img src={SVG33} alt="" />
							</a>
						</div>
					</section>
				</div>

				<ul className={styles.search}>
					<div className={styles.input}>
						<input placeholder="Explore" type="text" name="" id="" />
					</div>
					<div className={styles.search__links}>
						<Link to="/reads" className={styles.links}>My Reads</Link>
						<Link className={styles.links}>Read Later</Link>
					</div>
				</ul>
			</section>
		</>
	);
};

export default BlogBanner;
