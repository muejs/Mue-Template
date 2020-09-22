// 网站配置
var sitePath = "http://www.muejs.com",
    siteDir = sitePath + "/demo/json/";


// 设置当前应用模式
mue.isWebapp = true;

// 路由初始化给全局变量,必须是router
window.router = mue.router();

mue.ready(function() {
    // 第3步: 初始化路由
    router.init({
        id: "#mue-router",
        progress: true,
        // 刷新的时候是否还可以后退
        reloadCache: false,
    })

    // 绑定事件
    bind();

})

/**
 * [bind 绑定页面事件]
 * @return {[type]} [description]
 */
function bind() {

    // 绑定应用的所有按钮有href跳转, 增加多个按钮监听则在hangle加逗号分开.
    mue.btn({ id: "#mue-router", handle: ".mue-btn" }).load();

    // 统一绑定应用所有的后退按钮
    $("#mue-router").on("click", ".btn-back", function(e) {
        // 支持后退多层,支持回调
        mue.back();
    })

    // 监听全局后退事件处理
    router.on("back", function(e) {
        var pid = e.target.pid;

        console.log(pid)
    })

}