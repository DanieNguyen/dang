import styled from 'styled-components';
import { device } from '../components/devices';

const QuoteBox = styled.div`
    border-left: 0.25rem solid ${({ theme }) => theme.colors.pink};
    margin: 2rem 0 0 0;
    padding: 1rem 0rem 1rem 1rem;
    @media ${device.tablet} {
        margin: 3rem 0 1rem 0;
        padding: 1rem 0rem 1rem 2rem;
    }
`;

const Quote = styled.p`
    font-family: 'Bressay';
    font-style: italic;
    font-size: 1rem;
    line-height: 1.25rem;
    @media ${device.tablet} {
        font-size: 1.5rem;
        line-height: 2rem;
    }
`;

const Author = styled.p`
    font-family: 'Basier-Medium';
    font-size: 0.75rem;
    line-height: 1.25rem;
    @media ${device.tablet} {
        font-size: 1rem;
        line-height: 1.75rem;
    }
`

export default function quote(props) {
    return (
        <div>
            <QuoteBox>
                <Quote>
                    {props.children}
                </Quote>
                <Author>{props.author}</Author>
            </QuoteBox>
        </div>
    );
}