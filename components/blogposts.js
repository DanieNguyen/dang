import styled from 'styled-components';
import { device } from '../components/devices';
import Link from 'next/link';

const Container = styled.a`
    font-family: 'Basier';
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    &:hover {
        color: ${({ theme }) => theme.colors.pink};
        cursor: grab;
    }
`;

const Title = styled.h1`
    font-family: 'Basier-Bold';
    font-weight: normal;
    font-size: 1.25rem;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`

const Snippet = styled.p`
    color: ${({ theme }) => theme.colors.darkgray};
    font-family: 'Bressay';
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0.25rem;
    @media ${device.tablet} {
        font-size: 1.15rem;
        margin-top: 0.75rem;
    }

    ${Container}:hover & {
        color: ${({ theme }) => theme.colors.text};
    }
`;

const Post = (props) => {
    return (
        <Link href={props.link} passHref>
            <Container>
                <Title>{props.children}</Title>
                <Div>
                <Snippet>{props.sub}</Snippet>
                <Snippet>{props.date}</Snippet>
                </Div>
            </Container>
        </Link>
    );
};

export default function Posts() {
    return (
        <div>
            <Post
                link={'/blog/moving'}
                sub={
                    'I have officially self-diagnosed myself as a hoarder.'
                }
                date = {'June 23 2020'}>
                Moving is sooooo much work
            </Post>
        </div>
    );
}
