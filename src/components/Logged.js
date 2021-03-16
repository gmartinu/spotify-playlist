import React from 'react';

import { useEffect, useState } from "react";

import axios from 'axios';
import User from './User';
import Player from './Player';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    logged:{
      background: "#1ED761",
      height: '100%',
      position: "relative",
      display: "flex", 
      justifyContent: "center",
      alignItems: "center"
    },
}))

function Logged(props) {
    const { token } = props;
    const classes = useStyles();
    // State
    const [user, setUser] = useState();
    const [musica, setMusica] = useState();

    useEffect(() => {
        if(token){
        axios.get("https://api.spotify.com/v1/me", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(res => {
            setUser(res.data)
            refresh_music(() => {
                axios.get("https://api.spotify.com/v1/me/player", {
                    headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json',
                    }
                }).then(res => {
                    setMusica(res.data)
                })
            });
        })
        }
    }, [token])

    const refresh_music = (cb) => {
        cb();
        setInterval(() => {
            cb();
        }, 4000)
    }
    return (
        <div className={classes.logged}>
            {user ? 
            <>
                <User user={user} />
                <Player musica={musica} />
            </>
            : null}
        </div>
    );
}

export default Logged;