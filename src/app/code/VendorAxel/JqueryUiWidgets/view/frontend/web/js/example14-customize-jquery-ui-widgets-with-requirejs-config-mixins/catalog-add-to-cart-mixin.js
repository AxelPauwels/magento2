/*
Video:
https://www.mage2.tv/content/javascript/jquery-ui-widgets/customizing-javascript-jquery-ui-widgets-with-requirejs-mixins/
Video description:
jQuery UI widget methods can be customized with RequireJS mixins,
but without knowing the proper extensibility syntax it is a tricky process.
This video shows how mixins can be used to plugin to jQuery widget methods.
---
Previously (example 9) we used a JS mixin to modify functionality that returned a plain object
The jquery UI widget returns a constructor function, so we need to use the jquery UI widget extensibility system

we want to override the method "submitForm" from:
src/vendor/magento/module-catalog/view/frontend/web/js/catalog-add-to-cart.js:15
here in "$.widget('mage.catalogAddToCart'", "mage" is the namespace and "catalogAddToCart" is the name
at the bottom you see that the constructor function is returned
 */

// use the jquery dependency:
define(['jquery'], function ($) {
    'use strict';
    console.log('* example14 customize jquery UI widgets with requirejs-config mixins *');

    // every mixin has to return a function
    // this mixin function receives the return value of the target module (see at the constructor function at bottom "return $.mage.catalogAddToCart;")
    return function (catalogAddToCart) {
        // redeclare the widget to override it:
        // $.widget('widgetName', originalConstructorFunction, { objectLiteral });
        $.widget('mage.catalogAddToCart', catalogAddToCart, {
            // copy this signature "submitForm:functions (Form) {}"
            submitForm: function (form) {
                console.log('submitted the form:');
                console.log(form);
                return this._super(form);
                // We can't return "catalogAddToCart", because it's references to the old constructor function,
                // but we can return a new constructor function:
            }
        });
        return $.mage.catalogAddToCart;
    }
});

/*
I've also edited the vendor file with a console.log to see the module in action at:
src/vendor/magento/module-catalog/view/frontend/web/js/view/compare-products.js:14
*/
