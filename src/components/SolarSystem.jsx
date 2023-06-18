import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <div className="">
        <Title headline="Planetas" className="" />
        <div
          className="w-full h-full flex flex-row justify-evenly"
          data-testid="solar-system"
        >
          {planets.map((planet) => (
            <PlanetCard
              className=""
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />
          ))}
        </div>
      </div>
    );
  }
}
