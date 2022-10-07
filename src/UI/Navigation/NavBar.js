import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

import classes from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={classes.navigation}>
      <Link to="/">
        <div className={classes.logo}>
          <span>the planets</span>
        </div>
      </Link>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.mercury_active : classes.mercury
            }
            to={'/mercury'}
          >
            mercury
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.venus_active : classes.venus
            }
            to={'/venus'}
          >
            venus
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.earth_active : classes.earth
            }
            to={'/earth'}
          >
            earth
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.mars_active : classes.mars
            }
            to={'/mars'}
          >
            mars
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.jupiter_active : classes.jupiter
            }
            to={'/jupiter'}
          >
            jupiter
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.saturn_active : classes.saturn
            }
            to={'/saturn'}
          >
            saturn
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.uranus_active : classes.uranus
            }
            to={'/uranus'}
          >
            uranus
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.neptune_active : classes.neptune
            }
            to={'/neptune'}
          >
            neptune
          </NavLink>
        </li>
      </ul>
      <div className={classes.hamburguer}>
        <Hamburger size={20} />
      </div>
    </nav>
  );
}

export default NavBar;
