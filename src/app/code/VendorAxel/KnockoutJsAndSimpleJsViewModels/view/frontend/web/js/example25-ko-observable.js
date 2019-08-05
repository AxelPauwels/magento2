// Video: https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/javascript-knockoutjs-observable/
// Video description:
// The most fundamental building block of the Magento JavaScript framework is the humble KnockoutJS observable.

define(['ko'], function (ko) {
    'use strict';
    console.log('* example 25 *');

    return function (config) {
        return {
            title: ko.observable('This is a title for a view model') // with a default value "This is ..."
        }
    }
});

// NOTE: the observable is a function:
// require('uiRegistry').get('viewModel').title
// to get the value, execute it like a function (without parameters)
// require('uiRegistry').get('viewModel').title()
// To update the value:
// require('uiRegistry').get('viewModel').title('This string of the ko observable is updated')
