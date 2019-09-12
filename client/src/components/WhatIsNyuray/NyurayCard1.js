import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Management from './../../images/managment4.jpg'
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
  },
  media: {
    height: 140,
  },
});

export default function NyurayCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardHeader id="cardHeader">
        </CardHeader>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Management}
          title="A graphical network view"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          A graphical network view
          </Typography>
          <Typography variant="body2" color="blue" component="p">
          A graphical representation of students, which tells all the connections of their siblings and parents
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="share" id="cardButton">
          <ShareIcon />
        </IconButton>
        <Button size="small" id="cardButton">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
