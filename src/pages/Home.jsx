import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.scss';

/* -------------------------------------------------------------------------- */
/*                                 components                                 */
/* -------------------------------------------------------------------------- */
import AnimatedText from '../components/AnimatedText';
import WaitList from '../components/WaitList';
import Faq from '../components/Faq';
import CookiePopup from '../components/CookiePopup';
/* -------------------------------------------------------------------------- */
/*                                   images                                   */
/* -------------------------------------------------------------------------- */
import PlayBtn from '../assets/bx-play.svg';
import banner from '../assets/Banner.svg';
import banner2 from '../assets/Banner2.svg';
import banner3 from '../assets/Banner3.png';
import banner4 from '../assets/Banner4.svg';
import banner5 from '../assets/Banner5.svg';
import banner6 from '../assets/Banner6.svg';
import Riteaseai from '../assets/Riteaseai.svg';
import Riteasesign from '../assets/Signature.svg';
import Riteaseform from '../assets/Form.svg';
import Ritebox from '../assets/Ritebox.svg';
import Riteasetemp from '../assets/Riteasetemp.svg';
import Generateai from '../assets/Generateai.svg';
import Scan from '../assets/Scan.svg';
import Smart from '../assets/Smart.svg';
import Blockchain from '../assets/Blockchain.svg';
import Publish from '../assets/Publish1.svg';
import SVG1 from '../assets/SVG.svg';
import SVG2 from '../assets/SVG(1).svg';
import SVG3 from '../assets/SVG(2).svg';
import SVG4 from '../assets/SVG(3).svg';
import SVG5 from '../assets/SVG(4).svg';
import SVG6 from '../assets/SVG(5).svg';
import SVG8 from '../assets/SVG(8).svg';
import SVG9 from '../assets/SVG(9).svg';
import SVG10 from '../assets/SVG(10).svg';
import SVG11 from '../assets/SVG(11).svg';
import SVG12 from '../assets/SVG(12).svg';
import SVG13 from '../assets/SVG(13).svg';
import svg13 from '../assets/svg13.svg';
import SVG14 from '../assets/svg14.svg';
import SVG16 from '../assets/SVG(16).svg';
import SVG41 from '../assets/SVG(41).svg';
import SVG42 from '../assets/SVG(42).svg';
import SVG43 from '../assets/SVG(43).svg';
import Button from '../components/Button';
import stripe from '../assets/Stripe.svg';
import grok from '../assets/Grok logo.svg';
import gpt from '../assets/ChatGPT logo.svg';
import claude from '../assets/Claude.svg';
import base from '../assets/Base.svg';
import binance from '../assets/Binance logo.svg';
import cloudflare from '../assets/CloudFlare.svg';
import favicon from '../assets/Gemini.svg';
import paystack from '../assets/Paystack.svg';

