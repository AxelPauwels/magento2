/*
Note: that this file is not in the "web" directory, but in the "frontend" directory
When this file is not used, but is just present for other examples, it should contain empty config:
 */
var config = {};

// ---------
// EXAMPLE 8
// ---------
// use the "map" directive for aliases
// the asterisk means that every requirejs module can access this alias
// ---
// var config = {
//     map: {
//         '*': {
//             myalias: 'VendorAxel_RequireJsAndMagentoFundamentals/js/example8-aliasing-with-requirejs-config'
//         }
//     }
// };

// ---------
// EXAMPLE 9
// ---------
// the path is config/mixins
// the target is Magento_Checkout/js/checkout-data
// our mixin-module is VendorAxel_RequireJsAndMagentoFundamentals/js/example9-customize-js-objects-with-requirejs-config-mixins/checkout-data-mixin
// ---
// var config = {
//     config: {
//         mixins: {
//             'Magento_Checkout/js/checkout-data':{
//                 'VendorAxel_RequireJsAndMagentoFundamentals/js/example9-customize-js-objects-with-requirejs-config-mixins/checkout-data-mixin':true
//             }
//         }
//     }
// };

// ----------
// EXAMPLE 10
// ----------
// Note that "deps" is an array
// var config = {
//     deps: ['VendorAxel_RequireJsAndMagentoFundamentals/js/example10-load-js-on-every-page-by-requirejs-config-deps']
// };

// ----------
// EXAMPLE 11
// ----------
// var config = {
//     shim: {'Magento_Catalog/js/view/compare-products':{
//         deps:['VendorAxel_RequireJsAndMagentoFundamentals/js/example11-load-a-js-module-before-another-by-requirejs-config-shim-deps/before-compare-products']
//         }
//     }
// };

// ----------
// EXAMPLE 12
// ----------
// paths-key = a new alias
// paths-value = the path we want to rewrite
// var config = {
//     paths: {
//         'myalias': 'VendorAxel_RequireJsAndMagentoFundamentals/js'
//     }
// };
/*
We can add more paths like :
    'myalias1': 'VendorAxel_RequireJsAndMagentoFundamentals/js/v1',
    'myalias2': 'VendorAxel_RequireJsAndMagentoFundamentals/js/v2'
when this file/filestructure would changed, we just can adjust this config-paths and don't need to adjust the phtml

map VS paths
------------
map is used to rename full JS modules
paths can work on path segments too
map can be declared to be valid only in a specific JS module
paths configurations are always applied globally
 */
