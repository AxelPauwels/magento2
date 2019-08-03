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
//             myalias: 'VendorAxel_ModuleJs/js/script-example8'
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
//                 'VendorAxel_ModuleJs/js/checkout-data-mixin':true
//             }
//         }
//     }
// };

// ----------
// EXAMPLE 10
// ----------
// Note that "deps" is an array
// var config = {
//     deps: ['VendorAxel_ModuleJs/js/example10-log-when-loaded']
// };

// ----------
// EXAMPLE 11
// ----------
var config = {
    shim: {'Magento_Catalog/js/view/compare-products':{
        deps:['VendorAxel_ModuleJs/js/example11-before-compare-products']
        }
    }
};
