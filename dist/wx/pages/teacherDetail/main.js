require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(219);

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

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_64a1b26d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(222);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-64a1b26d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_64a1b26d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/teacherDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64a1b26d", Component.options)
  } else {
    hotAPI.reload("data-v-64a1b26d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(14);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

var _countdown = __webpack_require__(73);

var _countdown2 = _interopRequireDefault(_countdown);

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

exports.default = {
  components: {
    shareModal: _shareModal2.default
  },
  data: function data() {
    return {
      isShowModal: false,
      countdown: {},
      videoContext: null,
      playFlag: false,
      courseInfo: {},
      comments: [],
      tab: 1,
      tabs: [{ label: '课程导览', tabId: 1, active: true }, { label: '课程内容', tabId: 2, active: false }]
    };
  },

  onReady: function onReady(res) {
    // this.videoContext = wx.createVideoContext('myVideo')
  },
  onLoad: function onLoad() {
    (0, _assign2.default)(this.$data, this.$options.data());
  },
  mounted: function mounted() {
    this.videoContext = wx.createVideoContext('myVideo');
  },

  methods: {
    getDetailInfo: function getDetailInfo() {
      var _this = this;

      var id = this.$root.$mp.query.id;
      var url = '/api/teacher/getTeacherDetail?id=' + id;
      this.request.post(url).then(function (res) {
        _this.courseInfo = res.data;
      });
    },
    changeTab: function changeTab(tab) {
      var _this2 = this;

      this.tabs.map(function (item) {
        item.active = item.tabId === tab.tabId ? true : false;
        _this2.tab = tab.tabId;
      });
    },
    fabulousComment: function fabulousComment(state) {
      state.isFabulous = !state.isFabulous;
    },
    shareBtn: function shareBtn() {
      this.isShowModal = true;
    },
    playCourse: function playCourse(res) {
      this.playFlag = !this.playFlag;
      if (!this.playFlag) {
        this.videoContext.pause();
      } else {
        this.videoContext.play();
      }
    },
    pauseCourse: function pauseCourse() {
      this.videoContext.pause();
    },
    shareFriends: function shareFriends() {},
    sharePoster: function sharePoster() {},
    modalStatus: function modalStatus(val) {
      this.isShowModal = val;
    }
  },
  created: function created() {},
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
  onShow: function onShow() {
    this.getDetailInfo();
  }
};

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_teacher_detail"
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
    staticClass: "course_container"
  }, [_c('div', {
    staticClass: "course_detail"
  }, [_c('div', {
    staticClass: "course_share",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.shareBtn
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/share.png",
      "alt": "暂无图片"
    }
  })]), _vm._v(" "), (_vm.courseInfo.urlType === 1) ? _c('div', {
    staticClass: "course_poster"
  }, [_c('img', {
    attrs: {
      "src": _vm.courseInfo.url,
      "alt": "暂无图片"
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.courseInfo.urlType === 2) ? _c('div', {
    staticClass: "course_poster"
  }, [_c('video', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "id": "myVideo",
      "show-play-btn": "",
      "src": _vm.courseInfo.url,
      "controls": "",
      "eventid": '2'
    },
    on: {
      "click": _vm.playCourse
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.courseInfo.urlType === 2 && !_vm.playFlag) ? _c('div', {
    staticClass: "course_play",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.playCourse
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/play.png",
      "alt": "暂无图片"
    }
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "lesson_describe",
    domProps: {
      "innerHTML": _vm._s(_vm.courseInfo.content)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "footer_button"
  }, [_vm._v("\n    你的IP 我来成就\n  ")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-64a1b26d", esExports)
  }
}

/***/ })

},[218]);