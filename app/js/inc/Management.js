class Management{

	constructor( idElement, idWrap ){

		// get element wrap
		this.wheelWrap = document.getElementById( idWrap );

		// get element
		this.wheel = document.getElementById( idElement );

		// position x
		this.posLeft = 0;

		// position y
		this.posTop = 0;

		// rect wrapper
		this.wheelWrapGBCR = this.wheelWrap.getBoundingClientRect();

		// rect wheel
		this.wheelGBCR = this.wheel.getBoundingClientRect();

		// center rect Wrap x
		this.centerRectWrapX = this.wheelWrapGBCR.width / 2;

		// center rect Wrap y
		this.centerRectWrapY = this.wheelWrapGBCR.height / 2;

		// confircation first drag
		this.keyFirstDrag = true;

		// key movement x
		this.keyMoveX = false;

		// key movement y
		this.keyMoveY = false;

		// back speed
		this.backSpeed = 5;

		// init
		this.init();

	}

	runWhell(){

		let _this = this;

		// mousedown
		this.wheel.onmousedown = function( event ){

			let wheelWrapGBCR = _this.wheelWrap.getBoundingClientRect();

			// ------------------------------
			let wheelGBCR = _this.wheel.getBoundingClientRect();

			// set wheel
			_this.wheelGBCR = wheelGBCR;
			
			_this.wheelWrap.onmousemove = function( event ){

				// pos left
				let posLeft = event.clientX - wheelWrapGBCR.left;				

				let minLeft = wheelGBCR.width / 2;

				let maxLeft = wheelWrapGBCR.width - ( wheelGBCR.width / 2 );

				if( posLeft <= minLeft ){

					posLeft = minLeft;

				} else if( posLeft >= maxLeft ){

					posLeft = maxLeft;

				}

				// pos top
				let posTop = event.clientY - wheelWrapGBCR.top;

				let minTop = wheelGBCR.height / 2;

				let maxBottom = wheelWrapGBCR.height - ( wheelGBCR.height / 2 );

				if( posTop <= minTop ){

					posTop = minTop;

				} else if( posTop >= maxBottom ){

					posTop = maxBottom;

				}

				_this.movementWhell( posLeft, posTop )

			}		

		}

		// mouseout
		document.onmouseup = function(){

			_this.wheelWrap.onmousemove = function(){

				return;

			}

			// run back function
			_this.keyMoveX = true;			
			_this.keyMoveY = true;

		}

	}

	// position wheel
	movementWhell( posLeft, posTop ){

		this.wheel.style.left = posLeft + 'px';

		this.wheel.style.top = posTop + 'px';

		// set pos left
		this.posLeft = posLeft;

		// set pos top
		this.posTop = posTop;


	}

	// back position
	backWheel(){

		if( this.keyFirstDrag === true ){

			this.posLeft = this.centerRectWrapX;

			this.posTop = this.centerRectWrapY;

			this.keyFirstDrag = false;

		}

		// x
		if( this.keyMoveX === true ){

			if( this.posLeft < this.centerRectWrapX - ( this.backSpeed ) ){

				this.posLeft += this.backSpeed;

			} else if( this.posLeft > this.centerRectWrapX + ( this.backSpeed ) ){

				this.posLeft -= this.backSpeed;

			} else{

				this.posLeft = this.centerRectWrapX;

				this.keyMoveX = false; 

			}

			this.movementWhell( this.posLeft, this.posTop );

		}

		// y
		if( this.keyMoveY === true ){

			if( this.posTop < this.centerRectWrapY - ( this.backSpeed ) ){

				this.posTop += this.backSpeed;

			} else if( this.posTop > this.centerRectWrapY + ( this.backSpeed ) ){

				this.posTop -= this.backSpeed;

			} else{

				this.posTop = this.centerRectWrapY;

				this.keyMoveY = false; 

			}

			this.movementWhell( this.posLeft, this.posTop );

		}

	}

	speedCanvasMovement(){

		// back
		this.backWheel();

		let _this = this;

		return {
			speedLeft: ( this.centerRectWrapX - _this.posLeft ) / 10,
			speedTop: ( this.centerRectWrapY - _this.posTop ) / 10
		}

	}

	// init
	init(){

		this.runWhell();

	}

}