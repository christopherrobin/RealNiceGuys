/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
const initializeReactGA = () => {
  ReactGA.initialize('UA-135718333-2');
  ReactGA.pageview('/RNG-presave1');
}

const App = () => {

    useEffect(() => {
      initializeReactGA();
      if (window.location.pathname === '/presave') {
        window.location.replace('https://distrokid.com/hyperfollow/realniceguys/holdin-on-to-this-feeling');
      } else {
          window.location.replace('/');
      }
    }, []);

  return (
    <div className="App">
        presave
    </div>
  );
}

export default (App);
