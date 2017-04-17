<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!--此属性为文档兼容模式申明，表示如果在IE浏览器下则使用最新的标注渲染当前文档-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--
        -视口的作用:在移动浏览器中，当页面宽度超出设备，浏览器内部虚拟的一个页面容器，将页面容器缩放到设备这么大，然后展示
        -目前大多数手机浏览器的视口(承载页面的容器)宽度都是980px；
        -视口的宽度可以通过meta标签设置
        -此属性为移动端页面视口设置，当前值表示在移动端页面的宽度为设备的宽度，并且不缩放(缩放级别为1)
            + width : 视口化缩放
            + initial-scale : 初始化缩放
            + user-scalable : 是否允许用户自行缩放 (值： yes/no ; 1/0)
            + minimum-scale : 最小缩放，一般设置了用户不允许缩放，就没必要设置最小和最大缩放
            + maximum-scale : 最大缩放
    -->
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <title>GearBest test index</title>
    <link rel="shortcut icon" href="../favicon.ico" />
<!--    <link rel="stylesheet" href="../build/dev/style/index.css" />-->
</head>
<body>
<div id="bg-div">
    <!--<img src="../image/big.png"/>-->
    <!--<img src="../image/big.png"/>-->
</div>
<div>
    <ul class="clearfix" id="language-ul">
        <li class="fl"><a href="#" data-lang="en">English</a></li>
        <li class="fl"><a href="#" data-lang="ch">中文</a></li>
    </ul>
</div>
<div id="helloArea">HelloWorld</div>

<div>你好啊,测试...</div>


</body>
</html>