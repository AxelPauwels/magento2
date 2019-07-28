// https://www.mage2.tv/content/javascript/requirejs-fundamentals/targeting-dom-nodes-in-simple-requirejs-modules/
// ---
// THIS FILE: "select a specific dom node"

define(function () {

    // receive the element (that is selected by the selector in phtml)
    // if the selector is an asterisk, this function will be called once and element will be "false"
    return function (config, element) {
        console.log('script-example5, I am targetting a specific dom node');
        console.log(element);
    }
});
