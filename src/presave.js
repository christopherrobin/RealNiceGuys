/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
const initializeReactGA = () => {
  ReactGA.initialize('UA-135718333-2');
  ReactGA.pageview('/RNG-presave1');
}

const preSave = () => {

    useEffect(() => {
      initializeReactGA();
      if (window.location.pathname === '/save') {
        window.location.replace('https://distrokid.com/hyperfollow/realniceguys/holdin-on-to-this-feeling');
      }
    }, []);

  return (
    <div className="App">
        Pre-Save RNG to your Spotify account.
    </div>
  );
}

export default (preSave);
