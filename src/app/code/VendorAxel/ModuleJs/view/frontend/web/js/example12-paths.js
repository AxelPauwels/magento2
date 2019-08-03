// Video: https://www.mage2.tv/content/javascript/requirejs-fundamentals/rewriting-javascript-modules-with-requirejs-paths/
// Video description:
// This video discusses the RequireJS paths configuration directive to rewrite a request paths of JavaScript modules and templates.
// ---
define(function () {
    'use strict';

    console.log('--- example 12 ---');

    return function (config,element){
        element.innerText = 'This text is placed using requirejs-config paths';
    }

    // I've also edited the vendor file with a console.log to see the module in action at:
    // src/vendor/magento/module-catalog/view/frontend/web/js/view/compare-products.js:14
});

// We can add some