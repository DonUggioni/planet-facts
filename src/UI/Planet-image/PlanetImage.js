import React from 'react';

import classes from './PlanetImage.module.scss';

function PlanetImage(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default PlanetImage;
