require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_main_entry"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "product_list"
  }, _vm._l((_vm.productList), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "product_item"
    }, [_c('div', {
      staticClass: "item_left"
    }, [_c('img', {
      attrs: {
        "src": item.icon,
        "alt": "超级公开课"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "item_right"
    }, [_c('div', {
      staticClass: "_title"
    }, [_vm._v("\n          " + _vm._s(item.name) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "_desc"
    }, [_vm._v("\n          " + _vm._s(item.desc) + "\n        ")])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "star_teacher"
  }, [_c('div', {
    staticClass: "big_title"
  }, [_vm._v("\n      明星导师\n    ")]), _vm._v(" "), _vm._l((_vm.teacherList), function(item, index) {
    return _c('div', {
      key: index + _vm.id,
      staticClass: "teacher_list",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": _vm.goDetail
      }
    }, [_c('div', {
      staticClass: "left_avatar"
    }, [_c('img', {
      attrs: {
        "src": item.icon,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "right_content"
    }, [_c('div', {
      staticClass: "class_title"
    }, [_vm._v("\n          " + _vm._s(item.label) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "teacher_name_and_title"
    }, [_c('span', {
      staticClass: "_name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v("  "), _c('span', {
      staticClass: "_title"
    }, [_vm._v(_vm._s(item.title))])]), _vm._v(" "), _c('div', {
      staticClass: "scan_times"
    }, [_c('img', {
      attrs: {
        "src": "/static/images/scan.png",
        "alt": ""
      }
    }), _vm._v("  "), _c('span', {
      staticClass: "_times"
    }, [_vm._v(_vm._s(item.scantimes) + "万人次")])]), _vm._v(" "), _c('div', {
      staticClass: "tag_list"
    }, _vm._l((item.tagList), function(tag, el) {
      return _c('span', {
        key: tag + el,
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
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "_top"
  }, [_c('img', {
    staticClass: "header_banner",
    attrs: {
      "src": "/static/images/banner.jpg",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-73730ea8", esExports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(96);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_73730ea8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(108);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73730ea8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tabBar__ = __webpack_require__(25);


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

// import card from '@/components/card'


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      productList: [{
        icon: '/static/images/superstar.png',
        name: '超级公开课',
        id: 1,
        desc: '个人品牌•重构商业竞争力'
      }, {
        icon: '/static/images/superstar.png',
        name: '超级公开课',
        id: 2,
        desc: '个人品牌•重构商业竞争力'
      }, {
        icon: '/static/images/superstar.png',
        name: '超级公开课',
        id: 3,
        desc: '个人品牌•重构商业竞争力'
      }, {
        icon: '/static/images/superstar.png',
        name: '超级公开课',
        id: 4,
        desc: '个人品牌•重构商业竞争力'
      }, {
        icon: '/static/images/superstar.png',
        name: '超级公开课',
        id: 5,
        desc: '个人品牌•重构商业竞争力'
      }, {
        icon: '/static/images/superstar.png',
        name: '超级公开课',
        id: 5,
        desc: '个人品牌•重构商业竞争力'
      }],
      teacherList: [{
        icon: '/static/images/teacher.png',
        name: '张大豆',
        label: '个人品牌，重构商业竞争力超级...',
        title: '豹变学院院长、豹变IP创始人',
        id: 1,
        scantimes: 1000,
        tag: 'IP思维,asasa,assa'
      }, {
        icon: '/static/images/teacher.png',
        name: '张大豆',
        label: '个人品牌，重构商业竞争力超级...',
        title: '豹变学院院长、豹变IP创始人',
        id: 1,
        scantimes: 1000,
        tag: 'IP思维,asasa,assa'
      }, {
        icon: '/static/images/teacher.png',
        name: '张大豆',
        label: '个人品牌，重构商业竞争力超级...',
        title: '豹变学院院长、豹变IP创始人',
        id: 1,
        scantimes: 1000,
        tag: 'IP思维,asasa,assa'
      }]
    };
  },


  components: {
    tabBar: __WEBPACK_IMPORTED_MODULE_2__components_tabBar__["a" /* default */]
  },

  methods: {
    goDetail: function goDetail() {
      var url = '/pages/teacherDetail/main';
      wx.navigateTo({
        url: url
      });
    },
    formatCourseList: function formatCourseList() {
      var tempDataList = this.teacherList;
      this.teacherList = tempDataList.map(function (_ref) {
        var tag = _ref.tag,
            other = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['tag']);

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, other, { tagList: tag.split(',') });
      });
    },
    shareBtn: function shareBtn(id) {
      console.log('id====>', id);
    }
  },
  created: function created() {
    this.formatCourseList();
  }
});

/***/ })

},[95]);