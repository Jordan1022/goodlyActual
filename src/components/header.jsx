import React from "react";
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    root: {
        "width": "200px"
        }
});

const Header = () => {
    const classes = useStyles();
    return (
       <div>
           <div className="col-md-4 classes.root">
            <Logo />
           </div>
        </div>
    )
}

export default Header;