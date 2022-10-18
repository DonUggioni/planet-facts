import React, { useState } from 'react';
import PlanetImage from '../../UI/Planet-image/PlanetImage';
import PlanetGeologyImage from '../../UI/Planet-geology-image/PlanetGeologyImage';
import Buttons from '../../UI/Button/Buttons';

import '../../Layout/SectionLayout.scss';

import earthImg from '../../assets/images/planet-earth.svg';
import earthImgInner from '../../assets/images/planet-earth-internal.svg';
import earthGeologyImg from '../../assets/images/geology-earth.png';
import PlanetDescription from '../../UI/Planet-description/PlanetDescription';
import Description from '../../Layout/Description/Description';
import PlanetInfo from '../../UI/Planet-info/PlanetInfo';

import { AnimatePresence } from 'framer-motion';

import data from '../../data.json';
import Section from '../../Layout/Section';

const info = {
  name: data[2].name,
  overview: data[2].overview.content,
  overviewSource: data[2].overview.source,
  structure: data[2].structure.content,
  structureSource: data[2].structure.source,
  geology: data[2].geology.content,
  geologySource: data[2].geology.source,
  rotationTime: data[2].rotation,
  revolutionTime: data[2].revolution,
  radius: data[2].radius,
  averageTemp: data[2].temperature,
};
function Earth() {
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
              src={internal === true ? earthImgInner : earthImg}
              alt={'earth'}
              key={animate}
            />
          </AnimatePresence>
          <PlanetGeologyImage
            src={earthGeologyImg}
            alt={'earth geology'}
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
                overviewActive={overview ? 'earth_active' : ''}
                internalActive={internal ? 'earth_active' : ''}
                geoActive={geology ? 'earth_active' : ''}
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

export default Earth;
