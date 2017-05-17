/*
This file tells the Mocha tests what build of Cytoscape to use.
*/

var process = require('process');
var env = process.env;

// For Travis or manual build tests, use the CJS build
// NB : Must do `gulp build-cjs` before `mocha` or `gulp-test`
if( env.TRAVIS || env.TEST_BUILD ){
  module.exports = require('../build/cytoscape.cjs.js');

// Otherwise use the unbundled, unbabelified, raw source
// NB : Must use a version of Node that natively supports all JS features used in the lib
} else {
  module.exports = require('./index.js');
}
