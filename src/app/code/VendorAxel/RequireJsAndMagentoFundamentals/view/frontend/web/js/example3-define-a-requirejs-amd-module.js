/*
Video:
https://www.mage2.tv/content/javascript/requirejs-fundamentals/defining-a-javascript-requirejs-amd-module/
Video description:
All JavaScript in Magento 2 is loaded by RequireJS.
For this reason it important to know how to define a RequireJS module
(also called an AMD module, which stands for Asynchronous Module Definition).
This type of module definition is also used for JavaScript dependency injection.
---
THIS FILE: "the use the AMD requireJs module definition"
the return function of this AMD module is the value of this module
 */

// 1 - requireJs loads this AMD module (this file) and calls this function to determine the AMD module's value:
define(function () {
    'use strict';
    console.log('* example3 - define a RequireJs AMD module *');

    // 2 - Than Magento calls this funtion to initialize the module:
    return function () {
        console.log('I am a RequireJS AMD module function');
    }
});
