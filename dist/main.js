!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(3)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"#test {\n  color: red;\n}\nbody {\n  margin: 0;\n}\ncanvas {\n  width: 100%;\n  height: 100%\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(m(o.parts[a],n))}else{for(var s=[];a<o.parts.length;a++)s.push(m(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:s}}}}function u(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var o=t.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,v=0;function m(e,n){var t,o,r;if(n.singleton){var i=v++;t=h||(h=u(n)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=u(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=s(e,n);return c(t,n),function(e){for(var o=[],i=0;i<t.length;i++){var a=t[i],u=r[a.id];u&&(u.refs--,o.push(u))}e&&c(s(e,n),n);for(var l=0;l<o.length;l++){var d=o[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete r[d.id]}}}}},function(e,n,t){"use strict";t.r(n);t(0);let o,r,i,a,s,c,u,l;function d(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}function f(){i.render(o,r),requestAnimationFrame(f)}console.log((e=>`${e}, sis`)("I love ya but work!")),console.log("hello from group.js"),window.addEventListener("load",e=>{a=document.getElementById("container"),o=new THREE.Scene,(r=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1e3)).position.z=10,o.background=new THREE.Color(13421772),(i=new THREE.WebGLRenderer({alpha:!0})).setSize(window.innerWidth,window.innerHeight),a.appendChild(i.domElement),(s=new THREE.OrbitControls(r,i.domElement)).autoRotate=!0,s.addEventListener("change",i,{passive:!1}),function(){let e=new THREE.PointLight(14540253);e.position.set(-5,-3,3),o.add(e);let n=new THREE.AmbientLight(5263440);o.add(n)}(),function(){var e=new THREE.BoxBufferGeometry(1,1,1),n=new THREE.BoxBufferGeometry(3,3,3),t=new THREE.MeshBasicMaterial({color:65280}),a=new THREE.MeshBasicMaterial({color:0});console.log("Material A",t),(c=new THREE.Mesh(e,t)).position.set(1,1,0),(u=new THREE.Mesh(n,a)).position.set(-1,-1,0),(l=new THREEx.DomEvents(r,i.domElement)).addEventListener(c,"click",(function(e){console.log("you clicked on green cubeA"),c.material.color.setHex(65280)}),!1),l.addEventListener(c,"mouseover",(function(e){c.material.color.setHex(16777215),console.log("you moused over green cubeA")}),!1),l.addEventListener(c,"mouse out",(function(e){c.material.color.setHex(65280),console.log("you moused off green cubeA")}),!1),THREEx.Linkify(l,u,"http://jeromeetienne.github.io/threex/",!0);var s=new THREE.Group;s.add(c),s.add(u),o.add(s)}(),window.addEventListener("resize",d,!1),f()})}]);