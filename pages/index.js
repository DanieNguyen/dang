import { device } from '../components/devices';
import styled from 'styled-components';
import Cases from '../components/cases';
import { motion } from 'framer-motion';
import Nav from '../components/nav';
import Head from 'next/head';

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
	hidden: { opacity: 0.5, y: 40 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			duration: 1.6,
			easing: [0.61, 1, 0.88, 1],
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
	},
};

const Intro = styled(motion.p)`
	@media ${device.laptop} {
		width: 75%;
	}
	@media ${device.desktop} {
		width: 65%;
	}
`;

export default function index() {
	return (
		<div>
			<Head>
				<title>Daniel Nguyen</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<Nav></Nav>
			<motion.div
				variants={container}
				initial='hidden'
				animate='show'
				exit='hidden'>
				<motion.h1 variants={item}>Hey, I'm Daniel. </motion.h1>
				<Tag variants={item}>Product Designer</Tag>
				<Intro variants={item}>
					I'm a young designer determined to design inclusive and
					accessible products that positively impact the world.
				</Intro>
				<Intro variants={item}>
					Right now, I am longboarding, educating myself on systematic
					racism, and looking for full time jobs and internships.
				</Intro>
				<motion.h2 variants={item}>Featured Works</motion.h2>
				<motion.div variants={item}>
					<Cases></Cases>
				</motion.div>
			</motion.div>
		</div>
	);
}
