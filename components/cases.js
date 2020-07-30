import styled from 'styled-components';
import { device } from '../components/devices';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Grid = styled(motion.div)`
	margin-top: 2rem;
	@media ${device.tablet} {
		margin-top: 4rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 3rem;
		row-gap: 1rem;
	}
`;

const Box = styled(motion.a)`
	cursor: pointer;
`;

const Img = styled.img`
	width: 100%;
	border-radius: 0.25rem;
	box-shadow: 0 0.75rem 3rem -1.5rem rgba(0, 5, 204, 0.2);
`;

const Text = styled.div`
	width: 100%;
`;

const Tags = styled.p`
	color: ${({ theme }) => theme.colors.gray};
	@media ${device.tablet} {
		visibility: hidden;
		${Box}:hover & {
			visibility: visible;
		}
	}
`;

const Note = styled.p`
	font-family: 'Basier-Mono';
	font-size: 0.875rem;
	line-height: 1rem;
	margin: 1rem 0 4rem 0;
	color: ${({ theme }) => theme.colors.gray};
	@media ${device.tablet} {
		visibility: hidden;
		${Box}:hover & {
			visibility: visible;
		}
	}
`;

const children = {
	
}
const Case = (props) => {
	return (
		<motion.div>
			<Link href={props.link} passHref>
				<Box>
					<motion.div
						whileHover={{ y: -10 }}
						whileTap={{ scale: 0.95 }}>
						<Img src={props.img}></Img>
					</motion.div>
					<Text>
						<h3>{props.title}</h3>
						<p>{props.children}</p>
						<Tags>{props.tags}</Tags>
						<Note>{props.note}</Note>
					</Text>
				</Box>
			</Link>
		</motion.div>
	);
};

export default function cases() {
	return (
		<div>
			<Grid>
				<Case
					title={'Study Groups'}
					link={'/projects/canvas'}
					img={'../static/images/canvas2.png'}
					tags={'Website, Animation, User Research'}>
					Promoting student communities in online learning.
				</Case>
				<Case
					title={'Vita OS'}
					link={'/projects/vita'}
					img={'../static/images/vita2.png'}
					tags={'Mobile, Branding, Design Systems'}>
					Helping young adults live intentionally.
				</Case>
				<Case
					title={'Dispatch'}
					link={'/projects/dispatch'}
					img={'../static/images/dispatch.png'}
					tags={'Award-Winning, Mobile, Branding'}
					note={
						'Disclaimer: This project was done before I learned more about systematic racism.'
					}>
					Assisting police officers patrol on foot.
				</Case>
				{/* <Case
                    title={'LA Fitness'}
                    link={'/projects/la'}
                    img={'../static/images/la.png'}
                    tags={'Mobile, Animation, User Research'}>
                    Supporting gym members with their fitness goals.
                </Case>
				<Case
					title={'Marley'}
					link={'/projects/marley'}
					img={'../static/images/marley.png'}
					tags={'Website, Branding, Concept'}>
					Guiding people through times of grief.
				</Case> */}
			</Grid>
		</div>
	);
}
