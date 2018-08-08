// loop 
let reqAnimationFrame = ( function(){

	return window.requestAnimationFrame
        || 	window.webkitRequestAnimationFrame
        || 	window.mozRequestAnimationFrame
        || 	window.oRequestAnimationFrame
        || 	window.msRequestAnimationFrame
        || 	function( callback ){

        	setTimeout( callback, 1000 / 60 );

        };

	//return function( callback ){ setTimeout( callback, 500 ); };

} )();

/*
* final class
* variables:
* 1 - canvas element
* 2 - wheel
* 3 - wheel wrap
*/ 
let newInstance 		= new FinallClass( 'SpaceShip', 'wheel', 'wheelWrap', 500, 350 );

// init management
let instanceManegement 	= newInstance.managementWheel();

// runs function
function run(){

	// return speed movement canvas
	let speed 			= instanceManegement.speedCanvasMovement();

	// clean canvas rect
	newInstance.cleanCanvas();

	// movement space
	newInstance.movementSpace( speed.speedLeft, speed.speedTop );

	reqAnimationFrame( run );

}

run();