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
    background-color: #fd9ea1;
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
            <H1>Vita OS. </H1>
            <Tag>Mobile OS</Tag>
            <P>
                Vita is a mobile OS intended to help young adults maintain
                productivity in and outside of work. The OS is designed to
                encourage reflection, consciousness, and positivity.
            </P>
            <H2>Details</H2>
            <P>
                I worked on this project with a team of seven designers to craft
                our mobile OS. Our team surveyed over 20 young adults to
                discover how they view their phone usage and discovered that
                there was a common pattern of participants feeling unproductive
                and distracted by their phones. We designed 12 cohesive mobile apps to combat these feelings for young adults and promote healthy mobile inteartions.{' '}
            </P>
            <P>I worked as the lead visual designer, creating our visual design system and presentation decks. I also led the design for the Home, Messages, and Wallet apps.</P>
            <H2>Presentation Deck</H2>
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
        </div>
    );
}
