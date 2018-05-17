'use strict';

// loop
var reqAnimationFrame = function () {

	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {

		setTimeout(callback, 1000 / 60);
	};

	//return function( callback ){ setTimeout( callback, 1000 ); };
}();

var newInstance = new FinallClass('SpaceFly');

// init management
var newInstanceManegement = new Management('wheel', 'wheelWrap');

function run() {

	// draw canvas and elems
	newInstance.draw();

	// return speed movement canvas
	var speed = newInstanceManegement.speedCanvasMovement();
	console.log(speed);

	reqAnimationFrame(run);
}

run();