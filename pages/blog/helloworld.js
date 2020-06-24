import { device } from '../../components/devices';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Nav from '../../components/nav';
import Head from 'next/head';
import Quote from '../../components/quote';

const H1 = styled.h1`
    font-family: 'Basier-Bold';
    font-size: 2rem;
    margin: 4rem 0 1rem 0;
    kerning: normal;
    @media ${device.tablet} {
        font-size: 3rem;
        margin: 6rem 0 1rem 0;
    }
    color: ${({ theme }) => theme.colors.text};
`;

const H2 = styled.h2`
    font-family: 'Basier-Bold';
    font-size: 1.5rem;
    margin: 2rem 0 1rem 0;
    @media ${device.laptop} {
        font-size: 2rem;
        margin: 3rem 0 1rem 0;
    }
    color: ${({ theme }) => theme.colors.text};
`;

const P = styled.p`
    font-family: 'Basier';
    line-height: 1.5rem;
    margin: 1rem 0 0 0;
    line-height: 1.5rem;
    font-size: 1rem;
    @media ${device.tablet} {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin: 1rem 0 1rem 0;
    }
    color: ${({ theme }) => theme.colors.text};
`;

const Tag = styled.div`
    width: 12rem;
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

export default function index() {
    return (
        <div>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://use.typekit.net/pqx5okm.css'
                />
            </Head>
            <Nav></Nav>
            <H1>Hello World! </H1>
            <Tag>Posted on June 23 2020</Tag>
            <P>
               This is my first blog post ever. I'm not really sure how to start blogging, but let's go.
            </P>
            <H2>Moving Out</H2>
        </div>
    );
}
