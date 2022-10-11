import React from 'react';
import PlanetImage from '../../UI/Planet-image/PlanetImage';
import Buttons from '../../UI/Button/Buttons';

import '../../Layout/SectionLayout.scss';

import mercuryImg from '../../assets/images/planet-mercury.svg';
import mercuryImgInner from '../../assets/images/planet-mercury-internal.svg';
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
  return (
    <section className="section_layout">
      <div className="content_wrapper">
        <div className="img_container">
          <PlanetImage src={mercuryImg} alt={'Mercury'} />
        </div>
        <div className="description_container">
          <Description>
            <PlanetDescription
              planetName={info.name}
              planetDescription={info.overview}
              href={info.overviewSource}
            />
            <div className="buttons">
              <Buttons />
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
