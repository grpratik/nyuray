import React from 'react'
import './LoginDetail.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const PrincipalSlider = (props) => {
    
    console.log("The value of props is :"+props);

    const classes = useStyles();
    return(
        <div className="login-Detail">
            <div className="internal-Arch">
                <p>Prinicpal</p>
                <AccountBoxIcon style={{ fontSize: 80 }}></AccountBoxIcon>
                <p>A principal inspires all, with his/her nice gesture, well interaction and great acquiantances</p>
                <Button variant="contained" color="black" className={classes.button}>Login</Button>
            </div>
        </div>
    );
}

export default PrincipalSlider;