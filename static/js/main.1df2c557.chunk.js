(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(31),i=t.n(l),c=t(1),m=t(66),o=t(32),u=t(67),s=t(68),d=t(73),g=t(69),p=t(74),f=t(13),w=t(42),b=t.n(w),y=t(70),E=t(43),h=t(44),v=t.n(h),x=function(e,a,t){return{type:"FETCH_PLAYER_GAMES",payload:{playerId:e,ownership:a,games:t}}};function N(e,a,t){return-1===t.slice(a+1).findIndex(function(a,t,n){return a.gameId===e.gameId})}function O(e,a){return a=a||80,"https://www.gravatar.com/avatar/"+function(e){function a(e,a){return e<<a|e>>>32-a}function t(e,a){var t,n,r,l,i;return r=2147483648&e,l=2147483648&a,i=(1073741823&e)+(1073741823&a),(t=1073741824&e)&(n=1073741824&a)?2147483648^i^r^l:t|n?1073741824&i?3221225472^i^r^l:1073741824^i^r^l:i^r^l}function n(e,n,r,l,i,c,m){return e=t(e,t(t(function(e,a,t){return e&a|~e&t}(n,r,l),i),m)),t(a(e,c),n)}function r(e,n,r,l,i,c,m){return e=t(e,t(t(function(e,a,t){return e&t|a&~t}(n,r,l),i),m)),t(a(e,c),n)}function l(e,n,r,l,i,c,m){return e=t(e,t(t(function(e,a,t){return e^a^t}(n,r,l),i),m)),t(a(e,c),n)}function i(e,n,r,l,i,c,m){return e=t(e,t(t(function(e,a,t){return a^(e|~t)}(n,r,l),i),m)),t(a(e,c),n)}function c(e){var a,t="",n="";for(a=0;a<=3;a++)t+=(n="0"+(e>>>8*a&255).toString(16)).substr(n.length-2,2);return t}var m,o,u,s,d,g,p,f,w,b;for(m=function(e){for(var a,t=e.length,n=t+8,r=16*((n-n%64)/64+1),l=Array(r-1),i=0,c=0;c<t;)i=c%4*8,l[a=(c-c%4)/4]=l[a]|e.charCodeAt(c)<<i,c++;return i=c%4*8,l[a=(c-c%4)/4]=l[a]|128<<i,l[r-2]=t<<3,l[r-1]=t>>>29,l}(e=function(e){e=e.replace(/rn/g,"n");for(var a="",t=0;t<e.length;t++){var n=e.charCodeAt(t);n<128?a+=String.fromCharCode(n):n>127&&n<2048?(a+=String.fromCharCode(n>>6|192),a+=String.fromCharCode(63&n|128)):(a+=String.fromCharCode(n>>12|224),a+=String.fromCharCode(n>>6&63|128),a+=String.fromCharCode(63&n|128))}return a}(e)),p=1732584193,f=4023233417,w=2562383102,b=271733878,o=0;o<m.length;o+=16)u=p,s=f,d=w,g=b,p=n(p,f,w,b,m[o+0],7,3614090360),b=n(b,p,f,w,m[o+1],12,3905402710),w=n(w,b,p,f,m[o+2],17,606105819),f=n(f,w,b,p,m[o+3],22,3250441966),p=n(p,f,w,b,m[o+4],7,4118548399),b=n(b,p,f,w,m[o+5],12,1200080426),w=n(w,b,p,f,m[o+6],17,2821735955),f=n(f,w,b,p,m[o+7],22,4249261313),p=n(p,f,w,b,m[o+8],7,1770035416),b=n(b,p,f,w,m[o+9],12,2336552879),w=n(w,b,p,f,m[o+10],17,4294925233),f=n(f,w,b,p,m[o+11],22,2304563134),p=n(p,f,w,b,m[o+12],7,1804603682),b=n(b,p,f,w,m[o+13],12,4254626195),w=n(w,b,p,f,m[o+14],17,2792965006),p=r(p,f=n(f,w,b,p,m[o+15],22,1236535329),w,b,m[o+1],5,4129170786),b=r(b,p,f,w,m[o+6],9,3225465664),w=r(w,b,p,f,m[o+11],14,643717713),f=r(f,w,b,p,m[o+0],20,3921069994),p=r(p,f,w,b,m[o+5],5,3593408605),b=r(b,p,f,w,m[o+10],9,38016083),w=r(w,b,p,f,m[o+15],14,3634488961),f=r(f,w,b,p,m[o+4],20,3889429448),p=r(p,f,w,b,m[o+9],5,568446438),b=r(b,p,f,w,m[o+14],9,3275163606),w=r(w,b,p,f,m[o+3],14,4107603335),f=r(f,w,b,p,m[o+8],20,1163531501),p=r(p,f,w,b,m[o+13],5,2850285829),b=r(b,p,f,w,m[o+2],9,4243563512),w=r(w,b,p,f,m[o+7],14,1735328473),p=l(p,f=r(f,w,b,p,m[o+12],20,2368359562),w,b,m[o+5],4,4294588738),b=l(b,p,f,w,m[o+8],11,2272392833),w=l(w,b,p,f,m[o+11],16,1839030562),f=l(f,w,b,p,m[o+14],23,4259657740),p=l(p,f,w,b,m[o+1],4,2763975236),b=l(b,p,f,w,m[o+4],11,1272893353),w=l(w,b,p,f,m[o+7],16,4139469664),f=l(f,w,b,p,m[o+10],23,3200236656),p=l(p,f,w,b,m[o+13],4,681279174),b=l(b,p,f,w,m[o+0],11,3936430074),w=l(w,b,p,f,m[o+3],16,3572445317),f=l(f,w,b,p,m[o+6],23,76029189),p=l(p,f,w,b,m[o+9],4,3654602809),b=l(b,p,f,w,m[o+12],11,3873151461),w=l(w,b,p,f,m[o+15],16,530742520),p=i(p,f=l(f,w,b,p,m[o+2],23,3299628645),w,b,m[o+0],6,4096336452),b=i(b,p,f,w,m[o+7],10,1126891415),w=i(w,b,p,f,m[o+14],15,2878612391),f=i(f,w,b,p,m[o+5],21,4237533241),p=i(p,f,w,b,m[o+12],6,1700485571),b=i(b,p,f,w,m[o+3],10,2399980690),w=i(w,b,p,f,m[o+10],15,4293915773),f=i(f,w,b,p,m[o+1],21,2240044497),p=i(p,f,w,b,m[o+8],6,1873313359),b=i(b,p,f,w,m[o+15],10,4264355552),w=i(w,b,p,f,m[o+6],15,2734768916),f=i(f,w,b,p,m[o+13],21,1309151649),p=i(p,f,w,b,m[o+4],6,4149444226),b=i(b,p,f,w,m[o+11],10,3174756917),w=i(w,b,p,f,m[o+2],15,718787259),f=i(f,w,b,p,m[o+9],21,3951481745),p=t(p,u),f=t(f,s),w=t(w,d),b=t(b,g);return(c(p)+c(f)+c(w)+c(b)).toLowerCase()}(e.trim().toLowerCase())+".jpg?d=identicon&s="+a}var j={updatePlayerToStore:function(e,a){return console.log("updatePlayerToStore",e,JSON.stringify(a,null,2)),{type:"UPDATE_PLAYER",payload:{playerId:e,playerData:a}}},deletePlayerFromStore:function(e){return{type:"DELETE_PLAYER",payload:{playerId:e}}},fetchPlayerGames:function(e){return function(){var a=Object(y.a)(b.a.mark(function a(t,n){var r,l,i,c,m,o,u;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("fetchPlayerGames",e.id,e.bggName),l=[],a.prev=2,a.next=5,v.a.get("https://www.boardgamegeek.com/xmlapi2/collection?username=".concat(e.bggName));case 5:if(i=a.sent,Object(E.parseString)(i.data,function(a,t){r=t.items.item.map(function(a,t){return{gameId:a.$.objectid,playerId:e.id,status:a.status[0].$}})}),l=r.filter(N),c=n().bgg.games.map(function(e){return e.id}),!((m=(m=l.map(function(e){return e.gameId})).filter(function(e){return void 0===c.find(function(a){return a===e})})).length>0)){a.next=18;break}return o=(o=m.reduce(function(e,a){return e+"".concat(a,",")},"")).slice(0,o.length-1),a.next=16,v.a.get("https://www.boardgamegeek.com/xmlapi2/thing?id=".concat(o));case 16:u=a.sent,Object(E.parseString)(u.data,function(e,a){r=a.items.item.map(function(e,a){var t={id:e.$.id,type:e.$.type,name:e.name[0].$.value,minage:e.minage[0].$.value,min:e.minplayers[0].$.value,max:e.maxplayers[0].$.value,minplaytime:e.minplaytime[0].$.value,maxplaytime:e.maxplaytime[0].$.value,playingtime:e.playingtime[0].$.value,image:e.image[0],thumbnail:e.thumbnail[0],description:e.description[0].replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/&auml;/g,"\xe4").replace(/&eacute;/g,"\xe9").replace(/&iuml;/g,"\xef").replace(/&ouml;/g,"\xf6").replace(/&uuml;/g,"\xfc").replace(/&ndash;/g,"-").replace(/&szlig;/g,"\xdf").replace(/&#9;/g,"\n").replace(/&#10;/g,"\n").replace(/&rsquo;/g,"\u2019").replace(/&#31;/g,"")};return"boardgameexpansion"===t.type&&(t.extends=e.link.reduce(function(e,a){return"boardgameexpansion"===a.$.type&&e.push(a.$.id),e},[])),t})});case 18:t(x(e.id,l,r)),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(2),console.error(a.t0);case 24:case"end":return a.stop()}},a,null,[[2,21]])}));return function(e,t){return a.apply(this,arguments)}}()}},C=Object(c.b)(null,j)(function(e){var a=e.player,t=e.updatePlayerToStore,n=e.deletePlayerFromStore,l=e.fetchPlayerGames,i=r.a.useState(!1),c=Object(f.a)(i,2),m=c[0],o=c[1],u=r.a.useState(a.name),s=Object(f.a)(u,2),d=s[0],g=s[1],p=r.a.useState(a.bggName),w=Object(f.a)(p,2),b=w[0],y=w[1],E=r.a.useState(a.age),h=Object(f.a)(E,2),v=h[0],x=h[1],N=r.a.useState(a.email),j=Object(f.a)(N,2),C=j[0],S=j[1],k=r.a.useMemo(function(){return C?O(C,85):null},[C]);return r.a.createElement("div",{className:"w3-margin-bottom"},m&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-container w3-orange"},r.a.createElement("p",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:d,onChange:function(e){return g(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"BGG"),r.a.createElement("input",{type:"text",name:"bggName",value:b,onChange:function(e){return y(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",value:C,onChange:function(e){return S(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Age"),r.a.createElement("input",{type:"number",name:"age",value:v,onChange:function(e){return x(e.target.value)}}))),r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-blue",onClick:function(){t(a.id,{name:d,bggName:b,age:v,email:C}),o(!1)}},"Valid"),r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return o(!1)}},"Cancel"))),!m&&r.a.createElement("div",null,r.a.createElement("div",{className:"w3-bar w3-white",onClick:function(){return o(!0)}},r.a.createElement("span",{onClick:function(){return n(a.id)},className:"w3-bar-item w3-button w3-white w3-xlarge w3-right"},"\xd7"),k&&r.a.createElement("img",{alt:"gravatar",src:k,className:"w3-bar-item w3-circle",style:{width:"85px"}}),!k&&a.thumbnail&&r.a.createElement("img",{alt:"thumbnail",src:a.thumbnail,className:"w3-bar-item w3-circle",style:{width:"85px"}}),r.a.createElement("div",{className:"w3-bar-item"},r.a.createElement("p",null,r.a.createElement("span",{className:"w3-large"},a.name," "),r.a.createElement("span",{className:"w3-badge w3-green"},a.age)),r.a.createElement("p",null,a.bggName?a.bggName:"\xa0"))),a.bggName&&r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return l(a)}},"Fetch"))))}),S=Object(c.b)(function(e,a){return{players:e.bgg.players}},null)(function(e){return r.a.createElement("div",null,e.players.map(function(e,a){return r.a.createElement(C,{key:e.id,player:e})}))}),k=t(10),I=Object(k.a)(function(e){return e.bgg.ownership.reduce(function(a,t){if("1"===t.status.own){var n=e.bgg.games.find(function(e){return e.id===t.gameId});n&&!n.extends&&a.push({id:t.gameId,name:n.name})}return a},[]).sort(function(e,a){return e.name.localeCompare(a.name)}).map(function(e){return e.id}).filter($)},function(e){return e}),P=Object(k.a)(function(e){return e.bgg.ownership.reduce(function(e,a){return"1"!==a.status.own&&e.push(a.gameId),e},[])},function(e){return e}),G=Object(k.a)(function(e){return e.bgg.ownership.reduce(function(e,a){return"1"===a.status.own&&e.push(a),e},[])},function(e){return e}),A=function(e,a){return e.bgg.games.filter(function(e){return e.extends&&void 0!==e.extends.find(function(e){return e===a.id})}).map(function(e){return{id:e.id,name:e.name,min:e.min,max:e.max,thumbnail:e.thumbnail}})},D=Object(k.a)(function(e,a){return e.bgg.games.find(function(e){return e.id===a.id})},A,function(e,a){return{name:e.name,thumbnail:e.thumbnail,min:e.min,max:e.max,extensions:a}}),M=Object(k.a)(function(e,a){return e.bgg.games.find(function(e){return e.id===a.id})},A,function(e,a){var t=e.bgg.ownership.filter(function(e){return e.gameId===a.id&&"1"===e.status.own}).map(function(e){return e.playerId});return e.bgg.players.filter(function(e){return t.find(function(a){return a===e.id})})},function(e,a,t){return e?{name:e.name,thumbnail:e.thumbnail,min:e.min,max:e.max,minage:e.minage,description:e.description,extensions:a,owners:t,extends:e.extends}:null}),_=Object(k.a)(function(e,a){return e.bgg.players.length},function(e){return e});function $(e,a,t){return-1===t.slice(a+1).findIndex(function(a,t,n){return a===e})}var L=r.a.createContext({modalGameId:"0",setModalGame:function(){}});var T=Object(c.b)(function(e,a){return{game:D(e,a),nbPlayers:_(e,a)}},null)(function(e){var a=e.id,t=e.game,n=e.odd,l=e.nbPlayers;if(!t)return null;var i="bgg-even";n&&(i="bgg-odd");var c=parseInt(t.min),m=parseInt(t.max),o="w3-blue",u="w3-blue";return l===c&&l===m&&(o=u="w3-green"),(l<c||l>m)&&(o=u="w3-red"),r.a.createElement(L.Consumer,null,function(e){e.modalGameId;var n=e.setModalGame;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-bar "+i,style:{display:"flex",flexDirection:"row",minHeight:"100px"}},r.a.createElement("div",{className:"w3-padding-small",style:{flex:"0 1 100px"},onClick:function(){console.log("GameRow setModalGame:",a),n(a)}},r.a.createElement("img",{alt:"thumbnail",src:t.thumbnail,className:"w3-circle",style:{width:"100px",height:"75px"}})),r.a.createElement("div",{className:"                 w3-large w3-margin-top",style:{flex:"1 1 auto"}},t.name),r.a.createElement("div",{className:"w3-padding-small w3-large w3-margin-top w3-center",style:{flex:"0 1 55px"}},r.a.createElement("span",{className:o},t.min)),r.a.createElement("div",{className:"w3-padding-small w3-large w3-margin-top w3-center",style:{flex:"0 1 55px"}},r.a.createElement("span",{className:u},t.max))),t.extensions&&t.extensions.map(function(e,a){var t="bgg-extension-even";return 1&a&&(t="bgg-extension-odd"),r.a.createElement("div",{key:a,className:"w3-bar "+i+" "+t,style:{display:"flex",flexDirection:"row",minHeight:"75px"}},r.a.createElement("div",{className:"w3-padding-small",style:{flex:"0 1 116px"},onClick:function(){console.log("GameRow extension setModalGame:",e.id),n(e.id)}},r.a.createElement("img",{alt:"thumbnail",src:e.thumbnail,className:"w3-circle",style:{width:"50px",height:"37px",alignSelf:"center"}})),r.a.createElement("div",{className:"                 w3-large w3-margin-top",style:{flex:"1 1 auto"}},r.a.createElement("i",{className:"fas fa-level-up-alt fa-rotate-90"})," ",e.name),r.a.createElement("div",{className:"w3-padding-small w3-small w3-margin-top w3-center",style:{flex:"0 1 55px"}},e.min),r.a.createElement("div",{className:"w3-padding-small w3-small w3-margin-top w3-center",style:{flex:"0 1 55px"}},e.max))}))})});var R=Object(c.b)(function(e,a){return{gameIds:I(e)}},null)(function(e){var a=e.gameIds;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"w3-bar bgg-table-header",style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{className:"w3-padding-small w3-large",style:{flex:"1 1 auto"}},"name (",a.length,")"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"min"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"max")),a.map(function(e,a){return r.a.createElement(T,{key:e,id:e,odd:1&a})})))});var F=Object(c.b)(function(e,a){return{gameIds:P(e)}},null)(function(e){var a=e.gameIds;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"w3-bar w3-teal",style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{className:"w3-padding-small w3-large",style:{flex:"1 1 auto"}},"name (",a.length,")"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"min"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"max")),a.map(function(e,a){return r.a.createElement(T,{key:e,id:e,odd:1&a})})))}),Y=Object(c.b)(function(e,a){return{game:e.bgg.games?e.bgg.games.find(function(e){return e.id===a.id}):null}},null)(function(e){e.id;var a=e.game;return a?r.a.createElement("div",{className:"w3-panel w3-pale-green w3-bottombar w3-border-green w3-border"},r.a.createElement("h1",null,a.name),r.a.createElement("h2",null,"min: ".concat(a.min," | max: ").concat(a.max)),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},a.description),r.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/"+a.id},"View on boardgamegeek.com")):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))}),B=Object(c.b)(function(e,a){return{games:G(e),nbPlayers:e.bgg.players.length}},null)(function(e){var a=r.a.useMemo(function(){return function(e,a){var t=e.filter(function(e){return e.min<=a&&a<=e.max});return 0===t.length?void 0:t[0].id}(e.games,e.nbPlayers)},[e.nbPlayers,e.games]);return a?r.a.createElement(Y,{id:a}):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))}),H=Object(c.b)(function(e,a){return{game:M(e,a)}},null)(function(e){var a=e.id,t=e.game,n=e.setModalGame;if(!t)return r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("));console.log(JSON.stringify(t,null,2));var l=function(e){var a=e.owner,t=a.email?O(a.email,30):null;return t?r.a.createElement("img",{alt:"gravatar",src:t,className:"w3-bar-item w3-circle",style:{width:"30px"}}):!t&&a.thumbnail?r.a.createElement("img",{alt:"thumbnail",src:a.thumbnail,className:"w3-bar-item w3-circle",style:{width:"30px"}}):""};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"w3-container w3-green"},r.a.createElement("span",{onClick:function(){n("0")},className:"w3-button w3-display-topright"},"\xd7"),r.a.createElement("h2",null,t.name)),r.a.createElement("div",{className:"w3-padding w3-pale-green w3-bottombar w3-border-green w3-border"},r.a.createElement("h4",null,r.a.createElement(function(){return t.min===t.max&&"1"===t.min?"Solo game":t.min===t.max&&"2"===t.min?"Duel game":t.min===t.max?"Exactly ".concat(t.min," players"):"Number of players from ".concat(t.min," to ").concat(t.max)},null)),r.a.createElement("h4",null,"Minimum age: ",t.minage),r.a.createElement(function(){return t.owners?t.owners.map(function(e,a){return r.a.createElement(l,{key:a,owner:e})}):""},null),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},t.description)),r.a.createElement("footer",{className:"w3-container w3-green"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/"+a},"View on boardgamegeek.com"))))}),J=function(){return r.a.createElement(L.Consumer,null,function(e){var a=e.modalGameId,t=e.setModalGame;return r.a.createElement("div",{className:"w3-modal",style:{display:"0"===a?"none":"block"}},r.a.createElement("div",{className:"w3-modal-content  w3-transparent"},r.a.createElement(H,{id:a,setModalGame:t})))})},V=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(g.a)(a).call(this,e))).addPlayer=function(){fetch("https://randomuser.me/api/").then(function(e){return e.json()}).then(function(e){var a=e.results[0],n={id:a.login.uuid,name:a.name.first,bggName:"",age:a.dob.age,color:"blue",fetched:!1,email:"",thumbnail:a.picture.thumbnail};t.props.addPlayerToStore(n)})},t.setModalGame=function(e){console.log("App.setModalGame:",e),t.setState(Object(o.a)({},t.state,{modalGameId:e}))},t.state={modalGameId:"0",setModalGame:t.setModalGame},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(L.Provider,{value:this.state},r.a.createElement(J,null),r.a.createElement("div",{className:"w3-row bgg-app"},r.a.createElement("div",{className:"w3-col l8 w3-container "},r.a.createElement(B,null)),r.a.createElement("div",{className:"w3-col l8 w3-container"},r.a.createElement("button",{className:"w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom",onClick:this.addPlayer},r.a.createElement("span",null,"Add player")),r.a.createElement(S,null)),r.a.createElement("div",{className:"w3-col l8"},r.a.createElement(R,null)),r.a.createElement("div",{className:"w3-col l8"},r.a.createElement(F,null))))}}]),a}(r.a.Component),U={addPlayerToStore:function(e){return{type:"ADD_PLAYER",payload:{player:e}}}},W=Object(c.b)(null,U)(V),q=t(4),X=t(71),z=t(45),K=t(72),Q=t.n(K),Z=t(15),ee={players:[{id:1,bggName:"Bratac",email:"bratac@free.fr"},{id:2,bggName:"Wallice35",email:"wallice35@free.fr"}],ownership:[],games:[]},ae={key:"root",storage:Q.a,whitelist:["bgg"]},te=Object(q.c)({bgg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;switch(console.log("action.type=",a.type),console.log("action.payload=",a.payload),a.type){case"ADD_PLAYER":return Object(Z.a)(e,function(e){e.players.push(a.payload.player)});case"DELETE_PLAYER":return Object(Z.a)(e,function(e){e.players=e.players.filter(function(e){return e.id!==a.payload.playerId})});case"UPDATE_PLAYER":return Object(Z.a)(e,function(e){e.players=e.players.map(function(e){return e.id!==a.payload.playerId?e:Object(o.a)({},e,a.payload.playerData)})});case"FETCH_PLAYER_GAMES":return Object(Z.a)(e,function(e){e.games=e.games.concat(a.payload.games),e.ownership=e.ownership.filter(function(e){return e.playerId!==a.payload.playerId}).concat(a.payload.ownership)});default:return e}}}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,re=Object(q.e)(Object(z.a)(ae,te),ne(Object(q.a)(X.a))),le=Object(z.b)(re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,{store:re},r.a.createElement(m.a,{loading:null,persistor:le},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,a,t){e.exports=t(124)},95:function(e,a){},97:function(e,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.1df2c557.chunk.js.map