import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    player:{
      display: "flex",
      minWidth: "40%"
    },
    player_img_wrapper:{
      display: "flex", 
    },
    player_img:{
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      width: 250
    },
    player_side:{
      padding: theme.spacing(1),
      height: 250,
      width: '100%'
    },
    player_name:{
      fontWeight: "bold",
    },
    player_artist:{
      marginBottom: theme.spacing(2)
    }, 
    progress:{
      border: "1px solid #1ed76199",
      height: 6,
      borderRadius: 3,
      overflow: "hidden"
    },
    progress_bar:{
      backgroundColor: "#cfcfcf",
      height: 6
    },
    player_status:{
      marginBottom: 6
    },
    player_status_wrapper:{
      height: '75%',
      display: 'flex',
      flexDirection: "column",
      justifyContent: "flex-end"
    },
    player_info:{
      height: "25%"
    }
}))

function Player(props) {
    const { musica } = props;

    const classes = useStyles();

    return (
        <>
            {musica ? 
                <Paper className={classes.player}>
                <div className={classes.player_img_wrapper}>
                    <img className={classes.player_img} src={musica.item.album.images[0].url} alt="Capa Música" />
                </div>
                <div className={classes.player_side}>
                    <div className={classes.player_info}>
                    <div className={classes.player_name}>
                        {musica.item.name}
                    </div>
                    <div className={classes.player_artist}>
                        {musica.item.artists[0].name}
                    </div>
                    </div>
                    <div className={classes.player_status_wrapper}>
                    <div className={classes.player_status}>
                        {musica.is_playing ? "Playing" : "Paused"}
                    </div>
                    <div className={classes.progress}>
                        <div 
                        className={classes.progress_bar}
                        style={{width: (musica.progress_ms * 100 / musica.item.duration_ms) + '%'}}
                        />
                    </div>
                    </div>
                </div>
            </Paper> : null}
        </>
    );
}

export default Player;