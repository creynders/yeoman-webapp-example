require.config(
    {
        baseUrl:'.'
    }
);

require([
    'spec/sanity'
], function(test){
    console.log("connection to test file:", test);
    mocha.run();
});
