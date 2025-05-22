import AnimatedText from '../components/AnimatedText';
import styles from '../styles/terms.module.scss';

const Terms = () => {
	return (
		<>
			<header>
				<AnimatedText animeText="Terms Of Use" />
			</header>
			<main>
				<section className={styles.sidebar}>
					<ul>
						<a href="#1">
							<li>Introduction</li>
						</a>
						<a href="#2">
							<li>Definitions</li>
						</a>
						<a href="#3">
							<li>Eligibility</li>
						</a>
						<a href="#4">
							<li>Account Registration and Responsibilities</li>
						</a>
						<a href="#5">
							<li>Use of Services</li>
						</a>
						<a href="#6">
							<li>Intellectual Property</li>
						</a>
						<a href="#7">
							<li>Data Security and Privacy</li>
						</a>
						<a href="#8">
							<li>User Generated Content</li>
						</a>
						<a href="#9">
							<li>Payment Terms (for Premium Features)</li>
						</a>
						<a href="#10">
							<li>Third Party Services</li>
						</a>
						<a href="#11">
							<li>Limitation of Liability</li>
						</a>
						<a href="#12">
							<li>Termination Of Services</li>
						</a>
						<a href="#13">
							<li>Indeminification</li>
						</a>
						<a href="#14">
							<li>Dispute Resolution</li>
						</a>
						<a href="#15">
							<li>Change Of Terms</li>
						</a>
						<a href="#16">
							<li>Contact Information</li>
						</a>
						<a href="#17">
							<li>Acceptance Of Terms</li>
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
					</section>
					<section id="2" className={styles.term__details}>
						<div className={styles.number}>
							<p>2.</p>
						</div>
						<h2>Definitions</h2>
						<p>In these Terms of Use, the following terms apply:</p>
						<ul>
							<li>
								"Ritease" refers to our platform, including the website, app,
								and any related services.
							</li>
							<li>
								"User" refers to anyone who creates an account or uses Ritease.
							</li>
							<li>
								"Content" refers to documents, images, text, or any other
								materials created, uploaded, published or shared using Ritease.
							</li>
							<li>
								"Account" refers to your personal login and profile created to
								use Ritease.
							</li>
						</ul>
					</section>

					<section id="3" className={styles.term__details}>
						<div className={styles.number}>
							<p>3.</p>
						</div>
						<h2>Eligibility</h2>
						<p>
							To use Ritease, you must be at least 12 years old or have
							permission from a parent or guardian if you are younger. By
							creating an account, you confirm that you are legally able to
							enter into this agreement. It is your responsibility to ensure
							that using Ritease complies with the laws in your country.
						</p>
					</section>

					<section id="4" className={styles.term__details}>
						<div className={styles.number}>
							<p>4.</p>
						</div>
						<h2>Account Registration and Responsibilities</h2>
						<p>
							To use Ritease, you need to register for an account by providing
							accurate and complete information. You are responsible for keeping
							your login details secure and must notify us immediately if you
							suspect unauthorized access to your account. You are also
							responsible for all actions taken under your account, so please
							use a strong password and protect your information.
						</p>
					</section>

					<section id="5" className={styles.term__details}>
						<div className={styles.number}>
							<p>5.</p>
						</div>
						<h2>Use Of Services</h2>
						<p>
							Ritease is here to make document creation and management easier.
							You agree to use the platform only for lawful purposes and in ways
							that do not violate the rights of others. You must not use Ritease
							to upload harmful, illegal, or offensive content, or to harm the
							security of the platform or society at large.
						</p>
					</section>

					<section id="6" className={styles.term__details}>
						<div className={styles.number}>
							<p>6.</p>
						</div>
						<h2>Intellectual Property</h2>
						<p>
							All trademarks, logos, and content on Ritease belong to us or our
							partners. You own the content you create using Ritease, but by
							using our services, you grant us permission to store and process
							your content as needed to provide our services. You may not copy,
							distribute, or sell any part of Ritease without our written
							permission.
						</p>
					</section>

					<section id="7" className={styles.term__details}>
						<div className={styles.number}>
							<p>7.</p>
						</div>
						<h2>Data Security and Privacy</h2>
						<p>
							Your data is important to us, and we take privacy seriously. We
							store your data securely and follow strict policies to protect it,
							as explained in our Privacy Policy. However, while we use advanced
							measures to safeguard your data, we cannot guarantee absolute
							security due to the nature of online services.
						</p>
					</section>

					<section id="8" className={styles.term__details}>
						<div className={styles.number}>
							<p>8.</p>
						</div>
						<h2>User Generated Content</h2>
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
						<h2>Payment Terms (for Premium Features)</h2>
						<p>
							Some features on Ritease may require payment. By upgrading to a
							premium plan, you agree to provide accurate payment information.
							Payments are non-refundable unless otherwise stated, and it is
							your responsibility to manage your subscription.
						</p>
					</section>

					<section id="10" className={styles.term__details}>
						<div className={styles.number}>
							<p>10.</p>
						</div>
						<h2>Third-Party Services</h2>
						<p>
							Ritease may include links or integrations with third-party
							services. We are not responsible for the content, policies, or
							practices of third-party providers. By using those services, you
							agree to any separate terms and conditions set by the third
							parties.
						</p>
					</section>

					<section id="11" className={styles.term__details}>
						<div className={styles.number}>
							<p>11.</p>
						</div>
						<h2>Limitation Of Liability</h2>
						<p>
							We work hard to provide a reliable and secure platform, but we
							cannot guarantee that Ritease will always be error-free. We are
							not responsible for indirect, incidental, or unforeseen damages
							resulting from the use of our services. Our total liability to you
							will not exceed the amount you paid for using Ritease, if
							applicable.
						</p>
					</section>

					<section id="12" className={styles.term__details}>
						<div className={styles.number}>
							<p>12.</p>
						</div>
						<h2>Termination Of Services</h2>
						<p>
							We reserve the right to suspend or terminate your account if you
							violate these terms. If your account is terminated, your access to
							Ritease will be restricted. You may also choose to stop using
							Ritease at any time, but please note that certain data may remain
							on our systems for legal or operational reasons.
						</p>
					</section>

					<section id="13" className={styles.term__details}>
						<div className={styles.number}>
							<p>13.</p>
						</div>
						<h2>Indemnification</h2>
						<p>
							By using Ritease, you agree to protect and indemnify us from any
							claims, damages, or losses arising from your use of the platform.
							This includes covering any legal fees if your actions cause harm
							to others or breach these terms.
						</p>
					</section>

					<section id="14" className={styles.term__details}>
						<div className={styles.number}>
							<p>14.</p>
						</div>
						<h2>Dispute Resolution</h2>
						<p>
							If you have any issues with Ritease, we encourage you to contact
							us to resolve the matter quickly. Any disputes that cannot be
							resolved informally will be handled under the laws of the United
							Kingdom. You agree to the exclusive jurisdiction of UK courts for
							resolving disputes.
						</p>
					</section>

					<section id="15" className={styles.term__details}>
						<div className={styles.number}>
							<p>15.</p>
						</div>
						<h2>Change Of Terms</h2>
						<p>
							We may update these Terms of Use from time to time to improve our
							services or comply with legal requirements. We will notify you of
							significant changes through email or by posting a notice on our
							website. Continued use of Ritease after the updates means you
							accept the revised terms.
						</p>
					</section>

					<section id="16" className={styles.term__details}>
						<div className={styles.number}>
							<p>15.</p>
						</div>
						<h2>Contact Information</h2>
						<p>
							If you have questions or concerns about these Terms of Use, please
							contact us at: Email: support@ritease.com.
						</p>
					</section>

					<section id="17" className={styles.term__details}>
						<div className={styles.number}>
							<p>15.</p>
						</div>
						<h2>Acceptance Of Terms</h2>
						<p>
							By using Ritease, you confirm that you have read, understood, and
							agreed to these Terms of Use. Please check back regularly to stay
							informed of any updates.
						</p>
					</section>
				</section>
			</main>
		</>
	);
};

export default Terms;
