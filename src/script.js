'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Buttons } from './styleguide/buttons';
import buttonDefinition from './components/button/definition';

var App = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-lg-12">
            <Buttons definition={buttonDefinition} />
          </div>
        </div>
      </div>
    );
  }
});

render(<App />, document.getElementById('root'));
