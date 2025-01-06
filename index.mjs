// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.3.0-esm/index.mjs";import e,{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.3.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-invgamma@v0.2.1-esm/index.mjs";function d(r,t,n,e,s,d,m,f){var l,o,c;if(l={arity:0,fcn:null},m){if(0===t&&0===s)return o=a(r)?r.get(n):r[n],c=a(e)?e.get(d):e[d],l.fcn=i.factory(o,c,f),l;l.fcn=i.factory(f)}else l.fcn=i;return l.arity+=2,l}function m(r,n,s,a,i,m,f,l){var o=d(n,s,0,a,i,0,arguments.length>7,l);return 0===o.arity?(t([m],[r],[f],o.fcn),m):(e([n,a,m],[r],[s,i,f],o.fcn),m)}function f(r,t,e,a,i,m,f,l,o,c,j){var y=d(t,e,a,i,m,f,arguments.length>10,j);return 0===y.arity?(n([l],[r],[o],[c],y.fcn),l):(s([t,i,l],[r],[e,m,o],[a,f,c],y.fcn),l)}r(m,"ndarray",f);export{m as default,f as ndarray};
//# sourceMappingURL=index.mjs.map
