import React from 'react';
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
        <div>
           <div container className="FirstDiv">
                <p>
                    Making stuff for people... the best!
                </p>
           </div>
           <div>
               <img src="public/assets/goodlyLogo.svg" alt=""/>
           </div>
        </div>

    )
}

export default landingPage;