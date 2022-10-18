import React, { useEffect, useState } from 'react';

import classes from './Button.module.scss';

function Buttons(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 672) {
      setIsMobile(true);
    }
  }, []);

  return (
    <ul className={classes.links}>
      <li className={classes.button}>
        <div
          className={classes[props.overviewActive]}
          onClick={props.onOverview}
        >
          <span className={classes.number}>01</span> overview
        </div>
      </li>
      <li className={classes.button}>
        <div
          className={classes[props.internalActive]}
          onClick={props.onInternal}
        >
          <span className={classes.number}>02</span>
          {isMobile ? 'structure' : 'internal structure'}
        </div>
      </li>
      <li className={classes.button}>
        <div className={classes[props.geoActive]} onClick={props.onGeology}>
          <span className={classes.number}>03</span>
          {isMobile ? 'surface' : 'surface geology'}
        </div>
      </li>
    </ul>
  );
}

export default Buttons;
