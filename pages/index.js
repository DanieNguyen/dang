import Head from 'next/head';
import Link from 'next/link';
import { device } from '../components/devices';
import styled from 'styled-components';
import Layout from '../components/layout';
import Checklist from '../components/checklist';

const H1 = styled.h1`
    font-family: 'Basier-Bold';
    font-size: 2rem;
    margin: 4rem 0 1rem 0;
    @media ${device.tablet} {
        font-size: 3rem;
        margin: 6rem 0 1rem 0;

    }
    @media ${device.laptop} {
        font-size: 2.5rem;
        margin: 8rem 0 1rem 0;

    }
    @media ${device.desktop} {
        font-size: 3rem;
        margin: 10rem 0 1rem 0;
    }
    color: ${({ theme }) => theme.colors.text};
`;


const H2 = styled.h2`
    font-family: 'Basier-Bold';
    font-size: 1.5rem;
    margin: 3rem 0 1rem 0;
    @media ${device.laptop} {
        font-size: 2rem;
        margin: 4rem 0 2rem 0;

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
    border-radius: 0.5rem;
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
        <Layout>
            <H1>Done is better than perfect. </H1>
            <Tag>Updated June 23, 2020</Tag>
            <P>
                With everything going on in the world and my life, it's been
                hard to work on my portfolio. But, I'm going to hold myself
                accountable while taking time to design intentionally. 
            </P>
            <P>
                This changelog shows everything I've thought of, done, and hope to do with my
                portfolio!
            </P>
            <H2>To Do</H2>
            <Checklist></Checklist>
        </Layout>
    );
}
