define(["jquery","./Utils"], function($) {
    'use strict';
    $("form").on("submit",function(){
        var _this=$(this);
        console.log(_this.serialize());
        $.ajax({
            url:"/api/product/addProduct",
            type:"post",
            data:_this.serialize(),
            success:function(info){
                console.log(info);
                if(info.success){
                    location.href="/goods-lists.html"
                }
            }
        })
        return false;
    })
    
});