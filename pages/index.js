import { device } from '../components/devices';
import styled from 'styled-components';
import Cases from '../components/cases';
import { motion } from 'framer-motion';
import Nav from '../components/nav';

const Tag = styled(motion.div)`
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

const container = {
	hidden: { opacity: 0, y: 40},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			duration: 1.4,
			easing: [0.16, 1, 0.3, 1],
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

export default function index() {
	return (
		<div>
		<Nav></Nav>
		<motion.div
			variants={container}
			initial='hidden'
			animate='show'
			exit='hidden'>
			<motion.h1 variants={item}>Hey, I'm Daniel. </motion.h1>
			<Tag variants={item}>Product Designer</Tag>
			<motion.p variants={item}>
				I'm a young designer determined to design inclusive and
				accessible products that positively impact the world.
			</motion.p>
			<motion.p variants={item}>
				Right now, I am longboarding, educating myself on systematic
				racism, and looking for full time jobs and internships.
			</motion.p>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.8 }}}>
				<motion.h2>Featured Works</motion.h2>
				<Cases></Cases>
			</motion.div>
		</motion.div>
		</div>
	);
}
