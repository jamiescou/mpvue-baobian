require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([17],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(20);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(67);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
var Vuex = __webpack_require__(105);

Vue.use(Vuex);

exports.default = new Vuex.Store({
    state: {
        systemInfo: null
    },
    mutations: (0, _defineProperty3.default)({}, 'GET_SYSTEMINFO_SUCCESS', function GET_SYSTEMINFO_SUCCESS(state, systemInfo) {
        state.systemInfo = systemInfo;
    }),
    actions: {
        getSystemInfo: function getSystemInfo(_ref) {
            var commit = _ref.commit,
                state = _ref.state;

            return new _promise2.default(function (resolve, reject) {
                console.log(state);
                if (state.systemInfo) {
                    resolve(state.systemInfo);
                } else {
                    wx.getSystemInfo({
                        success: function success(res) {
                            commit('GET_SYSTEMINFO_SUCCESS', res);
                            resolve(res);
                        },
                        fail: function fail(err) {
                            reject(err);
                        }
                    });
                }
            });
        }
    },
    getters: {
        isIphoneX: function isIphoneX(state) {
            return state.systemInfo ? state.systemInfo.model.includes("iPhone X") : false;
        }
    }
});

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(76);

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(50);

var _index2 = _interopRequireDefault(_index);

var _request = __webpack_require__(68);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.prototype.request = _request2.default;
_vue2.default.config.productionTip = false;
_App2.default.mpType = 'app';

_vue2.default.prototype.$store = _index2.default;
var app = new _vue2.default(_App2.default);
app.$mount();

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(77)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-611b8923", Component.options)
  } else {
    hotAPI.reload("data-v-611b8923", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(50);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    var logs = void 0;
    if (global.mpvuePlatform === 'my') {
      logs = global.mpvue.getStorageSync({ key: 'logs' }).data || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = global.mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync('logs', logs);
    }

    // tabBar配置
    wx.hideTabBar();
    // 获取系统信息，适配iphoneX

    console.log(_store2.default);
    _store2.default.dispatch('getSystemInfo');
  },
  log: function log() {
    console.log('log at:' + Date.now());
  }
};

/***/ })

},[75]);