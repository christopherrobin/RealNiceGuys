import React from 'react';
import HackThePlanetGif from './HackThePlanet.gif';

const HackThePlanet = () => {
  return (
    <div>
      <h1 style={{ fontSize: '8em', color: 'white', marginTop: '.2em', lineHeight: '0.8em' }}>HACK THE PLANET</h1>
      <img
        alt="Animated GIF from the movie 'Hackers'"
        src={HackThePlanetGif}
        style={{ border: 'white solid 1em', maxWidth: '84%' }}
      />
      <p style={{ width: '90%',  margin: 'auto', marginTop: '2em', textAlign: 'left', color: 'white' }}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
      </p>
    </div>
  );
}

export default (HackThePlanet);
