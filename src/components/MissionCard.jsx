import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        data-testid="mission-card"
        className="border border-solid rounded-[17px] w-[354px] h-[381px] \
          my-10"
      >
        <div className="">
          <p
            data-testid="mission-name"
            className="text-[30px] pl-5 m-5"
          >
            {name}
          </p>
          <div className="w-full my-8 border-b border-b-white" />
          <div className="text-[30px] pl-5">
            <p data-testid="mission-year">{year}</p>
            <p data-testid="mission-country">{country}</p>
            <p data-testid="mission-destination">{destination}</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
