/*
Video:
https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/subscribing-to-changes-of-knockoutjs-observables/
Video description:
Besides triggering the UI to automatically update when a value changes,
observables can also be used to notify subscribers when updates occur.
 */

// EXAMPLE 1 (subscribe with callback to receive the newValue)

// define(['ko'], function (ko) {
//     'use strict';
//     console.log('* example 26 *');
//
//     return function (config) {
//         const title = ko.observable('This is a title for a view model');
//         title.subscribe(function (newValue) {
//             console.log('-> The new value = ', newValue);
//         });
//         return {
//             title: title
//         }
//     }
// });

// EXAMPLE 2 (subscribe with callback to receive the newValue AND oldValue)

define(['ko'], function (ko) {
    'use strict';
    console.log('* example 26 *');

    return function (config) {
        const title = ko.observable('This is a title for a view model');

        title.subscribe(function (oldValue) {
            console.log('-> The old value = ', oldValue);
        }, this, 'beforeChange'); // note this is bind to "this"

        title.subscribe(function (newValue) {
            console.log('-> The new value = ', newValue);
        });

        return {
            title: title
        }
    }
});
