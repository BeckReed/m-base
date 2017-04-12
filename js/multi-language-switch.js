/**
 * Created by Huangzufu on 2017/4/11.
 */


/*;define(['zepto','base'],function($,base){


    $('#testDiv').text('你好，使用了zepto更改了内容');

    console.log(langPackages);
});*/


;require(['zepto','language','domReady'], function ($,language,domReady){
    domReady(function () {
        console.log(language);
        $('#languages').prev().text(language.red);
    });

    // some code here
});
