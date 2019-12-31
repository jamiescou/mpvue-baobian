require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(121);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add this to handle exception
_vue2.default.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_00d0b4cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(129);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00d0b4cb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_00d0b4cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/bindPhone/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00d0b4cb", Component.options)
  } else {
    hotAPI.reload("data-v-00d0b4cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _require = __webpack_require__(15),
    setStorage = _require.setStorage;

exports.default = {
  data: function data() {
    return {
      phoneNum: '',
      verifyCode: '',
      isClick: true, // 是否控制获取验证码的点击事件
      time: '获取验证码',
      interval: null,
      active: false
    };
  },

  methods: {
    // 获取验证码
    gainCode: function gainCode() {
      var _this = this;

      if (!this.isClick) {
        return;
      }
      var mobile = this.phoneNum;
      // if(flag){
      var params = {
        phone: mobile,
        type: 1
      };
      this.request.post('/api/user/sendsms', params).then(function (res) {
        if (res.code === '0') {
          _this.isClick = false;
          var times = 60; // 用于倒计时
          _this.time = times + 's';
          _this.interval = setInterval(function () {
            times--;
            _this.time = times + 's';
            if (times < 0) {
              _this.time = '重新获取';
              _this.isClick = true;
              clearInterval(_this.interval);
            }
          }, 1000);
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    bindSMS: function bindSMS() {
      var phoneNum = this.phoneNum,
          verifyCode = this.verifyCode;

      if (!phoneNum || !verifyCode) {
        wx.showToast({
          icon: "none",
          title: "请输入手机号或验证码"
        });
        return false;
      }
      this.active = true;
      var params = {
        phone: phoneNum,
        verifyCode: verifyCode
      };
      this.request.post('/api/user/updateUserPhone', params).then(function (res) {
        if (res.code === '0') {
          wx.showToast({
            icon: "none",
            title: "绑定成功"
          });

          setTimeout(function () {
            wx.navigateBack();
          }, 1000);
        }
      });
    }
  },
  onLoad: function onLoad() {
    (0, _assign2.default)(this.$data, this.$options.data());
  },
  onShow: function onShow() {
    this.isClick = true;
    var interval = this.interval; // 保存定时器的id
    clearInterval(interval);
    this.time = '获取验证码';
  }
};

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_bind_phone"
  }, [_c('div', {
    staticClass: "bind_line"
  }, [_c('div', {
    staticClass: "bind_label"
  }, [_vm._v("\n      手机号码\n    ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phoneNum),
      expression: "phoneNum"
    }],
    staticClass: "phone_number",
    attrs: {
      "type": "number",
      "maxlength": "11",
      "placeholder": "请输入手机号",
      "placeholder-style": "font-size:30rpx;color:rgba(202,202,202,1);",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.phoneNum)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phoneNum = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "code_click",
    attrs: {
      "eventid": '1'
    },
    on: {
      "tap": function($event) {
        _vm.isClick && _vm.gainCode()
      }
    }
  }, [_vm._v(_vm._s(_vm.time))])]), _vm._v(" "), _c('div', {
    staticClass: "bind_line"
  }, [_c('div', {
    staticClass: "bind_label"
  }, [_vm._v("\n      验证码\n    ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.verifyCode),
      expression: "verifyCode"
    }],
    staticClass: "phone_number",
    attrs: {
      "type": "number",
      "maxlength": "6",
      "placeholder": "输入6位验证码",
      "placeholder-style": "font-size:30rpx;color:rgba(202,202,202,1);",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.verifyCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.verifyCode = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "finish_bind",
    class: _vm.active ? 'active' : '',
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.bindSMS
    }
  }, [_vm._v("\n    完成\n  ")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-00d0b4cb", esExports)
  }
}

/***/ })

},[120]);