class DrawShip{

	constructor( ctx, posLeft, posTop, biasLeft, biasTop ){

		// context
		this.ctx 			= ctx;			

		// size
		this.shipWidth 		= 50;
		this.shipHeight 	= 20;

		// positions
		this.posLeft 		= posLeft - ( this.shipWidth / 2 );
		this.posTop 		= posTop - ( this.shipHeight / 2 );

		// bias
		this.biasLeft 		= biasLeft;
		this.biasTop 		= biasTop;

		// init
		this.init();

	}

	createShip(){

		let posShipLeft 	= 4 * ( 0.01 - this.biasLeft );
		let posShipTop 		= 4 * ( 0.01 - this.biasTop );

		this.ctx.beginPath();
		
		this.ctx.rect( this.posLeft + posShipLeft, this.posTop + posShipTop, this.shipWidth, this.shipHeight );

		this.ctx.fillStyle = 'black';

		this.ctx.fill();

	}

	init(){

		this.createShip();

	}

}