// Video: https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/instantiating-javascript-knockoutjs-view-models-and-view-bindings/
// Video description:
// Magento integrates many view models on a page.
// For this the core team introduced a special binding configuration syntax and UI registry.
// ---

define([], function () {
    'use strict';
    console.log('* example 22 *');

    return function () {
        return {
            title: 'This is a title for a viewmodel'
        }
    }
});