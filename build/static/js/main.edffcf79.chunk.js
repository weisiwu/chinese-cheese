(this["webpackJsonpchinese-cheese"]=this["webpackJsonpchinese-cheese"]||[]).push([[0],{40:function(e,r,t){e.exports=t(70)},45:function(e,r,t){},51:function(e,r,t){},52:function(e,r,t){},53:function(e,r,t){},54:function(e,r,t){var o={"./\u4ed5_red.png":55,"./\u5175_red.png":56,"./\u5352_black.png":57,"./\u58eb_black.png":58,"./\u5c06_black.png":59,"./\u5e05_red.png":60,"./\u70ae_black.png":61,"./\u76f8_red.png":62,"./\u7832_red.png":63,"./\u8c61_black.png":64,"./\u8eca_black.png":65,"./\u8eca_red.png":66,"./\u99ac_black.png":67,"./\u99ac_red.png":68};function n(e){var r=a(e);return t(r)}function a(e){if(!t.o(o,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=a,e.exports=n,n.id=54},55:function(e,r,t){e.exports=t.p+"static/media/\u4ed5_red.153eb7ea.png"},56:function(e,r,t){e.exports=t.p+"static/media/\u5175_red.fe5a6e46.png"},57:function(e,r,t){e.exports=t.p+"static/media/\u5352_black.a45bd480.png"},58:function(e,r,t){e.exports=t.p+"static/media/\u58eb_black.1c5324f3.png"},59:function(e,r,t){e.exports=t.p+"static/media/\u5c06_black.349ed535.png"},60:function(e,r,t){e.exports=t.p+"static/media/\u5e05_red.13afce9f.png"},61:function(e,r,t){e.exports=t.p+"static/media/\u70ae_black.6ef291b4.png"},62:function(e,r,t){e.exports=t.p+"static/media/\u76f8_red.ed8d9e85.png"},63:function(e,r,t){e.exports=t.p+"static/media/\u7832_red.1abdb6d5.png"},64:function(e,r,t){e.exports=t.p+"static/media/\u8c61_black.f959bf29.png"},65:function(e,r,t){e.exports=t.p+"static/media/\u8eca_black.808be253.png"},66:function(e,r,t){e.exports=t.p+"static/media/\u8eca_red.9bf2dba6.png"},67:function(e,r,t){e.exports=t.p+"static/media/\u99ac_black.668d40a6.png"},68:function(e,r,t){e.exports=t.p+"static/media/\u99ac_red.31b9c336.png"},70:function(e,r,t){"use strict";t.r(r);var o,n=t(0),a=t.n(n),c=t(11),i=t.n(c),l=(t(45),t(2)),u=t(3),s=t(21),p=t(16),g=t(23),m=t(10),f=t(76),d=t(38),b=t(5),h=t(77),v="\u8eca",w="\u99ac",_="\u8c61",C="\u58eb",k="\u5c06",O="\u70ae",j="\u5352",E="\u8eca",R="\u99ac",y="\u76f8",N="\u4ed5",x="\u5e05",M="\u7832",A="\u5175",S="black",P="red",D=[[{role:v,group:S},{role:w,group:S},{role:_,group:S},{role:C,group:S},{role:k,group:S},{role:C,group:S},{role:_,group:S},{role:w,group:S},{role:v,group:S}],["","","","","","","","",""],["",{role:O,group:S},"","","","","",{role:O,group:S},""],[{role:j,group:S},"",{role:j,group:S},"",{role:j,group:S},"",{role:j,group:S},"",{role:j,group:S}],["","","","","","","","",""],["","","","","","","","",""],[{role:A,group:P},"",{role:A,group:P},"",{role:A,group:P},"",{role:A,group:P},"",{role:A,group:P}],["",{role:M,group:P},"","","","","",{role:M,group:P},""],["","","","","","","","",""],[{role:E,group:P},{role:R,group:P},{role:y,group:P},{role:N,group:P},{role:x,group:P},{role:N,group:P},{role:y,group:P},{role:R,group:P},{role:E,group:P}]],F="card",G=0,I=t(9),T=new function e(){var r,t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o.role,a=void 0===n?S:n;Object(l.a)(this,e),this.roundChange=function(e){t.round++,t.judgeFinish(e),t.result===G?t.groupInAction=t.groupTurn[t.groupInAction]:t.result},this.judgeFinish=function(e){t.result=G},this.round=0,this.groupInAction=a,this.roundCache=[],this.startTime=0,this.result=G,this.groupTurn=(r={},Object(I.a)(r,S,P),Object(I.a)(r,P,S),r),this.pointsSnap=[]},B=T,W=function(e,r,t){var o=Number(r.row-1),n=Number(r.col-1),a=Number(e.fromRow-1),c=Number(e.fromCol-1),i=Math.abs(o-a),l=Math.abs(n-c),u=t[o][n].group===e.group&&e.group;return{targetRow:o,targetCol:n,fromRow:a,fromCol:c,rowChanges:i,colChanges:l,group:e.group,isSameGroup:u}},J=(o={},Object(I.a)(o,S,{startRow:0,endRow:2,startCol:3,endCol:5}),Object(I.a)(o,P,{startRow:7,endRow:9,startCol:3,endCol:5}),o),U=function(e,r,t){var o=W(e,r,t),n=o.targetRow,a=(o.targetCol,o.fromRow),c=(o.fromCol,o.rowChanges),i=o.colChanges,l=o.isSameGroup,u=e.group===P,s=!0;return(!(s=function(e,r){return(e||{}).group===P?r<=5:r>=6}(e,a+1)?i+c===1&&(u?n<=a:n>=a):u?n===a-1&&0===i:n===a+1&&0===i)||!l)&&s},L=function(e,r,t){var o=W(e,r,t),n=o.targetRow,a=o.targetCol,c=o.fromRow,i=o.fromCol,l=o.rowChanges,u=o.colChanges,s=o.isSameGroup,p=!0;if(0===l||0===u){if(0===u){for(var g=Math.max(c,n),m=Math.min(c,n)+1;m<g;m++)if(t[m][a]){p=!1;break}}else for(var f=Math.max(i,a),d=Math.min(i,a)+1;d<f;d++)if(t[n][d]){p=!1;break}return(!p||!s)&&p}return!1},$=function(e,r,t){var o=W(e,r,t),n=o.targetRow,a=o.targetCol,c=o.fromRow,i=o.fromCol,l=o.rowChanges,u=o.colChanges,s=o.isSameGroup,p=!0;if(l+u===3){if(2===l){p=!t[Math.min(c,n)+1][i]}else{var g=Math.min(i,a);p=!t[c][g+1]}return(!p||!s)&&p}return!1},q=function(e,r,t){var o=W(e,r,t),n=o.targetRow,a=o.targetCol,c=o.fromRow,i=o.fromCol,l=o.rowChanges,u=o.colChanges,s=o.isSameGroup,p=!0;if(2===l&&2===u){var g=Math.min(c,n),m=Math.min(i,a);return(!(p=!t[g+1][m+1])||!s)&&p}return!1},z=function(e,r,t){var o=W(e,r,t),n=o.targetRow,a=o.targetCol,c=o.rowChanges,i=o.colChanges,l=o.isSameGroup,u=o.group,s=!0;return 1===c&&1===i?s=J[u].startCol<=a&&J[u].endCol>=a&&J[u].startRow<=n&&J[u].endRow>=n:1===c?s=J[u].startRow<=n&&J[u].endRow>=n:1===i&&(s=J[u].startCol<=a&&J[u].endCol>=a),(!s||!l)&&s},H=function(e,r,t){var o=W(e,r,t),n=o.targetRow,a=o.targetCol,c=o.rowChanges,i=o.colChanges,l=o.isSameGroup,u=o.group,s=!0;if(c+i===1){if(J[u].startRow<=n&&J[u].endRow>=n&&J[u].startCol<=a&&J[u].endCol>=a)if(u===S){for(var p=n;p<=9;p++)if(t[p][a]){s=t[p][a].role!==x;break}}else for(var g=n;g>=0;g--)if(t[g][a]){s=t[g][a].role!==k;break}return(!s||!l)&&s}return!1},K=function(e,r,t){var o=W(e,r,t),n=o.targetRow,a=o.targetCol,c=o.fromRow,i=o.fromCol,l=o.rowChanges,u=o.colChanges,s=o.isSameGroup,p=0;if(0===l||0===u){if(0===u)for(var g=Math.max(c,n),m=Math.min(c,n)+1;m<g;m++)t[m][i]&&p++;else for(var f=Math.max(i,a),d=Math.min(i,a)+1;d<f;d++)t[c][d]&&p++;if(1===p&&t[n][a]&&!s)return!0;if(0===p&&!t[n][a])return!0}return!1},Q=(t(51),Object(m.b)((function(e){return{points:e.pointors}}))((function(e){var r=e.className,t=e.row,o=e.col,n=e.move,c=e.points,i=Object(h.a)((function(){return{accept:F,canDrop:function(e){return function(e,r,t){if(T.groupInAction!==e.group)return!1;var o=!1;if(!(r&&e&&t.length))return o;var n=W(e,r,t),a=n.targetRow,c=n.targetCol,i=n.fromRow,l=n.fromCol;if(a===i&&c===l)return o;switch((e||{}).role){case j:case A:o=U(e,r,t);break;case O:case M:o=K(e,r,t);break;case v:case E:o=L(e,r,t);break;case w:case R:o=$(e,r,t);break;case _:case y:o=q(e,r,t);break;case C:case N:o=z(e,r,t);break;case k:case x:o=H(e,r,t)}return o}(e,{row:t,col:o},c)},drop:function(e){var r=e||{},t=r.group,o=r.role,a=r.fromRow,c=r.fromCol;n({group:t,role:o},{row:a,col:c})},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}}),[c]),l=Object(b.a)(i,2),u=(l[0]._,l[1]);return t&&o?a.a.createElement("div",{ref:u,className:r,row:t,col:o,id:"".concat(t,"_").concat(o)}):null}))),V=t(19),X=t(28),Y=Object(X.b)({name:"pointors",initialState:[],reducers:{updatePointors:function(e,r){var t=r.payload||{},o=t.chess,n=t.targetRow,a=t.targetCol,c=o||{},i=c.group,l=c.role,u=c.fromRow,s=c.fromCol;if(Number(n)===Number(u)&&Number(a)===Number(s))return e;if(n&&a){var p=n-1,g=a-1,m=u-1,f=s-1;p<=9&&g<=8&&(e[p][g]={role:l,group:i},e[m][f]="")}return B.roundChange(),e},resetPointors:function(){return D}}}),Z=Object(V.a)({},Y.actions),ee=Object(X.a)({reducer:{pointors:Y.reducer}}),re=(t(52),["1_4","2_5","8_4","9_5"]),te=["1_5","2_4","8_5","9_4"],oe=["2_1","2_7","7_1","7_7"],ne=["3_1","3_7","8_1","8_7"],ae=["3_2","3_8","8_2","8_8"],ce=["2_2","2_8","7_2","7_8"],ie=Object(m.b)((function(e){return{points:e.pointors}}),{move:Z.updatePointors,init:Z.resetPointors})((function(e){var r=e.move,t=(e.points,e.init),o=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c="".concat(e,"_").concat(t),i=e<=5?"pointer-black":"pointer-red",l=8===t,u="",s="";re.includes(c)&&(u+=" slant"),te.includes(c)&&(u+=" slant-back"),oe.includes(c)&&(u+=" anchor-rb"),ne.includes(c)&&(u+=" anchor-rt"),ae.includes(c)&&(u+=" anchor-lt"),ce.includes(c)&&(u+=" anchor-lb"),o&&(u+=" hide-border");var p=Object(n.useCallback)((function(e,t){return function(o,n){var a=o.group,c=o.role,i=n.row,l=n.col;r({chess:{group:a,role:c,fromRow:i,fromCol:l},targetRow:e,targetCol:t})}}),[t,e]);if(5===e)return a.a.createElement("div",{key:c,className:"grid ".concat(u)},a.a.createElement(Q,{move:p(e,t),className:"".concat(i," pointer-bottom"),row:e,col:t}),l?a.a.createElement(Q,{move:p(e,t+1),className:"".concat(i," pointer-bottom last"),row:e,col:t+1}):null,a.a.createElement(Q,{move:p(e+1,t),className:"pointer-red pointer-top",row:e+1,col:t}),l?a.a.createElement(Q,{move:p(e+1,t+1),className:"pointer-red pointer-top last",row:e+1,col:t+1}):null);var g=e>5?e+1:e;return a.a.createElement("div",{key:c,className:"grid ".concat(u)},a.a.createElement(Q,{move:p(g,t),className:"".concat(i).concat(s),row:g,col:t}),l?a.a.createElement(Q,{move:p(g,t+1),className:"".concat(i," last"),row:g,col:t+1}):null)},c=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"banner-left"},a.a.createElement("p",null,"\u695a \u6cb3")),a.a.createElement("div",{className:"banner-right"},a.a.createElement("p",null,"\u6c49 \u754c")))};return Object(n.useEffect)((function(){t()}),[]),a.a.createElement("div",{id:"Checkerboard"},Array(9).fill("").map((function(e,r){return 5===(t=r+1)?a.a.createElement("div",{className:"divider",key:t},c(),Array(8).fill("").map((function(e,r){return o(t,r+1,!0)}))):a.a.createElement(a.a.Fragment,null,Array(8).fill("").map((function(e,r){return o(t,r+1)})));var t})))})),le=t(78),ue=t(75),se=(t(53),function(e){var r=e.group,o=e.role,c=e.position,i=void 0===c?"":c,l=e.style,u=void 0===l?{}:l,s=i.split("_")||[],p=Object(b.a)(s,2),g=p[0],m=p[1],f=Object(le.a)({type:F,item:function(){return{role:o,group:r,fromRow:g,fromCol:m}},collect:function(e){return{isDragging:e.isDragging()}}}),d=Object(b.a)(f,3),h=d[0].isDragging,v=d[1],w=d[2],_=Object(n.useMemo)((function(){var e="";try{e=t(54)("./".concat(o,"_").concat(r,".png"))}catch(n){e=""}return e}),[r,o]);return o?a.a.createElement(a.a.Fragment,null,a.a.createElement(ue.a,{connect:w,src:_}),a.a.createElement("div",{ref:v,className:"chessman",style:Object(V.a)({},u,{opacity:h?.5:1}),group:r},o)):null}),pe=Object(m.b)((function(e){return{points:e.pointors}}))(function(e){function r(){var e,t;Object(l.a)(this,r);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(p.a)(r)).call.apply(e,[this].concat(n))))._renderPoints=function(){return Array.isArray(t.props.points)?t.props.points.map((function(e,r){var o=r+1;return e.map((function(e,r){var n=r+1;return t._renderPoint("".concat(o,"_").concat(n),e)}))})):null},t._renderPoint=function(e,r){if(!e||!r)return null;var t=document.getElementById(e),o=r||{},n=o.role,i=o.group;return n&&i&&t?Object(c.createPortal)(a.a.createElement(se,{key:e,position:e,group:i,role:n}),t):null},t}return Object(g.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){return this.props.points?a.a.createElement(a.a.Fragment,null,this._renderPoints()):null}}]),r}(a.a.Component)),ge=function(e){function r(){return Object(l.a)(this,r),Object(s.a)(this,Object(p.a)(r).apply(this,arguments))}return Object(g.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{store:ee},a.a.createElement(f.a,{backend:d.a},a.a.createElement(ie,null),a.a.createElement(pe,null))))}}]),r}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(ge,null),document.getElementById("CheckerboardWrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.edffcf79.chunk.js.map