import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
        <IconButton aria-label="Github" href="https://github.com/guaaur04">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/auricia-v-guardado-599883a0/">
          <LinkedInIcon />
        </IconButton>


        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>


    </div>
  );
}