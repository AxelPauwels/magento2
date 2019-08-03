// Viedo: https://www.mage2.tv/content/javascript/requirejs-fundamentals/customizing-javascript-objects-with-requirejs-mixins/
// Video description:
// Often we need to tweak existing code, either to change it's behavior so it matches a given business requirement,
// or - unfortunately - to fix a bug. Magento provides a plugin like mechanism called RequireJS mixins to accomplish that.
// ---
// This mixin is like a around-plugin in php, you can override some properties/methods of the original object
// The original file (Magento_Checkout/checkout-data) returns a plain object literal

define([],function () {
    'use strict';

    // every mixin has to return a function

    // checkoutData is the object (literal) of the original magento file
    return function (checkoutData) {
        const orig = checkoutData.getSelectedShippingAddress;
        checkoutData.getSelectedShippingAddress = function () {
            const address = orig.bind(checkoutData)();
            console.log('selected address = ', address);
            return address;
        };
        return checkoutData;
    }
});