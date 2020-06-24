import styled from 'styled-components';
import React from 'react';
import { CheckSquare, Square, EyeOff } from 'react-feather';
import { device } from '../components/devices';

const Do = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem 0 0 1rem;
    line-height: 1.5rem;
    font-size: 1rem;
    @media ${device.tablet} {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin: 1rem 0 2rem 2rem;
    }
    color: ${({ theme }) => theme.colors.text};
`;

const Done = styled(Do)`
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: line-through;
`;

const P = styled.p`
    font-family: 'Basier';
    margin-left: 1rem;
    @media ${device.tablet} {
        margin-left: 2rem;
    }
`;

const Todo = (props) => {
    if (props.done) {
        return (
            <Done>
                <CheckSquare size={24}></CheckSquare>
                <P>{props.children}</P>
            </Done>
        );
    } else {
        return (
            <Do>
                <Square size={24}></Square>
                <P>{props.children}</P>
            </Do>
        );
    }
};

export default function checklist() {
    return (
        <div>
            <Todo done={false}>Design navigation buttons</Todo>
            <Todo done={false}>Create typographic scale</Todo>
            <Todo done={true}>Make the changelog responsive</Todo>
            <Todo done={true}>Make the changelog page</Todo>
            <Todo done={true}>Code a To Do list</Todo>
            <Todo done={true}>Create an accessible color scheme</Todo>
            <Todo done={true}>Decide on fonts</Todo>
            <Todo done={true}>Decide to code my new portfolio</Todo>
            <Todo done={true}>Compare new web design tools</Todo>
            <Todo done={true}>Look at old portfolio with disgust</Todo>
            <Todo done={true}>Find inspiration on Pinterest and Bestfolios</Todo>
            <Todo done={true}>Motivate self to work on portfolio</Todo>
            <Todo done={true}>Have a quarter-life existential crisis</Todo>
        </div>
    );
}
