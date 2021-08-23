"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMzdiM2Q1NjNmZGQyNWUxYzg2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTs7QUFFQSxTQUFTVSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDWUYsK0NBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDVEcsTUFEUztBQUFBLE1BQ0RDLFNBREM7O0FBQUEsbUJBRXNCSiwrQ0FBUSxFQUY5QjtBQUFBLE1BRVRLLFdBRlM7QUFBQSxNQUVJQyxjQUZKOztBQUFBLG1CQUcwQk4sK0NBQVEsQ0FBQyxDQUFDO0FBQUNPLElBQUFBLElBQUksRUFBRTtBQUFQLEdBQUQsRUFBYztBQUFDQSxJQUFBQSxJQUFJLEVBQUU7QUFBUCxHQUFkLENBQUQsQ0FIbEM7QUFBQSxNQUdUQyxhQUhTO0FBQUEsTUFHTUMsZ0JBSE47O0FBS2hCLE1BQU1DLEdBQUcsR0FBR1gsNkNBQU0sRUFBbEI7QUFDQUUsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR0UsTUFBSCxFQUFVO0FBQ1JPLE1BQUFBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZQyxLQUFaO0FBQ0Q7O0FBQUE7QUFDRixHQUpRLEVBSVAsQ0FBQ1QsTUFBRCxDQUpPLENBQVQ7O0FBUUEsTUFBSVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFDakMsUUFBSUMsT0FBTyxHQUFHaEIsNkNBQU0sRUFBcEI7QUFFQUUsSUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2hCLFVBQUllLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVTtBQUMzQixZQUFHRixPQUFPLENBQUNKLE9BQVIsSUFBbUIsQ0FBQ0ksT0FBTyxDQUFDSixPQUFSLENBQWdCTyxRQUFoQixDQUF5QkQsS0FBSyxDQUFDRSxNQUEvQixDQUF2QixFQUE4RDtBQUM1REws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O0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxFQXFCQ1MsTUFBTSxpQkFDTDtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFWSxPQUFWO0FBQW1CLGlCQUFTLEVBQUMseUNBQTdCO0FBQUEsZ0NBQ0U7QUFBTyxhQUFHLEVBQUVMLEdBQVo7QUFBaUIscUJBQVcsRUFBQyxnQkFBN0I7QUFBOEMsY0FBSSxFQUFDLE1BQW5EO0FBQTBELGtCQUFRLEVBQUUsa0JBQUNlLENBQUQ7QUFBQSxtQkFBT25CLGNBQWMsQ0FBQ21CLENBQUMsQ0FBQ04sTUFBRixDQUFTUyxLQUFWLENBQXJCO0FBQUEsV0FBcEU7QUFBMkcsbUJBQVMsRUFBQztBQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBR0lwQixhQUFhLENBQUNxQixNQUFkLEdBQXVCLENBQXZCLGlCQUNBO0FBQUEsa0NBQ0U7QUFBQSxzQkFDR047QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFFLGVBQWVsQixXQUEzQjtBQUFBLG1DQUF3QztBQUFBLHFDQUN0QztBQUFHLHlCQUFTLEVBQUMseUZBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUEsa0JBREY7QUEwQ0Q7O0lBMUZRSDtVQWdDT1c7OztLQWhDUFg7QUE0RlQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1xyXG4gIEhvbWVJY29uLFxyXG4gIFNlYXJjaEljb24sXHJcbiAgVXNlckljb24sXHJcbiAgVGVtcGxhdGVJY29uLFxyXG4gIE1lbnVBbHQxSWNvblxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIlxyXG5pbXBvcnQgSGVhZGVySXRlbSBmcm9tIFwiLi9IZWFkZXJJdGVtXCJcclxuaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbe25hbWU6IFwiQVwifSwge25hbWU6IFwiQlwifV0pXHJcbiAgXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHNlYXJjaCl7XHJcbiAgICAgIHJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9O1xyXG4gIH0sW3NlYXJjaF0pXHJcblxyXG4gIFxyXG4gIFxyXG4gIGxldCB1c2VDbGlja091dHNpZGUgPSAoaGFuZGxlcikgPT4ge1xyXG4gICAgbGV0IGRvbU5vZGUgPSB1c2VSZWYoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1heWJlSGFuZGxlciA9IChldmVudCk9PiB7XHJcbiAgICAgIGlmKGRvbU5vZGUuY3VycmVudCAmJiAhZG9tTm9kZS5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpe1xyXG4gICAgICAgIGhhbmRsZXIoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1heWJlSGFuZGxlcilcclxuXHJcbiAgICByZXR1cm4gKCkgPT57XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbWF5YmVIYW5kbGVyKTtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBkb21Ob2RlXHJcbiAgfVxyXG5cclxuICBsZXQgZG9tTm9kZSA9IHVzZUNsaWNrT3V0c2lkZSgoKT0+e1xyXG4gICAgICBzZXRTZWFyY2goZmFsc2UpXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcmVuZGVyZWRTZWFyY2ggPSBzZWFyY2hSZXN1bHRzLm1hcCgoZSwgaW5kZXgpPT57XHJcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJcIlxyXG4gICAgaWYoaW5kZXggJSAyID09IDApe1xyXG4gICAgICBjbGFzc05hbWUgPSBcImJnLXJlZC0zMDBcIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNsYXNzTmFtZSA9IFwiYmctcmVkLTQwMFwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2UubmFtZX08L2xpPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IG0tNSBqdXN0aWZ5LWJldHdlZW5cclxuICAgIGl0ZW1zLWNlbnRlciBoLWF1dG9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWV2ZW5seSBtYXgtdy0yeGxcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPlxyXG4gICAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJIb21lXCIgSWNvbj17SG9tZUljb259Lz5cclxuICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwbG9yZVwiPjxhPlxyXG4gICAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJFeHBsb3JlXCIgSWNvbj17VGVtcGxhdGVJY29ufS8+XHJcbiAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIj48YT5cclxuICAgICAgICAgIDxIZWFkZXJJdGVtIHRpdGxlPVwiQWNjb3VudFwiIEljb249e1VzZXJJY29ufS8+XHJcbiAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIiBvbkNsaWNrPXsoKT0+IHtpZihzZWFyY2gpe3NldFNlYXJjaCh0cnVlKX19fT5cclxuICAgICAgICAgIDxIZWFkZXJJdGVtIHRpdGxlPVwiU2VhcmNoXCIgSWNvbj17U2VhcmNoSWNvbn0vPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5cclxuICAgICAgICA8aW1nIHNyYz1cImxvZ28ucG5nXCIgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0vPlxyXG4gICAgICA8L2E+PC9MaW5rPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICB7c2VhcmNoICYmXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiByZWY9e2RvbU5vZGV9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6dy0zLzEyIG1kOnctMTAwIG0tYXV0b1wiPlxyXG4gICAgICAgICAgPGlucHV0IHJlZj17cmVmfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBIZXJlLi4uXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZC1iLW5vbmUgcm91bmRlZC10LWxnIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiLz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlcmVkU2VhcmNofVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvc2VhcmNoP3M9XCIgKyBzZWFyY2hRdWVyeX0+PGE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIGhvdmVyOnRleHQtZ3JheS00MDAgYmcteWVsbG93LTMwMCByb3VuZGVkLWItbGcgdGV4dC1jZW50ZXJcIj5TaG93IE1vcmUhPC9wPlxyXG4gICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSG9tZUljb24iLCJTZWFyY2hJY29uIiwiVXNlckljb24iLCJUZW1wbGF0ZUljb24iLCJNZW51QWx0MUljb24iLCJIZWFkZXJJdGVtIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwibmFtZSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwicmVmIiwiY3VycmVudCIsImZvY3VzIiwidXNlQ2xpY2tPdXRzaWRlIiwiaGFuZGxlciIsImRvbU5vZGUiLCJtYXliZUhhbmRsZXIiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlcmVkU2VhcmNoIiwibWFwIiwiZSIsImluZGV4IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9