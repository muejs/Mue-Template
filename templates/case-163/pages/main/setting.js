loader.define(function(require, exports, module) {
    console.log("setting was loaded")
    var pageview = {
        init: function() {

        }
    };

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})