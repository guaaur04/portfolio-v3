import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// const useStyles = makeStyles
const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: '500px',
        marginRight: '500px',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '45px',
    },

    center:{
        marginLeft: '500px',
    }
}));

function Contact() {
    const classes = useStyles();
    return (
        <div>
           
            <Wrapper>
            <Nav />

                {/* Here I will render my column details */}
                <h1 className={classes.title}>Contact</h1>

                <div>

               
        <Typography classname ={classes.center} variant="body3">Contact me via E-mail, Github or LinkedIn!</Typography>  

        <Aside />    
            {/* <ContactForm /> */}
        
                </div>


            </Wrapper>

            <div> <Footer /> </div>
        </div>
    );
}

export default Contact; 