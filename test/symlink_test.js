'use strict';

var grunt = require('grunt');
var fs = require('fs');
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.symlink = {
  symlink_options: function(test) {
    console.log(__dirname);
    var src_file = grunt.file.read('test/src_dir/app/index.js');
    var dst_file = grunt.file.read('test/src_dir/node_modules/app.js');
    test.equal(src_file, dst_file, 'should be same text');
    test.done();
  },
  symlink_options_dir: function(test) {
    try {
        // Query the entry
        var stats = fs.lstatSync('test/src_dir/node_modules/app');
        test.equal(stats, true, 'symlink directoy created.');
    }
    catch (e) {
      test.ifError(e);
    }
    test.done();
  },
};
