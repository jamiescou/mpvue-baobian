require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(180);

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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_95b13230_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(183);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-95b13230"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_95b13230_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/my/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-95b13230", Component.options)
  } else {
    hotAPI.reload("data-v-95b13230", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(28);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(29);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _tabBar = __webpack_require__(48);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(15),
    getStorage = _require.getStorage,
    getSetting = _require.getSetting,
    login = _require.login,
    checkUserAuth = _require.checkUserAuth; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isKeFu: false,
      isLogin: false,
      userInfo: {},
      myInfoList: [{
        icon: '/static/images/myinfo.png',
        text: '我的信息',
        url: '/pages/myInfo/main'
      }, {
        icon: '/static/images/mylesson.png',
        text: '我的课程',
        url: '/pages/myLesson/main'
      }, {
        icon: '/static/images/yu_e.png',
        text: '我的余额',
        url: '/pages/myBalance/main'
      }, {
        icon: '/static/images/duihuanka.png',
        text: '我的兑换卡',
        url: '/pages/myCoupon/main'
      }],
      myTools: [{
        icon: '/static/images/huodong.png',
        text: '活动',
        url: ''
      }, {
        icon: '/static/images/toupiao.png',
        text: '投票',
        url: ''
      }, {
        icon: '/static/images/yaoqing.png',
        text: '邀请好友',
        url: ''
      }, {
        icon: '/static/images/mishu.png',
        text: '我的秘书',
        url: ''
      }]
    };
  },


  components: {
    tabBar: _tabBar2.default
  },

  methods: {
    onGotUserInfo: function onGotUserInfo(e) {
      console.log('e==>', e);
      if (e.mp.detail.errMsg === 'getUserInfo:ok') {
        login().then(function (res) {
          console.log('res===>>', res);
        });
      } else {}
    },
    keFuTell: function keFuTell() {
      this.isKeFu = true;
    },
    handleInfoDetail: function handleInfoDetail(url) {
      wx.navigateTo({
        url: url
      });
    }
  },
  onShow: function onShow() {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var userInfo;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return getStorage('userInfo');

            case 3:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 6;
                break;
              }

              _context.t0 = '';

            case 6:
              userInfo = _context.t0;

              _this.isLogin = true;
              _this.userInfo = userInfo.data;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t1 = _context['catch'](0);

              checkUserAuth();

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 11]]);
    }))();
  },
  onLoad: function onLoad() {
    (0, _assign2.default)(this.$data, this.$options.data());
  }
};

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pages_myspace_entry",
    style: (_vm.isKeFu ? 'position: fixed' : '')
  }, [(_vm.isKeFu) ? _c('div', {
    staticClass: "kefu_modal"
  }, [_c('div', {
    staticClass: "mask"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "modal_cancel",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.isKeFu = false
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/close.png",
      "alt": ""
    }
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "myspace_container"
  }, [_c('div', {
    staticClass: "myspace_bg"
  }, [_c('div', {
    staticClass: "mask"
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/banner.jpg",
      "alt": ""
    }
  }), _vm._v(" "), (_vm.isLogin) ? _c('div', {
    staticClass: "user_info"
  }, [_c('div', {
    staticClass: "user_avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.headImg,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "nickname_"
  }, [_vm._v("\n          " + _vm._s(_vm.userInfo.name) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "user_desc"
  }, [_vm._v("\n          豹变学员\n        ")])]) : _vm._e(), _vm._v(" "), (!_vm.isLogin) ? _c('div', {
    staticClass: "user_info"
  }, [_vm._m(1), _vm._v(" "), _c('button', {
    staticClass: "user_login",
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '1'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v("登录/注册")])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "user_container"
  }, [_c('div', {
    staticClass: "common_info"
  }, _vm._l((_vm.myInfoList), function(item, index) {
    return _c('div', {
      key: item.text,
      staticClass: "info_item",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleInfoDetail(item.url)
        }
      }
    }, [_c('div', {
      staticClass: "info_icon"
    }, [_c('img', {
      attrs: {
        "src": item.icon,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "info_text"
    }, [_vm._v("\n            " + _vm._s(item.text) + "\n          ")]), _vm._v(" "), _vm._m(2, true)])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "my_tools"
  }, [_c('div', {
    staticClass: "label_title"
  }, [_vm._v("\n        我的工具\n      ")]), _vm._v(" "), _vm._l((_vm.myTools), function(item, index) {
    return _c('div', {
      key: item.text,
      staticClass: "info_item"
    }, [_c('div', {
      staticClass: "info_icon"
    }, [_c('img', {
      attrs: {
        "src": item.icon,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "info_text"
    }, [_vm._v("\n          " + _vm._s(item.text) + "\n        ")]), _vm._v(" "), _vm._m(3, true)])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "kefu_fixed",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.keFuTell()
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/kefu.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('tab-bar', {
    attrs: {
      "selectNavIndex": 2,
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal_content"
  }, [_c('div', {
    staticClass: "modal_name"
  }, [_vm._v("\n        豹变明星BOSS经纪人\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "kefu_phone"
  }, [_vm._v("\n        18515918899\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "phone_btn"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/cellphone.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "call_text"
  }, [_vm._v("拨打电话")])]), _vm._v(" "), _c('div', {
    staticClass: "wechat_icon"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/wechatkefu.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "wechat_name"
  }, [_vm._v("\n        豹妹儿微信\n      ")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "default_avatar"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/baobian_icon.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info_nextBtn"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/next.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info_nextBtn"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/next.png",
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-95b13230", esExports)
  }
}

/***/ })

},[179]);