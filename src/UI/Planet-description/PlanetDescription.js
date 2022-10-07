import React from 'react';

import classes from './PlanetDescription.module.scss';

import sourceIcon from '../../assets/images/icon-source.svg';

function PlanetDescription(props) {
  return (
    <div className={classes.description_container}>
      <h1>{props.planetName}</h1>
      <p>{props.planetDescription}</p>
      <div className={classes.source}>
        <span>Source :</span>
        <a href={props.href}>Wikipedia</a>
        <img src={sourceIcon} alt="Source Icon" />
      </div>
    </div>
  );
}

export default PlanetDescription;
