import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// const useStyles = makeStyles


function Contact() {
    return (
        <div>
            <Nav />
            <Wrapper>

                {/* Here I will render my column details */}
                <h1> Contact </h1>

                <div>

                   
<ContactForm />
    
                    
                </div>


            </Wrapper>

            <div> <Footer /> </div>
        </div>
    );
}

export default Contact; 