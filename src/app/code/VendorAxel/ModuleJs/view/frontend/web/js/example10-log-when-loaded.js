// Video: https://www.mage2.tv/content/javascript/requirejs-fundamentals/loading-javascript-on-every-page-with-requirejs-config.js/
// Video description:
// This video shows how to use the RequireJS deps directive to load a JavaScript module on every page.
// ---
// To load a JS module on every page, before any other module, you need to declare it as a global requireJs dependency

define(function () {
    'use strict';
    console.log('--- module loaded ---');
});