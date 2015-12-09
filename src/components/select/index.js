'use strict'

import React from 'react';

export const Select = React.createClass({
  // propTypes: {
  //   value: React.PropTypes.string
  // },

  getInitialState: function () {
    return {
      value: this.props.value
    };
  },

  onchange: function (event) {
    this.setState({
      value: event.currentTarget.value
    });

    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value);
    }
  },

  render() {
    return (
      <select>
        <input onChange={this.onchange} value={this.state.value} />
      </select>
    )
  }
});
