/*! For license information please see main-0bf854f2.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/containers/home/app.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a("./node_modules/react/index.js"),n=a("./node_modules/react-router-dom/esm/react-router-dom.js"),r=a("./node_modules/react-router/esm/react-router.js"),l=a("./src/containers/home/battle.js"),o=a("./src/containers/home/popular.js");a("./src/containers/home/styles/app.css");const c=function(){return s.createElement("div",{className:"App"},s.createElement("div",{className:"banner"},s.createElement("span",{className:"toPopular"},s.createElement(n.NavLink,{to:"/"},"Popular")),s.createElement("span",{className:"toBattle"},s.createElement(n.NavLink,{to:"/battle"},"Battle"))),s.createElement(r.Switch,null,s.createElement(r.Route,{path:"/battle",component:l.default}),s.createElement(r.Route,{path:"/",component:o.default})),s.createElement("div",{className:"bottom"},"@\u7248\u6743\u6240\u6709 liwei"))}},"./src/containers/home/battle.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=a("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=a("./node_modules/react/index.js"),r=(a("./src/containers/home/styles/battle.css"),a("./node_modules/antd/dist/antd.css"),a("./node_modules/antd/es/input/index.js")),l=a("./node_modules/antd/es/button/index.js"),o=a("./node_modules/@ant-design/icons/es/icons/UsergroupAddOutlined.js"),c=a("./node_modules/@ant-design/icons/es/icons/TrophyOutlined.js"),i=a("./node_modules/@ant-design/icons/es/icons/RocketOutlined.js");const d=function(){var e=(0,n.useState)(!0),t=(0,s.default)(e,2),a=t[0],d=t[1],m=(0,n.useState)(!0),u=(0,s.default)(m,2),f=u[0],p=u[1],h=(0,n.useState)(""),v=(0,s.default)(h,2),E=v[0],g=v[1],b=(0,n.useState)(""),y=(0,s.default)(b,2),_=y[0],N=y[1];return(0,n.useEffect)((function(){d(""==E),p(""==_)}),[E,_]),n.createElement("div",{className:"box"},n.createElement("div",{className:"battle"},n.createElement("p",{className:"battleTitle"},"Instructions"),n.createElement("div",{className:"battleContent"},n.createElement("div",{className:"left smallBox"},n.createElement("span",null,"Enter two Github:"),n.createElement("div",null,n.createElement(o.default,{style:{fontSize:150,color:"#F4EA2A",background:"antiquewhite"}}))),n.createElement("div",{className:"center smallBox"},n.createElement("span",null,"Battle"),n.createElement("div",null,n.createElement(c.default,{style:{fontSize:150,color:"#FFBF74",background:"antiquewhite"}}))),n.createElement("div",{className:"right smallBox"},n.createElement("span",null,"See the winner"),n.createElement("div",null,n.createElement(i.default,{style:{fontSize:150,color:"#808080",background:"antiquewhite"}})))),n.createElement("p",{className:"playersTitle"},"Players")),n.createElement("div",{className:"players"},n.createElement("div",{className:"left"},n.createElement("p",null,"Player One"),n.createElement("div",{className:"content"},n.createElement(r.default,{placeholder:"github username",style:{width:"66%",height:"50%"},onChange:function(e){return function(e){var t=e.target.value;g(t)}(e)},value:E}),n.createElement(l.default,{type:"dashed",style:{width:"32%",height:"50%"},disabled:a,onClick:function(){console.log(E)}},"Submit"))),n.createElement("div",{className:"right"},n.createElement("p",null,"Player Two"),n.createElement("div",{className:"content"},n.createElement(r.default,{placeholder:"github username",style:{width:"66%",height:"50%"},onChange:function(e){return function(e){var t=e.target.value;N(t)}(e)},value:_}),n.createElement(l.default,{type:"dashed",style:{width:"32%",height:"50%"},disabled:f,onClick:function(){console.log(_)}},"Submit")))))}},"./src/containers/home/popular.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),n=a("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=a("./node_modules/react/index.js"),l=(a("./src/containers/home/styles/index.css"),a("./src/containers/home/styles/loading.css"),a("./node_modules/axios/index.js")),o=a.n(l),c=a("./node_modules/react-infinite-scroller/index.js"),i=a.n(c),d=(a("./node_modules/font-awesome/css/font-awesome.css"),["https://api.github.com/search/repositories?q=stars:3E1&sort=stars&order=desc&type=Repositories","https://api.github.com/search/repositories?q=stars:3E1+language:javascript&sort=stars&order=desc&type=Repositories","https://api.github.com/search/repositories?q=stars:3E1+language:ruby&sort=stars&order=desc&type=Repositories","https://api.github.com/search/repositories?q=stars:3E1+language:java&sort=stars&order=desc&type=Repositories","https://api.github.com/search/repositories?q=stars:3E1+language:css&sort=stars&order=desc&type=Repositories"]);const m=function(){var e=[],t=r.useState,a=r.useEffect,l=t([{name:"All",id:0,isChecked:!0},{name:"JavaScript",id:1,isChecked:!1},{name:"Ruby",id:2,isChecked:!1},{name:"Java",id:3,isChecked:!1},{name:"Css",id:4,isChecked:!1}]),c=(0,n.default)(l,2),m=c[0],u=c[1],f=t(e),p=(0,n.default)(f,2),h=p[0],v=p[1],E=t(!1),g=(0,n.default)(E,2),b=g[0],y=g[1],_=t(1),N=(0,n.default)(_,2),j=N[0],k=N[1],w=t(!0),x=(0,n.default)(w,2),S=x[0],C=x[1],O=t(0),T=(0,n.default)(O,2),R=T[0],B=T[1],P=t(0),q=(0,n.default)(P,2),A=q[0],F=q[1];function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(y(!0),R&&R.length>=100)return C(!1),!1;o().get(d[A],{params:{page:t}}).then((function(t){if(!t.data.items)return console.log("err"),[];var a=(e=t.data.items).length+R;v([].concat((0,s.default)(e),(0,s.default)(h))),B(a),console.log(b),y(!1)})).catch((function(e){alert(e),y(!1)}))}return a((function(){L(1)}),[]),r.createElement("div",{className:"box"},b&&r.createElement("div",{id:"loading"},r.createElement("div",{id:"loading_bg"},r.createElement("div",{className:"loaders"},"Loading..."))),r.createElement("div",{className:"header"},r.createElement("ul",null,m.map((function(e){return r.createElement("li",{onClick:function(){return function(e){var t=(0,s.default)(m);t.forEach((function(e){e.isChecked=!1})),t.forEach((function(t){t.id===e&&(t.isChecked=!0)})),F(e),v((function(e){return e.splice(0)})),u(t),k(1),L()}(e.id)},key:e.id,className:e.isChecked?"active":""},e.name)})))),r.createElement(i(),{initialLoad:!1,pageStart:j,loadMore:L,hasMore:S,useWindow:!0,loader:r.createElement("div",{className:"loader",key:0},"\u6b63\u5728\u52a0\u8f7d Loading")},r.createElement("div",{className:"content"},h.map((function(e,t){return r.createElement("div",{className:"list-item",key:t},r.createElement("div",{className:"item-index"},"#",t+1),r.createElement("div",{className:"list-img"},r.createElement("img",{src:e.owner.avatar_url})),r.createElement("div",{className:"full_name"},r.createElement("a",{href:"#"},e.full_name)),r.createElement("div",{className:"name padding20"},r.createElement("i",{className:"fas fa-user icon-i",style:{color:"rgb(255, 191, 116)"}}),r.createElement("a",{href:"#"},e.name)),r.createElement("div",{className:"watchers_count padding20"},r.createElement("i",{className:"fas fa-star icon-i",style:{color:"rgb(255, 215, 0)"}}),e.watchers_count),r.createElement("div",{className:"forks_count padding20"}," ",r.createElement("i",{className:"fas fa-code-branch icon-i",style:{color:"rgb(129, 195, 245)"}}),e.forks_count),r.createElement("div",{className:"open_issues_count padding20"},r.createElement("i",{className:"fas fa-exclamation-triangle icon-i",style:{color:"rgb(241, 138, 147)"}}),e.open_issues_count))})))))}},"./src/packages/home/index.jsx":(e,t,a)=>{a.r(t);var s=a("./node_modules/react/index.js"),n=a("./node_modules/react-dom/index.js"),r=a("./src/containers/home/app.js"),l=a("./node_modules/react-router-dom/esm/react-router-dom.js");n.render(s.createElement(l.BrowserRouter,null,s.createElement(r.default,null)),document.getElementById("root"))},"./src/containers/home/styles/app.css":(e,t,a)=>{a.r(t)},"./src/containers/home/styles/battle.css":(e,t,a)=>{a.r(t)},"./src/containers/home/styles/index.css":(e,t,a)=>{a.r(t)},"./src/containers/home/styles/loading.css":(e,t,a)=>{a.r(t)}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,a),r.exports}a.m=e,(()=>{var e=[];a.O=(t,s,n,r)=>{if(!s){var l=1/0;for(d=0;d<e.length;d++){for(var[s,n,r]=e[d],o=!0,c=0;c<s.length;c++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](s[c])))?s.splice(c--,1):(o=!1,r<l&&(l=r));if(o){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,n,r]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={main:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var n,r,[l,o,c]=s,i=0;if(l.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var d=c(a)}for(t&&t(s);i<l.length;i++)r=l[i],a.o(e,r)&&e[r]&&e[r][0](),e[l[i]]=0;return a.O(d)},s=self.webpackChunkwebpackTest=self.webpackChunkwebpackTest||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=a.O(void 0,["vendors-node_modules_ant-design_icons_es_icons_RocketOutlined_js-node_modules_ant-design_icon-9a622e"],(()=>a("./src/packages/home/index.jsx")));s=a.O(s)})();
//# sourceMappingURL=main-0bf854f2.js.map