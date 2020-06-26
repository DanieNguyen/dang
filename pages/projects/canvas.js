import { device } from '../../components/devices';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Nav from '../../components/nav';
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
    background-color: #4c2c83;
    color: white;
`;

export default function about() {
    return (
        <div>
            <Nav></Nav>
            <H1>Study Groups. </H1>
            <Tag>Website</Tag>
            <P>
                Study groups are a new feature for UW canvas to encourage
                student communities in online learning. Students can be matched
                to or discover study groups with students of similar interests
                and studying habits.
            </P>
            <H2>Details</H2>
            <P>
                I worked on this project with three other HCDE students for our
                10-week Capstone project. We worked together with our sponsor,
                UW Continuum College, to tackle the problem space of online
                learning.
            </P>
            <P>
                Our team worked collaboratively to conduct research, structure
                the information architecture and user flows, and think through
                the UX of our feature. I took initiative to lead the visual and
                interaction design of our project, creating the overall UI and
                animations.
            </P>
            <H2>Project Video</H2>
            <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/q-P55l8iAx0'
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen></iframe>
        </div>
    );
}
