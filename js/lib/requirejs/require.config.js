/**
 * Created by Beck on 4/9/2017.
 */

var require={
    baseUrl:'../js',
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery-test-NoExist","lib/jquery/jquery-1.12.4"],
        "zepto": 'lib/zepto/zepto',
        'language':'app-module/language',
        'domReady':'lib/requirejs/domReady'
        //"a" : "/WebStudy/js/a"
    },
    //非AMD模块加载配置
    shim:{
        "underscore":{
            exports:"_"
        },
        "jquery.form":{
            deps:["jquery"]
        },
        'zepto': {
            exports: '$'
        }
        /*
         可以简写：
         "jquery.form":["jquery"]
         * */
    },
    config: {
        //Set the config for the i18n
        //module ID
        i18n: {
            locale: 'fr-fr'
        }
    },


};
/*var require=require.config({
    baseUrl:'../js',
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery-test-NoExist","lib/jquery/jquery-1.12.4"],
        //"a" : "/WebStudy/js/a"
    },
    //非AMD模块加载配置
    shim:{
        "underscore":{
            exports:"_"
        },
        "jquery.form":{
            deps:["jquery"]
        }
        /!*
         可以简写：
         "jquery.form":["jquery"]
         * *!/
    }
})*/
