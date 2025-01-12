/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution entropy.
*
* @module @stdlib/stats-base-dists-discrete-uniform-entropy
*
* @example
* var entropy = require( '@stdlib/stats-base-dists-discrete-uniform-entropy' );
*
* var v = entropy( 0, 1 );
* // returns ~0.693
*
* v = entropy( 4, 12 );
* // returns ~2.197
*
* v = entropy( 2, 8 );
* // returns ~1.946
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
