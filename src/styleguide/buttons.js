'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Button, TextInput, Select } from '../components';
import buttonDefinition from '../components/button/definition';
import { getDefaults, getOptions } from '../utils/definitions';

export const Buttons = React.createClass({
  onOptionChange: function (name, value) {
    var newState = {};
    newState[name] = value;
    this.setState(newState);
  },

  getDefaultProps: function () {
   return getOptions(buttonDefinition);
  },

  getInitialState: function () {
    return getDefaults(buttonDefinition);
  },

  render: function() {
    return (
      <div>
        <section className="row md-pad color-bg-white">
          <h1 className="md-mar-b">Button</h1>
          <hr className="md-mar-b" />
          <h3 className="h6">Options</h3>
          <div className="row md-mar-b">
            <div className="col col-lg-4">
              <TextInput name="text" onChange={this.onOptionChange} value={this.state.text} />
            </div>
            <div className="col col-lg-4">
              <Select name="type" options={this.props.type} onChange={this.onOptionChange} value={this.props.type} />
            </div>
            <div className="col col-lg-4">
              <Select name="buttonStyle" options={this.props.buttonStyle} onChange={this.onOptionChange} value={this.props.buttonStyle} />
            </div>
          </div>
        </section>
        <section className="row md-pad">
          <div className="sm-mar-b">
            <Button text={this.state.text} type={this.state.type} buttonStyle={this.state.buttonStyle} />
          </div>
        </section>
      </div>
    );
  }
});
