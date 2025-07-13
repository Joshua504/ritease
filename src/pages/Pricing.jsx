import styles from '../styles/pricing.module.scss';

import SVG23 from '../assets/SVG(23).svg';
import SVG24 from '../assets/SVG(24).svg';
import WaitList from '../components/WaitList';
import { useState } from 'react';

const Pricing = () => {
	const [activeButton, setActiveButton] = useState(0);

	const buttons = [
		{
			text: 'monthly',
			billing: 'Billed Monthly',
		},
		{
			text: 'Quarterly',
			billing: 'Billed Quarterly',
		},
		{
			text: 'yearly',
			billing: 'Billed Yearly',
		},
	];

	const handleButtonClick = (index) => {
		setActiveButton(index);
	};

	return (
		<>
			<header className={styles.head}>
				<h1>Plans that work as hard as you do</h1>
				<p>
					Give your team the tools to move faster, work smarter, and deliver
					more
				</p>
			</header>

			<main>
				<section className={styles.main1}>
					<div className={styles.main1__mini1}>
						{buttons.map((btn, index) => (
							<button
								className={activeButton === index ? styles.active__btn : ''}
								key={index}
								onClick={() => handleButtonClick(index)}>
								{btn.text}
							</button>
						))}
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
										Single User — Can be added to only 1 team at a time, and
										cannot add people to teams. Cannot create teams to co-manage
										multiple files and folders
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Unlimited document collaboration</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Limited Notes & Docs — Create and edit up to your storage
										limit
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										No AI Features — Access our core tools, without AI
										enhancements
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										10MB Cloud Storage — Store, collaborate and manage your
										files with ease
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Scan Documents — Digitize your paperwork effortlessly
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Unlimited Self-Signing — Sign as many documents as you like
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Invite Signers — Request signatures from up to 1 person per
										document, on 3 documents/month
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Create Forms — Design forms and collect responses and
										payments easily; 1% fee on payments received
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Publish & Earn — Share your Notes and earn from your premium
										content, subject to 30% platform fee
									</span>
								</p>
							</section>
						</div>

						<div className={styles.pricing__cards}>
							<h2>Alpha Plan</h2>
							<div className={styles.price__container}>
								<p className={styles.price}>£10</p>
								<p>{buttons[activeButton].billing}</p>
							</div>
							<button className={styles.price__btn}>Join Waitlist</button>

							<section className={styles.pricing__cards__features}>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Team Access — Create up to 2 teams and be added to unlimited
										teams to co-manage multiple files and folders
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Unlimited document collaboration</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Unlimited Notes & Documents — Create and edit with a higher
										storage limit
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Limited AI Access — Up to 300,000 tokens/month using Gemini
										2.5 only
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Generate images — Up to 5 images per month</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										1GB Cloud Storage — More room for your growing work
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Scan Documents — Easily digitize any paperwork</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Unlimited Self-Signing — Sign all your documents with no
										limits
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Invite Signers — Request up to 5 signers per document, on up
										to 20 docs/month
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Create Smart Forms — Collect responses, accept payments, and
										access AI-powered insights (limited by AI credits); 0.5% fee
										on payments received
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Publish & Earn — Monetize your Notes; 20% platform fee on
										premium content
									</span>
								</p>
							</section>
						</div>

						<div className={styles.pricing__cards}>
							<div className={styles.pricing__plans}>
								<h2>Pro Plan</h2> <p>Most Popular</p>
							</div>
							<div className={styles.price__container}>
								<p className={styles.price}>£30</p>
								<p>{buttons[activeButton].billing}</p>
							</div>
							<button className={styles.price__btn}>Get Early Access</button>

							<section className={styles.pricing__cards__features}>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Team Access — Create up to 10 teams and be added to
										unlimited teams to co-manage multiple files and folders
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>Unlimited document collaboration</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Unlimited Notes & Documents — Create, edit, and organize
										with more storage
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>Generate images — Up to 20 images per month</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										High AI Access — Enjoy up to 1 million tokens/month and
										access to multiple AI models for smarter workflows
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										10GB Cloud Storage — Store, manage, and collaborate with
										ease
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>Scan Documents — Easily digitize any paperwork</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>Document Hosting - Limited by storage</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Invite Signers — Request signatures from up to 15 people per
										document, on 500 documents/month
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Create & Model Forms — Collect responses, accept payments,
										and unlock advanced AI insights; 0.5% fee on payments
										received
									</span>
								</p>
								<p>
									<img src={SVG24} alt="" />
									<span>
										Publish & Earn More — Monetize premium Notes with only a 10%
										platform fee
									</span>
								</p>
							</section>
						</div>

						<div className={styles.pricing__cards}>
							<h2>Business Plan</h2>
							<div className={styles.price__container}>
								<p className={styles.price}>£100</p>
								<p>{buttons[activeButton].billing}</p>
							</div>
							<button className={styles.price__btn}>Get Early Access</button>

							<section className={styles.pricing__cards__features}>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Team Access — Create unlimited teams and be added to
										unlimited teams to co-manage multiple files and folders
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Unlimited document collaboration</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Unlimited Notes & Documents — Create and edit without
										limits, with more storage
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Generate images — Up to 50 images per month</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										High AI Access — Get up to 3 million tokens/month and access
										to more AI models for advanced output
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										100GB Cloud Storage — Collaborate and manage a high volume
										of files with ease
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Scan Documents — Seamlessly digitize all types of documents
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>Document Hosting - Limited by storage</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Invite Signers — Request signatures from up to 30 people on
										up to 3,000 documents/month
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Create & Model Forms — Collect responses, accept payments,
										and access deep AI insights; 0.3%% fee on payments received
									</span>
								</p>
								<p>
									<img src={SVG23} alt="" />
									<span>
										Publish & Earn — Monetize premium Notes with just a 5%
										platform fee
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
								<h3>Alpha Plan</h3>
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
								<div className={styles.featureValue}>Single User</div>
								<div className={styles.featureValue}>Up to 4 users</div>
								<div className={styles.featureValue}>Up to 11 Users</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Team Access</div>
								<div className={styles.featureValue}>No</div>
								<div className={styles.featureValue}>Yes</div>
								<div className={styles.featureValue}>Yes</div>
								<div className={styles.featureValue}>Yes</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>
									Intelligent Document Creation
								</div>
								<div className={styles.featureValue}>no</div>
								<div className={styles.featureValue}>Limited</div>
								<div className={styles.featureValue}>Yes</div>
								<div className={styles.featureValue}>Yes</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>
									Intelligent Document Review
								</div>
								<div className={styles.featureValue}>no</div>
								<div className={styles.featureValue}>limited</div>
								<div className={styles.featureValue}>yes</div>
								<div className={styles.featureValue}>yes</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Digital Signatures</div>
								<div className={styles.featureValue}>yes</div>
								<div className={styles.featureValue}>yes</div>
								<div className={styles.featureValue}>yes</div>
								<div className={styles.featureValue}>yes</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Scan-To-Text</div>
								<div className={styles.featureValue}>yes</div>
								<div className={styles.featureValue}>yes</div>
								<div className={styles.featureValue}>yes</div>
								<div className={styles.featureValue}>yes</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Document Storage</div>
								<div className={styles.featureValue}>
									<p>Limited by storage</p>
								</div>
								<div className={styles.featureValue}>
									<p>Limited by storage</p>
								</div>
								<div className={styles.featureValue}>
									<p>Limited by storage</p>
								</div>
								<div className={styles.featureValue}>
									<p>Limited by storage</p>
								</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Boards</div>
								<div className={styles.featureValue}>
									Unlimited publications at 25% platform fee for premium
								</div>
								<div className={styles.featureValue}>
									Unlimited publications at 20% platform fee for premium
								</div>
								<div className={styles.featureValue}>
									Unlimited publications at 10% platform fee for premium
								</div>
								<div className={styles.featureValue}>
									Unlimited publications at 10% platform fee for premium
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
								<div className={styles.featureValue}>
									Unlimited set of basic templates
								</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Forms</div>
								<div className={styles.featureValue}>Unlimited, no AI</div>
								<div className={styles.featureValue}>Unlimited, with AI</div>
								<div className={styles.featureValue}>Unlimited, with AI</div>
								<div className={styles.featureValue}>Unlimited, with AI</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Storage</div>
								<div className={styles.featureValue}>100MB cloud storage</div>
								<div className={styles.featureValue}>1GB cloud storage</div>
								<div className={styles.featureValue}>10GB cloud storage</div>
								<div className={styles.featureValue}>100GB cloud storage</div>
							</div>
							<div className={styles.featureRow}>
								<div className={styles.featureName}>Generate images</div>
								<div className={styles.featureValue}>No</div>
								<div className={styles.featureValue}>Up to 5 per month</div>
								<div className={styles.featureValue}>Up to 20 per month</div>
								<div className={styles.featureValue}>Up to 100 per month</div>
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
