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
    background-color: #ACF3D1;
    color: ${({ theme }) => theme.colors.text};
`;

const Img = styled.img`
    width: 100%;
    margin-bottom: 1rem;
`;
export default function about() {
    return (
        <div>
            <Nav></Nav>
            <H1>Marley. </H1>
            <Tag>Website</Tag>
            <P>
                Marley is a web concept for a digital funeral planning service. 
            </P>
            <H2>Details</H2>
            <P>
                I worked on this project with one designer, Lena Tran, at the
                2020 Protothon. We addressed the problem space of improving the
                police dispatch and response system through an extensive design
                process full of research, iteration, and critique.
            </P>
            <P>Dispatch received 3rd place at the 2020 Protothon! </P>
            <P>
                I designed collaboratively with Lena for the UX of the app. I took the lead for visual design: designing an atomic UI design system, branding, and the presentation deck.
            </P>
            <H2>Style Guide</H2>
            <Img src='/static/images/dispatch/1.png'></Img>
            <H2>Mock Up</H2>
            <Img src='/static/images/dispatch/2.png'></Img>
        </div>
    );
}
