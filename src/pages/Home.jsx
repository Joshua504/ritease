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
import Button from '../components/Button';

const Home = () => {
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

	const btnText = 'Get Early Access Now!';
	const animeText =
		'Great for Individuals. Perfect for Teams. Essential for Businesses.';

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
						<li className={styles.list__item}>
							<img src={SVG1} alt="" />
							<span>Create Notes and Docs</span>
						</li>
						<li className={styles.list__item}>
							<img src={SVG2} alt="" />
							<span>Generate with AI</span>
						</li>
						<li className={styles.list__item}>
							<img src={SVG3} alt="" />
							<span>Sign Documents</span>
						</li>
						<li className={styles.list__item}>
							<img src={SVG4} alt="" />
							<span>Forms for Business</span>
						</li>
						<li className={styles.list__item}>
							<img src={SVG5} alt="" />
							<span>Scan-To-Text</span>
						</li>
						<li className={styles.list__item}>
							<img src={SVG6} alt="" />
							<span>Publish and Earn</span>
						</li>
					</ul>
					<img className={styles.banner_img} src={banner} alt="" />
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
								<img src={SVG7} alt="" />
							</div>
							<div className={styles.cards__text}>
								<h3>Seamless Design</h3>
							</div>
						</div>
						<div className={styles.cards}>
							<div className={styles.overlay}></div>
							<div className={styles.card_img}>
								<img src={SVG7} alt="" />
							</div>
							<div className={styles.cards__text}>
								<h3>All-in-One Document Solution</h3>
							</div>
						</div>
						<div className={styles.cards}>
							<div className={styles.overlay}></div>
							<div className={styles.card_img}>
								<img src={SVG7} alt="" />
							</div>
							<div className={styles.cards__text}>
								<h3>Monetise with Ease</h3>
							</div>
						</div>
					</section>
				</section>

				<section className={styles.main2}>
					<div className={styles.heading1}>
						<AnimatedText animeText={animeText} />
						<Button
							btnText={btnText}
							fontSize="1.5rem"
							className={styles.homeButton}
						/>
					</div>
					<section className={styles.main2__container}>
						<div>
							<img src={SVG8} alt="" />
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
								<li className={styles.main2__textcontainerlist__item}>
									<div className={styles.indicator}></div>
									<span>Riteditor</span>
								</li>
								<li className={styles.main2__textcontainerlist__item}>
									<div className={styles.indicator}></div>
									<span>Ritease AI</span>
								</li>
								<li className={styles.main2__textcontainerlist__item}>
									<div className={styles.indicator}></div>
									<span>Boards</span>
								</li>
								<li className={styles.main2__textcontainerlist__item}>
									<div className={styles.indicator}></div>
									<span>Ritease Forms</span>
								</li>
								<li className={styles.main2__textcontainerlist__item}>
									<div className={styles.indicator}></div>
									<span>Scan-To-Text</span>
								</li>
								<li className={styles.main2__textcontainerlist__item}>
									<div className={styles.indicator}></div>
									<span>PDF Tools</span>
								</li>
							</ul>
						</section>
					</section>
					<section className={styles.main2__container1}>
						<div className={styles.main2__heading2}>
							<h2 className={styles.l__txt}>Riteditor</h2>
							<p className={styles.m__txt}>
								Capture ideas, take notes, and draft content in a flexible,
								distraction-free space. Move away from rigid pages and let your
								thoughts flow effortlessly.
							</p>
							<div className={styles.btn__con}>
								<button className={styles.btn}>learn more</button>
								<button className={styles.btn}>join waitlist</button>
							</div>
						</div>
						<div>
							<img src={SVG9} alt="" />
						</div>
					</section>
				</section>

				<section className={styles.main3}>
					<div className={styles.main3__heading}>
						<h2 className={styles.l__txt}>Key Features We Have For You</h2>
						<p className={styles.m__txt}>
							What’s included in the Ritease platform
						</p>
					</div>
					<section className={styles.main3__container}>
						<div className={styles.main3__container__img}>
							<img src={SVG10} alt="" />
						</div>
						<div className={styles.main3__container__text}>
							<ul className={styles.main3__container__list}>
								<li className={styles.main3__container__list__item}>
									<div className={styles.indicator}></div>
									<div className={styles.indicator__container}>
										<span className={styles.list__item__l__txt}>
											Instant Document Creation
										</span>
										<p className={styles.list__item__m__txt}>
											Use Ritease AI to create documents instantly using
											prompts, such as letterheads, invoices, business reports,
											and academic documents.
										</p>
									</div>
								</li>
								<li className={styles.main3__container__list__item}>
									<div className={styles.indicator}></div>
									<div className={styles.indicator__container}>
										<span className={styles.list__item__l__txt}>
											Smart Content Creation
										</span>
										<p className={styles.list__item__m__txt}>
											Ritease AI's writing assist and image generation tools
											help you create tailored content 10x faster.
										</p>
									</div>
								</li>
								<li className={styles.main3__container__list__item}>
									<div className={styles.indicator}></div>
									<div className={styles.indicator__container}>
										<span className={styles.list__item__l__txt}>
											Blockchain-Grade Security
										</span>
										<p className={styles.list__item__m__txt}>
											Document signing and changes to documents are all tracked
											on the Base blockchain, providing top notch security and
											transparency for your teams.
										</p>
									</div>
								</li>
								<li className={styles.main3__container__list__item}>
									<div className={styles.indicator}></div>
									<div className={styles.indicator__container}>
										<span className={styles.list__item__l__txt}>
											Publish and Earn with Ease
										</span>
										<p className={styles.list__item__m__txt}>
											Ritease empowers creators to earn money by publishing
											their work and sharing the publication links. Whether it's
											an article, a novel, or a research piece, you set the
											price for your premium content, and get paid whenever
											readers pay to read your work.
										</p>
									</div>
								</li>
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
							<img src={SVG11} alt="" />
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
