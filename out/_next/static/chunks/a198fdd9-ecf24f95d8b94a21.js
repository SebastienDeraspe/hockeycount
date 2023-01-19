"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{5276:function(e,t,n){var i,s,r,o,l,h,a,u,c=n(2238),d=n(8463),_=n(4444),p=n(3333),f=n(4155);let m="@firebase/database",g="0.13.9",y="";/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class v{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,_.Wl)(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,_.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class C{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,_.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let w=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new v(t)}}catch(n){}return new C},T=w("localStorage"),I=w("sessionStorage"),b=new p.Yd("@firebase/database"),k,S=(k=1,function(){return k++}),E=function(e){let t=(0,_.dS)(e),n=new _.gQ;n.update(t);let i=n.digest();return _.US.encodeByteArray(i)},N=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=N.apply(null,i):"object"==typeof i?t+=(0,_.Wl)(i):t+=i,t+=" "}return t},R=null,P=!0,x=function(e,t){(0,_.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(b.logLevel=p.in.VERBOSE,R=b.log.bind(b),t&&I.set("logging_enabled",!0)):"function"==typeof e?R=e:(R=null,I.remove("logging_enabled"))},D=function(...e){if(!0===P&&(P=!1,null===R&&!0===I.get("logging_enabled")&&x(!0)),R){let t=N.apply(null,e);R(t)}},M=function(e){return function(...t){D(e,...t)}},A=function(...e){let t="FIREBASE INTERNAL ERROR: "+N(...e);b.error(t)},F=function(...e){let t=`FIREBASE FATAL ERROR: ${N(...e)}`;throw b.error(t),Error(t)},L=function(...e){let t="FIREBASE WARNING: "+N(...e);b.warn(t)},O=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},q=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},W=function(e){if((0,_.Yr)()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},U="[MIN_NAME]",H="[MAX_NAME]",j=function(e,t){if(e===t)return 0;if(e===U||t===H)return -1;if(t===U||e===H)return 1;{let n=Q(e),i=Q(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},z=function(e,t){return e===t?0:e<t?-1:1},Y=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+(0,_.Wl)(t))},V=function(e){if("object"!=typeof e||null===e)return(0,_.Wl)(e);let t=[];for(let n in e)t.push(n);t.sort();let i="{";for(let s=0;s<t.length;s++)0!==s&&(i+=","),i+=(0,_.Wl)(t[s]),i+=":",i+=V(e[t[s]]);return i+"}"},B=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function K(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}let G=function(e){(0,_.hu)(!q(e),"Invalid JSON number");let t,n,i,s,r;0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(s=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-s)-4503599627370496)):(n=0,i=Math.round(e/5e-324)));let o=[];for(r=52;r;r-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(r=11;r;r-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let l=o.join(""),h="";for(r=0;r<64;r+=8){let a=parseInt(l.substr(r,8),2).toString(16);1===a.length&&(a="0"+a),h+=a}return h.toLowerCase()},$=RegExp("^-?(0*)\\d{1,10}$"),Q=function(e){if($.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},X=function(e){try{e()}catch(t){setTimeout(()=>{let e=t.stack||"";throw L("Exception was thrown by user callback.",e),t},Math.floor(0))}},J=function(){let e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Z=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */ class ee{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){L(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class et{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(D("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',L(e)}}class en{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}en.OWNER="owner";let ei=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,es="websocket",er="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class eo{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=T.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&T.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function el(e,t,n){var i;(0,_.hu)("string"==typeof t,"typeof type must == string"),(0,_.hu)("object"==typeof n,"typeof params must == object");let s;if(t===es)s=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===er)s=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return K(n,(e,t)=>{r.push(e+"="+t)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class eh{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,_.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,_.p$)(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let ea={},eu={};function ec(e){let t=e.toString();return ea[t]||(ea[t]=new eh),ea[t]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class ed{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<n.length;++i)n[i]&&X(()=>{this.onMessage_(n[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let e_="start";class ep{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=M(e),this.stats_=ec(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),el(t,er,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ed(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),W(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ef((...e)=>{let[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===e_)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[e_]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&ei.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ep.forceAllow_=!0}static forceDisallow(){ep.forceDisallow_=!0}static isAvailable(){return!(0,_.Yr)()&&(!!ep.forceAllow_||!ep.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=(0,_.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=(0,_.h$)(t),i=B(n,1840);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,_.Yr)())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=(0,_.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ef{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,_.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=S(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ef.createIFrame_();let s="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let r=document.domain;s='<script>document.domain="'+r+'";</script>'}let o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){D("frame writing exception"),l.stack&&D(l.stack),D(l)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{let t=e.contentWindow.document;t||D("No IE domain setting required")}catch(i){let n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){let s=this.pendingSegs[0];if(s.d.length+30+n.length<=1870){let r=this.pendingSegs.shift();n=n+"&seg"+i+"="+r.seg+"&ts"+i+"="+r.ts+"&d"+i+"="+r.d,i++}else break}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){(0,_.Yr)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{D("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(i){}},Math.floor(1))}}let em=null;"undefined"!=typeof MozWebSocket?em=MozWebSocket:"undefined"!=typeof WebSocket&&(em=WebSocket);class eg{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=M(this.connId),this.stats_=ec(t),this.connURL=eg.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){let r={};return r.v="5",!(0,_.Yr)()&&"undefined"!=typeof location&&location.hostname&&ei.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),el(e,es,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,T.set("previous_websocket_failure",!0);try{let n;if((0,_.Yr)()){let i=this.nodeAdmin?"AdminNode":"Node";n={headers:{"User-Agent":`Firebase/5/${y}/${f.platform}/${i}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(n.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);let s=f.env,r=0===this.connURL.indexOf("wss://")?s.HTTPS_PROXY||s.https_proxy:s.HTTP_PROXY||s.http_proxy;r&&(n.proxy={origin:r})}this.mySock=new em(this.connURL,[],n)}catch(l){this.log_("Error instantiating WebSocket.");let o=l.message||l.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){eg.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==em&&!eg.forceDisallow_}static previouslyFailed(){return T.isInMemoryStorage||!0===T.get("previous_websocket_failure")}markConnectionHealthy(){T.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let n=(0,_.cI)(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,_.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();let t=(0,_.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=B(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}eg.responsesRequiredToBeHealthy=2,eg.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class ey{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ep,eg]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=eg&&eg.isAvailable(),n=t&&!eg.previouslyFailed();if(e.webSocketOnly&&(t||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[eg];else{let i=this.transports_=[];for(let s of ey.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ey.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ey.globalTransportInitialized_=!1;class ev{constructor(e,t,n,i,s,r,o,l,h,a){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=a,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=M("c:"+this.id+":"),this.transportManager_=new ey(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Z(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=Y("t",e),n=Y("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=Y("t",e),n=Y("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=Y("t",e);if("d"in e){let n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?A("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):A("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&L("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Z(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Z(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(T.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class eC{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class ew{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,_.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let i=0;i<n.length;i++)n[i].callback.apply(n[i].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context)){i.splice(s,1);return}}validateEventType_(e){(0,_.hu)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class eT extends ew{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,_.uI)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new eT}getInitialEvent(e){return(0,_.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class eI{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let n=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[n]=this.pieces_[i],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function eb(){return new eI("")}function ek(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function eS(e){return e.pieces_.length-e.pieceNum_}function eE(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new eI(e.pieces_,t)}function eN(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function eR(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function eP(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new eI(t,0)}function ex(e,t){let n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof eI)for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);else{let r=t.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&n.push(r[o])}return new eI(n,0)}function eD(e){return e.pieceNum_>=e.pieces_.length}function eM(e,t){let n=ek(e),i=ek(t);if(null===n)return t;if(n===i)return eM(eE(e),eE(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function eA(e,t){if(eS(e)!==eS(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function eF(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(eS(e)>eS(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class eL{constructor(e,t){this.errorPrefix_=t,this.parts_=eR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,_.ug)(this.parts_[n]);eO(this)}}function eO(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+eq(e))}function eq(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class eW extends ew{constructor(){super(["visible"]);let e,t;"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new eW}getInitialEvent(e){return(0,_.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}class eU extends eC{constructor(e,t,n,i,s,r,o,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=l,this.id=eU.nextPersistentConnectionId_++,this.log_=M("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,_.Yr)())throw Error("Auth override specified in options, but not supported on non Node.js platforms");eW.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&eT.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,_.Wl)(s)),(0,_.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new _.BH,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete(e){let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,_.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,_.hu)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,s=>{let r=s.d,o=s.s;eU.warnOnListenWarnings_(r,t);let l=this.listens.get(n)&&this.listens.get(n).get(i);l===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,_.r3)(e,"w")){let n=(0,_.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();L(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){let t=e&&40===e.length;(t||(0,_.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=(0,_.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,_.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();let r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{let t=e.s;if("ok"!==t){let n=e.d;this.log_("reportStats","Error sending stats: "+n)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,_.Wl)(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):A("Unrecognized action received from server: "+(0,_.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,_.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let t=new Date().getTime()-this.lastConnectionAttemptTime_,n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+eU.nextConnectionId_++,s=this.lastSessionId,r=!1,o=null,l=function(){o?o.close():(r=!0,n())},h=function(e){(0,_.hu)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:l,sendRequest:h};let a=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[u,c]=await Promise.all([this.authTokenProvider_.getToken(a),this.appCheckTokenProvider_.getToken(a)]);r?D("getToken() completed but was canceled"):(D("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=c&&c.token,o=new ev(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{L(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},s))}catch(d){this.log_("Failed to get token: "+d),r||(this.repoInfo_.nodeAdmin&&L(d),l())}}}interrupt(e){D("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){D("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,_.xb)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>V(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n=new eI(e).toString(),i;if(this.listens.has(n)){let s=this.listens.get(n);i=s.get(t),s.delete(t),0===s.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){D("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){D("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let n=0;n<this.outstandingPuts_.length;n++)this.outstandingPuts_[n]&&this.sendPut_(n);for(;this.onDisconnectRequestQueue_.length;){let i=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(i.action,i.pathString,i.data,i.onComplete)}for(let s=0;s<this.outstandingGets_.length;s++)this.outstandingGets_[s]&&this.sendGet_(s)}sendConnectStats_(){let e={},t="js";(0,_.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+y.replace(/\./g,"-")]=1,(0,_.uI)()?e["framework.cordova"]=1:(0,_.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=eT.getInstance().currentlyOnline();return(0,_.xb)(this.interruptReasons_)&&e}}eU.nextPersistentConnectionId_=0,eU.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class eH{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new eH(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class ej{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new eH(U,e),i=new eH(U,t);return 0!==this.compare(n,i)}minPost(){return eH.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let ez;class eY extends ej{static get __EMPTY_NODE(){return ez}static set __EMPTY_NODE(e){ez=e}compare(e,t){return j(e.name,t.name)}isDefinedOn(e){throw(0,_.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return eH.MIN}maxPost(){return new eH(H,ez)}makePost(e,t){return(0,_.hu)("string"==typeof e,"KeyIndex indexValue must always be a string."),new eH(e,ez)}toString(){return".key"}}let eV=new eY;/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class eB{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else if(0===r){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_.pop(),t;if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class eK{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:eK.RED,this.left=null!=i?i:eG.EMPTY_NODE,this.right=null!=s?s:eG.EMPTY_NODE}copy(e,t,n,i,s){return new eK(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,s=n(e,i.key);return(i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return eG.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return eG.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,eK.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,eK.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}eK.RED=!0,eK.BLACK=!1;class eG{constructor(e,t=eG.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new eG(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,eK.BLACK,null,null))}remove(e){return new eG(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,eK.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eB(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new eB(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new eB(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new eB(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ function e$(e,t){return j(e.name,t.name)}function eQ(e,t){return j(e,t)}eG.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new eK(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let eX,eJ=function(e){return"number"==typeof e?"number:"+G(e):"string:"+e},eZ=function(e){if(e.isLeafNode()){let t=e.val();(0,_.hu)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,_.r3)(t,".sv"),"Priority must be a string or number.")}else(0,_.hu)(e===eX||e.isEmpty(),"priority of unexpected type.");(0,_.hu)(e===eX||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},e0;class e1{constructor(e,t=e1.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,_.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),eZ(this.priorityNode_)}static set __childrenNodeConstructor(e){e0=e}static get __childrenNodeConstructor(){return e0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new e1(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:e1.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return eD(e)?this:".priority"===ek(e)?this.priorityNode_:e1.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:e1.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=ek(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,_.hu)(".priority"!==n||1===eS(e),".priority must be the last token in a path"),this.updateImmediateChild(n,e1.__childrenNodeConstructor.EMPTY_NODE.updateChild(eE(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+eJ(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=G(this.value_):e+=this.value_,this.lazyHash_=E(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===e1.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof e1.__childrenNodeConstructor?-1:((0,_.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=e1.VALUE_TYPE_ORDER.indexOf(t),s=e1.VALUE_TYPE_ORDER.indexOf(n);return((0,_.hu)(i>=0,"Unknown leaf type: "+t),(0,_.hu)(s>=0,"Unknown leaf type: "+n),i!==s)?s-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}e1.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let e3,e2,e4=new class extends ej{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?j(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return eH.MIN}maxPost(){return new eH(H,new e1("[PRIORITY-POST]",e2))}makePost(e,t){let n=e3(e);return new eH(t,new e1("[PRIORITY-POST]",n))}toString(){return".priority"}},e5=Math.log(2);class e6{constructor(e){var t;this.count=parseInt(Math.log(e+1)/e5,10),this.current_=this.count-1;let n=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&n}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}let e8=function(e,t,n,i){e.sort(t);let s=function(t,i){let r=i-t,o,l;if(0===r)return null;if(1===r)return o=e[t],l=n?n(o):o,new eK(l,o.node,eK.BLACK,null,null);{let h=parseInt(r/2,10)+t,a=s(t,h),u=s(h+1,i);return o=e[h],l=n?n(o):o,new eK(l,o.node,eK.BLACK,a,u)}},r=new e6(e.length),o=function(t){let i=null,r=null,o=e.length,l=function(t,i){let r=o-t;o-=t;let l=s(r+1,o),a=e[r],u=n?n(a):a;h(new eK(u,a.node,i,null,l))},h=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let a=0;a<t.count;++a){let u=t.nextBitIsOne(),c=Math.pow(2,t.count-(a+1));u?l(c,eK.BLACK):(l(c,eK.BLACK),l(c,eK.RED))}return r}(r);return new eG(i||t,o)},e7,e9={};class te{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,_.hu)(e9&&e4,"ChildrenNode.ts has not been loaded"),e7=e7||new te({".priority":e9},{".priority":e4})}get(e){let t=(0,_.DV)(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof eG?t:null}hasIndex(e){return(0,_.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,_.hu)(e!==eV,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],i=!1,s=t.getIterator(eH.Wrap),r=s.getNext();for(;r;)i=i||e.isDefinedOn(r.node),n.push(r),r=s.getNext();let o;o=i?e8(n,e.getCompare()):e9;let l=e.toString(),h=Object.assign({},this.indexSet_);h[l]=e;let a=Object.assign({},this.indexes_);return a[l]=o,new te(a,h)}addToIndexes(e,t){let n=(0,_.UI)(this.indexes_,(n,i)=>{let s=(0,_.DV)(this.indexSet_,i);if((0,_.hu)(s,"Missing index implementation for "+i),n===e9){if(!s.isDefinedOn(e.node))return e9;{let r=[],o=t.getIterator(eH.Wrap),l=o.getNext();for(;l;)l.name!==e.name&&r.push(l),l=o.getNext();return r.push(e),e8(r,s.getCompare())}}{let h=t.get(e.name),a=n;return h&&(a=a.remove(new eH(e.name,h))),a.insert(e,e.node)}});return new te(n,this.indexSet_)}removeFromIndexes(e,t){let n=(0,_.UI)(this.indexes_,n=>{if(n===e9)return n;{let i=t.get(e.name);return i?n.remove(new eH(e.name,i)):n}});return new te(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let tt;class tn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&eZ(this.priorityNode_),this.children_.isEmpty()&&(0,_.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return tt||(tt=new tn(new eG(eQ),null,te.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||tt}updatePriority(e){return this.children_.isEmpty()?this:new tn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?tt:t}}getChild(e){let t=ek(e);return null===t?this:this.getImmediateChild(t).getChild(eE(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,_.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n=new eH(e,t),i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));let r=i.isEmpty()?tt:this.priorityNode_;return new tn(i,r,s)}}updateChild(e,t){let n=ek(e);if(null===n)return t;{(0,_.hu)(".priority"!==ek(e)||1===eS(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(eE(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,s=!0;if(this.forEachChild(e4,(r,o)=>{t[r]=o.val(e),n++,s&&tn.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1}),e||!s||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let r=[];for(let o in t)r[o]=t[o];return r}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+eJ(this.getPriority().val())+":"),this.forEachChild(e4,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":E(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let s=i.getPredecessorKey(new eH(e,t));return s?s.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let n=t.minKey();return n&&n.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new eH(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let n=t.maxKey();return n&&n.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new eH(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,eH.Wrap),s=i.peek();for(;null!=s&&0>t.compare(s,e);)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,eH.Wrap),s=i.peek();for(;null!=s&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ti?-1:0}withIndex(e){if(e===eV||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new tn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===eV||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority()))return!1;if(this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(e4),n=e.getIterator(e4),i=t.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=t.getNext(),s=n.getNext()}return null===i&&null===s}}resolveIndex_(e){return e===eV?null:this.indexMap_.get(e.toString())}}tn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let ti=new class extends tn{constructor(){super(new eG(eQ),tn.EMPTY_NODE,te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return tn.EMPTY_NODE}isEmpty(){return!1}};function ts(e,t=null){if(null===e)return tn.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,_.hu)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){let n=e;return new e1(n,ts(t))}if(e instanceof Array){let i=tn.EMPTY_NODE;return K(e,(t,n)=>{if((0,_.r3)(e,t)&&"."!==t.substring(0,1)){let s=ts(n);(s.isLeafNode()||!s.isEmpty())&&(i=i.updateImmediateChild(t,s))}}),i.updatePriority(ts(t))}{let s=[],r=!1,o=e;if(K(o,(e,t)=>{if("."!==e.substring(0,1)){let n=ts(t);n.isEmpty()||(r=r||!n.getPriority().isEmpty(),s.push(new eH(e,n)))}}),0===s.length)return tn.EMPTY_NODE;let l=e8(s,e$,e=>e.name,eQ);if(!r)return new tn(l,ts(t),te.Default);{let h=e8(s,e4.getCompare());return new tn(l,ts(t),new te({".priority":h},{".priority":e4}))}}}Object.defineProperties(eH,{MIN:{value:new eH(U,tn.EMPTY_NODE)},MAX:{value:new eH(H,ti)}}),eY.__EMPTY_NODE=tn.EMPTY_NODE,e1.__childrenNodeConstructor=tn,eX=ti,e2=ti,e3=ts;/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class tr extends ej{constructor(e){super(),this.indexPath_=e,(0,_.hu)(!eD(e)&&".priority"!==ek(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?j(e.name,t.name):s}makePost(e,t){let n=ts(e),i=tn.EMPTY_NODE.updateChild(this.indexPath_,n);return new eH(t,i)}maxPost(){let e=tn.EMPTY_NODE.updateChild(this.indexPath_,ti);return new eH(H,e)}toString(){return eR(this.indexPath_,0).join("/")}}let to=new /**
 * @license
 * Copyright 2017 Google LLC
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
 */ class extends ej{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?j(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return eH.MIN}maxPost(){return eH.MAX}makePost(e,t){let n=ts(e);return new eH(t,n)}toString(){return".value"}},tl="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";function th(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}!function(){let e=0,t=[];return function(n){let i=n===e;e=n;let s,r=Array(8);for(s=7;s>=0;s--)r[s]=tl.charAt(n%64),n=Math.floor(n/64);(0,_.hu)(0===n,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&63===t[s];s--)t[s]=0;t[s]++}else for(s=0;s<12;s++)t[s]=Math.floor(64*Math.random());for(s=0;s<12;s++)o+=tl.charAt(t[s]);return(0,_.hu)(20===o.length,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class ta{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=e4}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,_.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return((0,_.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:U}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,_.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return((0,_.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:H}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,_.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===e4}copy(){let e=new ta;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tu(e){let t={};if(e.isDefault())return t;let n;return e.index_===e4?n="$priority":e.index_===to?n="$value":e.index_===eV?n="$key":((0,_.hu)(e.index_ instanceof tr,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,_.Wl)(n),e.startSet_&&(t.startAt=(0,_.Wl)(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+(0,_.Wl)(e.indexStartName_))),e.endSet_&&(t.endAt=(0,_.Wl)(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+(0,_.Wl)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function tc(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==e4&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class td extends eC{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=M("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,_.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){let s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);let r=td.getListenId_(e,n),o={};this.listens_[r]=o;let l=tu(e._queryParams);this.restRequest_(s+".json",l,(e,t)=>{let l=t;404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),(0,_.DV)(this.listens_,r)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=td.getListenId_(e,t);delete this.listens_[n]}get(e){let t=tu(e._queryParams),n=e._path.toString(),i=new _.BH;return this.restRequest_(n+".json",t,(e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(Error(s))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);let r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,_.xO)(t);this.log_("Sending REST request for "+r);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=(0,_.cI)(o.responseText)}catch(t){L("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&L("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class t_{constructor(){this.rootNode_=tn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ function tp(){return{value:null,children:new Map}}function tf(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{let s=new eI(t.toString()+"/"+e);tf(i,s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class tm{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&K(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class tg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tm(e),Z(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;K(e,(e,i)=>{i>0&&(0,_.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),Z(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function ty(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tC(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(o=u||(u={}))[o.OVERWRITE=0]="OVERWRITE",o[o.MERGE=1]="MERGE",o[o.ACK_USER_WRITE=2]="ACK_USER_WRITE",o[o.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class tw{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=u.ACK_USER_WRITE,this.source=ty()}operationForChild(e){if(!eD(this.path))return(0,_.hu)(ek(this.path)===e,"operationForChild called for unrelated child."),new tw(eE(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return(0,_.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new eI(e));return new tw(eb(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class tT{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=u.OVERWRITE}operationForChild(e){return eD(this.path)?new tT(this.source,eb(),this.snap.getImmediateChild(e)):new tT(this.source,eE(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class tI{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=u.MERGE}operationForChild(e){if(!eD(this.path))return(0,_.hu)(ek(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tI(this.source,eE(this.path),this.children);{let t=this.children.subtree(new eI(e));return t.isEmpty()?null:t.value?new tT(this.source,eb(),t.value):new tI(this.source,eb(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class tb{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(eD(e))return this.isFullyInitialized()&&!this.filtered_;let t=ek(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function tk(e,t,n,i,s,r){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw(0,_.g5)("Should only compare child_ events.");let i=new eH(t.childName,t.snapshotNode),s=new eH(n.childName,n.snapshotNode);return e.index_.compare(i,s)})(e,t,n)),o.forEach(n=>{var i,o,l;let h=(i=e,o=n,l=r,"value"===o.type||"child_removed"===o.type||(o.prevName=l.getPredecessorChildName(o.childName,o.snapshotNode,i.index_)),o);s.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(h,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ function tS(e,t){return{eventCache:e,serverCache:t}}function tE(e,t,n,i){return tS(new tb(t,n,i),e.serverCache)}function tN(e,t,n,i){return tS(e.eventCache,new tb(t,n,i))}function tR(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tP(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let tx,tD=()=>(tx||(tx=new eG(z)),tx);class tM{constructor(e,t=tD()){this.value=e,this.children=t}static fromObject(e){let t=new tM(null);return K(e,(e,n)=>{t=t.set(new eI(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:eb(),value:this.value};if(eD(e))return null;{let n=ek(e),i=this.children.get(n);if(null===i)return null;{let s=i.findRootMostMatchingPathAndValue(eE(e),t);if(null==s)return null;{let r=ex(new eI(n),s.path);return{path:r,value:s.value}}}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(eD(e))return this;{let t=ek(e),n=this.children.get(t);return null!==n?n.subtree(eE(e)):new tM(null)}}set(e,t){if(eD(e))return new tM(t,this.children);{let n=ek(e),i=this.children.get(n)||new tM(null),s=i.set(eE(e),t),r=this.children.insert(n,s);return new tM(this.value,r)}}remove(e){if(eD(e))return this.children.isEmpty()?new tM(null):new tM(null,this.children);{let t=ek(e),n=this.children.get(t);if(!n)return this;{let i=n.remove(eE(e)),s;return(s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty())?new tM(null):new tM(this.value,s)}}}get(e){if(eD(e))return this.value;{let t=ek(e),n=this.children.get(t);return n?n.get(eE(e)):null}}setTree(e,t){if(eD(e))return t;{let n=ek(e),i=this.children.get(n)||new tM(null),s=i.setTree(eE(e),t),r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new tM(this.value,r)}}fold(e){return this.fold_(eb(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,s)=>{n[i]=s.fold_(ex(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,eb(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(eD(e))return null;{let s=ek(e),r=this.children.get(s);return r?r.findOnPath_(eE(e),ex(t,s),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,eb(),t)}foreachOnPath_(e,t,n){if(eD(e))return this;{this.value&&n(t,this.value);let i=ek(e),s=this.children.get(i);return s?s.foreachOnPath_(eE(e),ex(t,i),n):new tM(null)}}foreach(e){this.foreach_(eb(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(ex(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class tA{constructor(e){this.writeTree_=e}static empty(){return new tA(new tM(null))}}function tF(e,t,n){if(eD(t))return new tA(new tM(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let s=i.path,r=i.value,o=eM(s,t);return r=r.updateChild(o,n),new tA(e.writeTree_.set(s,r))}{let l=new tM(n),h=e.writeTree_.setTree(t,l);return new tA(h)}}}function tL(e,t,n){let i=e;return K(n,(e,n)=>{i=tF(i,ex(t,e),n)}),i}function tO(e,t){if(eD(t))return tA.empty();{let n=e.writeTree_.setTree(t,new tM(null));return new tA(n)}}function tq(e,t){return null!=tW(e,t)}function tW(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(eM(n.path,t)):null}function tU(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(e4,(e,n)=>{t.push(new eH(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new eH(e,n.value))}),t}function tH(e,t){if(eD(t))return e;{let n=tW(e,t);return new tA(null!=n?new tM(n):e.writeTree_.subtree(t))}}function tj(e){return e.writeTree_.isEmpty()}function tz(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let s=null;return n.children.inorderTraversal((n,r)=>{".priority"===n?((0,_.hu)(null!==r.value,"Priority writes must always be leaf nodes"),s=r.value):i=e(ex(t,n),r,i)}),i.getChild(t).isEmpty()||null===s||(i=i.updateChild(ex(t,".priority"),s)),i}}(eb(),e.writeTree_,t)}function tY(e,t){if(e.snap)return eF(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&eF(ex(e.path,n),t))return!0;return!1}function tV(e){return e.visible}function tB(e,t,n){let i=tA.empty();for(let s=0;s<e.length;++s){let r=e[s];if(t(r)){let o=r.path,l;if(r.snap)eF(n,o)?(l=eM(n,o),i=tF(i,l,r.snap)):eF(o,n)&&(l=eM(o,n),i=tF(i,eb(),r.snap.getChild(l)));else if(r.children){if(eF(n,o))l=eM(n,o),i=tL(i,l,r.children);else if(eF(o,n)){if(l=eM(o,n),eD(l))i=tL(i,eb(),r.children);else{let h=(0,_.DV)(r.children,ek(l));if(h){let a=h.getChild(eE(l));i=tF(i,eb(),a)}}}}else throw(0,_.g5)("WriteRecord should have .snap or .children")}}return i}function tK(e,t,n,i,s){if(i||s){let r=tH(e.visibleWrites,t);if(!s&&tj(r))return n;if(!s&&null==n&&!tq(r,eb()))return null;{let o=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(eF(e.path,t)||eF(t,e.path))},l=tB(e.allWrites,o,t),h=n||tn.EMPTY_NODE;return tz(l,h)}}{let a=tW(e.visibleWrites,t);if(null!=a)return a;{let u=tH(e.visibleWrites,t);if(tj(u))return n;if(null==n&&!tq(u,eb()))return null;{let c=n||tn.EMPTY_NODE;return tz(u,c)}}}}function tG(e,t,n,i){return tK(e.writeTree,e.treePath,t,n,i)}function t$(e,t){return function(e,t,n){let i=tn.EMPTY_NODE,s=tW(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(e4,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){let r=tH(e.visibleWrites,t);return n.forEachChild(e4,(e,t)=>{let n=tz(tH(r,new eI(e)),t);i=i.updateImmediateChild(e,n)}),tU(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{let o=tH(e.visibleWrites,t);return tU(o).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function tQ(e,t,n,i){return function(e,t,n,i,s){(0,_.hu)(i||s,"Either existingEventSnap or existingServerSnap must exist");let r=ex(t,n);if(tq(e.visibleWrites,r))return null;{let o=tH(e.visibleWrites,r);return tj(o)?s.getChild(n):tz(o,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function tX(e,t){var n,i;return n=e.writeTree,i=ex(e.treePath,t),tW(n.visibleWrites,i)}function tJ(e,t,n){return function(e,t,n,i){let s=ex(t,n),r=tW(e.visibleWrites,s);if(null!=r)return r;if(!i.isCompleteForChild(n))return null;{let o=tH(e.visibleWrites,s);return tz(o,i.getNode().getImmediateChild(n))}}(e.writeTree,e.treePath,t,n)}function tZ(e,t){return t0(ex(e.treePath,t),e.writeTree)}function t0(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class t1{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;(0,_.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,_.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){var s,r,o,l;let h=i.type;if("child_added"===t&&"child_removed"===h)this.changeMap.set(n,th(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===h)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===h)this.changeMap.set(n,(s=n,r=i.oldSnap,{type:"child_removed",snapshotNode:r,childName:s}));else if("child_changed"===t&&"child_added"===h)this.changeMap.set(n,(o=n,l=e.snapshotNode,{type:"child_added",snapshotNode:l,childName:o}));else if("child_changed"===t&&"child_changed"===h)this.changeMap.set(n,th(n,e.snapshotNode,i.oldSnap));else throw(0,_.g5)("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}let t3=new /**
 * @license
 * Copyright 2017 Google LLC
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
 */ class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class t2{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let n=null!=this.optCompleteServerCache_?new tb(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tJ(this.writes_,e,n)}}getChildAfterChild(e,t,n){var i,s,r,o,l;let h=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tP(this.viewCache_),a=function(e,t,n,i,s,r,o){let l,h=tH(e.visibleWrites,t),a=tW(h,eb());if(null!=a)l=a;else{if(null==n)return[];l=tz(h,n)}if((l=l.withIndex(o)).isEmpty()||l.isLeafNode())return[];{let u=[],c=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o),_=d.getNext();for(;_&&u.length<1;)0!==c(_,i)&&u.push(_),_=d.getNext();return u}}((i=this.writes_).writeTree,i.treePath,h,t,1,n,e);return 0===a.length?null:a[0]}}function t4(e,t,n,i,s,r){let o=t.eventCache;if(null!=tX(i,n))return t;{let l,h;if(eD(n)){if((0,_.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let a=tP(t),u=a instanceof tn?a:tn.EMPTY_NODE,c=t$(i,u);l=e.filter.updateFullNode(t.eventCache.getNode(),c,r)}else{let d=tG(i,tP(t));l=e.filter.updateFullNode(t.eventCache.getNode(),d,r)}}else{let p=ek(n);if(".priority"===p){(0,_.hu)(1===eS(n),"Can't have a priority with additional path components");let f=o.getNode();h=t.serverCache.getNode();let m=tQ(i,n,f,h);l=null!=m?e.filter.updatePriority(f,m):o.getNode()}else{let g=eE(n),y;if(o.isCompleteForChild(p)){h=t.serverCache.getNode();let v=tQ(i,n,o.getNode(),h);y=null!=v?o.getNode().getImmediateChild(p).updateChild(g,v):o.getNode().getImmediateChild(p)}else y=tJ(i,p,t.serverCache);l=null!=y?e.filter.updateChild(o.getNode(),p,y,g,s,r):o.getNode()}}return tE(t,l,o.isFullyInitialized()||eD(n),e.filter.filtersNodes())}}function t5(e,t,n,i,s,r,o,l){let h=t.serverCache,a,u=o?e.filter:e.filter.getIndexedFilter();if(eD(n))a=u.updateFullNode(h.getNode(),i,null);else if(u.filtersNodes()&&!h.isFiltered()){let c=h.getNode().updateChild(n,i);a=u.updateFullNode(h.getNode(),c,null)}else{let d=ek(n);if(!h.isCompleteForPath(n)&&eS(n)>1)return t;let _=eE(n),p=h.getNode().getImmediateChild(d),f=p.updateChild(_,i);a=".priority"===d?u.updatePriority(h.getNode(),f):u.updateChild(h.getNode(),d,f,_,t3,null)}let m=tN(t,a,h.isFullyInitialized()||eD(n),u.filtersNodes()),g=new t2(s,m,r);return t4(e,m,n,s,g,l)}function t6(e,t,n,i,s,r,o){let l=t.eventCache,h,a,u=new t2(s,t,r);if(eD(n))a=e.filter.updateFullNode(t.eventCache.getNode(),i,o),h=tE(t,a,!0,e.filter.filtersNodes());else{let c=ek(n);if(".priority"===c)a=e.filter.updatePriority(t.eventCache.getNode(),i),h=tE(t,a,l.isFullyInitialized(),l.isFiltered());else{let d=eE(n),_=l.getNode().getImmediateChild(c),p;if(eD(d))p=i;else{let f=u.getCompleteChild(c);p=null!=f?".priority"===eN(d)&&f.getChild(eP(d)).isEmpty()?f:f.updateChild(d,i):tn.EMPTY_NODE}if(_.equals(p))h=t;else{let m=e.filter.updateChild(l.getNode(),c,p,d,u,o);h=tE(t,m,l.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function t8(e,t){return e.eventCache.isCompleteForChild(t)}function t7(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function t9(e,t,n,i,s,r,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t,a;a=eD(n)?i:new tM(null).setTree(n,i);let u=t.serverCache.getNode();return a.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){let a=t.serverCache.getNode().getImmediateChild(n),c=t7(e,a,i);h=t5(e,h,new eI(n),c,s,r,o,l)}}),a.children.inorderTraversal((n,i)=>{let a=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!a){let c=t.serverCache.getNode().getImmediateChild(n),d=t7(e,c,i);h=t5(e,h,new eI(n),d,s,r,o,l)}}),h}function ne(e,t){let n=tP(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!eD(t)&&!n.getImmediateChild(ek(t)).isEmpty())?n.getChild(t):null}function nt(e,t,n,i){var s,r;t.type===u.MERGE&&null!==t.source.queryId&&((0,_.hu)(tP(e.viewCache_),"We should always have a full cache before handling merges"),(0,_.hu)(tR(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,l=function(e,t,n,i,s){let r=new t1,o,l;if(n.type===u.OVERWRITE)n.source.fromUser?o=t6(e,t,n.path,n.snap,i,s,r):((0,_.hu)(n.source.fromServer,"Unknown source."),l=n.source.tagged||t.serverCache.isFiltered()&&!eD(n.path),o=t5(e,t,n.path,n.snap,i,s,l,r));else if(n.type===u.MERGE){var h,a,c,d,p,f,m;let g;n.source.fromUser?(h=e,a=t,c=n.path,d=n.children,p=i,f=s,m=r,g=a,o=(d.foreach((e,t)=>{let n=ex(c,e);t8(a,ek(n))&&(g=t6(h,g,n,t,p,f,m))}),d.foreach((e,t)=>{let n=ex(c,e);t8(a,ek(n))||(g=t6(h,g,n,t,p,f,m))}),g)):((0,_.hu)(n.source.fromServer,"Unknown source."),l=n.source.tagged||t.serverCache.isFiltered(),o=t9(e,t,n.path,n.children,i,s,l,r))}else if(n.type===u.ACK_USER_WRITE)o=n.revert?function(e,t,n,i,s,r){let o;if(null!=tX(i,n))return t;{let l=new t2(i,t,s),h=t.eventCache.getNode(),a;if(eD(n)||".priority"===ek(n)){let u;if(t.serverCache.isFullyInitialized())u=tG(i,tP(t));else{let c=t.serverCache.getNode();(0,_.hu)(c instanceof tn,"serverChildren would be complete if leaf node"),u=t$(i,c)}a=e.filter.updateFullNode(h,u,r)}else{let d=ek(n),p=tJ(i,d,t.serverCache);null==p&&t.serverCache.isCompleteForChild(d)&&(p=h.getImmediateChild(d)),(a=null!=p?e.filter.updateChild(h,d,p,eE(n),l,r):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(h,d,tn.EMPTY_NODE,eE(n),l,r):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=tG(i,tP(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,r))}return o=t.serverCache.isFullyInitialized()||null!=tX(i,eb()),tE(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=tX(s,n))return t;let l=t.serverCache.isFiltered(),h=t.serverCache;if(null!=i.value){if(eD(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return t5(e,t,n,h.getNode().getChild(n),s,r,l,o);if(!eD(n))return t;{let a=new tM(null);return h.getNode().forEachChild(eV,(e,t)=>{a=a.set(new eI(e),t)}),t9(e,t,n,a,s,r,l,o)}}{let u=new tM(null);return i.foreach((e,t)=>{let i=ex(n,e);h.isCompleteForPath(i)&&(u=u.set(e,h.getNode().getChild(i)))}),t9(e,t,n,u,s,r,l,o)}}(e,t,n.path,n.affectedTree,i,s,r);else if(n.type===u.LISTEN_COMPLETE)o=function(e,t,n,i,s){let r=t.serverCache,o=tN(t,r.getNode(),r.isFullyInitialized()||eD(n),r.isFiltered());return t4(e,o,n,i,t3,s)}(e,t,n.path,i,r);else throw(0,_.g5)("Unknown operation type: "+n.type);let y=r.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=tR(e);if(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority())){var o;n.push((o=tR(t),{type:"value",snapshotNode:o}))}}}(t,o,y),{viewCache:o,changes:y}}(e.processor_,o,t,n,i);return s=e.processor_,r=l.viewCache,(0,_.hu)(r.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),(0,_.hu)(r.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),(0,_.hu)(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,function(e,t,n,i){let s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let s=[],r=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n,i;r.push((n=t.childName,i=t.snapshotNode,{type:"child_moved",snapshotNode:i,childName:n}))}}),tk(e,s,"child_removed",t,i,n),tk(e,s,"child_added",t,i,n),tk(e,s,"child_moved",r,i,n),tk(e,s,"child_changed",t,i,n),tk(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}(e,l.changes,l.viewCache.eventCache.getNode(),null)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let nn;function ni(e,t,n,i){let s=t.source.queryId;if(null!==s){let r=e.views.get(s);return(0,_.hu)(null!=r,"SyncTree gave us an op for an invalid query."),nt(r,t,n,i)}{let o=[];for(let l of e.views.values())o=o.concat(nt(l,t,n,i));return o}}function ns(e,t){let n=null;for(let i of e.views.values())n=n||ne(i,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let nr;class no{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tM(null),this.pendingWriteTree_={visibleWrites:tA.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nl(e,t,n,i,s){var r,o,l,h,a;return(r=e.pendingWriteTree_,a=s,(0,_.hu)(i>r.lastWriteId,"Stacking an older write on top of newer ones"),void 0===a&&(a=!0),r.allWrites.push({path:t,snap:n,writeId:i,visible:a}),a&&(r.visibleWrites=tF(r.visibleWrites,t,n)),r.lastWriteId=i,s)?nc(e,new tT(ty(),t,n)):[]}function nh(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t),s=function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);(0,_.hu)(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){let l=e.allWrites[o];l.visible&&(o>=n&&tY(l,i.path)?s=!1:eF(i.path,l.path)&&(r=!0)),o--}if(!s)return!1;if(r){var h;return(h=e).visibleWrites=tB(h.allWrites,tV,eb()),h.allWrites.length>0?h.lastWriteId=h.allWrites[h.allWrites.length-1].writeId:h.lastWriteId=-1,!0}if(i.snap)e.visibleWrites=tO(e.visibleWrites,i.path);else{let a=i.children;K(a,t=>{e.visibleWrites=tO(e.visibleWrites,ex(i.path,t))})}return!0}(e.pendingWriteTree_,t);if(!s)return[];{let r=new tM(null);return null!=i.snap?r=r.set(eb(),!0):K(i.children,e=>{r=r.set(new eI(e),!0)}),nc(e,new tw(i.path,r,n))}}function na(e,t,n){return nc(e,new tT(tv(),t,n))}function nu(e,t,n){let i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=eM(e,t),s=ns(n,i);if(s)return s});return tK(i,t,s,n,!0)}function nc(e,t){var n,i;return function e(t,n,i,s){if(eD(t.path))return function e(t,n,i,s){let r=n.get(eb());null==i&&null!=r&&(i=ns(r,eb()));let o=[];return n.children.inorderTraversal((n,r)=>{let l=i?i.getImmediateChild(n):null,h=tZ(s,n),a=t.operationForChild(n);a&&(o=o.concat(e(a,r,l,h)))}),r&&(o=o.concat(ni(r,t,s,i))),o}(t,n,i,s);{let r=n.get(eb());null==i&&null!=r&&(i=ns(r,eb()));let o=[],l=ek(t.path),h=t.operationForChild(l),a=n.children.get(l);if(a&&h){let u=i?i.getImmediateChild(l):null,c=tZ(s,l);o=o.concat(e(h,a,u,c))}return r&&(o=o.concat(ni(r,t,s,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,i=eb(),t0(i,n)))}function nd(e,t){return e.tagToQueryMap.get(t)}function n_(e){let t=e.indexOf("$");return(0,_.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new eI(e.substr(0,t))}}function np(e,t,n){var i,s;let r=e.syncPointTree_.get(t);(0,_.hu)(r,"Missing sync point for query tag that we're tracking");let o=t0(t,i=e.pendingWriteTree_);return ni(r,n,o,null)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class nf{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new nf(t)}node(){return this.node_}}class nm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=ex(this.path_,e);return new nm(this.syncTree_,t)}node(){return nu(this.syncTree_,this.path_)}}let ng=function(e,t,n){return e&&"object"==typeof e?((0,_.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?ny(e[".sv"],t,n):"object"==typeof e[".sv"]?nv(e[".sv"],t):void(0,_.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},ny=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,_.hu)(!1,"Unexpected server value: "+e)},nv=function(e,t,n){e.hasOwnProperty("increment")||(0,_.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&(0,_.hu)(!1,"Unexpected increment value: "+i);let s=t.node();if((0,_.hu)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;let r=s.getValue();return"number"!=typeof r?i:r+i};function nC(e,t,n){let i=e.getPriority().val(),s=ng(i,t.getImmediateChild(".priority"),n),r;if(!e.isLeafNode())return r=e,s!==e.getPriority().val()&&(r=r.updatePriority(new e1(s))),e.forEachChild(e4,(e,i)=>{let s=nC(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))}),r;{let o=ng(e.getValue(),t,n);return o!==e.getValue()||s!==e.getPriority().val()?new e1(o,ts(s)):e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class nw{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function nT(e,t){let n=t instanceof eI?t:new eI(t),i=e,s=ek(n);for(;null!==s;){let r=(0,_.DV)(i.node.children,s)||{children:{},childCount:0};i=new nw(s,i,r),n=eE(n),s=ek(n)}return i}function nI(e){return e.node.value}function nb(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){var s;let r=void 0===nI(i)&&!nk(i),o=(0,_.r3)(t.node.children,n);r&&o?(delete t.node.children[n],t.node.childCount--,e(t)):r||o||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function nk(e){return e.node.childCount>0}function nS(e,t){K(e.node.children,(n,i)=>{t(new nw(n,e,i))})}function nE(e){return new eI(null===e.parent?e.name:nE(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ let nN=/[\[\].#$\/\u0000-\u001F\u007F]/,nR=/[\[\].#$\u0000-\u001F\u007F]/,nP=function(e){return"string"==typeof e&&0!==e.length&&!nN.test(e)},nx=function(e){var t;return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),"string"==typeof(t=e)&&0!==t.length&&!nR.test(t)},nD=function(e,t,n){let i=n instanceof eI?new eL(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+eq(i));if("function"==typeof t)throw Error(e+"contains a function "+eq(i)+" with contents = "+t.toString());if(q(t))throw Error(e+"contains "+t.toString()+" "+eq(i));if("string"==typeof t&&t.length>3495253.3333333335&&(0,_.ug)(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+eq(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let s=!1,r=!1;if(K(t,(t,n)=>{var o,l;if(".value"===t)s=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!nP(t)))throw Error(e+" contains an invalid key ("+t+") "+eq(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(t),o.byteLength_+=(0,_.ug)(t),eO(o),nD(e,n,i),function(e){let t=e.parts_.pop();e.byteLength_-=(0,_.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),s&&r)throw Error(e+' contains ".value" child '+eq(i)+" in addition to actual children.")}},nM=function(e,t){let n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!nP(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!nx(n))throw Error((0,_.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
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
 */ class nA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nF(e,t,n){!function(e,t){let n=null;for(let i=0;i<t.length;i++){let s=t[i],r=s.getPath();null===n||eA(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let s=e.eventLists_[i];if(s){let r=s.path;t(r)?(nL(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>eF(e,t)||eF(t,e))}function nL(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();R&&D("event: "+n.toString()),X(i)}}}class nO{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tp(),this.transactionQueueTree_=new nw,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nq(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new eI(".info/serverTimeOffset")),n=t.val()||0;return new Date().getTime()+n}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function nW(e,t,n,i,s){e.dataUpdateCount++;let r=new eI(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s){if(i){let l=(0,_.UI)(n,e=>ts(e));o=function(e,t,n,i){let s=nd(e,i);if(!s)return[];{let r=n_(s),o=r.path,l=r.queryId,h=eM(o,t),a=tM.fromObject(n),u=new tI(tC(l),h,a);return np(e,o,u)}}(e.serverSyncTree_,r,l,s)}else{let h=ts(n);o=function(e,t,n,i){let s=nd(e,i);if(null==s)return[];{let r=n_(s),o=r.path,l=r.queryId,h=eM(o,t),a=new tT(tC(l),h,n);return np(e,o,a)}}(e.serverSyncTree_,r,h,s)}}else if(i){let a=(0,_.UI)(n,e=>ts(e));o=function(e,t,n){let i=tM.fromObject(n);return nc(e,new tI(tv(),t,i))}(e.serverSyncTree_,r,a)}else{let u=ts(n);o=na(e.serverSyncTree_,r,u)}let c=r;o.length>0&&(c=nV(e,r)),nF(e.eventQueue_,c,o)}function nU(e,t){nH(e,"connected",t),!1===t&&function(e){nz(e,"onDisconnectEvents");let t=nq(e),n=tp();tf(e.onDisconnect_,eb(),(i,s)=>{var r,o,l,h;let a=(l=e.serverSyncTree_,nC(s,new nm(l,i),t));!function e(t,n,i){if(eD(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let s=ek(n);t.children.has(s)||t.children.set(s,tp());let r=t.children.get(s);n=eE(n),e(r,n,i)}}(n,i,a)});let i=[];tf(n,eb(),(t,n)=>{i=i.concat(na(e.serverSyncTree_,t,n));let s=function(e,t){let n=nE(nB(e,t)),i=nT(e.transactionQueueTree_,t);return function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{n$(e,t)}),n$(e,i),function e(t,n,i,s){i&&!s&&n(t),nS(t,t=>{e(t,n,!0,s)}),i&&s&&n(t)}(i,t=>{n$(e,t)}),n}(e,t);nV(e,s)}),e.onDisconnect_=tp(),nF(e.eventQueue_,eb(),i)}(e)}function nH(e,t,n){let i=new eI("/.info/"+t),s=ts(n);e.infoData_.updateSnapshot(i,s);let r=na(e.infoSyncTree_,i,s);nF(e.eventQueue_,i,r)}function nj(e){return e.nextWriteId_++}function nz(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),D(n,...t)}function nY(e,t,n){return nu(e.serverSyncTree_,t,n)||tn.EMPTY_NODE}function nV(e,t){let n=nB(e,t),i=nE(n),s=nK(e,n);return function(e,t,n){if(0===t.length)return;let i=[],s=[],r=t.filter(e=>0===e.status),o=r.map(e=>e.currentWriteId);for(let l=0;l<t.length;l++){var h,a,u,c;let d=t[l],p=eM(n,d.path),f=!1,m;if((0,_.hu)(null!==p,"rerunTransactionsUnderNode_: relativePath should not be null."),4===d.status)f=!0,m=d.abortReason,s=s.concat(nh(e.serverSyncTree_,d.currentWriteId,!0));else if(0===d.status){if(d.retryCount>=25)f=!0,m="maxretry",s=s.concat(nh(e.serverSyncTree_,d.currentWriteId,!0));else{let g=nY(e,d.path,o);d.currentInputSnapshot=g;let y=t[l].update(g.val());if(void 0!==y){nD("transaction failed: Data returned ",y,d.path);let v=ts(y),C="object"==typeof y&&null!=y&&(0,_.r3)(y,".priority");C||(v=v.updatePriority(g.getPriority()));let w=d.currentWriteId,T=nq(e),I=(h=v,a=g,u=T,nC(h,new nf(a),u));d.currentOutputSnapshotRaw=v,d.currentOutputSnapshotResolved=I,d.currentWriteId=nj(e),o.splice(o.indexOf(w),1),s=(s=s.concat(nl(e.serverSyncTree_,d.path,I,d.currentWriteId,d.applyLocally))).concat(nh(e.serverSyncTree_,w,!0))}else f=!0,m="nodata",s=s.concat(nh(e.serverSyncTree_,d.currentWriteId,!0))}}nF(e.eventQueue_,n,s),s=[],f&&(t[l].status=2,setTimeout(c=t[l].unwatcher,Math.floor(0)),t[l].onComplete&&("nodata"===m?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(Error(m),!1,null))))}nG(e,e.transactionQueueTree_);for(let b=0;b<i.length;b++)X(i[b]);(function e(t,n=t.transactionQueueTree_){if(n||nG(t,n),nI(n)){let i=nK(t,n);(0,_.hu)(i.length>0,"Sending zero length transaction queue");let s=i.every(e=>0===e.status);s&&function(t,n,i){let s=i.map(e=>e.currentWriteId),r=nY(t,n,s),o=r,l=r.hash();for(let h=0;h<i.length;h++){let a=i[h];(0,_.hu)(0===a.status,"tryToSendTransactionQueue_: items in queue should all be run."),a.status=1,a.retryCount++;let u=eM(n,a.path);o=o.updateChild(u,a.currentOutputSnapshotRaw)}let c=o.val(!0);t.server_.put(n.toString(),c,s=>{nz(t,"transaction put response",{path:n.toString(),status:s});let r=[];if("ok"===s){let o=[];for(let l=0;l<i.length;l++)i[l].status=2,r=r.concat(nh(t.serverSyncTree_,i[l].currentWriteId)),i[l].onComplete&&o.push(()=>i[l].onComplete(null,!0,i[l].currentOutputSnapshotResolved)),i[l].unwatcher();nG(t,nT(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),nF(t.eventQueue_,n,r);for(let h=0;h<o.length;h++)X(o[h])}else{if("datastale"===s)for(let a=0;a<i.length;a++)3===i[a].status?i[a].status=4:i[a].status=0;else{L("transaction at "+n.toString()+" failed: "+s);for(let u=0;u<i.length;u++)i[u].status=4,i[u].abortReason=s}nV(t,n)}},l)}(t,nE(n),i)}else nk(n)&&nS(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,s,i),i}function nB(e,t){let n,i=e.transactionQueueTree_;for(n=ek(t);null!==n&&void 0===nI(i);)i=nT(i,n),t=eE(t),n=ek(t);return i}function nK(e,t){let n=[];return function e(t,n,i){let s=nI(n);if(s)for(let r=0;r<s.length;r++)i.push(s[r]);nS(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function nG(e,t){let n=nI(t);if(n){let i=0;for(let s=0;s<n.length;s++)2!==n[s].status&&(n[i]=n[s],i++);n.length=i,nb(t,n.length>0?n:void 0)}nS(t,t=>{nG(e,t)})}function n$(e,t){let n=nI(t);if(n){let i=[],s=[],r=-1;for(let o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?((0,_.hu)(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):((0,_.hu)(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(nh(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,Error("set"),!1,null))));-1===r?nb(t,void 0):n.length=r+1,nF(e.eventQueue_,nE(t),s);for(let l=0;l<i.length;l++)X(i[l])}}let nQ=function(e,t){let n=nX(e),i=n.namespace;"firebase.com"===n.domain&&F(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||F("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();let s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new eo(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new eI(n.pathString)}},nX=function(e){let t="",n="",i="",s="",r="",o=!0,l="https",h=443;if("string"==typeof e){let a=e.indexOf("//");a>=0&&(l=e.substring(0,a-1),e=e.substring(a+2));let u=e.indexOf("/");-1===u&&(u=e.length);let c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(u,c)),u<c&&(s=/**
 * @license
 * Copyright 2017 Google LLC
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
 */ function(e){let t="",n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch(r){}t+="/"+s}return t}(e.substring(u,c)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):L(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,c)));(a=t.indexOf(":"))>=0?(o="https"===l||"wss"===l,h=parseInt(t.substring(a+1),10)):a=t.length;let _=t.slice(0,a);if("localhost"===_.toLowerCase())n="localhost";else if(_.split(".").length<=2)n=_;else{let p=t.indexOf(".");i=t.substring(0,p).toLowerCase(),n=t.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:h,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
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
 */ class nJ{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return eD(this._path)?null:eN(this._path)}get ref(){return new nZ(this._repo,this._path)}get _queryIdentifier(){let e=tc(this._queryParams),t=V(e);return"{}"===t?"default":t}get _queryObject(){return tc(this._queryParams)}isEqual(e){if(!((e=(0,_.m9)(e))instanceof nJ))return!1;let t=this._repo===e._repo,n=eA(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class nZ extends nJ{constructor(e,t){super(e,t,new ta,!1)}get parent(){let e=eP(this._path);return null===e?null:new nZ(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}(0,_.hu)(!nn,"__referenceConstructor has already been defined"),nn=nZ,(0,_.hu)(!nr,"__referenceConstructor has already been defined"),nr=nZ;let n0={};class n1{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=ec(e.repoInfo_),e.forceRestClient_||J())e.server_=new td(e.repoInfo_,(t,n,i,s)=>{nW(e,t,n,i,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>nU(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,_.Wl)(n)}catch(i){throw Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new eU(e.repoInfo_,t,(t,n,i,s)=>{nW(e,t,n,i,s)},t=>{nU(e,t)},t=>{var n,i;n=e,i=t,K(i,(e,t)=>{nH(n,e,t)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return eu[n]||(eu[n]=t()),eu[n]}(e.repoInfo_,()=>new tg(e.stats_,e.server_)),e.infoData_=new t_,e.infoSyncTree_=new no({startListening(t,n,i,s){let r=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=na(e.infoSyncTree_,t._path,o),setTimeout(()=>{s("ok")},0)),r},stopListening(){}}),nH(e,"connected",!1),e.serverSyncTree_=new no({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,(n,i)=>{let r=s(n,i);nF(e.eventQueue_,t._path,r)}),[]),stopListening(t,n){e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nZ(this._repo,eb())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){var n;let i=n0[t];i&&i[e.key]===e||F(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete i[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&F("Cannot call "+e+" on a deleted database.")}}eU.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},eU.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},y=a=c.Jn,(0,c.Xd)(new d.wA("database",(e,{instanceIdentifier:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return function(e,t,n,i,s){var r,o,l,h;let a=i||e.options.databaseURL;void 0===a&&(e.options.projectId||F("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),D("Using default host for project ",e.options.projectId),a=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=nQ(a,s),c=u.repoInfo,d,_;void 0!==f&&f.env&&(_=f.env.FIREBASE_DATABASE_EMULATOR_HOST),_?(d=!0,c=(u=nQ(a=`http://${_}?ns=${c.namespace}`,s)).repoInfo):d=!u.repoInfo.secure;let p=s&&d?new en(en.OWNER):new et(e.name,e.options,t);nM("Invalid Firebase Database URL",u),eD(u.path)||F("Database URL must point to the root of a Firebase Database (not including a child path).");let m,g,y=(r=c,o=e,l=p,h=new ee(e.name,n),m=n0[o.name],m||(m={},n0[o.name]=m),g=m[r.toURLString()],g&&F("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),g=new nO(r,!1,l,h),m[r.toURLString()]=g,g);return new n1(y,e)}(n,i,s,t)},"PUBLIC").setMultipleInstances(!0)),(0,c.KN)(m,g,void 0),(0,c.KN)(m,g,"esm2017")}}]);