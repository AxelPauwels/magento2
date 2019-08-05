// Video: https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/javascript-knockoutjs-computed-observable/
// Video description:
// Computed observables are the most useful feature of KnockoutJS, and they are used throughout the Magento frontend.
// Understanding the concept is essential to being able to build frontend customizations effectively.
// ---
// when a view model function is called, and this function uses any other observables,
// when one of these observables is updated, the function is called again and the view is updated

// EXAMPLE 1
// ---------
// to make a function a computed observable, put ko.computed infront
//
// define(['ko'], function (ko) {
//     'use strict';
//     console.log('* example 27 *');
//
//     return function (config) {
//         return {
//             output: ko.computed(function () {
//                 return 'test';
//             })
//         };
//     }
// });

// EXAMPLE 2
// ---------
// this is a problem, the label() tries to be execusted when the view model doesn't exist yet,
// so ut gives an error, see example 3 to refactor this code
//
// define(['ko'], function (ko) {
//     'use strict';
//     console.log('* example 27 *');
//
//     return function (config) {
//         return {
//             label: ko.observable('Currency Info'),
//             output: ko.computed(function () {
//                 return this.label() + ': ';
//             })
//         };
//     }
// });

// EXAMPLE 3
// ---------
//
// define(['ko'], function (ko) {
//     'use strict';
//     console.log('* example 27 *');
//
//     return function (config) {
//         const viewModel = {
//             label: ko.observable('Currency Info')
//         };
//
//         viewModel.output = ko.computed(function () {
//             return this.label() + ': '; // "this" is bound to "viewModel"
//         }.bind(viewModel));
//
//         return viewModel;
//     }
// });
// NOTE: When updating the label, the ko.computed function is called again, and the label will be rerendered
// require('uiRegistry').get('viewModel').label('Test')

// EXAMPLE 4
// ---------

define(['ko', 'jquery'], function (ko, $) {
    'use strict';
    console.log('* example 27 *');

    return function (config) {
        let currencyInfo = ko.observable();
        $.getJSON(config.base_url + 'rest/V1/directory/currency', currencyInfo);

        const viewModel = {
            label: ko.observable('Currency Info')
        };

        viewModel.output = ko.computed(function () {
            // use if statement, otherwise you see 'undefined' for the first seconds
            if(currencyInfo()){
                return this.label() + ':\n' + JSON.stringify(currencyInfo(), null, 2);
            }
            return '...loading';
        }.bind(viewModel));

        return viewModel;
    }
});
// require('uiRegistry').get('viewModel').label('Test')
