import{g as C}from"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";var P={},L={get exports(){return P},set exports(y){P=y}};/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(y,O){(function(Z){var I=2e3,s={s:1,n:0,d:1};function l(t,i){if(isNaN(t=parseInt(t,10)))throw f.InvalidParameter;return t*i}function d(t,i){if(i===0)throw f.DivisionByZero;var r=Object.create(f.prototype);r.s=t<0?-1:1,t=t<0?-t:t;var n=N(t,i);return r.n=t/n,r.d=i/n,r}function x(t){for(var i={},r=t,n=2,h=4;h<=r;){for(;r%n===0;)r/=n,i[n]=(i[n]||0)+1;h+=1+2*n++}return r!==t?r>1&&(i[r]=(i[r]||0)+1):i[t]=(i[t]||0)+1,i}var v=function(t,i){var r=0,n=1,h=1,u=0,o=0,D=0,g=1,w=1,e=0,a=1,M=1,c=1,m=1e7,b;if(t!=null)if(i!==void 0){if(r=t,n=i,h=r*n,r%1!==0||n%1!==0)throw f.NonIntegerParameter}else switch(typeof t){case"object":{if("d"in t&&"n"in t)r=t.n,n=t.d,"s"in t&&(r*=t.s);else if(0 in t)r=t[0],1 in t&&(n=t[1]);else throw f.InvalidParameter;h=r*n;break}case"number":{if(t<0&&(h=t,t=-t),t%1===0)r=t;else if(t>0){for(t>=1&&(w=Math.pow(10,Math.floor(1+Math.log(t)/Math.LN10)),t/=w);a<=m&&c<=m;)if(b=(e+M)/(a+c),t===b){a+c<=m?(r=e+M,n=a+c):c>a?(r=M,n=c):(r=e,n=a);break}else t>b?(e+=M,a+=c):(M+=e,c+=a),a>m?(r=M,n=c):(r=e,n=a);r*=w}else(isNaN(t)||isNaN(i))&&(n=r=NaN);break}case"string":{if(a=t.match(/\d+|./g),a===null)throw f.InvalidParameter;if(a[e]==="-"?(h=-1,e++):a[e]==="+"&&e++,a.length===e+1?o=l(a[e++],h):a[e+1]==="."||a[e]==="."?(a[e]!=="."&&(u=l(a[e++],h)),e++,(e+1===a.length||a[e+1]==="("&&a[e+3]===")"||a[e+1]==="'"&&a[e+3]==="'")&&(o=l(a[e],h),g=Math.pow(10,a[e].length),e++),(a[e]==="("&&a[e+2]===")"||a[e]==="'"&&a[e+2]==="'")&&(D=l(a[e+1],h),w=Math.pow(10,a[e+1].length)-1,e+=3)):a[e+1]==="/"||a[e+1]===":"?(o=l(a[e],h),g=l(a[e+2],1),e+=3):a[e+3]==="/"&&a[e+1]===" "&&(u=l(a[e],h),o=l(a[e+2],h),g=l(a[e+4],1),e+=5),a.length<=e){n=g*w,h=r=D+n*u+w*o;break}}default:throw f.InvalidParameter}if(n===0)throw f.DivisionByZero;s.s=h<0?-1:1,s.n=Math.abs(r),s.d=Math.abs(n)};function E(t,i,r){for(var n=1;i>0;t=t*t%r,i>>=1)i&1&&(n=n*t%r);return n}function F(t,i){for(;i%2===0;i/=2);for(;i%5===0;i/=5);if(i===1)return 0;for(var r=10%i,n=1;r!==1;n++)if(r=r*10%i,n>I)return 0;return n}function B(t,i,r){for(var n=1,h=E(10,r,i),u=0;u<300;u++){if(n===h)return u;n=n*10%i,h=h*10%i}return 0}function N(t,i){if(!t)return i;if(!i)return t;for(;;){if(t%=i,!t)return i;if(i%=t,!i)return t}}function f(t,i){if(v(t,i),this instanceof f)t=N(s.d,s.n),this.s=s.s,this.n=s.n/t,this.d=s.d/t;else return d(s.s*s.n,s.d)}f.DivisionByZero=new Error("Division by Zero"),f.InvalidParameter=new Error("Invalid argument"),f.NonIntegerParameter=new Error("Parameters must be integer"),f.prototype={s:1,n:0,d:1,abs:function(){return d(this.n,this.d)},neg:function(){return d(-this.s*this.n,this.d)},add:function(t,i){return v(t,i),d(this.s*this.n*s.d+s.s*this.d*s.n,this.d*s.d)},sub:function(t,i){return v(t,i),d(this.s*this.n*s.d-s.s*this.d*s.n,this.d*s.d)},mul:function(t,i){return v(t,i),d(this.s*s.s*this.n*s.n,this.d*s.d)},div:function(t,i){return v(t,i),d(this.s*s.s*this.n*s.d,this.d*s.n)},clone:function(){return d(this.s*this.n,this.d)},mod:function(t,i){if(isNaN(this.n)||isNaN(this.d))return new f(NaN);if(t===void 0)return d(this.s*this.n%this.d,1);if(v(t,i),s.n===0&&this.d===0)throw f.DivisionByZero;return d(this.s*(s.d*this.n)%(s.n*this.d),s.d*this.d)},gcd:function(t,i){return v(t,i),d(N(s.n,this.n)*N(s.d,this.d),s.d*this.d)},lcm:function(t,i){return v(t,i),s.n===0&&this.n===0?d(0,1):d(s.n*this.n,N(s.n,this.n)*N(s.d,this.d))},ceil:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new f(NaN):d(Math.ceil(t*this.s*this.n/this.d),t)},floor:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new f(NaN):d(Math.floor(t*this.s*this.n/this.d),t)},round:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new f(NaN):d(Math.round(t*this.s*this.n/this.d),t)},inverse:function(){return d(this.s*this.d,this.n)},pow:function(t,i){if(v(t,i),s.d===1)return s.s<0?d(Math.pow(this.s*this.d,s.n),Math.pow(this.n,s.n)):d(Math.pow(this.s*this.n,s.n),Math.pow(this.d,s.n));if(this.s<0)return null;var r=x(this.n),n=x(this.d),h=1,u=1;for(var o in r)if(o!=="1"){if(o==="0"){h=0;break}if(r[o]*=s.n,r[o]%s.d===0)r[o]/=s.d;else return null;h*=Math.pow(o,r[o])}for(var o in n)if(o!=="1"){if(n[o]*=s.n,n[o]%s.d===0)n[o]/=s.d;else return null;u*=Math.pow(o,n[o])}return s.s<0?d(u,h):d(h,u)},equals:function(t,i){return v(t,i),this.s*this.n*s.d===s.s*s.n*this.d},compare:function(t,i){v(t,i);var r=this.s*this.n*s.d-s.s*s.n*this.d;return(0<r)-(r<0)},simplify:function(t){if(isNaN(this.n)||isNaN(this.d))return this;t=t||.001;for(var i=this.abs(),r=i.toContinued(),n=1;n<r.length;n++){for(var h=d(r[n-1],1),u=n-2;u>=0;u--)h=h.inverse().add(r[u]);if(h.sub(i).abs().valueOf()<t)return h.mul(this.s)}return this},divisible:function(t,i){return v(t,i),!(!(s.n*this.d)||this.n*s.d%(s.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(t){var i,r="",n=this.n,h=this.d;return this.s<0&&(r+="-"),h===1?r+=n:(t&&(i=Math.floor(n/h))>0&&(r+=i,r+=" ",n%=h),r+=n,r+="/",r+=h),r},toLatex:function(t){var i,r="",n=this.n,h=this.d;return this.s<0&&(r+="-"),h===1?r+=n:(t&&(i=Math.floor(n/h))>0&&(r+=i,n%=h),r+="\\frac{",r+=n,r+="}{",r+=h,r+="}"),r},toContinued:function(){var t,i=this.n,r=this.d,n=[];if(isNaN(i)||isNaN(r))return n;do n.push(Math.floor(i/r)),t=i%r,i=r,r=t;while(i!==1);return n},toString:function(t){var i=this.n,r=this.d;if(isNaN(i)||isNaN(r))return"NaN";t=t||15;var n=F(i,r),h=B(i,r,n),u=this.s<0?"-":"";if(u+=i/r|0,i%=r,i*=10,i&&(u+="."),n){for(var o=h;o--;)u+=i/r|0,i%=r,i*=10;u+="(";for(var o=n;o--;)u+=i/r|0,i%=r,i*=10;u+=")"}else for(var o=t;i&&o--;)u+=i/r|0,i%=r,i*=10;return u}},Object.defineProperty(f,"__esModule",{value:!0}),f.default=f,f.Fraction=f,y.exports=f})()})(L);const _=C(P);export{_ as F};
