require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(165);

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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b7a8e218_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(168);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(166)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b7a8e218"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 166:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(14);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(31);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(47);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _tabBar = __webpack_require__(48);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _shareModal = __webpack_require__(46);

var _shareModal2 = _interopRequireDefault(_shareModal);

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
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      isShowModal: false,
      content: '',
      courseList: []
    };
  },

  components: {
    tabBar: _tabBar2.default, shareModal: _shareModal2.default
  },
  // // 上拉加载
  // onReachBottom: function () {
  // //执行上拉执行的功能
  //   this._getRegisterInfo();
  // },
  // // 停止下拉刷新
  // async onPullDownRefresh() {
  //   // to doing..
  //   // 停止下拉刷新
  //   wx.stopPullDownRefresh();
  // },
  methods: {
    getCourseList: function getCourseList(keyWord) {
      var _this = this;

      var params = {
        url: '/api/course/courseList'
      };
      this.request.post(params.url + '?content=' + keyWord).then(function (res) {
        _this.courseList = res.data && res.data.map(function (_ref) {
          var tags = _ref.tags,
              price = _ref.price,
              imgs = _ref.imgs,
              other = (0, _objectWithoutProperties3.default)(_ref, ['tags', 'price', 'imgs']);
          return (0, _extends3.default)({}, other, { tagList: tags.split(','), imgsList: imgs.split(','), price: price.toFixed(2) });
        });
      });
    },
    searchCourse: function searchCourse() {
      console.log('===>>>', this.content);
      this.getCourseList(this.content);
    },
    modalStatus: function modalStatus(val) {
      this.isShowModal = val;
    },
    shareBtn: function shareBtn(id) {
      this.isShowModal = true;
      console.log('id====>', id);
    },
    goToDetail: function goToDetail(id) {
      var url = '/pages/courseDetail/main';
      wx.navigateTo({
        url: url + "?id=" + id
      });
    }
  },
  onShow: function onShow() {
    this.getCourseList('');
  },
  onLoad: function onLoad() {
    (0, _assign2.default)(this.$data, this.$options.data());
  },
  onShareAppMessage: function onShareAppMessage(ops) {
    var url = getCurrentPageUrl();
    console.log('url===??', url);
    this.isShowModal = false;
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: "转发的demo", //这里是定义转发的标题
      path: '../productDetail/main', //这里是定义转发的地址
      success: function success(res) {
        // 转发成功
        console.log("转发成功:" + (0, _stringify2.default)(res));
        var shareTickets = res.shareTickets;
        // if (shareTickets.length == 0) {
        //   return false;
        // }
        // //可以获取群组信息
        // wx.getShareInfo({
        //   shareTicket: shareTickets[0],
        //   success: function (res) {
        //     console.log(res)
        //   }
        // })
      },
      fail: function fail(res) {
        // 转发失败
        console.log("转发失败:" + (0, _stringify2.default)(res));
      }
    };
  },
  created: function created() {}
};

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_lesson_entry"
  }, [_c('shareModal', {
    attrs: {
      "isShowModal": _vm.isShowModal,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "modalStatus": _vm.modalStatus
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "search_body"
  }, [_c('div', {
    staticClass: "search_lesson"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/search.png",
      "alt": ""
    }
  }), _vm._v("  \n      "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入关键字搜索",
      "placeholder-style": "color:rgba(153,153,153,1);font-size:24rpx;text-align: center",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "blur": _vm.searchCourse,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  })])]), _vm._v(" "), (_vm.courseList.length > 0) ? _c('div', {
    staticClass: "course_container"
  }, _vm._l((_vm.courseList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "course_list",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.goToDetail(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "course_share",
      attrs: {
        "eventid": '2_' + index
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
        "src": item.imgsList && item.imgsList[0],
        "alt": "暂无图片"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "describe_container"
    }, [_c('p', {
      staticClass: "course_label"
    }, [_vm._v("\n        " + _vm._s(item.title) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "course_name_title"
    }, [_c('span', {
      staticClass: "_name"
    }, [_vm._v(_vm._s(item.author))]), _vm._v("  "), _c('span', {
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
    })), _vm._v(" "), _c('div', {
      staticClass: "course_price"
    }, [_vm._v("\n          ￥" + _vm._s(item.price) + "\n        ")])], 1)])
  })) : _c('div', {
    staticClass: "no_lesson"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "_text"
  }, [_vm._v("\n      暂无课程记录\n    ")])]), _vm._v(" "), _c('tab-bar', {
    attrs: {
      "selectNavIndex": 1,
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "no_data_pic"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/no_data.png",
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b7a8e218", esExports)
  }
}

/***/ })

},[164]);