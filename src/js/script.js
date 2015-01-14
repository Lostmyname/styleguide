/*jshint -W079 */

'use strict';

var $ = window.$ = require('jquery');
var CodeMirror = window.CodeMirror = require('codemirror');

require('codemirror/mode/xml/xml');
require('codemirror/mode/htmlmixed/htmlmixed');

$(document).ready(function () {

  $.each($('.code-textarea'), function (i, el) {
    CodeMirror.fromTextArea(el, {
      lineNumbers: true,
      mode: 'text/html',
      matchBrackets: true,
      theme: 'ambiance'
    });
  });

});
