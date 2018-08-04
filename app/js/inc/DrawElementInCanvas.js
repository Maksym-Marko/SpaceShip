class DrawSpaceElements{

	constructor(  ctx, pos1, pos2 ){

		this.ctx = ctx;

		this.pos1 = pos1;

		this.pos2 = pos2;

		this.init();

	}

	createStar(){

		this.ctx.beginPath();
		
		this.ctx.arc( this.pos1, this.pos2, 10, 0, 2*Math.PI );

		this.ctx.fillStyle = 'green';

		this.ctx.fill();

	}

	init(){

		this.createStar();

	}

}