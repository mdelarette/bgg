(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(61),c=a.n(l),o=a(1),i=a(63),u=a(64),m=a(65),s=a(70),d=a(66),g=a(71),p=a(9),b=a(41),f=a.n(b),w=a(67),E=a(42),y=a(43),h=a.n(y),v=function(e){return{type:"FETCH_PLAYER_GAMES",payload:e}};function N(e,t,a){return-1===a.slice(t+1).findIndex(function(t,a,n){return t.id===e.id})}var O={updatePlayerToStore:function(e,t){return console.log("updatePlayerToStore",e,JSON.stringify(t,null,2)),{type:"UPDATE_PLAYER",payload:{playerId:e,playerData:t}}},deletePlayerFromStore:function(e){return{type:"DELETE_PLAYER",payload:{playerId:e}}},fetchPlayerGames:function(e){return function(){var t=Object(w.a)(f.a.mark(function t(a,n){var r,l,c,o,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fetchPlayerGames",e.id,e.bggName),l=[],t.prev=2,t.next=5,h.a.get("https://www.boardgamegeek.com/xmlapi2/collection?username=".concat(e.bggName));case 5:return c=t.sent,Object(E.parseString)(c.data,function(e,t){r=t.items.item.map(function(e){return{id:e.$.objectid,name:e.name[0]._}})}),l=r.filter(N),o=(o=l.reduce(function(e,t){return e+"".concat(t.id,",")},"")).slice(0,o.length-1),t.next=12,h.a.get("https://www.boardgamegeek.com/xmlapi2/thing?id=".concat(o));case 12:i=t.sent,Object(E.parseString)(i.data,function(e,t){console.log("_games.items=",t.items),r=t.items.item.map(function(e){return{id:e.$.id,name:e.name[0].$.value,min:e.minplayers[0].$.value,max:e.maxplayers[0].$.value}})}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),console.error(t.t0);case 19:a(v(r));case 20:case"end":return t.stop()}},t,null,[[2,16]])}));return function(e,a){return t.apply(this,arguments)}}()}},j=Object(o.b)(null,O)(function(e){var t=e.player,a=e.updatePlayerToStore,n=e.deletePlayerFromStore,l=e.fetchPlayerGames,c=r.a.useState(!1),o=Object(p.a)(c,2),i=o[0],u=o[1],m=r.a.useState(t.name),s=Object(p.a)(m,2),d=s[0],g=s[1],b=r.a.useState(t.bggName),f=Object(p.a)(b,2),w=f[0],E=f[1],y=r.a.useState(t.age),h=Object(p.a)(y,2),v=h[0],N=h[1],O=r.a.useState(t.email),j=Object(p.a)(O,2),x=j[0],C=j[1],S=r.a.useState(t.thumbnail),P=Object(p.a)(S,2),k=P[0],A=(P[1],r.a.useMemo(function(){return x?function(e,t){return t=t||80,"http://www.gravatar.com/avatar/"+function(e){function t(e,t){return e<<t|e>>>32-t}function a(e,t){var a,n,r,l,c;return r=2147483648&e,l=2147483648&t,c=(1073741823&e)+(1073741823&t),(a=1073741824&e)&(n=1073741824&t)?2147483648^c^r^l:a|n?1073741824&c?3221225472^c^r^l:1073741824^c^r^l:c^r^l}function n(e,n,r,l,c,o,i){return e=a(e,a(a(function(e,t,a){return e&t|~e&a}(n,r,l),c),i)),a(t(e,o),n)}function r(e,n,r,l,c,o,i){return e=a(e,a(a(function(e,t,a){return e&a|t&~a}(n,r,l),c),i)),a(t(e,o),n)}function l(e,n,r,l,c,o,i){return e=a(e,a(a(function(e,t,a){return e^t^a}(n,r,l),c),i)),a(t(e,o),n)}function c(e,n,r,l,c,o,i){return e=a(e,a(a(function(e,t,a){return t^(e|~a)}(n,r,l),c),i)),a(t(e,o),n)}function o(e){var t,a="",n="";for(t=0;t<=3;t++)a+=(n="0"+(e>>>8*t&255).toString(16)).substr(n.length-2,2);return a}var i,u,m,s,d,g,p,b,f,w;for(i=function(e){for(var t,a=e.length,n=a+8,r=16*((n-n%64)/64+1),l=Array(r-1),c=0,o=0;o<a;)c=o%4*8,l[t=(o-o%4)/4]=l[t]|e.charCodeAt(o)<<c,o++;return c=o%4*8,l[t=(o-o%4)/4]=l[t]|128<<c,l[r-2]=a<<3,l[r-1]=a>>>29,l}(e=function(e){e=e.replace(/rn/g,"n");for(var t="",a=0;a<e.length;a++){var n=e.charCodeAt(a);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}(e)),p=1732584193,b=4023233417,f=2562383102,w=271733878,u=0;u<i.length;u+=16)m=p,s=b,d=f,g=w,p=n(p,b,f,w,i[u+0],7,3614090360),w=n(w,p,b,f,i[u+1],12,3905402710),f=n(f,w,p,b,i[u+2],17,606105819),b=n(b,f,w,p,i[u+3],22,3250441966),p=n(p,b,f,w,i[u+4],7,4118548399),w=n(w,p,b,f,i[u+5],12,1200080426),f=n(f,w,p,b,i[u+6],17,2821735955),b=n(b,f,w,p,i[u+7],22,4249261313),p=n(p,b,f,w,i[u+8],7,1770035416),w=n(w,p,b,f,i[u+9],12,2336552879),f=n(f,w,p,b,i[u+10],17,4294925233),b=n(b,f,w,p,i[u+11],22,2304563134),p=n(p,b,f,w,i[u+12],7,1804603682),w=n(w,p,b,f,i[u+13],12,4254626195),f=n(f,w,p,b,i[u+14],17,2792965006),p=r(p,b=n(b,f,w,p,i[u+15],22,1236535329),f,w,i[u+1],5,4129170786),w=r(w,p,b,f,i[u+6],9,3225465664),f=r(f,w,p,b,i[u+11],14,643717713),b=r(b,f,w,p,i[u+0],20,3921069994),p=r(p,b,f,w,i[u+5],5,3593408605),w=r(w,p,b,f,i[u+10],9,38016083),f=r(f,w,p,b,i[u+15],14,3634488961),b=r(b,f,w,p,i[u+4],20,3889429448),p=r(p,b,f,w,i[u+9],5,568446438),w=r(w,p,b,f,i[u+14],9,3275163606),f=r(f,w,p,b,i[u+3],14,4107603335),b=r(b,f,w,p,i[u+8],20,1163531501),p=r(p,b,f,w,i[u+13],5,2850285829),w=r(w,p,b,f,i[u+2],9,4243563512),f=r(f,w,p,b,i[u+7],14,1735328473),p=l(p,b=r(b,f,w,p,i[u+12],20,2368359562),f,w,i[u+5],4,4294588738),w=l(w,p,b,f,i[u+8],11,2272392833),f=l(f,w,p,b,i[u+11],16,1839030562),b=l(b,f,w,p,i[u+14],23,4259657740),p=l(p,b,f,w,i[u+1],4,2763975236),w=l(w,p,b,f,i[u+4],11,1272893353),f=l(f,w,p,b,i[u+7],16,4139469664),b=l(b,f,w,p,i[u+10],23,3200236656),p=l(p,b,f,w,i[u+13],4,681279174),w=l(w,p,b,f,i[u+0],11,3936430074),f=l(f,w,p,b,i[u+3],16,3572445317),b=l(b,f,w,p,i[u+6],23,76029189),p=l(p,b,f,w,i[u+9],4,3654602809),w=l(w,p,b,f,i[u+12],11,3873151461),f=l(f,w,p,b,i[u+15],16,530742520),p=c(p,b=l(b,f,w,p,i[u+2],23,3299628645),f,w,i[u+0],6,4096336452),w=c(w,p,b,f,i[u+7],10,1126891415),f=c(f,w,p,b,i[u+14],15,2878612391),b=c(b,f,w,p,i[u+5],21,4237533241),p=c(p,b,f,w,i[u+12],6,1700485571),w=c(w,p,b,f,i[u+3],10,2399980690),f=c(f,w,p,b,i[u+10],15,4293915773),b=c(b,f,w,p,i[u+1],21,2240044497),p=c(p,b,f,w,i[u+8],6,1873313359),w=c(w,p,b,f,i[u+15],10,4264355552),f=c(f,w,p,b,i[u+6],15,2734768916),b=c(b,f,w,p,i[u+13],21,1309151649),p=c(p,b,f,w,i[u+4],6,4149444226),w=c(w,p,b,f,i[u+11],10,3174756917),f=c(f,w,p,b,i[u+2],15,718787259),b=c(b,f,w,p,i[u+9],21,3951481745),p=a(p,m),b=a(b,s),f=a(f,d),w=a(w,g);return(o(p)+o(b)+o(f)+o(w)).toLowerCase()}(e.trim().toLowerCase())+".jpg?d=identicon&s="+t}(x,32):null},[x]));return r.a.createElement("div",{className:"w3-margin-bottom"},i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-container w3-orange"},r.a.createElement("p",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:d,onChange:function(e){return g(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"BGG"),r.a.createElement("input",{type:"text",name:"bggName",value:w,onChange:function(e){return E(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",value:x,onChange:function(e){return C(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Age"),r.a.createElement("input",{type:"number",name:"age",value:v,onChange:function(e){return N(e.target.value)}}))),r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-blue",onClick:function(){a(t.id,{name:d,bggName:w,age:v,email:x}),u(!1)}},"Valid"),r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return u(!1)}},"Cancel"))),!i&&r.a.createElement("div",null,r.a.createElement("div",{className:"w3-bar w3-white",onClick:function(){return u(!0)}},r.a.createElement("span",{onClick:function(){return n(t.id)},className:"w3-bar-item w3-button w3-white w3-xlarge w3-right"},"\xd7"),A&&r.a.createElement("img",{alt:"gravatar",src:A,className:"w3-bar-item w3-circle",style:{width:"85px"}}),!A&&k&&r.a.createElement("img",{alt:"thumbnail",src:k,className:"w3-bar-item w3-circle",style:{width:"85px"}}),r.a.createElement("div",{className:"w3-bar-item"},r.a.createElement("p",null,r.a.createElement("span",{className:"w3-large"},t.name," "),r.a.createElement("span",{className:"w3-badge w3-green"},t.age)),r.a.createElement("p",null,t.bggName?t.bggName:"\xa0"))),t.bggName&&r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return l(t)}},"Fetch"))))}),x=Object(o.b)(function(e,t){return{players:e.bgg.players}},null)(function(e){return r.a.createElement("div",null,e.players.map(function(e,t){return r.a.createElement(j,{key:e.id,player:e})}))});var C=Object(o.b)(function(e,t){return{games:e.bgg.games}},null)(function(e){var t=e.games;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"w3-teal",style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",null,"name"),r.a.createElement("p",null,"min"),r.a.createElement("p",null,"max")),t.map(function(e){return r.a.createElement("div",{key:e.id,style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.min),r.a.createElement("p",null,e.max))})),r.a.createElement("div",{className:"w3-hide-small w3-hide-medium w3-hide-large     w3-white w3-margin-top w3-margin-bottom"},r.a.createElement("table",{className:"w3-table w3-striped w3-bordered w3-hoverable"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"w3-teal"},r.a.createElement("th",null,"name"),r.a.createElement("th",null,"min"),r.a.createElement("th",null,"max"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.min),r.a.createElement("td",null,e.max))})))))}),S=Object(o.b)(function(e,t){return{game:e.bgg.games.find(function(e){return e.id===t.id})}},null)(function(e){var t=e.id,a=e.game;return console.log("id",t),console.log("game",a),a?r.a.createElement("div",{className:"w3-panel w3-pale-green w3-bottombar w3-border-green w3-border"},r.a.createElement("h1",null,a.name),r.a.createElement("h2",null,"min: ".concat(a.min," | max: ").concat(a.max))):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))}),P=Object(o.b)(function(e,t){return{games:e.bgg.games,nbPlayers:e.bgg.players.length}},null)(function(e){var t=r.a.useMemo(function(){return function(e,t){var a=e.filter(function(e){return e.min<=t&&t<=e.max});return 0===a.length?void 0:a[0].id}(e.games,e.nbPlayers)},[e.nbPlayers,e.games.length]);return t?r.a.createElement(S,{id:t}):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))}),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).addPlayer=function(){fetch("https://randomuser.me/api/").then(function(e){return e.json()}).then(function(e){var t=e.results[0],n={id:t.login.uuid,name:t.name.first,bggName:"",age:t.dob.age,color:"blue",fetched:!1,email:"",thumbnail:t.picture.thumbnail};a.props.addPlayerToStore(n)})},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"w3-row w3-light-blue"},r.a.createElement("div",{className:"w3-third w3-container "},r.a.createElement(P,null)),r.a.createElement("div",{className:"w3-third w3-container"},r.a.createElement("button",{className:"w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom",onClick:this.addPlayer},r.a.createElement("span",{className:""},"Add player")),r.a.createElement(x,null)),r.a.createElement("div",{className:"w3-third w3-container "},r.a.createElement(S,{id:"42"})),r.a.createElement("div",{className:"w3-third"},r.a.createElement(C,null)))}}]),t}(n.Component),A={addPlayerToStore:function(e){return{type:"ADD_PLAYER",payload:{player:e}}}},_=Object(o.b)(null,A)(k),D=a(4),L=a(68),T=a(44),R=a(69),Y=a.n(R),G=a(72),I=a(14),F={players:[],games:[]},$={key:"root",storage:Y.a,whitelist:["bgg"]},M=Object(D.c)({bgg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action.type=",t.type),console.log("action.type=",t.payload),t.type){case"ADD_PLAYER":return Object(I.a)(e,function(e){e.players.push(t.payload.player)});case"DELETE_PLAYER":return Object(I.a)(e,function(e){e.players=e.players.filter(function(e){return e.id!==t.payload.playerId})});case"UPDATE_PLAYER":return Object(I.a)(e,function(e){e.players=e.players.map(function(e){return e.id!==t.payload.playerId?e:Object(G.a)({},e,t.payload.playerData)})});case"FETCH_PLAYER_GAMES":return Object(I.a)(e,function(e){e.games=t.payload});default:return e}}}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,J=Object(D.e)(Object(T.a)($,M),B(Object(D.a)(L.a))),U=Object(T.b)(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:J},r.a.createElement(i.a,{loading:null,persistor:U},r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a(125)},94:function(e,t){},96:function(e,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.03fa3eb9.chunk.js.map