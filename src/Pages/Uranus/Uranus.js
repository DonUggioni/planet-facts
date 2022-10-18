import React, { useState } from 'react';
import PlanetImage from '../../UI/Planet-image/PlanetImage';
import PlanetGeologyImage from '../../UI/Planet-geology-image/PlanetGeologyImage';
import Buttons from '../../UI/Button/Buttons';

import '../../Layout/SectionLayout.scss';

import uranusImg from '../../assets/images/planet-uranus.svg';
import uranusImgInner from '../../assets/images/planet-uranus-internal.svg';
import uranusGeologyImg from '../../assets/images/geology-uranus.png';
import PlanetDescription from '../../UI/Planet-description/PlanetDescription';
import Description from '../../Layout/Description/Description';
import PlanetInfo from '../../UI/Planet-info/PlanetInfo';

import data from '../../data.json';
import { AnimatePresence } from 'framer-motion';
import Section from '../../Layout/Section';

const info = {
  name: data[6].name,
  overview: data[6].overview.content,
  overviewSource: data[6].overview.source,
  structure: data[6].structure.content,
  structureSource: data[6].structure.source,
  geology: data[6].geology.content,
  geologySource: data[6].geology.source,
  rotationTime: data[6].rotation,
  revolutionTime: data[6].revolution,
  radius: data[6].radius,
  averageTemp: data[6].temperature,
};
function Uranus() {
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
              src={internal === true ? uranusImgInner : uranusImg}
              alt={'uranus'}
              key={animate}
            />
          </AnimatePresence>
          <PlanetGeologyImage
            src={uranusGeologyImg}
            alt={'uranus geology'}
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
                overviewActive={overview ? 'uranus_active' : ''}
                internalActive={internal ? 'uranus_active' : ''}
                geoActive={geology ? 'uranus_active' : ''}
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

export default Uranus;
