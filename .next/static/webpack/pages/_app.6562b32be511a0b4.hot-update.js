/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./styles/sidebar.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./styles/sidebar.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".sidebar_sidebar__menu_btn__YdS3X {\\n  visibility: hidden;\\n}\\n@media only screen and (min-width: 36em) {\\n  .sidebar_sidebar__menu_btn__YdS3X {\\n    width: 56px;\\n    height: 56px;\\n    position: absolute;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    visibility: visible;\\n    right: 3rem;\\n    top: 6.5rem;\\n    border: none;\\n    cursor: pointer;\\n    background: var(--clr-text--darker);\\n    border-radius: 50%;\\n    z-index: 200;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/sidebar.module.scss\",\"webpack://styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAKA;EACE,kBAAA;AAJF;ACmCI;EDhCJ;IAGI,WAAA;IACA,YAAA;IACA,kBAAA;IACA,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,mBAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;IACA,mCAAA;IACA,kBAAA;IACA,YAAA;EAFF;AACF\",\"sourcesContent\":[\"@import 'helpers';\\r\\n@import 'mixins';\\r\\n\\r\\n.sidebar {\\r\\n}\\r\\n.sidebar__menu_btn {\\r\\n  visibility: hidden;\\r\\n  @include respond(mobile) {\\r\\n    width: 56px;\\r\\n    height: 56px;\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    visibility: visible;\\r\\n    right: 3rem;\\r\\n    top: 6.5rem;\\r\\n    border: none;\\r\\n    cursor: pointer;\\r\\n    background: var(--clr-text--darker);\\r\\n    border-radius: 50%;\\r\\n    z-index: 200;\\r\\n  }\\r\\n}\\r\\n\",\"@use 'sass:map';\\r\\n\\r\\n@mixin display-grid {\\r\\n  display: -ms-grid;\\r\\n  display: grid;\\r\\n}\\r\\n\\r\\n// @mixin respond($breakpoint) {\\r\\n//   @if $breakpoint == mobile {\\r\\n//     @media only screen and (max-width: 37.5em) {\\r\\n//       @content;\\r\\n//     } //600px\\r\\n//   }\\r\\n//   @if $breakpoint == tab-port {\\r\\n//     @media only screen and (max-width: 64.25em) {\\r\\n//       @content;\\r\\n//     } //900px\\r\\n//   }\\r\\n//   @if $breakpoint == tab-land {\\r\\n//     @media only screen and (max-width: 80em) {\\r\\n//       @content;\\r\\n//     } //1200px\\r\\n//   }\\r\\n//   @if $breakpoint == big-desktop {\\r\\n//     @media only screen and (min-width: 112.5em) {\\r\\n//       @content;\\r\\n//     } //1800\\r\\n//   }\\r\\n// }\\r\\n\\r\\n@mixin respond($breakpoint) {\\r\\n  @if $breakpoint == smaller-mobile {\\r\\n    @media only screen and (min-width: 20em) {\\r\\n      @content;\\r\\n    } //320px\\r\\n  }\\r\\n  @if $breakpoint == mobile {\\r\\n    @media only screen and (min-width: 36em) {\\r\\n      @content;\\r\\n    } //576px\\r\\n  }\\r\\n  @if $breakpoint == tablet {\\r\\n    @media only screen and (min-width: 48em) {\\r\\n      @content;\\r\\n    } //768px\\r\\n  }\\r\\n  @if $breakpoint == desktop {\\r\\n    @media only screen and (min-width: 62em) {\\r\\n      @content;\\r\\n    } //992px\\r\\n  }\\r\\n  @if $breakpoint == large-desktop {\\r\\n    @media only screen and (min-width: 75em) {\\r\\n      @content;\\r\\n    } //1200px\\r\\n  }\\r\\n  @if $breakpoint == larger-desktop {\\r\\n    @media only screen and (min-width: 87.5em) {\\r\\n      @content;\\r\\n    } //1400px\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"sidebar__menu_btn\": \"sidebar_sidebar__menu_btn__YdS3X\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9zaWRlYmFyLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSw2RUFBNkUsdUJBQXVCLEdBQUcsNENBQTRDLHVDQUF1QyxrQkFBa0IsbUJBQW1CLHlCQUF5QixvQkFBb0IsMEJBQTBCLDhCQUE4QiwwQkFBMEIsa0JBQWtCLGtCQUFrQixtQkFBbUIsc0JBQXNCLDBDQUEwQyx5QkFBeUIsbUJBQW1CLEtBQUssR0FBRyxPQUFPLDJIQUEySCxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLDJDQUEyQyxxQkFBcUIsa0JBQWtCLEtBQUssd0JBQXdCLHlCQUF5QixnQ0FBZ0Msb0JBQW9CLHFCQUFxQiwyQkFBMkIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLG9CQUFvQixvQkFBb0IscUJBQXFCLHdCQUF3Qiw0Q0FBNEMsMkJBQTJCLHFCQUFxQixPQUFPLEtBQUssdUJBQXVCLDZCQUE2Qix3QkFBd0Isb0JBQW9CLEtBQUssd0NBQXdDLG9DQUFvQyx1REFBdUQsc0JBQXNCLGFBQWEsaUJBQWlCLHNDQUFzQyx3REFBd0Qsc0JBQXNCLGFBQWEsaUJBQWlCLHNDQUFzQyxxREFBcUQsc0JBQXNCLGFBQWEsa0JBQWtCLHlDQUF5Qyx3REFBd0Qsc0JBQXNCLGFBQWEsZ0JBQWdCLFFBQVEscUNBQXFDLHlDQUF5QyxrREFBa0QsbUJBQW1CLFVBQVUsY0FBYyxpQ0FBaUMsa0RBQWtELG1CQUFtQixVQUFVLGNBQWMsaUNBQWlDLGtEQUFrRCxtQkFBbUIsVUFBVSxjQUFjLGtDQUFrQyxrREFBa0QsbUJBQW1CLFVBQVUsY0FBYyx3Q0FBd0Msa0RBQWtELG1CQUFtQixVQUFVLGVBQWUseUNBQXlDLG9EQUFvRCxtQkFBbUIsVUFBVSxlQUFlLEtBQUssdUJBQXVCO0FBQ2g0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9zaWRlYmFyLm1vZHVsZS5zY3NzP2U3ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaWRlYmFyX3NpZGViYXJfX21lbnVfYnRuX19ZZFMzWCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzZlbSkge1xcbiAgLnNpZGViYXJfc2lkZWJhcl9fbWVudV9idG5fX1lkUzNYIHtcXG4gICAgd2lkdGg6IDU2cHg7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgcmlnaHQ6IDNyZW07XFxuICAgIHRvcDogNi41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXRleHQtLWRhcmtlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgei1pbmRleDogMjAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3NpZGViYXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0Usa0JBQUE7QUFKRjtBQ21DSTtFRGhDSjtJQUdJLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1DQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VBRkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdoZWxwZXJzJztcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG59XFxyXFxuLnNpZGViYXJfX21lbnVfYnRuIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQobW9iaWxlKSB7XFxyXFxuICAgIHdpZHRoOiA1NnB4O1xcclxcbiAgICBoZWlnaHQ6IDU2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHJpZ2h0OiAzcmVtO1xcclxcbiAgICB0b3A6IDYuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci10ZXh0LS1kYXJrZXIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHotaW5kZXg6IDIwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlICdzYXNzOm1hcCc7XFxyXFxuXFxyXFxuQG1peGluIGRpc3BsYXktZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi8vIEBtaXhpbiByZXNwb25kKCRicmVha3BvaW50KSB7XFxyXFxuLy8gICBAaWYgJGJyZWFrcG9pbnQgPT0gbW9iaWxlIHtcXHJcXG4vLyAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy41ZW0pIHtcXHJcXG4vLyAgICAgICBAY29udGVudDtcXHJcXG4vLyAgICAgfSAvLzYwMHB4XFxyXFxuLy8gICB9XFxyXFxuLy8gICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnQge1xcclxcbi8vICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0LjI1ZW0pIHtcXHJcXG4vLyAgICAgICBAY29udGVudDtcXHJcXG4vLyAgICAgfSAvLzkwMHB4XFxyXFxuLy8gICB9XFxyXFxuLy8gICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLWxhbmQge1xcclxcbi8vICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwZW0pIHtcXHJcXG4vLyAgICAgICBAY29udGVudDtcXHJcXG4vLyAgICAgfSAvLzEyMDBweFxcclxcbi8vICAgfVxcclxcbi8vICAgQGlmICRicmVha3BvaW50ID09IGJpZy1kZXNrdG9wIHtcXHJcXG4vLyAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTIuNWVtKSB7XFxyXFxuLy8gICAgICAgQGNvbnRlbnQ7XFxyXFxuLy8gICAgIH0gLy8xODAwXFxyXFxuLy8gICB9XFxyXFxuLy8gfVxcclxcblxcclxcbkBtaXhpbiByZXNwb25kKCRicmVha3BvaW50KSB7XFxyXFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gc21hbGxlci1tb2JpbGUge1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwZW0pIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfSAvLzMyMHB4XFxyXFxuICB9XFxyXFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gbW9iaWxlIHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNmVtKSB7XFxyXFxuICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH0gLy81NzZweFxcclxcbiAgfVxcclxcbiAgQGlmICRicmVha3BvaW50ID09IHRhYmxldCB7XFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xcclxcbiAgICAgIEBjb250ZW50O1xcclxcbiAgICB9IC8vNzY4cHhcXHJcXG4gIH1cXHJcXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBkZXNrdG9wIHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MmVtKSB7XFxyXFxuICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH0gLy85OTJweFxcclxcbiAgfVxcclxcbiAgQGlmICRicmVha3BvaW50ID09IGxhcmdlLWRlc2t0b3Age1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfSAvLzEyMDBweFxcclxcbiAgfVxcclxcbiAgQGlmICRicmVha3BvaW50ID09IGxhcmdlci1kZXNrdG9wIHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4Ny41ZW0pIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfSAvLzE0MDBweFxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzaWRlYmFyX19tZW51X2J0blwiOiBcInNpZGViYXJfc2lkZWJhcl9fbWVudV9idG5fX1lkUzNYXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./styles/sidebar.module.scss\n"));

/***/ })

});