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

var DrawSpaceElements = function () {
		function DrawSpaceElements(ctx, pos1, pos2) {
				_classCallCheck(this, DrawSpaceElements);

				this.ctx = ctx;

				this.pos1 = pos1;

				this.pos2 = pos2;

				this.init();
		}

		_createClass(DrawSpaceElements, [{
				key: 'createStar',
				value: function createStar() {

						this.ctx.beginPath();

						this.ctx.arc(this.pos1, this.pos2, 10, 0, 2 * Math.PI);

						this.ctx.fillStyle = 'green';

						this.ctx.fill();
				}
		}, {
				key: 'init',
				value: function init() {

						this.createStar();
				}
		}]);

		return DrawSpaceElements;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FinallClass = function () {

		/********************************
  * constructor
  */
		function FinallClass(idCanvas, wheel, wheelWrap) {
				_classCallCheck(this, FinallClass);

				// get canvas obj
				this.canvas = document.getElementById(idCanvas);

				// set context
				this.ctx = this.canvas.getContext('2d');

				// wheel
				this.wheel = wheel;

				// wheel wrap
				this.wheelWrap = wheelWrap;

				// set size canvas
				this.setSizeCanvas(500, 350);

				this.declareVariables();
		}

		/********************************
  * declare a variables
  * save a data
  */


		_createClass(FinallClass, [{
				key: 'declareVariables',
				value: function declareVariables() {

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

		}, {
				key: 'managementWheel',
				value: function managementWheel() {

						return new Management(this.wheel, this.wheelWrap);
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

		}, {
				key: 'setSizeCanvas',
				value: function setSizeCanvas(_width, _height) {

						this.canvas.width = _width;

						this.canvas.height = _height;

						this.canvas.style.border = '1px solid #333';
				}

				// draw elems

		}, {
				key: 'drawElement',
				value: function drawElement(intensitLeft, intensitTop) {

						var objStars = {};

						// get coordinates
						var coords = this.getRandomStr(0.1, 1, 100);

						if (coords !== null) {

								console.log(coords);
								//objStars.star+[this.numberStar] = new DrawSpaceElements( this.ctx, coords.leftSpace, coords.topSpace );
						}

						return objStars;
				}
		}, {
				key: 'drawElems',
				value: function drawElems(intensitLeft, intensitTop) {

						// clear the context
						this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

						this.drawElement(intensitLeft, intensitTop);
				}
		}, {
				key: 'getRandomStr',
				value: function getRandomStr(speed, min, max) {

						this.increment = this.increment + speed;

						if (this.increment >= 10) {

								var leftSpace = Math.floor(Math.random() * (max - min + 1)) + min;
								var topSpace = Math.floor(Math.random() * (max - min + 1)) + min;

								this.increment = 0;

								return {
										leftSpace: leftSpace,
										topSpace: topSpace
								};
						}

						return null;
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

/*
* final class
* variables:
* 1 - canvas element
* 2 - wheel
* 3 - wheel wrap
*/
var newInstance = new FinallClass('SpaceShip', 'wheel', 'wheelWrap');

// init management
var instanceManegement = newInstance.managementWheel();

// runs function
function run() {

	// return speed movement canvas
	var speed = instanceManegement.speedCanvasMovement();
	// console.log( speed );

	// basic position the canvas
	newInstance.drawElems(speed.speedLeft, speed.speedTop);

	reqAnimationFrame(run);
}

run();