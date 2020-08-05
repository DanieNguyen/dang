import { device } from '../../components/devices';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Nav from '../../components/nav';
import Quote from '../../components/quote';

const Tag = styled.div`
	width: 6rem;
	height: 2rem;
	border-radius: 0.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.875rem;
	font-family: 'Basier-Bold';
	background-color: #4c2c83;
	color: white;
`;

const Container = styled.div`
	height: 200px;
	@media ${device.tablet} {
		width: 512px;
		height: 300px;
	}
`;

const HeaderImg = styled.img`
	width: 100%;
	@media ${device.laptop} {
		margin-left: -6rem;
		width: 85%;
	}
	@media ${device.laptopL} {
		margin-left: -8rem;
		width: 85%;
	}
	@media ${device.desktop} {
		margin-left: -10rem;
		width: 90%;
	}
`;

const Banner = styled.div`
	display: flex;
	flex-direction: column;
	@media ${device.laptop} {
		width: 150%;
		flex-direction: row;
		align-items: center;
		margin-left: -10%;
	}
	@media ${device.laptopL} {
		width: 150%;
		flex-direction: row;
		align-items: center;
		margin-left: -15%;
	}
	@media ${device.desktop} {
		width: 200%;
		flex-direction: row;
		align-items: center;
		margin-left: -35%;
	}
	margin-bottom: 1em;
`;

const Intro = styled.div``;

const Text = styled.div`
	width: 85%;
	margin: auto;
	@media ${device.laptop} {
		width: 70%;
	}
	@media ${device.laptopL} {
		width: 75%;
	}
	@media ${device.desktop} {
		width: 85%;
	}
`;

const Sub = styled.p`
	font-weight: bold;
	margin: 3rem 0 1rem 0;
	@media ${device.laptopL} {
		margin: 6rem 0 1rem 0;
	}
`;
const H2 = styled.h2`
	font-family: 'Bressay';
	margin-top: 0;
	line-height: 2rem;
`;

const Img = styled.img`
	width: 100%;
	margin-top: 1rem;
`;

const LargeImg = styled.img`
	width: 100%;
	margin-top: 1rem;
	@media ${device.laptop} {
		margin-left: -30%;
		width: 160%;
	}
	@media ${device.laptopL} {
		margin-left: -25%;
		width: 150%;
	}
	@media ${device.desktop} {
		margin-left: -50%;
		width: 200%;
	}
`;

const Caption = styled.p`
	color: ${({ theme }) => theme.colors.darkgray};
	margin-top: -1rem;
`;
const ImgCaption = styled.div`
	text-align: center;
`;

