/* global Handlebars*/
 /*jshint strict: false  */

require.config({
    paths: {
        'jquery'                : '../bower_components/jquery/jquery',
        'bootstrap'             : 'vendor/bootstrap',
        'backbone'              : '../bower_components/backbone/backbone',
        'marionette'            : '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr'        : '../bower_components/backbone.marionette/public/javascripts/backbone.wreqr',
        'backbone.babysitter'   : '../bower_components/backbone.marionette/public/javascripts/backbone.babysitter',
        'handlebars'            : '../bower_components/handlebars/handlebars',
        'i18n'                  : '../bower_components/requirejs-i18n/i18n',
        'underscore'            : '../bower_components/underscore-amd/underscore'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'handlebars'  : {
            exports : 'Handlebars',
            init: function() {
                this.Handlebars = Handlebars;
                return this.Handlebars;
            }
        },
        'backbone' : {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.wreqr':{
            deps: ['backbone']
        },
        'backbone.babysitter':{
            deps:['backbone']
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);

    app.start();
});
