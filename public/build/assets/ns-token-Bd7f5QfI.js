import{a as Yt,p as Ot,v as jt,F as $t,d as Q,b as st}from"./bootstrap-AnITgN8s.js";import{_ as F}from"./currency-Dtag6qPd.js";import{_ as It}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.es-CL3uzDSn.js";import{n as qt}from"./ns-prompt-popup-CngPOI71.js";import{r as U,o as M,c as L,a as E,t as A,B as Gt,f as J,w as Y,i as O,F as bt,b as Bt,g as Qt,e as at}from"./runtime-core.esm-bundler-VrNrzzXC.js";import"./chart-Ozef1QaY.js";var q={},Wt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},kt={},N={};let pt;const Zt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return Zt[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');pt=t};N.isKanjiModeEnabled=function(){return typeof pt<"u"};N.toSJIS=function(t){return pt(t)};var et={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(et);function Pt(){this.buffer=[],this.length=0}Pt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Xt=Pt;function G(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}G.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};G.prototype.get=function(e,t){return this.data[e*this.size+t]};G.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};G.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var te=G,St={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,a=[n-7];for(let u=1;u<o-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||o.push([n[a],n[u]]);return o}})(St);var Mt={};const ee=N.getSymbolSize,Tt=7;Mt.getPositions=function(t){const i=ee(t);return[[0,0],[i-Tt,0],[0,i-Tt]]};var Rt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,a=0,u=0,c=null,l=null;for(let C=0;C<n;C++){a=u=0,c=l=null;for(let d=0;d<n;d++){let f=o.get(C,d);f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1),f=o.get(d,C),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const c=o.get(a,u)+o.get(a,u+1)+o.get(a+1,u)+o.get(a+1,u+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,a=0,u=0;for(let c=0;c<n;c++){a=u=0;for(let l=0;l<n;l++)a=a<<1&2047|o.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|o.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let u=0;u<s;u++)n+=o.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,i(o,u,a))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,o);const l=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(c,o),l<u&&(u=l,a=c)}return a}})(Rt);var nt={};const v=et,W=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Z=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];nt.getBlocksCount=function(t,i){switch(i){case v.L:return W[(t-1)*4+0];case v.M:return W[(t-1)*4+1];case v.Q:return W[(t-1)*4+2];case v.H:return W[(t-1)*4+3];default:return}};nt.getTotalCodewordsCount=function(t,i){switch(i){case v.L:return Z[(t-1)*4+0];case v.M:return Z[(t-1)*4+1];case v.Q:return Z[(t-1)*4+2];case v.H:return Z[(t-1)*4+3];default:return}};var Lt={},ot={};const j=new Uint8Array(512),X=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)j[i]=t,X[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)j[i]=j[i-255]})();ot.log=function(t){if(t<1)throw new Error("log("+t+")");return X[t]};ot.exp=function(t){return j[t]};ot.mul=function(t,i){return t===0||i===0?0:j[X[t]+X[i]]};(function(e){const t=ot;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)n[s+a]^=t.mul(r[s],o[a]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let u=0;u<o.length;u++)n[u]^=t.mul(o[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(Lt);const vt=Lt;function yt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}yt.prototype.initialize=function(t){this.degree=t,this.genPoly=vt.generateECPolynomial(this.degree)};yt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=vt.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var ne=yt,Dt={},D={},Ct={};Ct.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var P={};const Ft="[0-9]+",oe="[A-Z $%*+\\-./:]+";let $="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";$=$.replace(/u/g,"\\u");const re="(?:(?![A-Z0-9 $%*+\\-./:]|"+$+`)(?:.|[\r
]))+`;P.KANJI=new RegExp($,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(re,"g");P.NUMERIC=new RegExp(Ft,"g");P.ALPHANUMERIC=new RegExp(oe,"g");const ie=new RegExp("^"+$+"$"),se=new RegExp("^"+Ft+"$"),ae=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(t){return ie.test(t)};P.testNumeric=function(t){return se.test(t)};P.testAlphanumeric=function(t){return ae.test(t)};(function(e){const t=Ct,i=P;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(D);(function(e){const t=N,i=nt,r=et,o=D,n=Ct,s=7973,a=t.getBCHDigit(s);function u(d,f,w){for(let p=1;p<=40;p++)if(f<=e.getCapacity(p,w,d))return p}function c(d,f){return o.getCharCountIndicator(d,f)+4}function l(d,f){let w=0;return d.forEach(function(p){const T=c(p.mode,f);w+=T+p.getBitsLength()}),w}function C(d,f){for(let w=1;w<=40;w++)if(l(d,w)<=e.getCapacity(w,f,o.MIXED))return w}e.from=function(f,w){return n.isValid(f)?parseInt(f,10):w},e.getCapacity=function(f,w,p){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof p>"u"&&(p=o.BYTE);const T=t.getSymbolTotalCodewords(f),m=i.getTotalCodewordsCount(f,w),y=(T-m)*8;if(p===o.MIXED)return y;const g=y-c(p,f);switch(p){case o.NUMERIC:return Math.floor(g/10*3);case o.ALPHANUMERIC:return Math.floor(g/11*2);case o.KANJI:return Math.floor(g/13);case o.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,w){let p;const T=r.from(w,r.M);if(Array.isArray(f)){if(f.length>1)return C(f,T);if(f.length===0)return 1;p=f[0]}else p=f;return u(p.mode,p.getLength(),T)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let w=f<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return f<<12|w}})(Dt);var Ut={};const ht=N,xt=1335,ue=21522,At=ht.getBCHDigit(xt);Ut.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;ht.getBCHDigit(o)-At>=0;)o^=xt<<ht.getBCHDigit(o)-At;return(r<<10|o)^ue};var Vt={};const ce=D;function x(e){this.mode=ce.NUMERIC,this.data=e.toString()}x.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var le=x;const fe=D,ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function V(e){this.mode=fe.ALPHANUMERIC,this.data=e}V.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};V.prototype.getLength=function(){return this.data.length};V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)};V.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=ut.indexOf(this.data[i])*45;r+=ut.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(ut.indexOf(this.data[i]),6)};var de=V,he=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const ge=he,me=D;function z(e){this.mode=me.BYTE,typeof e=="string"&&(e=ge(e)),this.data=new Uint8Array(e)}z.getBitsLength=function(t){return t*8};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var we=z;const pe=D,ye=N;function H(e){this.mode=pe.KANJI,this.data=e}H.getBitsLength=function(t){return t*13};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=ye.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Ce=H,zt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var u,c,l,C,d,f,w,p,T;!a.empty();){u=a.pop(),c=u.value,C=u.cost,d=i[c]||{};for(l in d)d.hasOwnProperty(l)&&(f=d[l],w=C+f,p=s[l],T=typeof s[l]>"u",(T||p>w)&&(s[l]=w,a.push(l,w),n[l]=c))}if(typeof o<"u"&&typeof s[o]>"u"){var m=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(m)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(zt);var _e=zt.exports;(function(e){const t=D,i=le,r=de,o=we,n=Ce,s=P,a=N,u=_e;function c(m){return unescape(encodeURIComponent(m)).length}function l(m,y,g){const h=[];let _;for(;(_=m.exec(g))!==null;)h.push({data:_[0],index:_.index,mode:y,length:_[0].length});return h}function C(m){const y=l(s.NUMERIC,t.NUMERIC,m),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,m);let h,_;return a.isKanjiModeEnabled()?(h=l(s.BYTE,t.BYTE,m),_=l(s.KANJI,t.KANJI,m)):(h=l(s.BYTE_KANJI,t.BYTE,m),_=[]),y.concat(g,h,_).sort(function(B,I){return B.index-I.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function d(m,y){switch(y){case t.NUMERIC:return i.getBitsLength(m);case t.ALPHANUMERIC:return r.getBitsLength(m);case t.KANJI:return n.getBitsLength(m);case t.BYTE:return o.getBitsLength(m)}}function f(m){return m.reduce(function(y,g){const h=y.length-1>=0?y[y.length-1]:null;return h&&h.mode===g.mode?(y[y.length-1].data+=g.data,y):(y.push(g),y)},[])}function w(m){const y=[];for(let g=0;g<m.length;g++){const h=m[g];switch(h.mode){case t.NUMERIC:y.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:y.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:y.push([h,{data:h.data,mode:t.BYTE,length:c(h.data)}]);break;case t.BYTE:y.push([{data:h.data,mode:t.BYTE,length:c(h.data)}])}}return y}function p(m,y){const g={},h={start:{}};let _=["start"];for(let b=0;b<m.length;b++){const B=m[b],I=[];for(let R=0;R<B.length;R++){const k=B[R],K=""+b+R;I.push(K),g[K]={node:k,lastCount:0},h[K]={};for(let it=0;it<_.length;it++){const S=_[it];g[S]&&g[S].node.mode===k.mode?(h[S][K]=d(g[S].lastCount+k.length,k.mode)-d(g[S].lastCount,k.mode),g[S].lastCount+=k.length):(g[S]&&(g[S].lastCount=k.length),h[S][K]=d(k.length,k.mode)+4+t.getCharCountIndicator(k.mode,y))}}_=I}for(let b=0;b<_.length;b++)h[_[b]].end=0;return{map:h,table:g}}function T(m,y){let g;const h=t.getBestModeForData(m);if(g=t.from(y,h),g!==t.BYTE&&g.bit<h.bit)throw new Error('"'+m+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(h));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(m);case t.ALPHANUMERIC:return new r(m);case t.KANJI:return new n(m);case t.BYTE:return new o(m)}}e.fromArray=function(y){return y.reduce(function(g,h){return typeof h=="string"?g.push(T(h,null)):h.data&&g.push(T(h.data,h.mode)),g},[])},e.fromString=function(y,g){const h=C(y,a.isKanjiModeEnabled()),_=w(h),b=p(_,g),B=u.find_path(b.map,"start","end"),I=[];for(let R=1;R<B.length-1;R++)I.push(b.table[B[R]].node);return e.fromArray(f(I))},e.rawSplit=function(y){return e.fromArray(C(y,a.isKanjiModeEnabled()))}})(Vt);const rt=N,ct=et,Ee=Xt,be=te,Be=St,Te=Mt,gt=Rt,mt=nt,Ae=ne,tt=Dt,Ne=Ut,Ie=D,lt=Vt;function ke(e,t){const i=e.size,r=Te.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(n+a,s+u,!0,!0):e.set(n+a,s+u,!1,!0))}}function Pe(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Se(e,t){const i=Be.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,n+a,!0,!0):e.set(o+s,n+a,!1,!0)}}function Me(e,t){const i=e.size,r=tt.getEncodedBits(t);let o,n,s;for(let a=0;a<18;a++)o=Math.floor(a/3),n=a%3+i-8-3,s=(r>>a&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function ft(e,t,i){const r=e.size,o=Ne.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function Re(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(o,a-u)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(o,a-u,c),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function Le(e,t,i){const r=new Ee;i.forEach(function(u){r.put(u.mode.bit,4),r.put(u.getLength(),Ie.getCharCountIndicator(u.mode,e)),u.write(r)});const o=rt.getSymbolTotalCodewords(e),n=mt.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let u=0;u<a;u++)r.put(u%2?17:236,8);return ve(r,e,t)}function ve(e,t,i){const r=rt.getSymbolTotalCodewords(t),o=mt.getTotalCodewordsCount(t,i),n=r-o,s=mt.getBlocksCount(t,i),a=r%s,u=s-a,c=Math.floor(r/s),l=Math.floor(n/s),C=l+1,d=c-l,f=new Ae(d);let w=0;const p=new Array(s),T=new Array(s);let m=0;const y=new Uint8Array(e.buffer);for(let B=0;B<s;B++){const I=B<u?l:C;p[B]=y.slice(w,w+I),T[B]=f.encode(p[B]),w+=I,m=Math.max(m,I)}const g=new Uint8Array(r);let h=0,_,b;for(_=0;_<m;_++)for(b=0;b<s;b++)_<p[b].length&&(g[h++]=p[b][_]);for(_=0;_<d;_++)for(b=0;b<s;b++)g[h++]=T[b][_];return g}function De(e,t,i,r){let o;if(Array.isArray(e))o=lt.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=lt.rawSplit(e);c=tt.getBestVersionForData(l,i)}o=lt.fromString(e,c||40)}else throw new Error("Invalid data");const n=tt.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Le(t,i,o),a=rt.getSymbolSize(t),u=new be(a);return ke(u,t),Pe(u),Se(u,t),ft(u,i,0),t>=7&&Me(u,t),Re(u,s),isNaN(r)&&(r=gt.getBestMask(u,ft.bind(null,u,i))),gt.applyMask(r,u),ft(u,i,r),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}kt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=ct.M,o,n;return typeof i<"u"&&(r=ct.from(i.errorCorrectionLevel,ct.M),o=tt.from(i.version),n=gt.from(i.maskPattern),i.toSJISFunc&&rt.setToSJISFunction(i.toSJISFunc)),De(t,o,r,n)};var Ht={},_t={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,a=o.modules.data,u=e.getScale(s,n),c=Math.floor((s+n.margin*2)*u),l=n.margin*u,C=[n.color.light,n.color.dark];for(let d=0;d<c;d++)for(let f=0;f<c;f++){let w=(d*c+f)*4,p=n.color.light;if(d>=l&&f>=l&&d<c-l&&f<c-l){const T=Math.floor((d-l)/u),m=Math.floor((f-l)/u);p=C[a[T*s+m]?1:0]}r[w++]=p.r,r[w++]=p.g,r[w++]=p.b,r[w]=p.a}}})(_t);(function(e){const t=_t;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let u=a,c=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=r()),u=t.getOptions(u);const l=t.getImageWidth(n.modules.size,u),C=c.getContext("2d"),d=C.createImageData(l,l);return t.qrToImageData(d.data,n,u),i(C,c,l),C.putImageData(d,0,0),c},e.renderToDataURL=function(n,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=e.render(n,s,u),l=u.type||"image/png",C=u.rendererOpts||{};return c.toDataURL(l,C.quality)}})(Ht);var Kt={};const Fe=_t;function Nt(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function dt(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function Ue(e,t,i){let r="",o=0,n=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),c=Math.floor(a/t);!u&&!n&&(n=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(r+=n?dt("M",u+i,.5+c+i):dt("m",o,0),o=0,n=!1),u+1<t&&e[a+1]||(r+=dt("h",s),s=0)):o++}return r}Kt.render=function(t,i,r){const o=Fe.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+o.margin*2,u=o.color.light.a?"<path "+Nt(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Nt(o.color.dark,"stroke")+' d="'+Ue(s,n,o.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+l+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof r=="function"&&r(null,d),d};const xe=Wt,wt=kt,Jt=Ht,Ve=Kt;function Et(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!xe())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(u,c){try{const l=wt.create(i,r);u(e(l,t,r))}catch(l){c(l)}})}try{const u=wt.create(i,r);o(null,e(u,t,r))}catch(u){o(u)}}q.create=wt.create;q.toCanvas=Et.bind(null,Jt.render);q.toDataURL=Et.bind(null,Jt.renderToDataURL);q.toString=Et.bind(null,function(e,t,i){return Ve.render(e,i)});const ze={name:"ns-token-output",props:["popup"],data(){return{accessToken:"",qrCodeSRC:""}},mounted(){this.accessToken=this.popup.params.result.data.token.plainTextToken,this.popupCloser(),setTimeout(()=>{this.$refs.token.select(),this.$refs.token.setSelectionRange(0,99999),this.setQRCode()},100)},methods:{__:F,popupResolver:Yt,popupCloser:Ot,setQRCode(){q.toDataURL(this.accessToken).then(e=>{this.qrCodeSRC=e}).catch(e=>{console.log(e)})},close(){navigator.clipboard.writeText(this.$refs.token.value),this.popupResolver(!0)}}},He={id:"alert-popup",class:"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg"},Ke={class:"flex items-center justify-center flex-col flex-auto p-4"},Je={class:"text-3xl font-body mb-4"},Ye=["src"],Oe={class:"text-xs text-secondary py-2"},je={class:"py-4 text-center"},$e={class:"action-buttons flex border-t justify-end items-center p-2"};function qe(e,t,i,r,o,n){const s=U("ns-button");return M(),L("div",He,[E("div",Ke,[E("h2",Je,A(n.__("API Token")),1),E("img",{id:"token-qrcode",class:"border-2 w-64 h-64",src:o.qrCodeSRC},null,8,Ye),E("p",Oe,A(n.__("This QR code is provided to ease authentication on external applications.")),1),t[2]||(t[2]=E("br",null,null,-1)),E("p",je,A(n.__(`The API token has been generated. Make sure to copy this code on a safe place as it will only be displayed once.
                If you loose this token, you'll need to revoke it and generate a new one.`)),1),Gt(E("input",{ref:"token","onUpdate:modelValue":t[0]||(t[0]=a=>o.accessToken=a),readonly:"",type:"text",class:"my-2 p-2 w-full border-2 rounded border-input-edge bg-input-background"},null,512),[[jt,o.accessToken]])]),E("div",$e,[J(s,{onClick:t[1]||(t[1]=a=>n.close()),type:"info"},{default:Y(()=>[O(A(n.__("Copy And Close")),1)]),_:1})])])}const Ge=It(ze,[["render",qe]]),Qe={name:"ns-token",data(){return{validation:new $t,tokens:[],isLoading:!1,fields:[{type:"text",label:F("Token Name"),name:"name",description:F("This will be used to identifier the token."),validation:"required"}]}},methods:{__:F,createToken(){if(!this.validation.validateFields(this.fields))return Q.error(F("Unable to proceed, the form is not valid.")).subscribe();st.post("/api/users/create-token",this.validation.extractFields(this.fields)).subscribe(async e=>{try{await new Promise((t,i)=>{Popup.show(Ge,{resolve:t,reject:i,result:e})}),this.loadTokens()}catch(t){console.log(t)}})},revokeToken(e){Popup.show(qt,{title:F("Confirm Your Action"),message:F("You're about to delete a token that might be in use by an external app. Deleting will prevent that app from accessing the API. Would you like to proceed ?"),onAction:t=>{t&&st.delete(`/api/users/tokens/${e.id}`).subscribe({next:i=>{this.loadTokens(),Q.success(i.message).subscribe()},error:i=>{Q.error(i.message||"An unexpected error occured.").subscribe()}})}})},loadTokens(){this.isLoading=!0,st.get("/api/users/tokens").subscribe({next:e=>{this.isLoading=!1,this.tokens=e},error:e=>{Q.error("Unable to load the token. An unexpected error occured.").subscribe()}})}},mounted(){this.fields=this.validation.createFields(this.fields),this.loadTokens()}},We={class:"-mx-2"},Ze={class:"px-2 w-full md:w-1/2"},Xe={class:"mb-4"},tn={class:"my-2"},en={class:"flex justify-end"},nn={class:"py-2 border-b-4 text-center border-box-edge text-xl"},on={key:0},rn={class:"flex flex-col"},sn={class:"text-lg"},an={class:"text-xs text-tertiary"},un={class:"text-xs text-tertiary"},cn={class:"text-xs text-tertiary"},ln={key:1,class:"my-4"},fn={key:2,class:"mt-2"},dn={class:"text-center text-tertiary text-sm my-4"};function hn(e,t,i,r,o,n){const s=U("ns-notice"),a=U("ns-field"),u=U("ns-button"),c=U("ns-close-button"),l=U("ns-spinner");return M(),L("div",We,[E("div",Ze,[E("div",Xe,[J(s,null,{title:Y(()=>[O(A(n.__("About Token")),1)]),description:Y(()=>[O(A(n.__(`Token are used to provide a secure access to NexoPOS resources without having to share your personal username and password.
                       Once generated, they won't expires until you explicitely revoke it.`)),1)]),_:1})]),E("div",tn,[(M(!0),L(bt,null,Bt(o.fields,(C,d)=>(M(),Qt(a,{key:d,field:C},null,8,["field"]))),128)),E("div",en,[J(u,{onClick:t[0]||(t[0]=C=>n.createToken()),type:"info"},{default:Y(()=>[O(A(n.__("Save Token")),1)]),_:1})])]),E("div",null,[E("h3",nn,A(n.__("Generated Tokens")),1),o.tokens.length>0&&!o.isLoading?(M(),L("ul",on,[(M(!0),L(bt,null,Bt(o.tokens,(C,d)=>(M(),L("li",{key:d,class:"p-2 border-b flex justify-between items-center border-box-edge"},[E("div",rn,[E("h4",sn,A(C.name),1),E("div",null,[E("ul",null,[E("li",null,[E("span",an,A(n.__("Created"))+": "+A(C.created_at),1)]),E("li",null,[E("span",un,A(n.__("Last Use"))+": "+A(C.last_used_at||n.__("Never")),1)]),E("li",null,[E("span",cn,A(n.__("Expires"))+": "+A(C.expires_at||n.__("Never")),1)])])])]),E("div",null,[J(c,{onClick:f=>n.revokeToken(C),class:"px-2"},{default:Y(()=>[O(A(n.__("Revoke")),1)]),_:2},1032,["onClick"])])]))),128))])):at("",!0),o.isLoading?(M(),L("div",ln,[J(l)])):at("",!0),!o.isLoading&&o.tokens.length===0?(M(),L("div",fn,[E("div",dn,A(n.__("You haven't yet generated any token for your account. Create one to get started.")),1)])):at("",!0)])])])}const En=It(Qe,[["render",hn]]);export{En as default};
