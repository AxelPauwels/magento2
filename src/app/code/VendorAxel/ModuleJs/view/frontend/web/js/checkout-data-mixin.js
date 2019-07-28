define([],function () {
    'use strict';

    //every mixin has to return a function
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