// Video: https://www.mage2.tv/content/javascript/requirejs-fundamentals/loading-javascript-in-a-page-with-layout-xml/
// Video description:
// Loading JavaScript inline into the document head is not common,
// but it is still supported in Magento 2.
// If you see a module or theme that includes JavaScript this way,
// it is best to check if it does so asynchronously and defers execution,
// so the page rendering isn't blocked while the script loads and executes.
// ---
// THIS FILE: simply log a value

console.log('*** example1 - script in head ***');