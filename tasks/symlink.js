/*
 * grunt-symlink
 * https://github.com/doron2402/symlinks-task
 *
 * Copyright (c) 2015 Doron Segal
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var fs = require('fs');
  var path = require('path');

  grunt.registerMultiTask('symlink', 'Grunt task for generating symlinks on Mac and Linux', function() {
    if (this.data.links.length === 0) {
      grunt.fail.warn('links is an empty array');
    }

    // var options = this.options({
    //   overwrite: false,
    //   force: false
    // });

    // // overwrite options from CLI
    // options.overwrite = grunt.option('overwrite') || options.overwrite;

   this.data.links.forEach(function(link) {
    if (!link.src || !link.dst) {
      grunt.fail.warn('link need to have source and destination directory.');
    }
    grunt.log.writeln('Creating Symlink. '  + link.dst + ' -> ' + link.src);

    var type = link.type || 'dir';

    fs.symlink(link.src, link.dst, type, function (err) {
      if (err) {
        grunt.log.error(err.code === 'EEXIST' ? "Link already created!\n" : "Error\n");
        grunt.log.error(err);
      }
      grunt.log.ok('Done. Symlink ' + link.dst + ' -> ' + link.src);

    });

   });

  });
};
