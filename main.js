/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --color-background: #FAF3E0;   /* Off-white / Cream */\r\n  --color-accent: #D94A4A;       /* Tomato Red */\r\n  --color-secondary: #4B7B3A;    /* Olive Green */\r\n  --color-text: #2B2B2B;         /* Dark Charcoal */\r\n}\r\n\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody{\r\n    background-color: var(--color-background);\r\n    color: var(--color-text);\r\n}\r\n\r\n/* Hero slide show */\r\n.slideshow-container {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 94vh;\r\n  overflow: hidden;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.slide {\r\n  display: none;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.slide img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.caption {\r\n  position: absolute;\r\n  bottom: 1.5rem;\r\n  left: 1.5rem;\r\n  color: var(--color-text);\r\n  background-color: var(--color-background); \r\n  border-left: 5px solid var(--color-secondary); \r\n  padding: 1rem 1.5rem;\r\n  border-radius: 0.5rem;\r\n  max-width: 80%;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* Fade effect */\r\n.fade {\r\n  animation: fadeEffect 1s ease-in-out;\r\n}\r\n\r\n/* nav bar */\r\nnav{\r\n  width: 100%;\r\n  background-color: var(--color-secondary);\r\n  color: white;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  height: 40px;\r\n  position: fixed;\r\n  z-index: 1000;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  width: 30%;\r\n  justify-content: space-around;\r\n\r\n}\r\n\r\nul li ,li a{\r\n  list-style: none;\r\n  text-decoration: none;\r\n  color: white;\r\n  font-family: inherit;\r\n}\r\n\r\n/* Menu */\r\n.menu h1\r\n{\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.menu{\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menu-section{\r\n  color: var(--color-text);\r\n  background-color: var(--color-background); \r\n  border-left: 5px solid var(--color-secondary); \r\n  border-right: 5px solid var(--color-secondary); \r\n  padding: 1rem 1.5rem;\r\n  border-radius: 0.5rem;\r\n  font-size: 1rem;\r\n  margin-top: 10px;\r\n}\r\n\r\n.menu-item\r\n{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 2fr;\r\n  gap: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.contact-section {\r\n    padding: 0 50px;\r\n    margin-bottom: 100px;\r\n  }\r\n  \r\n  .contact-section h2 {\r\n    font-size: 35px;\r\n  }\r\n  \r\n  .contact-section .group {\r\n    display: flex;\r\n    gap: 50px;\r\n  }\r\n  \r\n  .contact-section .group .text {\r\n    flex: 3;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .contact-section .group form {\r\n    flex: 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .contact-section .group form input,\r\n  .contact-section .group form textarea {\r\n    font-family: 'Poppins', sans-serif;\r\n    border: 2px solid var(--link-color);\r\n    padding: 10px;\r\n    margin-bottom: 15px;\r\n    outline: none;\r\n    resize: none;\r\n  }\r\n  \r\n  .contact-section .group form button {\r\n    font-size: 16px;\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: var(--link-color);\r\n    height: 50px;\r\n    cursor: pointer;\r\n    transition: .1s;\r\n  }\r\n  \r\n  .contact-section .group form button:hover {\r\n    filter: brightness(.9);\r\n  }\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/assets/img1.jpg":
/*!*****************************!*\
  !*** ./src/assets/img1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"6dec6fab0c1ec6fb2a5e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img1.jpg?\n}");

/***/ }),

/***/ "./src/assets/img2.jpg":
/*!*****************************!*\
  !*** ./src/assets/img2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"a6153cf54e3becef8a5b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img2.jpg?\n}");

/***/ }),

