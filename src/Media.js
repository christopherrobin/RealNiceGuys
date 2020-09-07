import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Container, Row, Col } from 'reactstrap';
import './Media.css';

import SpotifyLogo from './spotify.svg';
// import AmazonLogo from './amazonmusic.png';
// import ITunesLogo from './ituneslogo.svg';
import InstagramLogo from './instagram.png';
import YoutubeLogo from './youtube.svg';
import BCLogo from './bclogo.png';

export const Media = () => {
  return (
    <div id="Media-Component">
      <Container>
        <Row>
          <Col xs={12}>
            <Paper className="paper-list-item">
              <img src={BCLogo} alt="RNG on Bandcamp" className="logo-sm" />
              <a href="https://realniceguys.bandcamp.com/" target="_blank" rel="noopener noreferrer"><h2>Listen on Bandcamp</h2></a>
            </Paper>
          </Col>
          <Col xs={12}>
            <Paper className="paper-list-item">
              <img
                src={SpotifyLogo}
                alt="Listen to Real Nice Guys on Spotify"
                className="logo-sm coming-soon"
              />
              <h2 style={{ color: '#848484' }}>Spotify Available 10.31.2020</h2>
            </Paper>
          </Col>
          <Col xs={12}>
            <Paper className="paper-list-item">
              <a href="https://www.instagram.com/real_nice_guys/" target="_blank" rel="noopener noreferrer">
                <img
                  src={InstagramLogo}
                  alt="Real Nice Guys on Instagram"
                  className="logo-sm"
                />
                <h2>Instagram</h2>
              </a>
            </Paper>
          </Col>
          <Col xs={12}>
            <Paper className="paper-list-item" style={{ marginBottom: '2em' }}>
              <a href="https://www.youtube.com/channel/UC_9P0tKrLf1x_qFQ_KZbqLw" target="_blank" rel="noopener noreferrer">
                <img
                  src={YoutubeLogo}
                  alt="Real Nice Guys on YouTube"
                  className="logo-sm"
                  style={{ marginTop: '1.4em' }}
                />
                <h2>YouTube</h2>
              </a>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default(Media);
