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
    useStyles();
    return (
       <div className="row" style={{"background-color": "#cc9900", "justify-content":"space-around"}}>
           <div>
            <Logo />
           </div>
           {/* <button variant="contained" color="primary">Contact</button>
           <button className="">FAQ</button> */}
        </div>
    )
}

export default Header;