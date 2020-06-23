import Link from 'next/link';
import styled from 'styled-components';
import { device } from './devices';
import React from 'react';

const Bottom = styled.div`
    margin-top: 4rem;
    @media ${device.tablet} {
        position: absolute;
        bottom: 0;
        width: 100vw;
    }
`
const Footr = styled.div`
    display: flex;
    width: auto;
    justify-content: flex-end;
    padding: 1.5rem;
    @media ${device.tablet} {
        padding-left: 3rem;
        padding-right: 3rem;
        height: 10%;
    }
`;

const CC = styled.p`
    font-family: 'HKGrotesk';
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    text-align: right;
    @media ${device.tablet} {
        font-size: 0.875rem;
    }
`;

export default function Footer() {
    return (
        <Bottom>
            <Footr>
                <div>
                    <CC>Made with NextJS and love. Published in 2020.</CC>
                </div>
            </Footr>
        </Bottom>
    );
}
