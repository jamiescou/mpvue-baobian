require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(149);

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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_68a82754_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(155);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(150)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68a82754"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_68a82754_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/editInfo/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68a82754", Component.options)
  } else {
    hotAPI.reload("data-v-68a82754", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

var _upload = __webpack_require__(72);

var _upload2 = _interopRequireDefault(_upload);

var _editTable = __webpack_require__(74);

var _editTable2 = _interopRequireDefault(_editTable);

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

exports.default = {
  components: {
    editTable: _editTable2.default, Upload: _upload2.default
  },
  data: function data() {
    return {
      radius: '50%',
      uploadFlag: false,
      isEdit: false,
      headImg: [],
      userInfo: {
        name: 'sss',
        headImg: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJNMpx8cDsjNS2rED8Mx1eBmOn1PA4KjBtapMiafCwwWsKcDpria1kzwbVibk2tKOIOqQs1UvTlqmhhQ/132'
      }
    };
  },

  methods: {},
  onLoad: function onLoad() {
    var _this = this;

    (0, _assign2.default)(this.$data, this.$options.data());
    this.request.post('/api/user/userInfo').then(function (res) {
      console.log('onLoad==>>', res.data.headImg);
      _this.userInfo = res.data;
      _this.headImg = [res.data.headImg];
    });
  }
};

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_my_info"
  }, [_c('div', {
    staticClass: "myspace_container"
  }, [_c('div', {
    staticClass: "myspace_bg"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/banner.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "user_info"
  }, [_c('div', {
    staticClass: "user_avatar"
  }, [_c('Upload', {
    attrs: {
      "width": "144rpx",
      "height": "144rpx",
      "radius": _vm.radius,
      "max": "1",
      "uploadFlag": _vm.uploadFlag,
      "srcs": _vm.headImg,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "choosed": _vm.choosed,
      "delete": _vm.deleteImg,
      "update:srcs": function($event) {
        _vm.headImg = $event
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "nickname_"
  }, [_vm._v("\n          " + _vm._s(_vm.userInfo.name) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "user_desc"
  }, [_vm._v("\n          豹变学员\n        ")])])]), _vm._v(" "), _c('div', [_c('editTable', {
    attrs: {
      "info": _vm.userInfo,
      "isEdit": _vm.isEdit,
      "mpcomid": '1'
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-68a82754", esExports)
  }
}

/***/ })

},[148]);