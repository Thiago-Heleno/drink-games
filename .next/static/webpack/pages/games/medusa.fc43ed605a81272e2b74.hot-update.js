"use strict";
self["webpackHotUpdate_N_E"]("pages/games/medusa",{

/***/ "./pages/games/medusa/index.js":
/*!*************************************!*\
  !*** ./pages/games/medusa/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_NodeJs_Websites_Drink_Games_drink_games_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GameComponents_playerLeaderBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/GameComponents/playerLeaderBoard */ "./pages/components/GameComponents/playerLeaderBoard.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\NodeJs Websites\\Drink Games\\drink-games\\pages\\games\\medusa\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var medusa = function medusa() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      players = _useState[0],
      setPlayers = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      gameStarted = _useState2[0],
      setGameStarted = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      round = _useState3[0],
      setRound = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      playerName = _useState4[0],
      setPlayerName = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (router.query.gameStarted) {
      setPlayers(JSON.parse(router.query.players));
      setGameStarted(true);
    }
  }, [router]);

  function addPlayer(name) {
    //let r = players.push({"name": name, "shots": 0})
    //setPlayers();
    setPlayers([].concat((0,D_NodeJs_Websites_Drink_Games_drink_games_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(players), [{
      "name": name,
      "shots": 0
    }]));
  }

  function removePlayer(index) {
    if (index == 0 && Object.keys(players).length <= 1) {
      setPlayers([]);
    } else {
      var nr = players.filter(function (item) {
        return item.name !== index;
      });
      setPlayers(nr);
    }
  }

  function startGame() {
    router.query.players = JSON.stringify(players);
    router.query.gameStarted = "true";
    router.push(router);
    setGameStarted(true);
  }

  function onTodoChange(e) {
    if (isNaN(+e)) return setPlayers(0);
    setPlayers(e);
  }

  var playerObject = players.map(function (e, index) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mt-5 flex flex-row gap-2 bg-yellow-400 justify-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "m-3 font-bold text-xl text-white",
        children: e.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return removePlayer(e.name);
        },
        className: "m-3 bg-red-500 text-white hover:bg-red-400 h-full w-20 cursor-pointer focus:outline-none",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "m-auto text-xl text-center text-white",
          children: "Remove"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: gameStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-2xl font-bold text-white",
        children: "Penis"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameComponents_playerLeaderBoard__WEBPACK_IMPORTED_MODULE_4__.default, {
        players: players
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "m-5 flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "(Read out Loud!)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-4xl font-bold",
        children: "Instructions:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Everyone sits around the table of shot glasses. Someone counts down from 3 to 1. Then everyone looks up at stares into another players eyes. If someone is staring back into another player's eyes both players shout \u201DMEDUSA!\u201D and both players drink a shot."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: "text-center w-full text-white text-xl font-bold",
        children: "Players:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "m-auto my-5 bg-yellow-400",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-row rounded-lg relative bg-transparent gap-1 m-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "font-bold text-xl text-white",
              children: "Player Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              onChange: function onChange(e) {
                return setPlayerName(e.target.value);
              },
              onKeyDown: function onKeyDown(e) {
                if (e.key === 'Enter') {
                  addPlayer(playerName);
                }
              },
              className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "font-bold text-xl text-white",
              children: "Add Player"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: function onClick() {
                if (playerName != null) addPlayer(playerName);
              },
              className: "m-auto bg-green-500 text-white hover:bg-green-400 h-full w-20 cursor-pointer focus:outline-none",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "m-auto text-2xl font-thin",
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return startGame();
        },
        className: "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-auto focus:outline-none",
        children: "Play!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, _this), playerObject]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_s(medusa, "ez31VcLPpV8sD6UvyHLbdteHp9s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (medusa);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZXMvbWVkdXNhLmZjNDNlZDYwNWE4MTI3MmUyYjc0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDV0gsK0NBQVEsQ0FBQyxFQUFELENBRG5CO0FBQUEsTUFDWkksT0FEWTtBQUFBLE1BQ0hDLFVBREc7O0FBQUEsbUJBRW1CTCwrQ0FBUSxDQUFDLEtBQUQsQ0FGM0I7QUFBQSxNQUVaTSxXQUZZO0FBQUEsTUFFQ0MsY0FGRDs7QUFBQSxtQkFHT1AsK0NBQVEsQ0FBQyxLQUFELENBSGY7QUFBQSxNQUdaUSxLQUhZO0FBQUEsTUFHTEMsUUFISzs7QUFBQSxtQkFJaUJULCtDQUFRLEVBSnpCO0FBQUEsTUFJWlUsVUFKWTtBQUFBLE1BSUFDLGFBSkE7O0FBS25CLE1BQU1DLE1BQU0sR0FBR1gsc0RBQVMsRUFBeEI7QUFFQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR2EsTUFBTSxDQUFDQyxLQUFQLENBQWFQLFdBQWhCLEVBQTRCO0FBQzFCRCxNQUFBQSxVQUFVLENBQUNTLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxNQUFNLENBQUNDLEtBQVAsQ0FBYVQsT0FBeEIsQ0FBRCxDQUFWO0FBQ0FHLE1BQUFBLGNBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDSyxNQUFELENBTE0sQ0FBVDs7QUFRQSxXQUFTSSxTQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN4QjtBQUNBO0FBQ0FaLElBQUFBLFVBQVUsdUpBQUtELE9BQUwsSUFBYztBQUFDLGNBQVFhLElBQVQ7QUFBZSxlQUFTO0FBQXhCLEtBQWQsR0FBVjtBQUNEOztBQUVELFdBQVNDLFlBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCLFFBQUdBLEtBQUssSUFBSSxD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QUEsZUFBN0I7QUFBbUUsdUJBQVMsRUFBRSxtQkFBQ0wsQ0FBRCxFQUFLO0FBQUMsb0JBQUdBLENBQUMsQ0FBQ00sR0FBRixLQUFVLE9BQWIsRUFBcUI7QUFBQ3BCLGtCQUFBQSxTQUFTLENBQUNOLFVBQUQsQ0FBVDtBQUFzQjtBQUFDLGVBQWpJO0FBQW1JLHVCQUFTLEVBQUM7QUFBN0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFNRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQVEscUJBQU8sRUFBRSxtQkFBTTtBQUFDLG9CQUFHQSxVQUFVLElBQUksSUFBakIsRUFBdUJNLFNBQVMsQ0FBQ04sVUFBRCxDQUFUO0FBQXNCLGVBQXJFO0FBQXVFLHVCQUFTLEVBQUMsaUdBQWpGO0FBQUEscUNBQ0U7QUFBTSx5QkFBUyxFQUFDLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQXVCRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNZ0IsU0FBUyxFQUFmO0FBQUEsU0FBakI7QUFBb0MsaUJBQVMsRUFBQyxpSkFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkYsRUF5QkNNLFlBekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBLG1CQURGO0FBdUNELENBaEdEOztHQUFNN0I7VUFLV0Y7OztBQThGakIsK0RBQWVFLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZXMvbWVkdXNhL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUGxheWVyTGVhZGVyQm9hcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HYW1lQ29tcG9uZW50cy9wbGF5ZXJMZWFkZXJCb2FyZCc7XHJcblxyXG5cclxuY29uc3QgbWVkdXNhID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ2FtZVN0YXJ0ZWQsIHNldEdhbWVTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcm91bmQsIHNldFJvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGxheWVyTmFtZSwgc2V0UGxheWVyTmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihyb3V0ZXIucXVlcnkuZ2FtZVN0YXJ0ZWQpe1xyXG4gICAgICBzZXRQbGF5ZXJzKEpTT04ucGFyc2Uocm91dGVyLnF1ZXJ5LnBsYXllcnMpKVxyXG4gICAgICBzZXRHYW1lU3RhcnRlZCh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXJdKVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gYWRkUGxheWVyIChuYW1lKSB7XHJcbiAgICAvL2xldCByID0gcGxheWVycy5wdXNoKHtcIm5hbWVcIjogbmFtZSwgXCJzaG90c1wiOiAwfSlcclxuICAgIC8vc2V0UGxheWVycygpO1xyXG4gICAgc2V0UGxheWVycyhbLi4ucGxheWVycywge1wibmFtZVwiOiBuYW1lLCBcInNob3RzXCI6IDB9XSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVBsYXllciAoaW5kZXgpIHtcclxuICAgIGlmKGluZGV4ID09IDAgJiYgT2JqZWN0LmtleXMocGxheWVycykubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgc2V0UGxheWVycyhbXSlcclxuICAgIH1lbHNle1xyXG4gICAgICBsZXQgbnIgPSBwbGF5ZXJzLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSAhPT0gaW5kZXgpXHJcbiAgICAgIHNldFBsYXllcnMobnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCl7XHJcbiAgICByb3V0ZXIucXVlcnkucGxheWVycyA9IEpTT04uc3RyaW5naWZ5KHBsYXllcnMpXHJcbiAgICByb3V0ZXIucXVlcnkuZ2FtZVN0YXJ0ZWQgPSBcInRydWVcIlxyXG4gICAgcm91dGVyLnB1c2gocm91dGVyKVxyXG4gICAgc2V0R2FtZVN0YXJ0ZWQodHJ1ZSlcclxuICB9XHJcbiBcclxuXHJcbiAgZnVuY3Rpb24gb25Ub2RvQ2hhbmdlKGUpIHtcclxuICAgIGlmKGlzTmFOKCtlKSkgcmV0dXJuIHNldFBsYXllcnMoMCk7XHJcbiAgICBzZXRQbGF5ZXJzKGUpXHJcbiAgfVxyXG5cclxuICBcclxuICBjb25zdCBwbGF5ZXJPYmplY3QgPSBwbGF5ZXJzLm1hcCgoZSwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZsZXggZmxleC1yb3cgZ2FwLTIgYmcteWVsbG93LTQwMCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTMgZm9udC1ib2xkIHRleHQteGwgdGV4dC13aGl0ZVwiPntlLm5hbWV9PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiByZW1vdmVQbGF5ZXIoZS5uYW1lKX0gY2xhc3NOYW1lPVwibS0zIGJnLXJlZC01MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1yZWQtNDAwIGgtZnVsbCB3LTIwIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibS1hdXRvIHRleHQteGwgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlJlbW92ZTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0pXHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHtnYW1lU3RhcnRlZCA/XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5QZW5pczwvcD5cclxuICAgICAgPFBsYXllckxlYWRlckJvYXJkIHBsYXllcnM9e3BsYXllcnN9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgOlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLTUgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8cD4oUmVhZCBvdXQgTG91ZCEpPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5JbnN0cnVjdGlvbnM6PC9wPlxyXG4gICAgICA8cD5FdmVyeW9uZSBzaXRzIGFyb3VuZCB0aGUgdGFibGUgb2Ygc2hvdCBnbGFzc2VzLiBTb21lb25lIGNvdW50cyBkb3duIGZyb20gMyB0byAxLiBUaGVuIGV2ZXJ5b25lIGxvb2tzIHVwIGF0IHN0YXJlcyBpbnRvIGFub3RoZXIgcGxheWVycyBleWVzLiBJZiBzb21lb25lIGlzIHN0YXJpbmcgYmFjayBpbnRvIGFub3RoZXIgcGxheWVyJ3MgZXllcyBib3RoIHBsYXllcnMgc2hvdXQg4oCdTUVEVVNBIeKAnSBhbmQgYm90aCBwbGF5ZXJzIGRyaW5rIGEgc2hvdC48L3A+XHJcblxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsIHRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGRcIj5QbGF5ZXJzOjwvbGFiZWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIG15LTUgYmcteWVsbG93LTQwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyByb3VuZGVkLWxnIHJlbGF0aXZlIGJnLXRyYW5zcGFyZW50IGdhcC0xIG0tMlwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCB0ZXh0LXdoaXRlXCI+UGxheWVyIE5hbWU6PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldFBsYXllck5hbWUoZS50YXJnZXQudmFsdWUpfSBvbktleURvd249eyhlKT0+e2lmKGUua2V5ID09PSAnRW50ZXInKXthZGRQbGF5ZXIocGxheWVyTmFtZSl9fX0gY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCB0ZXh0LXdoaXRlXCI+QWRkIFBsYXllcjwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7aWYocGxheWVyTmFtZSAhPSBudWxsKSBhZGRQbGF5ZXIocGxheWVyTmFtZSl9fSBjbGFzc05hbWU9XCJtLWF1dG8gYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JlZW4tNDAwIGgtZnVsbCB3LTIwIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tYXV0byB0ZXh0LTJ4bCBmb250LXRoaW5cIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0YXJ0R2FtZSgpfSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyLWItNCBib3JkZXItYmx1ZS03MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWQgbS1hdXRvIGZvY3VzOm91dGxpbmUtbm9uZVwiPlBsYXkhPC9idXR0b24+XHJcbiAgICBcclxuICAgIHtwbGF5ZXJPYmplY3R9XHJcbiAgICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVkdXNhIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUGxheWVyTGVhZGVyQm9hcmQiLCJtZWR1c2EiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsImdhbWVTdGFydGVkIiwic2V0R2FtZVN0YXJ0ZWQiLCJyb3VuZCIsInNldFJvdW5kIiwicGxheWVyTmFtZSIsInNldFBsYXllck5hbWUiLCJyb3V0ZXIiLCJxdWVyeSIsIkpTT04iLCJwYXJzZSIsImFkZFBsYXllciIsIm5hbWUiLCJyZW1vdmVQbGF5ZXIiLCJpbmRleCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJuciIsImZpbHRlciIsIml0ZW0iLCJzdGFydEdhbWUiLCJzdHJpbmdpZnkiLCJwdXNoIiwib25Ub2RvQ2hhbmdlIiwiZSIsImlzTmFOIiwicGxheWVyT2JqZWN0IiwibWFwIiwidGFyZ2V0IiwidmFsdWUiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9