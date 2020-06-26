import styled from 'styled-components';
import { device } from '../components/devices';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Grid = styled.div`
    margin-top: 2rem;
    @media ${device.tablet} {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
        row-gap: 4rem;
    }
`;

const Box = styled.a`
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 0.25rem;
    box-shadow: 0 0.75rem 3rem -1.5rem rgba(0, 5, 204, 0.2);
`;

const Text = styled.div`
    width: 100%;
`;

const H3 = styled.h3`
    font-family: 'Basier-Bold';
    font-size: 1rem;
    margin: 2rem 0 0rem 0;
    @media ${device.laptop} {
        font-size: 1.5rem;
        margin: 3rem 0 0.5rem 0;
    }
    color: ${({ theme }) => theme.colors.text};
`;

const P = styled.p`
    font-family: 'Basier';
    line-height: 1.5rem;
    margin: 0.5rem 0 0 0;
    line-height: 1.5rem;
    font-size: 1rem;
    @media ${device.tablet} {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin: 0rem 0 1rem 0;
    }
    color: ${({ theme }) => theme.colors.text};
`;

const Tags = styled(P)`
    color: ${({ theme }) => theme.colors.gray};
    @media ${device.tablet} {
        visibility: hidden;
        ${Box}:hover & {
            visibility: visible;
        }
    }
`;

const Note = styled.p`
    font-family: 'Basier-Mono';
    font-size: 0.875rem;
    line-height: 1rem;
    margin: 1rem 0 4rem 0;
    color: ${({ theme }) => theme.colors.gray};
`;

const Case = (props) => {
    return (
        <Link href={props.link} passHref>
            <Box>
                <motion.div whileHover={{ y: -10 }}>
                    <Img src={props.img}></Img>
                </motion.div>
                <Text>
                    <H3>{props.title}</H3>
                    <P>{props.children}</P>
                    <Tags>{props.tags}</Tags>
                    <Note>{props.note}</Note>
                </Text>
            </Box>
        </Link>
    );
};

export default function cases() {
    return (
        <div>
            <Grid>
                <Case
                    title={'UW Canvas'}
                    link={'/'}
                    img={'../static/images/canvas2.png'}
                    tags={'Website, Animation, User Research'}>
                    Promoting student communities in online learning.
                </Case>
                <Case
                    title={'Vita OS'}
                    link={'/'}
                    img={'../static/images/vita2.png'}
                    tags={'Mobile, Branding, Design Systems'}>
                    Helping young adults live intentionally.
                </Case>
                <Case
                    title={'Dispatch.'}
                    link={'/'}
                    img={'../static/images/dispatch.png'}
                    tags={'Award-Winning, Mobile, Branding'}
                    note={
                        'Disclaimer: This project was done before I learned more about systematic racism.'
                    }>
                    Assisting police officers patrol on foot.
                </Case>
                <Case
                    title={'LA Fitness'}
                    link={'/'}
                    img={'../static/images/la.png'}
                    tags={'Mobile, Animation, User Research'}>
                    Supporting gym members with their fitness goals.
                </Case>
            </Grid>
        </div>
    );
}
