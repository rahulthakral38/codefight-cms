/**
 * Created by Damodar Bashyal
 * User: damu
 * Date: 1/10/11
 * Time: 3:24 PM
 * Package: codefight cms share buttons
 * Doc: http://codefight.org/blog/0/119/Social-Share-Plugin
 */
(function(a) {
    a.fn.extend({cfShare:function(b) {
        function g(a) {
            a = a.toString().toLowerCase().replace(/(?:^|\s)\w/g, function(a) {
                return a.toUpperCase()
            });
            return"cf" + a
        }

        function h() {
            var c;
            a.each(b.shareClients, function() {
                c = g(this);
                try {
                    d[c]()
                } catch(a) {
                    console.log(c + " is not a function")
                }
            })
        }

        function f() {
            if (a(window).width() - b.pageWidth > 135) {
                var c = '<style type="text/css">#sharebox {background: #fff;position: relative;-moz-border-radius: 5px;border-radius: 5px;text-align: center;}#sharebox .cfshare {left: ' +
                        b.shareLeft + "px;width: " + b.shareWidth + "px;padding: 5px;position: absolute;top: 0;background-color: #FAFAFA;border: 1px solid #E5E5E5;}#sharebox .cfshare:hover {background-color: " + b.bgColor + ";box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);}.cfBtnFloat {display: block;margin: 0 0 10px;}.cfBtnFloatDownload {display: block;margin: 10px 0 0;}.cfBtnFloatDownload a {background: #DEDEDE;border: 1px solid #FAFAFA;color: #FBFBFB;display: block;font-size: 11px;text-decoration: none;}.cfBtnFloatDownload a:hover {color: #693;}.sepFloat{display: block;height: 10px;}.addthisFrap{display: block; text-align: center; margin: 0 auto; width: 50px;}#cfShareClientsFloat a.addthis_button_tweet{width: 70px;}.at300b,.at300b:hover{opacity: 1;}</style>";
                a("div#cfShareStyle").html(c);
                a("#cfShareClientsFloat:hidden").show();
                a("#cfShareClientsOriginal:visible").hide();
                c = d.offset().top;
                switch (b.fromPosition) {
                    case "top":
                        a(window).scrollTop() > b.startTop ? e.stop().animate({top:a(window).scrollTop() - c + b.topPadding}) : e.stop().animate({top:b.startTop - c});
                        break;
                    default:
                        a(window).scrollTop() > c ? e.stop().animate({top:a(window).scrollTop() - c + b.topPadding}) : e.stop().animate({top:0})
                }
            } else c = '<style type="text/css">#sharebox {background: #fff;position: relative;-moz-border-radius: 5px;border-radius: 5px;margin-bottom: 15px;}#sharebox .cfshare {padding: 5px;background-color: ' +
                    b.bgColor + ";border: 1px solid #E5E5E5;min-height: 20px;}#sharebox .cfshare:hover {background-color: " + b.bgColor + ";box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);}.cfBtnOrig{float: left;}.addthisOrap{margin-right: 10px;}.at300b,.at300b:hover{opacity: 1;}</style>",a("div#cfShareStyle").html(c),a("#cfShareClientsOriginal:hidden").show(),a("#cfShareClientsFloat:visible").hide();
            e.css({overflow:"visible"})
        }

        var b = a.extend({bgColor:"#fff",topPadding:0,startTop:70,fromPosition:"original",pageWidth:980,shareWidth:70,
            shareLeft:-84,addthisId:"",shareClients:[]}, b),d = this,e = d.find(".cfshare");
        e.html('<div id="cfShareClients"><div id="cfShareClientsFloat" style="display: none;"></div><div id="cfShareClientsOriginal" style="display: none;"></div></div><div id="cfShareStyle"></div><div id="cfShareJs"></div>');
        a(window).scroll(function() {
            f()
        });
        a(window).resize(function() {
            f()
        });
        d.cfFacebook = function() {
            a("#cfShareClientsOriginal").append('<a class="addthis_button_facebook_like cfBtnOrig" fb:like:layout="button_count"></a>');
            a("#cfShareClientsFloat").append('<a class="addthis_button_facebook_like cfBtnFloat" fb:like:layout="box_count"></a>')
        };
        d.cfFacebooksend = function() {
            a("#cfShareClientsOriginal").append('<a class="addthis_button_facebook_send cfBtnOrig"></a>');
            a("#cfShareClientsFloat").append('<a class="addthis_button_facebook_send cfBtnFloat"></a>')
        };
        d.cfTwitter = function() {
            a("#cfShareClientsOriginal").append('<a class="addthis_button_tweet cfBtnOrig"></a>');
            a("#cfShareClientsFloat").append('<a class="addthis_button_tweet cfBtnFloat" tw:count="vertical"></a>')
        };
        d.cfGoogleplusone = function() {
            a("#cfShareClientsOriginal").append('<a class="addthis_button_google_plusone cfBtnOrig" g:plusone:size="medium"></a>');
            a("#cfShareClientsFloat").append('<a class="addthis_button_google_plusone cfBtnFloat" g:plusone:size="tall"></a>')
        };
        d.cfAddthis = function() {
            a("#cfShareClientsOriginal").append('<a class="addthis_counter addthis_pill_style cfBtnOrig addthisOrap"></a>');
            a("#cfShareClientsFloat").append('<a class="addthis_counter cfBtnFloat addthisFrap"></a>')
        };
        d.cfDigg = function() {
            a("#cfShareJs").append('<script src="http://widgets.digg.com/buttons.js" type="text/javascript"><\/script>');
            a("#cfShareClientsOriginal").append('<a class="DiggThisButton DiggCompact cfBtnOrig"></a>');
            a("#cfShareClientsFloat").append('<a class="DiggThisButton DiggMedium cfBtnFloat"></a>').append('<span class="sepFloat"></span>')
        };
        d.cfLinkedin = function() {
            a("#cfShareJs").append('<script src="http://platform.linkedin.com/in.js" type="text/javascript"><\/script>');
            a("#cfShareClientsOriginal").append('<div class="cfBtnOrigLn">').append('<script type="IN/Share" data-counter="right"><\/script>').append("</div>").append('<span class="sepOrig"></span>');
            a("#cfShareClientsFloat").append('<div class="cfBtnFloatLn">').append('<script type="IN/Share" data-counter="top"><\/script>').append("</div>").append('<span class="sepFloat"></span>')
        };
        a("#cfShareJs").append('<script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=' + b.addthisId + '"><\/script>');
        a(document).ready(function() {
            h();
            f()
        });
        a("#cfShareClientsFloat").append('<div class="cfBtnFloatDownload"><a target="_blank" href="http://codefight.org/blog/0/119/Social-Share-Plugin">share bar</a></div>')
    }})
})(jQuery);
