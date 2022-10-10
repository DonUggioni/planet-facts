import React from 'react';

// import classes from './PlanetImage.module.scss';

function PlanetImage(props) {
  return <img src={props.src} alt={props.alt} />;
}

export default PlanetImage;
