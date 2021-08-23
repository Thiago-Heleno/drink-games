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
        }, this), search !== null && search !== void 0 ? search : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Nigger"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "outline-none focus:outline-none",
          onClick: function onClick() {
            setSearch(!search);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Search",
            Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
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
            lineNumber: 81,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
          lineNumber: 87,
          columnNumber: 11
        }, this), searchResults.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: renderedSearch
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/search?s=" + searchQuery,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-white font-bold text-lg hover:text-gray-400 bg-yellow-300 rounded-b-lg text-center",
                children: "Show More!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 55
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTUwODVkMGUzNzkyOWVlYWI2ZWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7O0FBRUEsU0FBU1UsTUFBVCxHQUFrQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsa0JBQ1lGLCtDQUFRLENBQUMsS0FBRCxDQURwQjtBQUFBLE1BQ1RHLE1BRFM7QUFBQSxNQUNEQyxTQURDOztBQUFBLG1CQUVzQkosK0NBQVEsRUFGOUI7QUFBQSxNQUVUSyxXQUZTO0FBQUEsTUFFSUMsY0FGSjs7QUFBQSxtQkFHMEJOLCtDQUFRLENBQUMsQ0FBQztBQUFDTyxJQUFBQSxJQUFJLEVBQUU7QUFBUCxHQUFELEVBQWM7QUFBQ0EsSUFBQUEsSUFBSSxFQUFFO0FBQVAsR0FBZCxDQUFELENBSGxDO0FBQUEsTUFHVEMsYUFIUztBQUFBLE1BR01DLGdCQUhOOztBQUtoQixNQUFNQyxHQUFHLEdBQUdYLDZDQUFNLEVBQWxCO0FBQ0FFLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdFLE1BQUgsRUFBVTtBQUNSTyxNQUFBQSxHQUFHLENBQUNDLE9BQUosQ0FBWUMsS0FBWjtBQUNEOztBQUFBO0FBQ0YsR0FKUSxFQUlQLENBQUNULE1BQUQsQ0FKTyxDQUFUOztBQVFBLE1BQUlVLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQUE7O0FBQ2pDLFFBQUlDLE9BQU8sR0FBR2hCLDZDQUFNLEVBQXBCO0FBRUFFLElBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNoQixVQUFJZSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVU7QUFDM0IsWUFBR0YsT0FBTyxDQUFDSixPQUFSLElBQW1CLENBQUNJLE9BQU8sQ0FBQ0osT0FBUixDQUFnQk8sUUFBaEIsQ0FBeUJELEtBQUssQ0FBQ0UsTUFBL0IsQ0FBdkIsRUFBOEQ7QUFDNURMLFVBQUFBLE9BQU87QUFDUjtBQUNGLE9BSkQ7O0FBS0FNLE1BQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNMLFlBQXZDO0FBRUEsYUFBTyxZQUFLO0FBQ1ZJLFFBQUFBLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENOLFlBQTFDO0FBQ0QsT0FGRDtBQUdELEtBWFUsQ0FBVDtBQVlGLFdBQU9ELE9BQVA7QUFDQyxHQWhCRDs7QUFkZ0IsS0FjWkYsZUFkWTs7QUFnQ2hCLE1BQUlFLE9BQU8sR0FBR0YsZUFBZSxDQUFDLFlBQUk7QUFDOUJULElBQUFBLFNBQVMsQ0FBQyxLQUFELENBQVQ7QUFDSCxHQUY0QixDQUE3QjtBQUlBLE1BQU1tQixjQUFjLEdBQUdmLGFBQWEsQ0FBQ2dCLEdBQWQsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQVk7QUFDbkQsUUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLFFBQUdELEtBQUssR0FBRyxDQUFSLElBQWEsQ0FBaEIsRUFBa0I7QUFDaEJDLE1BQUFBLFNBQVMsR0FBRyxZQUFaO0FBQ0QsS0FGRCxNQUVLO0FBQ0hBLE1BQUFBLFNBQVMsR0FBRyxZQUFaO0FBQ0Q7O0FBQ0Qsd0JBQ0U7QUFBSSxlQUFTLEVBQUVBLFNBQWY7QUFBQSxnQkFBMkJGLENBQUMsQ0FBQ2xCO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUdELEdBVnNCLENBQXZCO0FBWUEsc0JBQ0U7QUFBQSw0QkFDQTtBQUFRLGVBQVMsRUFBQyxxRUFBbEI7QUFBQSw4QkFFRTtBQUFLLGlCQUFTLEVBQUMseUNBQWY7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQWU7QUFBQSxtQ0FDYiw4REFBQyxnREFBRDtBQUFZLG1CQUFLLEVBQUMsTUFBbEI7QUFBeUIsa0JBQUksRUFBRWQsOERBQVFBO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FBc0I7QUFBQSxtQ0FDcEIsOERBQUMsZ0RBQUQ7QUFBWSxtQkFBSyxFQUFDLFNBQWxCO0FBQTRCLGtCQUFJLEVBQUVHLGtFQUFZQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQU9FLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FBc0I7QUFBQSxtQ0FDcEIsOERBQUMsZ0RBQUQ7QUFBWSxtQkFBSyxFQUFDLFNBQWxCO0FBQTRCLGtCQUFJLEVBQUVELDhEQUFRQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixFQVVHUSxNQVZILGFBVUdBLE1BVkgsY0FVR0EsTUFWSCxnQkFVYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWYixlQVdFO0FBQVEsbUJBQVMsRUFBQyxpQ0FBbEI7QUFBb0QsaUJBQU8sRUFBRSxtQkFBSztBQUFDQyxZQUFBQSxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFUO0FBQW1CLFdBQXRGO0FBQUEsaUNBRUUsOERBQUMsZ0RBQUQ7QUFBWSxpQkFBSyxFQUFDLFFBQWxCO0FBQTJCLGdCQUFJLEVBQUVULGdFQUFVQTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQWtCRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBQSxpQ0FDYjtBQUFLLGVBQUcsRUFBQyxVQUFUO0FBQW9CLHFCQUFTLEVBQUMsZ0JBQTlCO0FBQStDLGlCQUFLLEVBQUUsR0FBdEQ7QUFBMkQsa0JBQU0sRUFBRTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUF1QkNTLE1BQU0saUJBQ0w7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRVksT0FBVjtBQUFtQixpQkFBUyxFQUFDLHlDQUE3QjtBQUFBLGdDQUNFO0FBQU8sYUFBRyxFQUFFTCxHQUFaO0FBQWlCLHFCQUFXLEVBQUMsZ0JBQTdCO0FBQThDLGNBQUksRUFBQyxNQUFuRDtBQUEwRCxrQkFBUSxFQUFFLGtCQUFDZSxDQUFEO0FBQUEsbUJBQU9uQixjQUFjLENBQUNtQixDQUFDLENBQUNOLE1BQUYsQ0FBU1MsS0FBVixDQUFyQjtBQUFBLFdBQXBFO0FBQTJHLG1CQUFTLEVBQUM7QUFBckg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUdJcEIsYUFBYSxDQUFDcUIsTUFBZCxHQUF1QixDQUF2QixpQkFDQTtBQUFBLGtDQUNFO0FBQUEsc0JBQ0dOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBRSxlQUFlbEIsV0FBM0I7QUFBQSxtQ0FBd0M7QUFBQSxxQ0FDdEM7QUFBRyx5QkFBUyxFQUFDLHlGQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBLGtCQURGO0FBNENEOztJQTVGUUg7VUFnQ09XOzs7S0FoQ1BYO0FBOEZULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtcclxuICBIb21lSWNvbixcclxuICBTZWFyY2hJY29uLFxyXG4gIFVzZXJJY29uLFxyXG4gIFRlbXBsYXRlSWNvbixcclxuICBNZW51QWx0MUljb25cclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCJcclxuaW1wb3J0IEhlYWRlckl0ZW0gZnJvbSBcIi4vSGVhZGVySXRlbVwiXHJcbmltcG9ydCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW3tuYW1lOiBcIkFcIn0sIHtuYW1lOiBcIkJcIn1dKVxyXG4gIFxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihzZWFyY2gpe1xyXG4gICAgICByZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfTtcclxuICB9LFtzZWFyY2hdKVxyXG5cclxuICBcclxuICBcclxuICBsZXQgdXNlQ2xpY2tPdXRzaWRlID0gKGhhbmRsZXIpID0+IHtcclxuICAgIGxldCBkb21Ob2RlID0gdXNlUmVmKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtYXliZUhhbmRsZXIgPSAoZXZlbnQpPT4ge1xyXG4gICAgICBpZihkb21Ob2RlLmN1cnJlbnQgJiYgIWRvbU5vZGUuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKXtcclxuICAgICAgICBoYW5kbGVyKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtYXliZUhhbmRsZXIpXHJcblxyXG4gICAgcmV0dXJuICgpID0+e1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1heWJlSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gZG9tTm9kZVxyXG4gIH1cclxuXHJcbiAgbGV0IGRvbU5vZGUgPSB1c2VDbGlja091dHNpZGUoKCk9PntcclxuICAgICAgc2V0U2VhcmNoKGZhbHNlKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHJlbmRlcmVkU2VhcmNoID0gc2VhcmNoUmVzdWx0cy5tYXAoKGUsIGluZGV4KT0+e1xyXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiXCJcclxuICAgIGlmKGluZGV4ICUgMiA9PSAwKXtcclxuICAgICAgY2xhc3NOYW1lID0gXCJiZy1yZWQtMzAwXCJcclxuICAgIH1lbHNle1xyXG4gICAgICBjbGFzc05hbWUgPSBcImJnLXJlZC00MDBcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntlLm5hbWV9PC9saT5cclxuICAgIClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBtLTUganVzdGlmeS1iZXR3ZWVuXHJcbiAgICBpdGVtcy1jZW50ZXIgaC1hdXRvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWdyb3cganVzdGlmeS1ldmVubHkgbWF4LXctMnhsXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5cclxuICAgICAgICAgIDxIZWFkZXJJdGVtIHRpdGxlPVwiSG9tZVwiIEljb249e0hvbWVJY29ufS8+XHJcbiAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2V4cGxvcmVcIj48YT5cclxuICAgICAgICAgIDxIZWFkZXJJdGVtIHRpdGxlPVwiRXhwbG9yZVwiIEljb249e1RlbXBsYXRlSWNvbn0vPlxyXG4gICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50XCI+PGE+XHJcbiAgICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIkFjY291bnRcIiBJY29uPXtVc2VySWNvbn0vPlxyXG4gICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAge3NlYXJjaCA/PyA8cD5OaWdnZXI8L3A+fVxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiIG9uQ2xpY2s9eygpPT4ge3NldFNlYXJjaCghc2VhcmNoKX19PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJTZWFyY2hcIiBJY29uPXtTZWFyY2hJY29ufS8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPjxhPlxyXG4gICAgICAgIDxpbWcgc3JjPVwibG9nby5wbmdcIiBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfS8+XHJcbiAgICAgIDwvYT48L0xpbms+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIHtzZWFyY2ggJiZcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IHJlZj17ZG9tTm9kZX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzp3LTMvMTIgbWQ6dy0xMDAgbS1hdXRvXCI+XHJcbiAgICAgICAgICA8aW5wdXQgcmVmPXtyZWZ9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIEhlcmUuLi5cIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkLWItbm9uZSByb3VuZGVkLXQtbGcgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIvPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyZWRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9zZWFyY2g/cz1cIiArIHNlYXJjaFF1ZXJ5fT48YT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtbGcgaG92ZXI6dGV4dC1ncmF5LTQwMCBiZy15ZWxsb3ctMzAwIHJvdW5kZWQtYi1sZyB0ZXh0LWNlbnRlclwiPlNob3cgTW9yZSE8L3A+XHJcbiAgICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJIb21lSWNvbiIsIlNlYXJjaEljb24iLCJVc2VySWNvbiIsIlRlbXBsYXRlSWNvbiIsIk1lbnVBbHQxSWNvbiIsIkhlYWRlckl0ZW0iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJuYW1lIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJyZWYiLCJjdXJyZW50IiwiZm9jdXMiLCJ1c2VDbGlja091dHNpZGUiLCJoYW5kbGVyIiwiZG9tTm9kZSIsIm1heWJlSGFuZGxlciIsImV2ZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyZWRTZWFyY2giLCJtYXAiLCJlIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=