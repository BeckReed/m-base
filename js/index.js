/**
 * Created by Beck on 4/14/2017.
 */


require("../style/base.css");
require("../style/comm.css");
require('../style/index.css');
/*require('../style/test.less');
require('../style/test2.less');*/

var userSetting=require('../js/userSetting');//初始化用户信息
var luangagePackage=require('../js/language/language_'+userSetting.language);

$(function () {
    $('#helloArea').text(luangagePackage.hello+luangagePackage.world);
    var img1 = document.createElement("img");
    img1.src = require("../image/big.png");
    document.body.appendChild(img1);
    $('#language-ul li a').on('click',function () {
        var selectLanguage=$(this).attr('data-lang');
        localStorage.setItem('lang',selectLanguage);
        window.location.reload();
    })
})
