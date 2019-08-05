/*
Video:
https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/subscribing-a-callback-to-changes-of-a-ko-es5-observable/
Video description:
As nice as KO ES5 observables are, they do make interacting with the underlying KnockoutJS observable function harder
because it is hidden. This is usually only a problem when needing to subscribe a callback function to changes.
This video shows how to access the underlying observable so it is possible to subscribe to updates.
 */

define(['ko'], function (ko) {
    'use strict';
    console.log('* example 31 *');

    return function () {
        const viewModel = ko.track({
            label: ('A view model with regular ko observables'),
            additional_charge: (2),
            items: ([
                {name: 'Surprise Box', qty:4, price:5},
                {name: 'Chunck Box', qty:2, price:7}
            ]),
            rowTotal: item => item.qty * item.price,
            total: function () {
                const sum = this.items.map(this.rowTotal).reduce((acc,curr)=> acc + curr);
                return sum + this.additional_charge;
            }
        });
        // this will return the observable if it exists
        ko.getObservable(viewModel, 'additional_charge').subscribe(function (newValue) {
            // require('uiRegistry').get('viewModel').additional_charge = 300
            console.log('-> Additional_charge Changed to:', newValue);
        });

        return viewModel;
    }
});
