import { device } from '../components/devices';
import styled from 'styled-components';
import Checklist from '../components/checklist';
import { motion } from 'framer-motion';
import Nav from '../components/nav';
import Quote from '../components/quote';

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
    width: 6rem;
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

const A = styled.a`
    color: ${({ theme }) => theme.colors.pink};
    &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.pink};
    }
`

export default function about() {
    return (
        <div>
            <Nav></Nav>
            <H1>I'm bad with icebreakers. </H1>
            <Quote>
                Hi, my name is Daniel and I am a junior product designer. My fun
                fact is that I like to longboard.
            </Quote>
            <H2>About Me</H2>
            <P>
                I am a young product designer hoping to make waves 🌊 in the world
                through designing positive human computer interactions for
                everyone. I am a firm believer in <b>participatory design, human-centered design, and inclusive design. </b>
            </P>
            <P>Right now, I am very interested in design systems, AR, typography (please send me fonts), and interactive web apps.</P>
            <br/ >
            <P>Outside of design, I really enjoy longboarding, playing video games, trying new restaurants, and my dog.</P>
            <P>Thanks for reading about me! Feel free to contact me through <A href="tel:4252159646">phone</A>, <A href=":mailto:danngu@uw.edu">email</A>, or <A href="https://www.linkedin.com/in/danielux/">LinkedIn!</A></P>
        </div>
    );
}
