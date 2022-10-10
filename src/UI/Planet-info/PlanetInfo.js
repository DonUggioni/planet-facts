import React from 'react';

import classes from './PlanetInfo.module.scss';

function PlanetInfo(props) {
  return (
    <div className={classes.planet_info}>
      <span>{props.infoTitle}</span>
      <h2>{props.infoData}</h2>
    </div>
  );
}

export default PlanetInfo;
