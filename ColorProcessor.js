/**
 * Brackets Themes Copyright (c) 2014 Miguel Castillo.
 *
 * Licensed under MIT
 */


define(function (require, exports, module) {
    "use strict";
    
    var tinycolor = require("lib/tinycolor");


    function getColor(content, expression) {
        var color = expression.exec(content);
        if (color) {
            color = color[1];
        }

        return color;
    }


    function getBackgroundColor(content) {
        //http://regex101.com/r/yI2wL5/1
        return getColor(content, /\.CodeMirror[\s]*\{[\s\S]*?(?:background(?:-color)?[\s:]+([^;]+))/gmi);
    }


    function getFontColor(content) {
        //http://regex101.com/r/gQ4yO9/1
        return getColor(content, /\.CodeMirror[\s]*\{[\s\S]*?(?:color[\s:]+([^;]+))/gmi);
    }


    function isDark(content) {
        var backgroundColor = getBackgroundColor(content);
        return backgroundColor ? tinycolor(backgroundColor).isDark() : false;
    }


    return {
        getBackgroundColor: getBackgroundColor,
        getFontColor: getFontColor,
        isDark: isDark
    };
});
