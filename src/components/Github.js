import { makeStyles } from '@material-ui/core';
import React from 'react';
import GithubLogo from '../assets/img/git.png';

const useStyle = makeStyles(() => ({
    root:{
        zIndex: 10,
        position: 'absolute',
        top: "1%",
        left: "-14%",
        background: "white",
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: "6px 0px 6px 10px",
        alignItems: "center",
        transition: "all ease 1s",
        "&:after":{
            content: '""',
            height: (50 + 6 + 6),
            width: (50 + 6 + 6),
            background: "white",
            position: "absolute",
            top: '50%',
            right: -((50 + 6 + 6)/2),
            transform: 'translateY(-50%)',
            borderRadius: "50%"
        },
        '&:hover':{
            cursor: "pointer",
            left: 0
        }
    },
    img:{
        height: 50,
        zIndex: 1,
        position: 'relative',
        left: 20
    },
    text:{
        fontSize: 22
    }
}))

function AccessOnGithub() {
    const classes = useStyle();

    return (
        <div onClick={() => window.open("https://github.com/gmartinu/spotify-playlist")} className={classes.root}>
            <img className={classes.img} src={GithubLogo} alt="Github logo" />
            <span className={classes.text}>Open in Github!</span>
        </div>
    );
}

export default AccessOnGithub;