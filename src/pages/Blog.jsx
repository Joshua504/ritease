import { useState } from 'react';
import styles from '../styles/blog.module.scss';

import WaitList from '../components/WaitList';
import AnimatedText from '../components/AnimatedText';
import BlogCard from '../components/BlogCard';
import blogs from '../data/blogData';

const Blog = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const blogsPerPage = 9;
	
	// Filter blogs based on search term
	const filteredBlogs = blogs.filter(blog =>
		blog.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
	
	// Calculate pagination with filtered results
	const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
	const startIndex = (currentPage - 1) * blogsPerPage;
	const endIndex = startIndex + blogsPerPage;
	const currentBlogs = filteredBlogs.slice(startIndex, endIndex);
	
	const handlePageChange = (page) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
		setCurrentPage(1); // Reset to first page when searching
	};

	return (
		<>
			<header className={styles.blog__header}>
				<AnimatedText animeText="Ritease Blogs" />
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
							placeholder="Search blog titles..."
							className={styles.searchInput}
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</div>
				</section>

				<h2 className={styles.blog_title}>Blog Posts</h2>
				<section className={styles.blogs}>
					{currentBlogs.length > 0 ? (
						<div className={styles.blog_container}>
							{currentBlogs.map((blog, index) => (
								<>
									<BlogCard 
										key={blog.id}
										id={blog.id}
										slug={blog.slug}
										title={blog.title}
										author={blog.author}
										publishDate={blog.publishDate}
										category={blog.category}
										featuredImage={blog.featuredImage}
										excerpt={blog.excerpt}
										readTime={blog.readTime}
										views={blog.views}
										likes={blog.likes}
										comments={blog.comments}
										tags={blog.tags}
									/>
									{(index + 1) % 6 === 0 && index < currentBlogs.length - 1 && (
										<div key={`ad-${index}`} className={styles.ads}>
											ADS
										</div>
									)}
								</>
							))}
						</div>
					) : (
						<div className={styles.noResults}>
							<p>No blogs found matching "{searchTerm}"</p>
						</div>
					)}
				</section>

				{totalPages > 1 && (
					<div className={styles.pagination}>
						<button 
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className={styles.paginationBtn}
						>
							Previous
						</button>
						
						{[...Array(totalPages)].map((_, index) => (
							<button
								key={index + 1}
								onClick={() => handlePageChange(index + 1)}
								className={`${styles.paginationBtn} ${
									currentPage === index + 1 ? styles.active : ''
								}`}
							>
								{index + 1}
							</button>
						))}
						
						<button 
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className={styles.paginationBtn}
						>
							Next
						</button>
					</div>
				)}

				<div className={styles.wait}>
					<WaitList />
				</div>
			</main>
		</>
	);
};

export default Blog;
