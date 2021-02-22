import React from "react";
// import Grid from "../components/Grid";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Projects from "../components/Projects";

// import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// const useStyles = makeStyles


function Portfolio() {
    return (
        <div>
            <Nav />
            <Wrapper>

                {/* <Grid /> */}
                <p>Projects </p>
        <div>
          <Projects />
        </div>


            </Wrapper>
        </div>
    );
}

export default Portfolio; 