/***/ "./src/assets/img3.jpg":
/*!*****************************!*\
  !*** ./src/assets/img3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"4aefff18deb3d600818c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img3.jpg?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\nfunction Contact(){\r\n\r\n    const section = document.createElement(\"section\");\r\n    section.setAttribute('id', 'contact')\r\n    section.classList.add('contact-section')\r\n\r\n    section.innerHTML = `\r\n        \r\n      <h2>Contact</h2>\r\n\r\n      <div class=\"group\">\r\n        <div class=\"text\">\r\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat fugit maiores atque architecto saepe tenetur quasi reiciendis illum sint doloremque alias inventore, asperiores maxime pariatur totam hic assumenda repudiandae, iusto quisquam nisi! Eaque doloremque perspiciatis minus voluptate dicta. A ratione autem dolor iure libero numquam voluptatem nobis laborum et corporis.\r\n        </div>\r\n\r\n        <form>\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" id=\"name\">\r\n\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"email\" id=\"email\">\r\n\r\n          <label for=\"message\">Message</label>\r\n          <textarea id=\"message\" cols=\"30\" rows=\"10\"></textarea>\r\n\r\n          <button type=\"submit\">Send Message</button>\r\n        </form>\r\n      </div>\r\n    \r\n    `\r\n\r\n    return section\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHero)\n/* harmony export */ });\n/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ \"./src/slide.js\");\n/* harmony import */ var _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img3.jpg */ \"./src/assets/img3.jpg\");\n/* harmony import */ var _assets_img2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img2.jpg */ \"./src/assets/img2.jpg\");\n/* harmony import */ var _assets_img1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img1.jpg */ \"./src/assets/img1.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction createHero() {\r\n  const hero = document.createElement(\"div\");\r\n  hero.classList.add(\"hero\");\r\n\r\n  const slidesData = [\r\n    {\r\n      img: _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n      text: \"One cannot think well, love well, sleep well, if one has not dined well.\"\r\n    },\r\n    {\r\n      img: _assets_img2_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n      text: \"Food so good, it's worth the calorie splurge.\"\r\n    },\r\n    {\r\n      img: _assets_img1_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n      text: \"Eating is a necessity, but dining is an art form.\"\r\n    }\r\n  ];\r\n\r\n  slidesData.forEach(slideData => {\r\n    const slide = document.createElement(\"div\");\r\n    slide.classList.add(\"slide\", \"fade\");\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = slideData.img;\r\n    img.alt = \"restaurant image\";\r\n\r\n    const caption = document.createElement(\"div\");\r\n    caption.textContent = slideData.text;\r\n    caption.classList.add(\"caption\");\r\n\r\n    slide.appendChild(img);\r\n    slide.appendChild(caption);\r\n    hero.appendChild(slide);\r\n  });\r\n\r\n\r\n  (0,_slide__WEBPACK_IMPORTED_MODULE_0__.startSlider)(hero);\r\n\r\n  return hero;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/hero.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.js */ \"./src/hero.js\");\n/* harmony import */ var _nav_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-handler.js */ \"./src/nav-handler.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\r\n    const heroContent = document.createElement(\"div\");\r\n    heroContent.appendChild((0,_hero_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    heroContent.classList.add(\"slideshow-container\");\r\n    heroContent.setAttribute('id', 'slideshow-container' );\r\n    content.appendChild(heroContent);\r\n\r\n})\r\n\r\n;(0,_nav_handler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\r\n    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n    \r\n})\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n     content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])())\r\n}\r\n   \r\n)\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RestaurantMenu)\n/* harmony export */ });\n\r\n\r\nfunction RestaurantMenu() {\r\n  const menuData = {\r\n    Appetizers: [\r\n      { name: \"Bruschetta\", price: \"$8.99\", description: \"Toasted bread topped with fresh tomatoes, basil, and garlic\" },\r\n      { name: \"Calamari Fritti\", price: \"$12.99\", description: \"Crispy fried calamari served with marinara sauce\" },\r\n      { name: \"Caesar Salad\", price: \"$9.99\", description: \"Romaine lettuce, parmesan, croutons, and Caesar dressing\" },\r\n    ],\r\n    \"Main Course\": [\r\n      { name: \"Margherita Pizza\", price: \"$14.99\", description: \"Fresh mozzarella, tomato sauce, and basil on wood-fired crust\" },\r\n      { name: \"Fettuccine Alfredo\", price: \"$16.99\", description: \"Creamy parmesan sauce with fettuccine pasta\" },\r\n      { name: \"Grilled Salmon\", price: \"$22.99\", description: \"Atlantic salmon with lemon butter sauce and seasonal vegetables\" },\r\n      { name: \"Ribeye Steak\", price: \"$28.99\", description: \"12oz Ribeye cooked to perfection with garlic mashed potatoes\" },\r\n    ],\r\n    Desserts: [\r\n      { name: \"Tiramisu\", price: \"$7.99\", description: \"Classic Italian dessert with coffee-soaked ladyfingers\" },\r\n      { name: \"Chocolate Lava Cake\", price: \"$8.99\", description: \"Warm chocolate cake with molten center and vanilla ice cream\" },\r\n      { name: \"Panna Cotta\", price: \"$6.99\", description: \"Creamy Italian custard with berry compote\" },\r\n    ],\r\n    Beverages: [\r\n      { name: \"House Wine\", price: \"$8.00\", description: \"Red or White\" },\r\n      { name: \"Craft Beer\", price: \"$6.00\", description: \"Ask your server for today's selection\" },\r\n      { name: \"Espresso\", price: \"$6.00\", description: \"Rich Italian Espresso\" },\r\n    ],\r\n  };\r\n\r\n  const menuContainer = document.createElement(\"div\");\r\n  menuContainer.classList.add(\"menu\");\r\n  menuContainer.setAttribute('id', 'menu')\r\n\r\n  \r\n  const createMenuSection = (title, items) => {\r\n    const section = document.createElement(\"div\");\r\n    section.classList.add(\"menu-section\");\r\n\r\n    section.innerHTML = `\r\n      <h1>${title}</h1>\r\n      <div class=\"line\"></div>\r\n    `;\r\n\r\n    items.forEach(({ name, price, description }) => {\r\n      const item = document.createElement(\"div\");\r\n      item.classList.add(\"menu-item\");\r\n      item.innerHTML = `\r\n        <span class=\"item-name\">${name}</span>\r\n        <span class=\"item-price\">${price}</span>\r\n        <span class=\"item-description\">${description}</span>\r\n      `;\r\n      section.appendChild(item);\r\n    });\r\n\r\n    return section;\r\n  };\r\n\r\n  \r\n  for (const [category, items] of Object.entries(menuData)) {\r\n    const section = createMenuSection(category, items);\r\n    menuContainer.appendChild(section);\r\n  }\r\n\r\n  return menuContainer;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/nav-handler.js":
