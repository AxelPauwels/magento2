// Video: https://www.mage2.tv/content/javascript/jquery-ui-widgets/instantiating-jquery-ui-widgets-e.g.-javascript-form-validation/
// Video description:
// Much of the Magento frontend functionality is built using jQuery UI widgets.
// This video discusses how to create a widget instance using the form validation widget as an example.
// ---
define(['jquery'],function ($) {
    'use strict';

    return function (config,element){
        $.getJSON(config.base_url + 'rest/V1/directory/currency', function (result){
            element.innerText = JSON.stringify(result, null , 2);
        });
    }
});