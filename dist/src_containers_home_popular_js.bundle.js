/*! For license information please see src_containers_home_popular_js.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackTest=self.webpackChunkwebpackTest||[]).push([["src_containers_home_popular_js"],{"./src/containers/home/popular.js":(e,n,t)=>{t.r(n),t.d(n,{"default":()=>u});var s=t("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),o=t("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/react/index.js"),A=(t("./src/containers/home/styles/popular.css"),t("./src/containers/home/styles/loading.css"),t("./node_modules/axios/index.js")),a=t.n(A),l=t("./node_modules/react-infinite-scroller/index.js"),r=t.n(l),d=(t("./node_modules/font-awesome/css/font-awesome.css"),t("./node_modules/antd/es/message/index.js")),c=["","javascript","ruby","java","css"];const u=function(e){var n=[],t=i.useState,A=i.useEffect,l=t([{name:"All",id:0,isChecked:!0},{name:"JavaScript",id:1,isChecked:!1},{name:"Ruby",id:2,isChecked:!1},{name:"Java",id:3,isChecked:!1},{name:"Css",id:4,isChecked:!1}]),u=(0,o["default"])(l,2),m=u[0],h=u[1],p=t(n),g=(0,o["default"])(p,2),C=g[0],f=g[1],x=t(!1),b=(0,o["default"])(x,2),E=b[0],y=b[1],w=t(1),j=(0,o["default"])(w,2),_=j[0],k=j[1],v=t(!0),F=(0,o["default"])(v,2),B=F[0],S=F[1],U=t(0),N=(0,o["default"])(U,2),W=N[0],D=N[1];function L(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1,t=window.location.hash.split("=")[1],o="https://api.github.com/search/repositories?q=stars:3E1".concat(""!==t?"+language:"+t:"","&sort=stars&order=desc&type=Repositories");if(console.log("req",o),y(!0),W>=200)return S(!1),!1;a().get(o,{params:{page:e}}).then((function(e){if(200===e.status){var t=(n=e.data.items).length+W;f([].concat((0,s["default"])(n),(0,s["default"])(C))),D(t),y(!1)}}))["catch"]((function(e){y(!1),d["default"].error(e.message,3)}))}return A((function(){L()}),[]),i.createElement("div",{className:"box"},E&&i.createElement("div",{id:"loading"},i.createElement("div",{id:"loading_bg"},i.createElement("div",{className:"loaders"},"Loading..."))),i.createElement("div",{className:"header"},i.createElement("ul",null,m.map((function(n){return i.createElement("li",{onClick:function(){return function(n){e.history.push({pathname:"/",search:"language=".concat(c[n])});var t=(0,s["default"])(m);t.forEach((function(e){e.isChecked=!1})),t.forEach((function(e){e.id===n&&(e.isChecked=!0)})),D((function(){return 0})),f((function(e){return e.splice(0)})),h(t),k((function(){return 1})),L()}(n.id)},key:n.id,className:n.isChecked?"active":""},n.name)})))),i.createElement(r(),{initialLoad:!1,pageStart:_,loadMore:L,hasMore:B,useWindow:!0,loader:i.createElement("div",{className:"loader",key:0,style:{textAlign:"center",marginBottom:"0"}},"正在加载 Loading")},i.createElement("div",{className:"content"},C.map((function(e,n){return i.createElement("div",{className:"list-item",key:n},i.createElement("div",{className:"item-index"},"#",n+1),i.createElement("div",{className:"list-img"},i.createElement("img",{src:e.owner.avatar_url})),i.createElement("div",{className:"full_name"},i.createElement("a",{href:"#"},e.full_name)),i.createElement("div",{className:"name padding20"},i.createElement("i",{className:"fas fa-user icon-i",style:{color:"rgb(255, 191, 116)"}}),i.createElement("a",{href:"#"},e.name)),i.createElement("div",{className:"watchers_count padding20"},i.createElement("i",{className:"fas fa-star icon-i",style:{color:"rgb(255, 215, 0)"}}),e.watchers_count),i.createElement("div",{className:"forks_count padding20"}," ",i.createElement("i",{className:"fas fa-code-branch icon-i",style:{color:"rgb(129, 195, 245)"}}),e.forks_count),i.createElement("div",{className:"open_issues_count padding20"},i.createElement("i",{className:"fas fa-exclamation-triangle icon-i",style:{color:"rgb(241, 138, 147)"}}),e.open_issues_count))})))))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/containers/home/styles/loading.css":(e,n,t)=>{t.r(n),t.d(n,{"default":()=>a});var s=t("./node_modules/css-loader/dist/runtime/sourceMaps.js"),o=t.n(s),i=t("./node_modules/css-loader/dist/runtime/api.js"),A=t.n(i)()(o());A.push([e.id,'#loading{height:100%;left:0;position:absolute;top:0;width:100%;z-index:9999}#loading_bg{background-color:rgba(0,0,0,.7)}.loaders{color:#ce4233;font-family:helvetica,arial,sans-serif;font-weight:900;height:50px;left:50%;letter-spacing:.2em;line-height:50px;position:absolute;text-align:center;text-transform:uppercase;top:50%;transform:translate(-50%,-50%);width:250px}.loaders:after,.loaders:before{-webkit-animation:load .7s ease-in-out infinite alternate;animation:load .7s ease-in-out infinite alternate;background:#ce4233;content:"";display:block;height:15px;position:absolute;width:15px}.loaders:before{top:0}.loaders:after{bottom:0}@-webkit-keyframes load{0%{height:30px;left:0;width:15px}50%{height:8px;width:40px}to{height:30px;left:235px;width:15px}}@keyframes load{0%{height:30px;left:0;width:15px}50%{height:8px;width:40px}to{height:30px;left:235px;width:15px}}',"",{version:3,sources:["webpack://./src/containers/home/styles/loading.css"],names:[],mappings:"AAAA,SAKE,WAAA,CAFA,MAAA,CAFA,iBAAA,CACA,KAAA,CAEA,UAAA,CAEA,YACF,CAEA,YACE,+BAAF,CAMA,SAaE,aAAA,CAHA,sCAAA,CAEA,eAAA,CAVA,WAAA,CAKA,QAAA,CAOA,mBAAA,CAXA,gBAAA,CAEA,iBAAA,CADA,iBAAA,CAOA,wBAAA,CALA,OAAA,CAGA,8BAAA,CARA,WAYF,CAIA,+BAQE,yDAAA,CACA,iDAAA,CAHA,kBAAA,CAJA,UAAA,CACA,aAAA,CAEA,WAAA,CAEA,iBAAA,CAHA,UAGF,CAKA,gBACE,KAHF,CAMA,eACE,QAJF,CAOA,wBACE,GAEE,WAAA,CADA,MAAA,CAEA,UALF,CAOA,IACE,UAAA,CACA,UALF,CAOA,GAEE,WAAA,CADA,UAAA,CAEA,UALF,CACF,CAOA,gBACE,GAEE,WAAA,CADA,MAAA,CAEA,UALF,CAOA,IACE,UAAA,CACA,UALF,CAOA,GAEE,WAAA,CADA,UAAA,CAEA,UALF,CACF",sourcesContent:['#loading {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n}\n\n#loading_bg {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n/* //body {\n    //  background: #eaecfa;\n    //} */\n.loaders {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  font-family: helvetica, arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 900;\n  color: #ce4233;\n  letter-spacing: 0.2em;\n}\n\n.loaders::before,\n.loaders::after {\n  content: "";\n  display: block;\n  width: 15px;\n  height: 15px;\n  background: #ce4233;\n  position: absolute;\n  -webkit-animation: load 0.7s infinite alternate ease-in-out;\n  animation: load 0.7s infinite alternate ease-in-out;\n}\n\n.loaders::before {\n  top: 0;\n}\n\n.loaders::after {\n  bottom: 0;\n}\n\n@-webkit-keyframes load {\n  0% {\n    left: 0;\n    height: 30px;\n    width: 15px;\n  }\n  50% {\n    height: 8px;\n    width: 40px;\n  }\n  100% {\n    left: 235px;\n    height: 30px;\n    width: 15px;\n  }\n}\n@keyframes load {\n  0% {\n    left: 0;\n    height: 30px;\n    width: 15px;\n  }\n  50% {\n    height: 8px;\n    width: 40px;\n  }\n  100% {\n    left: 235px;\n    height: 30px;\n    width: 15px;\n  }\n}'],sourceRoot:""}]);const a=A},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/containers/home/styles/popular.css":(e,n,t)=>{t.r(n),t.d(n,{"default":()=>a});var s=t("./node_modules/css-loader/dist/runtime/sourceMaps.js"),o=t.n(s),i=t("./node_modules/css-loader/dist/runtime/api.js"),A=t.n(i)()(o());A.push([e.id,"*{list-style:none;margin:0;padding:0;text-decoration:none}#like_button_container,body,html{min-height:100%;width:100%}.box{margin:0 auto;min-height:100%;width:76%}.box .header{font-size:30px;height:10%;margin-bottom:60px;margin-top:60px;width:100%}.box .header ul{align-items:center;display:flex;justify-content:space-between;margin:0 auto;width:600px}.box .header ul .active{color:red}.box .header ul:hover li{cursor:pointer}.box .content{display:flex;flex-direction:row;flex-wrap:wrap;height:80%;justify-content:space-around;width:100%}.box .bottom{font-size:16px;height:10%;text-align:center;width:100%}.box .content .list-item{height:430px;width:380px}.list-item{background-color:aqua;margin-bottom:20px}.list-img{height:200px;width:50%}.list-img img{height:auto;left:100%;margin-left:-100px;position:relative;width:100%}.full_name{font-weight:600;text-align:center}.list-item .name{margin-top:40px}.item-index{font-size:26px;padding:15px 0;text-align:center}.padding20{padding-left:20px}","",{version:3,sources:["webpack://./src/containers/home/styles/popular.css"],names:[],mappings:"AAAA,EAGE,eAAA,CAFA,QAAA,CACA,SAAA,CAEA,oBACF,CAQA,iCAEE,eAAA,CADA,UAAF,CAIA,KAGE,aAAA,CADA,eAAA,CADA,SACF,CAKA,aAKE,cAAA,CAHA,UAAA,CACA,kBAAA,CACA,eAAA,CAHA,UACF,CAMA,gBAKE,kBAAA,CAFA,YAAA,CACA,6BAAA,CAFA,aAAA,CADA,WAAF,CAOA,wBACE,SALF,CAQA,yBACE,cANF,CASA,cAIE,YAAA,CAEA,kBAAA,CACA,cAAA,CALA,UAAA,CAGA,4BAAA,CAJA,UADF,CAUA,aAIE,cAAA,CAFA,UAAA,CACA,iBAAA,CAFA,UALF,CAWA,yBAGE,YAAA,CADA,WARF,CAYA,WACE,qBAAA,CACA,kBAVF,CAaA,UAEE,YAAA,CADA,SAVF,CAcA,cAEE,WAAA,CAEA,SAAA,CACA,kBAAA,CAFA,iBAAA,CAFA,UARF,CAeA,WAEE,eAAA,CADA,iBAZF,CAgBA,iBACE,eAdF,CAiBA,YAEE,cAAA,CACA,cAAA,CAFA,iBAbF,CAkBA,WACE,iBAhBF",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n}\n\nhtml,\nbody {\n  width: 100%;\n  min-height: 100%;\n}\n\n#like_button_container {\n  width: 100%;\n  min-height: 100%;\n}\n\n.box {\n  width: 76%;\n  min-height: 100%;\n  margin: 0 auto;\n  /* border: 1px solid red; */\n}\n\n.box .header {\n  width: 100%;\n  height: 10%;\n  margin-bottom: 60px;\n  margin-top: 60px;\n  font-size: 30px;\n}\n\n.box .header ul {\n  width: 600px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.box .header ul .active {\n  color: red;\n}\n\n.box .header ul:hover li {\n  cursor: pointer;\n}\n\n.box .content {\n  width: 100%;\n  height: 80%;\n  /* border: 1px solid red; */\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.box .bottom {\n  width: 100%;\n  height: 10%;\n  text-align: center;\n  font-size: 16px;\n}\n\n.box .content .list-item {\n  /* border: 1px solid red; */\n  width: 380px;\n  height: 430px;\n}\n\n.list-item {\n  background-color: aqua;\n  margin-bottom: 20px;\n}\n\n.list-img {\n  width: 50%;\n  height: 200px;\n}\n\n.list-img img {\n  width: 100%;\n  height: auto;\n  position: relative;\n  left: 100%;\n  margin-left: -100px;\n}\n\n.full_name {\n  text-align: center;\n  font-weight: 600;\n}\n\n.list-item .name {\n  margin-top: 40px;\n}\n\n.item-index {\n  text-align: center;\n  font-size: 26px;\n  padding: 15px 0px;\n}\n\n.padding20 {\n  padding-left: 20px;\n}"],sourceRoot:""}]);const a=A},"./src/containers/home/styles/loading.css":(e,n,t)=>{t.r(n),t.d(n,{"default":()=>C});var s=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=t.n(s),i=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=t.n(i),a=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=t.n(a),r=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=t.n(r),c=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),u=t.n(c),m=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=t.n(m),p=t("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/containers/home/styles/loading.css"),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=A(),g.insertStyleElement=u();o()(p["default"],g);const C=p["default"]&&p["default"].locals?p["default"].locals:undefined},"./src/containers/home/styles/popular.css":(e,n,t)=>{t.r(n),t.d(n,{"default":()=>C});var s=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=t.n(s),i=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=t.n(i),a=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=t.n(a),r=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=t.n(r),c=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),u=t.n(c),m=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=t.n(m),p=t("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[4]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/containers/home/styles/popular.css"),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=A(),g.insertStyleElement=u();o()(p["default"],g);const C=p["default"]&&p["default"].locals?p["default"].locals:undefined}}]);
//# sourceMappingURL=src_containers_home_popular_js.bundle.js.map