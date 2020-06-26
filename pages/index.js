import { device } from '../components/devices';
import styled from 'styled-components';
import Cases from '../components/cases';
import { motion } from 'framer-motion';
import Nav from '../components/nav';

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
    margin: 3rem 0 1rem 0;
    @media ${device.laptop} {
        font-size: 2rem;
        margin: 6rem 0 2rem 0;
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

export default function index() {
    return (
        <div>
            <Nav></Nav>
            <H1>Hi, I'm Daniel. </H1>
            <Tag>Product Designer</Tag>
            <P>
                I'm a young designer determined to design inclusive and
                accessible products that positively impact the world.
            </P>
            <P>Right now, I am longboarding, educating myself on systematic racism, and looking for full time jobs and internships.</P>
            <H2>Featured Works</H2>
            <Cases></Cases>
        </div>
    );
}
