require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(157);

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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_73730ea8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(163);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(158)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73730ea8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_73730ea8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73730ea8", Component.options)
  } else {
    hotAPI.reload("data-v-73730ea8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 158:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(31);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(47);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _tabBar = __webpack_require__(48);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      mainPic: {
        img: ''
      },
      productList: [],
      teacherList: []
    };
  },


  components: {
    tabBar: _tabBar2.default
  },

  methods: {
    goDetail: function goDetail(id) {
      var url = '/pages/teacherDetail/main';
      // let url = '/pages/loginPage/main'
      wx.navigateTo({
        url: url + '?id=' + id
      });
    },
    goToProduct: function goToProduct(info) {
      console.log('====>>>', info);
      if (info.jumpType === 2) {
        wx.navigateTo({
          url: '/pages/courseDetail/main?id=' + info.jumpUrl
        });
      } else {
        wx.showToast({
          icon: "loading",
          title: "正建设中..."
        });
      }
    },
    shareBtn: function shareBtn(id) {
      console.log('id====>', id);
    },
    getMainInfo: function getMainInfo() {
      var _this = this;

      var paramData = {
        url: '/api/banner/getBannerList',
        data: {
          "type": "1",
          "classId": null
        }
      };
      this.request.post(paramData.url, paramData.data).then(function (res) {
        console.log('res===?>>>', res);
        _this.mainPic = res.data[0].bannerList[0];
      });
      this.request.post('/api/teacher/getTeacherList').then(function (res) {
        _this.teacherList = res.data && res.data.map(function (_ref) {
          var tags = _ref.tags,
              other = (0, _objectWithoutProperties3.default)(_ref, ['tags']);
          return (0, _extends3.default)({}, other, { tagList: tags.split(',') });
        });
      });
    },
    getCourseInfo: function getCourseInfo() {
      var _this2 = this;

      var paramData = {
        url: '/api/banner/getBannerList',
        data: {
          "type": "2",
          "classId": null
        }
      };
      this.request.post(paramData.url, paramData.data).then(function (res) {
        _this2.productList = res.data[0] && res.data[0].bannerList;
      });
      this.request.post('/api/teacher/getTeacherList', {}).then(function (res) {
        _this2.teacherList = res.data && res.data.map(function (_ref2) {
          var tags = _ref2.tags,
              other = (0, _objectWithoutProperties3.default)(_ref2, ['tags']);
          return (0, _extends3.default)({}, other, { tagList: tags.split(',') });
        });
      });
    }
  },
  created: function created() {
    // this.formatCourseList()
  },
  onLoad: function onLoad() {
    (0, _assign2.default)(this.$data, this.$options.data());
    this.getMainInfo();
    this.getCourseInfo();
  },
  onShow: function onShow() {}
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

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_main_entry"
  }, [_c('div', {
    staticClass: "_top"
  }, [_c('img', {
    staticClass: "header_banner",
    attrs: {
      "src": _vm.mainPic.img,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "product_list"
  }, _vm._l((_vm.productList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "product_item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goToProduct(item)
        }
      }
    }, [_c('div', {
      staticClass: "item_left"
    }, [_c('img', {
      attrs: {
        "src": item.img,
        "alt": "超级公开课"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "item_right"
    }, [_c('div', {
      staticClass: "_title"
    }, [_vm._v("\n          " + _vm._s(item.title) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "_desc"
    }, [_vm._v("\n          " + _vm._s(item.secondTitle) + "\n        ")])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "star_teacher"
  }, [_c('div', {
    staticClass: "big_title"
  }, [_vm._v("\n      明星导师\n    ")]), _vm._v(" "), _vm._l((_vm.teacherList), function(item, even) {
    return _c('div', {
      key: even,
      staticClass: "teacher_list",
      attrs: {
        "eventid": '1_' + even
      },
      on: {
        "click": function($event) {
          _vm.goDetail(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "left_avatar"
    }, [_c('img', {
      attrs: {
        "src": item.headImg,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "right_content"
    }, [_c('div', {
      staticClass: "class_title"
    }, [_vm._v("\n          " + _vm._s(item.title) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "teacher_name_and_title"
    }, [_c('span', {
      staticClass: "_name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v("  "), _c('span', {
      staticClass: "_title"
    }, [_vm._v(_vm._s(item.introduce))])]), _vm._v(" "), _c('div', {
      staticClass: "scan_times"
    }, [_c('img', {
      attrs: {
        "src": "/static/images/scan.png",
        "alt": ""
      }
    }), _vm._v("  "), _c('span', {
      staticClass: "_times"
    }, [_vm._v(_vm._s(item.viewNum) + "万人次")])]), _vm._v(" "), _c('div', {
      staticClass: "tag_list"
    }, _vm._l((item.tagList), function(tag, el) {
      return _c('span', {
        key: el,
        staticClass: "_tags"
      }, [_vm._v(_vm._s(tag))])
    }))])])
  })], 2), _vm._v(" "), _c('tab-bar', {
    attrs: {
      "selectNavIndex": 0,
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-73730ea8", esExports)
  }
}

/***/ })

},[156]);