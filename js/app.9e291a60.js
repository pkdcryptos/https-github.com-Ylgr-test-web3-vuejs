(function(e){function t(t){for(var a,s,u=t[0],o=t[1],p=t[2],l=0,d=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/test-web3-vuejs/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var c=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},3:function(e,t){},"38e2":function(e){e.exports=JSON.parse('{"bscMainnet":56,"bscTestnet":97}')},"39d6":function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_DFYToken","type":"address"},{"internalType":"uint256","name":"_buyMaximum","type":"uint256"},{"internalType":"uint256","name":"_maxPersonRef","type":"uint256"},{"internalType":"uint256","name":"_maxRewardFromRef","type":"uint256"},{"internalType":"uint256","name":"_refRewardPercent","type":"uint256"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dfyAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"referralAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BuyIDO","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"DeleteExchangePair","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"input","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"UpdateExchangePair","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"beReferred","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"boughtAmountTotals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyMaximum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"end","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"exchangePairs","outputs":[{"internalType":"uint256","name":"output","type":"uint256"},{"internalType":"uint256","name":"input","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPersonRef","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxRewardFromRef","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refRewardPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralRewardTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralUserTotal","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stage","outputs":[{"internalType":"enum IdoDFY.Stage","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"start","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"supportedTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum IdoDFY.Stage","name":"_stage","type":"uint8"}],"name":"setStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"output","type":"uint256"},{"internalType":"uint256","name":"input","type":"uint256"}],"name":"updateExchangePair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"deleteExchangePair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referral","type":"address"}],"name":"buyIdo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTokenSupport","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"getExchangePair","outputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"output","type":"uint256"},{"internalType":"uint256","name":"input","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"}]')},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("Example")],1)},i=[],s=function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("button",{on:{click:function(){return e.connnectWithExtension(t.getExtension().metamask)}}},[t._v("Connect with Metamask")]),a("button",{on:{click:function(){return e.connnectWithExtension(t.getExtension().binanceExtension)}}},[t._v("Connect with Binance Extension")]),a("button",{on:{click:function(){return e.connnectWithExtension(t.getExtension().trustWallet)}}},[t._v("Connect with Trust Wallet")]),a("br"),a("button",{attrs:{disabled:!t.extension},on:{click:function(){return e.getHistory()}}},[t._v("Get history")]),a("button",{attrs:{disabled:!t.extension},on:{click:function(){return e.buyIdo()}}},[t._v("Buy Ido")]),a("p",[t._v(t._s(this.log.join(", ")))])])},u=[],o=(n("a15b"),n("d81d"),n("96cf"),n("1da1")),p=n("b85c"),c=n("d4ec"),l=n("bee2"),d=n("99e5"),y=n.n(d),m=n("be09"),f=n.n(m),h=n("38e2"),b=n("f228"),g=n("39d6"),w={approving:"APPROVING",approved:"APPROVED",approveFailed:"APPROVE_FAILED",buying:"BUYING",bought:"BOUGHT",buyFailed:"BUY_FAILED"},v={metamask:"METAMASK",binanceExtension:"BINANCE_EXTENSION",trustWallet:"TRUST_WALLET"},T=function(){function e(t){var n=this;Object(c["a"])(this,e),this.web3=null,this.idoSmartcontract="0xA31e232DC61Ac909Cc4E61490871562d42470042";var a=this;t===v.binanceExtension?f.a.BinanceChain?(this.extension=f.a.BinanceChain,this.web3=new y.a(f.a.BinanceChain),f.a.BinanceChain.enable().then(Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.web3.eth.getAccounts();case 2:t=e.sent,n.address=t[0],n.buyIdoContract=new n.web3.eth.Contract(g,a.idoSmartcontract,{transactionConfirmationBlocks:1});case 5:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e.message),n.web3=null}))):alert("You need to have Binance Extension first"):t!==v.metamask&&t!==v.trustWallet||(f.a.ethereum?f.a.ethereum.chainId===y.a.utils.numberToHex(h.bscMainnet)||f.a.ethereum.chainId===y.a.utils.numberToHex(h.bscTestnet)||f.a.ethereum.chainId==h.bscMainnet||f.a.ethereum.chainId==h.bscTestnet?(this.extension=f.a.ethereum,this.web3=new y.a(f.a.ethereum),f.a.ethereum.enable().then(Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.web3.eth.getAccounts();case 2:t=e.sent,n.address=t[0],n.buyIdoContract=new n.web3.eth.Contract(g,a.idoSmartcontract,{transactionConfirmationBlocks:1});case 5:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e.message),n.web3=null}))):alert("You need to switch to Binance network first!"):alert("You need to have Metamask first"))}return Object(l["a"])(e,[{key:"accountsChanged",value:function(e){var t=this;this.extension.on("accountsChanged",(function(n){t.address=n[0],e(n[0])}))}},{key:"isConnected",value:function(){return null!==this.web3}},{key:"getCurrentAddress",value:function(){return this.address}},{key:"getStartTime",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.buyIdoContract.methods.start().call());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getEndTime",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.buyIdoContract.methods.end().call());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getMaxBuyAmount",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.buyIdoContract.methods.buyMaximum().call());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getMaxPersonRef",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.buyIdoContract.methods.maxPersonRef().call());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getReferralRewardPercent",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.buyIdoContract.methods.refRewardPercent().call());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isPauseStatus",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.buyIdoContract.methods.state().call());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isCurrentReferralAmount",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.buyIdoContract.methods.referralRewardTotal(this.address).call());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getSupportTokenAndBalance",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i,s,u,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,this.buyIdoContract.methods.getTokenSupport().call();case 3:n=e.sent,a=Object(p["a"])(n),e.prev=5,a.s();case 7:if((r=a.n()).done){e.next=22;break}return i=r.value,e.next=11,this.buyIdoContract.methods.exchangePairs(i).call();case 11:return s=e.sent,u=new this.web3.eth.Contract(b,i),e.next=15,u.methods.balanceOf(this.address).call();case 15:return o=e.sent,e.next=18,u.methods.symbol().call();case 18:c=e.sent,t.push({tokenAddress:i,tokenSymbol:c,outputDFYNumber:s.output,inputTokenNumber:s.input,balance:o});case 20:e.next=7;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e["catch"](5),a.e(e.t0);case 27:return e.prev=27,a.f(),e.finish(27);case 30:return e.abrupt("return",t);case 31:case"end":return e.stop()}}),e,this,[[5,24,27,30]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"addPairContractCall",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var a,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:1,e.abrupt("return",this.buyIdoContract.methods.upsertExchangePair(t,n,a).send({from:this.address}));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"buyIdoContractCall",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new this.web3.eth.Contract(b,t),e.prev=1,a(w.approving),e.next=5,r.methods.approve(this.idoSmartcontract,n).send({from:this.address});case 5:a(w.approved),e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](1),a(w.approveFailed),e.abrupt("return",e.t0.message);case 12:return e.prev=12,a(w.buying),e.next=16,this.buyIdoContract.methods.buyIdo(t,n,"0x0000000000000000000000000000000000000000").send({from:this.address});case 16:return i=e.sent,a(w.bought),e.abrupt("return",i);case 21:return e.prev=21,e.t1=e["catch"](12),a(w.buyFailed),e.abrupt("return",e.t1.message);case 25:case"end":return e.stop()}}),e,this,[[1,8],[12,21]])})));function t(t,n,a){return e.apply(this,arguments)}return t}()}]),e}();function x(){return!(!f.a.ethereum||!f.a.ethereum.isMetaMask)}function k(){return!!f.a.BinanceChain}function M(){return!(!f.a.ethereum||!f.a.ethereum.isTrust)}var O={name:"Example",data:function(){return{extension:null,log:[]}},methods:{getExtension:function(){return v},isMetamaskAvailable:function(){return x()},isBinanceExtensionAvailable:function(){return k()},isTrustWalletAvailable:function(){return M()},connnectWithExtension:function(e){var t=this;this.extension=new T(e),this.extension.accountsChanged((function(e){console.log("callback account change"),console.log(e)})),setTimeout(Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.extension.getSupportTokenAndBalance();case 2:n=e.sent,console.log("balance: ",n);case 4:case"end":return e.stop()}}),e)}))),100),a["a"].set(this.log,this.log.length,"window.ethereum"),a["a"].set(this.log,this.log.length,JSON.stringify(window.ethereum)),a["a"].set(this.log,this.log.length,"window.BinanceChain"),a["a"].set(this.log,this.log.length,JSON.stringify(window.BinanceChain)),a["a"].set(this.log,this.log.length,"window.web3"),a["a"].set(this.log,this.log.length,JSON.stringify(window.web3))},getHistory:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("..Test getHistory.."),console.log("isConnected: ",this.extension.isConnected()),t="isConnected: "+this.extension.isConnected(),a["a"].set(this.log,this.log.length,t),e.next=6,this.extension.getBuyHistoryOfThisAccount();case 6:n=e.sent,console.log("history: ",n),a["a"].set(this.log,this.log.length,"history: "+n.map((function(e){return JSON.stringify(e)})).join(", "));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),buyIdo:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.extension.getStartTime();case 2:return t=e.sent,console.log("getStartTime: ",t),e.next=6,this.extension.getEndTime();case 6:return n=e.sent,console.log("getEndTime: ",n),console.log("..Test getHistory.."),console.log("isConnected: ",this.extension.isConnected()),a["a"].set(this.log,this.log.length,"isConnected: "+this.extension.isConnected()),e.next=13,this.extension.getSupportTokenAndBalance();case 13:return r=e.sent,console.log("getSupportTokenAndBalance: ",r),a["a"].set(this.log,this.log.length,"getSupportTokenAndBalance: "+r.map((function(e){return JSON.stringify(e)})).join(", ")),e.next=18,this.extension.buyIdoContractCall(r[0].tokenAddress,1,(function(e){console.log("buy state: ",e),a["a"].set(s.log,s.log.length,"state: "+e)}));case 18:i=e.sent,console.log("buyResult: ",i);case 20:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},C=O,R=n("2877"),E=Object(R["a"])(C,s,u,!1,null,"71dbddc5",null),A=E.exports,S={name:"App",components:{Example:A}},j=S,I=(n("034f"),Object(R["a"])(j,r,i,!1,null,null,null)),P=I.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(P)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f228:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')}});
//# sourceMappingURL=app.9e291a60.js.map