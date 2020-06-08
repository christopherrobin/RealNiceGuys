import React from 'react';
import HackThePlanet from './HackThePlanet';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './sometimesitsdarkbutthatsokay.png';
// import SpotifyLogo from './spotify.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
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
              <header className="App-header">
                <h1>REAL NICE GUYS</h1>
              </header>
              <img src={logo} className="App-logo" alt="logo" />
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
