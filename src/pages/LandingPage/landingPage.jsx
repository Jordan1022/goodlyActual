import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css'

const useStyles = makeStyles({
    root: {
      color: 'red',
      '& p': {
        color: 'green',
        '& span': {
          color: 'blue'
        }
      }
    },
  });

const landingPage = () => {

    return (
        <Grid>
            <header>Doing things is great eh?</header>
            <img src="public/assets/goodlyLogo.svg" alt="" />
           <Grid container className="FirstDiv">
                <p>
                    Making stuff for people... the best!
                </p>
           </Grid>
           <Grid>
               <img src="public/assets/goodlyLogo.svg" alt=""/>
           </Grid>
        </Grid>

    )
}

export default landingPage;