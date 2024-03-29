/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';
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
import { Container, Row, Col } from 'react-bootstrap';

import Button from '@material-ui/core/Button';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import RNGLogo from './sometimesitsdarkbutthatsokay.png';
import RNGLogo2 from './sometimesitsdarkbutthatsokay2.png';

import './App.css';

const initializeReactGA = () => {
  ReactGA.initialize('UA-135718333-2');
  ReactGA.pageview('/RNG-landing-page');
}

const App = () => {

    useEffect(() => {
      initializeReactGA();
    }, []);

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-31`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    // Start Timer Code
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    // const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, key) => {

        const uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        }

        if (!timeLeft[interval]) {
        return;
        }

        timerComponents.push(
        <div key={uuidv4()}>
            {timeLeft[interval]}
        </div>
        );
    });
    // End Time Code

    const [state, setState] = useState({
        checkedA: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const onOrOff = state.checkedA ? 'on' : 'off';
    const whichLogo = () => (onOrOff === 'on') ? RNGLogo : RNGLogo2;

    const scrollToMedia = () => {
      window.scrollTo(window.innerWidth, 0)
    };

    const scrollToWearables = () => {
      window.scroll(window.innerWidth * 2, 0);
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
            <div className={`blink-${onOrOff}`}>

              <Killswitch checkedA={state.checkedA} handleChange={handleChange} />

              <div className={`slide slide1 blink-${onOrOff}`}>
                <Container>
                  <Row>
                    <Col xs={12} className="text-center">
                      <img
                        src={whichLogo()} className="App-logo"
                        alt="Real Nice Guys Smiley Face"
                        title="Real Nice Guys Smiley Face"
                      />
                      
                      <Row id="nav" style={{ margin: '1em 0', display: 'none' }}>
                        <Col xs={6} style={{ textAlign: 'right' }}><Button size="large" startIcon={<HeadsetOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToMedia()}>Media</Button></Col>
                        <Col xs={6} style={{ textAlign: 'left' }}><Button size="large" startIcon={<LocalMallOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToWearables()}>Wearables</Button></Col>
                      </Row>
                      <Col xs={12} id="countdown">
                        <div></div>
                        <div>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
                      </Col>
                    </Col>
                  </Row>
                  <Row style={{ display: 'none' }}>
                    <Col xs={12} className="text-center" style={{marginTop: '1.5em'}}>
                      <iframe
                        id="iframe"
                        title="Real Nice Guys Music Player"
                        src="https://bandcamp.com/EmbeddedPlayer/album=499365377/size=small/bgcol=ffffff/linkcol=63b2cc/artwork=none/track=1294941296/transparent=true/" seamless>
                        <a href="http://realniceguys.bandcamp.com/album/holding-on-to-this-feeling-single"
                      >
                        Holding on to This Feeling (single) by Real Nice Guys</a>
                      </iframe>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className={`slide slide2`}>
                <Container>
                  <Row><Col xs={12}><h1 style={{ textAlign: 'center', marginTop: '.3em', marginBottom: 0 }}>Media</h1></Col></Row>
                  <Row style={{ margin: '1em 0' }}>
                    <Col xs={6} style={{ textAlign: 'right' }}><Button fullWidth size="large" startIcon={<HomeOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToTop()}>Home</Button></Col>
                    <Col xs={6} style={{ textAlign: 'left' }}><Button fullWidth size="large" startIcon={<LocalMallOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToWearables()}>Wearables</Button></Col>
                  </Row>
                  <Col xs={12}>
                    <Media />
                  </Col>
                </Container>
              </div>

              <div className={`slide slide3`}>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <h1 style={{ textAlign: 'center', marginTop: '.3em', marginBottom: 0 }}>Real Nice Wearables</h1>
                    </Col>
                  </Row>
                  <Row style={{ margin: '1em 0' }}>
                    <Col xs={6} style={{ textAlign: 'right' }}><Button fullWidth size="large" startIcon={<HomeOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToTop()}>Home</Button></Col>
                    <Col xs={6}><Button fullWidth size="large" startIcon={<HeadsetOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToMedia()}>Media</Button></Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Shop />
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
