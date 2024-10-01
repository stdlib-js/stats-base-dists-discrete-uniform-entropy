// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n=Math.floor;function t(t){return n(t)===t}function r(n){return n!=n}var o,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,f=Object.prototype.hasOwnProperty,u="function"==typeof Symbol?Symbol:void 0,a="function"==typeof u?u.toStringTag:"",y=e&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,o,e,u;if(null==n)return i.call(n);r=n[a],u=a,t=null!=(e=n)&&f.call(e,u);try{n[a]=void 0}catch(t){return i.call(n)}return o=i.call(n),t?n[a]=r:delete n[a],o}:function(n){return i.call(n)},c="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;o=function(){var n,t,r;if("function"!=typeof l)return!1;try{t=new l(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(c&&r instanceof Uint32Array||"[object Uint32Array]"===y(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?p:function(){throw new Error("not implemented")};var A,d=o,v="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;A=function(){var n,t,r;if("function"!=typeof U)return!1;try{t=new U([1,3.14,-3.14,NaN]),r=t,n=(v&&r instanceof Float64Array||"[object Float64Array]"===y(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var m,w=A,s="function"==typeof Uint8Array,h="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var n,t,r;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,256,257]),r=t,n=(s&&r instanceof Uint8Array||"[object Uint8Array]"===y(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?N:function(){throw new Error("not implemented")};var F,S=m,g="function"==typeof Uint16Array,j="function"==typeof Uint16Array?Uint16Array:null,E="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var n,t,r;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,65536,65537]),r=t,n=(g&&r instanceof Uint16Array||"[object Uint16Array]"===y(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?E:function(){throw new Error("not implemented")};var T,I={uint16:F,uint8:S};(T=new I.uint16(1))[0]=4660;var x=52===new I.uint8(T.buffer)[0],O=!0===x?1:0,G=new w(1),M=new d(G.buffer);function P(n){return G[0]=n,M[O]}var V=!0===x?1:0,Y=new w(1),_=new d(Y.buffer),k=1023,q=Number.NEGATIVE_INFINITY,z=.6931471803691238,B=1.9082149292705877e-10,C=0x40000000000000,D=.3333333333333333,H=1048575,J=2146435072,K=1048576,L=1072693248;function Q(n){var t,o,e,i,f,u,a,y,c,l,p,A;return 0===n?q:r(n)||n<0?NaN:(f=0,(o=P(n))<K&&(f-=54,o=P(n*=C)),o>=J?n+n:(f+=(o>>20)-k|0,f+=(y=614244+(o&=H)&1048576|0)>>20|0,a=(n=function(n,t){return Y[0]=n,_[V]=t>>>0,Y[0]}(n,o|y^L))-1,(H&2+o)<3?0===a?0===f?0:f*z+f*B:(u=a*a*(.5-D*a),0===f?a-u:f*z-(u-f*B-a)):(y=o-398458|0,c=440401-o|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(y|=c)>0?(t=.5*a*a,0===f?a-(t-l*(t+u)):f*z-(t-(l*(t+u)+f*B)-a)):0===f?a-l*(a-u):f*z-(l*(a-u)-f*B-a))))}return function(n,o){return r(n)||r(o)||!t(n)||!t(o)||n>o?NaN:Q(o-n+1)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).entropy=t();
//# sourceMappingURL=index.js.map
