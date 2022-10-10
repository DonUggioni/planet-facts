import React from 'react';

import classes from './Description.module.scss';

function Description(props) {
  return <div className={classes.wrapper}>{props.children}</div>;
}

export default Description;
