/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {

            // 是否已经展示了,展示不做处理
            var isShow = false;
            var $floor = mue.$(".mue-floor-item"),
                $floorHead = mue.$(".mue-floor-head"),
                $floorMenu = mue.$(".addressbook-bar li");
            // 初始化楼层控件
            var uiFloor = mue.floor({
                id: "#floor",
                menu: ".addressbook-bar",
                handle: "li",
                floorItem: ".mue-floor-item", // 默认,可不填
                area: 0.1 // 接近到顶部才触发
            });

            // 自定义固定头部
            uiFloor.on("scrollto", mue.unit.debounce(function(e) {
                // console.log(e.target.scrollTop)
                // console.log(e.index)
                var text = $floor.eq(e.index).text();
                if (e.target.scrollTop > 20) {
                    $floorHead.text(text);
                    if (!isShow) {
                        $floorHead.addClass("active");
                        isShow = true;
                    }
                } else {
                    $floorHead.text(text);
                    $floorHead.removeClass("active");
                    $floorMenu.removeClass("active");
                    isShow = false;
                }
            }, 10))


        }
    };

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})