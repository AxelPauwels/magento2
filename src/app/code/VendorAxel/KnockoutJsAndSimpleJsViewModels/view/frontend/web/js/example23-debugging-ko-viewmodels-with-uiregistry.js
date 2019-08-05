/*
Video:
https://www.mage2.tv/content/javascript/knockoutjs-and-simple-javascript-view-models/debugging-knockoutjs-view-models-with-the-uiregistry/
Video description:
The most powerful tool to debug JavaScript in Magento is familiarity with the UiRegistry AMD module and
the browser console. It stores an instance of every view model on a page and can be queried on a wide set of criteria.
---
browser console command examples:
require('uiRegistry').get('viewModel')
require('uiRegistry').get('viewModel').name = 'test'
require('uiRegistry').get('viewModel').getTitle()
 */

define([], function () {
    'use strict';
    console.log('* example 23 *');

    return function () {
        return {
            title: 'This is a title for a view model',
            getTitle: function () {
                return this.title
            }
        }
    }
});