/*!****************************!*\
  !*** ./src/nav-handler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navHandler)\n/* harmony export */ });\nfunction navHandler() {\r\n  // nav-handler.js\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const navLinks = document.querySelectorAll('a[href^=\"#\"]');\r\n\r\n  navLinks.forEach(link => {\r\n    link.addEventListener(\"click\", (e) => {\r\n      e.preventDefault(); \r\n\r\n      const targetId = link.getAttribute(\"href\");\r\n      const targetEl = document.querySelector(targetId);\r\n\r\n      if (targetEl) {\r\n        targetEl.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\r\n      } else {\r\n        \r\n        console.warn(`Target not found for ${targetId}. If created dynamically, ensure it has that id.`);\r\n      }\r\n    });\r\n  });\r\n});\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/nav-handler.js?\n}");

/***/ }),

/***/ "./src/slide.js":
/*!**********************!*\
  !*** ./src/slide.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startSlider: () => (/* binding */ startSlider)\n/* harmony export */ });\nlet slideIndex = 0;\r\n\r\nfunction autoSlides(container) {\r\n  const slides = container.getElementsByClassName(\"slide\");\r\n  for (let i = 0; i < slides.length; i++) {\r\n    slides[i].style.display = \"none\";\r\n  }\r\n  slideIndex++;\r\n  if (slideIndex > slides.length) {\r\n    slideIndex = 1;\r\n  }\r\n  slides[slideIndex - 1].style.display = \"block\";\r\n  setTimeout(() => autoSlides(container), 5000); \r\n}\r\n\r\nfunction startSlider(container) {\r\n  slideIndex = 0; \r\n  autoSlides(container);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/slide.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;