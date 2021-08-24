(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
;// CONCATENATED MODULE: ./components/HeaderItem.js



function HeaderItem({
  Icon,
  title
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col items-center cursor-pointer group w-12\r sm:w-20 hover:text-white",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
      className: "h-8 mb-1 group-hover:animate-bounce"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "opacity-0 group-hover:opacity-100 tracking-widest",
      children: title
    })]
  });
}

/* harmony default export */ const components_HeaderItem = (HeaderItem);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/Header.js








function Header() {
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)(false);
  const {
    0: searchQuery,
    1: setSearchQuery
  } = (0,external_react_.useState)();
  const {
    0: searchResults,
    1: setSearchResults
  } = (0,external_react_.useState)([{
    name: "A"
  }, {
    name: "B"
  }]);
  const ref = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    if (search) {
      ref.current.focus();
    }

    ;
  }, [search]);

  let useClickOutside = handler => {
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(() => {
      let maybeHandler = event => {
        if (domNode.current && !domNode.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
    return domNode;
  };

  let domNode = useClickOutside(() => {
    setSearch(false);
  });
  const renderedSearch = searchResults.map((e, index) => {
    let className = "";

    if (index % 2 == 0) {
      className = "bg-[#0e0e0e] p-3";
    } else {
      className = "bg-[#181818] p-3";
    }

    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: () => setSearch(false),
          className: className,
          children: e.name
        })
      })
    }, index);
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "flex flex-col sm:flex-row m-5 justify-between\r items-center h-auto",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-grow justify-evenly max-w-2xl",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
              title: "Home",
              Icon: esm/* HomeIcon */.tvw
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/explore",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
              title: "Explore",
              Icon: esm/* TemplateIcon */.pB8
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/account",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
              title: "Account",
              Icon: esm/* UserIcon */.tBG
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          ref: domNode,
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "outline-none focus:outline-none",
            onClick: () => {
              setSearch(search => !search);
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
              title: "Search",
              Icon: esm/* SearchIcon */.W1M
            })
          }), search && /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "absolute top-100 w-100 mt-5 z-10 bg-[#1c1c1c] shadow-lg rounded-lg overflow-hidden transition-all duration-200 ease-in-out animate-appear origin-top",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                ref: ref,
                placeholder: "Search Here...",
                type: "text",
                onChange: e => setSearchQuery(e.target.value),
                className: "shadow appearance-none border rounded-b-none rounded-t-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              }), searchResults.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: renderedSearch
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/search?s=" + searchQuery,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                      onClick: () => setSearch(false),
                      className: "text-white font-bold text-lg hover:text-gray-400 bg-yellow-300 rounded-b-lg text-center",
                      children: "Show More!"
                    })
                  })
                })]
              })]
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            alt: "Dring Games website Logo",
            src: "/images/Logo.png",
            className: "object-contain",
            width: 200,
            height: 200
          })
        })
      })]
    })
  });
}

/* harmony default export */ const components_Header = (Header);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(3802);
;// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "fixed inset-x-0 bottom-0 flex flex-row gap-2 bg-black justify-center bottom-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "font-bold",
      children: "Made with "
    }), /*#__PURE__*/jsx_runtime_.jsx(solid_esm/* HeartIcon */.h_8, {
      className: "h-6"
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: "https://www.instagram.com/mctibis/",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "font-bold",
        children: ["by ", /*#__PURE__*/jsx_runtime_.jsx("u", {
          children: "@mctibis"
        })]
      })
    })]
  });
}

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: external "next"
const external_next_namespaceObject = require("next");
;// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [489,802], () => (__webpack_exec__(5546)));
module.exports = __webpack_exports__;

})();