/*
 * grunt-sprite-watch
 * 
 *
 * Copyright (c) 2015 Spencer Leopold <spencer.leopold@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

var spriteWatch = require('sprite-watch');

module.exports = function(grunt) {
  grunt.registerMultiTask('sprite_watch', 'Use sprite-watch with grunt.', function() {

    var self = this;
    var _ = grunt.util._;
    var done = _.once(self.async());

    var options = this.options({
      padding: 0,
      algorithm: 'top-down',
      engine: 'pixelsmith',
      sheetOutput: 'css',
      sheetFormat: 'css',
      sheetTemplate: true,
      watch: false
    });

    var sprites = spriteWatch(options);
    sprites.start().then(function() {
      if (!options.watch) {
        done();
      }
    });
  });
};
