// Video: https://www.mage2.tv/content/javascript/requirejs-fundamentals/targeting-a-dom-node-with-a-simple-requirejs-module-with-data-mage-init/
// Video description:
// This alternative way of loading and executing JavaScript code on a page is useful if the RequireJS module
// requires little configuration and needs to be bound to a specific DOM node.
// It is most commonly used with jQuery UI widgets.
// ---
// THIS FILE: "use the data-mage-init attribute, so we can omit the script tag" (only when the script tag has a selector)

define(function () {
    'use strict';
    console.log('* example6 - targetting dom nodes with data-mage-init *');

    return function (config, element) {
        console.log('I am loaded through data-mage-init');
        console.log(config);
    }
});
