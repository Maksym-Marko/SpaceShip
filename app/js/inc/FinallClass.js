class FinallClass{

	/********************************
	* constructor
	*/
	constructor( idCanvas, wheel, wheelWrap ){		

		// get canvas obj
		this.canvas 	= document.getElementById( idCanvas );

		// set context
		this.ctx 		= this.canvas.getContext( '2d' );

		// wheel
		this.wheel 		= wheel;

		// wheel wrap
		this.wheelWrap = wheelWrap;

		// set size canvas
		this.setSizeCanvas( 500, 350 );

		this.declareVariables();

	}

	/********************************
	* declare a variables
	* save a data
	*/
	declareVariables(){

		// todo
		this.posElLeft = 1;

		this.posElTop = 1;

		// 
		this.increment = 0;

		//
		this.numberStar = 0;

	}

	/********************************
	* management
	*/
	managementWheel(){

		return new Management( this.wheel, this.wheelWrap );

	}

	/********************************
	* create stars
	*/

	/********************************
	* create ship
	*/

	/********************************
	* movement space (canvas)
	*/

	// set size canvas
	setSizeCanvas( _width, _height ){

		this.canvas.width = _width;

		this.canvas.height = _height;

		this.canvas.style.border = '1px solid #333';

	}

	// draw elems
	drawElement( intensitLeft, intensitTop ){

		let objStars = {};

		// get coordinates
		let coords = this.getRandomStr( 0.1, 1, 100 );

		if( coords !== null ) {

			console.log( coords );
			//objStars.star+[this.numberStar] = new DrawSpaceElements( this.ctx, coords.leftSpace, coords.topSpace );

		}

		return objStars;	

	}

	drawElems( intensitLeft, intensitTop ){

		// clear the context
		this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
		
		this.drawElement( intensitLeft, intensitTop );

	}

	getRandomStr( speed, min, max ) {		

		this.increment = this.increment + speed;

		if( this.increment >= 10 ){

			let leftSpace = Math.floor(Math.random() * (max - min + 1)) + min;
			let topSpace = Math.floor(Math.random() * (max - min + 1)) + min;

			this.increment = 0;

			return {
				leftSpace: leftSpace,
				topSpace: topSpace
			}		

		}

		return null;
		
	} 

}