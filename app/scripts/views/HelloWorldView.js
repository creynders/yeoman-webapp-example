/*global define*/

define([
    'backbone',
    'marionette',
    'templates',
    'i18n!nls/appBundle'
], function (Backbone, Marionette, JST, appBundle) {
    'use strict';

    return Marionette.ItemView.extend({
        template: JST['app/scripts/views/templates/HelloWorldView.hbs'],
        model: new Backbone.Model({
            title: appBundle.title
        })
    });
});