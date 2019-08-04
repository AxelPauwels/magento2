// Note: that this file is not in the "web" directory, but in the "frontend" directory

// ---------
// EXAMPLE 8
// ---------
// use the "map" directive for aliases
// the asterisk means that every requirejs module can access this alias
// ---
// var config = {
//     map: {
//         '*': {
//             myalias: 'VendorAxel_ModuleJs/js/example8-aliasing-with-requirejs-config'
//         }
//     }
// };

// ---------
// EXAMPLE 9
// ---------
// the path is config/mixins
// the target is Magento_Checkout/js/checkout-data
// our mixin-module is VendorAxel_ModuleJs/js/checkout-data-mixin
// ---
// var config = {
//     config: {
//         mixins: {
//             'Magento_Checkout/js/checkout-data':{
//                 'VendorAxel_ModuleJs/js/example9-customize-js-objects-with-requirejs-config-mixin/checkout-data-mixin':true
//             }
//         }
//     }
// };

// ----------
// EXAMPLE 10
// ----------
// Note that "deps" is an array
// var config = {
//     deps: ['VendorAxel_ModuleJs/js/example10-load-js-on-every-page-by-requirejs-config-deps']
// };

// ----------
// EXAMPLE 11
// ----------
// var config = {
//     shim: {'Magento_Catalog/js/view/compare-products':{
//         deps:['VendorAxel_ModuleJs/js/example11-load-a-js-module-before-another-by-requirejs-config-shim-deps/before-compare-products']
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
//         'MyAlias': 'VendorAxel_ModuleJs/js'
//     }
// };
// We can add more paths like :
//     'MyAlias1': 'VendorAxel_ModuleJs/js/v1',
//     'MyAlias2': 'VendorAxel_ModuleJs/js/v2'
// when this file/filestructure would changed, we just can adjust this config-paths and don't need to adjust the phtml

// map VS paths
// ++++++++++++
// map is used to rename full JS modules
// paths can work on path segments too
// map can be declared to be valid only in a specific JS module
// paths configurations are always applied globally

// ----------
// EXAMPLE 13
// ----------
// In this example we don't need this file. but sinds it's present, we need a empty config
var config = {};

