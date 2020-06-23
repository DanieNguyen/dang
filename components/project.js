import styled from 'styled-components';
import React from 'react';
import { device } from '../components/devices';

const Container = styled.div`
    @media ${device.tablet} {
        margin: 0;
    }
    margin-top: 4rem;
    display: flex;
    align-items: center;

    &:hover {
        color: gray;
    }
`
const Wrapper = styled.div`
    flex-direction: column;
    padding-left: 2rem;
`

const Number = styled.div`
    font-family: Bressay;
    font-size: 3rem;
`;

const Title = styled.h3`
    font-family: HKGrotesk;
    font-weight: bold;
    margin: 0;
    font-size: 1rem;
    @media ${device.laptop} {
        font-size: 1.25rem;
    }
`
const Desc = styled.p`
    font-family: Bressay;
    font-size: 1rem;
    line-height: 1.2rem;
    margin-top: 0.5rem;
`
export default function Project(props) {
    return (
        <Container>
            <Number>{props.number}</Number>
            <Wrapper>
                <Title>{props.title}</Title>
                <Desc>{props.desc}</Desc>
            </Wrapper>
        </Container>
    );
}
