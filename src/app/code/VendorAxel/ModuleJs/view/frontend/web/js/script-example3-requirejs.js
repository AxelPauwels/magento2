// https://www.mage2.tv/content/javascript/requirejs-fundamentals/defining-a-javascript-requirejs-amd-module/
// ---
// THIS FILE: "the use the AMD requireJs module definition"
// the return function of this AMD module is the value of this module

// 1 - requireJs loads this AMD module (this file) and calls this function to determine the AMD module's value:
define(function () {

    // 2 - Than Magento calls this funtion to initialize the module:
    return function () {
        console.log('script-example3, I am a RequireJS AMD module function');
    }
});
