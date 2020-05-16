// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.\u5361\u6BD4\u517D * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .\u5361\u6BD4\u517D {\n    position: relative;\n    height: 100vh;\n    background: radial-gradient(\n        circle at 50% 0,\n        rgba(255, 0, 0, 0.5),\n        rgba(255, 0, 0, 0) 70.71%\n      ),\n      radial-gradient(\n        circle at 6.7% 75%,\n        rgba(0, 0, 255, 0.5),\n        rgba(0, 0, 255, 0) 70.71%\n      ),\n      radial-gradient(\n          circle at 93.3% 75%,\n          rgba(0, 255, 0, 0.5),\n          rgba(0, 255, 0, 0) 70.71%\n        )\n        beige;\n  }\n  \n  .ear.left {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-right: 30px solid transparent;\n    border-left: 30px solid transparent;\n    border-bottom: 20px solid #f2e2b5;\n    border-top: none;\n    left: 50%;\n    margin-left: -65px;\n    top: 63px;\n    transform: rotate(-15deg);\n    z-index: 2;\n  }\n  .ear.left::before {\n    content: \"\";\n    display: block;\n    width: 0;\n    height: 0;\n    border-right: 30px solid transparent;\n    border-left: 30px solid transparent;\n    border-bottom: 20px solid #2e524e;\n    border-top: none;\n    left: 50%;\n    margin-left: -31px;\n    margin-top: -26px;\n  }\n  .ear.right {\n    border: 1px solid red;\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-right: 30px solid transparent;\n    border-left: 30px solid transparent;\n    border-bottom: 20px solid #f2e2b5;\n    border-top: none;\n    left: 50%;\n    margin-left: 5px;\n    top: 63px;\n    transform: rotate(15deg);\n    z-index: 2;\n  }\n  .ear.right::before {\n    content: \"\";\n    display: block;\n    width: 0;\n    height: 0;\n    border-right: 30px solid transparent;\n    border-left: 30px solid transparent;\n    border-bottom: 20px solid #2e524e;\n    border-top: none;\n    left: 50%;\n    margin-left: -31px;\n    margin-top: -26px;\n  }\n  .head {\n    height: 90px;\n    width: 150px;\n    position: absolute;\n    top: 75px;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 45%;\n    background: #f2e2b5;\n    z-index: 2;\n  }\n  .headOutline {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 45px;\n    border-radius: 50%;\n    width: 200px;\n    height: 150px;\n    background: #2e524e;\n    z-index: 1;\n  }\n  .eye {\n    position: relative;\n  }\n  .eye.left {\n    border: 2px solid #2e524e;\n    width: 32px;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    top: 30px;\n    transform: rotate(-6deg);\n  }\n  .eye.right {\n    position: absolute;\n    border: 2px solid #2e524e;\n    width: 32px;\n    left: 50%;\n    margin-left: 18px;\n    transform: rotate(6deg);\n    top: 30px;\n    z-index: 2;\n  }\n  .mouth {\n    border-bottom: 3px solid #2e524e;\n    border-radius: 20%;\n    width: 90px;\n    height: 20px;\n    position: absolute;\n    left: 50%;\n    margin-left: -45px;\n    top: 45px;\n  }\n  .body {\n    position: absolute;\n    border: 2px solid black;\n    border-radius: 500px / 400px;\n    width: 300px;\n    height: 210px;\n    left: 50%;\n    margin-left: -150px;\n    top: 155px;\n    background: #2e524e;\n    z-index: 3;\n    animation: bigBody 2000ms infinite alternate;\n  }\n  .body::before {\n    content: \"\";\n    display: block;\n    width: 210px;\n    height: 160px;\n    position: absolute;\n    left: 50%;\n    margin-left: -105px;\n    top: 15px;\n    border-radius: 50%;\n    background: #f2e2b5;\n  }\n  .bodyYuan {\n    width: 140px;\n    height: 50px;\n    border-radius: 50%;\n    z-index: 33;\n    background: #2e524e;\n    position: absolute;\n    left: 50%;\n    margin-left: -70px;\n    top: 305px;\n    z-index: 3;\n  }\n  .foot > .footLeft {\n    border: 2px solid black;\n    border-radius: 50%;\n    width: 120px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    margin-left: -145px;\n    top: 315px;\n    z-index: 3;\n    background: #f2e2b5;\n    transform: rotate(25deg);\n  }\n  .foot > .footLeft::before {\n    content: \"\";\n    display: block;\n    border-radius: 50%;\n    width: 60px;\n    height: 50px;\n    background: #9e5526;\n    position: absolute;\n    margin-left: 45px;\n    margin-top: 30px;\n  }\n  .foot > .footRight {\n    border: 2px solid black;\n    border-radius: 50%;\n    width: 120px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    margin-left: 25px;\n    top: 315px;\n    z-index: 3;\n    background: #f2e2b5;\n    transform: rotate(-25deg);\n  }\n  .foot > .footRight::before {\n    content: \"\";\n    display: block;\n    border-radius: 50%;\n    width: 60px;\n    height: 50px;\n    background: #9e5526;\n    position: absolute;\n    margin-left: 15px;\n    margin-top: 30px;\n  }\n  .hand > .handLeft {\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    top: 197px;\n    margin-left: -200px;\n    border-radius: 180px / 200px;\n    width: 150px;\n    height: 60px;\n    transform: rotate(-30deg);\n    background: #2e524e;\n  }\n  .hand > .handRight {\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    top: 197px;\n    margin-left: 50px;\n    border-radius: 180px / 200px;\n    width: 150px;\n    height: 60px;\n    transform: rotate(30deg);\n    background: #2e524e;\n  }\n  .zzz {\n    position: absolute;\n    left: 43%;\n    top: 10%;\n    animation: big 2000ms infinite linear;\n  }\n  @keyframes big {\n    0% {\n      transform: translate(200px, 30px) scale(1);\n    }\n    100% {\n      transform: translate(300px, -30px) scale(2);\n    }\n  }\n  @keyframes bigBody {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(1.05);\n    }\n  }\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("/css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);

var run = function run() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(st);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var stop = function stop() {
  window.clearInterval(st);
};

var time = 100;

var play = function play() {
  return setInterval(run, time);
};

var st = play();

document.querySelector("#btnPlay").onclick = function () {
  stop();
  st = play();
};

document.querySelector("#btnStop").onclick = stop;

document.querySelector("#btnSlow").onclick = function () {
  stop();
  time = 200;
  st = play();
};

document.querySelector("#btnNormal").onclick = function () {
  stop();
  time = 100;
  st = play();
};

document.querySelector("#btnFast").onclick = function () {
  stop();
  time = 0;
  st = play();
};
},{"/css.js":"css.js"}],"C:/Users/binghao/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1931" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/binghao/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map