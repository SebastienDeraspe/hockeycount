"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{5762:function(e,t,a){var n=a(2238),i=a(3333),r=a(4444),o=a(8463),s=a(6531);let l="@firebase/installations",c="0.5.15",u=`w:${c}`,d="FIS_v2",f=new r.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function p(e){return e instanceof r.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ function h({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function m(e){var t;return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()}}async function g(e,t){let a=await t.json(),n=a.error;return f.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function w({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function y(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ async function v({appConfig:e,heartbeatServiceProvider:t},{fid:a}){let n=h(e),i=w(e),r=t.getImmediate({optional:!0});if(r){let o=await r.getHeartbeatsHeader();o&&i.append("x-firebase-client",o)}let s={fid:a,authVersion:d,appId:e.appId,sdkVersion:u},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await y(()=>fetch(n,l));if(c.ok){let f=await c.json(),p={fid:f.fid||a,registrationStatus:2,refreshToken:f.refreshToken,authToken:m(f.authToken)};return p}throw await g("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ function b(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ let I=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
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
 */ function T(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ let k=new Map;function C(e,t){let a=T(e);S(a,t),function(e,t){let a=(!$&&"BroadcastChannel"in self&&(($=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{S(e.data.key,e.data.fid)}),$);a&&a.postMessage({key:e,fid:t}),0===k.size&&$&&($.close(),$=null)}(a,t)}function S(e,t){let a=k.get(e);if(a)for(let n of a)n(t)}let $=null,j="firebase-installations-store",A=null;function D(){return A||(A=(0,s.X3)("firebase-installations-database",1,{upgrade(e,t){0===t&&e.createObjectStore(j)}})),A}async function F(e,t){let a=T(e),n=await D(),i=n.transaction(j,"readwrite"),r=i.objectStore(j),o=await r.get(a);return await r.put(t,a),await i.done,o&&o.fid===t.fid||C(e,t.fid),t}async function M(e){let t=T(e),a=await D(),n=a.transaction(j,"readwrite");await n.objectStore(j).delete(t),await n.done}async function q(e,t){let a=T(e),n=await D(),i=n.transaction(j,"readwrite"),r=i.objectStore(j),o=await r.get(a),s=t(o);return void 0===s?await r.delete(a):await r.put(s,a),await i.done,s&&(!o||o.fid!==s.fid)&&C(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ async function P(e){let t,a=await q(e.appConfig,a=>{let n=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let a=function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
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
 */ function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return I.test(a)?a:""}catch(n){return""}}(),registrationStatus:0};return N(t)}(a),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let a=Promise.reject(f.create("app-offline"));return{installationEntry:t,registrationPromise:a}}let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=x(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:O(e)}:{installationEntry:t}}(e,n);return t=i.registrationPromise,i.installationEntry});return""===a.fid?{installationEntry:await t}:{installationEntry:a,registrationPromise:t}}async function x(e,t){try{let a=await v(e,t);return F(e.appConfig,a)}catch(n){throw p(n)&&409===n.customData.serverCode?await M(e.appConfig):await F(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function O(e){let t=await E(e.appConfig);for(;1===t.registrationStatus;)await b(100),t=await E(e.appConfig);if(0===t.registrationStatus){let{installationEntry:a,registrationPromise:n}=await P(e);return n||a}return t}function E(e){return q(e,e=>{if(!e)throw f.create("installation-not-found");return N(e)})}function N(e){var t;return(t=e,1===t.registrationStatus&&t.registrationTime+1e4<Date.now())?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ async function z({appConfig:e,heartbeatServiceProvider:t},a){let n=function(e,{fid:t}){return`${h(e)}/${t}/authTokens:generate`}(e,a),i=function(e,{refreshToken:t}){var a;let n=w(e);return n.append("Authorization",(a=t,`${d} ${a}`)),n}(e,a),r=t.getImmediate({optional:!0});if(r){let o=await r.getHeartbeatsHeader();o&&i.append("x-firebase-client",o)}let s={installation:{sdkVersion:u,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await y(()=>fetch(n,l));if(c.ok){let f=await c.json(),p=m(f);return p}throw await g("Generate Auth Token",c)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ async function _(e,t=!1){let a,n=await q(e.appConfig,n=>{var i;if(!X(n))throw f.create("not-registered");let r=n.authToken;if(!t&&(i=r,2===i.requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i)))return n;if(1===r.requestStatus)return a=L(e,t),n;{if(!navigator.onLine)throw f.create("app-offline");let o=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return a=B(e,o),o}}),i=a?await a:n.authToken;return i}async function L(e,t){let a=await K(e.appConfig);for(;1===a.authToken.requestStatus;)await b(100),a=await K(e.appConfig);let n=a.authToken;return 0===n.requestStatus?_(e,t):n}function K(e){return q(e,e=>{var t;if(!X(e))throw f.create("not-registered");let a=e.authToken;return(t=a,1===t.requestStatus&&t.requestTime+1e4<Date.now())?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function B(e,t){try{let a=await z(e,t),n=Object.assign(Object.assign({},t),{authToken:a});return await F(e.appConfig,n),a}catch(r){if(p(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await M(e.appConfig);else{let i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await F(e.appConfig,i)}throw r}}function X(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ async function H(e){let{installationEntry:t,registrationPromise:a}=await P(e);return a?a.catch(console.error):_(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ async function V(e,t=!1){await R(e);let a=await _(e,t);return a.token}async function R(e){let{registrationPromise:t}=await P(e);t&&await t}function U(e){return f.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */ let G="installations",J=e=>{let t=e.getProvider("app").getImmediate(),a=/**
 * @license
 * Copyright 2019 Google LLC
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
 */ function(e){if(!e||!e.options)throw U("App Configuration");if(!e.name)throw U("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw U(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),i=(0,n.qX)(t,"heartbeat");return{app:t,appConfig:a,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},W=e=>{let t=e.getProvider("app").getImmediate(),a=(0,n.qX)(t,G).getImmediate();return{getId:()=>H(a),getToken:e=>V(a,e)}};(0,n.Xd)(new o.wA(G,J,"PUBLIC")),(0,n.Xd)(new o.wA("installations-internal",W,"PRIVATE")),(0,n.KN)(l,c),(0,n.KN)(l,c,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
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
 */ let Z="analytics",Y="https://www.googletagmanager.com/gtag/js",Q=new i.Yd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
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
 */ function ee(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function et(e,t,a,n,i,r){let o=n[i];try{if(o)await t[o];else{let s=await ee(a),l=s.find(e=>e.measurementId===i);l&&await t[l.appId]}}catch(c){Q.error(c)}e("config",i,r)}async function ea(e,t,a,n,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);let s=await ee(a);for(let l of o){let c=s.find(e=>e.measurementId===l),u=c&&t[c.appId];if(u)r.push(u);else{r=[];break}}}0===r.length&&(r=Object.values(t)),await Promise.all(r),e("event",n,i||{})}catch(d){Q.error(d)}}let en=new r.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),ei=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function er(e){var t,a;let{appId:n,apiKey:i}=e,r={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":i})},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(o,r);if(200!==s.status&&304!==s.status){let l="";try{let c=await s.json();(null===(t=c.error)||void 0===t?void 0:t.message)&&(l=c.error.message)}catch(u){}throw en.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function eo(e,t=ei,a){let{appId:n,apiKey:i,measurementId:r}=e.options;if(!n)throw en.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:n};throw en.create("no-api-key")}let o=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new el;return setTimeout(async()=>{s.abort()},void 0!==a?a:6e4),es({appId:n,apiKey:i,measurementId:r},o,s,t)}async function es(e,{throttleEndTimeMillis:t,backoffCount:a},n,i=ei){var o,s,l,c;let{appId:u,measurementId:d}=e;try{await (l=n,c=t,new Promise((e,t)=>{let a=Math.max(c-Date.now(),0),n=setTimeout(e,a);l.addEventListener(()=>{clearTimeout(n),t(en.create("fetch-throttle",{throttleEndTimeMillis:c}))})}))}catch(f){if(d)return Q.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${null===(o=f)||void 0===o?void 0:o.message}]`),{appId:u,measurementId:d};throw f}try{let p=await er(e);return i.deleteThrottleMetadata(u),p}catch(g){if(!function(e){if(!(e instanceof r.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(g)){if(i.deleteThrottleMetadata(u),d)return Q.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${null==g?void 0:g.message}]`),{appId:u,measurementId:d};throw g}let h=503===Number(null===(s=null==g?void 0:g.customData)||void 0===s?void 0:s.httpStatus)?(0,r.$s)(a,i.intervalMillis,30):(0,r.$s)(a,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:a+1};return i.setThrottleMetadata(u,m),Q.debug(`Calling attemptFetch again in ${h} millis`),es(e,m,n,i)}}class el{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ let ec;async function eu(e,t,a,n,i){if(i&&i.global){e("event",a,n);return}{let r=await t,o=Object.assign(Object.assign({},n),{send_to:r});e("event",a,o)}}let ed;/**
 * @license
 * Copyright 2020 Google LLC
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
 */ async function ef(){var e;if(!(0,r.hl)())return Q.warn(en.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,r.eu)()}catch(t){return Q.warn(en.create("indexeddb-unavailable",{errorInfo:null===(e=t)||void 0===e?void 0:e.toString()}).message),!1}return!0}async function ep(e,t,a,n,i,r,o){var s,l,c;let u=eo(e);u.then(t=>{a[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Q.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>Q.error(e)),t.push(u);let d=ef().then(e=>e?n.getId():void 0),[f,p]=await Promise.all([u,d]);!function(e){let t=window.document.getElementsByTagName("script");for(let a of Object.values(t))if(a.src&&a.src.includes(Y)&&a.src.includes(e))return a;return null}(r)&&function(e,t){let a=document.createElement("script");a.src=`${Y}?l=${e}&id=${t}`,a.async=!0,document.head.appendChild(a)}(r,f.measurementId),ed&&(i("consent","default",ed),ed=l=void 0),i("js",new Date);let h=null!==(s=null==o?void 0:o.config)&&void 0!==s?s:{};return h.origin="firebase",h.update=!0,null!=p&&(h.firebase_id=p),i("config",f.measurementId,h),ec&&(i("set",ec),ec=c=void 0),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ class eh{constructor(e){this.app=e}_delete(){return delete em[this.app.options.appId],Promise.resolve()}}let em={},eg=[],ew={},ey="dataLayer",ev,eb,eI=!1,eT="@firebase/analytics",ek="0.8.3";(0,n.Xd)(new o.wA(Z,(e,{options:t})=>{let a=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return function(e,t,a){!function(){let e=[];if((0,r.ru)()&&e.push("This is a browser extension environment."),(0,r.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),a=en.create("invalid-analytics-context",{errorInfo:t});Q.warn(a.message)}}();let n=e.options.appId;if(!n)throw en.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)Q.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw en.create("no-api-key")}if(null!=em[n])throw en.create("already-exists",{id:n});if(!eI){var i,o,s,l,c,u;let d;d=[],Array.isArray(window[ey])?d=window[ey]:window[ey]=d;let f,{wrappedGtag:p,gtagCore:h}=(u="gtag",f=function(...e){window[ey].push(arguments)},window[u]&&"function"==typeof window[u]&&(f=window[u]),window[u]=function(e,t,a,n){async function i(i,r,o){try{"event"===i?await ea(e,t,a,r,o):"config"===i?await et(e,t,a,n,r,o):"consent"===i?e("consent","update",o):e("set",r)}catch(s){Q.error(s)}}return i}(f,em,eg,ew),{gtagCore:f,wrappedGtag:window[u]});eb=p,ev=h,eI=!0}em[n]=ep(e,eg,ew,t,ev,ey,a);let m=new eh(e);return m}(a,n,t)},"PUBLIC")),(0,n.Xd)(new o.wA("analytics-internal",function(e){try{let t=e.getProvider(Z).getImmediate();return{logEvent:(e,a,n)=>(function(e,t,a,n){eu(eb,em[(e=(0,r.m9)(e)).app.options.appId],t,a,n).catch(e=>Q.error(e))})(t,e,a,n)}}catch(a){throw en.create("interop-component-reg-failed",{reason:a})}},"PRIVATE")),(0,n.KN)(eT,ek),(0,n.KN)(eT,ek,"esm2017")}}]);