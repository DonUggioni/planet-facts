import React from 'react';
import rocketIcon from '../../assets/images/rocket-icon.svg';
import video from '../../assets/images/space-video2.mp4';

import classes from './Home.module.scss';

function Home() {
  return (
    <main className={classes.main}>
      <div>
        <video className={classes.video_background} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={classes.header_wrapper}>
        <h1 className={classes.header}>Welcome</h1>
        <h3 className={classes.secondary_header}>
          Select a planet and start learning!
        </h3>
      </div>
      <div className={classes.rocket_icon}>
        <img src={rocketIcon} alt="rocket icon" />
      </div>
    </main>
  );
}

export default Home;
