import {
  getIdToken,
  onAuthStateChanged,
  onIdTokenChanged
} from "./chunk-Z3UPIM7T.js";
import {
  applyActionCode,
  beforeAuthStateChanged,
  checkActionCode,
  confirmPasswordReset,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  deleteUser,
  fetchSignInMethodsForEmail,
  getAdditionalUserInfo,
  getAuth,
  getIdToken as getIdToken2,
  getIdTokenResult,
  getMultiFactorResolver,
  getRedirectResult,
  initializeAuth,
  initializeRecaptchaConfig,
  isSignInWithEmailLink,
  linkWithCredential,
  linkWithPhoneNumber,
  linkWithPopup,
  linkWithRedirect,
  multiFactor,
  onAuthStateChanged as onAuthStateChanged2,
  onIdTokenChanged as onIdTokenChanged2,
  parseActionCodeURL,
  reauthenticateWithCredential,
  reauthenticateWithPhoneNumber,
  reauthenticateWithPopup,
  reauthenticateWithRedirect,
  reload,
  revokeAccessToken,
  sendEmailVerification,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  setPersistence,
  signInAnonymously,
  signInWithCredential,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  unlink,
  updateCurrentUser,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateProfile,
  useDeviceLanguage,
  validatePassword,
  verifyBeforeUpdateEmail,
  verifyPasswordResetCode
} from "./chunk-6O6QQTA7.js";
import {
  FirebaseApp,
  FirebaseApps
} from "./chunk-S4LMNBXO.js";
import {
  VERSION,
  ɵAngularFireSchedulers,
  ɵAppCheckInstances,
  ɵgetAllInstancesOf,
  ɵgetDefaultInstanceOf,
  ɵzoneWrap
} from "./chunk-E7EPIPG2.js";
import {
  registerVersion
} from "./chunk-C47OLMPF.js";
import {
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Optional,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-QBXPSOZS.js";
import {
  Observable,
  concatMap,
  distinct,
  from,
  of,
  switchMap,
  timer
} from "./chunk-WNO6BQNH.js";

// node_modules/rxfire/auth/index.esm.js
function authState(auth) {
  return new Observable(function(subscriber) {
    var unsubscribe = onAuthStateChanged(auth, subscriber.next.bind(subscriber), subscriber.error.bind(subscriber), subscriber.complete.bind(subscriber));
    return { unsubscribe };
  });
}
function user(auth) {
  return new Observable(function(subscriber) {
    var unsubscribe = onIdTokenChanged(auth, subscriber.next.bind(subscriber), subscriber.error.bind(subscriber), subscriber.complete.bind(subscriber));
    return { unsubscribe };
  });
}
function idToken(auth) {
  return user(auth).pipe(switchMap(function(user3) {
    return user3 ? from(getIdToken(user3)) : of(null);
  }));
}

// node_modules/@angular/fire/fesm2022/angular-fire-auth.mjs
var AUTH_PROVIDER_NAME = "auth";
var Auth = class {
  constructor(auth) {
    return auth;
  }
};
var AuthInstances = class {
  constructor() {
    return ɵgetAllInstancesOf(AUTH_PROVIDER_NAME);
  }
};
var authInstance$ = timer(0, 300).pipe(concatMap(() => from(ɵgetAllInstancesOf(AUTH_PROVIDER_NAME))), distinct());
var PROVIDED_AUTH_INSTANCES = new InjectionToken("angularfire2.auth-instances");
function defaultAuthInstanceFactory(provided, defaultApp) {
  const defaultAuth = ɵgetDefaultInstanceOf(AUTH_PROVIDER_NAME, provided, defaultApp);
  return defaultAuth && new Auth(defaultAuth);
}
function authInstanceFactory(fn) {
  return (zone, injector) => {
    const auth = zone.runOutsideAngular(() => fn(injector));
    return new Auth(auth);
  };
}
var AUTH_INSTANCES_PROVIDER = {
  provide: AuthInstances,
  deps: [[new Optional(), PROVIDED_AUTH_INSTANCES]]
};
var DEFAULT_AUTH_INSTANCE_PROVIDER = {
  provide: Auth,
  useFactory: defaultAuthInstanceFactory,
  deps: [[new Optional(), PROVIDED_AUTH_INSTANCES], FirebaseApp]
};
var AuthModule = class _AuthModule {
  constructor() {
    registerVersion("angularfire", VERSION.full, "auth");
  }
  static ɵfac = function AuthModule_Factory(t) {
    return new (t || _AuthModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AuthModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [DEFAULT_AUTH_INSTANCE_PROVIDER, AUTH_INSTANCES_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_AUTH_INSTANCE_PROVIDER, AUTH_INSTANCES_PROVIDER]
    }]
  }], () => [], null);
})();
function provideAuth(fn, ...deps) {
  registerVersion("angularfire", VERSION.full, "auth");
  return makeEnvironmentProviders([DEFAULT_AUTH_INSTANCE_PROVIDER, AUTH_INSTANCES_PROVIDER, {
    provide: PROVIDED_AUTH_INSTANCES,
    useFactory: authInstanceFactory(fn),
    multi: true,
    deps: [NgZone, Injector, ɵAngularFireSchedulers, FirebaseApps, [new Optional(), ɵAppCheckInstances], ...deps]
  }]);
}
var authState2 = ɵzoneWrap(authState, true);
var user2 = ɵzoneWrap(user, true);
var idToken2 = ɵzoneWrap(idToken, true);
var applyActionCode3 = ɵzoneWrap(applyActionCode, true);
var beforeAuthStateChanged3 = ɵzoneWrap(beforeAuthStateChanged, true);
var checkActionCode3 = ɵzoneWrap(checkActionCode, true);
var confirmPasswordReset3 = ɵzoneWrap(confirmPasswordReset, true);
var connectAuthEmulator3 = ɵzoneWrap(connectAuthEmulator, true);
var createUserWithEmailAndPassword3 = ɵzoneWrap(createUserWithEmailAndPassword, true);
var deleteUser3 = ɵzoneWrap(deleteUser, true);
var fetchSignInMethodsForEmail3 = ɵzoneWrap(fetchSignInMethodsForEmail, true);
var getAdditionalUserInfo3 = ɵzoneWrap(getAdditionalUserInfo, true);
var getAuth3 = ɵzoneWrap(getAuth, true);
var getIdToken3 = ɵzoneWrap(getIdToken2, true);
var getIdTokenResult3 = ɵzoneWrap(getIdTokenResult, true);
var getMultiFactorResolver3 = ɵzoneWrap(getMultiFactorResolver, true);
var getRedirectResult3 = ɵzoneWrap(getRedirectResult, true);
var initializeAuth3 = ɵzoneWrap(initializeAuth, true);
var initializeRecaptchaConfig3 = ɵzoneWrap(initializeRecaptchaConfig, true);
var isSignInWithEmailLink3 = ɵzoneWrap(isSignInWithEmailLink, true);
var linkWithCredential3 = ɵzoneWrap(linkWithCredential, true);
var linkWithPhoneNumber3 = ɵzoneWrap(linkWithPhoneNumber, true);
var linkWithPopup3 = ɵzoneWrap(linkWithPopup, true);
var linkWithRedirect3 = ɵzoneWrap(linkWithRedirect, true);
var multiFactor3 = ɵzoneWrap(multiFactor, true);
var onAuthStateChanged3 = ɵzoneWrap(onAuthStateChanged2, true);
var onIdTokenChanged3 = ɵzoneWrap(onIdTokenChanged2, true);
var parseActionCodeURL3 = ɵzoneWrap(parseActionCodeURL, true);
var reauthenticateWithCredential3 = ɵzoneWrap(reauthenticateWithCredential, true);
var reauthenticateWithPhoneNumber3 = ɵzoneWrap(reauthenticateWithPhoneNumber, true);
var reauthenticateWithPopup3 = ɵzoneWrap(reauthenticateWithPopup, true);
var reauthenticateWithRedirect3 = ɵzoneWrap(reauthenticateWithRedirect, true);
var reload3 = ɵzoneWrap(reload, true);
var revokeAccessToken3 = ɵzoneWrap(revokeAccessToken, true);
var sendEmailVerification3 = ɵzoneWrap(sendEmailVerification, true);
var sendPasswordResetEmail3 = ɵzoneWrap(sendPasswordResetEmail, true);
var sendSignInLinkToEmail3 = ɵzoneWrap(sendSignInLinkToEmail, true);
var setPersistence3 = ɵzoneWrap(setPersistence, true);
var signInAnonymously3 = ɵzoneWrap(signInAnonymously, true);
var signInWithCredential3 = ɵzoneWrap(signInWithCredential, true);
var signInWithCustomToken3 = ɵzoneWrap(signInWithCustomToken, true);
var signInWithEmailAndPassword3 = ɵzoneWrap(signInWithEmailAndPassword, true);
var signInWithEmailLink3 = ɵzoneWrap(signInWithEmailLink, true);
var signInWithPhoneNumber3 = ɵzoneWrap(signInWithPhoneNumber, true);
var signInWithPopup3 = ɵzoneWrap(signInWithPopup, true);
var signInWithRedirect3 = ɵzoneWrap(signInWithRedirect, true);
var signOut3 = ɵzoneWrap(signOut, true);
var unlink3 = ɵzoneWrap(unlink, true);
var updateCurrentUser3 = ɵzoneWrap(updateCurrentUser, true);
var updateEmail3 = ɵzoneWrap(updateEmail, true);
var updatePassword3 = ɵzoneWrap(updatePassword, true);
var updatePhoneNumber3 = ɵzoneWrap(updatePhoneNumber, true);
var updateProfile3 = ɵzoneWrap(updateProfile, true);
var useDeviceLanguage3 = ɵzoneWrap(useDeviceLanguage, true);
var validatePassword3 = ɵzoneWrap(validatePassword, true);
var verifyBeforeUpdateEmail3 = ɵzoneWrap(verifyBeforeUpdateEmail, true);
var verifyPasswordResetCode3 = ɵzoneWrap(verifyPasswordResetCode, true);

