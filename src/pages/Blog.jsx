import styles from '../styles/blog.module.scss';

import WaitList from '../components/WaitList';
import AnimatedText from '../components/AnimatedText';
import BlogCard from '../components/BlogCard';

const Blog = () => {
	return (
		<>
			<header className={styles.blog__header}>
				<AnimatedText fontSize="75px" animeText="Ritease Blogs" />
			</header>
			<main className={styles.main}>
				<section className={styles.main1}>
					<div className={styles.searchContainer}>
						<svg
							className={styles.searchIcon}
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2">
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.35-4.35"></path>
						</svg>
						<input
							type="text"
							placeholder="Explore"
							className={styles.searchInput}
						/>
					</div>
				</section>

				<section className={styles.blogs}>
					<h2 className={styles.blog_title}>Blog Posts</h2>

					<div className={styles.blog_container}>
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</div>
					<div className={styles.ads}>Ads.</div>
					<div className={styles.blog_container}>
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</div>
				</section>

				<div className={styles.wait}>
					<WaitList />
				</div>
			</main>
		</>
	);
};

export default Blog;
