"use strict";var precacheConfig=[["/EventBeast/index.html","3a793bd7b79df9bc0fe9d19ba44d89ad"],["/EventBeast/static/css/main.9333bbd8.css","9834b102ff4e5292dd075bb73ddeb667"],["/EventBeast/static/js/main.5b78eba8.js","ab792ab255e33e911eceef7c903028f2"],["/EventBeast/static/media/LogoOne.7958797c.png","7958797c6dec0a8cc8dff2efd2aa6406"],["/EventBeast/static/media/ReactLogo.ad79cff6.png","ad79cff6424b60472987b90b04beea7c"],["/EventBeast/static/media/darkskyLogo.c3926b19.png","c3926b19e8a02aef2a817466e4043a14"],["/EventBeast/static/media/firebaseLogo.a265d297.png","a265d297d2641a62f618818a6e87ba6c"],["/EventBeast/static/media/googlemapLogo.8ab2ff2b.png","8ab2ff2beb3766af60630a224e089865"],["/EventBeast/static/media/like.8a62b5b4.png","8a62b5b433c0c121b8726e63f4a534ce"],["/EventBeast/static/media/loader.afb3f70e.gif","afb3f70e429a9a386750a5cafe0a3a18"],["/EventBeast/static/media/materialLogo.e337ff92.svg","e337ff92290ea8c0ea5d3e154b7179fc"],["/EventBeast/static/media/meetupLogo.aae54d55.svg","aae54d555e6abe5085016a21cb02a5e4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/EventBeast/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});