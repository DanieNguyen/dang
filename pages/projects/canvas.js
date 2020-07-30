import { device } from '../../components/devices';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Nav from '../../components/nav';

const Tag = styled.div`
    width: 6rem;
    height: 2rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-family: 'Basier-Bold';
    background-color: #4c2c83;
    color: white;
`;

const Container = styled.div`
    height: 200px;
    @media ${device.tablet} {
        width: 512px;
        height: 300px;
    }
`

export default function about() {
    return (
        <motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 0.8, ease: 'easeOut' },
			}}
			exit={{ opacity: 0 }}>
            <Nav></Nav>
            <h1>Study Groups. </h1>
            <Tag>Website</Tag>
            <p>
                Study groups are a new feature for UW canvas to encourage
                student communities in online learning. Students can be matched
                to or discover study groups with students of similar interests
                and studying habits.
            </p>
            <h2>Details</h2>
            <p>
                I worked on this project with three other HCDE students for our
                10-week Capstone project. We worked together with our sponsor,
                UW Continuum College, to tackle the problem space of online
                learning.
            </p>
            <p>
                Our team worked collaboratively to conduct research, structure
                the information architecture and user flows, and think through
                the UX of our feature. I took initiative to lead the visual and
                interaction design of our project, creating the overall UI and
                animations.
            </p>
            <h2>Project Video</h2>
            <Container>
                <iframe
                    width='100%'
                    height='100%'
                    src='https://www.youtube.com/embed/q-P55l8iAx0'
                    frameborder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
            </Container>
        </motion.div>
    );
}
