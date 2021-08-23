"use strict";
(() => {
var exports = {};
exports.id = "pages/games/medusa";
exports.ids = ["pages/games/medusa"];
exports.modules = {

/***/ "./pages/components/GameComponents/playerLeaderBoard.js":
/*!**************************************************************!*\
  !*** ./pages/components/GameComponents/playerLeaderBoard.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\NodeJs Websites\\Drink Games\\drink-games\\pages\\components\\GameComponents\\playerLeaderBoard.js";

function PlayerLeaderBoard({
  players
}) {
  console.log(players);
  const playerLeaderBoard = players.map((e, index) => {
    let className = "";

    if (index % 2 == 0) {
      className = "flex flex-row gap-2 bg-yellow-400 justify-between group hover:bg-yellow-500";
    } else {
      className = "flex flex-row gap-2 bg-yellow-200 justify-between group hover:bg-yellow-500";
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: className,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "m-3 font-bold text-xl text-gray-500 group-hover:text-white",
        children: e.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-row gap-2 bg-gray-700 rounded-md",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "m-3 text-xl  text-white",
          children: "Shots: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "m-3 text-xl  text-white",
          children: e.shots
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: playerLeaderBoard
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerLeaderBoard);

/***/ }),

/***/ "./pages/games/medusa/index.js":
/*!*************************************!*\
  !*** ./pages/games/medusa/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GameComponents_playerLeaderBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GameComponents/playerLeaderBoard */ "./pages/components/GameComponents/playerLeaderBoard.js");


var _jsxFileName = "D:\\NodeJs Websites\\Drink Games\\drink-games\\pages\\games\\medusa\\index.js";




