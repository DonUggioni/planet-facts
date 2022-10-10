import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <Link onClick={props.onClick} className={classes.button} to={props.to}>
      <span className={classes.button_number}>{props.number}</span>
      <span className={classes.button_text}>{props.children}</span>
    </Link>
  );
};

export default Button;
