'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Management = function () {
		function Management(idElement, idWrap) {
				_classCallCheck(this, Management);

				// get element wrap
				this.wheelWrap = document.getElementById(idWrap);

				// get element
				this.wheel = document.getElementById(idElement);

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

		_createClass(Management, [{
				key: 'runWhell',
				value: function runWhell() {

						var _this = this;

						// mousedown
						this.wheel.onmousedown = function (event) {

								var wheelWrapGBCR = _this.wheelWrap.getBoundingClientRect();

								// ------------------------------
								var wheelGBCR = _this.wheel.getBoundingClientRect();

								// set wheel
								_this.wheelGBCR = wheelGBCR;

								_this.wheelWrap.onmousemove = function (event) {

										// pos left
										var posLeft = event.clientX - wheelWrapGBCR.left;

										var minLeft = wheelGBCR.width / 2;

										var maxLeft = wheelWrapGBCR.width - wheelGBCR.width / 2;

										if (posLeft <= minLeft) {

												posLeft = minLeft;
										} else if (posLeft >= maxLeft) {

												posLeft = maxLeft;
										}

										// pos top
										var posTop = event.clientY - wheelWrapGBCR.top;

										var minTop = wheelGBCR.height / 2;

										var maxBottom = wheelWrapGBCR.height - wheelGBCR.height / 2;

										if (posTop <= minTop) {

												posTop = minTop;
										} else if (posTop >= maxBottom) {

												posTop = maxBottom;
										}

										_this.movementWhell(posLeft, posTop);
								};
						};

						// mouseout
						document.onmouseup = function () {

								_this.wheelWrap.onmousemove = function () {

										return;
								};

								// run back function
								_this.keyMoveX = true;
								_this.keyMoveY = true;
						};
				}

				// position wheel

		}, {
				key: 'movementWhell',
				value: function movementWhell(posLeft, posTop) {

						this.wheel.style.left = posLeft + 'px';

						this.wheel.style.top = posTop + 'px';

						// set pos left
						this.posLeft = posLeft;

						// set pos top
						this.posTop = posTop;
				}

				// back position

		}, {
				key: 'backWheel',
				value: function backWheel() {

						if (this.keyFirstDrag === true) {

								this.posLeft = this.centerRectWrapX;

								this.posTop = this.centerRectWrapY;

								this.keyFirstDrag = false;
						}

						// x
						if (this.keyMoveX === true) {

								if (this.posLeft < this.centerRectWrapX - this.backSpeed) {

										this.posLeft += this.backSpeed;
								} else if (this.posLeft > this.centerRectWrapX + this.backSpeed) {

										this.posLeft -= this.backSpeed;
								} else {

										this.posLeft = this.centerRectWrapX;

										this.keyMoveX = false;
								}

								this.movementWhell(this.posLeft, this.posTop);
						}

						// y
						if (this.keyMoveY === true) {

								if (this.posTop < this.centerRectWrapY - this.backSpeed) {

										this.posTop += this.backSpeed;
								} else if (this.posTop > this.centerRectWrapY + this.backSpeed) {

										this.posTop -= this.backSpeed;
								} else {

										this.posTop = this.centerRectWrapY;

										this.keyMoveY = false;
								}

								this.movementWhell(this.posLeft, this.posTop);
						}
				}
		}, {
				key: 'speedCanvasMovement',
				value: function speedCanvasMovement() {

						// back
						this.backWheel();

						var _this = this;

						return {
								speedLeft: (this.centerRectWrapX - _this.posLeft) / 10,
								speedTop: (this.centerRectWrapY - _this.posTop) / 10
						};
				}

				// init

		}, {
				key: 'init',
				value: function init() {

						this.runWhell();
				}
		}]);

		return Management;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrawElementInCanvas = function () {
		function DrawElementInCanvas(ctx, pos1, pos2) {
				_classCallCheck(this, DrawElementInCanvas);

				this.ctx = ctx;

				this.pos1 = pos1;

				this.pos2 = pos2;

				this.init();
		}

		_createClass(DrawElementInCanvas, [{
				key: 'createElement',
				value: function createElement() {

						this.ctx.beginPath();

						this.ctx.arc(this.pos1, this.pos2, 50, 0, 2 * Math.PI);

						this.ctx.fillStyle = 'green';

						this.ctx.fill();
				}
		}, {
				key: 'init',
				value: function init() {

						this.createElement();
				}
		}]);

		return DrawElementInCanvas;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FinallClass = function () {
		function FinallClass(idCanvas, idWindow) {
				_classCallCheck(this, FinallClass);

				// get canvas obj
				this.canvas = document.getElementById(idCanvas);

				// set context
				this.ctx = this.canvas.getContext('2d');

				// set width
				this._offsetWidthCanvas = 0;

				// set height
				this._offsetHeightCanvas = 0;

				// set size canvas
				this.setSizeCanvas(2000, 1500);

				// get window ship
				this.windowShip = document.getElementById(idWindow);

				this.setSizeWindowShip();
		}

		// set size canvas


		_createClass(FinallClass, [{
				key: 'setSizeCanvas',
				value: function setSizeCanvas(_width, _height) {

						this.canvas.width = _width;

						this.canvas.height = _height;

						this.canvas.style.border = '1px solid #333';

						// set size
						this._offsetWidthCanvas = this.canvas.offsetWidth;

						this._offsetHeightCanvas = this.canvas.offsetHeight;

						// margin left
						this._marginLeft = -this._offsetWidthCanvas / 2;

						// margin top
						this._marginTop = -this._offsetHeightCanvas / 2;
				}
		}, {
				key: 'setSizeWindowShip',
				value: function setSizeWindowShip() {

						// set size
						this._offsetWidthWindowShip = this.windowShip.offsetWidth;

						this._offsetHeightWindowShip = this.windowShip.offsetHeight;
				}

				// position canvas

		}, {
				key: 'positionCanvas',
				value: function positionCanvas(intensitLeft, intensitTop) {

						this._marginLeft = parseInt(this._marginLeft + intensitLeft);

						this._marginTop = parseInt(this._marginTop + intensitTop);

						// limitation left
						if (this._marginLeft >= -this._offsetWidthWindowShip / 2) {

								this._marginLeft = -this._offsetWidthWindowShip / 2;
						} else if (this._marginLeft <= -(this._offsetWidthCanvas - this._offsetWidthWindowShip / 2)) {

								this._marginLeft = -(this._offsetWidthCanvas - this._offsetWidthWindowShip / 2);
						}

						// limitation top
						if (this._marginTop >= -this._offsetHeightWindowShip / 2) {

								this._marginTop = -this._offsetHeightWindowShip / 2;
						} else if (this._marginTop <= -(this._offsetHeightCanvas - this._offsetHeightWindowShip / 2)) {

								this._marginTop = -(this._offsetHeightCanvas - this._offsetHeightWindowShip / 2);
						}
						// console.log( this._marginTop );


						this.canvas.style.marginLeft = this._marginLeft + 'px';

						this.canvas.style.marginTop = this._marginTop + 'px';
				}

				// draw elems

		}, {
				key: 'drawElems',
				value: function drawElems() {

						var newInstanceDrawElement = new DrawElementInCanvas(this.ctx, 100, 200);

						var newInstanceDrawElement2 = new DrawElementInCanvas(this.ctx, 350, 580);

						var newInstanceDrawElement3 = new DrawElementInCanvas(this.ctx, 950, 780);

						var newInstanceDrawElement4 = new DrawElementInCanvas(this.ctx, 950, 80);

						var newInstanceDrawElement5 = new DrawElementInCanvas(this.ctx, 550, 480);

						var newInstanceDrawElement6 = new DrawElementInCanvas(this.ctx, 850, 380);

						var newInstanceDrawElement7 = new DrawElementInCanvas(this.ctx, 550, 20);

						var newInstanceDrawElement8 = new DrawElementInCanvas(this.ctx, 1700, 350);

						var newInstanceDrawElement9 = new DrawElementInCanvas(this.ctx, 1680, 50);

						var newInstanceDrawElement10 = new DrawElementInCanvas(this.ctx, 1580, 750);

						var newInstanceDrawElement11 = new DrawElementInCanvas(this.ctx, 1480, 1200);

						var newInstanceDrawElement12 = new DrawElementInCanvas(this.ctx, 1180, 1300);

						var newInstanceDrawElement13 = new DrawElementInCanvas(this.ctx, 300, 1200);
				}

				// draw

		}, {
				key: 'draw',
				value: function draw() {

						// draw
						this.drawElems();
				}
		}]);

		return FinallClass;
}();
'use strict';

// loop 
var reqAnimationFrame = function () {

	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {

		setTimeout(callback, 1000 / 60);
	};

	// return function( callback ){ setTimeout( callback, 1000 ); };
}();

var newInstance = new FinallClass('SpaceFly', 'mxScreen');

// init management
var newInstanceManegement = new Management('wheel', 'wheelWrap');

function run() {

	// draw canvas and elems
	newInstance.draw();

	// return speed movement canvas
	var speed = newInstanceManegement.speedCanvasMovement();
	//console.log( speed );

	// basic position the canvas
	newInstance.positionCanvas(speed.speedLeft, speed.speedTop);

	reqAnimationFrame(run);
}

run();