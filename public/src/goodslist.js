define(["jquery","template",'./Utils'], function($,template) {
    'use strict';
    //每页显示的数量
    var size=1;

    //利用正则表达式匹配页码
    var reg=/\?[a-z]+=(\d+)/;
    var search=location.search||"";
    // console.log(search);
    // console.log(reg.exec(search)); //得到的是一个对象
    var showpage=3;//只显示3个页码

    var page=reg.exec(search)&&reg.exec(search)[1];
    page=page||1;
    $.ajax({
        url:"/api/product/queryProductDetailList",
        type:"get",
        data:{page:page,pageSize:size},
        success:function(info){
            // console.log(info);
            var total=info.total;//获得总的数量
            
            var pageLen=Math.ceil(total/size); //页面的数量

            var html =template("tpl",info);
            var pagehtml=template("pagetpl",{
                pageLen:pageLen,
                current:page
            })
            $(".goods").html(html);
            $(".pagination").html(pagehtml);
    
        }

    })
});