import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';

import classes from './NavBar.module.scss';

import React from 'react';

function NavBar() {
  return (
    <nav className={classes.navigation}>
      <div className={classes.logo}>
        <span>the planets</span>
      </div>
      <ul>
        <li className={classes.mercury}>
          <NavLink to={'/mercury'}>mercury</NavLink>
        </li>
        <li className={classes.venus}>
          <NavLink to={'/venus'}>venus</NavLink>
        </li>
        <li className={classes.earth}>
          <NavLink to={'/earth'}>earth</NavLink>
        </li>
        <li className={classes.mars}>
          <NavLink to={'/mars'}>mars</NavLink>
        </li>
        <li className={classes.jupiter}>
          <NavLink to={'/jupiter'}>jupiter</NavLink>
        </li>
        <li className={classes.saturn}>
          <NavLink to={'/saturn'}>saturn</NavLink>
        </li>
        <li className={classes.uranus}>
          <NavLink to={'/uranus'}>uranus</NavLink>
        </li>
        <li className={classes.neptune}>
          <NavLink to={'/neptune'}>neptune</NavLink>
        </li>
      </ul>
      <div className={classes.hamburguer}>
        <Hamburger size={20} />
      </div>
    </nav>
  );
}

export default NavBar;
