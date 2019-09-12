import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Management from './../../images/managment6.JPG'
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

export default function WhyNyurayCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardHeader id="cardHeader">
        </CardHeader>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Management}
          title="Help 24x7"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          Help 24x7
          </Typography>
          <Typography variant="body2" color="blue" component="p">
          Our team is always ready to help, whenever required for any smaller queries, because we believe in help other is real service.
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
