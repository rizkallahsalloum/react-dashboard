"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./styles/global.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./styles/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Outfit:wght@400;700&display=swap\\\");\\n/* Color styles */\\n:root {\\n  --text: rgba(31, 63, 73, 1);\\n  --text--darker: rgba(35, 40, 45, 1);\\n  --primary: rgba(106, 177, 135, 1);\\n  --secondary: rgba(211, 45, 65, 1);\\n  --darker--green: rgba(31, 63, 73, 1);\\n  --gray: rgba(206, 210, 204, 1);\\n  --light--green: rgba(179, 193, 0, 1);\\n  --white: rgba(255, 255, 255, 1);\\n  --black: rgba(0, 0, 0, 1);\\n  --light--blue: rgba(76, 181, 245, 1);\\n  --light--gray: #f6f9ff;\\n  --main--bg: #dfe9fe;\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\np,\\nfigure,\\npicture {\\n  margin: 0;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  overflow-y: scroll;\\n  scroll-behavior: smooth;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Outfit\\\", \\\"Oswald\\\", sans-serif;\\n  background-color: var(--main--bg);\\n  color: var(--text);\\n  line-height: 1.6;\\n  font-size: 1.6rem;\\n}\\n\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n::selection {\\n  background-color: var(--primary);\\n  color: var(--white);\\n}\\n\\na {\\n  text-decoration: underline;\\n  color: var(--text);\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n  color: var(--primary);\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\ninput {\\n  background: #ffffff;\\n  box-shadow: 0px 4px 4px rgba(221, 221, 221, 0.25);\\n  border-radius: 30px;\\n  border: none;\\n}\\n\\na.active {\\n  width: 15em;\\n  color: var(--text);\\n  background: var(--light--gray);\\n  border-radius: 10px;\\n}\\n@media only screen and (max-width: 64.25em) {\\n  a.active {\\n    width: auto;\\n    background: transparent;\\n  }\\n}\\n\\n@media (prefers-reduced-motion: reduce) {\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n.container {\\n  max-width: 82.5em;\\n  margin: 4rem auto;\\n  display: grid;\\n  grid-template-columns: 19.5em 1fr;\\n  grid-template-areas: \\\"sidebar content\\\";\\n}\\n@media only screen and (max-width: 64.25em) {\\n  .container {\\n    grid-template-columns: auto 1fr;\\n  }\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .container {\\n    margin: 0;\\n    grid-template-columns: 1fr;\\n    grid-template-areas: \\\"sidebar\\\" \\\" content\\\";\\n  }\\n}\\n\\n.main {\\n  width: 100%;\\n  height: 56.25em;\\n  padding: 4.4rem 2.4rem;\\n  grid-area: content;\\n  background: #f7f9ff;\\n  border-radius: 0px 50px 50px 0px;\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .main {\\n    border-radius: 50px;\\n  }\\n}\\n\\n.grid__container {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: repeat(9, minmax(min-content, 5.5em));\\n  grid-template-rows: 10vh 7vh 20vw repeat(2, min-content);\\n  grid-column-gap: 2.4rem;\\n  column-gap: 2.4rem;\\n  grid-row-gap: 3rem;\\n  row-gap: 3rem;\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .grid__container {\\n    row-gap: 12rem;\\n  }\\n}\\n\\n.content {\\n  grid-column: 1/-1;\\n  background-color: aqua;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.scss\",\"webpack://styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAAQ,2HAAA;AAER,iBAAA;AACA;EACE,2BAAA;EACA,mCAAA;EACA,iCAAA;EACA,iCAAA;EACA,oCAAA;EACA,8BAAA;EACA,oCAAA;EACA,+BAAA;EACA,yBAAA;EACA,oCAAA;EACA,sBAAA;EACA,mBAAA;AAAF;;AAGA;;;EAGE,SAAA;EACA,UAAA;EACA,mBAAA;AAAF;;AAEA;;;;;;;;;EASE,SAAA;AACF;;AAEA;EAEE,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,sBAAA;AAAF;;AAEA;EACE,2CAAA;EACA,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AACA;;EAEE,eAAA;EACA,cAAA;AAEF;;AAAA;EACE,gCAAA;EACA,mBAAA;AAGF;;AADA;EACE,0BAAA;EACA,kBAAA;AAIF;;AAFA;EACE,0BAAA;EACA,qBAAA;AAKF;;AAHA;EACE,gBAAA;AAMF;;AAJA;EACE,mBAAA;EACA,iDAAA;EACA,mBAAA;EACA,YAAA;AAOF;;AALA;EACE,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,mBAAA;AAQF;AC3EI;ED+DJ;IAMI,WAAA;IACA,uBAAA;EAUF;AACF;;AARA;EACE;;;IAGE,qCAAA;IACA,uCAAA;IACA,sCAAA;IACA,gCAAA;EAWF;AACF;AARA;EACE,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,iCAAA;EAEA,sCAAA;AASF;ACnGI;EDoFJ;IAQI,+BAAA;EAWF;AACF;AC7GI;EDyFJ;IAWI,SAAA;IACA,0BAAA;IACA,yCACE;EAYJ;AACF;;AARA;EACE,WAAA;EACA,eAAA;EACA,sBAAA;EAEA,kBAAA;EACA,mBAAA;EACA,gCAAA;AAUF;AC7HI;ED4GJ;IASI,mBAAA;EAYF;AACF;;AAVA;EACE,WAAA;EACA,aAAA;EACA,4DAAA;EACA,wDAAA;EACA,uBAAA;EAAA,kBAAA;EACA,kBAAA;EAAA,aAAA;AAaF;AC3II;EDwHJ;IAQI,cAAA;EAeF;AACF;;AAZA;EACE,iBAAA;EACA,sBAAA;AAeF\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Outfit:wght@400;700&display=swap');\\r\\n@import 'mixins';\\r\\n/* Color styles */\\r\\n:root {\\r\\n  --text: rgba(31, 63, 73, 1);\\r\\n  --text--darker: rgba(35, 40, 45, 1);\\r\\n  --primary: rgba(106, 177, 135, 1);\\r\\n  --secondary: rgba(211, 45, 65, 1);\\r\\n  --darker--green: rgba(31, 63, 73, 1);\\r\\n  --gray: rgba(206, 210, 204, 1);\\r\\n  --light--green: rgba(179, 193, 0, 1);\\r\\n  --white: rgba(255, 255, 255, 1);\\r\\n  --black: rgba(0, 0, 0, 1);\\r\\n  --light--blue: rgba(76, 181, 245, 1);\\r\\n  --light--gray: #f6f9ff;\\r\\n  --main--bg: #dfe9fe;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::after,\\r\\n*::before {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: inherit;\\r\\n}\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\np,\\r\\nfigure,\\r\\npicture {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  // This defines what 1rem is\\r\\n  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%\\r\\n  overflow-y: scroll;\\r\\n  scroll-behavior: smooth;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n  font-family: 'Outfit', 'Oswald', sans-serif;\\r\\n  background-color: var(--main--bg);\\r\\n  color: var(--text);\\r\\n  line-height: 1.6;\\r\\n  font-size: 1.6rem;\\r\\n}\\r\\nimg,\\r\\npicture {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n::selection {\\r\\n  background-color: var(--primary);\\r\\n  color: var(--white);\\r\\n}\\r\\na {\\r\\n  text-decoration: underline;\\r\\n  color: var(--text);\\r\\n}\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n  color: var(--primary);\\r\\n}\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\ninput {\\r\\n  background: #ffffff;\\r\\n  box-shadow: 0px 4px 4px rgba(221, 221, 221, 0.25);\\r\\n  border-radius: 30px;\\r\\n  border: none;\\r\\n}\\r\\na.active {\\r\\n  width: 15em;\\r\\n  color: var(--text);\\r\\n  background: var(--light--gray);\\r\\n  border-radius: 10px;\\r\\n  @include respond(tab-port) {\\r\\n    width: auto;\\r\\n    background: transparent;\\r\\n  }\\r\\n}\\r\\n@media (prefers-reduced-motion: reduce) {\\r\\n  *,\\r\\n  *::before,\\r\\n  *::after {\\r\\n    animation-duration: 0.01ms !important;\\r\\n    animation-iteration-count: 1 !important;\\r\\n    transition-duration: 0.01ms !important;\\r\\n    scroll-behavior: auto !important;\\r\\n  }\\r\\n}\\r\\n\\r\\n.container {\\r\\n  max-width: 82.5em;\\r\\n  margin: 4rem auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: 19.5em 1fr;\\r\\n\\r\\n  grid-template-areas: 'sidebar content';\\r\\n  @include respond(tab-port) {\\r\\n    grid-template-columns: auto 1fr;\\r\\n  }\\r\\n  @include respond(mobile) {\\r\\n    margin: 0;\\r\\n    grid-template-columns: 1fr;\\r\\n    grid-template-areas:\\r\\n      'sidebar'\\r\\n      ' content';\\r\\n  }\\r\\n}\\r\\n\\r\\n.main {\\r\\n  width: 100%;\\r\\n  height: 56.25em;\\r\\n  padding: 4.4rem 2.4rem;\\r\\n  // display: grid;\\r\\n  grid-area: content;\\r\\n  background: #f7f9ff;\\r\\n  border-radius: 0px 50px 50px 0px;\\r\\n  @include respond(mobile) {\\r\\n    border-radius: 50px;\\r\\n  }\\r\\n}\\r\\n.grid__container {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(9, minmax(min-content, 5.5em));\\r\\n  grid-template-rows: 10vh 7vh 20vw repeat(2, min-content);\\r\\n  column-gap: 2.4rem;\\r\\n  row-gap: 3rem;\\r\\n  @include respond(mobile) {\\r\\n    row-gap: 12rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.content {\\r\\n  grid-column: 1 / -1;\\r\\n  background-color: aqua;\\r\\n}\\r\\n\",\"@use 'sass:map';\\r\\n\\r\\n@mixin display-grid {\\r\\n  display: -ms-grid;\\r\\n  display: grid;\\r\\n}\\r\\n\\r\\n@mixin respond($breakpoint) {\\r\\n  @if $breakpoint == mobile {\\r\\n    @media only screen and (max-width: 37.5em) {\\r\\n      @content;\\r\\n    } //600px\\r\\n  }\\r\\n  @if $breakpoint == tab-port {\\r\\n    @media only screen and (max-width: 64.25em) {\\r\\n      @content;\\r\\n    } //900px\\r\\n  }\\r\\n  @if $breakpoint == tab-land {\\r\\n    @media only screen and (max-width: 80em) {\\r\\n      @content;\\r\\n    } //1200px\\r\\n  }\\r\\n  @if $breakpoint == big-desktop {\\r\\n    @media only screen and (min-width: 112.5em) {\\r\\n      @content;\\r\\n    } //1800\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbNF0hLi9zdHlsZXMvZ2xvYmFsLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGlIQUFpSCxJQUFJLElBQUksMkJBQTJCLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHdDQUF3QyxzQ0FBc0Msc0NBQXNDLHlDQUF5QyxtQ0FBbUMseUNBQXlDLG9DQUFvQyw4QkFBOEIseUNBQXlDLDJCQUEyQix3QkFBd0IsR0FBRyw4QkFBOEIsY0FBYyxlQUFlLHdCQUF3QixHQUFHLDBEQUEwRCxjQUFjLEdBQUcsVUFBVSxxQkFBcUIsdUJBQXVCLDRCQUE0QiwyQkFBMkIsR0FBRyxVQUFVLG9EQUFvRCxzQ0FBc0MsdUJBQXVCLHFCQUFxQixzQkFBc0IsR0FBRyxtQkFBbUIsb0JBQW9CLG1CQUFtQixHQUFHLGlCQUFpQixxQ0FBcUMsd0JBQXdCLEdBQUcsT0FBTywrQkFBK0IsdUJBQXVCLEdBQUcsYUFBYSwrQkFBK0IsMEJBQTBCLEdBQUcsUUFBUSxxQkFBcUIsR0FB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QUFLLGVBQWUsa0JBQWtCLHNCQUFzQiw2QkFBNkIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsdUNBQXVDLGdDQUFnQyw0QkFBNEIsT0FBTyxLQUFLLHNCQUFzQixrQkFBa0Isb0JBQW9CLG1FQUFtRSwrREFBK0QseUJBQXlCLG9CQUFvQixnQ0FBZ0MsdUJBQXVCLE9BQU8sS0FBSyxrQkFBa0IsMEJBQTBCLDZCQUE2QixLQUFLLHVCQUF1Qiw2QkFBNkIsd0JBQXdCLG9CQUFvQixLQUFLLHFDQUFxQyxpQ0FBaUMsb0RBQW9ELG1CQUFtQixVQUFVLGNBQWMsbUNBQW1DLHFEQUFxRCxtQkFBbUIsVUFBVSxjQUFjLG1DQUFtQyxrREFBa0QsbUJBQW1CLFVBQVUsZUFBZSxzQ0FBc0MscURBQXFELG1CQUFtQixVQUFVLGFBQWEsS0FBSyx1QkFBdUI7QUFDeHFRO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5zY3NzP2I2YTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDMwMDs0MDA7NjAwOzcwMCZmYW1pbHk9T3V0Zml0OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4vKiBDb2xvciBzdHlsZXMgKi9cXG46cm9vdCB7XFxuICAtLXRleHQ6IHJnYmEoMzEsIDYzLCA3MywgMSk7XFxuICAtLXRleHQtLWRhcmtlcjogcmdiYSgzNSwgNDAsIDQ1LCAxKTtcXG4gIC0tcHJpbWFyeTogcmdiYSgxMDYsIDE3NywgMTM1LCAxKTtcXG4gIC0tc2Vjb25kYXJ5OiByZ2JhKDIxMSwgNDUsIDY1LCAxKTtcXG4gIC0tZGFya2VyLS1ncmVlbjogcmdiYSgzMSwgNjMsIDczLCAxKTtcXG4gIC0tZ3JheTogcmdiYSgyMDYsIDIxMCwgMjA0LCAxKTtcXG4gIC0tbGlnaHQtLWdyZWVuOiByZ2JhKDE3OSwgMTkzLCAwLCAxKTtcXG4gIC0td2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICAtLWJsYWNrOiByZ2JhKDAsIDAsIDAsIDEpO1xcbiAgLS1saWdodC0tYmx1ZTogcmdiYSg3NiwgMTgxLCAyNDUsIDEpO1xcbiAgLS1saWdodC0tZ3JheTogI2Y2ZjlmZjtcXG4gIC0tbWFpbi0tYmc6ICNkZmU5ZmU7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbnAsXFxuZmlndXJlLFxcbnBpY3R1cmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPdXRmaXRcXFwiLCBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4yNSk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5hLmFjdGl2ZSB7XFxuICB3aWR0aDogMTVlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LS1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQuMjVlbSkge1xcbiAgYS5hY3RpdmUge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDgyLjVlbTtcXG4gIG1hcmdpbjogNHJlbSBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTkuNWVtIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0LjI1ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJzaWRlYmFyXFxcIiBcXFwiIGNvbnRlbnRcXFwiO1xcbiAgfVxcbn1cXG5cXG4ubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTYuMjVlbTtcXG4gIHBhZGRpbmc6IDQuNHJlbSAyLjRyZW07XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kOiAjZjdmOWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDUwcHggNTBweCAwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7XFxuICAubWFpbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB9XFxufVxcblxcbi5ncmlkX19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgbWlubWF4KG1pbi1jb250ZW50LCA1LjVlbSkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDd2aCAyMHZ3IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxuICBncmlkLWNvbHVtbi1nYXA6IDIuNHJlbTtcXG4gIGNvbHVtbi1nYXA6IDIuNHJlbTtcXG4gIGdyaWQtcm93LWdhcDogM3JlbTtcXG4gIHJvdy1nYXA6IDNyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7XFxuICAuZ3JpZF9fY29udGFpbmVyIHtcXG4gICAgcm93LWdhcDogMTJyZW07XFxuICB9XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQVEsMkhBQUE7QUFFUixpQkFBQTtBQUNBO0VBQ0UsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTs7Ozs7Ozs7O0VBU0UsU0FBQTtBQUNGOztBQUVBO0VBRUUsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTs7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFRRjtBQzNFSTtFRCtESjtJQU1JLFdBQUE7SUFDQSx1QkFBQTtFQVVGO0FBQ0Y7O0FBUkE7RUFDRTs7O0lBR0UscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLHNDQUFBO0lBQ0EsZ0NBQUE7RUFXRjtBQUNGO0FBUkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBRUEsc0NBQUE7QUFTRjtBQ25HSTtFRG9GSjtJQVFJLCtCQUFBO0VBV0Y7QUFDRjtBQzdHSTtFRHlGSjtJQVdJLFNBQUE7SUFDQSwwQkFBQTtJQUNBLHlDQUNFO0VBWUo7QUFDRjs7QUFSQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFVRjtBQzdISTtFRDRHSjtJQVNJLG1CQUFBO0VBWUY7QUFDRjs7QUFWQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7RUFDQSx3REFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7QUFhRjtBQzNJSTtFRHdISjtJQVFJLGNBQUE7RUFlRjtBQUNGOztBQVpBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQWVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDMwMDs0MDA7NjAwOzcwMCZmYW1pbHk9T3V0Zml0OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcbi8qIENvbG9yIHN0eWxlcyAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tdGV4dDogcmdiYSgzMSwgNjMsIDczLCAxKTtcXHJcXG4gIC0tdGV4dC0tZGFya2VyOiByZ2JhKDM1LCA0MCwgNDUsIDEpO1xcclxcbiAgLS1wcmltYXJ5OiByZ2JhKDEwNiwgMTc3LCAxMzUsIDEpO1xcclxcbiAgLS1zZWNvbmRhcnk6IHJnYmEoMjExLCA0NSwgNjUsIDEpO1xcclxcbiAgLS1kYXJrZXItLWdyZWVuOiByZ2JhKDMxLCA2MywgNzMsIDEpO1xcclxcbiAgLS1ncmF5OiByZ2JhKDIwNiwgMjEwLCAyMDQsIDEpO1xcclxcbiAgLS1saWdodC0tZ3JlZW46IHJnYmEoMTc5LCAxOTMsIDAsIDEpO1xcclxcbiAgLS13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIC0tYmxhY2s6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICAtLWxpZ2h0LS1ibHVlOiByZ2JhKDc2LCAxODEsIDI0NSwgMSk7XFxyXFxuICAtLWxpZ2h0LS1ncmF5OiAjZjZmOWZmO1xcclxcbiAgLS1tYWluLS1iZzogI2RmZTlmZTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJvZHksXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxucCxcXHJcXG5maWd1cmUsXFxyXFxucGljdHVyZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLy8gVGhpcyBkZWZpbmVzIHdoYXQgMXJlbSBpc1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTsgLy8xIHJlbSA9IDEwcHg7IDEwcHgvMTZweCA9IDYyLjUlXFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tLWJnKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG59XFxyXFxuaW1nLFxcclxcbnBpY3R1cmUge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG59XFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5hLmFjdGl2ZSB7XFxyXFxuICB3aWR0aDogMTVlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LS1ncmF5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXHJcXG4gICosXFxyXFxuICAqOjpiZWZvcmUsXFxyXFxuICAqOjphZnRlciB7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogODIuNWVtO1xcclxcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOS41ZW0gMWZyO1xcclxcblxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3NpZGViYXIgY29udGVudCc7XFxyXFxuICBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSByZXNwb25kKG1vYmlsZSkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICdzaWRlYmFyJ1xcclxcbiAgICAgICcgY29udGVudCc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1Ni4yNWVtO1xcclxcbiAgcGFkZGluZzogNC40cmVtIDIuNHJlbTtcXHJcXG4gIC8vIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmOWZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDUwcHggNTBweCAwcHg7XFxyXFxuICBAaW5jbHVkZSByZXNwb25kKG1vYmlsZSkge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZ3JpZF9fY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIG1pbm1heChtaW4tY29udGVudCwgNS41ZW0pKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA3dmggMjB2dyByZXBlYXQoMiwgbWluLWNvbnRlbnQpO1xcclxcbiAgY29sdW1uLWdhcDogMi40cmVtO1xcclxcbiAgcm93LWdhcDogM3JlbTtcXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQobW9iaWxlKSB7XFxyXFxuICAgIHJvdy1nYXA6IDEycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG59XFxyXFxuXCIsXCJAdXNlICdzYXNzOm1hcCc7XFxyXFxuXFxyXFxuQG1peGluIGRpc3BsYXktZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiByZXNwb25kKCRicmVha3BvaW50KSB7XFxyXFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gbW9iaWxlIHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy41ZW0pIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfSAvLzYwMHB4XFxyXFxuICB9XFxyXFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnQge1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0LjI1ZW0pIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfSAvLzkwMHB4XFxyXFxuICB9XFxyXFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLWxhbmQge1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwZW0pIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfSAvLzEyMDBweFxcclxcbiAgfVxcclxcbiAgQGlmICRicmVha3BvaW50ID09IGJpZy1kZXNrdG9wIHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTIuNWVtKSB7XFxyXFxuICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH0gLy8xODAwXFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./styles/global.scss\n"));

/***/ })

});