/*
Video:
https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/javascript-uicomponent-defaults-configuration/
Video description:
UiComponents are highly configurable. The "defaults" object property is how most of the default values can be provided,
which then can be overridden by external configuration.
However, it also contains further configuration options, which will be covered by the following videos.
*/

// properties on the UiComponent can be overridden by configuration
define(['uiElement'], function (UiElement) {
    'use strict';
    console.log('* example 33 *');

    return UiElement.extend({
        defaults:{
            label: "ViewModel default.label property (lvl 2)"
        },
        label: "ViewModel label property (lvl 1)"
    });
});

/*
most of the time in the viewModel, properties will be set in 'defaults'
most of the time in config-option (when declaring the viewModel/uiComponent) the normal property is used,
so we can still override it by 'config' property
*/
