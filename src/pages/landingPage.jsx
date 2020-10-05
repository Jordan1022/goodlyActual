import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexgrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
// }}));

const landingPage = () => {
    // const classes = useStyles();
    
    return (
        <Grid>
           <Grid container spacing={3}>
                <p>
                    Hey O the Dairy O there's whiskey in the Jar!!!
                </p>
           </Grid>
        </Grid>

    )
}

export default landingPage;