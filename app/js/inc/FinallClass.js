// 1
class FinallClass{

	constructor( id ){		

		// set canvas obj
		this.convas = document.getElementById( id );

		// set context
		this.ctx = this.convas.getContext( '2d' );

		// set width
		this._offsetWidth = 0;

		// set height
		this._offsetHeight = 0;

		console.log( 'init FinallClass' );

	}

	// set size canvas
	setSizeCanvas( _width, _height ){

		this.convas.width = _width;

		this.convas.height = _height;

		this.convas.style.border = '1px solid #333';

		// set size
		this._offsetWidth = this.convas.offsetWidth;

		this._offsetHeight = this.convas.offsetHeight;

	}

	// position canvas
	positionCanvas(){

		this.convas.style.marginLeft = '-' + this._offsetWidth / 2 + 'px';

		this.convas.style.marginTop = '-' + this._offsetHeight / 2 + 'px';

	}

	// draw elems
	drawElems(){

		let newInstanceDrawElement = new DrawElementInCanvas( this.ctx, 100, 200 );

	}

	// draw
	draw(){

		// set size canvas
		this.setSizeCanvas( 1000, 800 );

		// basic position the canvas
		this.positionCanvas();

		// draw
		this.drawElems();			

	}

}