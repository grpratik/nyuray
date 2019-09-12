import React from 'react'
import {Link} from 'react-router-dom'
import './TopBar.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const TopBar = (props) => {
    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
        },
        input: {
          display: 'none',
        },
      }));
    console.log("The value of props is :"+props);
    const classes = useStyles();

    return (
        <div className="topBar-tool">
            <span className="logo"></span>
            <Link to="/" className="name-logo">Vidyalya Mitra</Link>
            <Button variant="contained" color="secondary" className={classes.button}>Login</Button>
            {/* <button>Login</button> */}
        </div>
    );
}

export default TopBar;