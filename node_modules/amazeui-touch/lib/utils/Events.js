'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var bind = 'addEventListener';
var unbind = 'removeEventListener';

var Events = {
  one: function one(node, eventNames, eventListener) {
    var typeArray = eventNames.split(' ');
    var recursiveFunction = function recursiveFunction(e) {
      e.target.removeEventListener(e.type, recursiveFunction);
      return eventListener(e);
    };

    for (var i = typeArray.length - 1; i >= 0; i--) {
      this.on(node, typeArray[i], recursiveFunction);
    }
  },

  /**
   * Bind `node` event `eventName` to `eventListener`.
   *
   * @param {Element} node
   * @param {String} eventName
   * @param {Function} eventListener
   * @param {Boolean} capture
   * @return {Obejct}
   * @api public
   */

  on: function on(node, eventName, eventListener, capture) {
    node[bind](eventName, eventListener, capture || false);

    return {
      off: function off() {
        node[unbind](eventName, eventListener, capture || false);
      }
    };
  },

  /**
   * Unbind `node` event `eventName`'s callback `eventListener`.
   *
   * @param {Element} node
   * @param {String} eventName
   * @param {Function} eventListener
   * @param {Boolean} capture
   * @return {Function}
   * @api public
   */

  off: function off(node, eventName, eventListener, capture) {
    node[unbind](eventName, eventListener, capture || false);
    return eventListener;
  }
};

exports.default = Events;