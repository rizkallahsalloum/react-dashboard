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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Outfit:wght@400;700&display=swap\\\");\\n/* Color styles */\\n:root {\\n  --clr-text: rgba(31, 63, 73, 1);\\n  --clr-text--darker: rgba(35, 40, 45, 1);\\n  --clr-primary: rgba(106, 177, 135, 1);\\n  --clr-secondary: rgba(211, 45, 65, 1);\\n  --clr-darker--green: rgba(31, 63, 73, 1);\\n  --clr-gray: rgba(206, 210, 204, 1);\\n  --clr-light--green: rgba(179, 193, 0, 1);\\n  --clr-white: rgba(255, 255, 255, 1);\\n  --clr-black: rgba(0, 0, 0, 1);\\n  --clr-light--blue: rgba(76, 181, 245, 1);\\n  --clr-light--gray: #f6f9ff;\\n  --clr-main--bg: #dfe9fe;\\n  --font-primary: \\\"Outfit\\\";\\n  --font-secondary: \\\"Oswald\\\";\\n  --fs--sidebar: 1.6rem;\\n  --fs-component: 1.8rem;\\n  --fs-text: 1.4rem;\\n  --spacer: 0.8rem;\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\np,\\nfigure,\\npicture {\\n  margin: 0;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  overflow-y: scroll;\\n  scroll-behavior: smooth;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Outfit\\\", \\\"Oswald\\\", sans-serif;\\n  background-color: var(--clr-main--bg);\\n  color: var(--clr-text);\\n  line-height: 1.6;\\n  font-size: 1.6rem;\\n}\\n\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n::selection {\\n  background-color: var(--clr-primary);\\n  color: var(--clr-white);\\n}\\n\\na {\\n  text-decoration: underline;\\n  color: var(--clr-text);\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n  color: var(--clr-primary);\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\ninput {\\n  background: var(--clr-white);\\n  box-shadow: 0px 4px 4px rgba(221, 221, 221, 0.25);\\n  border-radius: 30px;\\n  border: none;\\n}\\n\\na.active {\\n  width: 15em;\\n  color: var(--clr-text);\\n  background: var(--clr-light--gray);\\n  border-radius: 10px;\\n}\\n@media only screen and (max-width: 64.25em) {\\n  a.active {\\n    width: auto;\\n    background: transparent;\\n  }\\n}\\n\\n@media (prefers-reduced-motion: reduce) {\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n.container {\\n  max-width: 82.5em;\\n  margin: 4rem auto;\\n  display: grid;\\n  grid-template-columns: 19.5em 1fr;\\n  grid-template-areas: \\\"sidebar content\\\";\\n}\\n@media only screen and (max-width: 64.25em) {\\n  .container {\\n    grid-template-columns: auto 1fr;\\n  }\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .container {\\n    margin: 0;\\n    grid-template-columns: 1fr;\\n    grid-template-areas: \\\"sidebar\\\" \\\" content\\\";\\n  }\\n}\\n\\n.main {\\n  width: 100%;\\n  height: 56.25em;\\n  padding: 4.4rem 2.4rem;\\n  grid-area: content;\\n  background: #f7f9ff;\\n  border-radius: 0px 50px 50px 0px;\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .main {\\n    border-radius: 50px;\\n  }\\n}\\n\\n.grid__container {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: repeat(9, minmax(min-content, 5.5em));\\n  grid-column-gap: 2.4rem;\\n  column-gap: 2.4rem;\\n  grid-row-gap: 3rem;\\n  row-gap: 3rem;\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .grid__container {\\n    row-gap: 12rem;\\n  }\\n}\\n\\n.content {\\n  grid-column: 1/-1;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.scss\",\"webpack://styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAAQ,2HAAA;AAER,iBAAA;AACA;EACE,+BAAA;EACA,uCAAA;EACA,qCAAA;EACA,qCAAA;EACA,wCAAA;EACA,kCAAA;EACA,wCAAA;EACA,mCAAA;EACA,6BAAA;EACA,wCAAA;EACA,0BAAA;EACA,uBAAA;EACA,wBAAA;EACA,0BAAA;EACA,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,gBAAA;AAAF;;AAGA;;;EAGE,SAAA;EACA,UAAA;EACA,mBAAA;AAAF;;AAEA;;;;;;;;;EASE,SAAA;AACF;;AAEA;EAEE,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,sBAAA;AAAF;;AAEA;EACE,2CAAA;EACA,qCAAA;EACA,sBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AACA;;EAEE,eAAA;EACA,cAAA;AAEF;;AAAA;EACE,oCAAA;EACA,uBAAA;AAGF;;AADA;EACE,0BAAA;EACA,sBAAA;AAIF;;AAFA;EACE,0BAAA;EACA,yBAAA;AAKF;;AAHA;EACE,gBAAA;AAMF;;AAJA;EACE,4BAAA;EACA,iDAAA;EACA,mBAAA;EACA,YAAA;AAOF;;AALA;EACE,WAAA;EACA,sBAAA;EACA,kCAAA;EACA,mBAAA;AAQF;ACjFI;EDqEJ;IAMI,WAAA;IACA,uBAAA;EAUF;AACF;;AARA;EACE;;;IAGE,qCAAA;IACA,uCAAA;IACA,sCAAA;IACA,gCAAA;EAWF;AACF;AARA;EACE,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,iCAAA;EAEA,sCAAA;AASF;ACzGI;ED0FJ;IAQI,+BAAA;EAWF;AACF;ACnHI;ED+FJ;IAWI,SAAA;IACA,0BAAA;IACA,yCACE;EAYJ;AACF;;AARA;EACE,WAAA;EACA,eAAA;EACA,sBAAA;EAEA,kBAAA;EACA,mBAAA;EACA,gCAAA;AAUF;ACnII;EDkHJ;IASI,mBAAA;EAYF;AACF;;AAVA;EACE,WAAA;EACA,aAAA;EACA,4DAAA;EAEA,uBAAA;EAAA,kBAAA;EACA,kBAAA;EAAA,aAAA;AAYF;AChJI;ED8HJ;IAQI,cAAA;EAcF;AACF;;AAXA;EACE,iBAAA;AAcF\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Outfit:wght@400;700&display=swap');\\r\\n@import 'mixins';\\r\\n/* Color styles */\\r\\n:root {\\r\\n  --clr-text: rgba(31, 63, 73, 1);\\r\\n  --clr-text--darker: rgba(35, 40, 45, 1);\\r\\n  --clr-primary: rgba(106, 177, 135, 1);\\r\\n  --clr-secondary: rgba(211, 45, 65, 1);\\r\\n  --clr-darker--green: rgba(31, 63, 73, 1);\\r\\n  --clr-gray: rgba(206, 210, 204, 1);\\r\\n  --clr-light--green: rgba(179, 193, 0, 1);\\r\\n  --clr-white: rgba(255, 255, 255, 1);\\r\\n  --clr-black: rgba(0, 0, 0, 1);\\r\\n  --clr-light--blue: rgba(76, 181, 245, 1);\\r\\n  --clr-light--gray: #f6f9ff;\\r\\n  --clr-main--bg: #dfe9fe;\\r\\n  --font-primary: 'Outfit';\\r\\n  --font-secondary: 'Oswald';\\r\\n  --fs--sidebar: 1.6rem;\\r\\n  --fs-component: 1.8rem;\\r\\n  --fs-text: 1.4rem;\\r\\n  --spacer: 0.8rem;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::after,\\r\\n*::before {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: inherit;\\r\\n}\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\np,\\r\\nfigure,\\r\\npicture {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  // This defines what 1rem is\\r\\n  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%\\r\\n  overflow-y: scroll;\\r\\n  scroll-behavior: smooth;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n  font-family: 'Outfit', 'Oswald', sans-serif;\\r\\n  background-color: var(--clr-main--bg);\\r\\n  color: var(--clr-text);\\r\\n  line-height: 1.6;\\r\\n  font-size: 1.6rem;\\r\\n}\\r\\nimg,\\r\\npicture {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n::selection {\\r\\n  background-color: var(--clr-primary);\\r\\n  color: var(--clr-white);\\r\\n}\\r\\na {\\r\\n  text-decoration: underline;\\r\\n  color: var(--clr-text);\\r\\n}\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n  color: var(--clr-primary);\\r\\n}\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\ninput {\\r\\n  background: var(--clr-white);\\r\\n  box-shadow: 0px 4px 4px rgba(221, 221, 221, 0.25);\\r\\n  border-radius: 30px;\\r\\n  border: none;\\r\\n}\\r\\na.active {\\r\\n  width: 15em;\\r\\n  color: var(--clr-text);\\r\\n  background: var(--clr-light--gray);\\r\\n  border-radius: 10px;\\r\\n  @include respond(tab-port) {\\r\\n    width: auto;\\r\\n    background: transparent;\\r\\n  }\\r\\n}\\r\\n@media (prefers-reduced-motion: reduce) {\\r\\n  *,\\r\\n  *::before,\\r\\n  *::after {\\r\\n    animation-duration: 0.01ms !important;\\r\\n    animation-iteration-count: 1 !important;\\r\\n    transition-duration: 0.01ms !important;\\r\\n    scroll-behavior: auto !important;\\r\\n  }\\r\\n}\\r\\n\\r\\n.container {\\r\\n  max-width: 82.5em;\\r\\n  margin: 4rem auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: 19.5em 1fr;\\r\\n\\r\\n  grid-template-areas: 'sidebar content';\\r\\n  @include respond(tab-port) {\\r\\n    grid-template-columns: auto 1fr;\\r\\n  }\\r\\n  @include respond(mobile) {\\r\\n    margin: 0;\\r\\n    grid-template-columns: 1fr;\\r\\n    grid-template-areas:\\r\\n      'sidebar'\\r\\n      ' content';\\r\\n  }\\r\\n}\\r\\n\\r\\n.main {\\r\\n  width: 100%;\\r\\n  height: 56.25em;\\r\\n  padding: 4.4rem 2.4rem;\\r\\n  // display: grid;\\r\\n  grid-area: content;\\r\\n  background: #f7f9ff;\\r\\n  border-radius: 0px 50px 50px 0px;\\r\\n  @include respond(mobile) {\\r\\n    border-radius: 50px;\\r\\n  }\\r\\n}\\r\\n.grid__container {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(9, minmax(min-content, 5.5em));\\r\\n  // grid-template-rows: 10vh 7vh 20vw repeat(3, min-content);\\r\\n  column-gap: 2.4rem;\\r\\n  row-gap: 3rem;\\r\\n  @include respond(mobile) {\\r\\n    row-gap: 12rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.content {\\r\\n  grid-column: 1 / -1;\\r\\n}\\r\\n\",\"@use 'sass:map';\\r\\n\\r\\n@mixin display-grid {\\r\\n  display: -ms-grid;\\r\\n  display: grid;\\r\\n}\\r\\n\\r\\n@mixin respond($breakpoint) {\\r\\n  @if $breakpoint == mobile {\\r\\n    @media only screen and (max-width: 37.5em) {\\r\\n      @content;\\r\\n    } //600px\\r\\n  }\\r\\n  @if $breakpoint == tab-port {\\r\\n    @media only screen and (max-width: 64.25em) {\\r\\n      @content;\\r\\n    } //900px\\r\\n  }\\r\\n  @if $breakpoint == tab-land {\\r\\n    @media only screen and (max-width: 80em) {\\r\\n      @content;\\r\\n    } //1200px\\r\\n  }\\r\\n  @if $breakpoint == big-desktop {\\r\\n    @media only screen and (min-width: 112.5em) {\\r\\n      @content;\\r\\n    } //1800\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbNF0hLi9zdHlsZXMvZ2xvYmFsLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGlIQUFpSCxJQUFJLElBQUksMkJBQTJCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLDRDQUE0QywwQ0FBMEMsMENBQTBDLDZDQUE2Qyx1Q0FBdUMsNkNBQTZDLHdDQUF3QyxrQ0FBa0MsNkNBQTZDLCtCQUErQiw0QkFBNEIsK0JBQStCLGlDQUFpQywwQkFBMEIsMkJBQTJCLHNCQUFzQixxQkFBcUIsR0FBRyw4QkFBOEIsY0FBYyxlQUFlLHdCQUF3QixHQUFHLDBEQUEwRCxjQUFjLEdBQUcsVUFBVSxxQkFBcUIsdUJBQXVCLDRCQUE0QiwyQkFBMkIsR0FBRyxVQUFVLG9EQUFvRCwwQ0FBMEMsMkJBQTJCLHFCQUFxQixzQkFBc0IsR0FBRyxtQkFBbUIsb0JBQW9CLG1CQUFtQixHQUFHLGlCQUFpQix5Q0FBeUMsNEJBQTRCLEdBQUcsT0FBTywrQkFBK0IsMkJBQTJCLEdB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Qix3QkFBd0Isd0JBQXdCLG9CQUFvQix3Q0FBd0MsaURBQWlELGtDQUFrQyx3Q0FBd0MsT0FBTyxnQ0FBZ0Msa0JBQWtCLG1DQUFtQyxvRUFBb0UsT0FBTyxLQUFLLGVBQWUsa0JBQWtCLHNCQUFzQiw2QkFBNkIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsdUNBQXVDLGdDQUFnQyw0QkFBNEIsT0FBTyxLQUFLLHNCQUFzQixrQkFBa0Isb0JBQW9CLG1FQUFtRSxrRUFBa0UseUJBQXlCLG9CQUFvQixnQ0FBZ0MsdUJBQXVCLE9BQU8sS0FBSyxrQkFBa0IsMEJBQTBCLEtBQUssdUJBQXVCLDZCQUE2Qix3QkFBd0Isb0JBQW9CLEtBQUsscUNBQXFDLGlDQUFpQyxvREFBb0QsbUJBQW1CLFVBQVUsY0FBYyxtQ0FBbUMscURBQXFELG1CQUFtQixVQUFVLGNBQWMsbUNBQW1DLGtEQUFrRCxtQkFBbUIsVUFBVSxlQUFlLHNDQUFzQyxxREFBcUQsbUJBQW1CLFVBQVUsYUFBYSxLQUFLLHVCQUF1QjtBQUM1bFI7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLnNjc3M/YjZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMzAwOzQwMDs2MDA7NzAwJmZhbWlseT1PdXRmaXQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbi8qIENvbG9yIHN0eWxlcyAqL1xcbjpyb290IHtcXG4gIC0tY2xyLXRleHQ6IHJnYmEoMzEsIDYzLCA3MywgMSk7XFxuICAtLWNsci10ZXh0LS1kYXJrZXI6IHJnYmEoMzUsIDQwLCA0NSwgMSk7XFxuICAtLWNsci1wcmltYXJ5OiByZ2JhKDEwNiwgMTc3LCAxMzUsIDEpO1xcbiAgLS1jbHItc2Vjb25kYXJ5OiByZ2JhKDIxMSwgNDUsIDY1LCAxKTtcXG4gIC0tY2xyLWRhcmtlci0tZ3JlZW46IHJnYmEoMzEsIDYzLCA3MywgMSk7XFxuICAtLWNsci1ncmF5OiByZ2JhKDIwNiwgMjEwLCAyMDQsIDEpO1xcbiAgLS1jbHItbGlnaHQtLWdyZWVuOiByZ2JhKDE3OSwgMTkzLCAwLCAxKTtcXG4gIC0tY2xyLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgLS1jbHItYmxhY2s6IHJnYmEoMCwgMCwgMCwgMSk7XFxuICAtLWNsci1saWdodC0tYmx1ZTogcmdiYSg3NiwgMTgxLCAyNDUsIDEpO1xcbiAgLS1jbHItbGlnaHQtLWdyYXk6ICNmNmY5ZmY7XFxuICAtLWNsci1tYWluLS1iZzogI2RmZTlmZTtcXG4gIC0tZm9udC1wcmltYXJ5OiBcXFwiT3V0Zml0XFxcIjtcXG4gIC0tZm9udC1zZWNvbmRhcnk6IFxcXCJPc3dhbGRcXFwiO1xcbiAgLS1mcy0tc2lkZWJhcjogMS42cmVtO1xcbiAgLS1mcy1jb21wb25lbnQ6IDEuOHJlbTtcXG4gIC0tZnMtdGV4dDogMS40cmVtO1xcbiAgLS1zcGFjZXI6IDAuOHJlbTtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxucCxcXG5maWd1cmUsXFxucGljdHVyZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk91dGZpdFxcXCIsIFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW1haW4tLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItd2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmEuYWN0aXZlIHtcXG4gIHdpZHRoOiAxNWVtO1xcbiAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodC0tZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0LjI1ZW0pIHtcXG4gIGEuYWN0aXZlIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA4Mi41ZW07XFxuICBtYXJnaW46IDRyZW0gYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE5LjVlbSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwic2lkZWJhciBjb250ZW50XFxcIjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NC4yNWVtKSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy41ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwic2lkZWJhclxcXCIgXFxcIiBjb250ZW50XFxcIjtcXG4gIH1cXG59XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU2LjI1ZW07XFxuICBwYWRkaW5nOiA0LjRyZW0gMi40cmVtO1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgYmFja2dyb3VuZDogI2Y3ZjlmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkge1xcbiAgLm1haW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgfVxcbn1cXG5cXG4uZ3JpZF9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIG1pbm1heChtaW4tY29udGVudCwgNS41ZW0pKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMi40cmVtO1xcbiAgY29sdW1uLWdhcDogMi40cmVtO1xcbiAgZ3JpZC1yb3ctZ2FwOiAzcmVtO1xcbiAgcm93LWdhcDogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy41ZW0pIHtcXG4gIC5ncmlkX19jb250YWluZXIge1xcbiAgICByb3ctZ2FwOiAxMnJlbTtcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFsLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFRLDJIQUFBO0FBRVIsaUJBQUE7QUFDQTtFQUNFLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7Ozs7Ozs7OztFQVNFLFNBQUE7QUFDRjs7QUFFQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUsZUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUFHRjs7QUFEQTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7QUFJRjs7QUFGQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSw0QkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBUUY7QUNqRkk7RURxRUo7SUFNSSxXQUFBO0lBQ0EsdUJBQUE7RUFVRjtBQUNGOztBQVJBO0VBQ0U7OztJQUdFLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSxzQ0FBQTtJQUNBLGdDQUFBO0VBV0Y7QUFDRjtBQVJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUVBLHNDQUFBO0FBU0Y7QUN6R0k7RUQwRko7SUFRSSwrQkFBQTtFQVdGO0FBQ0Y7QUNuSEk7RUQrRko7SUFXSSxTQUFBO0lBQ0EsMEJBQUE7SUFDQSx5Q0FDRTtFQVlKO0FBQ0Y7O0FBUkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBVUY7QUNuSUk7RURrSEo7SUFTSSxtQkFBQTtFQVlGO0FBQ0Y7O0FBVkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0VBRUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtBQVlGO0FDaEpJO0VEOEhKO0lBUUksY0FBQTtFQWNGO0FBQ0Y7O0FBWEE7RUFDRSxpQkFBQTtBQWNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDMwMDs0MDA7NjAwOzcwMCZmYW1pbHk9T3V0Zml0OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcbi8qIENvbG9yIHN0eWxlcyAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tY2xyLXRleHQ6IHJnYmEoMzEsIDYzLCA3MywgMSk7XFxyXFxuICAtLWNsci10ZXh0LS1kYXJrZXI6IHJnYmEoMzUsIDQwLCA0NSwgMSk7XFxyXFxuICAtLWNsci1wcmltYXJ5OiByZ2JhKDEwNiwgMTc3LCAxMzUsIDEpO1xcclxcbiAgLS1jbHItc2Vjb25kYXJ5OiByZ2JhKDIxMSwgNDUsIDY1LCAxKTtcXHJcXG4gIC0tY2xyLWRhcmtlci0tZ3JlZW46IHJnYmEoMzEsIDYzLCA3MywgMSk7XFxyXFxuICAtLWNsci1ncmF5OiByZ2JhKDIwNiwgMjEwLCAyMDQsIDEpO1xcclxcbiAgLS1jbHItbGlnaHQtLWdyZWVuOiByZ2JhKDE3OSwgMTkzLCAwLCAxKTtcXHJcXG4gIC0tY2xyLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgLS1jbHItYmxhY2s6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICAtLWNsci1saWdodC0tYmx1ZTogcmdiYSg3NiwgMTgxLCAyNDUsIDEpO1xcclxcbiAgLS1jbHItbGlnaHQtLWdyYXk6ICNmNmY5ZmY7XFxyXFxuICAtLWNsci1tYWluLS1iZzogI2RmZTlmZTtcXHJcXG4gIC0tZm9udC1wcmltYXJ5OiAnT3V0Zml0JztcXHJcXG4gIC0tZm9udC1zZWNvbmRhcnk6ICdPc3dhbGQnO1xcclxcbiAgLS1mcy0tc2lkZWJhcjogMS42cmVtO1xcclxcbiAgLS1mcy1jb21wb25lbnQ6IDEuOHJlbTtcXHJcXG4gIC0tZnMtdGV4dDogMS40cmVtO1xcclxcbiAgLS1zcGFjZXI6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJvZHksXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxucCxcXHJcXG5maWd1cmUsXFxyXFxucGljdHVyZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLy8gVGhpcyBkZWZpbmVzIHdoYXQgMXJlbSBpc1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTsgLy8xIHJlbSA9IDEwcHg7IDEwcHgvMTZweCA9IDYyLjUlXFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1tYWluLS1iZyk7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbn1cXHJcXG5pbWcsXFxyXFxucGljdHVyZSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcclxcbn1cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXdoaXRlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5hLmFjdGl2ZSB7XFxyXFxuICB3aWR0aDogMTVlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbGlnaHQtLWdyYXkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcclxcbiAgKixcXHJcXG4gICo6OmJlZm9yZSxcXHJcXG4gICo6OmFmdGVyIHtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA4Mi41ZW07XFxyXFxuICBtYXJnaW46IDRyZW0gYXV0bztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE5LjVlbSAxZnI7XFxyXFxuXFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnc2lkZWJhciBjb250ZW50JztcXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQobW9iaWxlKSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgJ3NpZGViYXInXFxyXFxuICAgICAgJyBjb250ZW50JztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU2LjI1ZW07XFxyXFxuICBwYWRkaW5nOiA0LjRyZW0gMi40cmVtO1xcclxcbiAgLy8gZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2Y5ZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggNTBweCA1MHB4IDBweDtcXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQobW9iaWxlKSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5ncmlkX19jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgbWlubWF4KG1pbi1jb250ZW50LCA1LjVlbSkpO1xcclxcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDd2aCAyMHZ3IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxyXFxuICBjb2x1bW4tZ2FwOiAyLjRyZW07XFxyXFxuICByb3ctZ2FwOiAzcmVtO1xcclxcbiAgQGluY2x1ZGUgcmVzcG9uZChtb2JpbGUpIHtcXHJcXG4gICAgcm93LWdhcDogMTJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxufVxcclxcblwiLFwiQHVzZSAnc2FzczptYXAnO1xcclxcblxcclxcbkBtaXhpbiBkaXNwbGF5LWdyaWQge1xcclxcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xcclxcbiAgQGlmICRicmVha3BvaW50ID09IG1vYmlsZSB7XFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7XFxyXFxuICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH0gLy82MDBweFxcclxcbiAgfVxcclxcbiAgQGlmICRicmVha3BvaW50ID09IHRhYi1wb3J0IHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NC4yNWVtKSB7XFxyXFxuICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH0gLy85MDBweFxcclxcbiAgfVxcclxcbiAgQGlmICRicmVha3BvaW50ID09IHRhYi1sYW5kIHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MGVtKSB7XFxyXFxuICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH0gLy8xMjAwcHhcXHJcXG4gIH1cXHJcXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBiaWctZGVza3RvcCB7XFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyLjVlbSkge1xcclxcbiAgICAgIEBjb250ZW50O1xcclxcbiAgICB9IC8vMTgwMFxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./styles/global.scss\n"));

/***/ })

});