const medusa = () => {
  const {
    0: players,
    1: setPlayers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: gameStarted,
    1: setGameStarted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: round,
    1: setRound
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: playerName,
    1: setPlayerName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (router.query.gameStarted) {
      setPlayers(JSON.parse(router.query.players));
      setGameStarted(true);
    }
  }, [router]);

  function addPlayer(name) {
    //let r = players.push({"name": name, "shots": 0})
    //setPlayers();
    setPlayers([...players, {
      "name": name,
      "shots": 0
    }]);
  }

  function removePlayer(index) {
    if (index == 0 && Object.keys(players).length <= 1) {
      setPlayers([]);
    } else {
      let nr = players.filter(item => item.name !== index);
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

  const playerObject = players.map((e, index) => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mt-5 flex flex-row gap-2 bg-yellow-400 justify-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "m-3 font-bold text-xl text-white",
        children: e.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => removePlayer(e.name),
        className: "m-3 bg-red-500 text-white hover:bg-red-400 h-full w-20 cursor-pointer focus:outline-none",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "m-auto text-xl text-center text-white",
          children: "Remove"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined);
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameComponents_playerLeaderBoard__WEBPACK_IMPORTED_MODULE_3__.default, {
        players: players
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "m-5 flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "(Read out Loud!)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-4xl font-bold",
        children: "Instructions:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Everyone sits around the table of shot glasses. Someone counts down from 3 to 1. Then everyone looks up at stares into another players eyes. If someone is staring back into another player's eyes both players shout \u201DMEDUSA!\u201D and both players drink a shot."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: "text-center w-full text-white text-xl font-bold",
        children: "Players:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              onChange: e => setPlayerName(e.target.value),
              onKeyDown: e => {
                if (e.key === 'Enter') {
                  addPlayer(playerName);
                }
              },
              className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "font-bold text-xl text-white",
              children: "Add Player"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
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
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => startGame(),
        className: "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-auto focus:outline-none",
        children: "Play!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, undefined), playerObject]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (medusa);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/games/medusa/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVCQUZGLGVBTUU7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxvQ0FDRTtBQUFHLHVCQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFRLHFCQUFPLEVBQUUsTUFBTTtBQUFDLG9CQUFHQSxVQUFVLElBQUksSUFBakIsRUFBdUJNLFNBQVMsQ0FBQ04sVUFBRCxDQUFUO0FBQXNCLGVBQXJFO0FBQXVFLHVCQUFTLEVBQUMsaUdBQWpGO0FBQUEscUNBQ0U7QUFBTSx5QkFBUyxFQUFDLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUF1QkU7QUFBUSxlQUFPLEVBQUUsTUFBTWMsU0FBUyxFQUFoQztBQUFvQyxpQkFBUyxFQUFDLGlKQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkYsRUF5QkNLLFlBekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBLG1CQURGO0FBdUNELENBaEdEOztBQW1HQSxpRUFBZXpCLE1BQWY7Ozs7Ozs7Ozs7QUN4R0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJpbmstZ2FtZXMvLi9wYWdlcy9jb21wb25lbnRzL0dhbWVDb21wb25lbnRzL3BsYXllckxlYWRlckJvYXJkLmpzIiwid2VicGFjazovL2RyaW5rLWdhbWVzLy4vcGFnZXMvZ2FtZXMvbWVkdXNhL2luZGV4LmpzIiwid2VicGFjazovL2RyaW5rLWdhbWVzL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kcmluay1nYW1lcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZHJpbmstZ2FtZXMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBQbGF5ZXJMZWFkZXJCb2FyZCh7cGxheWVyc30pIHtcclxuICBjb25zb2xlLmxvZyhwbGF5ZXJzKVxyXG4gIFxyXG4gIGNvbnN0IHBsYXllckxlYWRlckJvYXJkID0gcGxheWVycy5tYXAoKGUsIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJcIlxyXG4gICAgaWYoaW5kZXggJSAyID09IDApe1xyXG4gICAgICBjbGFzc05hbWUgPSBcImZsZXggZmxleC1yb3cgZ2FwLTIgYmcteWVsbG93LTQwMCBqdXN0aWZ5LWJldHdlZW4gZ3JvdXAgaG92ZXI6YmcteWVsbG93LTUwMFwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgY2xhc3NOYW1lID0gXCJmbGV4IGZsZXgtcm93IGdhcC0yIGJnLXllbGxvdy0yMDAganVzdGlmeS1iZXR3ZWVuIGdyb3VwIGhvdmVyOmJnLXllbGxvdy01MDBcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0zIGZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtZ3JheS01MDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZVwiPntlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC0yIGJnLWdyYXktNzAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0zIHRleHQteGwgIHRleHQtd2hpdGVcIj5TaG90czogPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTMgdGV4dC14bCAgdGV4dC13aGl0ZVwiPntlLnNob3RzfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3BsYXllckxlYWRlckJvYXJkfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckxlYWRlckJvYXJkIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBQbGF5ZXJMZWFkZXJCb2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dhbWVDb21wb25lbnRzL3BsYXllckxlYWRlckJvYXJkJztcclxuXHJcblxyXG5jb25zdCBtZWR1c2EgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtnYW1lU3RhcnRlZCwgc2V0R2FtZVN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyb3VuZCwgc2V0Um91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwbGF5ZXJOYW1lLCBzZXRQbGF5ZXJOYW1lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHJvdXRlci5xdWVyeS5nYW1lU3RhcnRlZCl7XHJcbiAgICAgIHNldFBsYXllcnMoSlNPTi5wYXJzZShyb3V0ZXIucXVlcnkucGxheWVycykpXHJcbiAgICAgIHNldEdhbWVTdGFydGVkKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlcl0pXHJcblxyXG5cclxuICBmdW5jdGlvbiBhZGRQbGF5ZXIgKG5hbWUpIHtcclxuICAgIC8vbGV0IHIgPSBwbGF5ZXJzLnB1c2goe1wibmFtZVwiOiBuYW1lLCBcInNob3RzXCI6IDB9KVxyXG4gICAgLy9zZXRQbGF5ZXJzKCk7XHJcbiAgICBzZXRQbGF5ZXJzKFsuLi5wbGF5ZXJzLCB7XCJuYW1lXCI6IG5hbWUsIFwic2hvdHNcIjogMH1dKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlUGxheWVyIChpbmRleCkge1xyXG4gICAgaWYoaW5kZXggPT0gMCAmJiBPYmplY3Qua2V5cyhwbGF5ZXJzKS5sZW5ndGggPD0gMSkge1xyXG4gICAgICBzZXRQbGF5ZXJzKFtdKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxldCBuciA9IHBsYXllcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uYW1lICE9PSBpbmRleClcclxuICAgICAgc2V0UGxheWVycyhucik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKXtcclxuICAgIHJvdXRlci5xdWVyeS5wbGF5ZXJzID0gSlNPTi5zdHJpbmdpZnkocGxheWVycylcclxuICAgIHJvdXRlci5xdWVyeS5nYW1lU3RhcnRlZCA9IFwidHJ1ZVwiXHJcbiAgICByb3V0ZXIucHVzaChyb3V0ZXIpXHJcbiAgICBzZXRHYW1lU3RhcnRlZCh0cnVlKVxyXG4gIH1cclxuIFxyXG5cclxuICBmdW5jdGlvbiBvblRvZG9DaGFuZ2UoZSkge1xyXG4gICAgaWYoaXNOYU4oK2UpKSByZXR1cm4gc2V0UGxheWVycygwKTtcclxuICAgIHNldFBsYXllcnMoZSlcclxuICB9XHJcblxyXG4gIFxyXG4gIGNvbnN0IHBsYXllck9iamVjdCA9IHBsYXllcnMubWFwKChlLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmxleCBmbGV4LXJvdyBnYXAtMiBiZy15ZWxsb3ctNDAwIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMyBmb250LWJvbGQgdGV4dC14bCB0ZXh0LXdoaXRlXCI+e2UubmFtZX08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHJlbW92ZVBsYXllcihlLm5hbWUpfSBjbGFzc05hbWU9XCJtLTMgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXJlZC00MDAgaC1mdWxsIHctMjAgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLWF1dG8gdGV4dC14bCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+UmVtb3ZlPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSlcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAge2dhbWVTdGFydGVkID9cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlBlbmlzPC9wPlxyXG4gICAgICA8UGxheWVyTGVhZGVyQm9hcmQgcGxheWVycz17cGxheWVyc30vPlxyXG4gICAgPC9kaXY+XHJcbiAgICA6XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxwPihSZWFkIG91dCBMb3VkISk8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZFwiPkluc3RydWN0aW9uczo8L3A+XHJcbiAgICAgIDxwPkV2ZXJ5b25lIHNpdHMgYXJvdW5kIHRoZSB0YWJsZSBvZiBzaG90IGdsYXNzZXMuIFNvbWVvbmUgY291bnRzIGRvd24gZnJvbSAzIHRvIDEuIFRoZW4gZXZlcnlvbmUgbG9va3MgdXAgYXQgc3RhcmVzIGludG8gYW5vdGhlciBwbGF5ZXJzIGV5ZXMuIElmIHNvbWVvbmUgaXMgc3RhcmluZyBiYWNrIGludG8gYW5vdGhlciBwbGF5ZXIncyBleWVzIGJvdGggcGxheWVycyBzaG91dCDigJ1NRURVU0Eh4oCdIGFuZCBib3RoIHBsYXllcnMgZHJpbmsgYSBzaG90LjwvcD5cclxuXHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgdGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtYm9sZFwiPlBsYXllcnM6PC9sYWJlbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gbXktNSBiZy15ZWxsb3ctNDAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHJvdW5kZWQtbGcgcmVsYXRpdmUgYmctdHJhbnNwYXJlbnQgZ2FwLTEgbS0yXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtd2hpdGVcIj5QbGF5ZXIgTmFtZTo8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGxheWVyTmFtZShlLnRhcmdldC52YWx1ZSl9IG9uS2V5RG93bj17KGUpPT57aWYoZS5rZXkgPT09ICdFbnRlcicpe2FkZFBsYXllcihwbGF5ZXJOYW1lKX19fSBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtd2hpdGVcIj5BZGQgUGxheWVyPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtpZihwbGF5ZXJOYW1lICE9IG51bGwpIGFkZFBsYXllcihwbGF5ZXJOYW1lKX19IGNsYXNzTmFtZT1cIm0tYXV0byBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmVlbi00MDAgaC1mdWxsIHctMjAgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibS1hdXRvIHRleHQtMnhsIGZvbnQtdGhpblwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc3RhcnRHYW1lKCl9IGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZCBtLWF1dG8gZm9jdXM6b3V0bGluZS1ub25lXCI+UGxheSE8L2J1dHRvbj5cclxuICAgIFxyXG4gICAge3BsYXllck9iamVjdH1cclxuICAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICB9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZWR1c2EiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlBsYXllckxlYWRlckJvYXJkIiwicGxheWVycyIsImNvbnNvbGUiLCJsb2ciLCJwbGF5ZXJMZWFkZXJCb2FyZCIsIm1hcCIsImUiLCJpbmRleCIsImNsYXNzTmFtZSIsIm5hbWUiLCJzaG90cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwibWVkdXNhIiwic2V0UGxheWVycyIsImdhbWVTdGFydGVkIiwic2V0R2FtZVN0YXJ0ZWQiLCJyb3VuZCIsInNldFJvdW5kIiwicGxheWVyTmFtZSIsInNldFBsYXllck5hbWUiLCJyb3V0ZXIiLCJxdWVyeSIsIkpTT04iLCJwYXJzZSIsImFkZFBsYXllciIsInJlbW92ZVBsYXllciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJuciIsImZpbHRlciIsIml0ZW0iLCJzdGFydEdhbWUiLCJzdHJpbmdpZnkiLCJwdXNoIiwib25Ub2RvQ2hhbmdlIiwiaXNOYU4iLCJwbGF5ZXJPYmplY3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=