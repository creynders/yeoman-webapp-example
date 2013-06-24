/*global define*/
<%
    var templateFile = dest + '/' + map.templates + '/' + className + '.hbs';
    grunt.file.write(templateFile, '<p>add your content here</p>');
    grunt.log.writeln('Generated:', templateFile);
%>
define([
    'marionette'
   ,'templates'
], function (Marionette, JST) {
    'use strict';

    return Marionette.ItemView.extend({
        template: JST['<%=templateFile%>']
    });
});