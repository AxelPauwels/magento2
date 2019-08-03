// https://www.mage2.tv/content/javascript/requirejs-fundamentals/loading-javascript-on-every-page-with-requirejs-config.js/
// ---
// To load a JS module on every page, before any other module, you need to declare it as a global requireJs dependency

define(function () {
    'use strict';
    console.log('--- module loaded ---');
});