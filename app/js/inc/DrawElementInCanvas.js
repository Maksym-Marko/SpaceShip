class DrawSpaceElements{

	constructor(  ctx, posLeft, posTop ){

		this.ctx = ctx;

		this.posLeft = posLeft;

		this.posTop = posTop;

		this.init();

	}

	createStar(){

		this.ctx.beginPath();
		
		this.ctx.arc( this.posLeft, this.posTop, 10, 0, 2*Math.PI );

		this.ctx.fillStyle = 'green';

		this.ctx.fill();

	}

	static createObjStar( coords, firstStar, objStars, countStars ){

		// add star
		let star = 'star' + firstStar;

		objStars[star] = {
			leftSpace: coords.leftSpace,
			topSpace: coords.topSpace
		}

		firstStar += 1;

		// delete star
		let objStarsLength = Object.keys( objStars ).length;

		let numberOfDelStar = 'star' + ( firstStar - countStars );

		if( objStarsLength >= countStars ){

			delete objStars[numberOfDelStar];
		}

		return{
			firstStar: firstStar,
			objStars: objStars
		}

	}

	init(){

		this.createStar();

	}

}