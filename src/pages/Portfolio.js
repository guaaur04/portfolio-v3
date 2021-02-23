import React from "react";
// import Grid from "../components/Grid";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import projects from "../projects.json";
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

function Portfolio() {
    const classes = useStyles();
    return (
        <div>
            
            <Wrapper>
            <Nav />

                {/* <Grid /> */}
                <h1 className={classes.title}>Projects</h1>
                {projects.map(project => (
                
                    <ProjectCard 
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    github={project.github}
                    live={project.live}
                    />
                    ))}   

                    <div> <Footer /> </div>   

            </Wrapper>
        </div>
    );
}   


export default Portfolio; 