/**
 * Created by Beck on 4/12/2017.
 */

/* 使用了require.ensure和AMD动态require两种方式，来建立分割点，代码在此处被分片 */
var a=require('./a');
a.sayHello();

require.ensure(['./b'], function(require){
    var b = require('./b');
    b.sayHello();
});

require(['./c'], function(c){
    c.sayHello();
});
