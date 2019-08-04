// Video: https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/passing-arguments-from-php-to-simple-knockoutjs-view-models/
// Video description:
// Passing values from PHP into view models is straight forward, but slightly different compared
// to passing values into regular, non-view model, RequireJS modules.
// ---

define([], function () {
    'use strict';
    console.log('* example 24 *');

    // configuration values (like base_url) are passed to the named view model instance (viewmodel)
    // this configuration is passed to our module (this module) as parameter "config"
    return function (config) {
        return {
            title: 'This is a title for a viewmodel',
            getTitle: function () {
                return this.title
            },
            config: config
        }
    }
});