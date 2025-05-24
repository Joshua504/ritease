import AnimatedText from '../components/AnimatedText';
import styles from '../styles/board.module.scss';
import BlogCard from '../components/BlogCard';
import BlogBanner from '../components/BlogBanner';


const Riteboards = () => {
	return (
		<>
			<header className={styles.header}>
				<AnimatedText
					fontSize="4.6875rem"
					animeText="Build Influence. Earn Respect. Monetise."
				/>
			</header>

			<BlogBanner />

			<main className={styles.main}>

				<section className={styles.blog__section}>
					<section className={styles.sidebar}>
						<ul>
							<h2>Browse by categories</h2>
							<li>All category</li>
							<li>Machine Learning</li>
							<li>Design</li>
							<li>Psychology</li>
							<li>Mental Health</li>
							<li>Finance</li>
							<li>Government</li>
							<li>History</li>
							<li>Politics</li>
							<li>Science</li>
							<li>Music</li>
						</ul>
					</section>

					<section className={styles.content}>
						<BlogCard />
					</section>

				</section>
			</main>
		</>
	);
};

export default Riteboards;
