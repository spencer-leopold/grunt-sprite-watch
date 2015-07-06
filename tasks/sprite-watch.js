/*
 * grunt-spritegen-sheets
 * 
 *
 * Copyright (c) 2015 Spencer Leopold <spencer.leopold@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

var spritegenSheets = require('spritegen-sheets');

module.exports = function(grunt) {
  grunt.registerMultiTask('spritegen_sheets', 'Use spritegen-sheets with grunt.', function() {

    var self = this;
    var _ = grunt.util._;
    var done = _.once(self.async());

    var options = this.options({
      padding: 25,
      algorithm: 'top-down',
      engine: 'pixelsmith',
      sheetOutput: 'css',
      sheetFormat: 'css',
      sheetTemplate: true,
      watch: false
    });

    var sprites = spritegenSheets(options);
    sprites.start().then(function() {
      if (!options.watch) {
        done();
      }
    });
  });
};
