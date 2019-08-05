/*
Video:
https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/knockoutjs-es5-observables-with-ko.track/
Video description:
It can be cumbersome to remember that KnockoutJS observables always have to be dereferenced as a function.
It also is harder to read the code.
The KnockoutJS ES5 plugin solves this problem, and fortunately is included in Magento out of the box.
 */

// normal EXAMPLE
// --------------
// define(['ko'], function (ko) {
//     'use strict';
//     console.log('* example 30 *');
//
//     return function () {
//         const viewModel = {
//             label: ko.observable('A view model with regular ko observables'),
//             additional_charge: ko.observable(2),
//             items: ko.observableArray([
//                 {name: 'Surprise Box', qty:4, price:5},
//                 {name: 'Chunck Box', qty:2, price:7}
//             ]),
//             rowTotal: item => item.qty * item.price,
//             total: function () {
//                 const sum = this.items().map(this.rowTotal).reduce((acc,curr)=> acc + curr);
//                 return sum + this.additional_charge();
//             }
//         };
//
//         return viewModel;
//     }
// });

// ko ES5 EXAMPLE (track makes every property an observable)
// --------------
define(['ko'], function (ko) {
    'use strict';
    console.log('* example 30 *');

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

        return viewModel;
    }
});

/*
instead of using it as function:
require('uiRegistry').get('viewModel').additional_charge(5)
use:
require('uiRegistry').get('viewModel').additional_charge = 5
 */
