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