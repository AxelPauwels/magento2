// ---------
// EXAMPLE 8
// ---------

// note that this file is not in the "web" directory, but in the "frontend" directory
// var config = {
//     map: {
//         '*': {
//             myalias: 'VendorAxel_ModuleJs/js/script-example8'
//         }
//     }
// };
// use the "map" directive for aliases
// the asterisk means that every requirejs module can access this alias



// ---------
// EXAMPLE 9
// ---------
// https://www.mage2.tv/content/javascript/requirejs-fundamentals/customizing-javascript-objects-with-requirejs-mixins/
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/checkout-data':{
                'VendorAxel_ModuleJs/js/checkout-data-mixin':true
            }
        }
    }
};
// the path is config/mixins
// the target is Magento_Checkout/js/checkout-data
// our mixin-module is VendorAxel_ModuleJs/js/checkout-data-mixin