import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Project from '../../components/project';
import { device } from '../../components/devices';

const Title = styled.h1`
    font-size: 36px;
    font-family: 'Bressay';
    font-weight: normal;
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 2;
`;

const ImageContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 6;
`;

const Image = styled.img`
    max-width: 100%;
`;

const Caption = styled.figcaption`
    font-family: Bressay;
    font-size: 12px;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    margin-top: -2rem;
`;

const PinkPage = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    @media (min-width: 768px) {
        grid-column-start: 7;
        grid-column-end: 13;
        grid-row-start: 1;
        grid-row-end: 9;
    }
    z-index: -200;
`;

const Logo = styled.a`
    font-family: 'HKGrotesk';
    font-weight: bold;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: -0.025em;
`;

const Tagline = styled.p`
    font-family: 'Bressay';
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    margin-top: 4px;
`;

const Brand = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    padding: 1em;
`;

const Nav = styled.nav`
    grid-column-start: 12;
    grid-column-end: 12;
    grid-row-start: 1;
    padding: 1.5em;
    font-family: 'HKGrotesk';
    font-size: 14px;
    font-weight: 600;
`

const LeftFooter = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 8;
    align-self: end;
    padding: 1em;
`;

const RightFooter = styled.div`
    grid-column-start: 12;
    grid-column-end: 12;
    grid-row-start: 8;
    align-self: end;
    padding: 1em;
`;

const Daniel = styled.div`
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 7;
`;

const Name = styled.h3`
    font-family: 'HKGrotesk';
    font-weight: bold;
    font-size: 16px;
`;

const Desc = styled.h3`
    font-family: 'HKGrotesk';
    font-size: 16px;
    font-weight: normal;
`;

const Projects = styled.div`
    grid-column-start: 8;
    grid-column-end: 12;
    grid-row-start: 3;
    grid-row-end: 6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Subtitle = styled.h2`
    font-family: 'Bressay';
    font-style: italic;
    font-weight: normal;
`;

const A = styled.a`
    color: black;
    text-decoration: none;
`;

export default function Home() {
    return (
        <div>
            <Head>
                <title>Dang, It's Me</title>
                <link rel='icon' href='/favicon.ico' />
                <link
                    rel='stylesheet'
                    href='https://use.typekit.net/pqx5okm.css'
                />
            </Head>
            <main>
                <Layout>
                    <PinkPage></PinkPage>
                    <Title>Designing with Love</Title>
                    <Brand>
                        <Link href='/'>
                            <Logo>
                                dang.<Tagline>a digital portfolio</Tagline>
                            </Logo>
                        </Link>
                    </Brand>
                    <Nav>
                        <Link href='/blog'>
                            <A style={{marginRight: '1rem;'}}>Blog
                            </A>
                        </Link>
                        <Link href='/about'>
                            <A>About
                            </A>
                        </Link>
                    </Nav>
                </Layout>
            </main>
        </div>
    );
}
