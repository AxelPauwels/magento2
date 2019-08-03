// Video: https://www.mage2.tv/content/javascript/requirejs-fundamentals/loading-a-javascript-module-before-another-one-with-requirejs-config.js-shim-deps/
// Video description:
// This video shows how to use the RequireJS shim deps configuration to
// load a JavaScript module automatically every time another module is loaded.
// ---
// Don't load our js module on every page, only when another module is loaded, and in this case, load it before that module
// Actually it's not the "load order", but the "execution order" of the JS modules's callback functions
// This can be done by using a shim dependency

define(function () {
    'use strict';

    console.log('--- module loaded before compare products ---');

    // I've also edited the vendor file with a console.log to see the module in action at:
    // src/vendor/magento/module-catalog/view/frontend/web/js/view/compare-products.js:14
});