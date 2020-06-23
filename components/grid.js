import React from 'react';
import styled from 'styled-components';
import { device } from './devices';

const Layout = styled.div`
    padding: 1.5rem;
    @media ${device.tablet} {
        height: 80vh;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(7, 1fr);
    }
`;
export default function grid({ children }) {
    return <Layout>{children}</Layout>;
}
