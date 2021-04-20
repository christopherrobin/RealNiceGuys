import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Killswitch from './Killswitch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Mailto from 'react-protected-mailto'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

// import elon from './elon.png';

import './App5.css';

const initializeReactGA = () => {
  ReactGA.initialize('UA-135718333-2');
  ReactGA.pageview('/RNG-landing-page');
}

const App = () => {

    useEffect(() => {
      initializeReactGA();
      console.info(`
       ____  _____    _    _       _   _ ___ ____ _____    ____ _   ___   ______  
      |  _ \\| ____|  / \\  | |     | \\ | |_ _/ ___| ____|  / ___| | | \\ \\ / / ___| 
      | |_) |  _|   / _ \\ | |     |  \\| || | |   |  _|   | |  _| | | |\\ V /\\___ \\ 
      |  _ <| |___ / ___ \\| |___  | |\\  || | |___| |___  | |_| | |_| | | |  ___) |
      |_| \\_\\_____/_/   \\_\\_____| |_| \\_|___\\____|_____|  \\____|\\___/  |_| |____/ 

      You've stumbled upon the beginning of an elaborate rabbit hole. Nice!
      At the end of this quest lies a treasure trove of real nice content
      and access to an inner circle of fellow real nice brethren. You'll find
      videos that you can't unsee. You'll hear tracks from the boys that
      you would think should be sound crimes. This is not a social networking
      website, it's a diverse collective of real nice people who like
      Real Nice songs. Good luck and if you need help ¯\\_(ツ)_/¯
      
      If you want our hot uploads
      You'll have to crack our real nice codes
      I've listed below the address to start
      It's fully encrypted so I hope you're smart
      The pad you need repeatsandrepeatsandrepeatsandrepeats
      It's the initials of the authors who compose these beats

      ygzg://jcn.ekrytzpkxhej.pud/ugtxzyrvcntvg

      Love,
      RNG
      `);
    }, []);

    const [state, setState] = useState({
        checkedA: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const onOrOff = state.checkedA ? 'on' : 'off';

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path={'/'}>
                <div className="topper">
                  <a title="Listen to Real Nice Guys on Spotify" alt="Open to Real Nice Guys on Spotify" href="https://open.spotify.com/artist/6NtJSpbLAsmNQybFG6tzyR" target="_blank" rel="noopener noreferrer">Open on Spotify<KeyboardArrowRightIcon /></a>
                </div>
                <div className={`mycontainer blink-${onOrOff}`}>
                  <span className="d-none d-sm-block"><Killswitch checkedA={state.checkedA} handleChange={handleChange} /></span>
                  <div className={`blink-${onOrOff}`}>
                    <Container>
                      <Row>
                        <Col xs={12}><h1 id="header" className="text-center">Real Nice Guys</h1></Col>
                        <Col xs={12}>
                          <div className="text-center" style={{margin: '.5em 0 1.5em 0'}}>
                            <a alt="Real Nice Guys on Instagram" href="https://www.instagram.com/real_nice_guys/" className="social-icon-nomargin" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="large" /></a>
                            <a alt="Real Nice Guys on YouTube" href="https://www.youtube.com/channel/UC_9P0tKrLf1x_qFQ_KZbqLw" className="social-icon" target="_blank" rel="noopener noreferrer"><YouTubeIcon fontSize="large" /></a>
                            <a alt="Real Nice Guys on Twitter" href="https://twitter.com/Real_Nice_Guys" className="social-icon" target="_blank" rel="noopener noreferrer"><TwitterIcon fontSize="large" /></a>
                            <a alt="Real Nice Guys on Facebook" href="https://www.facebook.com/RealNiceGuys/" className="social-icon" target="_blank" rel="noopener noreferrer"><FacebookIcon fontSize="large" /></a>
                            <div style={{marginTop: '1em'}}><Mailto style={{ display: 'block', fontWeight: 'bold' }} className="social-icon-nomargin" email='info@realniceguys.com' /></div>
                          </div>
                        </Col>
                        <Col xs={12} className="text-center"><Button variant="info" onClick={() => window.open('https://shop.spreadshirt.com/realniceguys/')}>Shop RNG<KeyboardArrowRightIcon /></Button></Col>
                      </Row>
                      <Row>
                        <Col className="text-center" style={{ marginTop: '2em' }}>
                          <iframe width="80%" height="315" src="https://www.youtube.com/embed/ATJsrQowmbE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default (App);
