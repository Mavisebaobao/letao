require.config({
    　　　　baseUrl: "/public",
    　　　　paths: {
    　　　　　　jquery: "assets/jquery/jquery.min",
               template:"assets/artTemplate/template-web",
               uploadify:'assets/uploadify/jquery.uploadify.min',
                nprogress: 'assets/nprogress/nprogress'
    　　　　},
        shim:{ //用来实现不支持amb的模块通过shim实现类似的模块的用法
            uploadify:{
                //通过exports可以将非模块的方法和属性公开出来（相当于标准模块的return的作用）
                //通过deps可以依赖其他模块
                // exports:
                deps: ['jquery']
            },

        }

    　　});
    require(['nprogress','jquery'],function(NProgress,$){
        NProgress.start();
        NProgress.done();

        //当发送ajax请求的时候，也需要显示进度条
        $(document).ajaxStart(function(){
            NProgress.start();
        }).ajaxStop(function(){
            NProgress.done();
        })
    });