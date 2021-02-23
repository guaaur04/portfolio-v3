import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

//We must import icons individually to call in our code 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    marginLeft: '35px',

  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
    fontSize: '50px',
    fontFamily :'Roboto',
    textShadow: '0px 2px 4px lightpurple'
    
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: '30px',

  },
}));

//Sets the color (and hover) of Nav buttons

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

//Another way to set color of Nav buttons

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});


export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {/* This is where the burger bar icon lives  */} 
          <Typography className={classes.title} variant="h5" noWrap>
            V Guardado
          </Typography>


          <ColorButton href="../About" variant="contained" color="primary" className={classes.margin}>
            About
      </ColorButton>

          <ColorButton href="../Portfolio" variant="contained" color="primary" className={classes.margin}>
            Portfolio
      </ColorButton>

          <ThemeProvider theme={theme}>
            <Button href="../Contact" variant="contained" color="primary" className={classes.margin}>
              Contact
         </Button>
        </ThemeProvider>

        </Toolbar>
      </AppBar>
    </div>
  );
}
