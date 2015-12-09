'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Button, TextInput } from '../components';

export const Buttons = React.createClass({
  onTextChange: function (value) {
    this.setState({
      text: value
    });
  },

  onEnter: function (value) {
    this.setState({
      type: value
    });
  },

  getInitialState: function () {
    return {
      text: 'this is a button',
      type: 'alert'
    };
  },

  render: function() {
    return (
      <div>
        <h1>Buttons</h1>
        <h2>Example</h2>
        <div className="row md-mar-b">
          <div className="col col-lg-4">
            <TextInput onChange={this.onTextChange} value={this.state.text} />
          </div>
          <div className="col col-lg-4">
            <TextInput onEnter={this.onEnter} value="alert" />
          </div>
        </div>
        <div className="sm-mar-b">
          <Button text={this.state.text} type={this.state.type} mode="raised" />
        </div>
      </div>
    );
  }
});
