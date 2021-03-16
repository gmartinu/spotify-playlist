import { Button, Fade, makeStyles, Zoom } from "@material-ui/core";
import { useEffect, useState } from "react";
import './App.css';

// Imagens
import FotoEu from './img/eu.jpg';
import GitHub from './img/git.png';
import Spotify from './img/spotify.png';

const useStyles = makeStyles(() => ({
  mint: {
    background: "#1AD1B0",
    height: '100%',
    position: "absolute",
    width: "100%"
  },
  green: {
    background: "#1ED761",
    height: '100%',
    position: "relative",
  },
  login: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}))

function App() {
  const classes = useStyles();
  const [logos, setLogos] = useState(false); 
  const [zoom, setZoom] = useState(false); 
  const [zoom1, setZoom1] = useState(false); 
  const [button, setButton] = useState(false);
  const [mint2green, setM2G] = useState(true); 
  const [green2mint, setG2M] = useState(false); 

  useEffect(() => {
    // Começa a página já ativando o zoom nas imagens
    setZoom(true);
    // timeout para ativar a animação de sobreposição
    setTimeout(() => {
      setLogos(oldVal => !oldVal)
      // timeout para retrair as imagens
      setTimeout(() => {
        setZoom(false);
      }, 1000)
    }, 500)
    // timeout's para troca de cores menta > verde
    setTimeout(() => {
      setG2M(oldVal => !oldVal)
    }, 1500)
    setTimeout(() => {
      setM2G(oldVal => !oldVal)
      // timeout para ativar a logo do spotify
      setTimeout(() => {
        setZoom1(true)
        setTimeout(() => {
          setButton(true)
        }, 500)
      }, 100)
    }, 1750)
  },[])

  return (
    <>
      <Fade in={mint2green} {...(mint2green ? { timeout: 1000 } : {})}>
        <div className={classes.mint}>
          <Zoom in={zoom}>
            <div style={{height: "100%"}}>
              <img className={logos ? "FotoEu animation_eu" : "FotoEu"} src={FotoEu} alt="Foto Gabriel Martinusso" />
              <img className={logos ? "GitHub animation_git" : "GitHub"} src={GitHub} alt="GitHub Logo" />
            </div>
          </Zoom>
        </div>
      </Fade>
      <Fade in={green2mint} {...(green2mint ? { timeout: 1000 } : {})}>
        <div className={classes.green}>
          <Zoom in={zoom1}>
            <div className={classes.login}>
              <img className={button ? "Spotify login_img" : "Spotify"} src={Spotify} alt="Spotify Logo" />
              <Button
                variant="contained"
                color="primary"
                className={button ? "LoginButton login_button" : "LoginButton"}
              >
                LOGIN TO SPOTIFY
              </Button>
            </div>
          </Zoom>
        </div>
      </Fade>
    </>
  );
}

export default App;