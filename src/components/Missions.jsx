import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission) => (<MissionCard
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
          key={ mission.name }
        />))}
      </div>
    );
  }
}
