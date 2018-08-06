class FinallClass{

	/********************************
	* constructor
	*/
	constructor( idCanvas, wheel, wheelWrap, widthCanvas, heightCanvas ){

		// canvas element
		this.idCanvas 		= idCanvas;

		// wheel
		this.wheel 			= wheel;

		// wheel wrap
		this.wheelWrap 		= wheelWrap;

		// canvas size
		this.widthCanvas 	= widthCanvas;
		this.heightCanvas 	= heightCanvas;

		// declare variables
		this.declareVariables();

		/*
		* runs functions
		*/
		// set size canvas
		this.setSizeCanvas( this.widthCanvas, this.heightCanvas );		

	}

	/********************************
	* declare a variables
	* save a data
	*/
	declareVariables(){

		// get canvas obj
		this.canvas 		= document.getElementById( this.idCanvas );

		// set context
		this.ctx 			= this.canvas.getContext( '2d' );

		// use to the function getRandomStr()
		this.increment 		= 0;
		this.minLeft 		= 0;
		this.minTop 		= 0;
		this.maxLeft 		= this.widthCanvas;
		this.maxTop 		= this.heightCanvas;

		// star store
		this.objStars 		= {};

		// first star
		this.firstStar 		= 0;

		// number of stars
		this.countStars 	= 10;

		// position of canvas
		this.posCanvasLeft 	= 0;
		this.posCanvasTop 	= 0;

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
	// record a point in an object
	setObjStars( posLeft, posTop ){

		// get star coordinates
		let coords = this.getRandomStr( 0.1, posLeft, posTop );		
		
		if( coords !== null ) {

			// add star			
			let star = 'star' + this.firstStar;

			this.objStars[star] = {
				leftSpace: coords.leftSpace,
				topSpace: coords.topSpace
			}

			this.firstStar += 1;

			// delete star
			let objStarsLength = Object.keys( this.objStars ).length;

			let numberOfDelStar = 'star' + ( this.firstStar - this.countStars );

			if( objStarsLength >= this.countStars ){

				delete this.objStars[numberOfDelStar];
			}

		}

	}

	// function to create a star with a random position
	getRandomStr( speed, posLeft, posTop ) {		

		this.increment = this.increment + speed;

		// parameters for obtaining random numbers
		this.minLeft 	= parseInt( this.minLeft - posLeft );
		this.minTop 	= parseInt( this.minTop - posTop );

		this.maxLeft 	= parseInt( this.maxLeft - posLeft );
		this.maxTop 	= parseInt( this.maxTop - posTop );

		// interval
		if( this.increment >= 10 ){

			let leftSpace = Math.floor( Math.random() * ( this.maxLeft - this.minLeft + 1 ) ) + this.minLeft;

			let topSpace = Math.floor( Math.random() * ( this.maxTop - this.minTop + 1 ) ) + this.minTop;

			this.increment = 0;

			return {
				leftSpace: leftSpace,
				topSpace: topSpace
			}		

		}

		return null;
		
	}

	/********************************
	* create ship
	*/	

	// set size canvas
	setSizeCanvas( _width, _height ){

		this.canvas.width 		= _width;

		this.canvas.height 		= _height;

	}
	
	/********************************
	* movement space (canvas)
	*/
	movementSpace( _left, _top  ){

		// this
		let _this = this;

		this.posCanvasLeft = parseInt( this.posCanvasLeft + _left );

		this.posCanvasTop = parseInt( this.posCanvasTop + _top );

		// clear the context
		this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );

		eachObjProps( this.objStars, function(){

			new DrawSpaceElements( _this.ctx, this.leftSpace + _this.posCanvasLeft, this.topSpace + _this.posCanvasTop );

		} );		

	}

}