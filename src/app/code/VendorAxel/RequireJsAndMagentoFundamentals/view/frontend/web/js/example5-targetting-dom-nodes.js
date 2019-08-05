// Video: https://www.mage2.tv/content/javascript/requirejs-fundamentals/targeting-dom-nodes-in-simple-requirejs-modules/
// Video description:
// JavaScript that interacts with the HTML DOM needs to somehow address the elements it needs to work with.
// Instead of strewing the code with selectors,
// it is more elegant to pass the desired DOM nodes to the JavaScript during initialization,
// similar to other dependency injection.
// ---
// THIS FILE: "select a specific dom node"

define(function () {
    'use strict';
    console.log('* example5 - targetting dom nodes *');

    // receive the element (that is selected by the selector in phtml)
    // if the selector is an asterisk, this function will be called once and element will be "false"
    return function (config, element) {
        console.log('I am targetting a specific dom node');
        console.log(element);
    }
});
