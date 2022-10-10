import React from 'react';

import './SectionLayout.scss';

function Section(props) {
  return <section className="section_layout">{props.children}</section>;
}

export default Section;
