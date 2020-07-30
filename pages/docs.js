import styled from 'styled-components';
import Checklist from '../components/checklist';
import { motion } from 'framer-motion';
import Nav from '../components/nav';

const Tag = styled.div`
	width: 12rem;
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

export default function docs() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 0.8, ease: 'easeOut' },
			}}
			exit={{ opacity: 0 }}>
			<Nav></Nav>
			<h1>Done is better than perfect. </h1>
			<Tag>Updated June 23 2020</Tag>
			<p>
				With everything going on in the world and my life, it's been
				hard to work on my portfolio. But, I'm going to hold myself
				accountable while taking time to design intentionally.
			</p>
			<p>
				This changelog shows everything I've thought of, done, and hope
				to do with my portfolio!
			</p>
			<h2>To Do</h2>
			<Checklist></Checklist>
		</motion.div>
	);
}
