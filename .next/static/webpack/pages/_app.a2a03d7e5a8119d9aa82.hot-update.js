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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMmEwM2Q3ZTVhODExOWQ5YWE4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTs7QUFFQSxTQUFTVSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDWUYsK0NBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDVEcsTUFEUztBQUFBLE1BQ0RDLFNBREM7O0FBQUEsbUJBRXNCSiwrQ0FBUSxFQUY5QjtBQUFBLE1BRVRLLFdBRlM7QUFBQSxNQUVJQyxjQUZKOztBQUFBLG1CQUcwQk4sK0NBQVEsQ0FBQyxDQUFDO0FBQUNPLElBQUFBLElBQUksRUFBRTtBQUFQLEdBQUQsRUFBYztBQUFDQSxJQUFBQSxJQUFJLEVBQUU7QUFBUCxHQUFkLENBQUQsQ0FIbEM7QUFBQSxNQUdUQyxhQUhTO0FBQUEsTUFHTUMsZ0JBSE47O0FBS2hCLE1BQU1DLEdBQUcsR0FBR1gsNkNBQU0sRUFBbEI7QUFDQUUsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR0UsTUFBSCxFQUFVO0FBQ1JPLE1BQUFBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZQyxLQUFaO0FBQ0Q7O0FBQUE7QUFDRixHQUpRLEVBSVAsQ0FBQ1QsTUFBRCxDQUpPLENBQVQ7O0FBUUEsTUFBSVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFDakMsUUFBSUMsT0FBTyxHQUFHaEIsNkNBQU0sRUFBcEI7QUFFQUUsSUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2hCLFVBQUllLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVTtBQUMzQixZQUFHRixPQUFPLENBQUNKLE9BQVIsSUFBbUIsQ0FBQ0ksT0FBTyxDQUFDSixPQUFSLENBQWdCTyxRQUFoQixDQUF5QkQsS0FBSyxDQUFDRSxNQUEvQixDQUF2QixFQUE4RDtBQUM1REws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QUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLEVBcUJDUyxNQUFNLGlCQUNMO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVZLE9BQVY7QUFBbUIsaUJBQVMsRUFBQyx5Q0FBN0I7QUFBQSxnQ0FDRTtBQUFPLGFBQUcsRUFBRUwsR0FBWjtBQUFpQixxQkFBVyxFQUFDLGdCQUE3QjtBQUE4QyxjQUFJLEVBQUMsTUFBbkQ7QUFBMEQsa0JBQVEsRUFBRSxrQkFBQ2UsQ0FBRDtBQUFBLG1CQUFPbkIsY0FBYyxDQUFDbUIsQ0FBQyxDQUFDTixNQUFGLENBQVNTLEtBQVYsQ0FBckI7QUFBQSxXQUFwRTtBQUEyRyxtQkFBUyxFQUFDO0FBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFHSXBCLGFBQWEsQ0FBQ3FCLE1BQWQsR0FBdUIsQ0FBdkIsaUJBQ0E7QUFBQSxrQ0FDRTtBQUFBLHNCQUNHTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUUsZUFBZWxCLFdBQTNCO0FBQUEsbUNBQXdDO0FBQUEscUNBQ3RDO0FBQUcseUJBQVMsRUFBQyx5RkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQSxrQkFERjtBQTBDRDs7SUExRlFIO1VBZ0NPVzs7O0tBaENQWDtBQTRGVCwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7XHJcbiAgSG9tZUljb24sXHJcbiAgU2VhcmNoSWNvbixcclxuICBVc2VySWNvbixcclxuICBUZW1wbGF0ZUljb24sXHJcbiAgTWVudUFsdDFJY29uXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXHJcbmltcG9ydCBIZWFkZXJJdGVtIGZyb20gXCIuL0hlYWRlckl0ZW1cIlxyXG5pbXBvcnQge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFt7bmFtZTogXCJBXCJ9LCB7bmFtZTogXCJCXCJ9XSlcclxuICBcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoc2VhcmNoKXtcclxuICAgICAgcmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH07XHJcbiAgfSxbc2VhcmNoXSlcclxuXHJcbiAgXHJcbiAgXHJcbiAgbGV0IHVzZUNsaWNrT3V0c2lkZSA9IChoYW5kbGVyKSA9PiB7XHJcbiAgICBsZXQgZG9tTm9kZSA9IHVzZVJlZigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbWF5YmVIYW5kbGVyID0gKGV2ZW50KT0+IHtcclxuICAgICAgaWYoZG9tTm9kZS5jdXJyZW50ICYmICFkb21Ob2RlLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSl7XHJcbiAgICAgICAgaGFuZGxlcigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbWF5YmVIYW5kbGVyKVxyXG5cclxuICAgIHJldHVybiAoKSA9PntcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtYXliZUhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGRvbU5vZGVcclxuICB9XHJcblxyXG4gIGxldCBkb21Ob2RlID0gdXNlQ2xpY2tPdXRzaWRlKCgpPT57XHJcbiAgICAgIHNldFNlYXJjaChmYWxzZSlcclxuICB9KVxyXG5cclxuICBjb25zdCByZW5kZXJlZFNlYXJjaCA9IHNlYXJjaFJlc3VsdHMubWFwKChlLCBpbmRleCk9PntcclxuICAgIGxldCBjbGFzc05hbWUgPSBcIlwiXHJcbiAgICBpZihpbmRleCAlIDIgPT0gMCl7XHJcbiAgICAgIGNsYXNzTmFtZSA9IFwiYmctcmVkLTMwMFwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgY2xhc3NOYW1lID0gXCJiZy1yZWQtNDAwXCJcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57ZS5uYW1lfTwvbGk+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgbS01IGp1c3RpZnktYmV0d2VlblxyXG4gICAgaXRlbXMtY2VudGVyIGgtYXV0b1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IGp1c3RpZnktZXZlbmx5IG1heC13LTJ4bFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+XHJcbiAgICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIkhvbWVcIiBJY29uPXtIb21lSWNvbn0vPlxyXG4gICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9leHBsb3JlXCI+PGE+XHJcbiAgICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIkV4cGxvcmVcIiBJY29uPXtUZW1wbGF0ZUljb259Lz5cclxuICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPjxhPlxyXG4gICAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJBY2NvdW50XCIgSWNvbj17VXNlckljb259Lz5cclxuICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgIDxidXR0b24gcmVmPXtkb21Ob2RlfSBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCIgb25DbGljaz17KCk9PiB7c2V0U2VhcmNoKCFzZWFyY2gpfX0+XHJcbiAgICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIlNlYXJjaFwiIEljb249e1NlYXJjaEljb259Lz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+XHJcbiAgICAgICAgPGltZyBzcmM9XCJsb2dvLnBuZ1wiIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9Lz5cclxuICAgICAgPC9hPjwvTGluaz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAge3NlYXJjaCAmJlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgcmVmPXtkb21Ob2RlfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOnctMy8xMiBtZDp3LTEwMCBtLWF1dG9cIj5cclxuICAgICAgICAgIDxpbnB1dCByZWY9e3JlZn0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggSGVyZS4uLlwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQtYi1ub25lIHJvdW5kZWQtdC1sZyB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIi8+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJlZFNlYXJjaH1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NlYXJjaD9zPVwiICsgc2VhcmNoUXVlcnl9PjxhPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZyBob3Zlcjp0ZXh0LWdyYXktNDAwIGJnLXllbGxvdy0zMDAgcm91bmRlZC1iLWxnIHRleHQtY2VudGVyXCI+U2hvdyBNb3JlITwvcD5cclxuICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwibmFtZXMiOlsiTGluayIsIkhvbWVJY29uIiwiU2VhcmNoSWNvbiIsIlVzZXJJY29uIiwiVGVtcGxhdGVJY29uIiwiTWVudUFsdDFJY29uIiwiSGVhZGVySXRlbSIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIm5hbWUiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsInJlZiIsImN1cnJlbnQiLCJmb2N1cyIsInVzZUNsaWNrT3V0c2lkZSIsImhhbmRsZXIiLCJkb21Ob2RlIiwibWF5YmVIYW5kbGVyIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXJlZFNlYXJjaCIsIm1hcCIsImUiLCJpbmRleCIsImNsYXNzTmFtZSIsInZhbHVlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==