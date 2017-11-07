define(["jquery","template","./Utils","uploadify"], function($,template) {
    'use strict';
    $("form").on("submit",function(){
        var _this=$(this);
        console.log(_this.serialize());
        $.ajax({
            url:"/api/product/addProduct",
            type:"post",
            data:_this.serialize(),
            success:function(info){
                // console.log(info);
                if(info.success){
                    location.href="/goods_list.php"
                }
            }
        })
        return false;
    })
    // 品牌列表
    $.ajax({
        url:"/api/category/querySecondCategoryPaging",
        type:"get",
        data:{page:1,pageSize:1000},
        success:function(info){
            // console.log(info);
            var html=template("tpl",info);

            $(".brand").append(html);
        }
    })

    //头像上传预览功能
    $('#upfile').uploadify({
    
        // // 修改上传按钮的文字
         buttonText:"请点击",
        // //  修改上传按钮的宽度和高度
         width:120,
         height:120,
        // //  上传文件的name属性
         'fileObjName':"pic1",
        
        // //  自定义上传的进度条样式
         itemTemplate:"<span></span>",

        // //  使用flash  
         'swf':"/public/assets/uploadify/uploadify.swf",
        // //  上传文件的地址
         'uploader':"/api/product/addProductPic",
        // //  文件上传之后执行的函数
         onUploadSuccess:function(file,data){
            // console.log(data);
            //转成对象
            var res=JSON.parse(data);
            $('.preview img').attr("src",'http://localhost:3000'+res.picAddr)
            $('input[name="pic"]').val(res.picAddr);
         }
       
    });  

});