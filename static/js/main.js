/**
 * Created by fabiomadeira on 25/02/15.
 */
// jQuery for page scrolling feature
var doc = jQuery(document);
doc.ready(function(e) {
    var toScroll = e(".scroll");
    toScroll.click(function(t) {
        var el, offSet, body;
        t.preventDefault();
        el = e(this.hash);
        offSet = el.offset();
        body = e("html,body");
        //noinspection MagicNumberJS
        body.animate({
            scrollTop: offSet.top
        }, 1e3);
    });
});