const Home = ({ onEarlyAccessClick }) => {
	const [activeListItem, setActiveListItem] = useState(0);
	const [activeNextGenItem, setActiveNextGenItem] = useState(0);
	const [activeFeatures, setActiveFeatures] = useState(0);
	const [showCookiePopup, setShowCookiePopup] = useState(false);

	const faqData = [
		{
			question: 'What is Ritease?',
			answer:
				'Ritease is an all-in-one smart document management platform that lets you create, sign, and manage documents with built-in AI tools, payment collection features, and blockchain-grade security.',
		},
		{
			question: 'Who can use Ritease?',
			answer:
				'Ritease is designed for individuals, teams, and enterprises—anyone who needs smart, efficient document management.',
		},
		{
			question:
				'What makes Ritease different from other document management tools?',
			answer:
				'Unlike other platforms, Ritease combines document creation, editing, e-signing, form building, payments, AI and storage, all in one platform. No need for multiple tools or subscriptions.',
		},
		{
			question: 'Can I collect payments on Ritease?',
			answer:
				'Yes. You can publish premium Notes with a shareable link and get paid when people access your content. You can also collect payments through custom forms built with the Ritease Forms tool.',
		},
		{
			question: 'Does Ritease support e-signatures?',
			answer:
				'Yes! Ritease includes full e‑signature functionality, allowing you to sign documents digitally, invite others to sign, and track signatures in real time, all within the same platform.',
		},
		{
			question: 'Can I collaborate with others on Ritease in real time?',
			answer:
				'Yes. Ritease lets you invite team members to work on documents, forms, or folders with real-time editing, commenting, and access control, so everyone stays in sync, wherever they are.',
		},
	];

	const listItems = [
		{ icon: SVG1, text: 'Create Docs', bannerImage: banner },
		{ icon: SVG2, text: 'Generate Docs', bannerImage: banner2 },
		{ icon: SVG3, text: 'Sign Docs', bannerImage: banner3 },
		{ icon: SVG4, text: 'Admin Forms', bannerImage: banner4 },
		{ icon: SVG5, text: 'Scan-To-Text', bannerImage: banner5 },
		{ icon: SVG6, text: 'Publish and Earn', bannerImage: banner6 },
	];

	const nextGenFeatures = [
		{
			name: 'Note Editor',
			image: SVG8,
		},
		{
			name: 'Document Editor',
			image: Riteaseai,
		},
		{
			name: 'Ritebox',
			image: Ritebox,
		},
		{
			name: 'Templates',
			image: Riteasetemp,
		},
		{
			name: 'Generate with AI',
			image: Generateai,
		},
		{
			name: 'Scan',
			image: Scan,
		},
		{
			name: 'Signature',
			image: Riteasesign,
		},
		{
			name: 'Forms',
			image: Riteaseform,
		},
	];

	const keyFeatures = [
		{
			name: 'Instant Document Creation',
			description:
				'Use Ritease AI to create documents instantly using prompts, such as letterheads, invoices, business reports, academic documents, and more.',
			image: SVG10,
		},
		{
			name: 'Smart Content Creation',
			description:
				"Ritease AI's writing assist and image generation tools help you create and insert tailored content using prompts, 10x faster.",
			image: Smart,
		},
		{
			name: 'Auto-Vet Forms',
			description:
				'Auto-vetting lets you set the answers you’re looking for, so when people fill your form, Ritease instantly shows you who meets the mark—no manual checking needed.',
			image: Blockchain,
		},
		{
			name: 'Publish and Earn with Ease',
			description:
				"Ritease empowers creators to earn money by publishing their work and sharing the publication links. Whether it's an article, a novel, or a research piece, you set the price for your premium content, and get paid whenever readers pay to read your work.",
			image: Publish,
		},
	];

	const handleListItemClick = (index) => {
		setActiveListItem(index);
	};

	const handleNextGenItemClick = (index) => {
		setActiveNextGenItem(index);
	};
	const handleFeaturesClick = (index) => {
		setActiveFeatures(index);
	};

	const handleFeaturesHover = (index) => {
		setActiveFeatures(index);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveListItem((prev) => (prev + 1) % listItems.length);
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveNextGenItem((prev) => (prev + 1) % nextGenFeatures.length);
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		// Show cookie popup on page load
		setShowCookiePopup(true);
	}, []);

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<h1 className={styles.l__text}>
						Smart Document Management, All in One Place.
					</h1>
					<p className={styles.m__text}>
						The all-in-one platform for freelancers, startups, and enterprises
						to create, sign, manage, collaborate on, store documents and admin
						forms, and collect payments, powered by AI.
					</p>
					<div className={styles.btns__container}>
						<button className={styles.btns}>
							Watch demo <img src={PlayBtn} alt="" />
						</button>
					</div>
				</div>

				<div className={styles.banner}>
					<ul className={styles.list}>
						{listItems.map((item, index) => (
							<li
								key={index}
								className={`${styles.list__item} ${
									activeListItem === index ? styles.list__item__active : ''
								}`}
								onClick={() => handleListItemClick(index)}>
								<img src={item.icon} alt="" />
								<span>{item.text}</span>
							</li>
						))}
					</ul>
					<img
						className={styles.banner_img}
						src={listItems[activeListItem].bannerImage}
						alt=""
					/>
				</div>
			</header>

			<main className={styles.main}>
				<section className={styles.ecosystem}>
					<h2 className={styles.eco_title}>our ecosystem</h2>
					<section className={styles.ecosystem_container}>
						<div>
							<img src={stripe} alt="" />
						</div>
						<div>
							<img src={grok} alt="" />
						</div>
						<div>
							<img src={gpt} alt="" />
						</div>
						<div>
							<img src={claude} alt="" />
						</div>
						<div>
							<img src={base} alt="" />
						</div>
						<div>
							<img src={binance} alt="" />
						</div>
						<div>
							<img src={cloudflare} alt="" />
						</div>
						<div>
							<img src={paystack} alt="" />
						</div>
						<div>
							<img src={favicon} alt="" />
						</div>
					</section>
				</section>

				<section className={styles.main1}>
					<div className={styles.heading}>
						<h2 className={styles.title}>
							One Platform for All Your Document Workflows.
						</h2>
						<p className={styles.text}>
							Document creation, editing, e-signing, form building, payments,
							and AI, all in one platform.
						</p>
					</div>
					<section className={styles.cards__container}>
						<div className={styles.cards}>
							<div className={styles.overlay}></div>
							<div className={styles.card_img}>
								<img className={styles.img} src={SVG41} alt="" />
							</div>
							<div className={styles.cards__text}>
								<h3>Seamless Setup</h3>
							</div>
						</div>
						<div className={styles.cards}>
							<div className={styles.overlay}></div>
							<div className={styles.card_img}>
								<img className={styles.img} src={SVG42} alt="" />
							</div>
							<div className={styles.cards__text}>
								<h3>All-in-One Document Solution</h3>
							</div>
						</div>
						<div className={styles.cards}>
							<div className={styles.overlay}></div>
							<div className={styles.card_img}>
								<img className={styles.img} src={SVG43} alt="" />
							</div>
							<div className={styles.cards__text}>
								<h3>Built for Teams</h3>
							</div>
						</div>
					</section>
				</section>

				<section className={styles.main2}>
					<div className={styles.heading1}>
						<AnimatedText
							animeText={
								'Great for Individuals. Perfect for Teams. Essential for Businesses.'
							}
						/>
						<Button
							btnText={'Get Early Access Now!'}
							fontSize="1rem"
							padding="20px 32px"
							className={styles.homeButton}
							onClick={() => onEarlyAccessClick()}
						/>
					</div>
					<section className={styles.main2__container}>
						<div className={styles.nextgen_con}>
							<img
								className={styles.nextgen}
								src={nextGenFeatures[activeNextGenItem].image}
								alt={nextGenFeatures[activeNextGenItem].name}
							/>
						</div>
						<section className={styles.main2__wrapper}>
							<div className={styles.main2__textcontainer}>
								<h2 className={styles.anime__subtitle}>
									The Next-Gen Of Smart Document Management
								</h2>
								<p className={styles.anime__text}>
									Say goodbye to scattered files and multiple apps. Ritease
									brings everything you need to manage documents into one
									seamless platform for individuals, teams, and businesses.
								</p>
							</div>

							<ul className={styles.main2__textcontainerlist}>
								{nextGenFeatures.map((feature, index) => (
									<li
										key={index}
										className={`${styles.main2__textcontainerlist__item} ${
											activeNextGenItem === index
												? styles.main2__textcontainerlist__item__active
												: ''
										}`}
										onClick={() => handleNextGenItemClick(index)}>
										<div className={styles.indicator}></div>
										<span>{feature.name}</span>
									</li>
								))}
							</ul>
						</section>
					</section>
					<section className={styles.main2__container1}>
						<div className={styles.main2__heading2}>
							<h2 className={styles.l__txt}>
								The Only Document Tool You’ll Ever Need
							</h2>
							<p className={styles.m__txt}>
								Your all-in-one workspace for getting documents done. Smart
								writing, secure signing, and seamless sharing—for people who
								mean business. Built for founders, freelancers, and fast-moving
								teams.
							</p>
							<div className={styles.btn__con}>
								<button className={styles.btn}>
									<Link to="/features">learn more</Link>
								</button>
								<button
									className={styles.btn}
									onClick={() => onEarlyAccessClick()}>
									join waitlist
								</button>
							</div>
						</div>
					</section>
				</section>
				<div className={styles.rite__img__con}>
					<img className={styles.rite__img} src={SVG9} alt="" />
				</div>

				<section className={styles.main3}>
					<div className={styles.main3__heading}>
						<h2 className={styles.l__txt}>
							Powerful Tools to Help You Do Your Best Work
						</h2>
						<p className={styles.m__txt}>
							What’s included in the Ritease platform
						</p>
					</div>
					<section className={styles.main3__container}>
						<div className={styles.main3__container__img}>
							<img src={keyFeatures[activeFeatures].image} alt="" />
						</div>
						<div className={styles.main3__container__text}>
							<ul className={styles.main3__container__list}>
								{keyFeatures.map((feature, index) => (
									<li
										key={index}
										className={`${styles.main3__container__list__item} ${
											activeFeatures === index
												? styles.main3__container__list__item__active
												: ''
										}`}
										onClick={() => handleFeaturesClick(index)}
										onMouseEnter={() => handleFeaturesHover(index)}>
										<div className={styles.indicator}></div>
										<div className={styles.indicator__container}>
											<span className={styles.list__item__l__txt}>
												{feature.name}
											</span>
											<p className={styles.list__item__m__txt}>
												{feature.description}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</section>
					<section className={styles.main3__elevate}>
						<div>
							<h2>Elevate document creation with intelligent features</h2>
							<ul>
								<div className={styles.main3__elevate__list}>
									<li className={styles.main3__elevate__list__item}>
										<div>
											<img src={SVG12} alt="" />
										</div>
										<span>Generate content</span>
									</li>
									<p>
										Prompt AI to generate content within your document without
										switching apps
									</p>
								</div>
								<div className={styles.main3__elevate__list}>
									<li className={styles.main3__elevate__list__item}>
										<div>
											<img src={svg13} alt="" />
										</div>
										<span>Interact with docs</span>
									</li>
									<p>Ask questions about your docs and let AI respond to you</p>
								</div>
								<div className={styles.main3__elevate__list}>
									<li className={styles.main3__elevate__list__item}>
										<div>
											<img src={SVG14} alt="" />
										</div>
										<span>Writing assist</span>
									</li>
									<p>
										With single clicks, improve your writing, fix spelling, and
										more
									</p>
								</div>
								<div className={styles.main3__elevate__list}>
									<li className={styles.main3__elevate__list__item}>
										<div>
											<img src={SVG13} alt="" />
										</div>
										<span>Translate content</span>
									</li>
									<p>Click to translate content into various languages</p>
								</div>
							</ul>
						</div>
						<div>
							<img className={styles.elevate__img} src={SVG11} alt="" />
						</div>
					</section>
				</section>

				<section className={styles.main4}>
					<div className={styles.main4__banner}>
						<img src={SVG16} alt="" />
					</div>
					<WaitList onEarlyAccessClick={onEarlyAccessClick} />
				</section>

				<section className={styles.main5}>
					<div className={styles.faq__heading}>
						<h2>Frequently Asked Questions</h2>
						<p>Some answers to satisfy your curiosity about Ritease</p>
					</div>
					<section className={styles.faq}>
						{faqData.map((faq, index) => (
							<Faq
								key={index}
								question={faq.question}
								answer={faq.answer}
								isFirst={index === 0}
							/>
						))}
					</section>
				</section>
			</main>
			{showCookiePopup && (
				<CookiePopup onClose={() => setShowCookiePopup(false)} />
			)}
		</>
	);
};

export default Home;
