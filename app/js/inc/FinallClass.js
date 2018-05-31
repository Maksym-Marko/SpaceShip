class FinallClass{

	constructor( idCanvas, idWindow ){		

		// get canvas obj
		this.canvas = document.getElementById( idCanvas );

		// set context
		this.ctx = this.canvas.getContext( '2d' );

		// set width
		this._offsetWidthCanvas = 0;

		// set height
		this._offsetHeightCanvas = 0;		

		// set size canvas
		this.setSizeCanvas( 2000, 1500 );

		// get window ship
		this.windowShip = document.getElementById( idWindow );

		this.setSizeWindowShip();

	}

	// set size canvas
	setSizeCanvas( _width, _height ){

		this.canvas.width = _width;

		this.canvas.height = _height;

		this.canvas.style.border = '1px solid #333';

		// set size
		this._offsetWidthCanvas = this.canvas.offsetWidth;

		this._offsetHeightCanvas = this.canvas.offsetHeight;

		// margin left
		this._marginLeft = -this._offsetWidthCanvas  / 2 ;

		// margin top
		this._marginTop = -this._offsetHeightCanvas / 2;

	}

	setSizeWindowShip(){

		// set size
		this._offsetWidthWindowShip = this.windowShip.offsetWidth;

		this._offsetHeightWindowShip = this.windowShip.offsetHeight;

	}

	// position canvas
	positionCanvas( intensitLeft, intensitTop ){

		this._marginLeft = parseInt( this._marginLeft + intensitLeft );

		this._marginTop = parseInt( this._marginTop + intensitTop );

		// limitation left
		if( this._marginLeft >= -this._offsetWidthWindowShip / 2 ){

			this._marginLeft = -this._offsetWidthWindowShip / 2;

		} else if( this._marginLeft <= -( this._offsetWidthCanvas - ( this._offsetWidthWindowShip / 2 ) ) ){

			this._marginLeft = -( this._offsetWidthCanvas - ( this._offsetWidthWindowShip / 2 ) );

		}

		// limitation top
		if( this._marginTop >= -this._offsetHeightWindowShip / 2 ){

			this._marginTop = -this._offsetHeightWindowShip / 2;

		} else if( this._marginTop <= -( this._offsetHeightCanvas - ( this._offsetHeightWindowShip / 2 ) ) ){

			this._marginTop = -( this._offsetHeightCanvas - ( this._offsetHeightWindowShip / 2 ) );

		}
		// console.log( this._marginTop );
		

		this.canvas.style.marginLeft = this._marginLeft + 'px';

		this.canvas.style.marginTop = this._marginTop + 'px';

	}

	// draw elems
	drawElems(){

		let newInstanceDrawElement = new DrawElementInCanvas( this.ctx, 100, 200 );

		let newInstanceDrawElement2 = new DrawElementInCanvas( this.ctx, 350, 580 );

		let newInstanceDrawElement3 = new DrawElementInCanvas( this.ctx, 950, 780 );

		let newInstanceDrawElement4 = new DrawElementInCanvas( this.ctx, 950, 80 );

		let newInstanceDrawElement5 = new DrawElementInCanvas( this.ctx, 550, 480 );

		let newInstanceDrawElement6 = new DrawElementInCanvas( this.ctx, 850, 380 );

		let newInstanceDrawElement7 = new DrawElementInCanvas( this.ctx, 550, 20 );

		let newInstanceDrawElement8 = new DrawElementInCanvas( this.ctx, 1700, 350 );

		let newInstanceDrawElement9 = new DrawElementInCanvas( this.ctx, 1680, 50 );

		let newInstanceDrawElement10 = new DrawElementInCanvas( this.ctx, 1580, 750 );

		let newInstanceDrawElement11 = new DrawElementInCanvas( this.ctx, 1480, 1200 );

		let newInstanceDrawElement12 = new DrawElementInCanvas( this.ctx, 1180, 1300 );

		let newInstanceDrawElement13 = new DrawElementInCanvas( this.ctx, 300, 1200 );

	}

	// draw
	draw(){				

		// draw
		this.drawElems();			

	}

}