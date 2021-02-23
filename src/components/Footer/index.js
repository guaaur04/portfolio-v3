import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {purple } from '@material-ui/core/colors';
import './style.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright ©'}
      <Link color="inherit" href="https://material-ui.com/">
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
//   main: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(2),
//   },

  footer: {
    padding: theme.spacing(2, 2),
    marginTop: '0 auto -50px',
    paddingBottom: '2.5 rem',
    minHeight: '100vh',
    color: theme.palette.getContrastText(purple[600]),
    backgroundColor: purple[600],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Auricia V Guardado</Typography>
          <Typography variant="body2">auricia.guardado@gmail.com</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}