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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Outfit:wght@400;700&display=swap\\\");\\n/* Color styles */\\n:root {\\n  --clr-text: rgba(31, 63, 73, 1);\\n  --clr-text--darker: rgba(35, 40, 45, 1);\\n  --clr-primary: rgba(106, 177, 135, 1);\\n  --clr-secondary: rgba(211, 45, 65, 1);\\n  --clr-darker--green: rgba(31, 63, 73, 1);\\n  --clr-gray: rgba(206, 210, 204, 1);\\n  --clr-light--green: rgba(179, 193, 0, 1);\\n  --clr-white: rgba(255, 255, 255, 1);\\n  --clr-black: rgba(0, 0, 0, 1);\\n  --clr-light--blue: rgba(76, 181, 245, 1);\\n  --clr-light--gray: #f6f9ff;\\n  --clr-main--bg: #dfe9fe;\\n  --font-primary: \\\"Outfit\\\";\\n  --font-secondary: \\\"Outfit\\\";\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\np,\\nfigure,\\npicture {\\n  margin: 0;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  overflow-y: scroll;\\n  scroll-behavior: smooth;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Outfit\\\", \\\"Oswald\\\", sans-serif;\\n  background-color: var(--clr-main--bg);\\n  color: var(--clr-text);\\n  line-height: 1.6;\\n  font-size: 1.6rem;\\n}\\n\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n::selection {\\n  background-color: var(--clr-primary);\\n  color: var(--clr-white);\\n}\\n\\na {\\n  text-decoration: underline;\\n  color: var(--clr-text);\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n  color: var(--clr-primary);\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\ninput {\\n  background: var(--clr-white);\\n  box-shadow: 0px 4px 4px rgba(221, 221, 221, 0.25);\\n  border-radius: 30px;\\n  border: none;\\n}\\n\\na.active {\\n  width: 15em;\\n  color: var(--clr-text);\\n  background: var(--clr-light--gray);\\n  border-radius: 10px;\\n}\\n@media only screen and (max-width: 64.25em) {\\n  a.active {\\n    width: auto;\\n    background: transparent;\\n  }\\n}\\n\\n@media (prefers-reduced-motion: reduce) {\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n.container {\\n  max-width: 82.5em;\\n  margin: 4rem auto;\\n  display: grid;\\n  grid-template-columns: 19.5em 1fr;\\n  grid-template-areas: \\\"sidebar content\\\";\\n}\\n@media only screen and (max-width: 64.25em) {\\n  .container {\\n    grid-template-columns: auto 1fr;\\n  }\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .container {\\n    margin: 0;\\n    grid-template-columns: 1fr;\\n    grid-template-areas: \\\"sidebar\\\" \\\" content\\\";\\n  }\\n}\\n\\n.main {\\n  width: 100%;\\n  height: 56.25em;\\n  padding: 4.4rem 2.4rem;\\n  grid-area: content;\\n  background: #f7f9ff;\\n  border-radius: 0px 50px 50px 0px;\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .main {\\n    border-radius: 50px;\\n  }\\n}\\n\\n.grid__container {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: repeat(9, minmax(min-content, 5.5em));\\n  grid-template-rows: 10vh 7vh 20vw repeat(2, min-content);\\n  grid-column-gap: 2.4rem;\\n  column-gap: 2.4rem;\\n  grid-row-gap: 3rem;\\n  row-gap: 3rem;\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .grid__container {\\n    row-gap: 12rem;\\n  }\\n}\\n\\n.content {\\n  grid-column: 1/-1;\\n  background-color: aqua;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.scss\",\"webpack://styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAAQ,2HAAA;AAER,iBAAA;AACA;EACE,+BAAA;EACA,uCAAA;EACA,qCAAA;EACA,qCAAA;EACA,wCAAA;EACA,kCAAA;EACA,wCAAA;EACA,mCAAA;EACA,6BAAA;EACA,wCAAA;EACA,0BAAA;EACA,uBAAA;EACA,wBAAA;EACA,0BAAA;AAAF;;AAGA;;;EAGE,SAAA;EACA,UAAA;EACA,mBAAA;AAAF;;AAEA;;;;;;;;;EASE,SAAA;AACF;;AAEA;EAEE,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,sBAAA;AAAF;;AAEA;EACE,2CAAA;EACA,qCAAA;EACA,sBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AACA;;EAEE,eAAA;EACA,cAAA;AAEF;;AAAA;EACE,oCAAA;EACA,uBAAA;AAGF;;AADA;EACE,0BAAA;EACA,sBAAA;AAIF;;AAFA;EACE,0BAAA;EACA,yBAAA;AAKF;;AAHA;EACE,gBAAA;AAMF;;AAJA;EACE,4BAAA;EACA,iDAAA;EACA,mBAAA;EACA,YAAA;AAOF;;AALA;EACE,WAAA;EACA,sBAAA;EACA,kCAAA;EACA,mBAAA;AAQF;AC7EI;EDiEJ;IAMI,WAAA;IACA,uBAAA;EAUF;AACF;;AARA;EACE;;;IAGE,qCAAA;IACA,uCAAA;IACA,sCAAA;IACA,gCAAA;EAWF;AACF;AARA;EACE,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,iCAAA;EAEA,sCAAA;AASF;ACrGI;EDsFJ;IAQI,+BAAA;EAWF;AACF;AC/GI;ED2FJ;IAWI,SAAA;IACA,0BAAA;IACA,yCACE;EAYJ;AACF;;AARA;EACE,WAAA;EACA,eAAA;EACA,sBAAA;EAEA,kBAAA;EACA,mBAAA;EACA,gCAAA;AAUF;AC/HI;ED8GJ;IASI,mBAAA;EAYF;AACF;;AAVA;EACE,WAAA;EACA,aAAA;EACA,4DAAA;EACA,wDAAA;EACA,uBAAA;EAAA,kBAAA;EACA,kBAAA;EAAA,aAAA;AAaF;AC7II;ED0HJ;IAQI,cAAA;EAeF;AACF;;AAZA;EACE,iBAAA;EACA,sBAAA;AAeF\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Outfit:wght@400;700&display=swap');\\r\\n@import 'mixins';\\r\\n/* Color styles */\\r\\n:root {\\r\\n  --clr-text: rgba(31, 63, 73, 1);\\r\\n  --clr-text--darker: rgba(35, 40, 45, 1);\\r\\n  --clr-primary: rgba(106, 177, 135, 1);\\r\\n  --clr-secondary: rgba(211, 45, 65, 1);\\r\\n  --clr-darker--green: rgba(31, 63, 73, 1);\\r\\n  --clr-gray: rgba(206, 210, 204, 1);\\r\\n  --clr-light--green: rgba(179, 193, 0, 1);\\r\\n  --clr-white: rgba(255, 255, 255, 1);\\r\\n  --clr-black: rgba(0, 0, 0, 1);\\r\\n  --clr-light--blue: rgba(76, 181, 245, 1);\\r\\n  --clr-light--gray: #f6f9ff;\\r\\n  --clr-main--bg: #dfe9fe;\\r\\n  --font-primary: 'Outfit';\\r\\n  --font-secondary: 'Outfit';\\r\\n}\\r\\n\\r\\n*,\\r\\n*::after,\\r\\n*::before {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: inherit;\\r\\n}\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\np,\\r\\nfigure,\\r\\npicture {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  // This defines what 1rem is\\r\\n  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%\\r\\n  overflow-y: scroll;\\r\\n  scroll-behavior: smooth;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n  font-family: 'Outfit', 'Oswald', sans-serif;\\r\\n  background-color: var(--clr-main--bg);\\r\\n  color: var(--clr-text);\\r\\n  line-height: 1.6;\\r\\n  font-size: 1.6rem;\\r\\n}\\r\\nimg,\\r\\npicture {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n::selection {\\r\\n  background-color: var(--clr-primary);\\r\\n  color: var(--clr-white);\\r\\n}\\r\\na {\\r\\n  text-decoration: underline;\\r\\n  color: var(--clr-text);\\r\\n}\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n  color: var(--clr-primary);\\r\\n}\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\ninput {\\r\\n  background: var(--clr-white);\\r\\n  box-shadow: 0px 4px 4px rgba(221, 221, 221, 0.25);\\r\\n  border-radius: 30px;\\r\\n  border: none;\\r\\n}\\r\\na.active {\\r\\n  width: 15em;\\r\\n  color: var(--clr-text);\\r\\n  background: var(--clr-light--gray);\\r\\n  border-radius: 10px;\\r\\n  @include respond(tab-port) {\\r\\n    width: auto;\\r\\n    background: transparent;\\r\\n  }\\r\\n}\\r\\n@media (prefers-reduced-motion: reduce) {\\r\\n  *,\\r\\n  *::before,\\r\\n  *::after {\\r\\n    animation-duration: 0.01ms !important;\\r\\n    animation-iteration-count: 1 !important;\\r\\n    transition-duration: 0.01ms !important;\\r\\n    scroll-behavior: auto !important;\\r\\n  }\\r\\n}\\r\\n\\r\\n.container {\\r\\n  max-width: 82.5em;\\r\\n  margin: 4rem auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: 19.5em 1fr;\\r\\n\\r\\n  grid-template-areas: 'sidebar content';\\r\\n  @include respond(tab-port) {\\r\\n    grid-template-columns: auto 1fr;\\r\\n  }\\r\\n  @include respond(mobile) {\\r\\n    margin: 0;\\r\\n    grid-template-columns: 1fr;\\r\\n    grid-template-areas:\\r\\n      'sidebar'\\r\\n      ' content';\\r\\n  }\\r\\n}\\r\\n\\r\\n.main {\\r\\n  width: 100%;\\r\\n  height: 56.25em;\\r\\n  padding: 4.4rem 2.4rem;\\r\\n  // display: grid;\\r\\n  grid-area: content;\\r\\n  background: #f7f9ff;\\r\\n  border-radius: 0px 50px 50px 0px;\\r\\n  @include respond(mobile) {\\r\\n    border-radius: 50px;\\r\\n  }\\r\\n}\\r\\n.grid__container {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(9, minmax(min-content, 5.5em));\\r\\n  grid-template-rows: 10vh 7vh 20vw repeat(2, min-content);\\r\\n  column-gap: 2.4rem;\\r\\n  row-gap: 3rem;\\r\\n  @include respond(mobile) {\\r\\n    row-gap: 12rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.content {\\r\\n  grid-column: 1 / -1;\\r\\n  background-color: aqua;\\r\\n}\\r\\n\",\"@use 'sass:map';\\r\\n\\r\\n@mixin display-grid {\\r\\n  display: -ms-grid;\\r\\n  display: grid;\\r\\n}\\r\\n\\r\\n@mixin respond($breakpoint) {\\r\\n  @if $breakpoint == mobile {\\r\\n    @media only screen and (max-width: 37.5em) {\\r\\n      @content;\\r\\n    } //600px\\r\\n  }\\r\\n  @if $breakpoint == tab-port {\\r\\n    @media only screen and (max-width: 64.25em) {\\r\\n      @content;\\r\\n    } //900px\\r\\n  }\\r\\n  @if $breakpoint == tab-land {\\r\\n    @media only screen and (max-width: 80em) {\\r\\n      @content;\\r\\n    } //1200px\\r\\n  }\\r\\n  @if $breakpoint == big-desktop {\\r\\n    @media only screen and (min-width: 112.5em) {\\r\\n      @content;\\r\\n    } //1800\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbNF0hLi9zdHlsZXMvZ2xvYmFsLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGlIQUFpSCxJQUFJLElBQUksMkJBQTJCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLDRDQUE0QywwQ0FBMEMsMENBQTBDLDZDQUE2Qyx1Q0FBdUMsNkNBQTZDLHdDQUF3QyxrQ0FBa0MsNkNBQTZDLCtCQUErQiw0QkFBNEIsK0JBQStCLGlDQUFpQyxHQUFHLDhCQUE4QixjQUFjLGVBQWUsd0JBQXdCLEdBQUcsMERBQTBELGNBQWMsR0FBRyxVQUFVLHFCQUFxQix1QkFBdUIsNEJBQTRCLDJCQUEyQixHQUFHLFVBQVUsb0RBQW9ELDBDQUEwQywyQkFBMkIscUJBQXFCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsbUJBQW1CLEdBQUcsaUJBQWlCLHlDQUF5Qyw0QkFBNEIsR0FBRyxPQUFPLCtCQUErQiwyQkFBMkIsR0FBRyxhQUFhLCtCQUErQiw4QkFBOEIsR0FBRyxR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QUFPLGdDQUFnQyxrQkFBa0IsbUNBQW1DLG9FQUFvRSxPQUFPLEtBQUssZUFBZSxrQkFBa0Isc0JBQXNCLDZCQUE2Qix1QkFBdUIseUJBQXlCLDBCQUEwQix1Q0FBdUMsZ0NBQWdDLDRCQUE0QixPQUFPLEtBQUssc0JBQXNCLGtCQUFrQixvQkFBb0IsbUVBQW1FLCtEQUErRCx5QkFBeUIsb0JBQW9CLGdDQUFnQyx1QkFBdUIsT0FBTyxLQUFLLGtCQUFrQiwwQkFBMEIsNkJBQTZCLEtBQUssdUJBQXVCLDZCQUE2Qix3QkFBd0Isb0JBQW9CLEtBQUsscUNBQXFDLGlDQUFpQyxvREFBb0QsbUJBQW1CLFVBQVUsY0FBYyxtQ0FBbUMscURBQXFELG1CQUFtQixVQUFVLGNBQWMsbUNBQW1DLGtEQUFrRCxtQkFBbUIsVUFBVSxlQUFlLHNDQUFzQyxxREFBcUQsbUJBQW1CLFVBQVUsYUFBYSxLQUFLLHVCQUF1QjtBQUNoL1E7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLnNjc3M/YjZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMzAwOzQwMDs2MDA7NzAwJmZhbWlseT1PdXRmaXQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbi8qIENvbG9yIHN0eWxlcyAqL1xcbjpyb290IHtcXG4gIC0tY2xyLXRleHQ6IHJnYmEoMzEsIDYzLCA3MywgMSk7XFxuICAtLWNsci10ZXh0LS1kYXJrZXI6IHJnYmEoMzUsIDQwLCA0NSwgMSk7XFxuICAtLWNsci1wcmltYXJ5OiByZ2JhKDEwNiwgMTc3LCAxMzUsIDEpO1xcbiAgLS1jbHItc2Vjb25kYXJ5OiByZ2JhKDIxMSwgNDUsIDY1LCAxKTtcXG4gIC0tY2xyLWRhcmtlci0tZ3JlZW46IHJnYmEoMzEsIDYzLCA3MywgMSk7XFxuICAtLWNsci1ncmF5OiByZ2JhKDIwNiwgMjEwLCAyMDQsIDEpO1xcbiAgLS1jbHItbGlnaHQtLWdyZWVuOiByZ2JhKDE3OSwgMTkzLCAwLCAxKTtcXG4gIC0tY2xyLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgLS1jbHItYmxhY2s6IHJnYmEoMCwgMCwgMCwgMSk7XFxuICAtLWNsci1saWdodC0tYmx1ZTogcmdiYSg3NiwgMTgxLCAyNDUsIDEpO1xcbiAgLS1jbHItbGlnaHQtLWdyYXk6ICNmNmY5ZmY7XFxuICAtLWNsci1tYWluLS1iZzogI2RmZTlmZTtcXG4gIC0tZm9udC1wcmltYXJ5OiBcXFwiT3V0Zml0XFxcIjtcXG4gIC0tZm9udC1zZWNvbmRhcnk6IFxcXCJPdXRmaXRcXFwiO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5wLFxcbmZpZ3VyZSxcXG5waWN0dXJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3V0Zml0XFxcIiwgXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbWFpbi0tYmcpO1xcbiAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmlucHV0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci13aGl0ZSk7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYS5hY3RpdmUge1xcbiAgd2lkdGg6IDE1ZW07XFxuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0LS1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQuMjVlbSkge1xcbiAgYS5hY3RpdmUge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDgyLjVlbTtcXG4gIG1hcmdpbjogNHJlbSBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTkuNWVtIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0LjI1ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJzaWRlYmFyXFxcIiBcXFwiIGNvbnRlbnRcXFwiO1xcbiAgfVxcbn1cXG5cXG4ubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTYuMjVlbTtcXG4gIHBhZGRpbmc6IDQuNHJlbSAyLjRyZW07XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kOiAjZjdmOWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDUwcHggNTBweCAwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7XFxuICAubWFpbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB9XFxufVxcblxcbi5ncmlkX19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgbWlubWF4KG1pbi1jb250ZW50LCA1LjVlbSkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDd2aCAyMHZ3IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxuICBncmlkLWNvbHVtbi1nYXA6IDIuNHJlbTtcXG4gIGNvbHVtbi1nYXA6IDIuNHJlbTtcXG4gIGdyaWQtcm93LWdhcDogM3JlbTtcXG4gIHJvdy1nYXA6IDNyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7XFxuICAuZ3JpZF9fY29udGFpbmVyIHtcXG4gICAgcm93LWdhcDogMTJyZW07XFxuICB9XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQVEsMkhBQUE7QUFFUixpQkFBQTtBQUNBO0VBQ0UsK0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7Ozs7Ozs7OztFQVNFLFNBQUE7QUFDRjs7QUFFQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUsZUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUFHRjs7QUFEQTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7QUFJRjs7QUFGQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSw0QkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBUUY7QUM3RUk7RURpRUo7SUFNSSxXQUFBO0lBQ0EsdUJBQUE7RUFVRjtBQUNGOztBQVJBO0VBQ0U7OztJQUdFLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSxzQ0FBQTtJQUNBLGdDQUFBO0VBV0Y7QUFDRjtBQVJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUVBLHNDQUFBO0FBU0Y7QUNyR0k7RURzRko7SUFRSSwrQkFBQTtFQVdGO0FBQ0Y7QUMvR0k7RUQyRko7SUFXSSxTQUFBO0lBQ0EsMEJBQUE7SUFDQSx5Q0FDRTtFQVlKO0FBQ0Y7O0FBUkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBVUY7QUMvSEk7RUQ4R0o7SUFTSSxtQkFBQTtFQVlGO0FBQ0Y7O0FBVkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0VBQ0Esd0RBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0FBYUY7QUM3SUk7RUQwSEo7SUFRSSxjQUFBO0VBZUY7QUFDRjs7QUFaQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFlRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAzMDA7NDAwOzYwMDs3MDAmZmFtaWx5PU91dGZpdDp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCAnbWl4aW5zJztcXHJcXG4vKiBDb2xvciBzdHlsZXMgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNsci10ZXh0OiByZ2JhKDMxLCA2MywgNzMsIDEpO1xcclxcbiAgLS1jbHItdGV4dC0tZGFya2VyOiByZ2JhKDM1LCA0MCwgNDUsIDEpO1xcclxcbiAgLS1jbHItcHJpbWFyeTogcmdiYSgxMDYsIDE3NywgMTM1LCAxKTtcXHJcXG4gIC0tY2xyLXNlY29uZGFyeTogcmdiYSgyMTEsIDQ1LCA2NSwgMSk7XFxyXFxuICAtLWNsci1kYXJrZXItLWdyZWVuOiByZ2JhKDMxLCA2MywgNzMsIDEpO1xcclxcbiAgLS1jbHItZ3JheTogcmdiYSgyMDYsIDIxMCwgMjA0LCAxKTtcXHJcXG4gIC0tY2xyLWxpZ2h0LS1ncmVlbjogcmdiYSgxNzksIDE5MywgMCwgMSk7XFxyXFxuICAtLWNsci13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIC0tY2xyLWJsYWNrOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgLS1jbHItbGlnaHQtLWJsdWU6IHJnYmEoNzYsIDE4MSwgMjQ1LCAxKTtcXHJcXG4gIC0tY2xyLWxpZ2h0LS1ncmF5OiAjZjZmOWZmO1xcclxcbiAgLS1jbHItbWFpbi0tYmc6ICNkZmU5ZmU7XFxyXFxuICAtLWZvbnQtcHJpbWFyeTogJ091dGZpdCc7XFxyXFxuICAtLWZvbnQtc2Vjb25kYXJ5OiAnT3V0Zml0JztcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJvZHksXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxucCxcXHJcXG5maWd1cmUsXFxyXFxucGljdHVyZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLy8gVGhpcyBkZWZpbmVzIHdoYXQgMXJlbSBpc1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTsgLy8xIHJlbSA9IDEwcHg7IDEwcHgvMTZweCA9IDYyLjUlXFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1tYWluLS1iZyk7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbn1cXHJcXG5pbWcsXFxyXFxucGljdHVyZSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcclxcbn1cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXdoaXRlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5hLmFjdGl2ZSB7XFxyXFxuICB3aWR0aDogMTVlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbGlnaHQtLWdyYXkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcclxcbiAgKixcXHJcXG4gICo6OmJlZm9yZSxcXHJcXG4gICo6OmFmdGVyIHtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA4Mi41ZW07XFxyXFxuICBtYXJnaW46IDRyZW0gYXV0bztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE5LjVlbSAxZnI7XFxyXFxuXFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnc2lkZWJhciBjb250ZW50JztcXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQobW9iaWxlKSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgJ3NpZGViYXInXFxyXFxuICAgICAgJyBjb250ZW50JztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU2LjI1ZW07XFxyXFxuICBwYWRkaW5nOiA0LjRyZW0gMi40cmVtO1xcclxcbiAgLy8gZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2Y5ZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggNTBweCA1MHB4IDBweDtcXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQobW9iaWxlKSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5ncmlkX19jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgbWlubWF4KG1pbi1jb250ZW50LCA1LjVlbSkpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDd2aCAyMHZ3IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxyXFxuICBjb2x1bW4tZ2FwOiAyLjRyZW07XFxyXFxuICByb3ctZ2FwOiAzcmVtO1xcclxcbiAgQGluY2x1ZGUgcmVzcG9uZChtb2JpbGUpIHtcXHJcXG4gICAgcm93LWdhcDogMTJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgJ3Nhc3M6bWFwJztcXHJcXG5cXHJcXG5AbWl4aW4gZGlzcGxheS1ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcXHJcXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBtb2JpbGUge1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkge1xcclxcbiAgICAgIEBjb250ZW50O1xcclxcbiAgICB9IC8vNjAwcHhcXHJcXG4gIH1cXHJcXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItcG9ydCB7XFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQuMjVlbSkge1xcclxcbiAgICAgIEBjb250ZW50O1xcclxcbiAgICB9IC8vOTAwcHhcXHJcXG4gIH1cXHJcXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItbGFuZCB7XFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODBlbSkge1xcclxcbiAgICAgIEBjb250ZW50O1xcclxcbiAgICB9IC8vMTIwMHB4XFxyXFxuICB9XFxyXFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gYmlnLWRlc2t0b3Age1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMi41ZW0pIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfSAvLzE4MDBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./styles/global.scss\n"));

/***/ })

});