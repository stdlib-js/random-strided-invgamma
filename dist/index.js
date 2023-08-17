"use strict";var l=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var g=l(function(I,m){
var d=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-invgamma/dist');function R(n,e,u,i,c,a,v,t){var r,f,s;if(r={arity:0,fcn:null},v){if(e===0&&c===0)return d(n)?f=n.get(u):f=n[u],d(i)?s=i.get(a):s=i[a],r.fcn=q.factory(f,s,t),r;r.fcn=q.factory(t)}else r.fcn=q;return r.arity+=2,r}m.exports=R
});var A=l(function(J,p){
var h=require('@stdlib/strided-base-nullary/dist'),j=require('@stdlib/strided-base-binary/dist'),w=g();function z(n,e,u,i,c,a,v,t){var r=w(e,u,0,i,c,0,arguments.length>7,t);return r.arity===0?(h([a],[n],[v],r.fcn),a):(j([e,i,a],[n],[u,c,v],r.fcn),a)}p.exports=z
});var x=l(function(K,k){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=g();function E(n,e,u,i,c,a,v,t,r,f,s){var y=D(e,u,i,c,a,v,arguments.length>10,s);return y.arity===0?(B([t],[n],[r],[f],y.fcn),t):(C([e,c,t],[n],[u,a,r],[i,v,f],y.fcn),t)}k.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=A(),G=x();F(O,"ndarray",G);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
