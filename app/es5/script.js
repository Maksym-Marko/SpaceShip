"use strict";

// This feature helps to pass each property of an object
function eachObjProps(obj, callback) {
	var length,
	    i = 0;

	for (i in obj) {
		if (callback.call(obj[i], i, obj[i]) === false) {
			break;
		}
	}

	return obj;
}
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
		function FinallClass(idCanvas, wheel, wheelWrap, widthCanvas, heightCanvas) {
				_classCallCheck(this, FinallClass);

				// canvas element
				this.idCanvas = idCanvas;

				// wheel
				this.wheel = wheel;

				// wheel wrap
				this.wheelWrap = wheelWrap;

				// canvas size
				this.widthCanvas = widthCanvas;
				this.heightCanvas = heightCanvas;

				// declare variables
				this.declareVariables();

				/*
    * runs functions
    */
				// set size canvas
				this.setSizeCanvas(this.widthCanvas, this.heightCanvas);
		}

		/********************************
  * declare a variables
  * save a data
  */


		_createClass(FinallClass, [{
				key: 'declareVariables',
				value: function declareVariables() {

						// get canvas obj
						this.canvas = document.getElementById(this.idCanvas);

						// set context
						this.ctx = this.canvas.getContext('2d');

						// use to the function getRandomStr()
						this.increment = 0;
						this.minLeft = 0;
						this.minTop = 0;
						this.maxLeft = this.widthCanvas;
						this.maxTop = this.heightCanvas;

						// star store
						this.objStars = {};

						// first star
						this.firstStar = 0;

						// number of stars
						this.countStars = 10;

						// position of canvas
						this.posCanvasLeft = 0;
						this.posCanvasTop = 0;
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
				// record a point in an object

		}, {
				key: 'setObjStars',
				value: function setObjStars(posLeft, posTop) {

						// get star coordinates
						var coords = this.getRandomStr(0.1, posLeft, posTop);

						if (coords !== null) {

								// add star			
								var star = 'star' + this.firstStar;

								this.objStars[star] = {
										leftSpace: coords.leftSpace,
										topSpace: coords.topSpace
								};

								this.firstStar += 1;

								// delete star
								var objStarsLength = Object.keys(this.objStars).length;

								var numberOfDelStar = 'star' + (this.firstStar - this.countStars);

								if (objStarsLength >= this.countStars) {

										delete this.objStars[numberOfDelStar];
								}
						}
				}

				// function to create a star with a random position

		}, {
				key: 'getRandomStr',
				value: function getRandomStr(speed, posLeft, posTop) {

						this.increment = this.increment + speed;

						// parameters for obtaining random numbers
						this.minLeft = parseInt(this.minLeft - posLeft);
						this.minTop = parseInt(this.minTop - posTop);

						this.maxLeft = parseInt(this.maxLeft - posLeft);
						this.maxTop = parseInt(this.maxTop - posTop);

						// interval
						if (this.increment >= 10) {

								var leftSpace = Math.floor(Math.random() * (this.maxLeft - this.minLeft + 1)) + this.minLeft;

								var topSpace = Math.floor(Math.random() * (this.maxTop - this.minTop + 1)) + this.minTop;

								this.increment = 0;

								return {
										leftSpace: leftSpace,
										topSpace: topSpace
								};
						}

						return null;
				}

				/********************************
    * create ship
    */

				// set size canvas

		}, {
				key: 'setSizeCanvas',
				value: function setSizeCanvas(_width, _height) {

						this.canvas.width = _width;

						this.canvas.height = _height;
				}

				/********************************
    * movement space (canvas)
    */

		}, {
				key: 'movementSpace',
				value: function movementSpace(_left, _top) {

						// this
						var _this = this;

						this.posCanvasLeft = parseInt(this.posCanvasLeft + _left);

						this.posCanvasTop = parseInt(this.posCanvasTop + _top);

						// clear the context
						this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

						eachObjProps(this.objStars, function () {

								new DrawSpaceElements(_this.ctx, this.leftSpace + _this.posCanvasLeft, this.topSpace + _this.posCanvasTop);
						});
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

	//return function( callback ){ setTimeout( callback, 500 ); };
}();

/*
* final class
* variables:
* 1 - canvas element
* 2 - wheel
* 3 - wheel wrap
*/
var newInstance = new FinallClass('SpaceShip', 'wheel', 'wheelWrap', 500, 350);

// init management
var instanceManegement = newInstance.managementWheel();

// runs function
function run() {

	// return speed movement canvas
	var speed = instanceManegement.speedCanvasMovement();
	//console.log( speed );

	// basic position the canvas
	newInstance.setObjStars(speed.speedLeft, speed.speedTop);

	// movement space
	newInstance.movementSpace(speed.speedLeft, speed.speedTop);

	reqAnimationFrame(run);
}

run();