/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <div className="content-center">
        <Title headline="Missões" />
        <div
          data-testid="missions"
          className="grid grid-cols-3 justify-items-center"
        >
          {missions.map((mission) => (<MissionCard
            name={mission.name}
            year={mission.year}
            country={mission.country}
            destination={mission.destination}
            key={mission.name}
          />))}
        </div>
      </div>
    );
  }
}
