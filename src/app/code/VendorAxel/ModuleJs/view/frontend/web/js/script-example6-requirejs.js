// https://www.mage2.tv/content/javascript/requirejs-fundamentals/targeting-a-dom-node-with-a-simple-requirejs-module-with-data-mage-init/
// ---
// THIS FILE: "use the data-mage-init attribute, so we can omit the script tag" (only when the script tag has a selector)

define(function () {
    return function (config, element) {
        console.log('script-example6, I am loaded through data-mag-init');
        console.log(config);
    }
});
