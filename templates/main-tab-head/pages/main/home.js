loader.define(function(require, exports, module) {
    var pageview = {
        init: function() {
            this.list();
        },
        list: function() {
            var uiList = mue.list({
                id: "#scrollList",
                url: "http://www.muejs.com/demo/json/shop.json",
                pageSize: 5,
                data: {},
                //如果分页的字段名不一样,通过field重新定义
                field: {
                    page: "page",
                    size: "pageSize",
                    data: "data"
                },
                callback: function(e) {
                    // e.target 为你当前点击的元素
                    // $(e.target).closest(".mue-btn") 可以找到你当前点击的一整行,可以把一些属性放这里
                    console.log($(e.target).closest(".mue-btn").attr("class"))
                },
                template: function(data) {
                    var html = "";
                    data.forEach(function(el, index) {
                        // 演示传参,标准JSON才能转换
                        var param = { "id": index, "title": el.name };
                        var paramStr = JSON.stringify(param);

                        // 处理角标状态
                        var sub = '',
                            subClass = '';
                        switch (el.status) {
                            case 1:
                                sub = '新品';
                                subClass = 'mue-sub';
                                break;
                            case 2:
                                sub = '热门';
                                subClass = 'mue-sub danger';
                                break;
                            default:
                                sub = '';
                                subClass = '';
                                break;
                        }

                        html += `<li class="mue-btn mue-box" href="pages/article/article.html" param='${paramStr}'>
                            <div class="mue-thumbnail ${subClass}" data-sub="${sub}" ><img src="${el.image}" alt=""></div>
                            <div class="span1">
                                <h3 class="item-title">${el.name}</h3>
                                <p class="item-text">${el.address}</p>
                                <p class="item-text">${el.distance}公里</p>
                            </div>
                            <span class="price"><i>￥</i>${el.price}</span>
                        </li>`
                    });

                    return html;
                }
            });
        }
    }

    pageview.init();
})