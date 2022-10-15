import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Button.module.scss';

function Buttons(props) {
  return (
    <ul className={classes.links}>
      <li className={classes.button}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes[props.activeClass] : ''
          }
          to="overview"
          onClick={props.onOverview}
        >
          <span className={classes.number}>01</span> overview
        </NavLink>
      </li>
      <li className={classes.button}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes[props.activeClass] : ''
          }
          to="internal"
          onClick={props.onInternal}
        >
          <span className={classes.number}>02</span> internal structure
        </NavLink>
      </li>
      <li className={classes.button}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes[props.activeClass] : ''
          }
          to="geology"
          onClick={props.onGeology}
        >
          <span className={classes.number}>03</span> surface geology
        </NavLink>
      </li>
    </ul>
  );
}

export default Buttons;
