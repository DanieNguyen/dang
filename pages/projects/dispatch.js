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
    background-color: #0f233f;
    color: white;
`;

const Img = styled.img`
    width: 100%;
    margin-bottom: 1rem;
`;

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
            <h1>Dispatch. </h1>
            <Tag>Mobile App</Tag>
            <p>
                Dispatch is a mobile app for policer officers patrolling on
                foot. It provides an efficient and safe way for police officers
                to respond to incidents in their patrol area.
            </p>
            <h2>Details</h2>
            <p>
                I worked on this project with one designer, Lena Tran, at the
                2020 Protothon. We addressed the problem space of improving the
                police dispatch and response system through an extensive design
                process full of research, iteration, and critique.
            </p>
            <p>Dispatch received 3rd place at the 2020 Protothon! </p>
            <p>
                I designed collaboratively with Lena for the UX of the app. I took the lead for visual design: designing an atomic UI design system, branding, and the presentation deck.
            </p>
            <h2>Presentation Deck</h2>
            <Img src='/static/images/dispatch/1.png'></Img>
            <Img src='/static/images/dispatch/2.png'></Img>
            <Img src='/static/images/dispatch/3.png'></Img>
            <Img src='/static/images/dispatch/4.png'></Img>
            <Img src='/static/images/dispatch/5.png'></Img>
            <Img src='/static/images/dispatch/6.png'></Img>
            <Img src='/static/images/dispatch/7.png'></Img>
            <Img src='/static/images/dispatch/8.png'></Img>
            <Img src='/static/images/dispatch/9.png'></Img>
            <Img src='/static/images/dispatch/10.png'></Img>
            <Img src='/static/images/dispatch/11.png'></Img>
        </motion.div>
    );
}
