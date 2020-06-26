import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    border-bottom: 2px solid black;
    font-family: 'Basier-Bold';
    padding-bottom: 1rem;
`;

export default function head() {
    return (
        <Header>
            Sadly, I am moving out right now while redesigning this portfolio.
            😢 So my projects do not have complete case studies to detail my
            design process yet. But I hope that the deliverables provide insight
            into my work!
        </Header>
    );
}
