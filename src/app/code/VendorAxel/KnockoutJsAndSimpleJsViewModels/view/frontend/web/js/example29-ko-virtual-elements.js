// Video: https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/knockoutjs-virtual-elements/// Video description:
// Video description:
// Having to insert DOM nodes for control flow bindings can be a nuisance.
// Virtual elements allow hiding them from the rendered DOM as HTML comments.

define(['ko'], function (ko) {
    'use strict';
    console.log('* example 29 *');

    return function () {
        const viewModel = {
            exchange_rates: ko.observableArray([
                {
                    currency_to: 'EUR',
                    rate: 1.0
                }
            ])
        };

        return viewModel;
    }
});
