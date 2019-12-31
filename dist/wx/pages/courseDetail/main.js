require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(139);

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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_eb14ff70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eb14ff70"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_eb14ff70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/courseDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb14ff70", Component.options)
  } else {
    hotAPI.reload("data-v-eb14ff70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 140:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(14);

var _stringify2 = _interopRequireDefault(_stringify);

var _countdown = __webpack_require__(73);

var _countdown2 = _interopRequireDefault(_countdown);

var _shareModal = __webpack_require__(46);

var _shareModal2 = _interopRequireDefault(_shareModal);

var _index = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shareUrl = '/pages/courseDetail/main'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      countdown: {},
      isShowModal: false,
      hasCountdown: false,
      courseInfo: {},
      comments: [],
      tab: 1,
      tabs: [{ label: '课程导览', tabId: 1, active: true }, { label: '课程内容', tabId: 2, active: false }]
    };
  },

  components: {
    shareModal: _shareModal2.default
  },
  onShow: function onShow() {
    this.getDetailInfo();
  },

  methods: {
    getDetailInfo: function getDetailInfo() {
      var _this = this;

      var id = this.$root.$mp.query.id;
      var url = '/api/course/courseDetail?id=' + id;
      this.request.post(url).then(function (res) {
        var tempData = res.data;
        tempData['imgsList'] = tempData.imgs.split(',');
        tempData.guideContent = tempData.guideContent ? tempData.guideContent.replace(/\<\ ?img/gi, '<img style="max-width:100%;height:auto" ') : '';
        tempData.courseContent = tempData.courseContent ? tempData.courseContent.replace(/\<\ ?img/gi, '<img style="max-width:100%;height:auto" ') : '';
        _this.courseInfo = tempData;
        console.log('tempData===>>>', _this.courseInfo.guideContent);
        _this.comments = tempData.commentList;
        var limitedTimeEnd = res.data.limitedTimeEnd;
        console.log('limitedTimeEnd==>>', limitedTimeEnd);
        if (limitedTimeEnd) {
          _this.hasCountdown = true;
          var formatLimitedTime = (0, _index.formatTime)(limitedTimeEnd);
          _countdown2.default.init(formatLimitedTime, 'countdown', _this);
        }
      });
    },
    modalStatus: function modalStatus(val) {
      this.isShowModal = val;
    },
    shareBtn: function shareBtn() {
      this.isShowModal = true;
    },
    changeTab: function changeTab(tab) {
      var _this2 = this;

      this.tabs.map(function (item) {
        item.active = item.tabId === tab.tabId ? true : false;
        _this2.tab = tab.tabId;
      });
    },
    praiseComment: function praiseComment(id) {
      var _this3 = this;

      this.request.post('/api/course/praiseComment?type=1&courseId=' + id).then(function (res) {
        _this3.hasCountdown = false;
        _this3.getDetailInfo();
      });
    },
    fabulousComment: function fabulousComment(state) {
      var _this4 = this;

      this.request.post('/api/course/praiseComment?type=1&commentId=' + state.id).then(function (res) {
        _this4.hasCountdown = false;
        _this4.getDetailInfo();
      });
    },
    justPurchase: function justPurchase() {
      var _courseInfo = this.courseInfo,
          author = _courseInfo.author,
          introduce = _courseInfo.introduce,
          courseDescribe = _courseInfo.courseDescribe,
          tags = _courseInfo.tags,
          price = _courseInfo.price,
          imgs = _courseInfo.imgs,
          id = _courseInfo.id,
          title = _courseInfo.title;

      var tempParams = {
        id: id,
        title: title,
        author: author,
        introduce: introduce,
        courseDescribe: courseDescribe,
        tagList: tags.split(','),
        price: price,
        imgList: imgs.split(',')
      };
      var queryParams = (0, _stringify2.default)(tempParams);
      var url = '/pages/makeOrder/main';
      wx.navigateTo({
        url: url + '?queryParams=' + queryParams
      });
    },
    getCurrentPageUrl: function getCurrentPageUrl() {
      var pages = getCurrentPages(); //获取加载的页面
      var currentPage = pages[pages.length - 1]; //获取当前页面的对象
      var url = currentPage.route; //当前页面url
      return url;
    }
  },
  onShareAppMessage: function onShareAppMessage(ops) {
    var url = this.getCurrentPageUrl();
    console.log('url===??', url);
    this.isShowModal = false;
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: "这个课程特别好", //这里是定义转发的标题
      path: url, //这里是定义转发的地址
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
  created: function created() {},
  onLoad: function onLoad() {
    (0, _assign2.default)(this.$data, this.$options.data());
    this.hasCountdown = false;
    // this.getDetailInfo()
  }
};

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_course_detail"
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
    staticClass: "ispraise_img"
  }, [(!_vm.courseInfo.isPraise) ? _c('img', {
    attrs: {
      "src": "/static/images/fabulous.png",
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.praiseComment(_vm.courseInfo.id)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.courseInfo.isPraise) ? _c('img', {
    attrs: {
      "src": "/static/images/fabulous_active.png",
      "alt": ""
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "course_share",
    attrs: {
      "eventid": '2'
    },
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        _vm.shareBtn(_vm.courseInfo.id)
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
      "src": _vm.courseInfo.imgsList && _vm.courseInfo.imgsList[0],
      "alt": "暂无图片"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "describe_container"
  }, [(_vm.hasCountdown) ? _c('div', {
    staticClass: "count_down"
  }, [(_vm.countdown.day) ? _c('span', {
    staticClass: "count_day"
  }, [_vm._v(_vm._s(_vm.countdown.day))]) : _vm._e(), _vm._v(_vm._s(_vm.countdown.day > 0 ? ':' : '') + "\n          "), _c('span', {
    staticClass: "count_hour"
  }, [_vm._v(_vm._s(_vm.countdown.hour))]), _vm._v(":\n          "), _c('span', {
    staticClass: "count_minute"
  }, [_vm._v(_vm._s(_vm.countdown.minute))]), _vm._v(":\n          "), _c('span', {
    staticClass: "count_seconds"
  }, [_vm._v(_vm._s(_vm.countdown.seconds))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "course_price"
  }, [_c('div', {
    staticClass: "_price_label"
  }, [_vm._v("特惠价")]), _c('div', {
    staticClass: "_price_now"
  }, [_vm._v("￥" + _vm._s(_vm.courseInfo.price))]), _c('div', {
    staticClass: "_price_old"
  }, [_vm._v("￥" + _vm._s(_vm.courseInfo.marketPrice))])]), _vm._v(" "), _c('p', {
    staticClass: "course_label"
  }, [_vm._v("\n          " + _vm._s(_vm.courseInfo.title) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "course_name_title"
  }, [_c('span', {
    staticClass: "_name"
  }, [_vm._v(_vm._s(_vm.courseInfo.author))]), _vm._v("  "), _c('span', {
    staticClass: "_title"
  }, [_vm._v(_vm._s(_vm.courseInfo.introduce))])]), _vm._v(" "), _c('div', {
    staticClass: "course_desc"
  }, [_vm._v("\n          " + _vm._s(_vm.courseInfo.courseDescribe) + "\n        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "lesson_describe"
  }, [_c('div', {
    staticClass: "content_tab"
  }, _vm._l((_vm.tabs), function(tab, index) {
    return _c('div', {
      key: index,
      staticClass: "_tabs",
      class: tab.active ? 'active' : '',
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeTab(tab, index)
        }
      }
    }, [_vm._v("\n          " + _vm._s(tab.label) + "\n        ")])
  })), _vm._v(" "), (_vm.tab === 1) ? _c('div', {
    staticClass: "content_describe"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.courseInfo.guideContent)
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.tab === 2) ? _c('div', {
    staticClass: "content_describe"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.courseInfo.courseContent)
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "course_commet"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.comments), function(comment, index) {
    return _c('div', {
      key: index,
      staticClass: "commet_list"
    }, [_c('div', {
      staticClass: "commet_head"
    }, [_c('div', {
      staticClass: "_avatar"
    }, [_c('img', {
      attrs: {
        "src": comment.userImg,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "_nickname"
    }, [_vm._v("\n              " + _vm._s(comment.userName) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "fabulous_img"
    }, [(!comment.isPraise) ? _c('img', {
      attrs: {
        "src": "/static/images/fabulous.png",
        "alt": "",
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.fabulousComment(comment)
        }
      }
    }) : _vm._e(), _vm._v(" "), (comment.isPraise) ? _c('img', {
      attrs: {
        "src": "/static/images/fabulous_active.png",
        "alt": ""
      }
    }) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "commet_desc"
    }, [_vm._v("\n            " + _vm._s(comment.comment) + "\n            "), _c('div', {
      staticClass: "commet_piclist"
    }, [_c('img', {
      attrs: {
        "src": comment.pic,
        "alt": ""
      }
    })])])])
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "footer_button"
  }, [_c('div', {
    staticClass: "course_recommend"
  }, [_vm._v("\n      我要推荐\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "just_purchase",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.justPurchase
    }
  }, [_vm._v("\n      立即购买\n    ")])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "_commet_title"
  }, [_c('span', {
    staticClass: "commet_line"
  }, [_vm._v("\n            学员评论\n          ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-eb14ff70", esExports)
  }
}

/***/ })

},[138]);