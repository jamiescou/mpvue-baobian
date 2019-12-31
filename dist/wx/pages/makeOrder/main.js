require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(175);

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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_25b38cda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(178);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(176)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25b38cda"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_25b38cda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/makeOrder/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25b38cda", Component.options)
  } else {
    hotAPI.reload("data-v-25b38cda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(67);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = __webpack_require__(14);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(28);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(29);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

var _data$watch$onLoad$me;

var _index = __webpack_require__(30);

var _index2 = _interopRequireDefault(_index);

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
    getStorage = _require.getStorage,
    getSetting = _require.getSetting,
    login = _require.login;

exports.default = (_data$watch$onLoad$me = {
  data: function data() {
    return {
      goodsNumber: 1,
      courseInfo: {},
      discountPrice: 0
    };
  },

  watch: {
    goodsNumber: function goodsNumber(value) {
      console.log('value', value);
      if (value <= 0) {
        this.goodsNumber = 0;
      }
      this.goodsNumber = value;
      this.discountPrice = this.courseInfo.price * this.goodsNumber;
    }
  },
  onLoad: function onLoad() {
    (0, _assign2.default)(this.$data, this.$options.data());
  },

  methods: {
    onGotUserInfo: function onGotUserInfo(e) {
      console.log('e==>', e);
      if (e.mp.detail.errMsg === 'getUserInfo:ok') {
        login();
      } else {}
    },

    checkUserAuth: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var getSettingInfo;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('检查是否有授权');
                // let this_ = this
                // 判断是否获取授权
                _context.next = 3;
                return getSetting();

              case 3:
                getSettingInfo = _context.sent;

                // 有授权就登录
                if (getSettingInfo.authSetting['scope.userInfo']) {
                  console.log('有授权，去登录');
                  // this_.isAuth = false
                  login();
                } else {
                  console.log('没有授权，去授权');
                  // this_.isAuth = true
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkUserAuth() {
        return _ref.apply(this, arguments);
      }

      return checkUserAuth;
    }(),
    goDetail: function goDetail() {
      var url = '/pages/teacherDetail/main';
      wx.navigateTo({
        url: url
      });
    },
    shareBtn: function shareBtn(id) {
      console.log('id====>', id);
    },
    changeGoods: function changeGoods(val) {
      if (this.goodsNumber === 0 && val < 0) {
        return false;
      }
      this.goodsNumber += val;
      this.discountPrice = this.courseInfo.price * this.goodsNumber;
      console.log('discountPrice===>>', this.discountPrice);
    },
    orderSubmit: function orderSubmit() {
      if (this.discountPrice > 2000) {
        var tempParams = {
          "courseId": this.courseInfo.id,
          "totalMoney": this.discountPrice,
          "num": this.goodsNumber,
          "shareUserId": null
        };
        console.log('tempParams==>>', tempParams);
        var url = '/pages/payPage/main';
        var queryParams = (0, _stringify2.default)(tempParams);
        wx.navigateTo({
          url: url + "?queryParams=" + queryParams
        });
        return false;
      }
      var postParams = {
        "courseId": this.courseInfo.id,
        "totalMoney": this.discountPrice,
        payMoney: this.discountPrice,
        "num": this.goodsNumber,
        "shareUserId": null
      };
      this.request.post('/api/order/commitOrder', postParams).then(function (resp) {
        var jsonobject = resp.data;
        _index2.default.payMoneyCommon(jsonobject, 'common');
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
}, (0, _defineProperty3.default)(_data$watch$onLoad$me, 'onLoad', function onLoad() {
  this.checkUserAuth();
  var queryParams = this.$root.$mp.query.queryParams;
  this.courseInfo = JSON.parse(queryParams);
  this.discountPrice = this.courseInfo.price * this.goodsNumber;
}), (0, _defineProperty3.default)(_data$watch$onLoad$me, 'onShow', function onShow() {
  this.request.post('/api/user/userInfo').then(function (res) {
    if (res.data && !res.data.phone) {
      wx.navigateTo({
        url: '/pages/bindPhone/main'
      });
      return false;
    }
  });
}), _data$watch$onLoad$me);

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_make_order"
  }, [_c('div', {
    staticClass: "star_teacher"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "teacher_list"
  }, [_c('div', {
    staticClass: "left_avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.courseInfo.imgList[0],
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "right_content"
  }, [_c('div', {
    staticClass: "class_title"
  }, [_vm._v("\n          " + _vm._s(_vm.courseInfo.title) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "teacher_name_and_title"
  }, [_c('span', {
    staticClass: "_name"
  }, [_vm._v(_vm._s(_vm.courseInfo.author))]), _vm._v("  "), _c('span', {
    staticClass: "_title"
  }, [_vm._v(_vm._s(_vm.courseInfo.introduce))])]), _vm._v(" "), _c('div', {
    staticClass: "tag_list"
  }, _vm._l((_vm.courseInfo.tagList), function(tag, el) {
    return _c('span', {
      key: tag + el,
      staticClass: "_tags"
    }, [_vm._v(_vm._s(tag))])
  })), _vm._v(" "), _c('div', {
    staticClass: "price_number"
  }, [_c('div', {
    staticClass: "_price"
  }, [_vm._v("￥" + _vm._s(_vm.courseInfo.price))]), _vm._v(" "), _c('div', {
    staticClass: "goods_number"
  }, [_c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.changeGoods(-1)
      }
    }
  }, [_vm._v("-")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.goodsNumber),
      expression: "goodsNumber"
    }],
    attrs: {
      "type": "number",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.goodsNumber)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.goodsNumber = $event.target.value
      }
    }
  }), _c('span', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.changeGoods(1)
      }
    }
  }, [_vm._v("+")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "dicount_make_order"
  }, [_c('div', {
    staticClass: "_discount"
  }, [_vm._v("\n      合计："), _c('span', [_vm._v("￥" + _vm._s(_vm.discountPrice))])]), _vm._v(" "), _c('div', {
    staticClass: "order_submit",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.orderSubmit
    }
  }, [_vm._v("\n      提交订单\n    ")])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "star_lesson"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/static/images/baobian_icon.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "_collage"
  }, [_vm._v("豹变学院")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-25b38cda", esExports)
  }
}

/***/ })

},[174]);