import React from "react";
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { CropPortrait } from "@material-ui/icons";

const useStyles = makeStyles ({
    root: {
        color: "brown"
        }
});

const Header = () => {
    const classes = useStyles();
    return (
       <div style={{"background-color": "#cc9900", position:"sticky",}}>
           <div>
            <Logo />
           </div>
        </div>
    )
}

export default Header;