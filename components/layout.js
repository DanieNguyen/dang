import React from 'react';
import styled from 'styled-components';
import { device } from './devices';

const Layout = styled.div`
    width: 90%;
    @media ${device.tablet} {
        width: 75%;
    }
    @media ${device.laptop} {
        width: 60%;
    }
    @media ${device.desktop} {
        width: 40%;
    }
    margin: auto;
    padding: 1rem 0 4rem 0;
`;

export default function layout({ children }) {
    return <Layout>{children}</Layout>;
}
