'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Buttons } from './styleguide/buttons';

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Buttons />
      </div>
    );
  }
});

render(<App />, document.getElementById('root'));
