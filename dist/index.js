"use strict";var l=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var g=l(function(I,m){
var d=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-invgamma/dist');function R(n,e,a,t,c,i,v,u){var r,f,s;if(r={arity:0,fcn:null},v){if(e===0&&c===0)return d(n)?f=n.get(a):f=n[a],d(t)?s=t.get(i):s=t[i],r.fcn=q.factory(f,s,u),r;r.fcn=q.factory(u)}else r.fcn=q;return r.arity+=2,r}m.exports=R
});var A=l(function(J,p){
var h=require('@stdlib/strided-base-nullary/dist'),j=require('@stdlib/strided-base-binary/dist'),w=g();function z(n,e,a,t,c,i,v,u){var r=w(e,a,0,t,c,0,arguments.length>7,u);return r.arity===0?(h([i],[n],[v],r.fcn),i):(j([e,t,i],[n],[a,c,v],r.fcn),i)}p.exports=z
});var x=l(function(K,k){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=g();function E(n,e,a,t,c,i,v,u,r,f,s){var y=D(e,a,t,c,i,v,arguments.length>10,s);return y.arity===0?(B([u],[n],[r],[f],y.fcn),u):(C([e,c,u],[n],[a,i,r],[t,v,f],y.fcn),u)}k.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=A(),G=x();F(O,"ndarray",G);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
