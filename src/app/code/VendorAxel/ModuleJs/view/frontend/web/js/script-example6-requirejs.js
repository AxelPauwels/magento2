// Video: https://www.mage2.tv/content/javascript/requirejs-fundamentals/targeting-a-dom-node-with-a-simple-requirejs-module-with-data-mage-init/
// Video description:
// This alternative way of loading and executing JavaScript code on a page is useful if the RequireJS module
// requires little configuration and needs to be bound to a specific DOM node.
// It is most commonly used with jQuery UI widgets.
// ---
// THIS FILE: "use the data-mage-init attribute, so we can omit the script tag" (only when the script tag has a selector)

define(function () {
    return function (config, element) {
        console.log('script-example6, I am loaded through data-mag-init');
        console.log(config);
    }
});
