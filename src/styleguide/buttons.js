'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Button } from '../components/button';

export const Buttons = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Buttons</h1>
        <h2>Types</h2>
        <div className="sm-mar-b">
          <Button mode="raised">Default button</Button>
        </div>
        <div className="sm-mar-b">
          <Button type="alert" mode="raised">Alert button</Button>
        </div>
        <div className="sm-mar-b">
          <Button type="primary" mode="raised">Primary button</Button>
        </div>
      </div>
    );
  }
});
