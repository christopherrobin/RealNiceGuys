import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Killswitch from './Killswitch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Mailto from 'react-protected-mailto'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import './App5.css';

const initializeReactGA = () => {
  ReactGA.initialize('UA-135718333-2');
  ReactGA.pageview('/RNG-landing-page');
}

const App = () => {

    useEffect(() => {
      initializeReactGA();
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
                <div className="topper d-none d-sm-block">
                  <a title="Listen to Real Nice Guys on Spotify" alt="Listen to Real Nice Guys on Spotify" href="https://open.spotify.com/artist/6NtJSpbLAsmNQybFG6tzyR" target="_blank" rel="noopener noreferrer">Listen on Spotify<KeyboardArrowRightIcon /></a>
                </div>
                <div className={`mycontainer blink-${onOrOff}`}>
                  <span className="d-none d-sm-block"><Killswitch checkedA={state.checkedA} handleChange={handleChange} /></span>
                  <div className={`blink-${onOrOff}`}>
                    <Container>
                      <Row>
                        <Col xs={12}><h1 id="header" className="text-center">Real Nice Guys</h1></Col>
                        <Col xs={12} className="text-center">
                          <div className="text-center">
                            <iframe
                              title="Listen to Real Nice Guys"
                              alt="Listen to Real Nice Guys"
                              src="https://bandcamp.com/EmbeddedPlayer/album=1764206894/size=large/bgcol=ffffff/linkcol=f171a2/artwork=small/transparent=true/"
                              seamless
                              style={{ width: '100%', border: 0, maxWidth: '26em' }}
                              className="player"
                            >
                          </iframe>
                          </div>
                          <div className="text-center">
                            <div style={{ margin: '0 0 1em 0' }}><Mailto style={{ display: 'block', fontWeight: 'bold'}} className="social-icon-nomargin" email='info@realniceguys.com' /></div>
                            <a alt="Real Nice Guys on Instagram" href="https://www.instagram.com/real_nice_guys/" className="social-icon-nomargin" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="large" /></a>
                            <a alt="Real Nice Guys on YouTube" href="https://www.youtube.com/channel/UC_9P0tKrLf1x_qFQ_KZbqLw" className="social-icon" target="_blank" rel="noopener noreferrer"><YouTubeIcon fontSize="large" /></a>
                            <a alt="Real Nice Guys on Twitter" href="https://twitter.com/Real_Nice_Guys" className="social-icon" target="_blank" rel="noopener noreferrer"><TwitterIcon fontSize="large" /></a>
                            <a alt="Real Nice Guys on Facebook" href="https://www.facebook.com/RealNiceGuys/" className="social-icon" target="_blank" rel="noopener noreferrer"><FacebookIcon fontSize="large" /></a>
                          </div>
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
