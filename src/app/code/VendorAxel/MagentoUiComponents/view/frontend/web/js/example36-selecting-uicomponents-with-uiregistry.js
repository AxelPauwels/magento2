/*
Video:
https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/selecting-uicomponents-with-the-uiregistry/
Video description:
When working with the Magento frontend architecture, it is very helpful to be able to query specific instances of
UiComponents on a page via the UiRegistry.
 */

/*
require('uiRegistry').get('myUiComponent')
require('uiRegistry').get('myUiComponent').name
require('uiRegistry').get('myUiComponent.child1').name
require('uiRegistry').get('myUiComponent.child2').name
require('uiRegistry').get('index = child2').name
require('uiRegistry').get('ns = myUiComponent').name   (returns only the first one (not all 3))
require('uiRegistry').get('ns = myUiComponent, index = child1').name   (combining)

with callback function
require('uiRegistry').get('ns = myUiComponent, index = child2', function (c) {console.log(c.name)})
require('uiRegistry').get('function (c) {console.log(c.name)})

get all
require('uiRegistry').get(function (c) {console.log(c.name)})
*/