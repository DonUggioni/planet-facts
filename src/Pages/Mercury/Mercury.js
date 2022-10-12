import React, { useEffect, useState } from 'react';
import PlanetImage from '../../UI/Planet-image/PlanetImage';
import PlanetGeologyImage from '../../UI/Planet-geology-image/PlanetGeologyImage';
import Buttons from '../../UI/Button/Buttons';

import '../../Layout/SectionLayout.scss';

import mercuryImg from '../../assets/images/planet-mercury.svg';
import mercuryImgInner from '../../assets/images/planet-mercury-internal.svg';
import mercuryGeologyImg from '../../assets/images/geology-mercury.png';
import PlanetDescription from '../../UI/Planet-description/PlanetDescription';
import Description from '../../Layout/Description/Description';
import PlanetInfo from '../../UI/Planet-info/PlanetInfo';

import data from '../../data.json';

const info = {
  name: data[0].name,
  overview: data[0].overview.content,
  overviewSource: data[0].overview.source,
  structure: data[0].structure.content,
  structureSource: data[0].structure.source,
  geology: data[0].geology.content,
  geologySource: data[0].geology.source,
  rotationTime: data[0].rotation,
  revolutionTime: data[0].revolution,
  radius: data[0].radius,
  averageTemp: data[0].temperature,
};
function Mercury() {
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
            src={internal === true ? mercuryImgInner : mercuryImg}
            alt={'Mercury'}
            className={animate ? 'animate' : ''}
          />
          <PlanetGeologyImage
            src={mercuryGeologyImg}
            alt={'Mercury geology'}
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
                activeClass={'mercury_active'}
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

export default Mercury;
