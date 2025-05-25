import styles from '../styles/paidblog.module.scss';

import SVG32 from '../assets/SVG(32).svg';
import SVG35 from '../assets/SVG(35).svg';
import SVG36 from '../assets/SVG(36).svg';
import SVG37 from '../assets/SVG(37).svg';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';

const PaidBlog = () => {
	return (
		<>
			<section className={styles.blog__banner}>
				<div className={styles.banner}></div>
			</section>

			<h2 className={styles.title}>
				<span>Personal Sovereignty: Be a Global Citizen</span>
				<img src={SVG32} alt="" />
			</h2>

			<section className={styles.wrapper}>
				<section className={styles.main}>
					<section className={styles.blog__titlecontainer}>
						<p>
							Ritease is committed to protecting your privacy and ensuring your
							personal information is handle...
						</p>
						<div className={styles.author__container}>
							<h3>Daniel Darlington</h3>
							<h4>13 March, 2025</h4>
						</div>
						<section className={styles.blog__titlelinks}>
							<div>
								<a href="#">
									<img src={SVG36} alt="" />
								</a>
							</div>
							<div>
								<a href="#">
									<img src={SVG37} alt="" />
								</a>
							</div>
							<div>
								<a href="#">
									<img src={SVG35} alt="" />
								</a>
							</div>
						</section>
					</section>

					<section className={styles.blog__content}>
						<h3>Sub-Heading</h3>
						<p>
							Ritease is committed to protecting your privacy and ensuring your
							personal information is handled securely. This Privacy Policy
							applies to all users worldwide who interact with our platform. Our
							goal is to explain clearly how we collect, use, and share your
							information, and the steps we take to protect it.
						</p>
						<p>
							This policy covers all services provided by Ritease and any
							related data we may collect from you while you engage with our
							platform. If you have any concerns or questions, feel free to
							contact us directly.
						</p>
						<p>
							Ritease is committed to protecting your privacy and ensuring your
							personal information is handled securely. This Privacy Policy
							applies to all users worldwide who interact with our platform. Our
							goal is to explain clearly how we collect, use, and share your
							information, and the steps we take to protect it.
						</p>
						<p>
							This policy covers all services provided by Ritease and any
							related data we may collect from you while you engage with our
							platform. If you have any concerns or questions, feel free to
							contact us directly.
						</p>
						<p>
							Ritease is committed to protecting your privacy and ensuring your
							personal information is handled securely. This Privacy Policy
							applies to all users worldwide who interact with our platform. Our
							goal is to explain clearly how we collect, use, and share your
							information, and the steps we take to protect it.
						</p>
						<p>
							This policy covers all services provided by Ritease and any
							related data we may collect from you while you engage with our
							platform. If you have any concerns or questions, feel free to
							contact us directly.
						</p>
					</section>
				</section>

				<section
					className={`${styles.blog__banner} ${styles.blog__banner__mod}`}>
					<div className={styles.banner}></div>
					<div className={styles.blur}></div>
				</section>

				<section className={`${styles.main} ${styles.main__mod}`}>
					<div className={`${styles.blur} ${styles.blur__mod}`}></div>
					<section
						className={`${styles.blog__content} ${styles.blog__content__mod}`}>
						<h3>Sub-Heading</h3>
						<p>
							Ritease is committed to protecting your privacy and ensuring your
							personal information is handled securely. This Privacy Policy
							applies to all users worldwide who interact with our platform. Our
							goal is to explain clearly how we collect, use, and share your
							information, and the steps we take to protect it.
						</p>
						<p>
							This policy covers all services provided by Ritease and any
							related data we may collect from you while you engage with our
							platform. If you have any concerns or questions, feel free to
							contact us directly.
						</p>
					</section>
				</section>
			</section>

			<AnimatedText animeText={'Unlock the Full Insights'} />

			<div className={styles.paid__blog__price}>
				<h2>Purchase To Continue Reading</h2>
				<p>
					You’ve reached the heart of it—where the real story unfolds. What’s
					next offers a deeper understanding, fresh angles, and ideas you can
					use.
				</p>
				<div className={styles.price}>
          <h2><img src={SVG32} alt="" /><span>£100</span></h2>
          <Button btnText={'Purchase Article'}  />
        </div>
			</div>
		</>
	);
};

export default PaidBlog;
