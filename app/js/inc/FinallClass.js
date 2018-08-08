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

	// set size canvas
	setSizeCanvas( _width, _height ){

		this.canvas.width 		= _width;

		this.canvas.height 		= _height;

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

		// intensity of star creation
		this.increment 		= 0;
		this.intensity 		= 5;

		// star store
		this.objStars 		= {};

		// coordinates of star
		this.coordsStar 	= {};

		// space between
		this.spaceBetween 	= 40;

		// first star
		this.firstStar 		= 0;

		// number of stars
		this.countStars 	= 10;

		// position of ship
		this.posShipLeft 	= this.widthCanvas / 2;
		this.posShipTop 	= this.heightCanvas / 2;

	}

	/********************************
	* management
	*/
	managementWheel(){

		return new Management( this.wheel, this.wheelWrap );

	}

	/********************************
	* create star obj
	*/
	// record a point in an object
	setObjStars( posLeft, posTop ){

		// increase count
		this.increment = this.increment + 0.1;

		// interval
		if( this.increment >= this.intensity ){

			// set coords
			this.coordsStar.leftSpace 	= getRandomStr( this.spaceBetween, this.widthCanvas - this.spaceBetween );
			this.coordsStar.topSpace 	= getRandomStr( this.spaceBetween, this.heightCanvas - this.spaceBetween );
			
			let _createObjStar 			= DrawSpaceElements.createObjStar( this.coordsStar, this.firstStar, this.objStars, this.countStars );

			// save data
			this.firstStar 				= _createObjStar.firstStar;
			this.objStars 				= _createObjStar.objStars;
			this.increment 				= 0;

		}

	}	

	/********************************
	* create ship
	*/
	createShip( biasLeft, biasTop ){		

		return new DrawShip( this.ctx, this.posShipLeft, this.posShipTop, biasLeft, biasTop );

	}
	
	
	/********************************
	* movement space (canvas)
	*/
	movementSpace( _left, _top  ){

		// this
		let _this = this;

		// create a star coordinate object
		this.setObjStars( _left, _top );		

		// create stars
		eachObjProps( this.objStars, function(){

			this.leftSpace 	= this.leftSpace + _left;

			this.topSpace 	= this.topSpace + _top;

			new DrawSpaceElements( _this.ctx, this.leftSpace, this.topSpace );

		} );

		// create ship
		this.createShip( _left, _top );

	}

	// clean the canvas
	cleanCanvas(){

		this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );

	}

}