export default function about() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 0.8, ease: 'easeOut' },
			}}
			exit={{ opacity: 0 }}>
			<Nav></Nav>
			<Banner>
				<Intro>
					<h1>Study Groups. </h1>
					<p>
						Study Groups is a new feature for Canvas helping
						students connect with others in online courses.{' '}
					</p>
				</Intro>
				<HeaderImg src='/static/images/studygroups.png'></HeaderImg>
			</Banner>
			<Text>
				<h2>Creating Online Communities</h2>
				<p>
					Online learning has been on the rise for the past decade
					with the emergence of online learning platforms and
					universities offering accessible online courses. However, a
					notable issue with online learning is a lack of community
					and engagement between students.
				</p>
				<p>
					I partnered with the University of Washington (UW) Continuum
					College to design a new feature to promote online learning
					communities within its current learning management system,
					Canvas.
				</p>
				<h2>Distance Matters</h2>
				<p>
					As we all probably know with the current Covid-19 situation,
					social distancing can be exhausting. It's hard to isolate
					yourself from others because everyone desires to be in a
					community.
				</p>
				<Quote>Online learning is inherently isolating. </Quote>
				<p>
					A huge advantage of online learning is its asynchronous
					learning model. Students are able to watch lectures, go
					through content, and complete the course at their own pace.{' '}
					<b>
						But students rarely reach out to others in an online
						learning environment.
					</b>
				</p>
				<Img src='/static/images/sadcomputer.jpg'></Img>
				<Sub>THE CHALLENGE</Sub>
				<H2>Motivate students to collaborate in online courses</H2>
				<p>
					Our goal for the project was to encourage students to make
					connections in their remote classes. In a real classroom,
					collaborating is as easy as asking the person next to you if
					they want to work together, but online is a whole different
					story.
				</p>
				<Sub>MY ROLE</Sub>
				<p>
					I worked in a team of four on this project as my
					undergraduate capstone project.
				</p>
				<p>
					I led the UI design and prototyping of the overall feature,
					creating a component design system in Figma. I collaborated
					with two other designers on the matchmaking quiz and
					announcements section.
				</p>
				<p>
					I also led our interviews and usability testing, working
					with a user researcher to switch off moderating and
					notetaking.
				</p>
				<h2>How do students feel about online courses?</h2>
				<p>
					In the beginning of our project, our team focused on
					understanding students' perception of online courses and
					Canvas. To familiarize ourselves, we conducted user
					interviews with 8 students who have taken an online course
					with UW Canvas.
				</p>
				<Sub>Insights</Sub>
				<h3>Online is more independent</h3>
				<p>
					Most participants only took the online course because it fit
					their schedule. Having all the content ready online allowed
					them to work at their own pace.{' '}
				</p>
				<h3>Online is lonely</h3>
				<p>
					All participants never talked to other students and rarely
					reached out to professors in an online course. But, they
					missed being able to ask others questions and learning
					together.
				</p>
				<h3>Students prefer in-person</h3>
				<p>
					All participants felt that online classes were not a good
					replacement for in-person learning.
				</p>
				<h3>Students learn through classmates</h3>
				<p>
					All participants stated that they learn primarily from
					studying and talking to other students.
				</p>
			</Text>
			<ImgCaption>
				<LargeImg src='/static/images/interview.png'></LargeImg>
				<Caption>Thematic Analysis of Interviews</Caption>
			</ImgCaption>
			<Text>
				<Sub>Driving Question</Sub>
				<H2>
					How might we design an online experience for students to
					collaborate?
				</H2>
				<p>
					After our interviews, we all agreed that collaboration was
					the key to improving student perception towards online
					learning.
				</p>
				<p>
					We conducted a competitive analysis of both learning
					management systems and communication tools such as Slack to
					understand how they promote collaboration. Then, we dove
					into brainstorming ideas to help students engage with
					others.
				</p>
				<h3>Our Top Five Ideas</h3>
				<p><b>Study Groups</b> - Allowing students to join study groups inside Canvas to communicate and share resources</p>
                <p><b>Instant Messaging</b> - Messaging other students inside Canvas</p>
				<p><b>Gamification</b> - Gamifying Canvas with badges and achievements for friendly competition</p>
				<p><b>Stack Overflow</b> - A question and answer board for students</p>
				<p><b>Avatar-based Gamification</b> - Transforming Canvas into a social hub of learning</p>
                <br></br>
                <p>With these ideas, we surveyed 30 UW students for which feature they felt would be useful and desired the most.</p>
				<ImgCaption>
					<Img src='/static/images/concept.png'></Img>
					<Caption>Results from concept testing</Caption>
				</ImgCaption>
                <p>We moved forward with fleshing out the Study Groups idea based on our feedback, but also played with incorporating some of the other features as well.</p>
                <Sub>Introducing</Sub>
                <H2>Study Groups</H2>
                <p>A new feature that helps you connect and find other students to study with.</p>
            </Text>
            <Banner>
				<Intro>
					<H2>Matches made in heaven.</H2>
					<p>
						Students can take a matchmaking quiz to find others with similar studying habits and interests.{' '}
					</p>
				</Intro>
				<HeaderImg src='/static/images/studygroups.png'></HeaderImg>
			</Banner>
            <Container>
				<iframe
					width='100%'
					height='100%'
					src='https://www.youtube.com/embed/q-P55l8iAx0'
					frameborder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</Container>
		</motion.div>
	);
}
