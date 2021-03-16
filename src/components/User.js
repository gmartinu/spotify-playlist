import { Button, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    userPic: {
      width: 75,
      borderRadius: "50%"
    },
    userCard: {
      padding: theme.spacing(1),
      width: "fit-content",
      display: "flex",
      position: "absolute",
      left: 10,
      bottom: 10,
      "&:hover":{
        cursor: "pointer"
      }
    },
    logout:{
      position: "absolute",
      right: 10, 
      bottom: 10
    }, 
}))

function User(props) {
    const { user } = props;

    const classes = useStyles();

    return (
        <>
            <Paper onClick={() => window.open(user.external_urls.spotify)} className={classes.userCard}>
                <img className={classes.userPic} alt="User Logo" src={user.images[0].url} />
            </Paper>
            <Button variant="contained" color="primary" className={classes.logout}>SAIR</Button>
        </>
    );
}

export default User;