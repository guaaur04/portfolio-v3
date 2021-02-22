import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        justifyContent: 'center',
        border: 0,
        borderRadius: 3,
        padding: '0 30px',
        margin: '40px',
        backgroundColor: 'teal',
    },
}));


function About() {
    const classes = useStyles();
    return (
        <div>
            <Nav />
            <Wrapper>

                {/* Here I will render my column details */}
                <p>Hello </p>

                <div className ={classes.root}>

                    <p>I'm currently working on my Full Flex Stack Certification. On weekends I work as a line-cook at a collectively managed restaurant, the New Moon Cooperative Cafe. Aside from my duties as cook, I engage in the back-end of our business management. I have fulfilled tasks related to every department of the cafe.

                    This work has inspired a segue into web development. I thrive in collaborative and dynamic work settings. I am looking to expand my skills and creative outlets, and am looking for unique collaborative opportunies. I look forward to an eventual transition into full-time web development work.

                    I am interested work that challenges the status quo by empowering people to build alternative economic models (cooperatives, small businesses, free-lances, and related networks), and mental health and addiction support.</p>

                </div>


            </Wrapper>


            <div> <Footer /> </div>

        </div>

    );
}

export default About; 