(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(61),c=t.n(l),i=t(1),m=t(63),o=t(64),u=t(65),s=t(70),d=t(66),g=t(71),p=t(12),f=t(41),w=t.n(f),b=t(67),y=t(42),E=t(43),h=t.n(E),v=function(e,a){return{type:"FETCH_PLAYER_GAMES",payload:{ownership:e,games:a}}};function x(e,a,t){return-1===t.slice(a+1).findIndex(function(a,t,n){return a.gameId===e.gameId})}var N={updatePlayerToStore:function(e,a){return console.log("updatePlayerToStore",e,JSON.stringify(a,null,2)),{type:"UPDATE_PLAYER",payload:{playerId:e,playerData:a}}},deletePlayerFromStore:function(e){return{type:"DELETE_PLAYER",payload:{playerId:e}}},fetchPlayerGames:function(e){return function(){var a=Object(b.a)(w.a.mark(function a(t,n){var r,l,c,i,m;return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("fetchPlayerGames",e.id,e.bggName),l=[],a.prev=2,a.next=5,h.a.get("https://www.boardgamegeek.com/xmlapi2/collection?username=".concat(e.bggName));case 5:return c=a.sent,Object(y.parseString)(c.data,function(a,t){r=t.items.item.map(function(a,t){console.log("_games.items.item[".concat(t,"]="),a);var n={gameId:a.$.objectid,playerId:e.id,status:a.status[0].$};return console.log("games[".concat(t,"]="),JSON.stringify(n,null,2)),n})}),l=r.filter(x),i=(i=l.reduce(function(e,a){return e+"".concat(a.gameId,",")},"")).slice(0,i.length-1),a.next=12,h.a.get("https://www.boardgamegeek.com/xmlapi2/thing?id=".concat(i));case 12:m=a.sent,Object(y.parseString)(m.data,function(e,a){r=a.items.item.map(function(e,a){var t={id:e.$.id,type:e.$.type,name:e.name[0].$.value,minage:e.minage[0].$.value,min:e.minplayers[0].$.value,max:e.maxplayers[0].$.value,minplaytime:e.minplaytime[0].$.value,maxplaytime:e.maxplaytime[0].$.value,playingtime:e.playingtime[0].$.value,image:e.image[0],thumbnail:e.thumbnail[0],description:e.description[0].replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/&eacute;/g,"\xe9").replace(/&#10;/g,"\n")};return"boardgameexpansion"===t.type&&(t.extends=e.link.reduce(function(e,a){return"boardgameexpansion"===a.$.type&&e.push(a.$.id),e},[])),t})}),a.next=19;break;case 16:a.prev=16,a.t0=a.catch(2),console.error(a.t0);case 19:t(v(l,r));case 20:case"end":return a.stop()}},a,null,[[2,16]])}));return function(e,t){return a.apply(this,arguments)}}()}},O=Object(i.b)(null,N)(function(e){var a=e.player,t=e.updatePlayerToStore,n=e.deletePlayerFromStore,l=e.fetchPlayerGames,c=r.a.useState(!1),i=Object(p.a)(c,2),m=i[0],o=i[1],u=r.a.useState(a.name),s=Object(p.a)(u,2),d=s[0],g=s[1],f=r.a.useState(a.bggName),w=Object(p.a)(f,2),b=w[0],y=w[1],E=r.a.useState(a.age),h=Object(p.a)(E,2),v=h[0],x=h[1],N=r.a.useState(a.email),O=Object(p.a)(N,2),j=O[0],C=O[1],S=r.a.useMemo(function(){return j?function(e,a){return a=a||80,"http://www.gravatar.com/avatar/"+function(e){function a(e,a){return e<<a|e>>>32-a}function t(e,a){var t,n,r,l,c;return r=2147483648&e,l=2147483648&a,c=(1073741823&e)+(1073741823&a),(t=1073741824&e)&(n=1073741824&a)?2147483648^c^r^l:t|n?1073741824&c?3221225472^c^r^l:1073741824^c^r^l:c^r^l}function n(e,n,r,l,c,i,m){return e=t(e,t(t(function(e,a,t){return e&a|~e&t}(n,r,l),c),m)),t(a(e,i),n)}function r(e,n,r,l,c,i,m){return e=t(e,t(t(function(e,a,t){return e&t|a&~t}(n,r,l),c),m)),t(a(e,i),n)}function l(e,n,r,l,c,i,m){return e=t(e,t(t(function(e,a,t){return e^a^t}(n,r,l),c),m)),t(a(e,i),n)}function c(e,n,r,l,c,i,m){return e=t(e,t(t(function(e,a,t){return a^(e|~t)}(n,r,l),c),m)),t(a(e,i),n)}function i(e){var a,t="",n="";for(a=0;a<=3;a++)t+=(n="0"+(e>>>8*a&255).toString(16)).substr(n.length-2,2);return t}var m,o,u,s,d,g,p,f,w,b;for(m=function(e){for(var a,t=e.length,n=t+8,r=16*((n-n%64)/64+1),l=Array(r-1),c=0,i=0;i<t;)c=i%4*8,l[a=(i-i%4)/4]=l[a]|e.charCodeAt(i)<<c,i++;return c=i%4*8,l[a=(i-i%4)/4]=l[a]|128<<c,l[r-2]=t<<3,l[r-1]=t>>>29,l}(e=function(e){e=e.replace(/rn/g,"n");for(var a="",t=0;t<e.length;t++){var n=e.charCodeAt(t);n<128?a+=String.fromCharCode(n):n>127&&n<2048?(a+=String.fromCharCode(n>>6|192),a+=String.fromCharCode(63&n|128)):(a+=String.fromCharCode(n>>12|224),a+=String.fromCharCode(n>>6&63|128),a+=String.fromCharCode(63&n|128))}return a}(e)),p=1732584193,f=4023233417,w=2562383102,b=271733878,o=0;o<m.length;o+=16)u=p,s=f,d=w,g=b,p=n(p,f,w,b,m[o+0],7,3614090360),b=n(b,p,f,w,m[o+1],12,3905402710),w=n(w,b,p,f,m[o+2],17,606105819),f=n(f,w,b,p,m[o+3],22,3250441966),p=n(p,f,w,b,m[o+4],7,4118548399),b=n(b,p,f,w,m[o+5],12,1200080426),w=n(w,b,p,f,m[o+6],17,2821735955),f=n(f,w,b,p,m[o+7],22,4249261313),p=n(p,f,w,b,m[o+8],7,1770035416),b=n(b,p,f,w,m[o+9],12,2336552879),w=n(w,b,p,f,m[o+10],17,4294925233),f=n(f,w,b,p,m[o+11],22,2304563134),p=n(p,f,w,b,m[o+12],7,1804603682),b=n(b,p,f,w,m[o+13],12,4254626195),w=n(w,b,p,f,m[o+14],17,2792965006),p=r(p,f=n(f,w,b,p,m[o+15],22,1236535329),w,b,m[o+1],5,4129170786),b=r(b,p,f,w,m[o+6],9,3225465664),w=r(w,b,p,f,m[o+11],14,643717713),f=r(f,w,b,p,m[o+0],20,3921069994),p=r(p,f,w,b,m[o+5],5,3593408605),b=r(b,p,f,w,m[o+10],9,38016083),w=r(w,b,p,f,m[o+15],14,3634488961),f=r(f,w,b,p,m[o+4],20,3889429448),p=r(p,f,w,b,m[o+9],5,568446438),b=r(b,p,f,w,m[o+14],9,3275163606),w=r(w,b,p,f,m[o+3],14,4107603335),f=r(f,w,b,p,m[o+8],20,1163531501),p=r(p,f,w,b,m[o+13],5,2850285829),b=r(b,p,f,w,m[o+2],9,4243563512),w=r(w,b,p,f,m[o+7],14,1735328473),p=l(p,f=r(f,w,b,p,m[o+12],20,2368359562),w,b,m[o+5],4,4294588738),b=l(b,p,f,w,m[o+8],11,2272392833),w=l(w,b,p,f,m[o+11],16,1839030562),f=l(f,w,b,p,m[o+14],23,4259657740),p=l(p,f,w,b,m[o+1],4,2763975236),b=l(b,p,f,w,m[o+4],11,1272893353),w=l(w,b,p,f,m[o+7],16,4139469664),f=l(f,w,b,p,m[o+10],23,3200236656),p=l(p,f,w,b,m[o+13],4,681279174),b=l(b,p,f,w,m[o+0],11,3936430074),w=l(w,b,p,f,m[o+3],16,3572445317),f=l(f,w,b,p,m[o+6],23,76029189),p=l(p,f,w,b,m[o+9],4,3654602809),b=l(b,p,f,w,m[o+12],11,3873151461),w=l(w,b,p,f,m[o+15],16,530742520),p=c(p,f=l(f,w,b,p,m[o+2],23,3299628645),w,b,m[o+0],6,4096336452),b=c(b,p,f,w,m[o+7],10,1126891415),w=c(w,b,p,f,m[o+14],15,2878612391),f=c(f,w,b,p,m[o+5],21,4237533241),p=c(p,f,w,b,m[o+12],6,1700485571),b=c(b,p,f,w,m[o+3],10,2399980690),w=c(w,b,p,f,m[o+10],15,4293915773),f=c(f,w,b,p,m[o+1],21,2240044497),p=c(p,f,w,b,m[o+8],6,1873313359),b=c(b,p,f,w,m[o+15],10,4264355552),w=c(w,b,p,f,m[o+6],15,2734768916),f=c(f,w,b,p,m[o+13],21,1309151649),p=c(p,f,w,b,m[o+4],6,4149444226),b=c(b,p,f,w,m[o+11],10,3174756917),w=c(w,b,p,f,m[o+2],15,718787259),f=c(f,w,b,p,m[o+9],21,3951481745),p=t(p,u),f=t(f,s),w=t(w,d),b=t(b,g);return(i(p)+i(f)+i(w)+i(b)).toLowerCase()}(e.trim().toLowerCase())+".jpg?d=identicon&s="+a}(j,32):null},[j]);return r.a.createElement("div",{className:"w3-margin-bottom"},m&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-container w3-orange"},r.a.createElement("p",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:d,onChange:function(e){return g(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"BGG"),r.a.createElement("input",{type:"text",name:"bggName",value:b,onChange:function(e){return y(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",value:j,onChange:function(e){return C(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Age"),r.a.createElement("input",{type:"number",name:"age",value:v,onChange:function(e){return x(e.target.value)}}))),r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-blue",onClick:function(){t(a.id,{name:d,bggName:b,age:v,email:j}),o(!1)}},"Valid"),r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return o(!1)}},"Cancel"))),!m&&r.a.createElement("div",null,r.a.createElement("div",{className:"w3-bar w3-white",onClick:function(){return o(!0)}},r.a.createElement("span",{onClick:function(){return n(a.id)},className:"w3-bar-item w3-button w3-white w3-xlarge w3-right"},"\xd7"),S&&r.a.createElement("img",{alt:"gravatar",src:S,className:"w3-bar-item w3-circle",style:{width:"85px"}}),!S&&a.thumbnail&&r.a.createElement("img",{alt:"thumbnail",src:a.thumbnail,className:"w3-bar-item w3-circle",style:{width:"85px"}}),r.a.createElement("div",{className:"w3-bar-item"},r.a.createElement("p",null,r.a.createElement("span",{className:"w3-large"},a.name," "),r.a.createElement("span",{className:"w3-badge w3-green"},a.age)),r.a.createElement("p",null,a.bggName?a.bggName:"\xa0"))),a.bggName&&r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return l(a)}},"Fetch"))))}),j=Object(i.b)(function(e,a){return{players:e.bgg.players}},null)(function(e){return r.a.createElement("div",null,e.players.map(function(e,a){return r.a.createElement(O,{key:e.id,player:e})}))});var C=Object(i.b)(function(e,a){return{game:e.bgg.games.find(function(e){return e.id===a.id})}},null)(function(e){var a=e.game;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{className:"w3-bar w3-white",style:{flex:"1 1 80%"},onClick:function(){}},r.a.createElement("img",{alt:"thumbnail",src:a.thumbnail,className:"w3-bar-item w3-circle w3-small",style:{width:"100px",height:"75px"}}),r.a.createElement("div",{className:"w3-bar-item"},r.a.createElement("p",null,r.a.createElement("span",{className:"w3-large"},a.name," ")))),r.a.createElement("div",{className:"w3-bar w3-white",style:{flex:"0 1 10%"}},a.min),r.a.createElement("div",{className:"w3-bar w3-white",style:{flex:"0 1 10%"}},a.max))):null});var S=Object(i.b)(function(e,a){return{gameIds:e.bgg.games.map(function(e){return e.id})}},null)(function(e){var a=e.gameIds;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"w3-teal",style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",{style:{flex:"1 1 80%"}},"name"),r.a.createElement("p",{style:{flex:"0 1 10%"}},"min"),r.a.createElement("p",{style:{flex:"0 1 10%"}},"max")),a.map(function(e){return r.a.createElement(C,{key:e,id:e})})))});var P=Object(i.b)(function(e,a){return{gameIds:e.bgg.ownership.reduce(function(e,a){return"1"!==a.own&&e.push(a.gameId),e},[])}},null)(function(e){var a=e.gameIds;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"w3-teal",style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",{style:{flex:"1 1 80%"}},"name"),r.a.createElement("p",{style:{flex:"0 1 10%"}},"min"),r.a.createElement("p",{style:{flex:"0 1 10%"}},"max")),a.map(function(e){return r.a.createElement(C,{key:e,id:e})})))}),k=Object(i.b)(function(e,a){return{game:e.bgg.games.find(function(e){return e.id===a.id})}},null)(function(e){e.id;var a=e.game;return a?r.a.createElement("div",{className:"w3-panel w3-pale-green w3-bottombar w3-border-green w3-border"},r.a.createElement("h1",null,a.name),r.a.createElement("h2",null,"min: ".concat(a.min," | max: ").concat(a.max)),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},a.description)):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))}),A=Object(i.b)(function(e,a){return{games:e.bgg.games,nbPlayers:e.bgg.players.length}},null)(function(e){var a=r.a.useMemo(function(){return function(e,a){var t=e.filter(function(e){return e.min<=a&&a<=e.max});return 0===t.length?void 0:t[0].id}(e.games,e.nbPlayers)},[e.nbPlayers,e.games.length]);return a?r.a.createElement(k,{id:a}):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))}),_=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).addPlayer=function(){fetch("https://randomuser.me/api/").then(function(e){return e.json()}).then(function(e){var a=e.results[0],n={id:a.login.uuid,name:a.name.first,bggName:"",age:a.dob.age,color:"blue",fetched:!1,email:"",thumbnail:a.picture.thumbnail};t.props.addPlayerToStore(n)})},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"w3-row w3-light-blue"},r.a.createElement("p",{className:"w3-hide-medium w3-hide-large"},"small"),r.a.createElement("p",{className:"w3-hide-small w3-hide-large"},"medium"),r.a.createElement("p",{className:"w3-hide-small w3-hide-medium"},"large"),r.a.createElement("div",{className:"w3-third w3-container "},r.a.createElement(A,null)),r.a.createElement("div",{className:"w3-third w3-container"},r.a.createElement("button",{className:"w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom",onClick:this.addPlayer},r.a.createElement("span",{className:""},"Add player")),r.a.createElement(j,null)),r.a.createElement("div",{className:"w3-third w3-container "},r.a.createElement(k,{id:"42"})),r.a.createElement("div",{className:"w3-third"},r.a.createElement(S,null)),r.a.createElement("div",{className:"w3-third"},r.a.createElement(P,null)))}}]),a}(n.Component),D={addPlayerToStore:function(e){return{type:"ADD_PLAYER",payload:{player:e}}}},I=Object(i.b)(null,D)(_),$=t(4),L=t(68),T=t(44),R=t(69),Y=t.n(R),F=t(72),G=t(14),M={players:[],ownership:[],games:[]},J={key:"root",storage:Y.a,whitelist:["bgg"]},B=Object($.c)({bgg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,a=arguments.length>1?arguments[1]:void 0;switch(console.log("action.type=",a.type),console.log("action.payload=",a.payload),a.type){case"ADD_PLAYER":return Object(G.a)(e,function(e){e.players.push(a.payload.player)});case"DELETE_PLAYER":return Object(G.a)(e,function(e){e.players=e.players.filter(function(e){return e.id!==a.payload.playerId})});case"UPDATE_PLAYER":return Object(G.a)(e,function(e){e.players=e.players.map(function(e){return e.id!==a.payload.playerId?e:Object(F.a)({},e,a.payload.playerData)})});case"FETCH_PLAYER_GAMES":return Object(G.a)(e,function(e){e.games=a.payload.games,e.ownership=a.payload.ownership});default:return e}}}),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,H=Object($.e)(Object(T.a)(J,B),U(Object($.a)(L.a))),V=Object(T.b)(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{store:H},r.a.createElement(m.a,{loading:null,persistor:V},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,a,t){e.exports=t(125)},94:function(e,a){},96:function(e,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.cb7c9f4f.chunk.js.map