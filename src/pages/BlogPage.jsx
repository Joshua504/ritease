import styles from '../styles/blogpage.module.scss';
import { useParams } from 'react-router-dom';

import SVG35 from '../assets/SVG(35).svg';
import SVG36 from '../assets/SVG(36).svg';
import SVG37 from '../assets/SVG(37).svg';
import SVG38 from '../assets/SVG(38).svg';
import SVG39 from '../assets/SVG(39).svg';
import SVG40 from '../assets/SVG(40).svg';
import BlogCard from '../components/BlogCard';
import WaitList from '../components/WaitList';
import blogs from '../data/blogData';

const BlogPage = () => {
	const { id } = useParams();
	const blog = blogs.find(blog => blog.id === parseInt(id));

	if (!blog) {
		return <div>Blog not found</div>;
	}

	return (
		<>
			<section className={styles.blog__banner}>
				<div className={styles.banner}>
					<img src={blog.featuredImage} alt={blog.title} />
				</div>
			</section>
			<>
				<section className={styles.main}>
					<section className={styles.blog__titlecontainer}>
						<h2>{blog.title}</h2>
						<p>{blog.excerpt}</p>
						<div className={styles.author__container}>
							<h3>{blog.author}</h3>
							<h4>{blog.publishDate}</h4>
						</div>
						<section className={styles.blog__titlelinks}>
							<div>
								<a href="#">
									<img src={SVG36} alt="share" />
								</a>
							</div>
							<div>
								<a href="#">
									<img src={SVG37} alt="like" />
								</a>
							</div>
							<div>
								<a href="#">
									<img src={SVG35} alt="bookmark" />
								</a>
							</div>
						</section>
					</section>

					{blog.content.map((section, index) => (
						<section key={index} className={styles.blog__content}>
							<h3>{section.heading}</h3>
							{Array.isArray(section.text) ? (
								section.text.map((paragraph, pIndex) => (
									<p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
								))
							) : (
								<p dangerouslySetInnerHTML={{ __html: section.text }}></p>
							)}
						</section>
					))}
				</section>



				<section className={styles.blog__activity}>
					<p>
						<img src={SVG38} alt="views" />
						<span>{blog.views}</span>
					</p>
					<p>
						<img src={SVG39} alt="likes" />
						<span>{blog.likes}</span>
					</p>
					<p>
						<img src={SVG40} alt="comments" />
						<span>{blog.comments}</span>
					</p>
				</section>
			</>
			<section className={styles.blog__by}>
				<h2>View Articles Written by {blog.author}</h2>
				<div className={styles.blog__by__cards}>
					{blogs
						.filter(b => b.author === blog.author && b.id !== blog.id)
						.slice(0, 3)
						.map(relatedBlog => (
							<BlogCard 
								key={relatedBlog.id}
								id={relatedBlog.id}
								title={relatedBlog.title}
								author={relatedBlog.author}
								publishDate={relatedBlog.publishDate}
								category={relatedBlog.category}
								featuredImage={relatedBlog.featuredImage}
								excerpt={relatedBlog.excerpt}
								readTime={relatedBlog.readTime}
								views={relatedBlog.views}
								likes={relatedBlog.likes}
								comments={relatedBlog.comments}
								tags={relatedBlog.tags}
							/>
						))
					}
				</div>
			</section>

			<div className={styles.waitlist}> 
				<WaitList />
			</div>
		</>
	);
};

export default BlogPage;
