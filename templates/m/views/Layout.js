/*global define*/
<%
    var templateFile = dest + '/' + templates + '/' + fileName + '.hbs';
    grunt.file.write(templateFile, '<p>add your content here</p>');
    grunt.log.writeln('Generated', templateFile);
%>
define([
    'marionette'
   ,'templates'
], function (Marionette, JST) {
    'use strict';

    return Marionette.Layout.extend({
        template: JST['<%=templateFile%>']
    });
});