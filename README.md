# Transition-utility

Get CSS transition event or call callback on CSS transition end

# Usage

### getEndEvent

> `.getEndEvent()`

Get CSS transition end event name supported for browser e.g. `oTransitionEnd` or `webkitTransitionEnd`

### onEnd

> `.onEnd(element, callback)`

Run callback after CSS transition end specified DOM element

# Example

```javascript
var transitionUtility = require('transition-utility');
var transitionEndEvent = transitionUtility.getEndEvent();
var domElement = document.querySelector('.transition-element');

console.log(transitionEndEvent); // return transition event

transitionUtility.onEnd(domElement, function () {
	alert('End of transition');
});

```

# Licence & copyright
Transition-utility is copyright © 2015 [Jakub Laptas](http://kubens.pl) and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.