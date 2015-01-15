/*jshint -W079 */

'use strict';

var $ = window.$ = require('jquery');
var CodeMirror = window.CodeMirror = require('codemirror');
require('codemirror/mode/xml/xml');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/javascript/javascript');
require('../../node_modules/lmn.jester.component.swiper/src/js/jester.component.swiper');
var Video = require('../../node_modules/lmn.jester.component.video/src/js/jester.component.video');
var Collapsible = require('../../node_modules/lmn.jester.component.collapsible/src/js/jester.component.collapsible');

$(document).ready(function () {

  $.each($('.code-textarea'), function (i, el) {
    var $el = $(el);
    var cm = CodeMirror.fromTextArea(el, {
      lineNumbers: true,
      mode: $el.attr('data-mode') || 'text/html',
      matchBrackets: true,
      theme: 'ambiance'
    });

    var height = $el.attr('data-height');
    if (height) {
      $(cm.display.wrapper).height(height);
    }
  });

  var $video = $('#video');
  if ($video.length > 0) {
    this.video = new Video('video');
  }

  $.each($('.collapsible'), function (i, el) {
    var $el = $(el);
    this.collapsible = new Collapsible(el);
  });

});
