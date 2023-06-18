import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="flex justify-center  m-40">
        <h2
          className="w-[1140px] h-[98px] \
            flex justify-center place-items-center text-[50px] \
            border border-solid border-white \
            rounded-[17px]"
        >
          { headline }
        </h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
