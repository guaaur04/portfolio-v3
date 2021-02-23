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
        // backgroundColor: 'lightblue',
        fontSize: 20,
        width: '975px',
        color: 'black',

    },
    title: {
        marginLeft: '500px',
        marginRight: '500px',
        marginTop: '20px',
        marginBottom: '5px',
        fontSize: '45px',
    },

    image: {
        height: '300px',
        width: '300px',
        float: 'left',
        marginRight: '5px',

    },

    blurb: {
        textAlign: 'justify',
        fontSize:'15px',
        color: 'black',
        fontWeight: 'bold',
    },

}));


function About() {
    const classes = useStyles();
    return (
        <div>
            <Wrapper>

                <Nav />

                {/* Here I will render my column details */}
                <h1 className={classes.title}>Welcome</h1>
                <Aside />
                <div className={classes.root}>


                
                    <Card className={classes.image}>
                        <Image src='./images/portrait.jpg'/>
                    </Card>

                    <Typography paragraph className={classes.blurb}>
                        I'm currently working on my Full Flex Stack Certification at the University of Washington Trilogy Bootcamp. On weekends I work as line-cook at a collectively managed restaurant, the New Moon Cooperative Cafe. Aside from my duties as cook, I engage in the back-end of our business management. I have fulfilled tasks related to every department of the cafe.

                    </Typography>

                    <Typography paragraph className={classes.blurb}>
                        This work has inspired a segue into web development. I thrive in collaborative and dynamic work settings. I am looking to expand my skills and creative outlets, and am looking for unique collaborative opportunies. I look forward to an eventual transition into full-time web development work.

                    </Typography>

                    <Typography paragraph className={classes.blurb} >
                        I am interested in work that challenges the status quo by empowering people to build alternative economic models (cooperatives, small businesses, free-lancers, and related networks). 
                    </Typography>

                </div>

                <div> <Footer /> </div>

            </Wrapper>


        </div>

    );
}

export default About; 