loader.define(function(require, exports, module) {
    var pageview = {
        init: function() {
            this.slide();
        },
        slide: function() {
            var uiSlide = mue.slide({
                id: `#${module.id} .mue-slide`,
                height: 380,
                autopage: true,
                loop: true,
                data: [{
                    image: "http://www.muejs.com/demo/images/banner01.png",
                    title: "图片标题1"
                }, {
                    image: "http://www.muejs.com/demo/images/banner02.png",
                    title: "图片标题2"
                }]
            });
        }
    }

    pageview.init();
})