export {
  Auth,
  AuthInstances,
  authInstance$,
  AuthModule,
  provideAuth,
  authState2 as authState,
  user2 as user,
  idToken2 as idToken,
  applyActionCode3 as applyActionCode,
  beforeAuthStateChanged3 as beforeAuthStateChanged,
  checkActionCode3 as checkActionCode,
  confirmPasswordReset3 as confirmPasswordReset,
  connectAuthEmulator3 as connectAuthEmulator,
  createUserWithEmailAndPassword3 as createUserWithEmailAndPassword,
  deleteUser3 as deleteUser,
  fetchSignInMethodsForEmail3 as fetchSignInMethodsForEmail,
  getAdditionalUserInfo3 as getAdditionalUserInfo,
  getAuth3 as getAuth,
  getIdToken3 as getIdToken,
  getIdTokenResult3 as getIdTokenResult,
  getMultiFactorResolver3 as getMultiFactorResolver,
  getRedirectResult3 as getRedirectResult,
  initializeAuth3 as initializeAuth,
  initializeRecaptchaConfig3 as initializeRecaptchaConfig,
  isSignInWithEmailLink3 as isSignInWithEmailLink,
  linkWithCredential3 as linkWithCredential,
  linkWithPhoneNumber3 as linkWithPhoneNumber,
  linkWithPopup3 as linkWithPopup,
  linkWithRedirect3 as linkWithRedirect,
  multiFactor3 as multiFactor,
  onAuthStateChanged3 as onAuthStateChanged,
  onIdTokenChanged3 as onIdTokenChanged,
  parseActionCodeURL3 as parseActionCodeURL,
  reauthenticateWithCredential3 as reauthenticateWithCredential,
  reauthenticateWithPhoneNumber3 as reauthenticateWithPhoneNumber,
  reauthenticateWithPopup3 as reauthenticateWithPopup,
  reauthenticateWithRedirect3 as reauthenticateWithRedirect,
  reload3 as reload,
  revokeAccessToken3 as revokeAccessToken,
  sendEmailVerification3 as sendEmailVerification,
  sendPasswordResetEmail3 as sendPasswordResetEmail,
  sendSignInLinkToEmail3 as sendSignInLinkToEmail,
  setPersistence3 as setPersistence,
  signInAnonymously3 as signInAnonymously,
  signInWithCredential3 as signInWithCredential,
  signInWithCustomToken3 as signInWithCustomToken,
  signInWithEmailAndPassword3 as signInWithEmailAndPassword,
  signInWithEmailLink3 as signInWithEmailLink,
  signInWithPhoneNumber3 as signInWithPhoneNumber,
  signInWithPopup3 as signInWithPopup,
  signInWithRedirect3 as signInWithRedirect,
  signOut3 as signOut,
  unlink3 as unlink,
  updateCurrentUser3 as updateCurrentUser,
  updateEmail3 as updateEmail,
  updatePassword3 as updatePassword,
  updatePhoneNumber3 as updatePhoneNumber,
  updateProfile3 as updateProfile,
  useDeviceLanguage3 as useDeviceLanguage,
  validatePassword3 as validatePassword,
  verifyBeforeUpdateEmail3 as verifyBeforeUpdateEmail,
  verifyPasswordResetCode3 as verifyPasswordResetCode
};
/*! Bundled license information:

rxfire/auth/index.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=chunk-NHV74UXW.js.map
