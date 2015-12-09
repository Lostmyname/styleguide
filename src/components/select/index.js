'use strict'

import React from 'react';
import { Option } from '../option';

export const Select = React.createClass({
  // propTypes: {
  //   value: React.PropTypes.string
  // },

  // getInitialState: function () {
  //   return {
  //     value: this.props.value
  //   };
  // },

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
