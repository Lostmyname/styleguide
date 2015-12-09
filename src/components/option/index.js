'use strict'

import React from 'react';

export const Option = React.createClass({
  render: function () {
    return (
      <option value={this.props.value}>{this.props.children}</option>
    )
  }
});
