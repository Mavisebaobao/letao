define(["jquery"], function($) {
    'use strict';
    //验证用户是不是已经登录
    $.ajax({
        url:"/api/employee/checkRootLogin",
        type:"get",
        success:function(info){
            if(info.error){
                location.href="/login.html";
            }
            console.log(info);
        }
    })
    $(".logout").on("click",function(){
        $.ajax({
            url:"/api/employee/employeeLogout",
            type:"get",
            success:function(info){
                if(info.error){
                    return alert(info.message);
                }
               location.href="/login.html";
            }
        })
    })

    
});