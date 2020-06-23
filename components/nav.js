import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../components/devices';
import React from 'react';

const NavBar = styled.nav`
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: baseline;
    padding: 1.5rem;
    @media ${device.tablet} {
        padding-left: 3rem;
        padding-right: 3rem;
        height: 10%;
    }
`

const NavMenu = styled.nav`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
`

const Logo = styled.p`
    font-family: 'HKGrotesk';
    font-weight: bold;
    font-size: 1.25rem;
    letter-spacing: -0.025rem;
    @media ${device.tablet} {
        font-size: 1.5rem;
        letter-spacing: -0.05rem;
    }
    margin: 0;
`;

const Tagline = styled.p`
    font-family: 'Bressay';
    font-style: italic;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1rem;
    padding-top: 0.5rem;
    width: 100%;
    @media ${device.tablet} {
        font-size: 1.125rem;
        line-height: 1.5rem;
        width: 28rem;
        padding-left: 1rem;
    }
    @media (max-width: 320px) {
        display: none;
    }
`;

const A = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    @media ${device.tablet} {
        flex-direction: row;
        align-items: baseline;
    }
`;

const Words = styled.a`
    font-family: 'HKGrotesk';
    font-weight: bold;
    color: black;
    text-decoration: none;
    margin: 0;
    padding-left: 1rem;

    &:hover {
        color: yellow;
    }

    @media ${device.laptop} {
        padding-left: 2rem;
    }
`;

export default function Nav() {
    return (
        <NavBar>
            <div>
                <Link href='/projects/canvas'>
                    <A>
                        <Logo>dang.</Logo><Tagline>a digital portfolio inspired by physical artifacts
                        </Tagline>
                    </A>
                </Link>
            </div>
            <NavMenu>
                <Link href='/projects'>
                    <Words>projects</Words>
                </Link>
                <Link href='/blog'>
                    <Words>blog</Words>
                </Link>
                <Link href='/about'>
                    <Words>about</Words>
                </Link>
            </NavMenu>
        </NavBar>
    );
}
