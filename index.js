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

    // 事件类定义
    function bind() {
        // 绑定页面的所有按钮有href跳转
        mue.btn({ id: "#mue-router", handle: ".mue-btn" }).load();

        // 统一绑定页面所有的后退按钮
        $("#mue-router").on("click", ".btn-back", function(e) {
            // 支持后退多层,支持回调
            mue.back();
        })
    }
})