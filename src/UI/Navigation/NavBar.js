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
            to={'mercury/overview'}
          >
            mercury
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.venus_active : classes.venus
            }
            to={'/venus/overview'}
          >
            venus
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.earth_active : classes.earth
            }
            to={'/earth/overview'}
          >
            earth
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.mars_active : classes.mars
            }
            to={'/mars/overview'}
          >
            mars
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.jupiter_active : classes.jupiter
            }
            to={'/jupiter/overview'}
          >
            jupiter
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.saturn_active : classes.saturn
            }
            to={'/saturn/overview'}
          >
            saturn
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.uranus_active : classes.uranus
            }
            to={'/uranus/overview'}
          >
            uranus
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.neptune_active : classes.neptune
            }
            to={'/neptune/overview'}
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
