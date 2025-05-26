import { useState } from 'react';

import AnimatedText from '../components/AnimatedText';
import styles from '../styles/board.module.scss';
import BlogCard from '../components/BlogCard';
import BlogBanner from '../components/BlogBanner';

const Riteboards = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const closebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<>
			<header className={styles.header}>
				<AnimatedText
					fontSize="4.6875rem"
					animeText="Boards Of Ideas"
				/>
			</header>

			<BlogBanner onCategoriesClick={toggleSidebar} />

			<main className={styles.main}>
				<section className={styles.blog__section}>
					<section
						className={`${styles.sidebar} ${
							isSidebarOpen ? styles.sidebar__open : ''
						}`}>
						<ul>
							<h2>Browse by categories</h2>
							<li onClick={closebar}>All category</li>
							<li onClick={closebar}>Machine Learning</li>
							<li onClick={closebar}>Design</li>
							<li onClick={closebar}>Psychology</li>
							<li onClick={closebar}>Mental Health</li>
							<li onClick={closebar}>Finance</li>
							<li onClick={closebar}>Government</li>
							<li onClick={closebar}>History</li>
							<li onClick={closebar}>Politics</li>
							<li onClick={closebar}>Science</li>
							<li onClick={closebar}>Music</li>
						</ul>
					</section>

					<section className={styles.content}>
						<BlogCard />
						<BlogCard />
					</section>
				</section>
			</main>
		</>
	);
};

export default Riteboards;
