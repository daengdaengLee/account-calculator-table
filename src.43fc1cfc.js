parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e,r){var t=e-r,l=t<0?"출금":t>0?"입금":"-",n=Math.abs(t);return"".concat(l," ").concat(n||"")}function r(){var r=document.querySelector("table").querySelector("tbody").querySelectorAll("tr"),t=!0,l=!1,n=void 0;try{for(var u,a=r[Symbol.iterator]();!(t=(u=a.next()).done);t=!0){var c=u.value,o=c.querySelector(".target input").value,i=c.querySelector(".balance input").value,y=e(Number(o),Number(i));c.querySelector(".deposit").innerHTML=y}}catch(v){l=!0,n=v}finally{try{t||null==a.return||a.return()}finally{if(l)throw n}}}document.querySelector("#calculate").addEventListener("click",r);
},{}]},{},["Focm"], null)
//# sourceMappingURL=./src.43fc1cfc.js.map