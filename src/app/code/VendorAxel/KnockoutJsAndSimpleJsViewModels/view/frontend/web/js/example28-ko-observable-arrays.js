/*
Video:
https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/javascript-knockoutjs-observable-arrays/
Video description:
Array deserve a special treatment by KnockoutJS, because otherwise changes within an array do not cause
an observable to register the value has been updated.
 */

define(['ko'], function (ko) {
    'use strict';
    console.log('* example 28 *');

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

/*
require('uiRegistry').get('viewModel').exchange_rates()
require('uiRegistry').get('viewModel').exchange_rates.push({currency_to: 'USD', rate: 0.68})
require('uiRegistry').get('viewModel').exchange_rates.push({currency_to: 'EXAMPLE', rate: 0.00})
require('uiRegistry').get('viewModel').exchange_rates.pop()
require('uiRegistry').get('viewModel').exchange_rates()
update a certain value doesn't work like "require('uiRegistry').get('viewModel').exchange_rates[1] = "test""
require('uiRegistry').get('viewModel').exchange_rates.splice(1, 1, {currency_to: 'SPLICE', rate: 0.5})
 */
