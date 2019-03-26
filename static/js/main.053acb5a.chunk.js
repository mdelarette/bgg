(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},114:function(e,t){},116:function(e,t){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(71),c=a.n(l),o=a(8),i=a(73),m=a(74),u=a(75),s=a(81),d=a(76),p=a(82),g=a(77),E=a.n(g),y=(a(101),a(150)),b=a(39),f=a(147),h=a(148),v=a(51),O=a.n(v),j=a(78),w=a(52),P=a(53),x=a.n(P),A=function(e){return{type:"FETCH_PLAYER_GAMES",payload:e}};function N(e,t,a){return-1===a.slice(t+1).findIndex(function(t,a,n){return t.id===e.id})}var k={updatePlayerToStore:function(e,t,a){return console.log("updatePlayerToStore",e,t,a),{type:"UPDATE_PLAYER",payload:{playerId:e,name:t,bggName:a}}},deletePlayerFromStore:function(e){return{type:"DELETE_PLAYER",payload:{playerId:e}}},fetchPlayerGames:function(e){return function(){var t=Object(j.a)(O.a.mark(function t(a,n){var r,l,c,o,i;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fetchPlayerGames",e.id,e.bggName),l=[],t.prev=2,t.next=5,x.a.get("https://www.boardgamegeek.com/xmlapi2/collection?username=".concat(e.bggName));case 5:return c=t.sent,Object(w.parseString)(c.data,function(e,t){r=t.items.item.map(function(e){return{id:e.$.objectid,name:e.name[0]._}})}),l=r.filter(N),o=(o=l.reduce(function(e,t){return e+"".concat(t.id,",")},"")).slice(0,o.length-1),t.next=12,x.a.get("https://www.boardgamegeek.com/xmlapi2/thing?id=".concat(o));case 12:i=t.sent,Object(w.parseString)(i.data,function(e,t){console.log("_games.items=",t.items),r=t.items.item.map(function(e){return{id:e.$.id,name:e.name[0].$.value,min:e.minplayers[0].$.value,max:e.maxplayers[0].$.value}})}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),console.error(t.t0);case 19:a(A(r));case 20:case"end":return t.stop()}},t,null,[[2,16]])}));return function(e,a){return t.apply(this,arguments)}}()}},_=Object(o.b)(null,k)(function(e){var t=e.player,a=e.updatePlayerToStore,n=e.deletePlayerFromStore,l=e.fetchPlayerGames,c=r.a.useState(!1),o=Object(b.a)(c,2),i=o[0],m=o[1],u=r.a.useState(t.name),s=Object(b.a)(u,2),d=s[0],p=s[1],g=r.a.useState(t.bggName),E=Object(b.a)(g,2),v=E[0],O=E[1];return r.a.createElement(f.a,{style:{margin:8,minWidth:300}},i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:8}},"Name: ",r.a.createElement("input",{type:"text",name:"name",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement("div",{style:{margin:8}},"BGG: ",r.a.createElement("input",{type:"text",name:"bggName",value:v,onChange:function(e){return O(e.target.value)}})),r.a.createElement("div",{style:{margin:8,minWidth:300,backgroundColor:"white"}},r.a.createElement(h.a,null,r.a.createElement(y.a,{intent:"primary",text:"Valid",onClick:function(){console.log("valid"),a(t.id,d,v),m(!1)}}),r.a.createElement(y.a,{intent:"none",text:"Cancel",onClick:function(){return m(!1)}})))),!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t.name),r.a.createElement("p",null,t.bggName),r.a.createElement("div",{style:{margin:8,minWidth:300,backgroundColor:"white"}},r.a.createElement(h.a,null,r.a.createElement(y.a,{intent:"primary",text:"Edit",onClick:function(){return m(!0)}}),r.a.createElement(y.a,{intent:"danger",text:"Remove",onClick:function(){return n(t.id)}}),r.a.createElement(y.a,{intent:"none",text:"Fetch",onClick:function(){return l(t)},disabled:!t.bggName})))))}),S=Object(o.b)(function(e,t){return{players:e.bgg.players}},null)(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,e.players.map(function(e,t){return r.a.createElement(_,{key:e.id,player:e})})))}),C=a(149);var T=Object(o.b)(function(e,t){return{games:e.bgg.games}},null)(function(e){var t=e.games;return r.a.createElement(f.a,{style:{margin:16}},r.a.createElement(C.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"name"),r.a.createElement("th",null,"min"),r.a.createElement("th",null,"max"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.min),r.a.createElement("td",null,e.max))}))))}),L=Object(o.b)(function(e,t){return{games:e.bgg.games,nbPlayers:e.bgg.players.length}},null)(function(e){var t=r.a.useMemo(function(){return function(e,t){var a=e.filter(function(e){return e.min<=t&&t<=e.max});return 0===a.length?void 0:a[0]}(e.games,e.nbPlayers)},[e.nbPlayers,e.games.length]);return t?r.a.createElement(f.a,null,r.a.createElement("h1",{className:"bp3-heading"},t.name),r.a.createElement("h2",{className:"bp3-heading"},"min: ".concat(t.min," | max: ").concat(t.max))):r.a.createElement(f.a,null,r.a.createElement("h3",{className:"bp3-heading"},"no game :("))}),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).addPlayer=function(){var e={id:E()(),name:"rename me",bggName:"",age:18,color:"blue",fetched:!1};a.props.addPlayerToStore(e)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"AppElem"},r.a.createElement(y.a,{intent:"primary",text:"Add player",onClick:this.addPlayer,style:{padding:16,margin:16}}),r.a.createElement(S,null)),r.a.createElement("div",{className:"AppElem"},r.a.createElement(L,null)),r.a.createElement("div",{className:"AppElem"},r.a.createElement(T,{className:"AppElem"})))}}]),t}(n.Component),R={addPlayerToStore:function(e){return{type:"ADD_PLAYER",payload:{player:e}}}},F=Object(o.b)(null,R)(D),Y=a(9),G=a(79),I=a(54),$=a(80),W=a.n($),M=a(83),B=a(21),U={players:[],games:[]},H={key:"root",storage:W.a,whitelist:["bgg"]},J=Object(Y.c)({bgg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action.type=",t.type),console.log("action.type=",t.payload),t.type){case"ADD_PLAYER":return Object(B.a)(e,function(e){e.players.push(t.payload.player)});case"DELETE_PLAYER":return Object(B.a)(e,function(e){e.players=e.players.filter(function(e){return e.id!==t.payload.playerId})});case"UPDATE_PLAYER":return Object(B.a)(e,function(e){e.players=e.players.map(function(e){return e.id!==t.payload.playerId?e:Object(M.a)({},e,{name:t.payload.name,bggName:t.payload.bggName})})});case"FETCH_PLAYER_GAMES":return Object(B.a)(e,function(e){e.games=t.payload});default:return e}}}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,X=Object(Y.e)(Object(I.a)(H,J),V(Object(Y.a)(G.a))),q=Object(I.b)(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:X},r.a.createElement(i.a,{loading:null,persistor:q},r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,a){e.exports=a(145)}},[[90,1,2]]]);
//# sourceMappingURL=main.053acb5a.chunk.js.map