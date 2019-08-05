// Video: https://www.mage2.tv/content/javascript/requirejs-fundamentals/aliasing-requirejs-module-files-with-requirejs-config/
// Video description:
// If an AMD module is required a lot, it can be convenient to provide a descriptive shorthand name.
// This can be done with the Magento RequireJS configuration merging system, based on requirejs-config.js files.
// ---
// THIS FILE: The same as example 7, but loaded by requirejs-config.js

define(['jquery'], function ($) {
    'use strict';
    console.log('* example8, aliasing with requirejs-config *');

    return function (config, element) {
        $.getJSON(config.base_url + 'rest/V1/directory/currency', function(result){
         element.innerText = JSON.stringify(result, null, 2);
        });
    }
});
