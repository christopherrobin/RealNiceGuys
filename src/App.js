import React from 'react';
import HackThePlanet from './HackThePlanet';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RNGLogo from './sometimesitsdarkbutthatsokay.png';
import SpotifyLogo from './spotify.svg';
import AmazonLogo from './amazonmusic.png';
import ITunesLogo from './itunes.svg';
import InstagramLogo from './instagram.png';
import YoutubeLogo from './youtube.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <h1>REAL NICE GUYS</h1>
              </header>
              <img src={RNGLogo} className="App-logo" alt="Real Nice Guys Album Art" />
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
                <img src={SpotifyLogo} alt="Listen to Real Nice Guys on Spotify" className="logo-sm coming-soon" style={{ marginLeft: 0 }} />
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC_9P0tKrLf1x_qFQ_KZbqLw"><img src={YoutubeLogo} alt="Real Nice Guys on YouTube" className="logo-bg" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/real_nice_guys/"><img src={InstagramLogo} alt="Real Nice Guys on Instagram" className="logo-sm" /></a>
                <img src={ITunesLogo} alt="Listen to Real Nice Guys on iTunes" className="logo-sm coming-soon" />
                <img src={AmazonLogo} alt="Listen to Real Nice Guys on Amazon" className="logo-bg coming-soon" />
              </div>
            </Route>
            <Route path="/hacktheplanet">
              <HackThePlanet />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default (App);
