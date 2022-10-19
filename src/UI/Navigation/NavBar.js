import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import arrowIcon from '../../assets/images/icon-chevron.svg';

import classes from './NavBar.module.scss';

let navVariants = {};
let linkVariants = {};
const isMobile = window.innerWidth <= 672;
if (isMobile) {
  navVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  linkVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    hidden: { opacity: 0, x: '20%', transition: { duration: 0.2 } },
  };
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function navBarToggle() {
    setIsOpen(() => !isOpen);
  }

  document.body.style.overflowY = isOpen && isMobile ? 'hidden' : 'unset';

  function closeNavBar() {
    setIsOpen(false);

    document.body.style.overflowY = 'unset';
  }

  return (
    <nav className={classes.navigation}>
      <Link to="/">
        <div className={classes.logo} onClick={closeNavBar}>
          <span>the planets</span>
        </div>
      </Link>

      <motion.ul
        initial={false}
        animate={isOpen ? 'visible' : 'hidden'}
        variants={navVariants}
        onClick={navBarToggle}
      >
        <motion.li variants={linkVariants}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.mercury_active : classes.mercury
            }
            to={'/mercury'}
          >
            mercury
            <img
              className={classes.arrow_icon}
              alt="arrow icon"
              src={arrowIcon}
            />
          </NavLink>
        </motion.li>

        <motion.li variants={linkVariants}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.venus_active : classes.venus
            }
            to={'/venus'}
          >
            venus
            <img
              className={classes.arrow_icon}
              alt="arrow icon"
              src={arrowIcon}
            />
          </NavLink>
        </motion.li>

        <motion.li variants={linkVariants}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.earth_active : classes.earth
            }
            to={'/earth'}
          >
            earth
            <img
              className={classes.arrow_icon}
              alt="arrow icon"
              src={arrowIcon}
            />
          </NavLink>
        </motion.li>

        <motion.li variants={linkVariants}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.mars_active : classes.mars
            }
            to={'/mars'}
          >
            mars
            <img
              className={classes.arrow_icon}
              alt="arrow icon"
              src={arrowIcon}
            />
          </NavLink>
        </motion.li>

        <motion.li variants={linkVariants}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.jupiter_active : classes.jupiter
            }
            to={'/jupiter'}
          >
            jupiter
            <img
              className={classes.arrow_icon}
              alt="arrow icon"
              src={arrowIcon}
            />
          </NavLink>
        </motion.li>

        <motion.li variants={linkVariants}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.saturn_active : classes.saturn
            }
            to={'/saturn'}
          >
            saturn
            <img
              className={classes.arrow_icon}
              alt="arrow icon"
              src={arrowIcon}
            />
          </NavLink>
        </motion.li>

        <motion.li variants={linkVariants}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.uranus_active : classes.uranus
            }
            to={'/uranus'}
          >
            uranus
            <img
              className={classes.arrow_icon}
              alt="arrow icon"
              src={arrowIcon}
            />
          </NavLink>
        </motion.li>

        <motion.li variants={linkVariants}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.neptune_active : classes.neptune
            }
            to={'/neptune'}
          >
            neptune
            <img
              className={classes.arrow_icon}
              alt="arrow icon"
              src={arrowIcon}
            />
          </NavLink>
        </motion.li>
      </motion.ul>

      <div className={classes.hamburguer} onClick={navBarToggle}>
        <Hamburger size={25} toggled={isOpen} />
      </div>
    </nav>
  );
}

export default NavBar;
