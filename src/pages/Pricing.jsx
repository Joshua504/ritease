import styles from '../styles/pricing.module.scss';

import SVG23 from '../assets/SVG(23).svg';
import SVG24 from '../assets/SVG(24).svg';

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

				  <section className={styles.Table}>
						<section>
							<div className={styles.Table__title}>
								<h2>Comparing The Plans</h2>
							</div>
							<div className={styles.Table__content__title}>
								<h2>Free</h2>
								<button>Get Started</button>
							</div>
						</section>
					</section>
				</section>
			</main>
		</>
	);
};

export default Pricing;
