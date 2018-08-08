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

// function to create a star with a random position
function getRandomStr(min, max) {

	var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

	return randomNumber;
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
		function DrawSpaceElements(ctx, posLeft, posTop) {
				_classCallCheck(this, DrawSpaceElements);

				this.ctx = ctx;

				this.posLeft = posLeft;

				this.posTop = posTop;

				this.init();
		}

		_createClass(DrawSpaceElements, [{
				key: 'createStar',
				value: function createStar() {

						this.ctx.beginPath();

						this.ctx.arc(this.posLeft, this.posTop, 10, 0, 2 * Math.PI);

						this.ctx.fillStyle = 'green';

						this.ctx.fill();
				}
		}, {
				key: 'init',
				value: function init() {

						this.createStar();
				}
		}], [{
				key: 'createObjStar',
				value: function createObjStar(coords, firstStar, objStars, countStars) {

						// add star
						var star = 'star' + firstStar;

						objStars[star] = {
								leftSpace: coords.leftSpace,
								topSpace: coords.topSpace
						};

						firstStar += 1;

						// delete star
						var objStarsLength = Object.keys(objStars).length;

						var numberOfDelStar = 'star' + (firstStar - countStars);

						if (objStarsLength >= countStars) {

								delete objStars[numberOfDelStar];
						}

						return {
								firstStar: firstStar,
								objStars: objStars
						};
				}
		}]);

		return DrawSpaceElements;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrawShip = function () {
		function DrawShip(ctx, posLeft, posTop, biasLeft, biasTop) {
				_classCallCheck(this, DrawShip);

				// context
				this.ctx = ctx;

				// size
				this.shipWidth = 50;
				this.shipHeight = 20;

				// positions
				this.posLeft = posLeft - this.shipWidth / 2;
				this.posTop = posTop - this.shipHeight / 2;

				// bias
				this.biasLeft = biasLeft;
				this.biasTop = biasTop;

				// init
				this.init();
		}

		_createClass(DrawShip, [{
				key: 'createShip',
				value: function createShip() {

						var posShipLeft = 4 * (0.01 - this.biasLeft);
						var posShipTop = 4 * (0.01 - this.biasTop);

						this.ctx.beginPath();

						this.ctx.rect(this.posLeft + posShipLeft, this.posTop + posShipTop, this.shipWidth, this.shipHeight);

						this.ctx.fillStyle = 'black';

						this.ctx.fill();
				}
		}, {
				key: 'init',
				value: function init() {

						this.createShip();
				}
		}]);

		return DrawShip;
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

		// set size canvas


		_createClass(FinallClass, [{
				key: 'setSizeCanvas',
				value: function setSizeCanvas(_width, _height) {

						this.canvas.width = _width;

						this.canvas.height = _height;
				}

				/********************************
    * declare a variables
    * save a data
    */

		}, {
				key: 'declareVariables',
				value: function declareVariables() {

						// get canvas obj
						this.canvas = document.getElementById(this.idCanvas);

						// set context
						this.ctx = this.canvas.getContext('2d');

						// intensity of star creation
						this.increment = 0;
						this.intensity = 5;

						// star store
						this.objStars = {};

						// coordinates of star
						this.coordsStar = {};

						// space between
						this.spaceBetween = 40;

						// first star
						this.firstStar = 0;

						// number of stars
						this.countStars = 10;

						// position of ship
						this.posShipLeft = this.widthCanvas / 2;
						this.posShipTop = this.heightCanvas / 2;
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
    * create star obj
    */
				// record a point in an object

		}, {
				key: 'setObjStars',
				value: function setObjStars(posLeft, posTop) {

						// increase count
						this.increment = this.increment + 0.1;

						// interval
						if (this.increment >= this.intensity) {

								// set coords
								this.coordsStar.leftSpace = getRandomStr(this.spaceBetween, this.widthCanvas - this.spaceBetween);
								this.coordsStar.topSpace = getRandomStr(this.spaceBetween, this.heightCanvas - this.spaceBetween);

								var _createObjStar = DrawSpaceElements.createObjStar(this.coordsStar, this.firstStar, this.objStars, this.countStars);

								// save data
								this.firstStar = _createObjStar.firstStar;
								this.objStars = _createObjStar.objStars;
								this.increment = 0;
						}
				}

				/********************************
    * create ship
    */

		}, {
				key: 'createShip',
				value: function createShip(biasLeft, biasTop) {

						return new DrawShip(this.ctx, this.posShipLeft, this.posShipTop, biasLeft, biasTop);
				}

				/********************************
    * movement space (canvas)
    */

		}, {
				key: 'movementSpace',
				value: function movementSpace(_left, _top) {

						// this
						var _this = this;

						// create a star coordinate object
						this.setObjStars(_left, _top);

						// create stars
						eachObjProps(this.objStars, function () {

								this.leftSpace = this.leftSpace + _left;

								this.topSpace = this.topSpace + _top;

								new DrawSpaceElements(_this.ctx, this.leftSpace, this.topSpace);
						});

						// create ship
						this.createShip(_left, _top);
				}

				// clean the canvas

		}, {
				key: 'cleanCanvas',
				value: function cleanCanvas() {

						this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

	// clean canvas rect
	newInstance.cleanCanvas();

	// movement space
	newInstance.movementSpace(speed.speedLeft, speed.speedTop);

	reqAnimationFrame(run);
}

run();