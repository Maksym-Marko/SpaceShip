'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -1
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

										this.posposTop = this.centerRectWrapY;

										this.keyMoveY = false;
								}

								this.movementWhell(this.posLeft, this.posTop);
						}

						//---------- back ----------------


						// _this.movementWhell( _this.posLeft, _this.posTop )

						// console.log( _this.centerRectWrapX + ' - ' + _this.posLeft );
						console.log(this.posLeft);

						// 
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