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
            setSearch(!search);
          },
          children: [search.Stringify(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Search",
            Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
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
            lineNumber: 80,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
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
          lineNumber: 86,
          columnNumber: 11
        }, this), searchResults.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: renderedSearch
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/search?s=" + searchQuery,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white font-bold text-lg hover:text-gray-400 bg-yellow-300 rounded-b-lg text-center",
                children: "Show More!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 55
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45YWZiZjg0MWMwNzdjYzUxOWEwNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTs7QUFFQSxTQUFTVSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDWUYsK0NBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDVEcsTUFEUztBQUFBLE1BQ0RDLFNBREM7O0FBQUEsbUJBRXNCSiwrQ0FBUSxFQUY5QjtBQUFBLE1BRVRLLFdBRlM7QUFBQSxNQUVJQyxjQUZKOztBQUFBLG1CQUcwQk4sK0NBQVEsQ0FBQyxDQUFDO0FBQUNPLElBQUFBLElBQUksRUFBRTtBQUFQLEdBQUQsRUFBYztBQUFDQSxJQUFBQSxJQUFJLEVBQUU7QUFBUCxHQUFkLENBQUQsQ0FIbEM7QUFBQSxNQUdUQyxhQUhTO0FBQUEsTUFHTUMsZ0JBSE47O0FBS2hCLE1BQU1DLEdBQUcsR0FBR1gsNkNBQU0sRUFBbEI7QUFDQUUsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR0UsTUFBSCxFQUFVO0FBQ1JPLE1BQUFBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZQyxLQUFaO0FBQ0Q7O0FBQUE7QUFDRixHQUpRLEVBSVAsQ0FBQ1QsTUFBRCxDQUpPLENBQVQ7O0FBUUEsTUFBSVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFDakMsUUFBSUMsT0FBTyxHQUFHaEIsNkNBQU0sRUFBcEI7QUFFQUUsSUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2hCLFVBQUllLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVTtBQUMzQixZQUFHRixPQUFPLENBQUNKLE9BQVIsSUFBbUIsQ0FBQ0ksT0FBTyxDQUFDSixPQUFSLENBQWdCTyxRQUFoQixDQUF5QkQsS0FBSyxDQUFDRSxNQUEvQixDQUF2QixFQUE4RDtBQUM1REws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QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLEVBc0JDUyxNQUFNLGlCQUNMO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVZLE9BQVY7QUFBbUIsaUJBQVMsRUFBQyx5Q0FBN0I7QUFBQSxnQ0FDRTtBQUFPLGFBQUcsRUFBRUwsR0FBWjtBQUFpQixxQkFBVyxFQUFDLGdCQUE3QjtBQUE4QyxjQUFJLEVBQUMsTUFBbkQ7QUFBMEQsa0JBQVEsRUFBRSxrQkFBQ2UsQ0FBRDtBQUFBLG1CQUFPbkIsY0FBYyxDQUFDbUIsQ0FBQyxDQUFDTixNQUFGLENBQVNVLEtBQVYsQ0FBckI7QUFBQSxXQUFwRTtBQUEyRyxtQkFBUyxFQUFDO0FBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFHSXJCLGFBQWEsQ0FBQ3NCLE1BQWQsR0FBdUIsQ0FBdkIsaUJBQ0E7QUFBQSxrQ0FDRTtBQUFBLHNCQUNHUDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUUsZUFBZWxCLFdBQTNCO0FBQUEsbUNBQXdDO0FBQUEscUNBQ3RDO0FBQUcseUJBQVMsRUFBQyx5RkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQSxrQkFERjtBQTJDRDs7SUEzRlFIO1VBZ0NPVzs7O0tBaENQWDtBQTZGVCwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7XHJcbiAgSG9tZUljb24sXHJcbiAgU2VhcmNoSWNvbixcclxuICBVc2VySWNvbixcclxuICBUZW1wbGF0ZUljb24sXHJcbiAgTWVudUFsdDFJY29uXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXHJcbmltcG9ydCBIZWFkZXJJdGVtIGZyb20gXCIuL0hlYWRlckl0ZW1cIlxyXG5pbXBvcnQge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFt7bmFtZTogXCJBXCJ9LCB7bmFtZTogXCJCXCJ9XSlcclxuICBcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoc2VhcmNoKXtcclxuICAgICAgcmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH07XHJcbiAgfSxbc2VhcmNoXSlcclxuXHJcbiAgXHJcbiAgXHJcbiAgbGV0IHVzZUNsaWNrT3V0c2lkZSA9IChoYW5kbGVyKSA9PiB7XHJcbiAgICBsZXQgZG9tTm9kZSA9IHVzZVJlZigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbWF5YmVIYW5kbGVyID0gKGV2ZW50KT0+IHtcclxuICAgICAgaWYoZG9tTm9kZS5jdXJyZW50ICYmICFkb21Ob2RlLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSl7XHJcbiAgICAgICAgaGFuZGxlcigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbWF5YmVIYW5kbGVyKVxyXG5cclxuICAgIHJldHVybiAoKSA9PntcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtYXliZUhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGRvbU5vZGVcclxuICB9XHJcblxyXG4gIGxldCBkb21Ob2RlID0gdXNlQ2xpY2tPdXRzaWRlKCgpPT57XHJcbiAgICAgIHNldFNlYXJjaChmYWxzZSlcclxuICB9KVxyXG5cclxuICBjb25zdCByZW5kZXJlZFNlYXJjaCA9IHNlYXJjaFJlc3VsdHMubWFwKChlLCBpbmRleCk9PntcclxuICAgIGxldCBjbGFzc05hbWUgPSBcIlwiXHJcbiAgICBpZihpbmRleCAlIDIgPT0gMCl7XHJcbiAgICAgIGNsYXNzTmFtZSA9IFwiYmctcmVkLTMwMFwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgY2xhc3NOYW1lID0gXCJiZy1yZWQtNDAwXCJcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57ZS5uYW1lfTwvbGk+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgbS01IGp1c3RpZnktYmV0d2VlblxyXG4gICAgaXRlbXMtY2VudGVyIGgtYXV0b1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IGp1c3RpZnktZXZlbmx5IG1heC13LTJ4bFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+XHJcbiAgICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIkhvbWVcIiBJY29uPXtIb21lSWNvbn0vPlxyXG4gICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9leHBsb3JlXCI+PGE+XHJcbiAgICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIkV4cGxvcmVcIiBJY29uPXtUZW1wbGF0ZUljb259Lz5cclxuICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPjxhPlxyXG4gICAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJBY2NvdW50XCIgSWNvbj17VXNlckljb259Lz5cclxuICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiIG9uQ2xpY2s9eygpPT4ge3NldFNlYXJjaCghc2VhcmNoKX19PlxyXG4gICAgICAgICAge3NlYXJjaC5TdHJpbmdpZnkoKX1cclxuICAgICAgICAgIDxIZWFkZXJJdGVtIHRpdGxlPVwiU2VhcmNoXCIgSWNvbj17U2VhcmNoSWNvbn0vPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5cclxuICAgICAgICA8aW1nIHNyYz1cImxvZ28ucG5nXCIgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0vPlxyXG4gICAgICA8L2E+PC9MaW5rPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICB7c2VhcmNoICYmXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiByZWY9e2RvbU5vZGV9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6dy0zLzEyIG1kOnctMTAwIG0tYXV0b1wiPlxyXG4gICAgICAgICAgPGlucHV0IHJlZj17cmVmfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBIZXJlLi4uXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZC1iLW5vbmUgcm91bmRlZC10LWxnIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiLz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlcmVkU2VhcmNofVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvc2VhcmNoP3M9XCIgKyBzZWFyY2hRdWVyeX0+PGE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIGhvdmVyOnRleHQtZ3JheS00MDAgYmcteWVsbG93LTMwMCByb3VuZGVkLWItbGcgdGV4dC1jZW50ZXJcIj5TaG93IE1vcmUhPC9wPlxyXG4gICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSG9tZUljb24iLCJTZWFyY2hJY29uIiwiVXNlckljb24iLCJUZW1wbGF0ZUljb24iLCJNZW51QWx0MUljb24iLCJIZWFkZXJJdGVtIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwibmFtZSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwicmVmIiwiY3VycmVudCIsImZvY3VzIiwidXNlQ2xpY2tPdXRzaWRlIiwiaGFuZGxlciIsImRvbU5vZGUiLCJtYXliZUhhbmRsZXIiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlcmVkU2VhcmNoIiwibWFwIiwiZSIsImluZGV4IiwiY2xhc3NOYW1lIiwiU3RyaW5naWZ5IiwidmFsdWUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9