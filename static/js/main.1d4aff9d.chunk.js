(this.webpackJsonpbgg=this.webpackJsonpbgg||[]).push([[0],{109:function(e,a,t){e.exports=t(193)},133:function(e,a){},135:function(e,a){},160:function(e,a){},193:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),i=t(1),m=t(100),o=t(27),u=t(101),s=t(102),g=t(107),d=t(103),p=t(108),f=t(9),b=t(54),w=t.n(b),y=t(104),E=t(55),h=t(56),v=t.n(h),x=function(e,a,t){return{type:"FETCH_PLAYER_GAMES",payload:{playerId:e,ownership:a,games:t}}};function N(e,a,t){return-1===t.slice(a+1).findIndex((function(a,t,n){return a.gameId===e.gameId}))}var O={updatePartyToStore:function(e){return console.log("updatePartyToStore !!!"),{type:"UPDATE_PARTY",payload:{party:e}}}},j=Object(i.b)((function(e,a){return{party:e.bgg.party}}),O)((function(e){var a=e.party,t=e.updatePartyToStore,n=r.a.useState(a.nbPlayers),l=Object(f.a)(n,2),c=l[0],i=l[1],m=r.a.useState(a.minAge),o=Object(f.a)(m,2),u=o[0],s=o[1],g=r.a.useRef(!0);return r.a.useEffect((function(){return g.current?void(g.current=!1):void t({nbPlayers:c,minAge:u})}),[c,u]),r.a.createElement("div",{className:"w3-margin-bottom"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-container w3-orange"},r.a.createElement("p",null,r.a.createElement("label",null,"Number of players"),r.a.createElement("input",{type:"number",min:"1",name:"nbPlayers",value:c,onChange:function(e){return i(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Age"),r.a.createElement("input",{type:"number",name:"age",value:u,onChange:function(e){return s(e.target.value)}})))))})),P=t(14),S=Object(P.a)((function(e){return e.bgg.ownership.reduce((function(a,t){if("1"===t.status.own){var n=e.bgg.games.find((function(e){return e.id===t.gameId}));n&&!n.extends&&a.push({id:t.gameId,name:n.name})}return a}),[]).sort((function(e,a){return e.name.localeCompare(a.name)})).map((function(e){return e.id})).filter(T)}),(function(e){return e})),C=Object(P.a)((function(e){return e.bgg.ownership.reduce((function(e,a){return"1"!==a.status.own&&e.push(a.gameId),e}),[])}),(function(e){return e})),k=Object(P.a)((function(e){return e.bgg.ownership.reduce((function(a,t){if("1"===t.status.own){var n=e.bgg.games.find((function(e){return e.id===t.gameId}));n&&!n.extends&&a.push({id:t.gameId,name:n.name,min:n.min,max:n.max,minage:n.minage})}return a}),[])}),(function(e){return e})),I=function(e,a){return e.bgg.games.filter((function(e){return e.extends&&void 0!==e.extends.find((function(e){return e===a.id}))})).map((function(e){return{id:e.id,name:e.name,min:e.min,max:e.max,thumbnail:e.thumbnail}}))},D=Object(P.a)((function(e,a){return e.bgg.games.find((function(e){return e.id===a.id}))}),I,(function(e,a){return{name:e.name,thumbnail:e.thumbnail,min:e.min,max:e.max,extensions:a}})),G=Object(P.a)((function(e,a){return e.bgg.games.find((function(e){return e.id===a.id}))}),I,(function(e,a){var t=e.bgg.ownership.filter((function(e){return e.gameId===a.id&&"1"===e.status.own})).map((function(e){return e.playerId}));return e.bgg.players.filter((function(e){return t.find((function(a){return a===e.id}))}))}),(function(e,a,t){return e?{name:e.name,thumbnail:e.thumbnail,min:e.min,max:e.max,minage:e.minage,description:e.description,extensions:a,owners:t,extends:e.extends}:null})),A=Object(P.a)((function(e,a){return e.bgg.players.length}),(function(e){return e}));function T(e,a,t){return-1===t.slice(a+1).findIndex((function(a,t,n){return a===e}))}var _=Object(i.b)((function(e,a){return{game:e.bgg.games?e.bgg.games.find((function(e){return e.id===a.id})):null}}),null)((function(e){e.id;var a=e.game;return a?r.a.createElement("div",{className:"w3-panel w3-pale-green w3-bottombar w3-border-green w3-border"},r.a.createElement("h1",null,a.name),r.a.createElement("h2",null,"min: ".concat(a.min," | max: ").concat(a.max)),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},a.description),r.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/"+a.id},"View on boardgamegeek.com")):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))})),M=Object(i.b)((function(e,a){return{games:k(e),nbPlayers:e.bgg.party.nbPlayers}}),null)((function(e){var a=r.a.useMemo((function(){return function(e,a){var t=e.filter((function(e){return e.min<=a&&a<=e.max}));return 0===t.length?void 0:t[0].id}(e.games,e.nbPlayers)}),[e.nbPlayers,e.games]);return a?r.a.createElement(_,{id:a}):r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("))})),R={Home:0,Players:1,Games:2,Selected:3},$=[{id:R.Home,name:"Menu",icon:"fas fa-home"},{id:R.Players,name:"Players",icon:"fas fa-address-book"},{id:R.Games,name:"Games",icon:"fas fa-dice-d6"},{id:R.Selected,name:"Selected",icon:"fas fa-clipboard-check"}],L=function(e){return r.a.createElement("footer",{className:"w3-container w3-theme-d5 bgg-footer"},$.map((function(a,t){return r.a.createElement("div",{key:t,className:"w3-panel bgg-footer-item "+(a.id===e.page?"selected w3-text-theme":""),onClick:function(t){return e.onClick(t,a.id)}},r.a.createElement("i",{className:a.icon}),r.a.createElement("span",null,a.name))})))},F=r.a.createContext({modalGameId:"0",setModalGame:function(){}});var Y=Object(i.b)((function(e,a){return{game:D(e,a),nbPlayers:A(e,a)}}),null)((function(e){var a=e.id,t=e.game,n=e.odd,l=e.nbPlayers;if(!t)return null;var c="bgg-even";n&&(c="bgg-odd");var i=parseInt(t.min),m=parseInt(t.max),o="w3-blue",u="w3-blue";return l===i&&l===m&&(o=u="w3-green"),(l<i||l>m)&&(o=u="w3-red"),r.a.createElement(F.Consumer,null,(function(e){e.modalGameId;var n=e.setModalGame;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-bar "+c,style:{display:"flex",flexDirection:"row",minHeight:"100px"}},r.a.createElement("div",{className:"w3-padding-small",style:{flex:"0 1 100px"},onClick:function(){console.log("GameRow setModalGame:",a),n(a)}},r.a.createElement("img",{alt:"thumbnail",src:t.thumbnail,className:"w3-circle",style:{width:"100px",height:"75px"}})),r.a.createElement("div",{className:"                 w3-large w3-margin-top",style:{flex:"1 1 auto"}},t.name),r.a.createElement("div",{className:"w3-padding-small w3-large w3-margin-top w3-center",style:{flex:"0 1 55px"}},r.a.createElement("span",{className:o},t.min)),r.a.createElement("div",{className:"w3-padding-small w3-large w3-margin-top w3-center",style:{flex:"0 1 55px"}},r.a.createElement("span",{className:u},t.max))),t.extensions&&t.extensions.map((function(e,a){var t="bgg-extension-even";return 1&a&&(t="bgg-extension-odd"),r.a.createElement("div",{key:a,className:"w3-bar "+c+" "+t,style:{display:"flex",flexDirection:"row",minHeight:"75px"}},r.a.createElement("div",{className:"w3-padding-small",style:{flex:"0 1 116px"},onClick:function(){console.log("GameRow extension setModalGame:",e.id),n(e.id)}},r.a.createElement("img",{alt:"thumbnail",src:e.thumbnail,className:"w3-circle",style:{width:"50px",height:"37px",alignSelf:"center"}})),r.a.createElement("div",{className:"                 w3-large w3-margin-top",style:{flex:"1 1 auto"}},r.a.createElement("i",{className:"fas fa-level-up-alt fa-rotate-90"})," ",e.name),r.a.createElement("div",{className:"w3-padding-small w3-small w3-margin-top w3-center",style:{flex:"0 1 55px"}},e.min),r.a.createElement("div",{className:"w3-padding-small w3-small w3-margin-top w3-center",style:{flex:"0 1 55px"}},e.max))})))}))}));var H=Object(i.b)((function(e,a){return{gameIds:S(e)}}),null)((function(e){var a=e.gameIds;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"w3-bar bgg-table-header",style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{className:"w3-padding-small w3-large",style:{flex:"1 1 auto"}},"name (",a.length,")"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"min"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"max")),a.map((function(e,a){return r.a.createElement(Y,{key:e,id:e,odd:1&a})}))))}));function J(e,a){return a=a||80,"https://www.gravatar.com/avatar/"+function(e){function a(e,a){return e<<a|e>>>32-a}function t(e,a){var t,n,r,l,c;return r=2147483648&e,l=2147483648&a,c=(1073741823&e)+(1073741823&a),(t=1073741824&e)&(n=1073741824&a)?2147483648^c^r^l:t|n?1073741824&c?3221225472^c^r^l:1073741824^c^r^l:c^r^l}function n(e,n,r,l,c,i,m){return e=t(e,t(t(function(e,a,t){return e&a|~e&t}(n,r,l),c),m)),t(a(e,i),n)}function r(e,n,r,l,c,i,m){return e=t(e,t(t(function(e,a,t){return e&t|a&~t}(n,r,l),c),m)),t(a(e,i),n)}function l(e,n,r,l,c,i,m){return e=t(e,t(t(function(e,a,t){return e^a^t}(n,r,l),c),m)),t(a(e,i),n)}function c(e,n,r,l,c,i,m){return e=t(e,t(t(function(e,a,t){return a^(e|~t)}(n,r,l),c),m)),t(a(e,i),n)}function i(e){var a,t="",n="";for(a=0;a<=3;a++)t+=(n="0"+(e>>>8*a&255).toString(16)).substr(n.length-2,2);return t}var m,o,u,s,g,d,p,f,b,w;for(m=function(e){for(var a,t=e.length,n=t+8,r=16*((n-n%64)/64+1),l=Array(r-1),c=0,i=0;i<t;)c=i%4*8,l[a=(i-i%4)/4]=l[a]|e.charCodeAt(i)<<c,i++;return c=i%4*8,l[a=(i-i%4)/4]=l[a]|128<<c,l[r-2]=t<<3,l[r-1]=t>>>29,l}(e=function(e){e=e.replace(/rn/g,"n");for(var a="",t=0;t<e.length;t++){var n=e.charCodeAt(t);n<128?a+=String.fromCharCode(n):n>127&&n<2048?(a+=String.fromCharCode(n>>6|192),a+=String.fromCharCode(63&n|128)):(a+=String.fromCharCode(n>>12|224),a+=String.fromCharCode(n>>6&63|128),a+=String.fromCharCode(63&n|128))}return a}(e)),p=1732584193,f=4023233417,b=2562383102,w=271733878,o=0;o<m.length;o+=16)u=p,s=f,g=b,d=w,p=n(p,f,b,w,m[o+0],7,3614090360),w=n(w,p,f,b,m[o+1],12,3905402710),b=n(b,w,p,f,m[o+2],17,606105819),f=n(f,b,w,p,m[o+3],22,3250441966),p=n(p,f,b,w,m[o+4],7,4118548399),w=n(w,p,f,b,m[o+5],12,1200080426),b=n(b,w,p,f,m[o+6],17,2821735955),f=n(f,b,w,p,m[o+7],22,4249261313),p=n(p,f,b,w,m[o+8],7,1770035416),w=n(w,p,f,b,m[o+9],12,2336552879),b=n(b,w,p,f,m[o+10],17,4294925233),f=n(f,b,w,p,m[o+11],22,2304563134),p=n(p,f,b,w,m[o+12],7,1804603682),w=n(w,p,f,b,m[o+13],12,4254626195),b=n(b,w,p,f,m[o+14],17,2792965006),p=r(p,f=n(f,b,w,p,m[o+15],22,1236535329),b,w,m[o+1],5,4129170786),w=r(w,p,f,b,m[o+6],9,3225465664),b=r(b,w,p,f,m[o+11],14,643717713),f=r(f,b,w,p,m[o+0],20,3921069994),p=r(p,f,b,w,m[o+5],5,3593408605),w=r(w,p,f,b,m[o+10],9,38016083),b=r(b,w,p,f,m[o+15],14,3634488961),f=r(f,b,w,p,m[o+4],20,3889429448),p=r(p,f,b,w,m[o+9],5,568446438),w=r(w,p,f,b,m[o+14],9,3275163606),b=r(b,w,p,f,m[o+3],14,4107603335),f=r(f,b,w,p,m[o+8],20,1163531501),p=r(p,f,b,w,m[o+13],5,2850285829),w=r(w,p,f,b,m[o+2],9,4243563512),b=r(b,w,p,f,m[o+7],14,1735328473),p=l(p,f=r(f,b,w,p,m[o+12],20,2368359562),b,w,m[o+5],4,4294588738),w=l(w,p,f,b,m[o+8],11,2272392833),b=l(b,w,p,f,m[o+11],16,1839030562),f=l(f,b,w,p,m[o+14],23,4259657740),p=l(p,f,b,w,m[o+1],4,2763975236),w=l(w,p,f,b,m[o+4],11,1272893353),b=l(b,w,p,f,m[o+7],16,4139469664),f=l(f,b,w,p,m[o+10],23,3200236656),p=l(p,f,b,w,m[o+13],4,681279174),w=l(w,p,f,b,m[o+0],11,3936430074),b=l(b,w,p,f,m[o+3],16,3572445317),f=l(f,b,w,p,m[o+6],23,76029189),p=l(p,f,b,w,m[o+9],4,3654602809),w=l(w,p,f,b,m[o+12],11,3873151461),b=l(b,w,p,f,m[o+15],16,530742520),p=c(p,f=l(f,b,w,p,m[o+2],23,3299628645),b,w,m[o+0],6,4096336452),w=c(w,p,f,b,m[o+7],10,1126891415),b=c(b,w,p,f,m[o+14],15,2878612391),f=c(f,b,w,p,m[o+5],21,4237533241),p=c(p,f,b,w,m[o+12],6,1700485571),w=c(w,p,f,b,m[o+3],10,2399980690),b=c(b,w,p,f,m[o+10],15,4293915773),f=c(f,b,w,p,m[o+1],21,2240044497),p=c(p,f,b,w,m[o+8],6,1873313359),w=c(w,p,f,b,m[o+15],10,4264355552),b=c(b,w,p,f,m[o+6],15,2734768916),f=c(f,b,w,p,m[o+13],21,1309151649),p=c(p,f,b,w,m[o+4],6,4149444226),w=c(w,p,f,b,m[o+11],10,3174756917),b=c(b,w,p,f,m[o+2],15,718787259),f=c(f,b,w,p,m[o+9],21,3951481745),p=t(p,u),f=t(f,s),b=t(b,g),w=t(w,d);return(i(p)+i(f)+i(b)+i(w)).toLowerCase()}(e.trim().toLowerCase())+".jpg?d=identicon&s="+a}var U=Object(i.b)((function(e,a){return{game:G(e,a)}}),null)((function(e){var a=e.id,t=e.game,n=e.setModalGame;if(!t)return r.a.createElement("div",{className:"w3-margin w3-card w3-yellow"},r.a.createElement("h3",null,"no game :("));console.log(JSON.stringify(t,null,2));var l=function(e){var a=e.owner,t=a.email?J(a.email,30):null;return t?r.a.createElement("img",{alt:"gravatar",src:t,className:"w3-bar-item w3-circle",style:{width:"30px"}}):!t&&a.thumbnail?r.a.createElement("img",{alt:"thumbnail",src:a.thumbnail,className:"w3-bar-item w3-circle",style:{width:"30px"}}):""};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"w3-container w3-green"},r.a.createElement("span",{onClick:function(){n("0")},className:"w3-button w3-display-topright"},"\xd7"),r.a.createElement("h2",null,t.name)),r.a.createElement("div",{className:"w3-padding w3-pale-green w3-bottombar w3-border-green w3-border"},r.a.createElement("h4",null,r.a.createElement((function(){return t.min===t.max&&"1"===t.min?"Solo game":t.min===t.max&&"2"===t.min?"Duel game":t.min===t.max?"Exactly ".concat(t.min," players"):"Number of players from ".concat(t.min," to ").concat(t.max)}),null)),r.a.createElement("h4",null,"Minimum age: ",t.minage),r.a.createElement((function(){return t.owners?t.owners.map((function(e,a){return r.a.createElement(l,{key:a,owner:e})})):""}),null),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},t.description)),r.a.createElement("footer",{className:"w3-container w3-green"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/"+a},"View on boardgamegeek.com"))))})),B=function(){return r.a.createElement(F.Consumer,null,(function(e){var a=e.modalGameId,t=e.setModalGame;return r.a.createElement("div",{className:"w3-modal",style:{display:"0"===a?"none":"block"}},r.a.createElement("div",{className:"w3-modal-content  w3-transparent"},r.a.createElement(U,{id:a,setModalGame:t})))}))},V={updatePlayerToStore:function(e,a){return console.log("updatePlayerToStore",e,JSON.stringify(a,null,2)),{type:"UPDATE_PLAYER",payload:{playerId:e,playerData:a}}},deletePlayerFromStore:function(e){return{type:"DELETE_PLAYER",payload:{playerId:e}}},fetchPlayerGames:function(e){return function(){var a=Object(y.a)(w.a.mark((function a(t,n){var r,l,c,i,m,o,u;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("fetchPlayerGames",e.id,e.bggName),l=[],a.prev=2,a.next=5,v.a.get("https://www.boardgamegeek.com/xmlapi2/collection?username=".concat(e.bggName));case 5:if(c=a.sent,Object(E.parseString)(c.data,(function(a,t){r=t.items.item.map((function(a,t){return{gameId:a.$.objectid,playerId:e.id,status:a.status[0].$}}))})),l=r.filter(N),i=n().bgg.games.map((function(e){return e.id})),!((m=(m=l.map((function(e){return e.gameId}))).filter((function(e){return void 0===i.find((function(a){return a===e}))}))).length>0)){a.next=18;break}return o=(o=m.reduce((function(e,a){return e+"".concat(a,",")}),"")).slice(0,o.length-1),a.next=16,v.a.get("https://www.boardgamegeek.com/xmlapi2/thing?id=".concat(o));case 16:u=a.sent,Object(E.parseString)(u.data,(function(e,a){r=a.items.item.map((function(e,a){var t={id:e.$.id,type:e.$.type,name:e.name[0].$.value,minage:e.minage[0].$.value,min:e.minplayers[0].$.value,max:e.maxplayers[0].$.value,minplaytime:e.minplaytime[0].$.value,maxplaytime:e.maxplaytime[0].$.value,playingtime:e.playingtime[0].$.value,image:e.image[0],thumbnail:e.thumbnail[0],description:e.description[0].replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/&auml;/g,"\xe4").replace(/&eacute;/g,"\xe9").replace(/&iuml;/g,"\xef").replace(/&ouml;/g,"\xf6").replace(/&uuml;/g,"\xfc").replace(/&ndash;/g,"-").replace(/&szlig;/g,"\xdf").replace(/&#9;/g,"\n").replace(/&#10;/g,"\n").replace(/&rsquo;/g,"\u2019").replace(/&#31;/g,"")};return"boardgameexpansion"===t.type&&(t.extends=e.link.reduce((function(e,a){return"boardgameexpansion"===a.$.type&&e.push(a.$.id),e}),[])),t}))}));case 18:t(x(e.id,l,r)),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(2),console.error(a.t0);case 24:case"end":return a.stop()}}),a,null,[[2,21]])})));return function(e,t){return a.apply(this,arguments)}}()}},W=Object(i.b)(null,V)((function(e){var a=e.player,t=e.updatePlayerToStore,n=e.deletePlayerFromStore,l=e.fetchPlayerGames,c=r.a.useState(!1),i=Object(f.a)(c,2),m=i[0],o=i[1],u=r.a.useState(a.name),s=Object(f.a)(u,2),g=s[0],d=s[1],p=r.a.useState(a.bggName),b=Object(f.a)(p,2),w=b[0],y=b[1],E=r.a.useState(a.age),h=Object(f.a)(E,2),v=h[0],x=h[1],N=r.a.useState(a.email),O=Object(f.a)(N,2),j=O[0],P=O[1],S=r.a.useMemo((function(){return j?J(j,85):null}),[j]);return r.a.createElement("div",{className:"w3-margin-bottom"},m&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-container w3-orange"},r.a.createElement("p",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:g,onChange:function(e){return d(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"BGG"),r.a.createElement("input",{type:"text",name:"bggName",value:w,onChange:function(e){return y(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",value:j,onChange:function(e){return P(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",null,"Age"),r.a.createElement("input",{type:"number",name:"age",value:v,onChange:function(e){return x(e.target.value)}}))),r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-blue",onClick:function(){t(a.id,{name:g,bggName:w,age:v,email:j}),o(!1)}},"Valid"),r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return o(!1)}},"Cancel"))),!m&&r.a.createElement("div",null,r.a.createElement("div",{className:"w3-bar w3-white",onClick:function(){return o(!0)}},r.a.createElement("span",{onClick:function(){return n(a.id)},className:"w3-bar-item w3-button w3-white w3-xlarge w3-right"},"\xd7"),S&&r.a.createElement("img",{alt:"gravatar",src:S,className:"w3-bar-item w3-circle",style:{width:"85px"}}),!S&&a.thumbnail&&r.a.createElement("img",{alt:"thumbnail",src:a.thumbnail,className:"w3-bar-item w3-circle",style:{width:"85px"}}),r.a.createElement("div",{className:"w3-bar-item"},r.a.createElement("p",null,r.a.createElement("span",{className:"w3-large"},a.name," "),r.a.createElement("span",{className:"w3-badge w3-green"},a.age)),r.a.createElement("p",null,a.bggName?a.bggName:"\xa0"))),a.bggName&&r.a.createElement("div",{className:"w3-bar"},r.a.createElement("button",{className:"w3-button w3-light-grey",onClick:function(){return l(a)}},"Fetch"))))})),q=Object(i.b)((function(e,a){return{players:e.bgg.players}}),null)((function(e){return r.a.createElement("div",null,e.players.map((function(e,a){return r.a.createElement(W,{key:e.id,player:e})})))}));var X=Object(i.b)((function(e,a){return{gameIds:C(e)}}),null)((function(e){var a=e.gameIds;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"w3-bar w3-teal",style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{className:"w3-padding-small w3-large",style:{flex:"1 1 auto"}},"name (",a.length,")"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"min"),r.a.createElement("div",{className:"w3-padding-small w3-large w3-center",style:{flex:"0 1 55px"}},"max")),a.map((function(e,a){return r.a.createElement(Y,{key:e,id:e,odd:1&a})}))))})),z=t(57);function K(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var Q=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(g.a)(this,Object(d.a)(a).call(this,e))).addPlayer=function(){fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(e){var a=e.results[0],n={id:a.login.uuid,name:a.name.first,bggName:"",age:a.dob.age,color:"blue",fetched:!1,email:"",thumbnail:a.picture.thumbnail};t.props.addPlayerToStore(n)}))},t.handlePageChange=function(e,a){console.log("changing to page : ",a),t.state.page!==a&&t.setState({page:a})},t.setModalGame=function(e){console.log("App.setModalGame:",e),t.setState(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?K(t,!0).forEach((function(a){Object(o.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},t.state,{modalGameId:e}))},t.state={modalGameId:"0",setModalGame:t.setModalGame,page:R.Home},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.page;return r.a.createElement(F.Provider,{value:this.state},r.a.createElement(B,null),r.a.createElement("div",{className:"bgg-app"},r.a.createElement("header",{className:"w3-container w3-theme-d5 bgg-header"},z.a," - ",z.b),r.a.createElement("div",{className:"w3-row bgg-body"},e===R.Home&&r.a.createElement("div",{className:"w3-col l8 w3-container "},"Home"),e===R.Selected&&r.a.createElement("div",{className:"w3-col l8 w3-container "},r.a.createElement(j,null),r.a.createElement(M,null)),e===R.Players&&r.a.createElement("div",{className:"w3-col l8 w3-container "},r.a.createElement("button",{className:"w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom",onClick:this.addPlayer},r.a.createElement("span",null,"Add player")),r.a.createElement(q,null)),e===R.Games&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-col l8"},r.a.createElement("span",null,"TODO if more than one owner add a filter")),r.a.createElement("div",{className:"w3-col l8"},r.a.createElement("span",null,"tab for owned and wished games")),r.a.createElement("div",{className:"w3-col l8"},r.a.createElement(H,null)),r.a.createElement("div",{className:"w3-col l8"},r.a.createElement(X,null)))),r.a.createElement(L,{page:this.state.page,onClick:this.handlePageChange})))}}]),a}(r.a.Component),Z={addPlayerToStore:function(e){return{type:"ADD_PLAYER",payload:{player:e}}}},ee=Object(i.b)(null,Z)(Q),ae=t(6),te=t(105),ne=t(58),re=t(106),le=t.n(re),ce=t(18);function ie(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function me(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ie(t,!0).forEach((function(a){Object(o.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var oe={players:[{id:1,bggName:"Bratac",email:"bratac@free.fr"},{id:2,bggName:"Wallice35",email:"wallice35@free.fr"}],ownership:[],games:[],party:{nbPlayers:2,minAge:8}},ue={key:"root",storage:le.a,whitelist:["bgg"]},se=Object(ae.c)({bgg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PLAYER":return Object(ce.a)(e,(function(e){e.players.push(a.payload.player)}));case"DELETE_PLAYER":return Object(ce.a)(e,(function(e){e.players=e.players.filter((function(e){return e.id!==a.payload.playerId}))}));case"UPDATE_PLAYER":return Object(ce.a)(e,(function(e){e.players=e.players.map((function(e){return e.id!==a.payload.playerId?e:me({},e,{},a.payload.playerData)}))}));case"UPDATE_PARTY":return Object(ce.a)(e,(function(e){e.party=a.payload.party}));case"FETCH_PLAYER_GAMES":return Object(ce.a)(e,(function(e){e.games=e.games.concat(a.payload.games),e.ownership=e.ownership.filter((function(e){return e.playerId!==a.payload.playerId})).concat(a.payload.ownership)}));default:return e}}}),ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,de=Object(ae.e)(Object(ne.a)(ue,se),ge(Object(ae.a)(te.a))),pe=Object(ne.b)(de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{store:de},r.a.createElement(m.a,{loading:null,persistor:pe},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e){e.exports=JSON.parse('{"a":"bgg","b":"0.1.1"}')}},[[109,1,2]]]);
//# sourceMappingURL=main.1d4aff9d.chunk.js.map