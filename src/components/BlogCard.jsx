import styles from '../styles/blogcard.module.scss';


import SVG34 from '../assets/SVG(34).svg';
import SVG35 from '../assets/SVG(35).svg';

const BlogCard = () => {
	return (
		<>
			<section className={styles.blog}>
				<div className={styles.blog__image}>
					<img src={SVG34} alt="" />
				</div>
				<div className={styles.blog__textarea}>
					<p className={styles.pills}>Category</p>
					<a className={styles.blog__title} href="#">
						<h2>learning AI/ML as an Engineer in 2025</h2>
						<p>
							Ritease is committed to protecting your privacy and ensuring your
							personal information is handled securely. This Privacy
						</p>
					</a>
					<section className={styles.blog__author}>
						<div className={styles.author}>
							<h3>Daniel Darlington</h3>
							<p>5mins read</p>
						</div>
						<div className={styles.blog__activities}>
							<p>
								<img src="" alt="" />
								<span>107</span>
							</p>
							<a href="">
								<img src={SVG35} alt="" />
							</a>
						</div>
					</section>
				</div>
			</section>
		</>
	);
};

export default BlogCard;
