// 多页的初始化都在 mue.ready
mue.ready(function() {


    // 绑定事件
    bind();
})

// 事件类定义
function bind() {
    // 绑定页面的所有按钮有href跳转
    mue.btn({ id: ".mue-page", handle: ".mue-btn" }).load();

}