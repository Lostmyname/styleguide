'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Buttons } from './styleguide/buttons';

var App = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-lg-12">
            <Buttons />
          </div>
        </div>
      </div>
    );
  }
});

render(<App />, document.getElementById('root'));
