import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Management from './../../images/userfriendly.png'
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

export default function WhyNyurayCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardHeader id="cardHeader">
        </CardHeader>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Management}
          title="User Friendly"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          User Friendly
          </Typography>
          <Typography variant="body2" color="blue" component="p">
          It's customizable as per your choice, which gives all the connections and links at one place
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
