parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/bg-320.jpg":[["bg-320.784e5884.jpg","RQMC"],"RQMC"],"./../images/bg-320@2x.jpg":[["bg-320@2x.6292c3e7.jpg","OZOX"],"OZOX"],"./../images/bg-786.jpg":[["bg-786.143828c6.jpg","A6kr"],"A6kr"],"./../images/bg-768@2x.jpg":[["bg-768@2x.aff5169e.jpg","SUoB"],"SUoB"],"./../images/bg-1280.jpg":[["bg-1280.4f97d657.jpg","Z7OL"],"Z7OL"],"./../images/bg1280@2x.jpg":[["bg1280@2x.998bcc04.jpg","ZUUA"],"ZUUA"]}],"Gglw":[function(require,module,exports) {
module.exports="/parcel-project-template/logo-mobile.cf970fbf.png";
},{}],"n7is":[function(require,module,exports) {
module.exports="/parcel-project-template/logo-tablet.db603087.png";
},{}],"WTBR":[function(require,module,exports) {
module.exports="/parcel-project-template/logo-dekstop.cbc34058.png";
},{}],"YTx2":[function(require,module,exports) {
module.exports="/parcel-project-template/symbol-defs.4ff33778.svg";
},{}],"EC3M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Header=void 0;var e=s(require("../../images/header-img/logo-mobile.png")),t=s(require("../../images/header-img/logo-tablet.png")),r=s(require("../../images/header-img/logo-dekstop.png")),a=s(require("../../images/header-img/symbol-defs.svg"));function s(e){return e&&e.__esModule?e:{default:e}}const i=s=>{const i=`<header>\n      \n             <div class="header-container">\n      <picture class="header-img"> \n                    <source srcset="${e.default}" media="(max-width:767px") />\n                    <source srcset="${t.default}" media="(max-width:1280px") />\n                    <source srcset="${r.default}" media="(min-width:1280px") />      \n                    <img src="${r.default}" alt="Логотип">    \n                </picture>\n                <h1 class="header-name">FIND BEST EVENTS <br>\n             AROUND THE WORLD</h1>\n           \n      <ul class="header-input">\n      <li class="header-start"><input id="text" type="text" name="text" placeholder="Start searching">\n      <svg width="12px" height="12px"><use href="${a.default}#icon-vector"></use></svg></li>\n      <li class="header-country"><input id="text" type="text" name="text" placeholder="Choose country">\n      <svg width="12px" height="12px"><use href="${a.default}#icon-polygon"></use></svg></li>\n      </ul>\n      </div>\n    </header>`;s.insertAdjacentHTML("afterbegin",i)};exports.Header=i;
},{"../../images/header-img/logo-mobile.png":"Gglw","../../images/header-img/logo-tablet.png":"n7is","../../images/header-img/logo-dekstop.png":"WTBR","../../images/header-img/symbol-defs.svg":"YTx2"}],"QDcT":[function(require,module,exports) {
module.exports="/parcel-project-template/ticket1.b5e506e6.svg";
},{}],"V2PD":[function(require,module,exports) {
module.exports="/parcel-project-template/symbol-defs.5eba3ce9.svg";
},{}],"hp6C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Modal=void 0;var s=a(require("../../images/modal/ticket1.svg")),e=a(require("../../images/modal/symbol-defs.svg"));function a(s){return s&&s.__esModule?s:{default:s}}const n=a=>{const n=`\n    <div class="modal-container">\n      <button type="button" class='btn-close' data-modal-close>\n        <svg class="btn-close-icon">\n          <use href='${e.default}#icon-close'></use>\n        </svg>\n      </button>\n      <div class='img-block'>\n        <img src='https://abnews.ru/wp-content/uploads/2016/04/black-eyed-peas.jpg' alt="alt text" class="event-icon" />\n      </div>\n      <h2 class='modal-title'>Info</h2>\n      <p class='modal-text'>Atlas Weekend is the largest music festival in Ukraine. More than 200 artists will create a proper music festival atmosphere on 10 stages</p>\n      <h2 class='modal-title'>When</h2>\n      <p class='modal-text'>\n        <time>2021-06-09</time>\n      </p>\n      <p class='modal-text'>\n        <time>20:00</time>\n        <span>(Kyiv/Ukraine)</span>\n      </p>\n      <h2 class='modal-title'>Where</h2>\n      <p class='modal-text'>\n        Kyiv, Ukraine <br/>\n        VDNH\n      </p>\n      <h2 class='modal-title'>Who</h2>\n      <p class='modal-text'>\n        The Black Eyed Peas\n      </p>\n      <h2 class='modal-title'>Prices</h2>\n      <div class='price-block'>\n        <div class='price-info'>\n          <img src='${s.default}' alt="ticket_code" class="price-code" />\n          <div class='price-text'>\n            <span class='prcie-type'>Standart</span>\n            <span class='price-value-min'>300</span>\n            -\n            <span class='price-value-min'>500</span>\n            <span class='price-currency'>UAH</span>\n          </div>\n        </div>\n        <a href="" class='buy-ticked-link'>BUY TICKETS</a>\n      </div>\n      <div class='price-block'>\n        <div class='price-info'>\n          <img src='${s.default}' alt="ticket_code" class="price-code" />\n          <div class='price-text'>\n            <span class='prcie-type'>VIP</span>\n            <span class='price-value-min'>500</span>\n            -\n            <span class='price-value-min'>1000</span>\n            <span class='price-currency'>UAH</span>\n          </div>\n        </div>\n        <a href="" class='buy-ticked-link'>BUY TICKETS</a>\n      </div>\n      <div class='author-block'>\n        <a href="https://en.wikipedia.org/wiki/Main_Page" target='blank' class='author-link'>MORE FROM THIS AUTHOR</a>\n      </div>\n    </div>`;a.insertAdjacentHTML("afterbegin",n)};exports.Modal=n;
},{"../../images/modal/ticket1.svg":"QDcT","../../images/modal/symbol-defs.svg":"V2PD"}],"YOO8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./Header/Header"),r=require("./Modal/Modal");const o=document.getElementById("root"),t=()=>{(0,e.Header)(o),(0,r.Modal)(o)};exports.App=t;
},{"./Header/Header":"EC3M","./Modal/Modal":"hp6C"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var s=require("./Components/App");(0,s.App)();
},{"./sass/main.scss":"clu1","./Components/App":"YOO8"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.12709a3d.js.map