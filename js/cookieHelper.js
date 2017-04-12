/**
 * Created by Huangzufu on 2017/4/11.
 */

;define([],function(){
    function getCookie(name){
        if (document.cookie.length > 0 && name) {
            var cstart = document.cookie.indexOf(name + "="), cend;
            if (cstart != -1) {
                cstart = cstart + name.length + 1;
                cend = document.cookie.indexOf(";", cstart);
                if (cend == -1) {
                    cend = document.cookie.length;
                }
                return unescape(document.cookie.substring(cstart, cend));
            }
        }
        return "";
    }

    function setCookie(cname, value, expiredays,domain) {
        var expires = "";
        if (expiredays != null) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            expires = ";expires=" + exdate.toGMTString();
        }
        if(!domain){
            domain=document.domain;//默认取当前网站的域名
        }
        document.cookie = cname + "=" + escape(value) + "" + ";path=/;" + expires + domain;
    }

    return {
        getCookie: getCookie,
        setCookie: setCookie
    };

});
