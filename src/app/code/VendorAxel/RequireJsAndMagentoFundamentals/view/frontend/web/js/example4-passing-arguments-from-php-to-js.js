/*
Video:
https://www.mage2.tv/content/javascript/requirejs-fundamentals/passing-arguments-from-php-to-simple-requirejs-javascript-modules/
Video description:
Often JavaScript depends on some data that is only known on the server,
for example user settings or API resource URIs.
Those values can be fetched via Ajax, but it can be more convenient or faster to include them into the HTML page with PHP.
---
THIS FILE: "the use objects as arguments"
 */

define(function () {
    'use strict';
    console.log('* example4 - passing arguments from php to js *');

    //receive the object "config" as an argument
    return function (config) {
        console.log('script-example4, I am a RequireJS AMD module function and have a config object');
        console.log(config);
    }
});
