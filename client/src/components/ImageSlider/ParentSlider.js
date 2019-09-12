import React from 'react'
import './LoginDetail.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ParentSlider = (props) => {
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
    return(
        <div className="login-Detail">
            <div className="internal-Arch">
                <p>Parent</p>
                <AccountBoxIcon style={{ fontSize: 80 }}></AccountBoxIcon>
                <p>Parents show the horizon to achieve with all the flying colors provided to their children</p>
                <Button variant="contained" color="black" className={classes.button}>Login</Button>
            </div>
        </div>
    );
}

export default ParentSlider;