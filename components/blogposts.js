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
        <Link href='/blog/helloworld'>
            <Container>
                <Title>{props.children}</Title>
                <Snippet>{props.sub}</Snippet>
            </Container>
        </Link>
    );
};

export default function Posts() {
    return (
        <div>
            <Post
                sub={
                    'My garage is Sakaar (the junkyard planet) from the Marvel movies'
                }>
                Moving is sooooo much work
            </Post>
        </div>
    );
}
