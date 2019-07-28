// https://www.mage2.tv/content/javascript/requirejs-fundamentals/defining-a-javascript-requirejs-amd-module/
// ---
// THIS FILE: "the use objects as arguments"

define(function () {

    //receive the object "config" as an argument
    return function (config) {
        console.log('script-example4, I am a RequireJS AMD module function and have a config object');
        console.log(config);
    }
});

