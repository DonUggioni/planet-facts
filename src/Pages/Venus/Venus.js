import React, { useEffect, useState } from 'react';
import PlanetImage from '../../UI/Planet-image/PlanetImage';
import PlanetGeologyImage from '../../UI/Planet-geology-image/PlanetGeologyImage';
import Buttons from '../../UI/Button/Buttons';

import '../../Layout/SectionLayout.scss';

import venusImg from '../../assets/images/planet-venus.svg';
import venusImgInner from '../../assets/images/planet-venus-internal.svg';
import venusGeologyImg from '../../assets/images/geology-venus.png';
import PlanetDescription from '../../UI/Planet-description/PlanetDescription';
import Description from '../../Layout/Description/Description';
import PlanetInfo from '../../UI/Planet-info/PlanetInfo';

import data from '../../data.json';

const info = {
  name: data[1].name,
  overview: data[1].overview.content,
  overviewSource: data[1].overview.source,
  structure: data[1].structure.content,
  structureSource: data[1].structure.source,
  geology: data[1].geology.content,
  geologySource: data[1].geology.source,
  rotationTime: data[1].rotation,
  revolutionTime: data[1].revolution,
  radius: data[1].radius,
  averageTemp: data[1].temperature,
};
function Venus() {
  const [overview, setOverview] = useState(true);
  const [internal, setInternal] = useState(false);
  const [geology, setGeology] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  }, [animate]);

  function overviewHandler() {
    setGeology(false);
    setInternal(false);
    setOverview(true);
    setAnimate(true);
  }

  function internalHandler() {
    setOverview(false);
    setGeology(false);
    setInternal(true);
    setAnimate(true);
  }

  function geologyHandler() {
    setGeology(true);
    setInternal(false);
    setOverview(false);
    setAnimate(true);
  }

  return (
    <section className="section_layout">
      <div className="content_wrapper">
        <div className="img_container">
          <PlanetImage
            src={internal === true ? venusImgInner : venusImg}
            alt={'Venus'}
            className={animate ? 'animate' : ''}
          />
          <PlanetGeologyImage
            src={venusGeologyImg}
            alt={'Venus geology'}
            className={
              geology ? 'geology_img geology_img--visible' : 'geology_img'
            }
          />
        </div>
        <div className="description_container">
          <Description>
            {overview && (
              <PlanetDescription
                planetName={info.name}
                planetDescription={info.overview}
                href={info.overviewSource}
              />
            )}
            {internal && (
              <PlanetDescription
                planetName={info.name}
                planetDescription={info.structure}
                href={info.structureSource}
              />
            )}
            {geology && (
              <PlanetDescription
                planetName={info.name}
                planetDescription={info.geology}
                href={info.geologySource}
              />
            )}
            <div className="buttons">
              <Buttons
                onOverview={overviewHandler}
                onInternal={internalHandler}
                onGeology={geologyHandler}
                activeClass={'venus_active'}
              />
            </div>
          </Description>
        </div>
      </div>
      <div className="planet_info_container">
        <PlanetInfo infoTitle={'rotation time'} infoData={info.rotationTime} />
        <PlanetInfo
          infoTitle={'revolution time'}
          infoData={info.revolutionTime}
        />
        <PlanetInfo infoTitle={'radius'} infoData={info.radius} />
        <PlanetInfo infoTitle={'average temp.'} infoData={info.averageTemp} />
      </div>
    </section>
  );
}

export default Venus;
