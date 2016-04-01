/**
 * Transition utility
 * CSS Transition helper for JS
 */


'use strict';

var bean = require('bean');

module.exports = {
	/**
	 * Get transition event
	 * @return {string} supported transition event
	 */
	getEndEvent: function () {
		var transition;
		var element = document.createElement('fakeelement');
		var transitions = {
			transition: 'transitionend',
			OTransition: 'oTransitionEnd',
			MozTransition: 'transitionend',
			WebkitTransition: 'webkitTransitionEnd'
		};

		// look for supported transition
		for (transition in transitions) {
			if (transitions.hasOwnProperty(transition)) {
				if (element.style[transition] !== undefined) {
					return transitions[transition];
				}
			}
		}

		// transition is unsupported
		return false;
	},

	/**
	 * Bind transition end event to element
	 * @param  {object} _element
	 * @param  {function} _callback
	 * @return {void}
	 */
	onEnd: function (_element, _callback) {
		var transitionEvent = this.getEndEvent();

		if (transitionEvent) {
			bean.one(_element, transitionEvent, _callback);
		}
		else {
			_callback.apply(this, null);
		}
	}
};
