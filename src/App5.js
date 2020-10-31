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
import Button from '@material-ui/core/Button';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import TransitionAlerts from './Alert';
import RNGLogo3 from './finalcountdown.png';
import rnpPromo from './rnppromo.png';
import rnpPromo2 from './spookypromo.png';
import rnpPromo3 from './promoboys.png';

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
            <Route path={"/secret"}>
              <img src={rnpPromo} alt="promo"/>
            </Route>
            <Route path={["/", "/presave"]}>
                <div className={`mycontainer blink-${onOrOff}`}>
                  
                  <Killswitch checkedA={state.checkedA} handleChange={handleChange} />

                  <div className={`blink-${onOrOff}`}>
                    <Container>
                      <Row>
                        <Col xs={12} className="text-center">
                          <h1 id="header">Real Nice Guys</h1>
                          <h4 style={{ color: 'white' }}>We'll be back to release an album at midnight.</h4>
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
