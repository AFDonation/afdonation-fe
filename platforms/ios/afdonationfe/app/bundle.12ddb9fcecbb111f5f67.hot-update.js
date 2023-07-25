"use strict";
exports.id = "bundle";
exports.ids = null;
exports.modules = {

/***/ "./src/app/app-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var _authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/authentication/auth-guard.service.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/authentication/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");






const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, canActivate: [_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.NativeScriptRouterModule.forRoot(routes), _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__.NativeScriptRouterModule] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjEyZGRiOWZjZWNiYjExMWY1ZjY3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDWDtBQUNpQjtBQUNDO0FBQ3BDO0FBQ1E7QUFDNUM7QUFDQSxNQUFNLGtEQUFrRDtBQUN4RCxNQUFNLHlCQUF5QiwrREFBYSxnQkFBZ0IsZ0ZBQWdCLG9DQUFvQztBQUNoSCxNQUFNLDBCQUEwQixpRkFBYztBQUM5QztBQUNPO0FBQ1A7QUFDQSwrREFBK0Q7QUFDL0Qsc0NBQXNDLDhEQUFtQixHQUFHLHdCQUF3QjtBQUNwRixzQ0FBc0MsOERBQW1CLEdBQUcsVUFBVSxtRkFBZ0MsVUFBVSwyRUFBd0IsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL0FGRG9uYXRpb24vLi9zcmMvYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuY29uc3Qgcm91dGVzID0gW1xuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRTZXJ2aWNlXSwgcnVuR3VhcmRzQW5kUmVzb2x2ZXJzOiAnYWx3YXlzJyB9LFxuICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9XG5dO1xuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xufVxuQXBwUm91dGluZ01vZHVsZS7JtWZhYyA9IGZ1bmN0aW9uIEFwcFJvdXRpbmdNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgQXBwUm91dGluZ01vZHVsZSkoKTsgfTtcbkFwcFJvdXRpbmdNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IEFwcFJvdXRpbmdNb2R1bGUgfSk7XG5BcHBSb3V0aW5nTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==