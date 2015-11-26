/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
    'use strict';
    var msViewportStyle, textNode, node, nav, doc;

    nav = navigator || {};
    doc = document || {};

    if (doc && nav && nav.userAgent.match(/IEMobile\/10\.0/)) {
        msViewportStyle = doc.createElement('style');
        textNode = doc.createTextNode('@-ms-viewport{width:auto!important}');
        msViewportStyle.appendChild(textNode);
        node = doc.querySelector('head');
        node.appendChild(msViewportStyle);
    }

})();