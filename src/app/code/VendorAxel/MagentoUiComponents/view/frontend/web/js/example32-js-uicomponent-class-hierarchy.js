/*
Video:
https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/javascript-uicomponent-class-hierarchy/
Video description:
This video gives an introduction into the Magento UiComponent class based inheritance system.
----
in require.js the 'uiElement" is an alias to 'Magento_UI/js/lib/core/element/element'
in this file there is also a 'uiClass', what is an implementation of a class-based-inherit system,
where Magento2 builds there uiComponents on top of it

'Magento_UI/js/lib/core/class.js' is all that's needed to get the inheritance
'Magento_UI/js/lib/core/element/element.js' depends on uiClass (injection) and returns 'Class.extend(Element)'
'Magento_UI/js/lib/core/collection.js' extends from UiElement (this has 2 aliases: uiCollection and uiComponent)

so 'UiComponent' extends from 'UiElement', and 'UiElement' extends from 'Class'

'Class' is just for the inheritence (doesn't make UiComponents)
'UiElement' is the most simple UiComponent and all other UiComponents extend form UiElement
*/


define(['uiElement'], function (UiElement) {
    'use strict';
    console.log('* example 32 *');

    // pass an object literal as argument(here with a property 'label'), that somehow is converted to a view model
    return UiElement.extend({
        label: "My first UiComponent"
    });
});

// require('uiRegistry').get('myUiComponent')