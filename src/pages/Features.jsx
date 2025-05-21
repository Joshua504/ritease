import styles from '../styles/feature.module.scss';

import AnimatedText from '../components/AnimatedText';

import SVG8 from '../assets/SVG(8).svg';
import SVG25 from '../assets/SVG(25).svg';
import SVG26 from '../assets/SVG(26).svg';
import SVG27 from '../assets/SVG(27).svg';
import SVG28 from '../assets/SVG(28).svg';
import SVG29 from '../assets/SVG(29).svg';
import SVG30 from '../assets/SVG(30).svg';
import Button from '../components/Button';
import WaitList from '../components/WaitList';

const Features = () => {
	return (
		<>
			<header>
				<AnimatedText animeText={'Ritease Features'} />

				<section className={styles.header}>
					<h2>The Only Document Tool You’ll Ever Need</h2>
					<p>
						Whether you write, sign, or publish—Ritease keeps everything
						connected, secure, and powered by intelligent tech. Its your
						powerhouse of tools to help you and your team create, sign, manage,
						and share documents like never before.
					</p>
				</section>

				<div className={styles.banner}>
					<img className={styles.img} src={SVG25} alt="" />
					<button>
						<img src={SVG26} alt="" />
						Play video
					</button>
				</div>
			</header>

			<section className={styles.main1}>
				<div className={styles.create}>
					<h2 className={styles.title__head}>
						Riteditor: Create and Edit Notes and Docs with AI
					</h2>
				</div>

				<sectionc className={styles.feature__container__1}>
					<section className={styles.feature1}>
						<div className={styles.feature1__title}>
							<h2>Note Editor</h2>
							<p>
								Note Editor gives you a flexible, visual space to write, plan,
								and create. Add images or generate content with AI, draft big
								ideas—and publish to the web to start earning from your work.
								Whether you're sharing travel tips, policy ideas, premium news
								content, or creative stories, Note Editor helps you turn your
								notes into valuable work.
							</p>
						</div>
						<section className={styles.feature1__flex}>
							<div>
								<img src={SVG8} alt="" />
							</div>
							<section className={styles.feature1__flex__container}>
								<div className={styles.feature1__flex__content}>
									<h3>
										<img src={SVG27} alt="" />
										<span>For Individuals</span>
									</h3>
									<p>
										Jot down lyrics or write premium content, and watch your
										creativity soar.
									</p>
								</div>
								<div className={styles.feature1__flex__content}>
									<h3>
										<img src={SVG28} alt="" />
										<span>For Your Team</span>
									</h3>
									<p>
										Brainstorm marketing campaigns as a team—everyone’s ideas,
										one space.
									</p>
								</div>
								<div className={styles.feature1__flex__content}>
									<h3>
										<img src={SVG29} alt="" />
										<span>For Your Organisation</span>
									</h3>
									<p>
										Compile reports, co-write analyses, and share secured
										documents with clients or the public.
									</p>
								</div>
								<div className={styles.feature1__flex__content}>
									<h3>
										<img src={SVG30} alt="" />
										<span>Why Wait?</span>
									</h3>
									<p>
										Creators are already earning, and businesses are increasing
										their productivity—start now and experience the difference.
									</p>
								</div>
							</section>
						</section>
						<Button
							fontSize="1.5rem"
							borderRadius="10px"
							btnText={'Try Note Editor for Free'}
						/>
					</section>

					<section className={styles.feature1}>
						<div className={styles.feature1__title}>
							<h2>Document Editor</h2>
							<p>
								Draft stunning proposals, client-ready reports, or academic
								assignments with zero clutter. Share with confidence, knowing
								every document is traceable and tamper-proof, secured on the
								Base Blockchain. Whether you're a freelancer, educator, or
								student—authorship is clear, your work stays protected, and your
								documents always look professional.
							</p>
						</div>
						<section className={styles.feature1__flex}>
							<section className={styles.feature1__flex__container}>
								<div className={styles.feature1__flex__content}>
									<h3>
										<img src={SVG27} alt="" />
										<span>For Individuals</span>
									</h3>
									<p>
										Write a CV that lands interviews or a memoir that wows
										readers.
									</p>
								</div>
								<div className={styles.feature1__flex__content}>
									<h3>
										<img src={SVG28} alt="" />
										<span>For Your Team</span>
									</h3>
									<p>
										Build client-ready quotes or project updates in half the
										time.
									</p>
								</div>
								<div className={styles.feature1__flex__content}>
									<h3>
										<img src={SVG29} alt="" />
										<span>For Your Organisation</span>
									</h3>
									<p>
										Streamline annual reports or compliance docs—done right,
										first time.
									</p>
								</div>
								<div className={styles.feature1__flex__content}>
									<h3>
										<img src={SVG30} alt="" />
										<span>Why Wait?</span>
									</h3>
									<p>
										Professionals are ditching traditional word products for the
										sleek and secure Ritease experience—join them before you’re
										stuck behind.
									</p>
								</div>
							</section>
							<div>
								<img src={SVG8} alt="" />
							</div>
						</section>
						<div className={styles.btn}>
							<Button
								fontSize="1.5rem"
								borderRadius="10px"
								btnText={'Start Writing Now!'}
							/>
						</div>
					</section>
				</sectionc>
			</section>

			<section className={styles.main2}>
				<div className={styles.main2__container1}>
					<div className={styles.h2__container}>
						<h2>
							Ritease AI: Combine Your Human Intelligence with AI and Get More
							Done Faster!
						</h2>
					</div>
					<section>
						<div className={styles.btn__container}>
							<Button
								fontSize="1.5rem"
								borderRadius="10px"
								btnText={'Start Using Ritease AI'}
							/>
						</div>

						<section className={styles.main2__flex__container}>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG27} alt="" />
									<span>For You</span>
								</h3>
								<p>
									Finish that overdue blog post or nail your uni
									assignment—faster than ever.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG28} alt="" />
									<span>For Your Team</span>
								</h3>
								<p>
									Create pitch docs or training scripts while your rivals
									scramble.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG29} alt="" />
									<span>For Your Organisation</span>
								</h3>
								<p>
									Roll out perfect policies or customer letters across
									regions—effortlessly.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG30} alt="" />
									<span>Why Wait?</span>
								</h3>
								<p>Time’s ticking—get ahead now.</p>
							</div>
						</section>
					</section>
				</div>

				<div className={styles.main2__container1}>
					<div className={styles.h2__container}>
						<h2>Boards: Write. Publish. Earn. Simple as That.</h2>
					</div>
					<section>
						<div className={styles.btn__container}>
							<p>
								Your ideas deserve an audience—and a payday. Boards turns your
								notes into stunning showcases you can share for free or sell at
								your set price. A chef can publish recipes and earn daily; a
								consultant can offer premium strategy guides to clients; a
								thought leader can publish their thoughts and share the link via
								social media to earn from followers who read their work.
								Blockchain locks in your ownership—your work, your rewards.
							</p>
							<Button
								fontSize="1.5rem"
								borderRadius="10px"
								btnText={'Publish on Boards'}
							/>
						</div>

						<section className={styles.main2__flex__container}>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG27} alt="" />
									<span>For You</span>
								</h3>
								<p>
									Sell fitness plans or photography tips—turn passion into
									profit.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG28} alt="" />
									<span>For Your Team</span>
								</h3>
								<p>Share internal playbooks or client case studies—securely.</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG29} alt="" />
									<span>For Your Organisation</span>
								</h3>
								<p>
									Publish whitepapers or industry insights—build authority fast.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG30} alt="" />
									<span>Why Wait?</span>
								</h3>
								<p>
									Creators are raking it in—don’t let your ideas gather dust.
								</p>
							</div>
						</section>
					</section>
				</div>

				<div className={styles.main2__container1}>
					<div className={styles.h2__container}>
						<h2>Ritesign: Sign It, Seal It, Trust It</h2>
					</div>
					<section>
						<div className={styles.btn__container}>
							<p>
								No more printing, scanning, or chasing signatures. Ritesign’s
								secure, instant signing locks deals with a click—powered by
								blockchain-grade security for unshakable trust. Invite
								colleagues, clients, or partners to sign the same document
								securely, all in one place. A freelancer can sign a gig contract
								on the train; an SME can close sales in hours; a multinational
								can approve supplier terms across continents—faster, safer, and
								smarter.
							</p>
							<Button
								fontSize="1.5rem"
								borderRadius="10px"
								btnText={'Start Signing Now!'}
							/>
						</div>

						<section className={styles.main2__flex__container}>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG27} alt="" />
									<span>For You</span>
								</h3>
								<p>
									Sign leases or freelance agreements—no delays, no hassle.
									Invite a landlord or client to sign instantly, with blockchain
									ensuring the signatures stay dispute-free.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG28} alt="" />
									<span>For Your Team</span>
								</h3>
								<p>
									Finalise NDAs or vendor deals—keep projects flying. Invite
									teammates to sign off together, with immutable records
									preventing sneaky changes and keeping everyone honest.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG29} alt="" />
									<span>For Your Organisation</span>
								</h3>
								<p>
									Approve budgets or contracts at scale—securely, instantly.
									Invite global branches to sign in sync, while blockchain’s
									unchangeable audit trail slashes fraud risks and legal woes.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG30} alt="" />
									<span>Why Wait?</span>
								</h3>
								<p>
									Deals are closing now—don’t lose out to slow, shaky paperwork.
								</p>
							</div>
						</section>
					</section>
				</div>

				<div className={styles.main2__container1}>
					<div className={styles.h2__container}>
						<h2>
							Riteforms: Paper forms are outdated—Riteforms is the future.
						</h2>
					</div>
					<section>
						<div className={styles.btn__container}>
							<p>
								Create custom, signable forms in minutes for registrations,
								recruitment, feedback, or legal docs. Whether it's collecting
								parent consents at a school, receiving job applications to
								evaluate against a set criteria, or gathering employee surveys
								at a corporate HQ, Riteforms delivers seamless branding and
								top-tier security.
							</p>
							<Button
								fontSize="1.5rem"
								borderRadius="10px"
								btnText={'Start Signing Now!'}
							/>
						</div>

						<section className={styles.main2__flex__container}>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG27} alt="" />
									<span>For You</span>
								</h3>
								<p>
									Create a sign-up sheet for your yoga class or a petition that
									spreads.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG28} alt="" />
									<span>For Your Team</span>
								</h3>
								<p>Streamline expense claims or client intakes—no mess.</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG29} alt="" />
									<span>For Your Organisation</span>
								</h3>
								<p>
									Roll out signable compliance forms or event RSVPs—done in a
									snap.
								</p>
							</div>
							<div className={styles.flex__content}>
								<h3>
									<img src={SVG30} alt="" />
									<span>Why Wait?</span>
								</h3>
								<p>
									Businesses are cutting admin time—join them before you’re
									buried in paper. Paperwork of the future is seamless and
									digital.
								</p>
							</div>
						</section>
					</section>
				</div>
			</section>

			<section className={styles.main3}>
				<section className={styles.feature1}>
					<div className={styles.feature1__title}>
						<h2>Scan-To-Text: Convert Scanned Documents to Text in a Snap</h2>
						<p>
							Got letters, contracts, or scribbled notes piling up? Scan-To-Text
							turns them into editable digital files with a snap. An artist can
							digitise sketches for editing; a Houston retailer can convert
							invoices to track spending; a legal firm can archive case files
							without the clutter.
						</p>
						<Button
							fontSize="1.5rem"
							borderRadius="10px"
							btnText={'Scan Your First Docs'}
						/>
					</div>

					<section className={styles.feature1__flex}>
						<div>
							<img src={SVG8} alt="" />
						</div>
						<section className={styles.feature1__flex__container}>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG27} alt="" />
									<span>For You</span>
								</h3>
								<p>
									Save old letters or recipes—keep memories alive, digitally.
								</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG28} alt="" />
									<span>For Your Team</span>
								</h3>
								<p>Digitise meeting notes or delivery slips—stay organised.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG29} alt="" />
									<span>For Your Organisation</span>
								</h3>
								<p>Archive records or contracts—access them anytime.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG30} alt="" />
									<span>Why Wait?</span>
								</h3>
								<p>Piles are growing—digitise now and reclaim your space.</p>
							</div>
						</section>
					</section>
				</section>

				<section className={styles.feature1}>
					<div className={styles.feature1__title}>
						<h2>PDF Tools: Edit Like a Pro</h2>
						<p>
							With PDF Tools, you can edit, annotate, merge, redact and reformat
							without hassle. Mark up feedback, polish pitch decks, or
							standardize reports—whether you're a freelancer in Liverpool, a
							startup in San Diego, or a global enterprise.
						</p>
						<Button
							fontSize="1.5rem"
							borderRadius="10px"
							btnText={'Edit a PDF Now'}
						/>
					</div>

					<section className={styles.feature1__flex}>
						<div>
							<img src={SVG8} alt="" />
						</div>
						<section className={styles.feature1__flex__container}>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG27} alt="" />
									<span>For You</span>
								</h3>
								<p>Personalise or refine eBooks—stand out every time.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG28} alt="" />
									<span>For Your Team</span>
								</h3>
								<p>Update quotes or manuals—keep everyone on the same page.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG29} alt="" />
									<span>For Your Organisation</span>
								</h3>
								<p>Edit policies or training docs—fast and flawless.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG30} alt="" />
									<span>Why Wait?</span>
								</h3>
								<p>Others are polishing their PDFs—don’t settle for static.</p>
							</div>
						</section>
					</section>
				</section>

				<section className={styles.feature1}>
					<div className={styles.feature1__title}>
						<h2>Document Hosting: Your Files, Safe and Sound</h2>
						<p>
							Stop juggling drives and emails. Document Hosting keeps
							everything—notes, forms, contracts—in one secure hub, with secure
							audit trails backed by blockchain transparency and security. A
							writer can store manuscripts; a Miami agency can share client
							assets; a global firm can manage thousands of files with zero
							risk.
						</p>
						<Button
							fontSize="1.5rem"
							borderRadius="10px"
							btnText={'Host Your Docs'}
						/>
					</div>

					<section className={styles.feature1__flex}>
						<section className={styles.feature1__flex__container}>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG27} alt="" />
									<span>For You</span>
								</h3>
								<p>Back up journals or portfolios—access them anywhere.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG28} alt="" />
									<span>For Your Team</span>
								</h3>
								<p>Share project files or designs—collaboration made simple.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG29} alt="" />
									<span>For Your Organisation</span>
								</h3>
								<p>Centralise records or client docs—scale without stress.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG30} alt="" />
									<span>Why Wait?</span>
								</h3>
								<p>Data breaches don’t wait—secure your work today.</p>
							</div>
						</section>
						<div>
							<img src={SVG8} alt="" />
						</div>
					</section>
				</section>

				<section className={styles.feature1}>
					<div className={styles.feature1__title}>
						<h2>Rite SDK/API: Build Smarter, Launch Faster</h2>
						<p>
							Developers, this one’s for you. Rite SDK/API plugs Ritease’s
							magic—editors, forms, Boards—into your apps with zero sweat. A
							coder can embed a blog for a client’s site; a startup can add
							forms to their platform; an enterprise can weave document tools
							into their CRM.
						</p>
						<Button
							fontSize="1.5rem"
							borderRadius="10px"
							btnText={'Explore SDK/API'}
						/>
					</div>

					<section className={styles.feature1__flex}>
						<div>
							<img src={SVG8} alt="" />
						</div>
						<section className={styles.feature1__flex__container}>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG27} alt="" />
									<span>For You</span>
								</h3>
								<p>
									Add pro-grade editors to your personal site—impress visitors.
								</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG28} alt="" />
									<span>For Your Team</span>
								</h3>
								<p> Integrate forms into your workflow—save dev time.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG29} alt="" />
									<span>For Your Organisation</span>
								</h3>
								<p>Upgrade systems with cutting-edge tools—stay ahead.</p>
							</div>
							<div className={styles.feature1__flex__content}>
								<h3>
									<img src={SVG30} alt="" />
									<span>Why Wait?</span>
								</h3>
								<p>Innovators are building now—don’t let rivals outpace you.</p>
							</div>
						</section>
					</section>
				</section>
			</section>

			<section className={styles.waitlist}>
				<WaitList />
			</section>
		</>
	);
};

export default Features;
