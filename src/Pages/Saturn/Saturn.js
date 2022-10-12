import React, { useEffect, useState } from 'react';
import PlanetImage from '../../UI/Planet-image/PlanetImage';
import PlanetGeologyImage from '../../UI/Planet-geology-image/PlanetGeologyImage';
import Buttons from '../../UI/Button/Buttons';

import '../../Layout/SectionLayout.scss';

import saturnImg from '../../assets/images/planet-saturn.svg';
import saturnImgInner from '../../assets/images/planet-saturn-internal.svg';
import saturnGeologyImg from '../../assets/images/geology-saturn.png';
import PlanetDescription from '../../UI/Planet-description/PlanetDescription';
import Description from '../../Layout/Description/Description';
import PlanetInfo from '../../UI/Planet-info/PlanetInfo';

import data from '../../data.json';

const info = {
  name: data[5].name,
  overview: data[5].overview.content,
  overviewSource: data[5].overview.source,
  structure: data[5].structure.content,
  structureSource: data[5].structure.source,
  geology: data[5].geology.content,
  geologySource: data[5].geology.source,
  rotationTime: data[5].rotation,
  revolutionTime: data[5].revolution,
  radius: data[5].radius,
  averageTemp: data[5].temperature,
};
function Saturn() {
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
            src={internal === true ? saturnImgInner : saturnImg}
            alt={'saturn'}
            className={animate ? 'animate' : ''}
          />
          <PlanetGeologyImage
            src={saturnGeologyImg}
            alt={'saturn geology'}
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
                activeClass={'saturn_active'}
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

export default Saturn;
