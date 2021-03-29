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
      alignItems: "center",
      zIndex: 1,
    },
}))

function Logged(props) {
    const { token } = props;
    const classes = useStyles();
    // State
    const [user, setUser] = useState();
    const [musica, setMusica] = useState();
    const [back, setBack] = useState(false);
    const [interval, setIntervalFunc] = useState();

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
                        // if(res.status === 204){
                        //     axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
                        //         headers: {
                        //         'Authorization': 'Bearer ' + token,
                        //         'Content-Type': 'application/json',
                        //         }
                        //     }).then(res1 => {
                        //         setMusica({item: res1.data.items[19].track})
                        //     })
                        // }else{
                            setMusica(res.data)
                        // }
                    })
                });
            })
        }
    }, [token])

    const playpause = (status) => {
        const options = {
            method: 'PUT',
            url: `https://api.spotify.com/v1/me/player/${status ? "pause" : "play"}`,
            params: {'': ''},
            headers: {Authorization: `Bearer ${token}`}
        };

        axios.request(options)
    }

    const refresh_music = (cb) => {
        cb();
        let temp = setInterval(() => {
            cb();
        }, 4000)
        setIntervalFunc(temp)
    }

    const onClickBackground = () => {
        setBack(oldValue => !oldValue)
    }

    const logout = () => {
        clearInterval(interval);
        setUser();
        setMusica();
        window.location.hash = ""
        window.location.reload();
    }

    return (
        <div className={classes.logged} style={
            back ? {
                backgroundColor: "black"
            } : {}
        }>
            <div style={
                back ? {
                    backgroundColor: "black",
                    backgroundImage: `url(${musica.item.album.images[0].url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    position: "absolute",
                    zIndex: -1,
                    width: '100%',
                    height: '100%',
                    opacity: 0.3
                } : {}
            } />
            {user ? 
            <>
                <User logout={logout} user={user} />
                <Player 
                    playpause={playpause} 
                    backgroundChange={onClickBackground} 
                    musica={musica} 
                />
            </>
            : null}
        </div>
    );
}

export default Logged;