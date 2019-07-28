// https://www.mage2.tv/content/javascript/requirejs-fundamentals/aliasing-requirejs-module-files-with-requirejs-config/
// ---
// THIS FILE: Use dependency injection

// if the javascript needs other javascript need to work, we need to inject them as dependencies
// define these AMD module dependencies in the array as first parameter from "define()"

define(['jquery'], function ($) {
    return function (config, element) {
        console.log('script-example8, data-mag-init with dependency injection');

        $.getJSON(config.base_url + 'rest/V1/directory/currency', function(result){
         element.innerText = JSON.stringify(result, null, 2);
        });
    }
});
