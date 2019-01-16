import React, { Component, Fragment } from 'react';
import TextSection from './TextSection';
import { Works } from './data';

class HowItWorks extends Component {
  render() {
    return (
      <Fragment>
        <TextSection title={Works.title} text={Works.text} />
      </Fragment>
    );
  }
}

export default HowItWorks;