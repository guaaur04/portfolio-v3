import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  icons:{
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
      width: '100%',
    },
  }

}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonGroup
        color="primary"
        aria-label="contained primary button group"
        variant="text"
      >
        <IconButton className={classes.icons} aria-label="Github" href="https://github.com/guaaur04">
          <FavoriteIcon />
        </IconButton>

        <IconButton className={classes.icons} aria-label="LinkedIn" href="https://www.linkedin.com/in/auricia-v-guardado-599883a0/">
          <LinkedInIcon />
        </IconButton>

      </ButtonGroup>


    </div>
  );
}