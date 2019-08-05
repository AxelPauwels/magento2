// Video: https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/uicomponent-knockoutjs-templates/
// Video description:
// The DOM section UiComponents view models are bound to can directly in .phtml templates,
// but not all features of the JavaScript renderer are supported that way.
// Instead, UiComponents can be rendered using external .html templates, which are loaded via Ajax.
// These templates are cached by the browser and increase code reuse.

define(['uiElement'], function (UiElement) {
    'use strict';
    console.log('* example 34 *');

    return UiElement.extend({
        defaults:{
            template: "VendorAxel_MagentoUiComponents/example34-ui-component-template",
            label: "Random numbers",
            values: [22,33,45,2,80]
        },
    });
});
