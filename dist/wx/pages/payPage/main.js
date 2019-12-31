require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(209);

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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7e21cd31_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(212);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(210)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e21cd31"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7e21cd31_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/payPage/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e21cd31", Component.options)
  } else {
    hotAPI.reload("data-v-7e21cd31", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 210:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

var _index = __webpack_require__(30);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      payMoney: null,
      courseInfo: {},
      orderId: '',
      whereFrom: 'makeOrder'
    };
  },

  methods: {
    orderSubmit: function orderSubmit() {
      if (this.whereFrom === 'makeOrder') {
        var _courseInfo = this.courseInfo,
            courseId = _courseInfo.courseId,
            totalMoney = _courseInfo.totalMoney,
            num = _courseInfo.num,
            shareUserId = _courseInfo.shareUserId;

        var postParams = {
          courseId: courseId,
          totalMoney: totalMoney,
          payMoney: this.payMoney,
          num: num,
          shareUserId: shareUserId
        };
        this.request.post('/api/order/commitOrder', postParams).then(function (resp) {
          var jsonobject = resp.data;
          _index2.default.payMoneyCommon(jsonobject, 'continue');
        }).catch(function (err) {
          console.log(err);
        });
      }
      if (this.whereFrom === 'myOrder') {
        var orderId = this.orderId,
            payMoney = this.payMoney;

        var _postParams = {
          orderId: orderId,
          payMoney: payMoney
        };
        this.request.post('/api/order/continuePay', _postParams).then(function (resp) {
          var jsonobject = resp.data;
          _index2.default.payMoneyCommon(jsonobject, 'continue');
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  },
  onLoad: function onLoad() {
    (0, _assign2.default)(this.$data, this.$options.data());
  },
  onShow: function onShow() {
    var parmas = this.$root.$mp.query;
    if (parmas.queryParams) {
      this.whereFrom = 'makeOrder';
      this.courseInfo = JSON.parse(parmas.queryParams);
    }
    if (parmas.orderId) {
      this.whereFrom = 'myOrder';
      this.orderId = parmas.orderId;
    }
  }
}; //
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

// const {payMoneyCommon}  = require('@/utils/index')

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_pay_order"
  }, [_c('div', {
    staticClass: "pay_money_input"
  }, [_c('span', {
    staticClass: "label_money"
  }, [_vm._v("支付金额")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.payMoney),
      expression: "payMoney"
    }],
    attrs: {
      "type": "number",
      "placeholder": "输入金额",
      "placeholder-style": "font-size: 30rpx;font-weight: 400;color: #CACACA",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.payMoney)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.payMoney = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "total_money"
  }, [_vm._v("课程总额度：" + _vm._s(_vm.courseInfo.totalMoney))]), _vm._v(" "), _c('div', {
    staticClass: "pay_submit",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.orderSubmit
    }
  }, [_vm._v("确认支付")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7e21cd31", esExports)
  }
}

/***/ })

},[208]);