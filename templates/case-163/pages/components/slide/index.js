/**
 * [头条模块]
 */
loader.define(function(require, exports, module) {
    var pageview = {
        init: function() {
            console.log(mue.history.getParams(module.id))
                // 请求数据以后渲染
            mue.ajax({
                url: module.path + "index.json",
                // 可选参数
                method: "GET"
            }).then(function(result) {
                // 静态初始化
                var uiSlideNews = mue.slide({
                    id: `#${module.id} .mue-slide`,
                    height: 380,
                    autopage: true,
                    loop: true,
                    data: result.data
                })

            }, function(result, status) {
                // 失败 console.log(status)
            });
        }
    };

    pageview.init();
})