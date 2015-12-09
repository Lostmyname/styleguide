'use strict'

import React from 'react';

export const Button = React.createClass({

  handleOnClick: function () {
    if(this.props.onClick) {
      this.props.onClick();
    }
  },

  render: function() {
    let className = 'button';
    className += ' button--'+this.props.mode;
    className += ' button--'+this.props.type;

    return (
      <div>
        <button className={className} onClick={this.handleOnClick}>
          {this.props.children}
        </button>
      </div>
    );
  }
});
