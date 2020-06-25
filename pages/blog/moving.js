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

const H3 = styled.h3`
    font-family: 'Basier-Bold';
    font-size: 1rem;
    margin: 2rem 0 1rem 0;
    @media ${device.laptop} {
        font-size: 1.5rem;
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
            <H1> Moving is sooooo much work</H1>
            <Tag>Posted on June 23 2020</Tag>
            <P>Hello World! This is my first blog post ever. </P>
            <P>I'm not really sure how to start blogging, but let's go.</P>
            <H2>My garage is an abyss</H2>
            <P>
                So I just started the process of moving out of my 10 year family
                home this week, and I am slowly dying. Who would have thought
                that putting everything in the garage when there's no room in
                the closet would leave to an infinite number of trash bags full
                of random knick-knacks for GoodWill.
            </P>
            <P>
                But, it has been fun to sort through everything so far and
                reflect on my childhood memories. I found so many embarassing
                old photos of myself with Justin Bieber hair. I also found my
                old karate and Taekwondo uniforms. Don't come for this yellow
                belt, I got some moves. 😤
            </P>
            <P>
                On a serious note, I really appreciate how fortunate I am to
                have a stable home and environment from middle school until now
                (after college). I've heard from friends about how they've had
                to move very often and the difficulties they've faced with
                attachment and emotional connections. Growing up mostly in one
                home has definitely impacted my personality, values, and many
                life choices.
            </P>
            <H2>OfferUp is popping</H2>
            <P>
                This past week of moving has also opened my eyes to the world of
                online marketplaces. Growing up, I was used to buying things on
                sale, but never used. So before I continue, I want to
                acknowledge that my perspective is one coming from privilege and
                financial security.
            </P>
            <P>
                But we just started listing old furniture on OfferUp and
                FaceBook Marketplace (FB). My brother's mainly been tackling
                OfferUp while I'm on FB. We've received so many messages and
                have had a lot of success selling our stuff! 👏👏👏
            </P>
            <P>
                I was really shocked since I don't see a lot of value in my
                furniture and other belongings anymore. But you know what they
                say:
            </P>
            <Quote author={'Unknown'}>
                One man's trash is another man's treasure
            </Quote>
            <P>
                I was also pleasantly surprised by the online market community!
                We have dealt mainly with extremely nice and considerate people.
                There were only three people trying to scam us so far. I would
                recommend using these online marketplaces for goods that can't
                be donated as easily like large furniture and electronics.
            </P>
            <H3>UX Analysis</H3>
            <P>
                And I can't help it...from a design and UX perspective, I am
                pretty impressed with FB. So far, I have felt super comfortable
                listing items on FB. The form to list an item is extremely
                intuitive, and the smart tags are very helpful to categorize my
                furniture for both myself and potential buyers. I also enjoyed
                the ability to post the same listing in as many groups as I
                want.
            </P>
            <P>
                One area that I would want improvements in is the messaging
                experience for FaceBook Marketplace. Currently, it ties in with
                Messenger and is helpful with showing the potential buyer's name
                in addition to the listing information at the top of the chat.
                But, the chats are placed in my general Messenger app with all
                my personal chats and became interspersed throughout the day. I
                would love some sort of separation between the two chat types.
            </P>
            <H2>To Be Continued...</H2>
            <P>Thanks for reading this post! I will probably be updating this post as I continue moving out.</P>
        </div>
    );
}
