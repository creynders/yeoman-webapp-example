/*global define */
define([
    'marionette',
    'views/HelloWorldView'
], function (Marionette, HelloWorldView) {
    'use strict';

    var app = new Marionette.Application();
    app.addInitializer(function(){
        this.addRegions({
            content: '#content'
        });
        this.content.show(new HelloWorldView());
    });

    return app;
});