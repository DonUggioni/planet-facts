import React from 'react';

import { motion } from 'framer-motion';

import classes from './PlanetImage.module.scss';

function PlanetImage(props) {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      src={props.src}
      alt={props.alt}
      className={classes.planet_img}
    />
  );
}

export default PlanetImage;
