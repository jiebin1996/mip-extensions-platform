/**
 * @file mipalert 组件
 * @author
 */

define(function (require) {
    'use strict';

    var customElement = require('customElement').create();

    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function () {
        // TODO



        var navbtn = document.getElementById('nav_btn');
        var nav = document.getElementsByClassName('nav_menu')[0];
        var navul = nav.getElementsByTagName('ul')[0];
        var navli = navul.getElementsByTagName('li');
        var navlen = navli.length;
        var bloon = true;
        navbtn.onclick = function () {
            var body1 = document.getElementsByTagName('body')[0];
            if (bloon === true) {
                navul.style.display = 'block';
                bloon = false;
                setTimeout(function () {
                    navul.style.opacity = '1';
                }, 1);

                body1.style.overflow = 'hidden';
            }
            else {
                navul.style.display = 'none';
                bloon = true;
                setTimeout(function () {
                    navul.style.opacity = '0';
                }, 1);
                body1.style.overflow = 'inherit';
            };

        };
// 二级栏目的显示和隐藏
        var bloon1 = true;
        for (var i = 0; i < navlen; i ++) {
            navli[i].onclick = function (a) {
                var navspan = this.getElementsByTagName('span')[0];
                var ul  = this.getElementsByTagName('ul')[0];
                for (var j = 0; j < a; j ++) {
                    ul.style.display = 'none';

                    setTimeout(function () {
                        ul.style.opacity = '0';
                    }, 1);
                    bloon1 = true;
                };

                if (bloon1 === true) {
                    ul.style.display = 'block';
                    navspan.classList.remove('faangle_right');
                    navspan.classList.add('faangle_down');
                    setTimeout(function () {
                        ul.style.opacity = '1';
                    }, 1);
                    bloon1 = false;
                }
                else {
                    if ((typeof ul.style) !== undefined && (typeof ul.style) != null) {
                        navspan.classList.remove('faangle_down');
                        navspan.classList.add('faangle_right');
                        ul.style.display = 'none';
                        bloon1 = true;
                    };

                };
            };
        };





// 新闻中心的切换
        function show() {
            var btnfather = document.getElementsByClassName('news_nav')[0];
            var artfather = document.getElementsByClassName('about_news')[0];
            var article =  artfather.getElementsByClassName('article_body');
            var btn = btnfather.getElementsByTagName('li');
            var btnlength = btn.length;

            for (var i = 0; i < btnlength; i ++) {

                (function (arg) {
                    btn[arg].onclick = function () {
                        for (var j = 0; j < btnlength; j ++) {
                            article[j].classList.remove('show');
                        };
                        article[arg].classList.add('show');
                    };
                })(i);
            };
        }
        show();

    };

    return customElement;
});
