(function(e){function t(t){for(var a,i,o=t[0],u=t[1],c=t[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/test-web3-vuejs/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},3:function(e,t){},"38e2":function(e){e.exports=JSON.parse('{"bscMainnet":56,"bscTestnet":97}')},"39d6":function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BuyIdoSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"DeleteExchangePairSucess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"outputDFYNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"inputTokenNumber","type":"uint256"}],"name":"UpsertExchangePairSucess","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"exchangeValues","outputs":[{"internalType":"uint256","name":"outputDFYNumber","type":"uint256"},{"internalType":"uint256","name":"inputTokenNumber","type":"uint256"},{"internalType":"bool","name":"isExist","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"supportTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"outputDFYNumber","type":"uint256"},{"internalType":"uint256","name":"inputTokenNumber","type":"uint256"}],"name":"upsertExchangePair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"deleteExchangePair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyIdo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTokenSupport","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]')},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("Example")],1)},s=[],i=function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("button",{on:{click:function(){return e.connnectWithExtension(t.getExtension().metamask)}}},[t._v("Connect with Metamask")]),a("button",{on:{click:function(){return e.connnectWithExtension(t.getExtension().binanceExtension)}}},[t._v("Connect with Binance Extension")]),a("br"),a("button",{attrs:{disabled:!t.extension},on:{click:function(){return e.getHistory()}}},[t._v("Get history")]),a("button",{attrs:{disabled:!t.extension},on:{click:function(){return e.buyIdo()}}},[t._v("Buy Ido")]),a("p",[t._v(t._s(this.log.join(", ")))])])},o=[],u=(n("a15b"),n("d81d"),n("96cf"),n("1da1")),c=(n("4de4"),n("b85c")),p=n("d4ec"),l=n("bee2"),d=n("99e5"),y=n.n(d),m=n("be09"),f=n.n(m),h=n("38e2"),b=n("f228"),g=n("39d6"),v={approving:"APPROVING",approved:"APPROVED",approveFailed:"APPROVE_FAILED",buying:"BUYING",bought:"BOUGHT",buyFailed:"BUY_FAILED"},w={metamask:"METAMASK",binanceExtension:"BINANCE_EXTENSION"},x=function(){function e(t){var n=this;Object(p["a"])(this,e),this.web3=null,this.idoSmartcontract="0xE56de856b4212A8bf463af32dAD1B2303863aC7D";var a=this;t===w.binanceExtension?f.a.BinanceChain?(this.web3=new y.a(f.a.BinanceChain),f.a.BinanceChain.enable().then(Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.web3.eth.getAccounts();case 2:t=e.sent,console.log("addresses: ",t),n.address=t[0],n.buyIdoContract=new n.web3.eth.Contract(g,a.idoSmartcontract,{transactionConfirmationBlocks:1});case 6:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e.message),n.web3=null}))):alert("You need to have Binance Extension first"):t===w.metamask&&(f.a.ethereum?f.a.ethereum.chainId===y.a.utils.numberToHex(h.bscMainnet)||f.a.ethereum.chainId===y.a.utils.numberToHex(h.bscTestnet)||f.a.ethereum.chainId==h.bscMainnet||f.a.ethereum.chainId==h.bscTestnet?(this.web3=new y.a(f.a.ethereum),f.a.ethereum.enable().then(Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.web3.eth.getAccounts();case 2:t=e.sent,n.address=t[0],n.buyIdoContract=new n.web3.eth.Contract(g,a.idoSmartcontract,{transactionConfirmationBlocks:1});case 5:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e.message),n.web3=null}))):alert("You need to switch to Binance network first!"):alert("You need to have Metamask first"))}return Object(l["a"])(e,[{key:"accountsChanged",value:function(){var e=this;f.a.ethereum.on("accountsChanged",(function(t){e.address=t[0]}))}},{key:"getBuyHistory",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getPastLogs({fromBlock:0,toBlock:"latest",address:this.idoSmartcontract,topics:[y.a.utils.sha3("BuyIdoSuccess(uint256)")]});case 2:t=e.sent,n=[],a=Object(c["a"])(t),e.prev=5,a.s();case 7:if((r=a.n()).done){e.next=15;break}return s=r.value,e.next=11,this.web3.eth.getTransaction(s.transactionHash);case 11:i=e.sent,n.push(i);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](5),a.e(e.t0);case 20:return e.prev=20,a.f(),e.finish(20);case 23:return e.abrupt("return",n);case 24:case"end":return e.stop()}}),e,this,[[5,17,20,23]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"getBuyHistoryOfThisAccount",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getBuyHistory();case 2:return t=e.sent,e.abrupt("return",t.filter((function(e){return e.from===n.address})));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isConnected",value:function(){return null!==this.web3}},{key:"getCurrentAddress",value:function(){return this.address}},{key:"getSupportTokenAndBalance",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,s,i,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,this.buyIdoContract.methods.getTokenSupport().call();case 3:n=e.sent,a=Object(c["a"])(n),e.prev=5,a.s();case 7:if((r=a.n()).done){e.next=19;break}return s=r.value,e.next=11,this.buyIdoContract.methods.exchangeValues(s).call();case 11:return i=e.sent,o=new this.web3.eth.Contract(b,s),e.next=15,o.methods.balanceOf(this.address).call();case 15:u=e.sent,t.push({tokenAddress:s,outputDFYNumber:i.outputDFYNumber,inputTokenNumber:i.inputTokenNumber,balance:u});case 17:e.next=7;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](5),a.e(e.t0);case 24:return e.prev=24,a.f(),e.finish(24);case 27:return e.abrupt("return",t);case 28:case"end":return e.stop()}}),e,this,[[5,21,24,27]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"addPairContractCall",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var a,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:1,e.abrupt("return",this.buyIdoContract.methods.upsertExchangePair(t,n,a).send({from:this.address}));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"buyIdoContractCall",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new this.web3.eth.Contract(b,t),e.prev=1,a(v.approving),e.next=5,r.methods.approve(this.idoSmartcontract,n).send({from:this.address});case 5:a(v.approved),e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](1),a(v.approveFailed),e.abrupt("return",e.t0.message);case 12:return e.prev=12,a(v.buying),e.next=16,this.buyIdoContract.methods.buyIdo(t,n).send({from:this.address});case 16:return s=e.sent,a(v.bought),e.abrupt("return",s);case 21:return e.prev=21,e.t1=e["catch"](12),a(v.buyFailed),e.abrupt("return",e.t1.message);case 25:case"end":return e.stop()}}),e,this,[[1,8],[12,21]])})));function t(t,n,a){return e.apply(this,arguments)}return t}()}]),e}(),T={name:"Example",data:function(){return{extension:null,log:[]}},methods:{getExtension:function(){return w},connnectWithExtension:function(e){this.extension=new x(e),a["a"].set(this.log,this.log.length,"window.ethereum"),a["a"].set(this.log,this.log.length,JSON.stringify(window.ethereum)),a["a"].set(this.log,this.log.length,"window.BinanceChain"),a["a"].set(this.log,this.log.length,JSON.stringify(window.BinanceChain)),a["a"].set(this.log,this.log.length,"window.web3"),a["a"].set(this.log,this.log.length,JSON.stringify(window.web3))},getHistory:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("..Test getHistory.."),console.log("isConnected: ",this.extension.isConnected()),t="isConnected: "+this.extension.isConnected(),a["a"].set(this.log,this.log.length,t),e.next=6,this.extension.getBuyHistoryOfThisAccount();case 6:n=e.sent,console.log("history: ",n),a["a"].set(this.log,this.log.length,"history: "+n.map((function(e){return JSON.stringify(e)})).join(", "));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),buyIdo:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("..Test getHistory.."),console.log("isConnected: ",this.extension.isConnected()),a["a"].set(this.log,this.log.length,"isConnected: "+this.extension.isConnected()),e.next=5,this.extension.getSupportTokenAndBalance();case 5:return t=e.sent,console.log("getSupportTokenAndBalance: ",t),a["a"].set(this.log,this.log.length,"getSupportTokenAndBalance: "+t.map((function(e){return JSON.stringify(e)})).join(", ")),e.next=10,this.extension.buyIdoContractCall(t[0].tokenAddress,1,(function(e){console.log("buy state: ",e),a["a"].set(r.log,r.log.length,"state: "+e)}));case 10:n=e.sent,console.log("buyResult: ",n);case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},k=T,O=n("2877"),C=Object(O["a"])(k,i,o,!1,null,"904e6d50",null),M=C.exports,A={name:"App",components:{Example:M}},E=A,S=(n("034f"),Object(O["a"])(E,r,s,!1,null,null,null)),j=S.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(j)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f228:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')}});
//# sourceMappingURL=app.be693de2.js.map