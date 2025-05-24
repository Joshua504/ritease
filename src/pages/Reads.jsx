import styles from '../styles/reads.module.scss';
import AnimatedText from '../components/AnimatedText';
import BlogBanner from '../components/BlogBanner';
import BlogCard from '../components/BlogCard';

const Reads = () => {
	return (
		<>
			<header className={styles.header}>
				<AnimatedText animeText={'My Reads'} />
			</header>
			<section>
				<BlogBanner />
			</section>
			<main className={styles.main}>
				<section className={styles.content}>
					<BlogCard />
				</section>
			</main>
		</>
	);
};

export default Reads;
