'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Button } from '../components';

export const Buttons = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Buttons</h1>
        <h2>Types</h2>
        <div className="sm-mar-b">
          <Button text="Default button" mode="raised" />
        </div>
        <div className="sm-mar-b">
          <Button text="Alert button" type="alert" mode="raised" />
        </div>
        <div className="sm-mar-b">
          <Button text="Primary button" type="primary" mode="raised" />
        </div>
      </div>
    );
  }
});
