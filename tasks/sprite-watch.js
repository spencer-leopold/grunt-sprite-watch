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
    var options = this.options();
    var logger = grunt.log;
    logger.log = logger.writeln; // alias grunt's .write to .log
    options.logger = logger;

    var sprites = spritegenSheets(options);
    sprites.start().then(done);
  });
};
