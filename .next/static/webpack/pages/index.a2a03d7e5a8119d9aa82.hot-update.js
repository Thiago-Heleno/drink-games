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
          ref: domNode,
          className: "outline-none focus:outline-none",
          onClick: function onClick() {
            setSearch(!search);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJhMDNkN2U1YTgxMTlkOWFhODIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7O0FBRUEsU0FBU1UsTUFBVCxHQUFrQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsa0JBQ1lGLCtDQUFRLENBQUMsS0FBRCxDQURwQjtBQUFBLE1BQ1RHLE1BRFM7QUFBQSxNQUNEQyxTQURDOztBQUFBLG1CQUVzQkosK0NBQVEsRUFGOUI7QUFBQSxNQUVUSyxXQUZTO0FBQUEsTUFFSUMsY0FGSjs7QUFBQSxtQkFHMEJOLCtDQUFRLENBQUMsQ0FBQztBQUFDTyxJQUFBQSxJQUFJLEVBQUU7QUFBUCxHQUFELEVBQWM7QUFBQ0EsSUFBQUEsSUFBSSxFQUFFO0FBQVAsR0FBZCxDQUFELENBSGxDO0FBQUEsTUFHVEMsYUFIUztBQUFBLE1BR01DLGdCQUhOOztBQUtoQixNQUFNQyxHQUFHLEdBQUdYLDZDQUFNLEVBQWxCO0FBQ0FFLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdFLE1BQUgsRUFBVTtBQUNSTyxNQUFBQSxHQUFHLENBQUNDLE9BQUosQ0FBWUMsS0FBWjtBQUNEOztBQUFBO0FBQ0YsR0FKUSxFQUlQLENBQUNULE1BQUQsQ0FKTyxDQUFUOztBQVFBLE1BQUlVLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQUE7O0FBQ2pDLFFBQUlDLE9BQU8sR0FBR2hCLDZDQUFNLEVBQXBCO0FBRUFFLElBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNoQixVQUFJZSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVU7QUFDM0IsWUFBR0YsT0FBTyxDQUFDSixPQUFSLElBQW1CLENBQUNJLE9BQU8sQ0FBQ0osT0FBUixDQUFnQk8sUUFBaEIsQ0FBeUJELEtBQUssQ0FBQ0UsTUFBL0IsQ0FBdkIsRUFBOEQ7QUFDNURM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QUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxFQXFCQ1MsTUFBTSxpQkFDTDtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFWSxPQUFWO0FBQW1CLGlCQUFTLEVBQUMseUNBQTdCO0FBQUEsZ0NBQ0U7QUFBTyxhQUFHLEVBQUVMLEdBQVo7QUFBaUIscUJBQVcsRUFBQyxnQkFBN0I7QUFBOEMsY0FBSSxFQUFDLE1BQW5EO0FBQTBELGtCQUFRLEVBQUUsa0JBQUNlLENBQUQ7QUFBQSxtQkFBT25CLGNBQWMsQ0FBQ21CLENBQUMsQ0FBQ04sTUFBRixDQUFTUyxLQUFWLENBQXJCO0FBQUEsV0FBcEU7QUFBMkcsbUJBQVMsRUFBQztBQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBR0lwQixhQUFhLENBQUNxQixNQUFkLEdBQXVCLENBQXZCLGlCQUNBO0FBQUEsa0NBQ0U7QUFBQSxzQkFDR047QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFFLGVBQWVsQixXQUEzQjtBQUFBLG1DQUF3QztBQUFBLHFDQUN0QztBQUFHLHlCQUFTLEVBQUMseUZBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUEsa0JBREY7QUEwQ0Q7O0lBMUZRSDtVQWdDT1c7OztLQWhDUFg7QUE0RlQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1xyXG4gIEhvbWVJY29uLFxyXG4gIFNlYXJjaEljb24sXHJcbiAgVXNlckljb24sXHJcbiAgVGVtcGxhdGVJY29uLFxyXG4gIE1lbnVBbHQxSWNvblxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIlxyXG5pbXBvcnQgSGVhZGVySXRlbSBmcm9tIFwiLi9IZWFkZXJJdGVtXCJcclxuaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbe25hbWU6IFwiQVwifSwge25hbWU6IFwiQlwifV0pXHJcbiAgXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHNlYXJjaCl7XHJcbiAgICAgIHJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9O1xyXG4gIH0sW3NlYXJjaF0pXHJcblxyXG4gIFxyXG4gIFxyXG4gIGxldCB1c2VDbGlja091dHNpZGUgPSAoaGFuZGxlcikgPT4ge1xyXG4gICAgbGV0IGRvbU5vZGUgPSB1c2VSZWYoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1heWJlSGFuZGxlciA9IChldmVudCk9PiB7XHJcbiAgICAgIGlmKGRvbU5vZGUuY3VycmVudCAmJiAhZG9tTm9kZS5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpe1xyXG4gICAgICAgIGhhbmRsZXIoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1heWJlSGFuZGxlcilcclxuXHJcbiAgICByZXR1cm4gKCkgPT57XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbWF5YmVIYW5kbGVyKTtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBkb21Ob2RlXHJcbiAgfVxyXG5cclxuICBsZXQgZG9tTm9kZSA9IHVzZUNsaWNrT3V0c2lkZSgoKT0+e1xyXG4gICAgICBzZXRTZWFyY2goZmFsc2UpXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcmVuZGVyZWRTZWFyY2ggPSBzZWFyY2hSZXN1bHRzLm1hcCgoZSwgaW5kZXgpPT57XHJcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJcIlxyXG4gICAgaWYoaW5kZXggJSAyID09IDApe1xyXG4gICAgICBjbGFzc05hbWUgPSBcImJnLXJlZC0zMDBcIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNsYXNzTmFtZSA9IFwiYmctcmVkLTQwMFwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2UubmFtZX08L2xpPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IG0tNSBqdXN0aWZ5LWJldHdlZW5cclxuICAgIGl0ZW1zLWNlbnRlciBoLWF1dG9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWV2ZW5seSBtYXgtdy0yeGxcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPlxyXG4gICAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJIb21lXCIgSWNvbj17SG9tZUljb259Lz5cclxuICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwbG9yZVwiPjxhPlxyXG4gICAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJFeHBsb3JlXCIgSWNvbj17VGVtcGxhdGVJY29ufS8+XHJcbiAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIj48YT5cclxuICAgICAgICAgIDxIZWFkZXJJdGVtIHRpdGxlPVwiQWNjb3VudFwiIEljb249e1VzZXJJY29ufS8+XHJcbiAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICA8YnV0dG9uIHJlZj17ZG9tTm9kZX0gY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiIG9uQ2xpY2s9eygpPT4ge3NldFNlYXJjaCghc2VhcmNoKX19PlxyXG4gICAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJTZWFyY2hcIiBJY29uPXtTZWFyY2hJY29ufS8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPjxhPlxyXG4gICAgICAgIDxpbWcgc3JjPVwibG9nby5wbmdcIiBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfS8+XHJcbiAgICAgIDwvYT48L0xpbms+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIHtzZWFyY2ggJiZcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IHJlZj17ZG9tTm9kZX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzp3LTMvMTIgbWQ6dy0xMDAgbS1hdXRvXCI+XHJcbiAgICAgICAgICA8aW5wdXQgcmVmPXtyZWZ9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIEhlcmUuLi5cIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkLWItbm9uZSByb3VuZGVkLXQtbGcgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIvPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyZWRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9zZWFyY2g/cz1cIiArIHNlYXJjaFF1ZXJ5fT48YT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtbGcgaG92ZXI6dGV4dC1ncmF5LTQwMCBiZy15ZWxsb3ctMzAwIHJvdW5kZWQtYi1sZyB0ZXh0LWNlbnRlclwiPlNob3cgTW9yZSE8L3A+XHJcbiAgICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJIb21lSWNvbiIsIlNlYXJjaEljb24iLCJVc2VySWNvbiIsIlRlbXBsYXRlSWNvbiIsIk1lbnVBbHQxSWNvbiIsIkhlYWRlckl0ZW0iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJuYW1lIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJyZWYiLCJjdXJyZW50IiwiZm9jdXMiLCJ1c2VDbGlja091dHNpZGUiLCJoYW5kbGVyIiwiZG9tTm9kZSIsIm1heWJlSGFuZGxlciIsImV2ZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyZWRTZWFyY2giLCJtYXAiLCJlIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=