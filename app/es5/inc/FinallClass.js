'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 1
var FinallClass = function () {
		function FinallClass(id) {
				_classCallCheck(this, FinallClass);

				// set canvas obj
				this.convas = document.getElementById(id);

				// set context
				this.ctx = this.convas.getContext('2d');

				// set width
				this._offsetWidth = 0;

				// set height
				this._offsetHeight = 0;

				console.log('init FinallClass');
		}

		// set size canvas


		_createClass(FinallClass, [{
				key: 'setSizeCanvas',
				value: function setSizeCanvas(_width, _height) {

						this.convas.width = _width;

						this.convas.height = _height;

						this.convas.style.border = '1px solid #333';

						// set size
						this._offsetWidth = this.convas.offsetWidth;

						this._offsetHeight = this.convas.offsetHeight;
				}

				// position canvas

		}, {
				key: 'positionCanvas',
				value: function positionCanvas() {

						this.convas.style.marginLeft = '-' + this._offsetWidth / 2 + 'px';

						this.convas.style.marginTop = '-' + this._offsetHeight / 2 + 'px';
				}

				// draw elems

		}, {
				key: 'drawElems',
				value: function drawElems() {

						var newInstanceDrawElement = new DrawElementInCanvas(this.ctx, 100, 200);
				}

				// draw

		}, {
				key: 'draw',
				value: function draw() {

						// set size canvas
						this.setSizeCanvas(1000, 800);

						// basic position the canvas
						this.positionCanvas();

						// draw
						this.drawElems();
				}
		}]);

		return FinallClass;
}();