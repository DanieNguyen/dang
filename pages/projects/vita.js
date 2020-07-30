import styled from 'styled-components';
import { motion } from 'framer-motion';
import Nav from '../../components/nav';

const Tag = styled.div`
	width: 6rem;
	height: 2rem;
	border-radius: 0.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.875rem;
	font-family: 'Basier-Bold';
	background-color: #fd9ea1;
	color: ${({ theme }) => theme.colors.text};
`;

const Img = styled.img`
	width: 100%;
	margin-bottom: 1rem;
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
			<h1>Vita OS. </h1>
			<Tag>Mobile OS</Tag>
			<p>
				Vita is a mobile OS intended to help young adults maintain
				productivity in and outside of work. The OS is designed to
				encourage reflection, consciousness, and positivity.
			</p>
			<h2>Details</h2>
			<p>
				I worked on this project with a team of seven designers to craft
				our mobile OS. Our team surveyed over 20 young adults to
				discover how they view their phone usage and discovered that
				there was a common pattern of participants feeling unproductive
				and distracted by their phones. We designed 12 cohesive mobile
				apps to combat these feelings for young adults and promote
				healthy mobile inteartions.{' '}
			</p>
			<p>
				I worked as the lead visual designer, creating our visual design
				system and presentation decks. I also led the design for the
				Home, Messages, and Wallet apps.
			</p>
			<h2>Presentation Deck</h2>
			<Img src='/static/images/vita/1.png'></Img>
			<Img src='/static/images/vita/2.png'></Img>
			<Img src='/static/images/vita/3.png'></Img>
			<Img src='/static/images/vita/4.png'></Img>
			<Img src='/static/images/vita/5.png'></Img>
			<Img src='/static/images/vita/6.png'></Img>
			<Img src='/static/images/vita/7.png'></Img>
			<Img src='/static/images/vita/8.png'></Img>
			<Img src='/static/images/vita/9.png'></Img>
			<Img src='/static/images/vita/10.png'></Img>
			<Img src='/static/images/vita/11.png'></Img>
			<Img src='/static/images/vita/12.png'></Img>
			<Img src='/static/images/vita/13.png'></Img>
			<Img src='/static/images/vita/14.png'></Img>
		</motion.div>
	);
}
