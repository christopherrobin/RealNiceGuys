import React, { useEffect } from 'react';
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
import FullHeight from "react-full-height";
import { Container, Row, Col } from 'react-bootstrap';

import Button from '@material-ui/core/Button';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import RNGLogo from './sometimesitsdarkbutthatsokay.png';
import RNGLogo2 from './sometimesitsdarkbutthatsokay2.png';
/*
import SpotifyLogo from './spotify.svg';
import AmazonLogo from './amazonmusic.png';
import ITunesLogo from './ituneslogo.svg';
import InstagramLogo from './instagram.png';
import YoutubeLogo from './youtube.svg';
*/

import './App.css';

const initializeReactGA = () => {
  ReactGA.initialize('UA-135718333-2');
  ReactGA.pageview('/RNG-landing-page');
}

const App = () => {

    useEffect(() => {
      initializeReactGA();
    }, []);

    const [state, setState] = React.useState({
        checkedA: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const onOrOff = state.checkedA ? 'on' : 'off';
    const whichLogo = () => (onOrOff === 'on') ? RNGLogo : RNGLogo2;

    const scrollToMedia = () => {
      const windowHeight = window.innerHeight;
      window.scroll(0, windowHeight);
    };

    const scrollToWearables = () => {
      const windowHeight = window.innerHeight * 2;
      window.scroll(0, windowHeight);
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

              <FullHeight className="intropage" id={`blink-${onOrOff}`}>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <Killswitch checkedA={state.checkedA} handleChange={handleChange} />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="text-center">
                      <h1 style={{ fontSize: '4em' }}>Real Nice Guys</h1>
                      <img
                        src={whichLogo()} className="App-logo"
                        alt="Real Nice Guys Smiley Face"
                        title="Real Nice Guys Smiley Face"
                      />
                      <Row id="nav" style={{ margin: '1em 0' }}>
                        <Col xs={6} style={{ textAlign: 'right' }}><Button size="large" startIcon={<HeadsetOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToMedia()}>Media</Button></Col>
                        <Col xs={6} style={{ textAlign: 'left' }}><Button size="large" startIcon={<LocalMallOutlinedIcon/>} variant="contained" color="secondary" onClick={() => scrollToWearables()}>Wearables</Button></Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
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
              </FullHeight>

              <FullHeight className="media-container">
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
              </FullHeight>

              <FullHeight className="shop-container">
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
              </FullHeight>

            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default (App);
