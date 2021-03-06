/**
 * 通用登录模板,包含输入交互,提交需要自己绑定验证
 * 默认模块名: pages/login/login
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var userInput = null,
        passwordInput = null;
    // 从参数来判断用户是弹窗加载,还是跳转加载.
    var param = mue.history.getParams(module.id);
    console.log("login", param)
        // 初始化数据行为存储
    var bs = mue.store({
        scope: "login",
        data: {
            form: {
                user: "",
                password: ""
            }
        },
        methods: {
            getCacheUser: function() {
                // 获取缓存设置用户
                var userinfo = storage.get("userinfo", 0);
                this.form.user = userinfo && userinfo.username || "";
            },
            checkLogin: function() {
                var that = this;
                // 读取用 $data
                var username = this.$data.form.user;
                if (!username) {
                    mue.hint("帐号不能为空");
                    return false;
                }
                // 请求校验以后在回调里面处理
                mue.ajax({
                    url: `${module.path}login.json`, // 测试模拟请求接口
                    data: this.$data.form, //接口请求的参数
                    // 可选参数
                    method: "GET"
                }).then(function(result) {
                    console.log(result)
                        // 修改全局登录状态
                    store.isLogin = true;
                    // 保存本地信息, 应该保存 result 信息, 一般里面会包含token
                    storage.set("userinfo", result.data)

                    if (param.type === "tab") {
                        // 后退跳转tab处理
                        mue.back({
                            callback: function(mod) {
                                // 需要重新渲染一次
                                mod.needRender = true;
                                mod.tab.to(param.index, "none");
                            }
                        })
                    } else if (param.type === "page") {
                        // 后退跳转tab处理
                        mue.trigger("loginsuccess", result)
                    } else {
                        // 后退刷新
                        mue.back({
                            callback: function() {
                                mue.refresh();
                            }
                        })
                    }

                }, function(result, status) {
                    // 失败 console.log(status)
                });

            }
        },
        mounted: function() {
            // 获取并设置缓存的用户信息
            this.getCacheUser();

            var that = this;
            // 数据解析后执行
            // 手机号,帐号是同个样式名, 获取值的时候,取的是最后一个focus的值
            userInput = mue.input({
                id: ".user-input",
                onBlur: function() {
                    that.form.user = this.value();
                },
                callback: function(e) {
                    // 清空数据
                    this.empty();
                }
            })

            // 密码显示或者隐藏
            passwordInput = mue.input({
                id: ".password-input",
                iconClass: ".icon-eye",
                onBlur: function(e) {
                    if (e.target.value == '') { return false; }
                    // 注册的时候校验只能4-18位密码
                    var rule = /^[a-zA-Z0-9_-]{4,18}$/;
                    if (!rule.test(e.target.value)) {
                        mue.hint("密码只能由4-18位字母或者数字上下横杠组成");
                        return false;
                    }
                    // 跟设置同步
                    that.form.password = this.value();
                    return true;
                },
                callback: function(e) {
                    //切换类型
                    this.toggleType();
                    //
                    $(e.target).toggleClass("active")
                }
            })

        }
    })

    // 输出模块
    return bs;
})