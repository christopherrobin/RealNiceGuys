/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Killswitch from './Killswitch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { preSave } from './presave'
import Button from '@material-ui/core/Button';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import RNGLogo3 from './finalcountdown.png';

import './App5.css';

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
            {timeLeft[interval]} <span id="interval">{interval}{" "}</span>
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

    const preSave = () => {
      window.open('https://distrokid.com/hyperfollow/realniceguys/holdin-on-to-this-feeling', '_blank');
    }

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/save">
              <preSave />
            </Route>
            <Route path="/">
                <div className={`blink-${onOrOff}`}>

                  <Killswitch checkedA={state.checkedA} handleChange={handleChange} />

                  <div className={`mycontainer blink-${onOrOff}`}>
                    <Container>
                      <Row>
                        <Col xs={12} className="text-center">
                          <h1 id="header">Real Nice Guys</h1>
                          <div className="container2">
                            <img
                              src={RNGLogo3} className="App-logo"
                              alt="Real Nice Guys Smiley Face"
                              title="Real Nice Guys Smiley Face"
                            />
                            <div className="vertical-center text-center timer">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className="text-center">
                          <Button
                            id="CTA-button"
                            size="large"
                            startIcon={<HeadsetOutlinedIcon/>}
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={() => preSave()}>Pre-Save on Spotify
                          </Button>
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
