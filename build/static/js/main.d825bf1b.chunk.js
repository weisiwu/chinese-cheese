(this["webpackJsonpchinese-cheese"]=this["webpackJsonpchinese-cheese"]||[]).push([[0],{125:function(e,t,r){e.exports=r(156)},130:function(e,t,r){},135:function(e,t,r){},136:function(e,t,r){},137:function(e,t,r){},138:function(e,t,r){var n={"./\u4ed5_red.png":139,"./\u5175_red.png":140,"./\u5352_black.png":141,"./\u58eb_black.png":142,"./\u5c06_black.png":143,"./\u5e05_red.png":144,"./\u70ae_black.png":145,"./\u76f8_red.png":146,"./\u7832_red.png":147,"./\u8c61_black.png":148,"./\u8eca_black.png":149,"./\u8eca_red.png":150,"./\u99ac_black.png":151,"./\u99ac_red.png":152};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=138},139:function(e,t,r){e.exports=r.p+"static/media/\u4ed5_red.153eb7ea.png"},140:function(e,t,r){e.exports=r.p+"static/media/\u5175_red.fe5a6e46.png"},141:function(e,t,r){e.exports=r.p+"static/media/\u5352_black.a45bd480.png"},142:function(e,t,r){e.exports=r.p+"static/media/\u58eb_black.1c5324f3.png"},143:function(e,t,r){e.exports=r.p+"static/media/\u5c06_black.349ed535.png"},144:function(e,t,r){e.exports=r.p+"static/media/\u5e05_red.13afce9f.png"},145:function(e,t,r){e.exports=r.p+"static/media/\u70ae_black.6ef291b4.png"},146:function(e,t,r){e.exports=r.p+"static/media/\u76f8_red.ed8d9e85.png"},147:function(e,t,r){e.exports=r.p+"static/media/\u7832_red.1abdb6d5.png"},148:function(e,t,r){e.exports=r.p+"static/media/\u8c61_black.f959bf29.png"},149:function(e,t,r){e.exports=r.p+"static/media/\u8eca_black.808be253.png"},150:function(e,t,r){e.exports=r.p+"static/media/\u8eca_red.9bf2dba6.png"},151:function(e,t,r){e.exports=r.p+"static/media/\u99ac_black.668d40a6.png"},152:function(e,t,r){e.exports=r.p+"static/media/\u99ac_red.31b9c336.png"},154:function(e,t,r){},156:function(e,t,r){"use strict";r.r(t);var n,o=r(0),a=r.n(o),c=r(21),i=r.n(c),l=(r(130),r(8)),u=r(10),s=r(54),p=r(48),m=r(55),f=r(34),g=r(167),d=r(70),b=r(166),h=r(119),E=r(4),v=r(168),C={VEHICLE:"\u8eca",HORSE:"\u99ac",ELEPHANT:"\u8c61",GUARD:"\u58eb",MARSHAL:"\u5c06",GUN:"\u70ae",SOLIDER:"\u5352"},R={VEHICLE:"\u8eca",HORSE:"\u99ac",ELEPHANT:"\u76f8",GUARD:"\u4ed5",MARSHAL:"\u5e05",GUN:"\u7832",SOLIDER:"\u5175"},_="black",O="red",w=[[{role:C.VEHICLE,group:_},{role:C.HORSE,group:_},{role:C.ELEPHANT,group:_},{role:C.GUARD,group:_},{role:C.MARSHAL,group:_},{role:C.GUARD,group:_},{role:C.ELEPHANT,group:_},{role:C.HORSE,group:_},{role:C.VEHICLE,group:_}],["","","","","","","","",""],["",{role:C.GUN,group:_},"","","","","",{role:C.GUN,group:_},""],[{role:C.SOLIDER,group:_},"",{role:C.SOLIDER,group:_},"",{role:C.SOLIDER,group:_},"",{role:C.SOLIDER,group:_},"",{role:C.SOLIDER,group:_}],["","","","","","","","",""],["","","","","","","","",""],[{role:R.SOLIDER,group:O},"",{role:R.SOLIDER,group:O},"",{role:R.SOLIDER,group:O},"",{role:R.SOLIDER,group:O},"",{role:R.SOLIDER,group:O}],["",{role:R.GUN,group:O},"","","","","",{role:R.GUN,group:O},""],["","","","","","","","",""],[{role:R.VEHICLE,group:O},{role:R.HORSE,group:O},{role:R.ELEPHANT,group:O},{role:R.GUARD,group:O},{role:R.MARSHAL,group:O},{role:R.GUARD,group:O},{role:R.ELEPHANT,group:O},{role:R.HORSE,group:O},{role:R.VEHICLE,group:O}]],k="card",A=0,y=1,N=2,S=3,j=r(1),L=new function e(){var t,r=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=n.role,a=void 0===o?_:o;Object(l.a)(this,e),this.applyTie=function(){r.result===A&&(r.result=S,r.roundChange())},this.timerInterval=function(){r.timer=setInterval((function(){r.gameTimer+=1e3,r.timerCbs.forEach((function(e){"function"===typeof e&&e()}))}),1e3)},this.addTimerCb=function(e){r.timerCbs.push(e||function(){})},this.roundChange=function(e){r.round++,1===r.round&&r.timerInterval(),r.result===A?r.groupInAction=r.groupTurn[r.groupInAction]:(clearInterval(r.timer),r.gameFinishCbs.forEach((function(e){"function"===typeof e&&e(r.result)}))),r.roundChangeCbs.forEach((function(e){"function"===typeof e&&e()}))},this.addRoundChangeCb=function(e){r.roundChangeCbs.push(e||function(){})},this.judgeFinish=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.targetRow,o=t.targetCol,a=t.willToTie,c=void 0!==a&&a;if(c)r.result=S;else{var i=r.groupInAction===O,l=i?C:R,u=!1;e[n][o]&&e[n][o].role===l.MARSHAL&&(u=!0),r.result=u?i?y:N:A}},this.addGameFinishCb=function(e){r.gameFinishCbs.push(e||function(){})},this.round=0,this.roundChangeCbs=[],this.groupInAction=a,this.roundCache=[],this.timer=null,this.gameTimer=0,this.timerCbs=[],this.result=A,this.groupTurn=(t={},Object(j.a)(t,_,O),Object(j.a)(t,O,_),t),this.gameFinishCbs=[]},I=L,H=function(e,t,r){var n=Number(t.row-1),o=Number(t.col-1),a=Number(e.fromRow-1),c=Number(e.fromCol-1),i=Math.abs(n-a),l=Math.abs(o-c),u=r[n][o].group===e.group&&e.group;return{targetRow:n,targetCol:o,fromRow:a,fromCol:c,rowChanges:i,colChanges:l,group:e.group,isSameGroup:u}},D=(n={},Object(j.a)(n,_,{startRow:0,endRow:2,startCol:3,endCol:5}),Object(j.a)(n,O,{startRow:7,endRow:9,startCol:3,endCol:5}),n),M=function(e,t,r){var n=H(e,t,r),o=n.targetRow,a=(n.targetCol,n.fromRow),c=(n.fromCol,n.rowChanges),i=n.colChanges,l=n.isSameGroup,u=e.group===O,s=!0;return(!(s=function(e,t){return(e||{}).group===O?t<=5:t>=6}(e,a+1)?i+c===1&&(u?o<=a:o>=a):u?o===a-1&&0===i:o===a+1&&0===i)||!l)&&s},G=function(e,t,r){var n=H(e,t,r),o=n.targetRow,a=n.targetCol,c=n.fromRow,i=n.fromCol,l=n.rowChanges,u=n.colChanges,s=n.isSameGroup,p=!0;if(0===l||0===u){if(0===u){for(var m=Math.max(c,o),f=Math.min(c,o)+1;f<m;f++)if(r[f][a]){p=!1;break}}else for(var g=Math.max(i,a),d=Math.min(i,a)+1;d<g;d++)if(r[o][d]){p=!1;break}return(!p||!s)&&p}return!1},T=function(e,t,r){var n=H(e,t,r),o=n.targetRow,a=n.targetCol,c=n.fromRow,i=n.fromCol,l=n.rowChanges,u=n.colChanges,s=n.isSameGroup,p=!0;if(l+u===3){if(2===l){p=!r[Math.min(c,o)+1][i]}else{var m=Math.min(i,a);p=!r[c][m+1]}return(!p||!s)&&p}return!1},x=function(e,t,r){var n=H(e,t,r),o=n.targetRow,a=n.targetCol,c=n.fromRow,i=n.fromCol,l=n.rowChanges,u=n.colChanges,s=n.isSameGroup,p=!0;if(2===l&&2===u){var m=Math.min(c,o),f=Math.min(i,a);return(!(p=!r[m+1][f+1])||!s)&&p}return!1},P=function(e,t,r){var n=H(e,t,r),o=n.targetRow,a=n.targetCol,c=n.rowChanges,i=n.colChanges,l=n.isSameGroup,u=n.group,s=!0;return 1===c&&1===i?s=D[u].startCol<=a&&D[u].endCol>=a&&D[u].startRow<=o&&D[u].endRow>=o:1===c?s=D[u].startRow<=o&&D[u].endRow>=o:1===i&&(s=D[u].startCol<=a&&D[u].endCol>=a),(!s||!l)&&s},U=function(e,t,r){var n=H(e,t,r),o=n.targetRow,a=n.targetCol,c=n.rowChanges,i=n.colChanges,l=n.isSameGroup,u=n.group,s=!0;if(c+i===1){if(D[u].startRow<=o&&D[u].endRow>=o&&D[u].startCol<=a&&D[u].endCol>=a)if(u===_){for(var p=o;p<=9;p++)if(r[p][a]){s=r[p][a].role!==R.MARSHAL;break}}else for(var m=o;m>=0;m--)if(r[m][a]){s=r[m][a].role!==C.MARSHAL;break}return(!s||!l)&&s}return!1},F=function(e,t,r){var n=H(e,t,r),o=n.targetRow,a=n.targetCol,c=n.fromRow,i=n.fromCol,l=n.rowChanges,u=n.colChanges,s=n.isSameGroup,p=0;if(0===l||0===u){if(0===u)for(var m=Math.max(c,o),f=Math.min(c,o)+1;f<m;f++)r[f][i]&&p++;else for(var g=Math.max(i,a),d=Math.min(i,a)+1;d<g;d++)r[c][d]&&p++;if(1===p&&r[o][a]&&!s)return!0;if(0===p&&!r[o][a])return!0}return!1},V=(r(135),Object(f.b)((function(e){return{points:e.pointors}}))((function(e){var t=e.className,r=e.row,n=e.col,o=e.move,c=e.points,i=Object(v.a)((function(){return{accept:k,canDrop:function(e){return function(e,t,r){if(L.groupInAction!==e.group)return!1;var n=!1;if(!(t&&e&&r.length))return n;var o=H(e,t,r),a=o.targetRow,c=o.targetCol,i=o.fromRow,l=o.fromCol;if(a===i&&c===l)return n;switch((e||{}).role){case C.SOLIDER:case R.SOLIDER:n=M(e,t,r);break;case C.GUN:case R.GUN:n=F(e,t,r);break;case C.VEHICLE:case R.VEHICLE:n=G(e,t,r);break;case C.HORSE:case R.HORSE:n=T(e,t,r);break;case C.ELEPHANT:case R.ELEPHANT:n=x(e,t,r);break;case C.GUARD:case R.GUARD:n=P(e,t,r);break;case C.MARSHAL:case R.MARSHAL:n=U(e,t,r)}return n}(e,{row:r,col:n},c)},drop:function(e){var t=e||{},r=t.group,n=t.role,a=t.fromRow,c=t.fromCol;o({group:r,role:n},{row:a,col:c})},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}}),[c]),l=Object(E.a)(i,2),u=(l[0]._,l[1]);return r&&n?a.a.createElement("div",{ref:u,className:t,row:r,col:n,id:"".concat(r,"_").concat(n)}):null}))),B=r(76),W=r(95),J=Object(W.b)({name:"pointors",initialState:[],reducers:{updatePointors:function(e,t){var r=t.payload||{},n=r.chess,o=r.targetRow,a=r.targetCol,c=n||{},i=c.group,l=c.role,u=c.fromRow,s=c.fromCol;if(Number(o)===Number(u)&&Number(a)===Number(s))return e;if(o&&a){var p=o-1,m=a-1,f=u-1,g=s-1;p<=9&&m<=8&&(e[p][m]={role:l,group:i},e[f][g]="")}return I.roundChange(e),e},resetPointors:function(){return w}}}),$=Object(B.a)({},J.actions),q=Object(W.a)({reducer:{pointors:J.reducer}}),z=(r(136),["1_4","2_5","8_4","9_5"]),K=["1_5","2_4","8_5","9_4"],Q=["2_1","2_7","7_1","7_7"],X=["3_1","3_7","8_1","8_7"],Y=["3_2","3_8","8_2","8_8"],Z=["2_2","2_8","7_2","7_8"],ee=Object(f.b)((function(e){return{points:e.pointors}}),{move:$.updatePointors,init:$.resetPointors})((function(e){var t=e.move,r=e.points,n=e.init,c=function(e,n){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i="".concat(e,"_").concat(n),l=e<=5?"pointer-black":"pointer-red",u=8===n,s="",p="";z.includes(i)&&(s+=" slant"),K.includes(i)&&(s+=" slant-back"),Q.includes(i)&&(s+=" anchor-rb"),X.includes(i)&&(s+=" anchor-rt"),Y.includes(i)&&(s+=" anchor-lt"),Z.includes(i)&&(s+=" anchor-lb"),c&&(s+=" hide-border");var m=Object(o.useCallback)((function(e,n){return function(o,a){var c=o.group,i=o.role,l=a.row,u=a.col;I.judgeFinish(r,{targetRow:e-1,targetCol:n-1}),t({chess:{group:c,role:i,fromRow:l,fromCol:u},targetRow:e,targetCol:n})}}),[n,e,r]);if(5===e)return a.a.createElement("div",{key:i,className:"grid ".concat(s)},a.a.createElement(V,{move:m(e,n),className:"".concat(l," pointer-bottom"),row:e,col:n}),u?a.a.createElement(V,{move:m(e,n+1),className:"".concat(l," pointer-bottom last"),row:e,col:n+1}):null,a.a.createElement(V,{move:m(e+1,n),className:"pointer-red pointer-top",row:e+1,col:n}),u?a.a.createElement(V,{move:m(e+1,n+1),className:"pointer-red pointer-top last",row:e+1,col:n+1}):null);var f=e>5?e+1:e;return a.a.createElement("div",{key:i,className:"grid ".concat(s)},a.a.createElement(V,{move:m(f,n),className:"".concat(l).concat(p),row:f,col:n}),u?a.a.createElement(V,{move:m(f,n+1),className:"".concat(l," last"),row:f,col:n+1}):null)},i=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"banner-left"},a.a.createElement("p",null,"\u695a \u6cb3")),a.a.createElement("div",{className:"banner-right"},a.a.createElement("p",null,"\u6c49 \u754c")))};return Object(o.useEffect)((function(){n()}),[]),a.a.createElement("div",{id:"Checkerboard"},Array(9).fill("").map((function(e,t){return 5===(r=t+1)?a.a.createElement("div",{className:"divider",key:r},i(),Array(8).fill("").map((function(e,t){return c(r,t+1,!0)}))):a.a.createElement(a.a.Fragment,null,Array(8).fill("").map((function(e,t){return c(r,t+1)})));var r})))})),te=r(169),re=r(164),ne=(r(137),function(e){var t=e.group,n=e.role,c=e.position,i=void 0===c?"":c,l=e.style,u=void 0===l?{}:l,s=i.split("_")||[],p=Object(E.a)(s,2),m=p[0],f=p[1],g=Object(te.a)({type:k,item:function(){return{role:n,group:t,fromRow:m,fromCol:f}},collect:function(e){return{isDragging:e.isDragging()}}}),d=Object(E.a)(g,3),b=d[0].isDragging,h=d[1],v=d[2],C=Object(o.useMemo)((function(){var e="";try{e=r(138)("./".concat(n,"_").concat(t,".png"))}catch(o){e=""}return e}),[t,n]);return n?a.a.createElement(a.a.Fragment,null,a.a.createElement(re.a,{connect:v,src:C}),a.a.createElement("div",{ref:h,className:"chessman",style:Object(B.a)({},u,{opacity:b?.5:1}),group:t},n)):null}),oe=Object(f.b)((function(e){return{points:e.pointors}}))(function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o))))._renderPoints=function(){return Array.isArray(r.props.points)?r.props.points.map((function(e,t){var n=t+1;return e.map((function(e,t){var o=t+1;return r._renderPoint("".concat(n,"_").concat(o),e)}))})):null},r._renderPoint=function(e,t){if(!e||!t)return null;var r=document.getElementById(e),n=t||{},o=n.role,i=n.group;return o&&i&&r?Object(c.createPortal)(a.a.createElement(ne,{key:e,position:e,group:i,role:o}),r):null},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.points?a.a.createElement(a.a.Fragment,null,this._renderPoints()):null}}]),t}(a.a.Component)),ae=r(109),ce=r.n(ae),ie=(r(154),Object(f.b)((function(e){return{}}))(function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={gameTimer:I.gameTimer||0,groupInAction:I.groupInAction},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"_timeFormat",value:function(e){return e?ce()(e).utcOffset(0).format("HH:mm:ss"):""}},{key:"_applyTie",value:function(){I.applyTie()}},{key:"componentDidMount",value:function(){var e=this;I.addTimerCb((function(){e.setState({gameTimer:I.gameTimer})})),I.addRoundChangeCb((function(){e.setState({groupInAction:I.groupInAction})}))}},{key:"render",value:function(){var e=this.state||{},t=e.gameTimer,r=e.groupInAction,n="\u8f6e\u5230: ".concat(r===_?"\u9ed1\u65b9":"\u7ea2\u65b9","\u843d\u5b50");return Object(c.createPortal)(a.a.createElement("div",{id:"Dashboard"},a.a.createElement("p",{className:"dashboard_text"},"\u7528\u65f6: ".concat(this._timeFormat(t)||"00:00:00")),a.a.createElement("p",{className:"dashboard_text"},n),a.a.createElement("div",{className:"dashboard_btns"},a.a.createElement("p",{className:"dashboard_btn",onClick:this._applyTie},"\u6c42\u548c"),a.a.createElement("p",{className:"dashboard_btn"},"\u5bfc\u51fa\u68cb\u8c31"))),document.body)}}]),t}(a.a.Component))),le=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={isModalOpen:!1},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"_renderModal",value:function(){var e=this,t=this.state.isModalOpen,r=I.result,n="";return n=r===S?"\u5e73\u5c40\uff01":r===y?"\u606d\u559c\u7ea2\u65b9\u73a9\u5bb6\uff01":"\u606d\u559c\u9ed1\u65b9\u73a9\u5bb6\uff01",Object(c.createPortal)(a.a.createElement(g.a,{title:n,open:t,footer:[a.a.createElement(d.a,{key:"ok",type:"primary",onClick:function(){return e.setState({isModalOpen:!t})}},"\u786e\u5b9a")]},a.a.createElement("p",null,"\u4e8c\u56fd\u4e89\u5f3a\u5404\u7528\u5175\uff0c\u6446\u6210\u961f\u4f0d\u5b9a\u8f93\u8d62\u3002"),a.a.createElement("p",null,"\u9a6c\u884c\u66f2\u8def\u5f53\u77e5\u9053\uff0c\u5c06\u5b88\u6df1\u5bab\u6212\u8fdc\u5f81\u3002"),a.a.createElement("p",null,"\u4e58\u9669\u51fa\u8f66\u6536\u8d25\u5352\uff0c\u9694\u6cb3\u98de\u70ae\u4e0b\u91cd\u57ce\u3002"),a.a.createElement("p",null,"\u7b49\u95f2\u8bc6\u5f97\u519b\u60c5\u4e8b\uff0c\u4e00\u7740\u529f\u6210\u89c1\u592a\u5e73\u3002")),document.body)}},{key:"componentDidMount",value:function(){var e=this;I.addGameFinishCb((function(){e.setState({isModalOpen:!0})}))}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{store:q},a.a.createElement(b.a,{backend:h.a},a.a.createElement(ee,null),a.a.createElement(oe,null),a.a.createElement(ie,null),this._renderModal())))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(le,null),document.getElementById("CheckerboardWrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.d825bf1b.chunk.js.map