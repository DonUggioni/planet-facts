import React, { useState } from 'react';
import PlanetImage from '../../UI/Planet-image/PlanetImage';
import PlanetGeologyImage from '../../UI/Planet-geology-image/PlanetGeologyImage';
import Buttons from '../../UI/Button/Buttons';

import '../../Layout/SectionLayout.scss';

import neptuneImg from '../../assets/images/planet-neptune.svg';
import neptuneImgInner from '../../assets/images/planet-neptune-internal.svg';
import neptuneGeologyImg from '../../assets/images/geology-neptune.png';
import PlanetDescription from '../../UI/Planet-description/PlanetDescription';
import Description from '../../Layout/Description/Description';
import PlanetInfo from '../../UI/Planet-info/PlanetInfo';

import data from '../../data.json';
import { AnimatePresence } from 'framer-motion';
import Section from '../../Layout/Section';

const info = {
  name: data[7].name,
  overview: data[7].overview.content,
  overviewSource: data[7].overview.source,
  structure: data[7].structure.content,
  structureSource: data[7].structure.source,
  geology: data[7].geology.content,
  geologySource: data[7].geology.source,
  rotationTime: data[7].rotation,
  revolutionTime: data[7].revolution,
  radius: data[7].radius,
  averageTemp: data[7].temperature,
};
function Neptune() {
  const [overview, setOverview] = useState(true);
  const [internal, setInternal] = useState(false);
  const [geology, setGeology] = useState(false);
  const [animate, setAnimate] = useState(false);

  function overviewHandler() {
    setGeology(false);
    setInternal(false);
    setOverview(true);
    setAnimate(() => !animate);
  }

  function internalHandler() {
    setOverview(false);
    setGeology(false);
    setInternal(true);
    setAnimate(() => !animate);
  }

  function geologyHandler() {
    setGeology(true);
    setInternal(false);
    setOverview(false);
    setAnimate(() => !animate);
  }

  return (
    <Section className="section_layout">
      <div className="content_wrapper">
        <div className="img_container">
          <AnimatePresence mode="wait">
            <PlanetImage
              src={internal === true ? neptuneImgInner : neptuneImg}
              alt={'neptune'}
              key={animate}
            />
          </AnimatePresence>
          <PlanetGeologyImage
            src={neptuneGeologyImg}
            alt={'neptune geology'}
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
                activeClass={'neptune_active'}
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
    </Section>
  );
}

export default Neptune;
