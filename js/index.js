/**
 * Created by HuangZufu on 4/14/2017.
 */


require("../style/base.css");
require("../style/comm.css");
require('../style/index.css');

var userSetting=require('../js/userSetting');//初始化用户信息
var luangagePackage=require('../js/language/language_'+userSetting.language);
//alert('oooooooooooooooooooooooooooo')

$(function () {
    $('#helloArea').text(luangagePackage.hello+luangagePackage.world);
    /*var img1 = document.createElement("img");
    img1.src = require("../image/big.png");
    document.body.appendChild(img1);*/
    $('#language-ul li a').on('click',function () {
        var selectLanguage = $(this).attr('data-lang');
        localStorage.setItem('lang',selectLanguage);
        window.location.reload();
    })

    /*var FastClick = require('../lib/fastclick');
     FastClick.attach(document.body);*/

    /*var startTime;
    var btn=document.getElementById('tapBtn');
    btn.addEventListener('click',function (event) {
        console.log('click use: '+(event.timeStamp-startTime));
        $('#clickTime').text('click事件耗时： '+ (event.timeStamp-startTime));
    },false);

    //touchestart-touchend 第一次tap的时间
    btn.addEventListener('touchstart',function (event) {
        startTime=event.timeStamp;
        console.log('start event:0');
    },false);
    btn.addEventListener('touchend',function (event) {
        console.log('tap use:'+(event.timeStamp-startTime));
        $('#tapTime').text('touch事件耗时： '+ (event.timeStamp-startTime));
    })*/
})
