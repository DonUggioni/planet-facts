import React from 'react';

import { motion } from 'framer-motion';

function Section(props) {
  return (
    <motion.section
      className={props.className}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {props.children}
    </motion.section>
  );
}

export default Section;
