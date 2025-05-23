import styles from '../styles/pricing.module.scss';

import SVG23 from '../assets/SVG(23).svg';
import SVG24 from '../assets/SVG(24).svg';
import WaitList from '../components/WaitList';

const Pricing = () => {
	return (
		<>
			<header>
				<h1>Plans that work as hard as you do</h1>
				<p>
					Give your team the tools to move faster, work smarter, and deliver
					more
				</p>
			</header>

			<main>
				<section className={styles.main1}>
					<div className={styles.main1__mini1}>
						<button>Monthly</button>
						<button>Quarterly</button>
						<button>Yearly</button>
					</div>

					<section className={styles.main1__mini2}>
						<div className={styles.pricing__cards}>
							<h2>Essentials Plan</h2>
							<p className={styles.price}>Free</p>
							<button className={styles.price__btn}>Join waitlist</button>

							<section className={styles.pricing__cards__features}>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Instant Document Creation - 3 documents per user per month
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Intelligent Document Review - Up to 3 queries per user per
										month
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Digital Signatures – Unlimited personal signatures only
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Scan-to-Text - Extract text on one page per document
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Document Hosting – Limited by storage</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Boards – Publish unlimited free and premium content with 25%
										platform fee on premium publications
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Document Templates – Limited set of basic templates
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Riteforms – 2 forms per user per month</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Storage - 1GB cloud storage</span>
								</p>
							</section>
						</div>

						<div className={styles.pricing__cards}>
							<div className={styles.pricing__plans}>
								<h2>Pro Plan</h2> <p>Most Popular</p>
							</div>
							<div className={styles.price__container}>
								<p className={styles.price}>£20</p>
								<p>Billed Monthly</p>
							</div>
							<button className={styles.price__btn}>Get Early Access</button>

							<section className={styles.pricing__cards__features}>
								<p>
									<img src={SVG24} alt="" />
									<span>Add 2 team members to your Pro account</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Instant Document Creation - 15 documents per user per month
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Intelligent Document Review - Up to 30 queries per user per
										month
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Digital Signatures - Unlimited personal and team signatures
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>Scan-to-Text - Unlimited text extraction</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>Document Hosting - Limited by storage</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Boards - Publish unlimited free and premium content with 10%
										platform fee on premium publications
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>Riteforms – 2 forms per user per month</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Document Templates - Unlimited set of basic and advanced
										templates
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>Riteforms - 10 forms per user per month</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>Storage - 5GB cloud storage</span>
								</p>
							</section>
						</div>

						<div className={styles.pricing__cards}>
							<h2>Business Plan</h2>
							<div className={styles.price__container}>
								<p className={styles.price}>£100</p>
								<p>Billed Monthly</p>
							</div>
							<button className={styles.price__btn}>Get Early Access</button>

							<section className={styles.pricing__cards__features}>
								<p>
									<img src={SVG23} alt="" />
									<span>Add 10 team members to your Business account</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Instant Document Creation - 100 documents per month
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Intelligent Document Review - Up to 180 queries per user per
										month
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Digital Signatures - Unlimited personal and team signatures
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Scan-to-Text - Unlimited text extraction</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Document Hosting - Limited by storage</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Boards - Publish unlimited free and premium content with 10%
										platform fee on premium publications
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Document Templates - Unlimited set of basic and advanced
										templates
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Riteforms - 50 forms per user per month</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Storage & Usage – 50GB cloud storage</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Create up to 5 teams with a maximum of 5 members each
									</span>
								</p>
							</section>
						</div>
					</section>

					<section className={styles.container}>
						<div className={styles.planTiers}>
							<div className={styles.planTier}>
								<h2>Comparing The Plans</h2>
							</div>
							<div className={styles.planTier}>
								<h3>Free</h3>
								<button className={styles.getStartedBtn}>Get Started</button>
							</div>
							<div className={styles.planTier}>
								<h3>Pro Plan</h3>
								<button className={styles.getStartedBtn}>Get Started</button>
							</div>
							<div className={styles.planTier}>
								<h3>Business Plan</h3>
								<button className={styles.getStartedBtn}>Get Started</button>
							</div>
						</div>

						<div className={styles.featuresTable}>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Number Of users</div>
								<div className={styles.featureValue}>Single User</div>
								<div className={styles.featureValue}>Up to 3 Users</div>
								<div className={styles.featureValue}>Up to 11 Users</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>
									Intelligent Document Creation
								</div>
								<div className={styles.featureValue}>3 documents per month</div>
								<div className={styles.featureValue}>
									15 documents per month
								</div>
								<div className={styles.featureValue}>
									100 documents per month
								</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>
									Intelligent Document Review
								</div>
								<div className={styles.featureValue}>
									Up to 3 queries per user per month
								</div>
								<div className={styles.featureValue}>
									Up to 30 queries per user per month
								</div>
								<div className={styles.featureValue}>
									Up to 180 queries per user per month
								</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Digital Signatures</div>
								<div className={styles.featureValue}>Unlimited</div>
								<div className={styles.featureValue}>Unlimited</div>
								<div className={styles.featureValue}>Unlimited</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Scan-To-Text</div>
								<div className={styles.featureValue}>
									Extract only one page per document
								</div>
								<div className={styles.featureValue}>Unlimited</div>
								<div className={styles.featureValue}>Unlimited</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Document Hosting</div>
								<div className={styles.featureValue}>Limited by storage</div>
								<div className={styles.featureValue}>Limited by storage</div>
								<div className={styles.featureValue}>Limited by storage</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Boards</div>
								<div className={styles.featureValue}>
									<p>Unlimited publications at 25% platform fee for premium</p>
								</div>
								<div className={styles.featureValue}>
									<p>Unlimited publications at 10% platform fee for premium</p>
								</div>
								<div className={styles.featureValue}>
									<p>Unlimited publications at 10% platform fee for premium</p>
								</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Document Templates</div>
								<div className={styles.featureValue}>
									Limited set of basic templates
								</div>
								<div className={styles.featureValue}>
									Unlimited set of basic templates
								</div>
								<div className={styles.featureValue}>
									Unlimited set of basic templates
								</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Ribetoms</div>
								<div className={styles.featureValue}>
									2 forms per user per month
								</div>
								<div className={styles.featureValue}>
									10 forms per user per month
								</div>
								<div className={styles.featureValue}>
									50 forms per user per month
								</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Storage</div>
								<div className={styles.featureValue}>1GB cloud storage</div>
								<div className={styles.featureValue}>5GB cloud storage</div>
								<div className={styles.featureValue}>50GB cloud storage</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>
									Creating multiple teams
								</div>
								<div className={styles.featureValue}>No</div>
								<div className={styles.featureValue}>No</div>
								<div className={styles.featureValue}>Yes</div>
							</div>
						</div>
					</section>
				</section>

				<section className={styles.main4}>
					<WaitList />
				</section>
			</main>
		</>
	);
};

export default Pricing;
