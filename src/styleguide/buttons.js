'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Button, TextInput, Select } from '../components';
import buttonDefinition from '../components/button/definition';

export const Buttons = React.createClass({
  onTextChange: function (value) {
    this.setState({
      text: value
    });
  },

  onTypeChange: function (value) {
    this.setState({
      type: value
    });
  },

  onButtonStyleChange: function (value) {
    this.setState({
      mode: value
    });
  },

  getDefaultProps: function () {
    return {
      buttonStyle: buttonDefinition.propTypes[1].value,
      types: buttonDefinition.propTypes[2].value
    };
  },

  getInitialState: function () {
    return {
      text: 'this is a button',
      buttonStyle: this.props.buttonStyle[0],
      type: this.props.types[0]
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
            <Select options={this.props.types} onChange={this.onTypeChange} value={this.props.type} />
          </div>
          <div className="col col-lg-4">
            <Select options={this.props.buttonStyle} onChange={this.onButtonStyleChange} value='{this.props.buttonStyle}' />
          </div>
        </div>
        <div className="sm-mar-b">
          <Button text={this.state.text} type={this.state.type} mode={this.state.buttonStyle} />
        </div>
      </div>
    );
  }
});
