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

	// return function( callback ){ setTimeout( callback, 1000 ); };

} )();

let newInstance = new FinallClass( 'SpaceFly', 'mxScreen' );

// init management
let newInstanceManegement = new Management( 'wheel', 'wheelWrap' );

function run(){

	// draw canvas and elems
	newInstance.draw();

	// return speed movement canvas
	let speed = newInstanceManegement.speedCanvasMovement();
	//console.log( speed );

	// basic position the canvas
	newInstance.positionCanvas( speed.speedLeft, speed.speedTop );

	reqAnimationFrame( run );

}

run();