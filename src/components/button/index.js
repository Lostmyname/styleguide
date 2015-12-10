'use strict'

import React from 'react';
import buttonDefinition from './definition';
import { getPropTypes } from '../../utils/definitions';

export const Button = React.createClass({

  propTypes: getPropTypes(buttonDefinition),

  handleOnClick: function () {
    if(this.props.onClick) {
      this.props.onClick();
    }
  },

  render: function() {
    let className = 'button';
    className += ' button--'+this.props.buttonStyle;
    className += ' button--'+this.props.type;

    return (
      <div>
        <button className={className} onClick={this.handleOnClick}>
          {this.props.text}
        </button>
      </div>
    );
  }
});

window.Button = Button;
