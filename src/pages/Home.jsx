import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/home.module.scss';

/* -------------------------------------------------------------------------- */
/*                                 components                                 */
/* -------------------------------------------------------------------------- */
import AnimatedText from '../components/AnimatedText';
import WaitList from '../components/WaitList';
import Faq from '../components/Faq';
/* -------------------------------------------------------------------------- */
/*                                   images                                   */
/* -------------------------------------------------------------------------- */
import PlayBtn from '../assets/bx-play.svg';
import banner from '../assets/Banner.svg';
import banner2 from '../assets/Banner2.svg';
import banner3 from '../assets/Banner3.png';
import banner4 from '../assets/Banner4.png';
import banner5 from '../assets/Banner5.png';
import banner6 from '../assets/Banner6.png';
import Riteaseai from '../assets/Riteaseai.svg';
import Riteaseboard from '../assets/Riteaseboard.svg';
import Riteaseform from '../assets/Riteaseform.svg';
import Riteasescan from '../assets/Riteasescan.svg';
import Riteasepdf from '../assets/Riteasepdf.svg';
import Riteasedoc from '../assets/Riteasedoc.svg';
import Smart from '../assets/Smart.svg';
import Blockchain from '../assets/Blockchain.svg';
import Publish from '../assets/Publish.svg';
import SVG1 from '../assets/SVG.svg';
import SVG2 from '../assets/SVG(1).svg';
import SVG3 from '../assets/SVG(2).svg';
import SVG4 from '../assets/SVG(3).svg';
import SVG5 from '../assets/SVG(4).svg';
import SVG6 from '../assets/SVG(5).svg';
import SVG7 from '../assets/SVG(7).svg';
import SVG8 from '../assets/SVG(8).svg';
import SVG9 from '../assets/SVG(9).svg';
import SVG10 from '../assets/SVG(10).svg';
import SVG11 from '../assets/SVG(11).svg';
import SVG12 from '../assets/SVG(12).svg';
import SVG13 from '../assets/SVG(13).svg';
import SVG14 from '../assets/SVG(14).svg';
import SVG15 from '../assets/SVG(15).svg';
import SVG16 from '../assets/SVG(16).svg';
import SVG41 from '../assets/SVG(41).svg';
import SVG42 from '../assets/SVG(42).svg';
import SVG43 from '../assets/SVG(43).svg';
import Button from '../components/Button';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	const [activeListItem, setActiveListItem] = useState(0);
	const [activeNextGenItem, setActiveNextGenItem] = useState(0);
	const [activeFeatures, setActiveFeatures] = useState(0);

	const main2ContainerRef = useRef(null);
	const nextGenItemsRef = useRef([]);

	useEffect(() => {
		// Make sure the DOM element exists
		if (main2ContainerRef.current && nextGenItemsRef.current.length) {
			// Create the ScrollTrigger animation for pinning
			const pinAnimation = ScrollTrigger.create({
				trigger: main2ContainerRef.current,
				start: 'top 200px', // Pin when 200px from the top
				end: 'bottom top',
				pin: true, // Enable pinning
				pinSpacing: true, // Add space for the pinned element
				markers: false, // Set to true during development to see the trigger points
				scrub: 1, // Smooth scrubbing effect
				onEnter: () => {
					gsap.to(main2ContainerRef.current, {
						opacity: 1,
						duration: 0.5,
						ease: 'power2.out',
					});
				},
				onLeaveBack: () => {
					gsap.to(main2ContainerRef.current, {
						opacity: 0.8,
						duration: 0.5,
						ease: 'power2.in',
					});
				},
			});

			// Create scroll triggers for each item
			nextGenItemsRef.current.forEach((item, index) => {
				if (!item) return;

				ScrollTrigger.create({
					trigger: item,
					start: 'top center',
					end: 'bottom center',
					onEnter: () => setActiveNextGenItem(index),
					onEnterBack: () => setActiveNextGenItem(index),
					markers: false,
				});
			});

			// Clean up the animation when the component unmounts
			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		}
	}, [nextGenItemsRef.current.length]);

	const faqData = [
		{
			question: 'What is Ritease?',
			answer:
				'Ritease is an intelligent and secure platform for creating, managing, and selling documents, combining human intelligence with AI and blockchain technology.',
		},
		{
			question: 'Who can use Ritease?',
			answer:
				'Ritease streamlines your document workflows, allowing you to focus on what truly matters. Our platform offers smart document management, AI-powered content generation, electronic signatures, business forms, scan-to-text functionality, and the ability to publish and monetize your content.',
		},
		{
			question:
				'What makes Ritease different from other document management tools?',
			answer:
				'Absolutely! Ritease is designed to be great for individuals, perfect for teams, and essential for businesses. Our flexible platform scales with your needs.',
		},
		{
			question: 'What can I do with Ritease?',
			answer:
				'Our AI technology analyzes your requirements and automatically generates professional documents, saving you time and ensuring consistency. Simply input your needs, and let our AI handle the rest.',
		},
		{
			question: 'Does Ritease support e-signatures?',
			answer:
				'Yes! You can join our waitlist for early access or watch our demo to see Ritease in action before making a decision.',
		},
		{
			question: 'How secure are my documents on Ritease?',
			answer:
				'Yes! You can join our waitlist for early access or watch our demo to see Ritease in action before making a decision.',
		},
		{
			question: 'Do I need to download anything to use Ritease?',
			answer:
				'Yes! You can join our waitlist for early access or watch our demo to see Ritease in action before making a decision.',
		},
	];

	const listItems = [
		{ icon: SVG1, text: 'Create Notes and Docs', bannerImage: banner },
		{ icon: SVG2, text: 'Generate with AI', bannerImage: banner2 },
		{ icon: SVG3, text: 'Sign Documents', bannerImage: banner3 },
		{ icon: SVG4, text: 'Forms for Business', bannerImage: banner4 },
		{ icon: SVG5, text: 'Scan-To-Text', bannerImage: banner5 },
		{ icon: SVG6, text: 'Publish and Earn', bannerImage: banner6 },
	];

	const nextGenFeatures = [
		{
			name: 'Riteditor',
			image: SVG8,
		},
		{
			name: 'Ritease AI',
			image: Riteaseai,
		},
		{
			name: 'Boards',
			image: Riteaseboard,
		},
		{
			name: 'Ritease Forms',
			image: Riteaseform,
		},
		{
			name: 'Scan-To-Text',
			image: Riteasescan,
		},
		{
			name: 'PDF Tools',
			image: Riteasepdf,
		},
		{
			name: 'Document Hosting',
			image: Riteasedoc,
		},
		{
			name: 'Rite SDK/API',
			image: Riteasescan,
		},
	];

	const keyFeatures = [
		{
			name: 'Instant Document Creation',
			description:
				'Use Ritease AI to create documents instantly using prompts, such as letterheads, invoices, magazines, business reports, and academic documents.',
			image: SVG10,
		},
		{
			name: 'Smart Content Creation',
			description:
				"Ritease AI's writing assist and image generation tools help you create tailored content 10x faster.",
			image: Smart,
		},
		{
			name: 'Blockchain-Grade Security',
			description:
				'Document signing and changes to documents are all tracked on the Base blockchain, providing top notch security and transparency for your teams.',
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

	const addToNextGenItemsRef = (el, index) => {
		if (el && !nextGenItemsRef.current.includes(el)) {
			nextGenItemsRef.current[index] = el;
		}
	};

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<h1 className={styles.l__text}>
						Smart Document Management, All in One Place.
					</h1>
					<p className={styles.m__text}>
						The all-in-one platform for freelancers, startups, and enterprises
						to create, sign, manage, and automate documents and admin
						forms—powered by AI.
					</p>
					<div className={styles.btns__container}>
						<button className={styles.btns}>
							Watch demo <img src={PlayBtn} alt="" />
						</button>
						<button className={styles.btns}>Join waitlist</button>
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
				<section className={styles.main1}>
					<div className={styles.heading}>
						<h2 className={styles.title}>
							One Platform for All Your Document Workflows.
						</h2>
						<p className={styles.text}>
							Ritease streamlines your workflow, so you can focus on what truly
							matters
						</p>
					</div>
					<section className={styles.cards__container}>
						<div className={styles.cards}>
							<div className={styles.overlay}></div>
							<div className={styles.card_img}>
								<img className={styles.img} src={SVG41} alt="" />
							</div>
							<div className={styles.cards__text}>
								<h3>Seamless Design</h3>
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
								<h3>Monetise with Ease</h3>
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
							fontSize="1.5rem"
							className={styles.homeButton}
						/>
					</div>
					<section className={styles.main2__container} ref={main2ContainerRef}>
						<div>
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
										ref={(el) => addToNextGenItemsRef(el, index)}
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
								<button className={styles.btn}>learn more</button>
								<button className={styles.btn}>join waitlist</button>
							</div>
						</div>
					</section>
				</section>
				<div className={styles.rite__img__con}>
					<img className={styles.rite__img} src={SVG9} alt="" />
				</div>

				<section className={styles.main3}>
					<div className={styles.main3__heading}>
						<h2 className={styles.l__txt}>Key Features We Have For You</h2>
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
										onClick={() => handleFeaturesClick(index)}>
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
										<span>Edit suggestions</span>
									</li>
									<p>
										AI analyzes your docs and suggests enhancements for clarity
										and completeness
									</p>
								</div>
								<div className={styles.main3__elevate__list}>
									<li className={styles.main3__elevate__list__item}>
										<div>
											<img src={SVG13} alt="" />
										</div>
										<span>Automatic translations</span>
									</li>
									<p>
										Expand global reach with one- click multi-language support
									</p>
								</div>
								<div className={styles.main3__elevate__list}>
									<li className={styles.main3__elevate__list__item}>
										<div>
											<img src={SVG14} alt="" />
										</div>
										<span>Writing assistance</span>
									</li>
									<p>
										Craft clearer, more engaging documentation with real-time
										suggestions
									</p>
								</div>
								<div className={styles.main3__elevate__list}>
									<li className={styles.main3__elevate__list__item}>
										<div>
											<img src={SVG15} alt="" />
										</div>
										<span>Integrations</span>
									</li>
									<p>
										Connect your favorite tools and workflows to streamline
										documentation
									</p>
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
					<WaitList />
				</section>

				<section className={styles.main5}>
					<div className={styles.faq__heading}>
						<h2>Frequently Asked Questions</h2>
						<p>Some answers to satisfy your curiosity about Ritease</p>
					</div>
					<section className={styles.faq}>
						{faqData.map((faq, index) => (
							<Faq key={index} question={faq.question} answer={faq.answer} />
						))}
					</section>
				</section>
			</main>
		</>
	);
};

export default Home;
