import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import HackThePlanet from './HackThePlanet';
import Shop from './Shop';
import Media from './Media';
import Killswitch from './Killswitch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FullHeight from "react-full-height";

import Button from '@material-ui/core/Button';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import RNGLogo from './sometimesitsdarkbutthatsokay.png';
import RNGLogo2 from './sometimesitsdarkbutthatsokay2.png';
import SpotifyLogo from './spotify.svg';
import AmazonLogo from './amazonmusic.png';
import ITunesLogo from './ituneslogo.svg';
import InstagramLogo from './instagram.png';
import YoutubeLogo from './youtube.svg';
import './App.css';

const initializeReactGA = () => {
  ReactGA.initialize('UA-135718333-2');
  ReactGA.pageview('/RNG-landing-page');
}

const App = () => {

    useEffect(() => {
      initializeReactGA();
    }, []);

    const [state, setState] = React.useState({
        checkedA: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const onOrOff = state.checkedA ? 'on' : 'off';
    const whichLogo = () => (onOrOff === 'on') ? RNGLogo : RNGLogo2;

    const scrollToMedia = () => {
      const windowHeight = window.innerHeight;
      window.scroll(0, windowHeight);
    };

    const scrollToWearables = () => {
      const windowHeight = window.innerHeight * 2;
      window.scroll(0, windowHeight);
    };

    const scrollToTop = () => {
      window.scroll(0, 0);
    };

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/HackThePlanet" component={HackThePlanet}></Route>
            <Route exact path="/">
              <FullHeight className="intropage" id={`blink-${onOrOff}`}>
                  <Killswitch checkedA={state.checkedA} handleChange={handleChange} />
                  <header className="App-header">
                    <h1>Real Nice Guys</h1>
                  </header>
                  <div className="text-center">
                    <img
                      src={whichLogo()} className="App-logo"
                      alt="Real Nice Guys Smiley Face"
                      title="Real Nice Guys Smiley Face"
                    />
                  </div>
                  <div id="navigation">
                    <Button size="large" startIcon={<HeadsetOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToMedia()} style={{ fontSize: '1.8em', marginLeft: 0 }}>Media</Button>
                    <Button size="large" startIcon={<LocalMallOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToWearables()} style={{ fontSize: '1.8em' }}>Wearables</Button>
                  </div>
                <div>
                  <div id="links">
                    <div id="top-banner">
                      <iframe
                        id="iframe"
                        title="Real Nice Guys Music Player"
                        src="https://bandcamp.com/EmbeddedPlayer/album=499365377/size=small/bgcol=ffffff/linkcol=63b2cc/artwork=none/track=1294941296/transparent=true/" seamless>
                        <a href="http://realniceguys.bandcamp.com/album/holding-on-to-this-feeling-single"
                      >
                        Holding on to This Feeling (single) by Real Nice Guys</a>
                      </iframe>
                    </div>
                    <span style={{display: 'none'}}>
                      <img src={SpotifyLogo} alt="Listen to Real Nice Guys on Spotify" className="logo-sm coming-soon" style={{ marginLeft: 0 }} />
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC_9P0tKrLf1x_qFQ_KZbqLw"><img src={YoutubeLogo} alt="Real Nice Guys on YouTube" className="logo-bg" /></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/real_nice_guys/"><img src={InstagramLogo} alt="Real Nice Guys on Instagram" className="logo-sm" /></a>
                      <img src={ITunesLogo} alt="Listen to Real Nice Guys on iTunes" className="logo-sm coming-soon" />
                      <img src={AmazonLogo} alt="Listen to Real Nice Guys on Amazon" className="logo-bg coming-soon" />
                    </span>
                  </div>
                </div>
              </FullHeight>
              <FullHeight className="shop-container">
                <h1 style={{ textAlign: 'center', marginTop: '.3em', marginBottom: 0 }}>Media</h1>
                <div id="navigation" style={{ marginTop: '1em' }}>
                  <Button size="large" startIcon={<HomeOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToTop()}>Home</Button>
                  <Button size="large" startIcon={<LocalMallOutlinedIcon/>} variant="contained" color="secondary"  style={{ marginLeft: 10 }} onClick={() => scrollToWearables()}>Wearables</Button>
                </div>
                <Media />
              </FullHeight>
              <FullHeight className="shop-container">
                <h1 style={{ textAlign: 'center', marginTop: '.3em', marginBottom: 0 }}>Real Nice Wearables</h1>
                <div id="navigation" style={{ marginTop: '1em' }}>
                  <Button size="large" startIcon={<HomeOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToTop()}>Home</Button>
                  <Button size="large" startIcon={<HeadsetOutlinedIcon/>} variant="contained" color="secondary" style={{ marginLeft: 10 }} onClick={() => scrollToMedia()}>Media</Button>
                </div>
                <Shop />
              </FullHeight>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default (App);
