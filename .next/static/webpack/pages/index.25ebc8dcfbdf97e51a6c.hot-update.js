"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _HeaderItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderItem */ "./pages/components/HeaderItem.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\NodeJs Websites\\Drink Games\\drink-games\\pages\\components\\Header.js",
    _s2 = $RefreshSig$();






function Header() {
  _s2();

  var _s = $RefreshSig$(),
      _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([{
    name: "A"
  }, {
    name: "B"
  }]),
      searchResults = _useState3[0],
      setSearchResults = _useState3[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (search) {
      ref.current.focus();
    }

    ;
  }, [search]);

  var useClickOutside = function useClickOutside(handler) {
    _s();

    var domNode = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
      var maybeHandler = function maybeHandler(event) {
        if (domNode.current && !domNode.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);
      return function () {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
    return domNode;
  };

  _s(useClickOutside, "oMeNP8Y0LBP7p8Tz/f0Pw3T8oxI=");

  var domNode = useClickOutside(function () {
    setSearch(false);
  });
  var renderedSearch = searchResults.map(function (e, index) {
    var className = "";

    if (index % 2 == 0) {
      className = "bg-red-300";
    } else {
      className = "bg-red-400";
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: className,
      children: e.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "flex flex-col sm:flex-row m-5 justify-between\r items-center h-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-grow justify-evenly max-w-2xl",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__.default, {
              title: "Home",
              Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.HomeIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/explore",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__.default, {
              title: "Explore",
              Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.TemplateIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/account",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__.default, {
              title: "Account",
              Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.UserIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "outline-none focus:outline-none",
          onClick: function onClick() {
            if (search) {
              setSearch(true);
            }
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Search",
            Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "logo.png",
            className: "object-contain",
            width: 200,
            height: 200
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: domNode,
        className: "flex flex-col lg:w-3/12 md:w-100 m-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: ref,
          placeholder: "Search Here...",
          type: "text",
          onChange: function onChange(e) {
            return setSearchQuery(e.target.value);
          },
          className: "shadow appearance-none border rounded-b-none rounded-t-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), searchResults.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: renderedSearch
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/search?s=" + searchQuery,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white font-bold text-lg hover:text-gray-400 bg-yellow-300 rounded-b-lg text-center",
                children: "Show More!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 55
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Header, "CHlW9Q77VnyAQqE0QcRrvZidIwc=", false, function () {
  return [useClickOutside];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjVlYmM4ZGNmYmRmOTdlNTFhNmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7O0FBRUEsU0FBU1UsTUFBVCxHQUFrQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsa0JBQ1lGLCtDQUFRLENBQUMsS0FBRCxDQURwQjtBQUFBLE1BQ1RHLE1BRFM7QUFBQSxNQUNEQyxTQURDOztBQUFBLG1CQUVzQkosK0NBQVEsRUFGOUI7QUFBQSxNQUVUSyxXQUZTO0FBQUEsTUFFSUMsY0FGSjs7QUFBQSxtQkFHMEJOLCtDQUFRLENBQUMsQ0FBQztBQUFDTyxJQUFBQSxJQUFJLEVBQUU7QUFBUCxHQUFELEVBQWM7QUFBQ0EsSUFBQUEsSUFBSSxFQUFFO0FBQVAsR0FBZCxDQUFELENBSGxDO0FBQUEsTUFHVEMsYUFIUztBQUFBLE1BR01DLGdCQUhOOztBQUtoQixNQUFNQyxHQUFHLEdBQUdYLDZDQUFNLEVBQWxCO0FBQ0FFLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdFLE1BQUgsRUFBVTtBQUNSTyxNQUFBQSxHQUFHLENBQUNDLE9BQUosQ0FBWUMsS0FBWjtBQUNEOztBQUFBO0FBQ0YsR0FKUSxFQUlQLENBQUNULE1BQUQsQ0FKTyxDQUFUOztBQVFBLE1BQUlVLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQUE7O0FBQ2pDLFFBQUlDLE9BQU8sR0FBR2hCLDZDQUFNLEVBQXBCO0FBRUFFLElBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNoQixVQUFJZSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVU7QUFDM0IsWUFBR0YsT0FBTyxDQUFDSixPQUFSLElBQW1CLENBQUNJLE9BQU8sQ0FBQ0osT0FBUixDQUFnQk8sUUFBaEIsQ0FBeUJELEtBQUssQ0FBQ0UsTUFBL0IsQ0FBdkIsRUFBOEQ7QUFDNURM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QTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFxQkNTLE1BQU0saUJBQ0w7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRVksT0FBVjtBQUFtQixpQkFBUyxFQUFDLHlDQUE3QjtBQUFBLGdDQUNFO0FBQU8sYUFBRyxFQUFFTCxHQUFaO0FBQWlCLHFCQUFXLEVBQUMsZ0JBQTdCO0FBQThDLGNBQUksRUFBQyxNQUFuRDtBQUEwRCxrQkFBUSxFQUFFLGtCQUFDZSxDQUFEO0FBQUEsbUJBQU9uQixjQUFjLENBQUNtQixDQUFDLENBQUNOLE1BQUYsQ0FBU1MsS0FBVixDQUFyQjtBQUFBLFdBQXBFO0FBQTJHLG1CQUFTLEVBQUM7QUFBckg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUdJcEIsYUFBYSxDQUFDcUIsTUFBZCxHQUF1QixDQUF2QixpQkFDQTtBQUFBLGtDQUNFO0FBQUEsc0JBQ0dOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBRSxlQUFlbEIsV0FBM0I7QUFBQSxtQ0FBd0M7QUFBQSxxQ0FDdEM7QUFBRyx5QkFBUyxFQUFDLHlGQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRjtBQUFBLGtCQURGO0FBMENEOztJQTFGUUg7VUFnQ09XOzs7S0FoQ1BYO0FBNEZULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtcclxuICBIb21lSWNvbixcclxuICBTZWFyY2hJY29uLFxyXG4gIFVzZXJJY29uLFxyXG4gIFRlbXBsYXRlSWNvbixcclxuICBNZW51QWx0MUljb25cclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCJcclxuaW1wb3J0IEhlYWRlckl0ZW0gZnJvbSBcIi4vSGVhZGVySXRlbVwiXHJcbmltcG9ydCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW3tuYW1lOiBcIkFcIn0sIHtuYW1lOiBcIkJcIn1dKVxyXG4gIFxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihzZWFyY2gpe1xyXG4gICAgICByZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfTtcclxuICB9LFtzZWFyY2hdKVxyXG5cclxuICBcclxuICBcclxuICBsZXQgdXNlQ2xpY2tPdXRzaWRlID0gKGhhbmRsZXIpID0+IHtcclxuICAgIGxldCBkb21Ob2RlID0gdXNlUmVmKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtYXliZUhhbmRsZXIgPSAoZXZlbnQpPT4ge1xyXG4gICAgICBpZihkb21Ob2RlLmN1cnJlbnQgJiYgIWRvbU5vZGUuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKXtcclxuICAgICAgICBoYW5kbGVyKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtYXliZUhhbmRsZXIpXHJcblxyXG4gICAgcmV0dXJuICgpID0+e1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1heWJlSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gZG9tTm9kZVxyXG4gIH1cclxuXHJcbiAgbGV0IGRvbU5vZGUgPSB1c2VDbGlja091dHNpZGUoKCk9PntcclxuICAgICAgc2V0U2VhcmNoKGZhbHNlKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHJlbmRlcmVkU2VhcmNoID0gc2VhcmNoUmVzdWx0cy5tYXAoKGUsIGluZGV4KT0+e1xyXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiXCJcclxuICAgIGlmKGluZGV4ICUgMiA9PSAwKXtcclxuICAgICAgY2xhc3NOYW1lID0gXCJiZy1yZWQtMzAwXCJcclxuICAgIH1lbHNle1xyXG4gICAgICBjbGFzc05hbWUgPSBcImJnLXJlZC00MDBcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntlLm5hbWV9PC9saT5cclxuICAgIClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBtLTUganVzdGlmeS1iZXR3ZWVuXHJcbiAgICBpdGVtcy1jZW50ZXIgaC1hdXRvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWdyb3cganVzdGlmeS1ldmVubHkgbWF4LXctMnhsXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5cclxuICAgICAgICAgIDxIZWFkZXJJdGVtIHRpdGxlPVwiSG9tZVwiIEljb249e0hvbWVJY29ufS8+XHJcbiAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2V4cGxvcmVcIj48YT5cclxuICAgICAgICAgIDxIZWFkZXJJdGVtIHRpdGxlPVwiRXhwbG9yZVwiIEljb249e1RlbXBsYXRlSWNvbn0vPlxyXG4gICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50XCI+PGE+XHJcbiAgICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIkFjY291bnRcIiBJY29uPXtVc2VySWNvbn0vPlxyXG4gICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCIgb25DbGljaz17KCk9PiB7aWYoc2VhcmNoKXtzZXRTZWFyY2godHJ1ZSl9fX0+XHJcbiAgICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIlNlYXJjaFwiIEljb249e1NlYXJjaEljb259Lz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+XHJcbiAgICAgICAgPGltZyBzcmM9XCJsb2dvLnBuZ1wiIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9Lz5cclxuICAgICAgPC9hPjwvTGluaz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAge3NlYXJjaCAmJlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgcmVmPXtkb21Ob2RlfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOnctMy8xMiBtZDp3LTEwMCBtLWF1dG9cIj5cclxuICAgICAgICAgIDxpbnB1dCByZWY9e3JlZn0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggSGVyZS4uLlwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQtYi1ub25lIHJvdW5kZWQtdC1sZyB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIi8+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJlZFNlYXJjaH1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NlYXJjaD9zPVwiICsgc2VhcmNoUXVlcnl9PjxhPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZyBob3Zlcjp0ZXh0LWdyYXktNDAwIGJnLXllbGxvdy0zMDAgcm91bmRlZC1iLWxnIHRleHQtY2VudGVyXCI+U2hvdyBNb3JlITwvcD5cclxuICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwibmFtZXMiOlsiTGluayIsIkhvbWVJY29uIiwiU2VhcmNoSWNvbiIsIlVzZXJJY29uIiwiVGVtcGxhdGVJY29uIiwiTWVudUFsdDFJY29uIiwiSGVhZGVySXRlbSIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIm5hbWUiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsInJlZiIsImN1cnJlbnQiLCJmb2N1cyIsInVzZUNsaWNrT3V0c2lkZSIsImhhbmRsZXIiLCJkb21Ob2RlIiwibWF5YmVIYW5kbGVyIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXJlZFNlYXJjaCIsIm1hcCIsImUiLCJpbmRleCIsImNsYXNzTmFtZSIsInZhbHVlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==