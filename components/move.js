import styled from 'styled-components';

const Header = styled.div`
	width: 8%;
	font-family: 'Basier-Bold';
    padding-bottom: 1rem;
    position: absolute;
    left: 5%;
`;

const A = styled.a`
	color: ${({ theme }) => theme.colors.text};
	border-bottom: 2px solid ${({ theme }) => theme.colors.text};
`;

export default function head() {
	return (
		<Header>
			Black Lives Matter.{' '}
			<A target='_blank' href='https://blacklivesmatters.carrd.co/'>
				Take Action.
			</A>
		</Header>
	);
}
