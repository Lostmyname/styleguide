'use strict'

import React from 'react';

export const TextInput = React.createClass({
  propTypes: {
    value: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      value: this.props.value
    };
  },

  onEnter: function (event) {
    if (event.keyCode === 13 && this.props.onEnter) {
      if (this.props.onEnter) {
        this.props.onEnter(this.props.name, this.state.value);
      }
    }
  },

  onchange: function (event) {
    this.setState({
      value: event.currentTarget.value
    });

    if (this.props.onChange) {
      this.props.onChange(this.props.name, event.currentTarget.value);
    }
  },

  render() {
    return (
      <div>
        <input onChange={this.onchange} onKeyUp={this.onEnter} value={this.state.value} />
      </div>
    )
  }
});
