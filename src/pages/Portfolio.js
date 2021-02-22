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
                <h1>Projects </h1>
        <div>
          <Projects />
        </div>


            </Wrapper>
        </div>
    );
}

export default Portfolio; 