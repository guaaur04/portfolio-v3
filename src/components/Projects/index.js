import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles} from '@material-ui/core/styles';
// import "./style.css";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: 'lightblue',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Study Kanji"
        subheader="Language Learning Application"
      />
      <CardMedia
        className={classes.media}
        image="src/assets/images/kanji_study_app.png"
        title="Study Kanji"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Designed for those looking to learn Japanese in a simple and user friendly way. Understanding the Kanji is a very basic stepping stone as an introduction to the language
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Github" href="https://github.com/desasser/Japanese-Study-App">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Live Site" href="https://desasser.github.io/Japanese-Study-App/">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Designed for those looking to learn Japanese in a simple and user friendly way. Understanding the Kanji is a very basic stepping stone as an introduction to the language
          </Typography>
          <Typography paragraph>
            This could be another paragraph. 
          </Typography>
          <Typography paragraph>
          Perhaps, another ... Learning Material UI...
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}