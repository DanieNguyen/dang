import styled from 'styled-components';
import { device } from '../components/devices';

const Container = styled.div`
    width: 100%;
    border-radius: 0.25rem;
    margin-bottom: 3rem;
    height: 40vh;
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
        height: 25vh;
    }
`;

const Container2 = styled(Container)`
    @media ${device.tablet} {
        flex-direction: row-reverse;
        justify-content: space-between;
        height: 25vh;
    }
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
    @media ${device.tablet} {
        width: 50%;
    }
`;

const Text = styled.div`
    width: 100%;
    @media ${device.tablet} {
        width: 40%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const H3 = styled.h3`
    font-family: 'Basier-Bold';
    font-size: 1rem;
    margin: 2rem 0 0rem 0;
    @media ${device.laptop} {
        font-size: 1.5rem;
        margin: 1rem 0 1rem 0;
    }
    color: ${({ theme }) => theme.colors.text};
`;

const P = styled.p`
    font-family: 'Basier';
    line-height: 1.5rem;
    margin: 0.5rem 0 0 0;
    line-height: 1.5rem;
    font-size: 1rem;
    @media ${device.tablet} {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin: 0rem 0 1rem 0;
    }
    color: ${({ theme }) => theme.colors.text};
`;

const Case = (props) => {
    if (props.even) {
        return (
            <Container>
                <Img src={props.img}></Img>
                <Text>
                    <H3>{props.title}</H3>
                    <P>{props.children}</P>
                </Text>
            </Container>
        );
    } else {
        return (
            <Container2>
                <Img src={props.img}></Img>
                <Text>
                    <H3>{props.title}</H3>
                    <P>{props.children}</P>
                </Text>
            </Container2>
        );
    }
};

export default function cases() {
    return (
        <div>
            <Case even={true} title={'Vita OS'} img={'../static/images/BLM.jpg'}>
                A mobile OS designed for intentional living.
            </Case>
            <Case even={false} title={'Dispatch.'} img={'../static/images/BLM.jpg'}>
                An award-winning project for police officers on patrol.
            </Case>
            <Case even={true} title={'LA Fitness'} img={'../static/images/BLM.jpg'}>
                A redesign of the gym's mobile app.
            </Case>
            <Case even={false} title={'Garmin'} img={'../static/images/BLM.jpg'}>
                An infotainment platform's streamlined music experience.
            </Case>
        </div>
    );
}
