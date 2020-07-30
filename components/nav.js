import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { CheckSquare, Square, EyeOff } from 'react-feather';
import { device } from './devices';
import { motion } from 'framer-motion';
import Header from './move'

const NavBar = styled(motion.nav)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
	@media ${device.tablet} {
		margin-top: 4rem;
	}
	margin-left: -0.5rem;
	margin-right: -0.5rem;
`;

const Right = styled.div`
	display: flex;
	flex-direction: row;
`;
const NavItem = styled.a`
	font-family: 'Basier-Medium';
	font-size: 1rem;
	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.white};
	}
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.25rem;
	width: 4rem;
	height: 2rem;
`;

export default function nav() {
	return (
		<NavBar>
			<div>
				<Link href='/' passHref>
					<NavItem>Home</NavItem>
				</Link>
			</div>
			<Right>
				{/* <Link href='/blog' passHref>
					<NavItem>Blog</NavItem>
				</Link> */}
				<Link href='/about' passHref>
					<NavItem>
						About
					</NavItem>
				</Link>
				<Link href='/docs' passHref>
					<NavItem>Docs</NavItem>
				</Link>
			</Right>
		</NavBar>
	);
}
