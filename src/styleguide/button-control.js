'use strict'

import React from 'react';
import { render } from 'react-dom';

export const Control = React.createClass({
  handleOnTextChange: function () {
    this.state.text = 
    this.props.onChange(this.state);
  },

  render: function () {
    // var items = this.state.items.map((item, index) => {
    //   return <Item text={item.text} completed={item.completed} />
    // });

    return (
      <div className="row">
        <div className="col col-lg-12">
          <TextInput onChange={this.handleOnChange} />
        </div>
      </div>
    );
  }
});
