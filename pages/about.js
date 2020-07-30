import styled from 'styled-components';
import Nav from '../components/nav';
import Quote from '../components/quote';
import { motion } from 'framer-motion';

const Tag = styled.div`
	width: 6rem;
	height: 2rem;
	border-radius: 0.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.875rem;
	font-family: 'Basier-Bold';
	background-color: ${({ theme }) => theme.colors.pink};
	color: ${({ theme }) => theme.colors.text};
`;

const A = styled.a`
	color: ${({ theme }) => theme.colors.pink};
	&:hover {
		border-bottom: 2px solid ${({ theme }) => theme.colors.pink};
	}
`;

export default function about() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 0.8, ease: 'easeOut' },
			}}
			exit={{
				opacity: 0
			}}>
			<Nav></Nav>
			<h1>I'm bad with icebreakers. </h1>
			<Quote>
				Hi, my name is Daniel and I am a junior product designer. My fun
				fact is that I like to longboard.
			</Quote>
			<h2>About Me</h2>
			<p>
				I am a young product designer hoping to make waves 🌊 in the
				world through designing positive human computer interactions for
				everyone. I am a firm believer in{' '}
				<b>
					participatory design, human-centered design, and inclusive
					design.{' '}
				</b>
			</p>
			<p>
				Right now, I am very interested in design systems, AR,
				typography (please send me fonts), and interactive web apps.
			</p>
			<br />
			<p>
				Outside of design, I really enjoy longboarding, playing video
				games, trying new restaurants, and my dog.
			</p>
			<p>
				Thanks for reading about me! Feel free to contact me through{' '}
				<A href='tel:4252159646'>phone</A>,{' '}
				<A href=':mailto:danngu@uw.edu'>email</A>, or{' '}
				<A href='https://www.linkedin.com/in/danielux/'>LinkedIn!</A>
			</p>
		</motion.div>
	);
}
