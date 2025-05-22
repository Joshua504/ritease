import AnimatedText from '../components/AnimatedText';
import styles from '../styles/privacy.module.scss';

const Privacy = () => {
	return (
		<>
			<header>
				<AnimatedText animeText="Privacy Policy" />
				<p>
					Welcome to Ritease! Your privacy is very important to us. This Privacy
					Policy explains how we collect, use, and protect your information when
					you visit our website, join our waitlist, or use our services. By
					using Ritease, you agree to the practices outlined here. Please take a
					moment to read and understand this policy.
				</p>
				<h3>Effective Date: 01 Jan, 2025</h3>
			</header>

			<main>
				<section className={styles.sidebar}>
					<ul>
						<a href="#1">
							<li>Introduction</li>
						</a>
						<a href="#2">
							<li>Information We Collect</li>
						</a>
						<a href="#3">
							<li>How We Use Your Information</li>
						</a>
						<a href="#4">
							<li>How We Protect Your Information</li>
						</a>
						<a href="#5">
							<li>Sharing Your Information</li>
						</a>
						<a href="#6">
							<li>Intellectual Property</li>
						</a>
						<a href="#7">
							<li>Data Security and Privacy</li>
						</a>
						<a href="#8">
							<li>Your Rights as a User</li>
						</a>
						<a href="#9">
							<li>International Data Transfers</li>
						</a>
						<a href="#10">
							<li>Changes to the Privacy Policy</li>
						</a>
						<a href="#11">
							<li>Contact Us</li>
						</a>
					</ul>
				</section>
				<section className={styles.main}>
					<section id="1" className={styles.term__details}>
						<div className={styles.number}>
							<p>1.</p>
						</div>
						<h2>Introduction</h2>
						<p>
							Welcome to Ritease! Ritease provides tools and services to help
							you create, manage, and secure documents with ease. By using our
							website, app, or services, you agree to these Terms of Use. These
							terms form a legal agreement between you (the user) and Ritease.
							If you do not agree to these terms, please do not use Ritease.
							These Terms of Use are governed by the laws of the United Kingdom.
						</p>
						<p>
							This policy covers all services provided by Ritease and any
							related data we may collect from you while you engage with our
							platform. If you have any concerns or questions, feel free to
							contact us directly.
						</p>
					</section>

					<section
						id="2"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>2.</p>
						</div>
						<h2>Information We Collect</h2>
						<p>
							We collect information to provide you with the best possible
							experience. This includes:
						</p>
						<ul>
							<li>
								Personal Information: This is data you provide directly, such as
								your name, email address, phone number, and payment information,
								when you sign up for our waitlist or interact with us.
							</li>
							<li>
								"Usage Data: We automatically collect data about how you use our
								website, such as your IP address, browser type, time spent on
								our site, and pages you visit.
							</li>
							<li>
								Optional Data: Sometimes, you may voluntarily provide additional
								details, like your preferences or feedback, to help us improve
								our services.
							</li>
						</ul>
						<p>
							We ensure that the information we collect is used only for the
							purposes outlined in this policy.
						</p>
					</section>

					<section
						id="3"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>3.</p>
						</div>
						<h2>How We Use Your Information</h2>
						<p>
							Your information helps us make Ritease better for you.
							Specifically, we use it to:
						</p>
						<ul>
							<li>
								Manage your account and provide updates about our waitlist,
								launch, and new features.
							</li>
							<li>
								Improve our platform by analyzing how users interact with it and
								identifying areas for enhancement.
							</li>
							<li>
								Send you relevant communications, such as emails about product
								updates or special offers.
							</li>
							<li>
								Comply with legal obligations and ensure the security of our
								platform.
							</li>
						</ul>
						<p>
							We will only use your information in ways that align with your
							expectations and this policy.
						</p>
					</section>

					<section
						id="4"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>4.</p>
						</div>
						<h2>How We Protect Your Information</h2>
						<p>
							We take security seriously and use a range of measures to protect
							your data. This includes:
						</p>
						<ul>
							<li>
								Using encryption to secure sensitive information, such as your
								personal details.
							</li>
							<li>
								Storing your data on secure servers protected by advanced
								security technologies.
							</li>
							<li>
								Regularly reviewing and updating our security practices to stay
								ahead of potential threats.
							</li>
						</ul>
						<p>
							Additionally, we leverage blockchain technology for added
							integrity and protection. Only authorized personnel with a need to
							access your information can view it.
						</p>
					</section>

					<section
						id="5"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>5.</p>
						</div>
						<h2>Sharing Your Information</h2>
						<p>
							We respect your privacy and will only share your data when
							absolutely necessary:
						</p>
						<ul>
							<li>
								With Third-Party Service Providers: We may use trusted third
								parties, like email marketing or analytics tools, to help us
								provide our services. These partners have limited access to your
								data and are required to keep it secure.
							</li>
							<li>
								For Legal Reasons: If required by law, we may share your data
								with authorities to comply with legal obligations.
							</li>
							<li>
								No Data Selling: We will never sell or trade your personal
								information to third parties.
							</li>
						</ul>
						<p>
							We aim to keep any sharing of your data to a minimum and only when
							necessary to serve you better.
						</p>
					</section>

					<section
						id="6"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>6.</p>
						</div>
						<h2>Data Retention</h2>
						<p>
							We retain your data only as long as necessary to fulfill the
							purposes outlined in this policy:
						</p>
						<ul>
							<li>
								Your information will be stored as long as you remain on our
								waitlist or use our platform.
							</li>
							<li>
								If you request deletion of your data, we will remove it from our
								systems within a reasonable timeframe.
							</li>
							<li>
								Certain information may be retained to comply with legal
								obligations or resolve disputes.
							</li>
						</ul>
						<p>We will never keep your data longer than necessary.</p>
					</section>

					<section
						id="7"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>7.</p>
						</div>
						<h2>Cookies and Tracking Technologies</h2>
						<p>
							We use cookies to enhance your experience on our website. Cookies
							are small files stored on your device to help us remember your
							preferences and improve our services.
						</p>
						<ul>
							<li>
								Types of Cookies: We use session cookies (temporary files that
								expire when you close your browser) and analytics cookies (to
								understand how users interact with our platform).
							</li>
							<li>
								Managing Cookies: You can disable cookies through your browser
								settings, but this may limit certain features of our website.
							</li>
							<li>
								No Tracking for Ads: We do not use cookies for targeted
								advertising or selling user data.
							</li>
						</ul>
						<p>
							Cookies help us make Ritease better for you while respecting your
							privacy.
						</p>
					</section>

					<section
						id="8"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>8.</p>
						</div>
						<h2>Your Rights as a User</h2>
						<p>
							We respect your rights and ensure you have control over your data:
						</p>
						<ul>
							<li>
								Access and Update: You can request access to the personal
								information we have about you and make corrections if needed.
							</li>
							<li>
								Deletion: You have the right to ask us to delete your personal
								information at any time.
							</li>
							<li>
								Objection: You can object to certain uses of your data, such as
								marketing communications, and we will honor your request.
							</li>
						</ul>
						<p>
							To exercise these rights, contact us at support@ritease.com. We
							are here to help.
						</p>
					</section>

					<section
						id="9"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>9.</p>
						</div>
						<h2>International Data Transfers</h2>
						<p>
							As a global platform, we may transfer your data to servers or
							third parties in different countries. These transfers are always
							done securely:
						</p>
						<ul>
							<li>
								We comply with applicable laws and regulations for international
								data transfers, such as GDPR for EU users.
							</li>
							<li>
								Our partners and data storage providers are required to uphold
								strict privacy and security standards.
							</li>
							<li>
								We aim to provide the same level of protection for your data,
								regardless of your location.
							</li>
						</ul>
						<p>
							Your data is safe with us, no matter where you are in the world.
						</p>
					</section>

					<section
						id="10"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>10.</p>
						</div>
						<h2>Changes to the Privacy Policy</h2>
						<p>
							This Privacy Policy may be updated from time to time. Any updates
							may be:
						</p>
						<ul>
							<li>
								Communicated to you via email, app notification or a notice on
								our website.
							</li>
							<li>
								Clearly marked with the "Effective Date" to show when the
								changes take effect.
							</li>
							<li>
								Designed to improve transparency and enhance your understanding
								of how we handle your data.
							</li>
						</ul>
						<p>
							We require you to monitor and review policy changes periodically
							to stay informed.
						</p>
					</section>

					<section
						id="11"
						className={`${styles.term__details} ${styles.term__mod} ${styles.last}`}>
						<div className={styles.number}>
							<p>11.</p>
						</div>
						<h2>Contact Us</h2>
						<h3>
							If you have any questions, concerns, or feedback about this
							Privacy Policy, please reach out to us:
						</h3>
						<h4>Email: support@ritease.com</h4>
						<p className={styles.last1}>
							We are here to address your concerns and ensure your privacy is
							protected. Thank you for trusting Ritease
						</p>
					</section>
				</section>
			</main>
		</>
	);
};

export default Privacy;
