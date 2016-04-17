/*
* www.flandill.net
* movements.js: controls the movements of things on screen.
*/

var slug = function(count, period) {
	if(count === undefined) { count = 3; }
	if(period === undefined) { period = 3; }
	return function (comp) {
		comp.specs.slugCount++;
		var amplitude = 7;
		var y = Math.sin( (comp.specs.slugCount/comp.specs.slugLength*2*Math.PI)+Math.PI ) * amplitude;
		comp.h = comp.specs.height+y;
	};
};

