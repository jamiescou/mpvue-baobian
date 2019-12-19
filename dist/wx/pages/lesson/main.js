require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(110);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b7a8e218_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b7a8e218"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b7a8e218_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/lesson/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7a8e218", Component.options)
  } else {
    hotAPI.reload("data-v-b7a8e218", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      courseList: [{
        label: '个人品牌，重构商业竞争力超级...',
        name: '张大豆',
        img: '/static/images/course.png',
        id: 1,
        title: '豹变学院院长、豹变IP创始人',
        scantimes: 100,
        tags: '标签系统,存在感,人格化IP',
        price: 1999
      }, {
        label: '个人品牌，重构商业竞争力超级...',
        name: '张大豆',
        id: 2,
        img: '/static/images/course.png',
        title: '豹变学院院长、豹变IP创始人',
        scantimes: 100,
        tags: '标签系统,存在感,人格化IP',
        price: 1999
      }, {
        label: '个人品牌，重构商业竞争力超级...',
        name: '张大豆',
        img: '/static/images/course.png',
        id: 3,
        title: '豹变学院院长、豹变IP创始人',
        tags: '标签系统,存在感,人格化IP',
        scantimes: 100,
        price: 1999
      }]
    };
  },

  components: {
    tabBar: __WEBPACK_IMPORTED_MODULE_2__components_tabBar__["a" /* default */]
  },
  methods: {
    formatCourseList: function formatCourseList() {
      var tempDataList = this.courseList;
      this.courseList = tempDataList.map(function (_ref) {
        var tags = _ref.tags,
            price = _ref.price,
            other = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['tags', 'price']);

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, other, { tagList: tags.split(','), price: price.toFixed(2) });
      });
    },
    shareBtn: function shareBtn(id) {
      console.log('id====>', id);
    },
    goToDetail: function goToDetail(id) {
      var url = '/pages/courseDetail/main';
      wx.navigateTo({
        url: url
      });
    }
  },
  created: function created() {
    this.formatCourseList();
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_lesson_entry"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "course_container"
  }, _vm._l((_vm.courseList), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "course_list",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.goToDetail(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "course_share",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "touchstart": function($event) {
          $event.stopPropagation();
          _vm.shareBtn(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": "/static/images/share.png",
        "alt": "暂无图片"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "course_poster"
    }, [_c('img', {
      attrs: {
        "src": item.img,
        "alt": "暂无图片"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "describe_container"
    }, [_c('p', {
      staticClass: "course_label"
    }, [_vm._v("\n        " + _vm._s(item.label) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "course_name_title"
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
    })), _vm._v(" "), _c('div', {
      staticClass: "course_price"
    }, [_vm._v("\n          ￥" + _vm._s(item.price) + "\n        ")])], 1)])
  })), _vm._v(" "), _c('tab-bar', {
    attrs: {
      "selectNavIndex": 1,
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search_body"
  }, [_c('div', {
    staticClass: "search_lesson"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/search.png",
      "alt": ""
    }
  }), _vm._v("  \n      "), _c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入关键字搜索",
      "placeholder-style": "color:rgba(153,153,153,1);font-size:24rpx;text-align: center"
    }
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b7a8e218", esExports)
  }
}

/***/ })

},[109]);