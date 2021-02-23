import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
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

                   
            <ContactForm />
    
                    
                </div>


            </Wrapper>

            <div> <Footer /> </div>
        </div>
    );
}

export default Contact; 