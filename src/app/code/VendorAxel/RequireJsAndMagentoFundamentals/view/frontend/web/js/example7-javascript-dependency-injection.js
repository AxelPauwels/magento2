/*
Video:
https://www.mage2.tv/content/javascript/requirejs-fundamentals/using-requirejs-javascript-dependencies/
Video description:
Most modules do not work in isolation, but rather depend on other JavaScript modules.
RequireJS makes it simple to inject dependencies as needed.
---
THIS FILE: Use dependency injection
if the javascript needs other javascript need to work, we need to inject them as dependencies
define these AMD module dependencies in the array as first parameter from "define()"
 */

define(['jquery'], function ($) {
    'use strict';
    console.log('* example7 - javascript dependency injection *');

    return function (config, element) {
        $.getJSON(config.base_url + 'rest/V1/directory/currency', function(result){
         element.innerText = JSON.stringify(result, null, 2);
        });
    }
});
