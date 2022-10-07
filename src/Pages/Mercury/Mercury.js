import React from 'react';
import Section from '../../Layout/Section';
import PlanetImage from '../../UI/Planet-image/PlanetImage';

import mercuryImg from '../../assets/images/planet-mercury.svg';
import mercuryImgInner from '../../assets/images/planet-mercury-internal.svg';
import PlanetDescription from '../../UI/Planet-description/PlanetDescription';

function Mercury() {
  return (
    <Section>
      <PlanetImage src={mercuryImg} alt={'Mercury'} />
      <PlanetDescription
        planetName={'Mercury'}
        planetDescription={
          "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
        }
        href={'https://www.google.com'}
      />
    </Section>
  );
}

export default Mercury;
