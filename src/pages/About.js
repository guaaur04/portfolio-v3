import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import Image from "material-ui-image";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// import "./style.css";

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        border: 0,
        borderRadius: 3,
        padding: '0 30px',
        margin: '40px',
        backgroundColor: 'lightblue',
        fontSize: 20,
        width: '975px',

    },
    title: {
        marginLeft: '500px',
        marginRight: '500px',
        marginTop: '20px',
        marginBottom: '20px',

        fontSize: '75px',
    },

    image: {
        height: '300px',
        width: '300px',


    }
}));


function About() {
    const classes = useStyles();
    return (
        <div>
            <Wrapper>

                <Nav />

                {/* Here I will render my column details */}
                <h1 className={classes.title}>Welcome</h1>

                <div className={classes.root}>

                    <Card className={classes.image}>
                        <Image src="https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png" />
                    </Card>

                    <Typography paragraph>
                        I'm currently working on my Full Flex Stack Certification. On weekends I work as a line-cook at a collectively managed restaurant, the New Moon Cooperative Cafe. Aside from my duties as cook, I engage in the back-end of our business management. I have fulfilled tasks related to every department of the cafe.

                    </Typography>

                    <Typography paragraph>
                        This work has inspired a segue into web development. I thrive in collaborative and dynamic work settings. I am looking to expand my skills and creative outlets, and am looking for unique collaborative opportunies. I look forward to an eventual transition into full-time web development work.

                    </Typography>

                    <Typography paragraph>
                        I am interested work that challenges the status quo by empowering people to build alternative economic models (cooperatives, small businesses, free-lances, and related networks), and mental health and addiction support.
                    </Typography>

                </div>

                <Aside />
                <div> <Footer /> </div>

            </Wrapper>


        </div>

    );
}

export default About; 