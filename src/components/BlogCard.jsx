import styles from '../styles/blogcard.module.scss';
import { Link } from 'react-router-dom';



import SVG34 from '../assets/SVG(34).svg';
import SVG35 from '../assets/SVG(35).svg';
import SVG38 from '../assets/SVG(38).svg';

const BlogCard = ({ 
	id, 
	title, 
	author, 
	publishDate, 
	category, 
	featuredImage, 
	excerpt, 
	readTime, 
	views, 
	likes, 
	comments, 
	tags 
}) => {
	return (
		<>
			<section className={styles.blog}>
				<div className={styles.blog__image}>
					<img src={featuredImage || SVG34} alt={title} />
				</div>
				<div className={styles.blog__textarea}>
					<p className={styles.pills}>{category}</p>
					<Link to={`/blog/${id}`} className={styles.blog__title}>
						<h2>{title}</h2>
						<p>{excerpt}</p>
					</Link>
					<section className={styles.blog__author}>
						<div className={styles.author}>
							<h3>{author}</h3>
							<p>{readTime}</p>
						</div>
						<div className={styles.blog__activities}>
							<p>
								<img src={SVG38} alt="views" />
								<span>{views}</span>
							</p>
							<a href="">
								<img src={SVG35} alt="bookmark" />
							</a>
						</div>
					</section>
				</div>
			</section>
		</>
	);
};

export default BlogCard;
