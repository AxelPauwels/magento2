// Video: https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/javascript-uicomponent-parent-child-relationship/
// Video description:
// Most of the time UiComponents are built as a hierarchy of related elements.
// This video discusses how to define the hierarchy and how the UiComponents can relate to each other.

define(['uiElement'], function (UiElement) {
    'use strict';
    console.log('* example 35 *');

    return UiElement.extend({
        defaults: {
            template: "VendorAxel_MagentoUiComponents/example34-ui-component-template",
            label: "Random numbers",
            values: [22, 33, 45, 2, 80]
        },
    });
});
