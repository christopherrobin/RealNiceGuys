import React from 'react';
import logo from './sometimesitsdarkbutthatsokay.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REAL NICE GUYS</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="music-player">
          <iframe
            title="Real Nice Guys Music Player"
            id="iframe"
            style={{ border: 0, width: '80%', marginTop: '2em', height: '2em' }}
            src="https://bandcamp.com/EmbeddedPlayer/album=499365377/size=small/bgcol=ffffff/linkcol=63b2cc/artwork=none/track=1294941296/transparent=true/" seamless>
            <a href="http://realniceguys.bandcamp.com/album/holding-on-to-this-feeling-single"
          >
            Holding on to This Feeling (single) by Real Nice Guys</a>
          </iframe>
        </div>
      </header>
    </div>
  );
}

export default (App);
