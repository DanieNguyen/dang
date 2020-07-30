import { device } from '../components/devices';
import styled from 'styled-components';
import Cases from '../components/cases';
import { motion } from 'framer-motion';
import Nav from '../components/nav';

const Tag = styled.div`
	width: 10rem;
	height: 2rem;
	border-radius: 0.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.875rem;
	font-family: 'Basier-Bold';
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.text};
`;

export default function index() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 0.8, ease: 'easeOut' }}}
			exit={{opacity: 0}}
			>
			<Nav></Nav>
			<h1>Hey, I'm Daniel. </h1>
			<Tag>Product Designer</Tag>
			<p>
				I'm a young designer determined to design inclusive and
				accessible products that positively impact the world.
			</p>
			<p>
				Right now, I am longboarding, educating myself on systematic
				racism, and looking for full time jobs and internships.
			</p>
			<h2>Featured Works</h2>
			<Cases></Cases>
		</motion.div>
	);
}
