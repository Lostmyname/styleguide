'use strict'

import React from 'react';
import { Option } from '../option';

export const Select = React.createClass({
  onChange: function (event) {
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value);
    }
  },

  render: function () {
    var options = this.props.options.map((item, index) => {
      return <Option value={item} key={index}>{item}</Option>
    });

    return (
      <select onChange={this.onChange}>
       {options}
      </select>
    );
  }
});
