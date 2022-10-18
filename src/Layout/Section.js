import React from 'react';

import { motion } from 'framer-motion';

function Section(props) {
  return (
    <motion.main
      className={props.className}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {props.children}
    </motion.main>
  );
}

export default Section;
