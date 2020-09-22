/*-----------------------------------------
 打包需要设置isWebapp为false 才能绑定后退按键
 并且 mue.ajax 使用原生的请求方式才不会有跨域问题
-------------------------------------------*/
/*
  mue.isWebapp = false;

  // 打包以后,apicloud的ajax有跨域问题,需要配置needNative 使用原生请求
  mue.config.ajax = { needNative: true };

  // 监听物理按键的后退
  mue.on("pageready",function () {

    // 绑定手机后退按键
    bindBack();
  })

  // 绑定手机后退按键
  function bindBack() {
    // 监听后退按钮
    var flag = 0,
        quickClick = 0,
        timeout;
    try{
      api.addEventListener({
          name: 'keyback'
      }, function(ret, err){
        if( router.getHistory().length > 1 ){
            // 防止快速点击导致历史记录错乱
          if( quickClick == 0 ){
            mue.back();
            quickClick = 1;
            //.5s后重新设置回去
            timeout = setTimeout(function() {
              quickClick = 0;
             }, 500);
          }
        }else{
          if (flag == 0) {
           mue.hint("再按一次就退出应用了!");
           flag = flag + 1;
           //2s后重新设置回去
           timeout = setTimeout(function() {
            flag = 0;
           }, 2000);
          } else if (flag == 1) {
            api.closeWidget({
                  id: 'A6060942676868',     //这里改成自己的应用ID
                  retData: {name:'closeWidget'},
                  silent:true
              });
          }
        }

      });
    }catch(e){}
  }
*/

// 开启单页路由
window.router = mue.router();

mue.ready(function() {
    // 初始化路由
    router.init({
        id: "#mue-router",
        progress: true,
        hash: true,
    })

    // 绑定事件
    bind();

    function bind() {
        // 绑定页面的所有按钮有href跳转
        mue.btn({ id: "#mue-router", handle: ".mue-btn,a" }).load();

        // 统一绑定页面所有的后退按钮
        $("#mue-router").on("click", ".btn-back", function(e) {
            // 支持后退多层,支持回调
            mue.back();
        })
    }
})