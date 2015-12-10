'use strict'

export const getDefaults = function (definitionObj) {
  var defaults = {};
  definitionObj.propTypes.forEach(function (propType) {
    defaults[propType.propName] = (Array.isArray(propType.value)) ? propType.value[0] : propType.value;
  });
  return defaults;
}

export const getOptions = function (definitionObj) {
  var options = {};
  definitionObj.propTypes.forEach(function (propType) {
    if (Array.isArray(propType.value)) {
      options[propType.propName] = propType.value;
    }
  });
  return options;
}