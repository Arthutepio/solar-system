/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (

      <div
        data-testid="planet-card"
        className="flex flex-col items-center"
      >
        <div>
          <img
            src={planetImage}
            alt={`Planeta ${planetName}`}
            className="w-[150px] h-[120px] \
                m-5 hover:scale-150 transition-all duration-700"
          />
        </div>
        <p
          data-testid="planet-name"
          className="text-[16px] m-5 hover:text-cyan-400 transition-all duration-300"
        >
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
