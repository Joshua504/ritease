import AnimatedText from '../components/AnimatedText';
import styles from '../styles/cookieterm.module.scss';

const CookieTerms = () => {
	return (
		<>
			<header className={styles.head}>
				<AnimatedText animeText="Cookie Policy" />
			</header>

			<main className={styles.wrapper}>
				<section className={styles.sidebar}>
					<ul>
						<a href="#1">
							<li>Introduction</li>
						</a>
						<a href="#2">
							<li>What Are Cookies?</li>
						</a>
						<a href="#3">
							<li>How We Use Cookies</li>
						</a>
						<a href="#4">
							<li>Types of Cookies We Use</li>
						</a>
						<a href="#5">
							<li>Third-Party Cookies</li>
						</a>
						<a href="#6">
							<li>Your Choices</li>
						</a>
						<a href="#7">
							<li>Data Protection Rights</li>
						</a>
						<a href="#8">
							<li>Changes to This Cookie Policy</li>
						</a>
						<a href="#9">
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
							At Ritease, we respect your privacy and are committed to being
							transparent about how we collect and use data. This Cookie Policy
							explains what cookies are, how we use them on our website and
							platform, and your choices regarding their use.
						</p>
					</section>

					<section id="2" className={styles.term__details}>
						<div className={styles.number}>
							<p>2.</p>
						</div>
						<h2>What Are Cookies?</h2>
						<p>
							Cookies are small text files stored on your device when you visit
							a website. They help websites recognize your device, remember your
							preferences, and improve your experience.
						</p>
					</section>

					<section
						id="3"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>3.</p>
						</div>
						<h2>How We Use Cookies</h2>
						<p>We use cookies to:</p>
						<ul>
							<li>
								Ensure the proper functioning of our website and platform.
							</li>
							<li>Remember your login and preferences.</li>
							<li>
								Analyze website traffic and usage patterns to improve our
								services.
							</li>
							<li>
								Enable certain features like payment processing and security.
							</li>
						</ul>
					</section>

					<section
						id="4"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>4.</p>
						</div>
						<h2>Types of Cookies We Use</h2>
						<ul>
							<li>
								Essential Cookies: Necessary for the website and platform to
								work correctly (e.g., login sessions, security).
							</li>
							<li>
								Performance and Analytics Cookies: Help us understand how you
								use Ritease so we can improve it.
							</li>
							<li>
								Functional Cookies: Remember your preferences and settings to
								enhance your experience.
							</li>
						</ul>
					</section>

					<section id="5" className={styles.term__details}>
						<div className={styles.number}>
							<p>5.</p>
						</div>
						<h2>Third-Party Cookies</h2>
						<p>
							We may allow third-party services (like analytics providers) to
							place cookies on your device. When in use, we will disclose who
							such third parties are to you by mentioning them on our website as
							being part of our ecosystem. These parties have their own privacy
							policies, and we encourage you to review them.
						</p>
					</section>

					<section
						id="6"
						className={`${styles.term__details} ${styles.term__mod}`}>
						<div className={styles.number}>
							<p>6.</p>
						</div>
						<h2>Your Choices</h2>
						<ul>
							<li>
								Browser Settings: You can manage or disable cookies through your
								browser settings. However, disabling certain cookies may affect
								the functionality of Ritease.
							</li>
							<li>
								Do Not Track: Some browsers offer “Do Not Track” options, but we
								currently do not respond to these signals.
							</li>
							<li>
								Consent (EU/UK users): Upon visiting our website, you may see a
								cookie consent banner allowing you to accept or reject
								non-essential cookies.
							</li>
						</ul>
					</section>

					<section id="7" className={styles.term__details}>
						<div className={styles.number}>
							<p>7.</p>
						</div>
						<h2>Data Protection Rights</h2>
						<p>Data Protection Rights:</p>
						<p>
							Under applicable laws like the GDPR and CCPA, you have rights
							regarding your personal data, including the right to access,
							correct, delete, or restrict the processing of data collected via
							cookies. Please see our Privacy Policy for details on how to
							exercise these rights.
						</p>
					</section>

					<section id="8" className={styles.term__details}>
						<div className={styles.number}>
							<p>8.</p>
						</div>
						<h2>Changes to This Cookie Policy</h2>
						<p>
							You are responsible for the content you create or upload to
							Ritease. Your content must not violate any laws or infringe on the
							rights of others. We reserve the right to remove or restrict
							content that breaches these terms or our community standards.
						</p>
					</section>

					<section id="9" className={styles.term__details}>
						<div className={styles.number}>
							<p>9.</p>
						</div>
						<h2>Contact Us</h2>
						<p>
							If you have questions or concerns about our use of cookies, please
							contact us at: data@ritease.com
						</p>
					</section>
				</section>
			</main>
		</>
	);
};

export default CookieTerms;
