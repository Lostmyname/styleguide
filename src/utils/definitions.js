'use strict'

import React from 'react';

export const getDefaults = function (definitionObj) {
  let defaults = {};
  definitionObj.propTypes.forEach(function (propType) {
    defaults[propType.propName] = (Array.isArray(propType.value)) ? propType.value[0] : propType.value;
  });
  return defaults;
}

export const getOptions = function (definitionObj) {
  let options = {};
  definitionObj.propTypes.forEach(function (propType) {
    if (Array.isArray(propType.value)) {
      options[propType.propName] = propType.value;
    }
  });
  return options;
}

export const getPropTypes = function (definitionObj) {
  let propTypes = {};
  definitionObj.propTypes.forEach(function (propType) {
    let val;

    if(propType.type === 'oneOf') {
      val = React.PropTypes.oneOf(propType.value);
    } else {
      val = React.PropTypes[propType.type];
    }

    propTypes[propType.propName] = val;
  });
  return propTypes;
}

