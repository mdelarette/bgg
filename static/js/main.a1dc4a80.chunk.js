(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(62),c=t.n(l),i=t(1),o=t(64),m=t(31),u=t(65),s=t(66),d=t(71),g=t(67),p=t(72),f=t(13),w=t(42),b=t.n(w),y=t(68),E=t(43),h=t(44),v=t.n(h),x=function(e,a,t){return{type:"FETCH_PLAYER_GAMES",payload:{playerId:e,ownership:a,games:t}}};function N(e,a,t){return-1===t.slice(a+1).findIndex(function(a,t,n){return a.gameId===e.gameId})}var O={updatePlayerToStore:function(e,a){return console.log("updatePlayerToStore",e,JSON.stringify(a,null,2)),{type:"UPDATE_PLAYER",payload:{playerId:e,playerData:a}}},deletePlayerFromStore:function(e){return{type:"DELETE_PLAYER",payload:{playerId:e}}},fetchPlayerGames:function(e){return function(){var a=Object(y.a)(b.a.mark(function a(t,n){var r,l,c,i,o,m,u;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("fetchPlayerGames",e.id,e.bggName),l=[],a.prev=2,a.next=5,v.a.get("https://www.boardgamegeek.com/xmlapi2/collection?username=".concat(e.bggName));case 5:if(c=a.sent,Object(E.parseString)(c.data,function(a,t){r=t.items.item.map(function(a,t){return{gameId:a.$.objectid,playerId:e.id,status:a.status[0].$}})}),l=r.filter(N),i=n().bgg.games.map(function(e){return e.id}),!((o=(o=l.map(function(e){return e.gameId})).filter(function(e){return void 0===i.find(function(a){return a===e})})).length>0)){a.next=18;break}return m=(m=o.reduce(function(e,a){return e+"".concat(a,",")},"")).slice(0,m.length-1),a.next=16,v.a.get("https://www.boardgamegeek.com/xmlapi2/thing?id=".concat(m));case 16:u=a.sent,Object(E.parseString)(u.data,function(e,a){r=a.items.item.map(function(e,a){"822"===e.$.id&&console.log("_games.items.item[".concat(a,"]="),e);var t={id:e.$.id,type:e.$.type,name:e.name[0].$.value,minage:e.minage[0].$.value,min:e.minplayers[0].$.value,max:e.maxplayers[0].$.value,minplaytime:e.minplaytime[0].$.value,maxplaytime:e.maxplaytime[0].$.value,playingtime:e.playingtime[0].$.value,image:e.image[0],thumbnail:e.thumbnail[0],description:e.description[0].replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/&eacute;/g,"\xe9").replace(/&#10;/g,"\n")};return"boardgameexpansion"===t.type&&(t.extends=e.link.reduce(function(e,a){return"boardgameexpansion"===a.$.type&&e.push(a.$.id),e},[])),t})});case 18:a.next=23;break;case 20:a.prev=20,a.t0=a.catch(2),console.error(a.t0);case 23:t(x(e.id,l,r));case 24:case"end":return a.stop()}},a,null,[[2,20]])}));return function(e,t){return a.apply(this,arguments)}}()}},j=Object(i.b)(null,O)(function(e){var a=e.player,t=e.updatePlayerToStore,n=e.deletePlayerFromStore,l=e.fetchPlayerGames,c=r.a.useState(!1),i=Object(f.a)(c,2),o=i[0],m=i[1],u=r.a.useState(a.name),s=Object(f.a)(u,2),d=s[0],g=s[1],p=r.a.useState(a.bggName),w=Object(f.a)(p,2),b=w[0],y=w[1],E=r.a.useState(a.age),h=Object(f.a)(E,2),v=h[0],x=h[1],N=r.a.useState(a.email),O=Object(f.a)(N,2),j=O[0],C=O[1],I=r.a.useMemo(function(){return j?function(e,a){return a=a||80,"http://www.gravatar.com/avatar/"+function(e){function a(e,a){return e<<a|e>>>32-a}function t(e,a){var t,n,r,l,c;return r=2147483648&e,l=2147483648&a,c=(1073741823&e)+(1073741823&a),(t=1073741824&e)&(n=1073741824&a)?2147483648^c^r^l:t|n?1073741824&c?3221225472^c^r^l:1073741824^c^r^l:c^r^l}function n(e,n,r,l,c,i,o){return e=t(e,t(t(function(e,a,t){return e&a|~e&t}(n,r,l),c),o)),t(a(e,i),n)}function r(e,n,r,l,c,i,o){return e=t(e,t(t(function(e,a,t){return e&t|a&~t}(n,r,l),c),o)),t(a(e,i),n)}function l(e,n,r,l,c,i,o){return e=t(e,t(t(function(e,a,t){return e^a^t}(n,r,l),c),o)),t(a(e,i),n)}function c(e,n,r,l,c,i,o){return e=t(e,t(t(function(e,a,t){return a^(e|~t)}(n,r,l),c),o)),t(a(e,i),n)}function i(e){var a,t="",n="";for(a=0;a<=3;a++)t+=(n="0"+(e>>>8*a&255).toString(16)).substr(n.length-2,2);return t}var o,m,u,s,d,g,p,f,w,b;for(o=function(e){for(var a,t=e.length,n=t+8,r=16*((n-n%64)/64+1),l=Array(r-1),c=0,i=0;i<t;)c=i%4*8,l[a=(i-i%4)/4]=l[a]|e.charCodeAt(i)<<c,i++;return c=i%4*8,l[a=(i-i%4)/4]=l[a]|128<<c,l[r-2]=t<<3,l[r-1]=t>>>29,l}(e=function(e){e=e.replace(/rn/g,"n");for(var a="",t=0;t<e.length;t++){var n=e.charCodeAt(t);n<128?a+=String.fromCharCode(n):n>127&&n<2048?(a+=String.fromCharCode(n>>6|192),a+=String.fromCharCode(63&n|128)):(a+=String.fromCharCode(n>>12|224),a+=String.fromCharCode(n>>6&63|128),a+=String.fromCharCode(63&n|128))}return a}(e)),p=1732584193,f=4023233417,w=2562383102,b=271733878,m=0;m<o.length;m+=16)u=p,s=f,d=w,g=b,p=n(p,f,w,b,o[m+0],7,3614090360),b=n(b,p,f,w,o[m+1],12,3905402710),w=n(w,b,p,f,o[m+2],17,606105819),f=n(f,w,b,p,o[m+3],22,3250441966),p=n(p,f,w,b,o[m+4],7,4118548399),b=n(b,p,f,w,o[m+5],12,1200080426),w=n(w,b,p,f,o[m+6],17,2821735955),f=n(f,w,b,p,o[m+7],22,4249261313),p=n(p,f,w,b,o[m+8],7,1770035416),b=n(b,p,f,w,o[m+9],12,2336552879),w=n(w,b,p,f,o[m+10],17,4294925233),f=n(f,w,b,p,o[m+11],22,2304563134),p=n(p,f,w,b,o[m+12],7,1804603682),b=n(b,p,f,w,o[m+13],12,4254626195),w=n(w,b,p,f,o[m+14],17,2792965006),p=r(p,f=n(f,w,b,p,o[m+15],22,1236535329),w,b,o[m+1],5,4129170786),b=r(b,p,f,w,o[m+6],9,3225465664),w=r(w,b,p,f,o[m+11],14,643717713),f=r(f,w,b,p,o[m+0],20,3921069994),p=r(p,f,w,b,o[m+5],5,3593408605),b=r(b,p,f,w,o[m+10],9,38016083),w=r(w,b,p,f,o[m+15],14,3634488961),f=r(f,w,b,p,o[m+4],20,3889429448),p=r(p,f,w,b,o[m+9],5,568446438),b=r(b,p,f,w,o[m+14],9,3275163606),w=r(w,b,p,f,o[m+3],14,4107603335),f=r(f,w,b,p,o[m+8],20,1163531501),p=r(p,f,w,b,o[m+13],5,2850285829),b=r(b,p,f,w,o[m+2],9,4243563512),w=r(w,b,p,f,o[m+7],14,1735328473),p=l(p,f=r(f,w,b,p,o[m+12],20,2368359562),w,b,o[m+5],4,4294588738),b=l(b,p,f,w,o[m+8],11,2272392833),w=l(w,b,p,f,o[m+11],16,1839030562),f=l(f,w,b,p,o[m+14],23,4259657740),p=l(p,f,w,b,o[m+1],4,2763975236),b=l(b,p,f,w,o[m+4],11,1272893353),w=l(w,b,p,f,o[m+7],16,4139469664),f=l(f,w,b,p,o[m+10],23,3200236656),p=l(p,f,w,b,o[m+13],4,681279174),b=l(b,p,f,w,o[m+0],11,3936430074),w=l(w,b,p,f,o[m+3],16,3572445317),f=l(f,w,b,p,o[m+6],23,76029189),p=l(p,f,w,b,o[m+9],4,3654602809),b=l(b,p,f,w,o[m+12],11,3873151461),w=l(w,b,p,f,o[m+15],16,530742520),p=c(p,f=l(f,w,b,p,o[m+2],23,3299628645),w,b,o[m+0],6,4096336452),b=c(b,p,f,w,o[m+7],10,1126891415),w=c(w,b,p,f,o[m+14],15,2878612391),f=c(f,w,b,p,o[m+5],21,4237533241),p=c(p,f,w,b,o[m+12],6,1700485571),b=c(b,p,f,w,o[m+3],10,2399980690),w=c(w,b,p,f,o[m+10],15,4293915773),f=c(f,w,b,p,o[m+1],21,2240044497),p=c(p,f,w,b,o[m+8],6,1873313359),b=c(b,p,f,w,o[m+15],10,4264355552),w=c(w,b,p,f,o[m+6],15,2734768916),f=c(f,w,b,p,o[m+13],21,1309151649),p=c(p,f,w,b,o[m+4],6,4149444226),b=c(b,p,f,w,o[m+11],10,3174756917),w=c(w,b,p,f,o[m+2],15,718787259),f=c(f,w,b,p,o[m+9],21,3951481745),p=t(p,u),f=t(f,s),w=t(w,d),b=t(b,g);return(i(p)+i(f)+i(w)+i(b)).toLowerCase()}(e.trim().toLowerCase())+".jpg?d=identicon&s="+a}(j,32):null},[j]);return r.a.createElement("div",{className:"w3-margin-bottom"},o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-container w3-orange"},r.a.createElement("p",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:d,onChange:function(e){return g(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"BGG"),r.a.createElement("input",{type:"text",name:"bggName",value:b,onChange:function(e){return y(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",value:j,onChange:function(e){return C(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Age"),r.a.createElement("input",{type:"number",name:"age",value:v,onChange:function(e){return x(e.target.value)}}))),r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-blue",onClick:function(){t(a.id,{name:d,bggName:b,age:v,email:j}),m(!1)}},"Valid"),r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return m(!1)}},"Cancel"))),!o&&r.a.createElement("div",null,r.a.createElement("div",{className:"w3-bar w3-white",onClick:function(){return m(!0)}},r.a.createElement("span",{onClick:function(){return n(a.id)},className:"w3-bar-item w3-button w3-white w3-xlarge w3-right"},"\xd7"),I&&r.a.createElement("img",{alt:"gravatar",src:I,className:"w3-bar-item w3-circle",style:{width:"85px"}}),!I&&a.thumbnail&&r.a.createElement("img",{alt:"thumbnail",src:a.thumbnail,className:"w3-bar-item w3-circle",style:{width:"85px"}}),r.a.createElement("div",{className:"w3-bar-item"},r.a.createElement("p",null,r.a.createElement("span",{className:"w3-large"},a.name," "),r.a.createElement("span",{className:"w3-badge w3-green"},a.age)),r.a.createElement("p",null,a.bggName?a.bggName:"\xa0"))),a.bggName&&r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return l(a)}},"Fetch"))))}),C=Object(i.b)(function(e,a){return{players:e.bgg.players}},null)(function(e){return r.a.createElement("div",null,e.players.map(function(e,a){return r.a.createElement(j,{key:e.id,player:e})}))}),I=t(12),S=Object(I.a)(function(e){return e.bgg.ownership.reduce(function(a,t){if("1"===t.status.own){var n=e.bgg.games.find(function(e){return e.id===t.gameId});n&&!n.extends&&a.push({id:t.gameId,name:n.name})}return a},[]).sort(function(e,a){return e.name.localeCompare(a.name)}).map(function(e){return e.id}).filter(D)},function(e){return e}),k=Object(I.a)(function(e){return e.bgg.ownership.reduce(function(e,a){return"1"!==a.status.own&&e.push(a.gameId),e},[])},function(e){return e}),P=Object(I.a)(function(e){return e.bgg.ownership.reduce(function(e,a){return"1"===a.status.own&&e.push(a),e},[])},function(e){return e}),A=Object(I.a)(function(e,a){return e.bgg.games.find(function(e){return e.id===a.id})},function(e,a){return e.bgg.games.filter(function(e){return e.extends&&void 0!==e.extends.find(function(e){return e===a.id})}).map(function(e){return{id:e.id,name:e.name,min:e.min,max:e.max,thumbnail:e.thumbnail}})},function(e,a){return{name:e.name,thumbnail:e.thumbnail,min:e.min,max:e.max,extensions:a}}),G=Object(I.a)(function(e,a){return e.bgg.players.length},function(e){return e});function D(e,a,t){return-1===t.slice(a+1).findIndex(function(a,t,n){return a===e})}var _=r.a.createContext({modalGameId:"0",setModalGame:function(){}});var M=Object(i.b)(function(e,a){return{game:A(e,a),nbPlayers:G(e,a)}},null)(function(e){var a=e.game,t=e.odd,n=e.nbPlayers;if(!a)return null;var l="bgg-even";t&&(l="bgg-odd");var c=parseInt(a.min),i=parseInt(a.max),o="w3-blue",m="w3-blue";return n===c&&n===i&&(o=m="w3-green"),(n<c||n>i)&&(o=m="w3-red"),r.a.createElement(_.Consumer,null,function(e){e.modalGameId;var t=e.setModalGame;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-bar "+l,style:{display:"flex",flexDirection:"row",minHeight:"100px"}},r.a.createElement("div",{className:"w3-padding-small",style:{flex:"0 1 100px"},onClick:function(){t(a.id)}},r.a.createElement("img",{alt:"thumbnail",src:a.thumbnail,className:"w3-circle",style:{width:"100px",height:"75px"}})),r.a.createElement("div",{className:"                 w3-large w3-margin-top",style:{flex:"1 1 auto"}},a.name),r.a.createElement("div",{className:"w3-padding-small w3-large w3-margin-top w3-center",style:{flex:"0 1 55px"}},r.a.createElement("span",{className:o},a.min)),r.a.createElement("div",{className:"w3-padding-small w3-large w3-margin-top w3-center",style:{flex:"0 1 55px"}},r.a.createElement("span",{className:m},a.max))),a.extensions&&a.extensions.map(function(e,a){var t="bgg-extension-even";return 1&a&&(t="bgg-extension-odd"),r.a.createElement("div",{key:a,className:"w3-bar "+l+" "+t,style:{display:"flex",flexDirection:"row",minHeight:"75px"}},r.a.createElement("div",{className:"w3-padding-small",style:{flex:"0 1 116px"},onClick:function(){}},r.a.createElement("img",{alt:"thumbnail",src:e.thumbnail,className:"w3-circle",style:{width:"50px",height:"37px",alignSelf:"center"}})),r.a.createElement("div",{className:"                 w3-large w3-margin-top",style:{flex:"1 1 auto"}},r.a.createElement("i",{className:"fas fa-level-up-alt fa-rotate-90"})," ",e.name),r.a.createElement("div",{className:"w3-padding-small w3-small w3-margin-top w3-center",style:{flex:"0 1 55px"}},e.min),r.a.createElement("div",{className:"w3-padding-small w3-small w3-margin-top w3-center",style:{flex:"0 1 55px"}},e.max))}))})});var $=Object(i.b)(function(e,a){return{gameIds:S(e)}},null)(function(e){var a=e.gameIds;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"w3-bar bgg-table-header",style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{className:"w3-padding-small w3-large",style:{flex:"1 1 auto"}},"name (",a.length,")"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"min"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"max")),a.map(function(e,a){return r.a.createElement(M,{key:e,id:e,odd:1&a})})))});var L=Object(i.b)(function(e,a){return{gameIds:k(e)}},null)(function(e){var a=e.gameIds;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"w3-bar w3-teal",style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{className:"w3-padding-small w3-large",style:{flex:"1 1 auto"}},"name (",a.length,")"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"min"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"max")),a.map(function(e,a){return r.a.createElement(M,{key:e,id:e,odd:1&a})})))}),T=Object(i.b)(function(e,a){return{game:e.bgg.games?e.bgg.games.find(function(e){return e.id===a.id}):null}},null)(function(e){e.id;var a=e.game;return a?r.a.createElement("div",{className:"w3-panel w3-pale-green w3-bottombar w3-border-green w3-border"},r.a.createElement("h1",null,a.name),r.a.createElement("h2",null,"min: ".concat(a.min," | max: ").concat(a.max)),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},a.description),r.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/"+a.id},"View on boardgamegeek.com")):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))}),R=Object(i.b)(function(e,a){return{games:P(e),nbPlayers:e.bgg.players.length}},null)(function(e){var a=r.a.useMemo(function(){return function(e,a){var t=e.filter(function(e){return e.min<=a&&a<=e.max});return 0===t.length?void 0:t[0].id}(e.games,e.nbPlayers)},[e.nbPlayers,e.games]);return a?r.a.createElement(T,{id:a}):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))}),F=function(){return r.a.createElement(_.Consumer,null,function(e){var a=e.modalGameId,t=e.setModalGame;return r.a.createElement("div",{className:"w3-modal",style:{display:"0"===a?"none":"block"}},r.a.createElement("div",{className:"w3-modal-content"},r.a.createElement("header",{className:"w3-container w3-teal"},r.a.createElement("span",{onClick:function(){console.log("setModalGame:",a),console.log("reset"),t("0")},className:"w3-button w3-display-topright"},"\xd7"),r.a.createElement("h2",null,"Modal Header")),r.a.createElement("div",{className:"w3-container"},r.a.createElement(T,{id:a}),r.a.createElement("footer",{class:"w3-container w3-teal"},r.a.createElement("p",null,"Modal Footer")))))})},Y=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(g.a)(a).call(this,e))).addPlayer=function(){fetch("https://randomuser.me/api/").then(function(e){return e.json()}).then(function(e){var a=e.results[0],n={id:a.login.uuid,name:a.name.first,bggName:"",age:a.dob.age,color:"blue",fetched:!1,email:"",thumbnail:a.picture.thumbnail};t.props.addPlayerToStore(n)})},t.setModalGame=function(e){console.log("App.setModalGame:",e),t.setState(Object(m.a)({},t.state,{modalGameId:e}))},t.state={modalGameId:"42",setModalGame:t.setModalGame},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(_.Provider,{value:this.state},r.a.createElement(F,null),r.a.createElement("div",{className:"w3-row bgg-app"},r.a.createElement("div",{className:"w3-col l8 w3-container "},r.a.createElement(R,null)),r.a.createElement("div",{className:"w3-col l8 w3-container"},r.a.createElement("button",{className:"w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom",onClick:this.addPlayer},r.a.createElement("span",null,"Add player")),r.a.createElement(C,null)),r.a.createElement("div",{className:"w3-col l8"},r.a.createElement($,null)),r.a.createElement("div",{className:"w3-col l8"},r.a.createElement(L,null)),r.a.createElement("div",{className:"w3-col l8 w3-container"},r.a.createElement(T,{id:"42"}))))}}]),a}(r.a.Component),H={addPlayerToStore:function(e){return{type:"ADD_PLAYER",payload:{player:e}}}},B=Object(i.b)(null,H)(Y),J=t(4),U=t(69),V=t(45),W=t(70),X=t.n(W),q=t(15),z={players:[{id:1,bggName:"Bratac"},{id:2,bggName:"Wallice35"}],ownership:[],games:[]},K={key:"root",storage:X.a,whitelist:["bgg"]},Q=Object(J.c)({bgg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(console.log("action.type=",a.type),console.log("action.payload=",a.payload),a.type){case"ADD_PLAYER":return Object(q.a)(e,function(e){e.players.push(a.payload.player)});case"DELETE_PLAYER":return Object(q.a)(e,function(e){e.players=e.players.filter(function(e){return e.id!==a.payload.playerId})});case"UPDATE_PLAYER":return Object(q.a)(e,function(e){e.players=e.players.map(function(e){return e.id!==a.payload.playerId?e:Object(m.a)({},e,a.payload.playerData)})});case"FETCH_PLAYER_GAMES":return Object(q.a)(e,function(e){e.games=e.games.concat(a.payload.games),e.ownership=e.ownership.filter(function(e){return e.playerId!==a.payload.playerId}).concat(a.payload.ownership)});default:return e}}}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,ee=Object(J.e)(Object(V.a)(K,Q),Z(Object(J.a)(U.a))),ae=Object(V.b)(ee);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{store:ee},r.a.createElement(o.a,{loading:null,persistor:ae},r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,a,t){e.exports=t(124)},93:function(e,a){},95:function(e,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.a1dc4a80.chunk.js.map