(this.webpackJsonpbgg=this.webpackJsonpbgg||[]).push([[0],{106:function(e){e.exports=JSON.parse('{"a":"bgg","b":"0.2.3"}')},189:function(e,t){},191:function(e,t){},222:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),c=n(11),l=n.n(c),o=n(15),s=n(153),u=n(296),d=n(152),m=n(137),g=n(298),j=n(144),b=n(138),p=n(19),f=n(300),h=n(276),x=n(302),O=n(293),y=n(294),v=n(63),w=n(275),N=n(295),C=n(285),I=n(146),S=n.n(I),T=n(147),P=n.n(T),F=n(148),k=n.n(F),A=n(149),G=n.n(A),E=n(145),R=n.n(E),D=n(154),B=function(){return Object(a.jsx)(D.a,{children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(v.a,{variant:"h6",children:"Introduction"}),Object(a.jsx)(v.a,{variant:"body1",children:"Starting during a course, learning react"}),Object(a.jsx)(v.a,{variant:"h6",children:"Players page"}),Object(a.jsx)(v.a,{variant:"body1",children:"Explanation tbd"}),Object(a.jsx)(v.a,{variant:"h6",children:"Game page"}),Object(a.jsx)(v.a,{variant:"body1",children:"Explanation tbd"}),Object(a.jsx)(v.a,{variant:"h6",children:"Party page"}),Object(a.jsx)(v.a,{variant:"body1",children:"Explanation tbd"})]})})},M=n(61),_=n.n(M),L=n(104),$=n(105),W=n(81),H=n.n(W),z=n(142),Y=n.n(z),J="UPDATE_PARTY",U="UPDATE_GAMES_FILTER",V="ADD_PLAYER",X="DELETE_PLAYER",q="UPDATE_PLAYER",Q="FETCH_PLAYER_GAMES",K=function(e,t,n){return{type:"FETCH_PLAYER_GAMES",payload:{playerId:e,ownership:t,games:n}}},Z=function(e,t){var n=[];return Object($.parseString)(e.data,(function(e,a){n=a.items.item.map((function(e,n){return{gameId:e.$.objectid,playerId:t,status:e.status[0].$}}))})),n};function ee(e,t,n){return-1===n.slice(t+1).findIndex((function(t,n,a){return t.gameId===e.gameId}))}var te=n(297),ne=Object(h.a)((function(e){return Object(x.a)({form:{marginTop:e.spacing(1),marginBottom:e.spacing(1),padding:e.spacing(1)},formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}})})),ae={updatePartyToStore:function(e){return console.log("updatePartyToStore !!!"),{type:J,payload:{party:e}}}},re=Object(o.b)((function(e,t){return{party:e.bgg.party}}),ae)((function(e){var t=e.party,n=e.updatePartyToStore,r=ne(),c=i.a.useState(t.nbPlayers),l=Object(p.a)(c,2),o=l[0],s=l[1],u=i.a.useState(t.minAge),d=Object(p.a)(u,2),m=d[0],g=d[1],j=i.a.useRef(!0);return i.a.useEffect((function(){return j.current?void(j.current=!1):void n({nbPlayers:o,minAge:m})}),[o,m,n]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(D.a,{elevation:3,className:r.form,children:[Object(a.jsx)(te.a,{type:"number",label:"Number of players",value:o,onChange:function(e){return s(e.target.value)},helperText:"",variant:"outlined",fullWidth:!0,color:"secondary",className:r.formControl}),Object(a.jsx)(te.a,{type:"number",label:"Age of youngest player",value:m,onChange:function(e){return g(e.target.value)},helperText:"",variant:"outlined",fullWidth:!0,color:"secondary",className:r.formControl})]})})})),ie=n(26),ce=(Object(ie.a)((function(e){return e.bgg.ownership.reduce((function(t,n){if("1"===n.status.own){var a=e.bgg.games.find((function(e){return e.id===n.gameId}));a&&!a.extends&&t.push({id:n.gameId,name:a.name})}return t}),[]).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return e.id})).filter(me)}),(function(e){return e})),Object(ie.a)((function(e,t){return e.bgg.ownership.reduce((function(n,a){if(("-1"===t.status||"0"===t.status&&"1"===a.status.own||"1"===t.status&&"1"===a.status.wishlist)&&("0"===t.playerId||t.playerId===a.playerId)){var r=e.bgg.games.find((function(e){return e.id===a.gameId}));r&&!r.extends&&n.push({id:a.gameId,name:r.name})}return n}),[]).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return e.id})).filter(me)}),(function(e){return e}))),le=(Object(ie.a)((function(e){return e.bgg.ownership.reduce((function(e,t){return"1"!==t.status.own&&e.push(t.gameId),e}),[])}),(function(e){return e})),Object(ie.a)((function(e){return e.bgg.ownership.reduce((function(t,n){if("1"===n.status.own){var a=e.bgg.games.find((function(e){return e.id===n.gameId}));a&&!a.extends&&t.push({id:n.gameId,name:a.name,min:a.min,max:a.max,minage:a.minage})}return t}),[])}),(function(e){return e})),function(e,t){return e.bgg.games.filter((function(e){return e.extends&&void 0!==e.extends.find((function(e){return e===t.id}))})).map((function(e){return{id:e.id,name:e.name,min:e.min,max:e.max,thumbnail:e.thumbnail}}))}),oe=Object(ie.a)((function(e,t){return e.bgg.games.find((function(e){return e.id===t.id}))}),le,(function(e,t){return{name:e.name,thumbnail:e.thumbnail,min:e.min,max:e.max,minAge:e.minage,extensions:t}})),se=Object(ie.a)((function(e,t){return e.bgg.games.find((function(e){return e.id===t.id}))}),le,(function(e,t){var n=e.bgg.ownership.filter((function(e){return e.gameId===t.id&&"1"===e.status.own})).map((function(e){return e.playerId}));return e.bgg.players.filter((function(e){return n.find((function(t){return t===e.id}))}))}),(function(e,t,n){return e?{name:e.name,thumbnail:e.thumbnail,image:e.image,min:e.min,max:e.max,minage:e.minage,description:e.description,extensions:t,owners:n,extends:e.extends}:null})),ue=Object(ie.a)((function(e){var t=e.bgg.party.nbPlayers,n=parseInt(e.bgg.party.minAge);return e.bgg.ownership.reduce((function(a,r){if("1"===r.status.own){var i=e.bgg.games.find((function(e){return e.id===r.gameId}));i&&parseInt(i.min)<=t&&t<=parseInt(i.max)&&n>=parseInt(i.minage)&&(a.push(r.gameId),r.extends&&r.extends.length>0&&a.push(r.extends[0]))}return a}),[]).filter(me)}),(function(e){return e})),de=Object(ie.a)((function(e,t){return e.bgg.party.NbPlayers}),(function(e){return e}));Object(ie.a)((function(e,t){return e.bgg.party.minAge}),(function(e){return e}));function me(e,t,n){return-1===n.slice(t+1).findIndex((function(t,n,a){return t===e}))}var ge=n(281),je=n(283),be=n(278),pe=n(277),fe=n(280),he=n(282),xe=n(225),Oe=n(279),ye=i.a.createContext({modalGameId:"0",setModalGameId:function(){}}),ve=Object(h.a)((function(e){return Object(x.a)({avatarCell:{display:"flex",alignItems:"center"},gameName:{paddingLeft:e.spacing(1)}})}));var we=Object(o.b)((function(e,t){return{game:oe(e,t),nbPlayers:de(e,t)}}),null)((function(e){var t=e.id,n=e.game,r=(e.odd,e.nbPlayers,ve());return n?Object(a.jsx)(ye.Consumer,{children:function(e){e.modalGameId;var c=e.setModalGameId;return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(pe.a,{children:[Object(a.jsxs)(be.a,{component:"th",scope:"row",className:r.avatarCell,children:[Object(a.jsx)(xe.a,{src:n.thumbnail,variant:"rounded",onClick:function(){c(t)}}),n.extensions&&n.extensions.length>0&&Object(a.jsx)(Oe.a,{children:n.extensions.map((function(e,t){return Object(a.jsx)(xe.a,{alt:e.name,src:e.thumbnail,onClick:function(){c(e.id)}})}))}),Object(a.jsx)(v.a,{variant:"h6",className:r.gameName,children:n.name})]}),Object(a.jsx)(be.a,{align:"right",children:n.minAge}),Object(a.jsx)(be.a,{align:"right",children:n.min}),Object(a.jsx)(be.a,{align:"right",children:n.max})]},t)})}}):null})),Ne=Object(h.a)((function(e){return Object(x.a)({tableHead:{backgroundColor:e.palette.primary.main},tableHeadRowCell:{color:"white"}})}));var Ce=function(e){var t=e.gameIds,n=Ne();return Object(a.jsx)(fe.a,{component:D.a,children:Object(a.jsxs)(ge.a,{size:"small",children:[Object(a.jsx)(he.a,{className:n.tableHead,children:Object(a.jsxs)(pe.a,{children:[Object(a.jsx)(be.a,{className:n.tableHeadRowCell,children:Object(a.jsxs)(v.a,{variant:"h6",children:["Name (",t.length,")"]})}),Object(a.jsx)(be.a,{className:n.tableHeadRowCell,align:"right",children:"Age"}),Object(a.jsx)(be.a,{className:n.tableHeadRowCell,align:"right",children:"min"}),Object(a.jsx)(be.a,{className:n.tableHeadRowCell,align:"right",children:"max"})]})}),Object(a.jsx)(je.a,{children:t.map((function(e,t){return Object(a.jsx)(we,{id:e,odd:1&t},e)}))})]})})};var Ie=Object(o.b)((function(e,t){return{gameIds:ue(e)}}),null)((function(e){var t=e.gameIds;return Object(a.jsx)(Ce,{gameIds:t})})),Se=0,Te=1,Pe=2,Fe=3;Object(o.b)((function(e,t){return{game:oe(e,t),nbPlayers:de(e,t)}}),null)((function(e){var t=e.id,n=e.game,r=e.odd,c=e.nbPlayers;if(!n)return null;var l="bgg-even";r&&(l="bgg-odd");var o=parseInt(n.min),s=parseInt(n.max),u="w3-blue",d="w3-blue";return c===o&&c===s&&(u=d="w3-green"),(c<o||c>s)&&(u=d="w3-red"),Object(a.jsx)(ye.Consumer,{children:function(e){e.modalGameId;var r=e.setModalGameId;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)("div",{className:"w3-bar "+l,style:{display:"flex",flexDirection:"row",minHeight:"100px"},children:[Object(a.jsx)("div",{className:"w3-padding-small",style:{flex:"0 1 100px"},onClick:function(){console.log("GameRow setModalGameId:",t),r(t)},children:Object(a.jsx)("img",{alt:"thumbnail",src:n.thumbnail,className:"w3-circle",style:{width:"100px",height:"75px"}})}),Object(a.jsx)("div",{className:"                 w3-large w3-margin-top",style:{flex:"1 1 auto"},children:n.name}),Object(a.jsx)("div",{className:"w3-padding-small w3-large w3-margin-top w3-center",style:{flex:"0 1 55px"},children:Object(a.jsx)("span",{children:n.minAge})}),Object(a.jsx)("div",{className:"w3-padding-small w3-large w3-margin-top w3-center",style:{flex:"0 1 55px"},children:Object(a.jsx)("span",{className:u,children:n.min})}),Object(a.jsx)("div",{className:"w3-padding-small w3-large w3-margin-top w3-center",style:{flex:"0 1 55px"},children:Object(a.jsx)("span",{className:d,children:n.max})})]}),n.extensions&&n.extensions.map((function(e,t){var n="bgg-extension-even";return 1&t&&(n="bgg-extension-odd"),Object(a.jsxs)("div",{className:"w3-bar "+l+" "+n,style:{display:"flex",flexDirection:"row",minHeight:"75px"},children:[Object(a.jsx)("div",{className:"w3-padding-small",style:{flex:"0 1 116px"},onClick:function(){console.log("GameRow extension setModalGame:",e.id),r(e.id)},children:Object(a.jsx)("img",{alt:"thumbnail",src:e.thumbnail,className:"w3-circle",style:{width:"50px",height:"37px",alignSelf:"center"}})}),Object(a.jsxs)("div",{className:"                 w3-large w3-margin-top",style:{flex:"1 1 auto"},children:[Object(a.jsx)("i",{className:"fas fa-level-up-alt fa-rotate-90"})," ",e.name]}),Object(a.jsx)("div",{className:"w3-padding-small w3-small w3-margin-top w3-center",style:{flex:"0 1 55px"}}),Object(a.jsx)("div",{className:"w3-padding-small w3-small w3-margin-top w3-center",style:{flex:"0 1 55px"},children:e.min}),Object(a.jsx)("div",{className:"w3-padding-small w3-small w3-margin-top w3-center",style:{flex:"0 1 55px"},children:e.max})]},t)}))]})}})}));var ke=Object(o.b)((function(e,t){return{gameIds:ce(e,t)}}),null)((function(e){var t=e.gameIds;return Object(a.jsx)(Ce,{gameIds:t})})),Ae=n(303),Ge=Object(h.a)((function(e){return Object(x.a)({form:{marginTop:e.spacing(1),marginBottom:e.spacing(1),padding:e.spacing(1)},formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}})})),Ee={updateGamesFilterToStore:function(e){return console.log("updateGamesFilterToStore !!!"),{type:U,payload:{gamesFilter:e}}}},Re=Object(o.b)((function(e,t){return{players:e.bgg.players,gamesFilter:e.bgg.gamesFilter}}),Ee)((function(e){var t=e.players,n=e.gamesFilter,r=e.updateGamesFilterToStore,c=Ge(),l=i.a.useState(n.selectedPlayerId),o=Object(p.a)(l,2),s=o[0],u=o[1],d=i.a.useState(n.filterStatus),m=Object(p.a)(d,2),g=m[0],j=m[1],b=i.a.useRef(!0);return i.a.useEffect((function(){return b.current?void(b.current=!1):void r({selectedPlayerId:s,filterStatus:g})}),[s,g,r]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(D.a,{elevation:3,className:c.form,children:[t.length>1&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(te.a,{select:!0,label:"Owner",value:s,onChange:function(e){u(e.target.value)},helperText:"",variant:"outlined",fullWidth:!0,color:"secondary",className:c.formControl,children:[Object(a.jsx)(Ae.a,{value:"0",children:"All"},"0"),t.map((function(e){return Object(a.jsx)(Ae.a,{value:e.id,children:e.name},e.id)}))]})}),1===t.length&&Object(a.jsx)("span",{children:"one owner no filter"}),t.length>0&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(te.a,{select:!0,label:"Game status",value:g,onChange:function(e){j(e.target.value)},helperText:"",variant:"outlined",fullWidth:!0,color:"secondary",className:c.formControl,children:[Object(a.jsx)(Ae.a,{value:"-1",children:"All"},"-1"),Object(a.jsx)(Ae.a,{value:"0",children:"Owned"},"0"),Object(a.jsx)(Ae.a,{value:"1",children:"Wished"},"1")]})})]}),t.length>0&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(ke,{playerId:s,status:g})})]})})),De=n(301);function Be(e,t){return t=t||80,"https://www.gravatar.com/avatar/"+function(e){function t(e,t){return e<<t|e>>>32-t}function n(e,t){var n,a,r,i,c;return r=2147483648&e,i=2147483648&t,c=(1073741823&e)+(1073741823&t),(n=1073741824&e)&(a=1073741824&t)?2147483648^c^r^i:n|a?1073741824&c?3221225472^c^r^i:1073741824^c^r^i:c^r^i}function a(e,a,r,i,c,l,o){return e=n(e,n(n(function(e,t,n){return e&t|~e&n}(a,r,i),c),o)),n(t(e,l),a)}function r(e,a,r,i,c,l,o){return e=n(e,n(n(function(e,t,n){return e&n|t&~n}(a,r,i),c),o)),n(t(e,l),a)}function i(e,a,r,i,c,l,o){return e=n(e,n(n(function(e,t,n){return e^t^n}(a,r,i),c),o)),n(t(e,l),a)}function c(e,a,r,i,c,l,o){return e=n(e,n(n(function(e,t,n){return t^(e|~n)}(a,r,i),c),o)),n(t(e,l),a)}function l(e){var t,n="",a="";for(t=0;t<=3;t++)n+=(a="0"+(e>>>8*t&255).toString(16)).substr(a.length-2,2);return n}var o,s,u,d,m,g,j,b,p,f;for(o=function(e){for(var t,n=e.length,a=n+8,r=16*((a-a%64)/64+1),i=Array(r-1),c=0,l=0;l<n;)c=l%4*8,i[t=(l-l%4)/4]=i[t]|e.charCodeAt(l)<<c,l++;return c=l%4*8,i[t=(l-l%4)/4]=i[t]|128<<c,i[r-2]=n<<3,i[r-1]=n>>>29,i}(e=function(e){e=e.replace(/rn/g,"n");for(var t="",n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t}(e)),j=1732584193,b=4023233417,p=2562383102,f=271733878,s=0;s<o.length;s+=16)u=j,d=b,m=p,g=f,j=a(j,b,p,f,o[s+0],7,3614090360),f=a(f,j,b,p,o[s+1],12,3905402710),p=a(p,f,j,b,o[s+2],17,606105819),b=a(b,p,f,j,o[s+3],22,3250441966),j=a(j,b,p,f,o[s+4],7,4118548399),f=a(f,j,b,p,o[s+5],12,1200080426),p=a(p,f,j,b,o[s+6],17,2821735955),b=a(b,p,f,j,o[s+7],22,4249261313),j=a(j,b,p,f,o[s+8],7,1770035416),f=a(f,j,b,p,o[s+9],12,2336552879),p=a(p,f,j,b,o[s+10],17,4294925233),b=a(b,p,f,j,o[s+11],22,2304563134),j=a(j,b,p,f,o[s+12],7,1804603682),f=a(f,j,b,p,o[s+13],12,4254626195),p=a(p,f,j,b,o[s+14],17,2792965006),j=r(j,b=a(b,p,f,j,o[s+15],22,1236535329),p,f,o[s+1],5,4129170786),f=r(f,j,b,p,o[s+6],9,3225465664),p=r(p,f,j,b,o[s+11],14,643717713),b=r(b,p,f,j,o[s+0],20,3921069994),j=r(j,b,p,f,o[s+5],5,3593408605),f=r(f,j,b,p,o[s+10],9,38016083),p=r(p,f,j,b,o[s+15],14,3634488961),b=r(b,p,f,j,o[s+4],20,3889429448),j=r(j,b,p,f,o[s+9],5,568446438),f=r(f,j,b,p,o[s+14],9,3275163606),p=r(p,f,j,b,o[s+3],14,4107603335),b=r(b,p,f,j,o[s+8],20,1163531501),j=r(j,b,p,f,o[s+13],5,2850285829),f=r(f,j,b,p,o[s+2],9,4243563512),p=r(p,f,j,b,o[s+7],14,1735328473),j=i(j,b=r(b,p,f,j,o[s+12],20,2368359562),p,f,o[s+5],4,4294588738),f=i(f,j,b,p,o[s+8],11,2272392833),p=i(p,f,j,b,o[s+11],16,1839030562),b=i(b,p,f,j,o[s+14],23,4259657740),j=i(j,b,p,f,o[s+1],4,2763975236),f=i(f,j,b,p,o[s+4],11,1272893353),p=i(p,f,j,b,o[s+7],16,4139469664),b=i(b,p,f,j,o[s+10],23,3200236656),j=i(j,b,p,f,o[s+13],4,681279174),f=i(f,j,b,p,o[s+0],11,3936430074),p=i(p,f,j,b,o[s+3],16,3572445317),b=i(b,p,f,j,o[s+6],23,76029189),j=i(j,b,p,f,o[s+9],4,3654602809),f=i(f,j,b,p,o[s+12],11,3873151461),p=i(p,f,j,b,o[s+15],16,530742520),j=c(j,b=i(b,p,f,j,o[s+2],23,3299628645),p,f,o[s+0],6,4096336452),f=c(f,j,b,p,o[s+7],10,1126891415),p=c(p,f,j,b,o[s+14],15,2878612391),b=c(b,p,f,j,o[s+5],21,4237533241),j=c(j,b,p,f,o[s+12],6,1700485571),f=c(f,j,b,p,o[s+3],10,2399980690),p=c(p,f,j,b,o[s+10],15,4293915773),b=c(b,p,f,j,o[s+1],21,2240044497),j=c(j,b,p,f,o[s+8],6,1873313359),f=c(f,j,b,p,o[s+15],10,4264355552),p=c(p,f,j,b,o[s+6],15,2734768916),b=c(b,p,f,j,o[s+13],21,1309151649),j=c(j,b,p,f,o[s+4],6,4149444226),f=c(f,j,b,p,o[s+11],10,3174756917),p=c(p,f,j,b,o[s+2],15,718787259),b=c(b,p,f,j,o[s+9],21,3951481745),j=n(j,u),b=n(b,d),p=n(p,m),f=n(f,g);return(l(j)+l(b)+l(p)+l(f)).toLowerCase()}(e.trim().toLowerCase())+".jpg?d=identicon&s="+t}var Me=n(143),_e=n.n(Me),Le=n(284),$e=n(286),We=n(287),He=Object(h.a)((function(e){return Object(x.a)({closeButton:{color:e.palette.secondary.main},dialogTitleRoot:{backgroundColor:e.palette.primary.main},dialogContent:{backgroundColor:e.palette.primary.light},dialogActions:{backgroundColor:e.palette.primary.main},dialogTitle:{display:"flex",flexDirection:"row",alignItems:"center",color:"white"},dialogTitleName:{flexGrow:1,paddingLeft:e.spacing(1)}})})),ze=Object(o.b)((function(e,t){return{game:se(e,t)}}),null)((function(e){var t=e.id,n=e.game,r=e.setModalGameId,i=He();if(!n)return null;console.log(JSON.stringify(n,null,2));var c=function(){return n.min===n.max&&"1"===n.min?"Solo game":n.min===n.max&&"2"===n.min?"Duel game":n.min===n.max?"Exactly ".concat(n.min," players"):"Number of players : from ".concat(n.min," to ").concat(n.max)},l=function(){return n.owners?n.owners.map((function(e,t){return Object(a.jsx)(o,{owner:e},t)})):""},o=function(e){var t=e.owner,n=t.email?Be(t.email,30):null;return n?Object(a.jsx)("img",{alt:"gravatar",src:n,className:"w3-bar-item w3-circle",style:{width:"30px"}}):!n&&t.thumbnail?Object(a.jsx)("img",{alt:"thumbnail",src:t.thumbnail,className:"w3-bar-item w3-circle",style:{width:"30px"}}):""};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Le.a,{className:i.dialogTitleRoot,children:Object(a.jsxs)("div",{className:i.dialogTitle,children:[Object(a.jsx)(xe.a,{src:n.thumbnail,variant:"rounded"}),Object(a.jsx)(v.a,{variant:"h6",className:i.dialogTitleName,children:n.name}),Object(a.jsx)(C.a,{className:i.closeButton,onClick:function(){r("0")},children:Object(a.jsx)(_e.a,{})})]})}),Object(a.jsxs)($e.a,{className:i.dialogContent,children:[Object(a.jsx)(v.a,{variant:"h6",children:Object(a.jsx)(c,{})}),Object(a.jsxs)(v.a,{variant:"h6",children:["Minimum age: ",n.minage]}),Object(a.jsx)(l,{}),Object(a.jsx)(v.a,{variant:"body1",style:{whiteSpace:"pre-line"},children:n.description}),Object(a.jsx)("img",{src:n.image,alt:"image illustrating "+n.name,width:"100%"})]}),Object(a.jsxs)(We.a,{className:i.dialogActions,children:[Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"https://boardgamegeek.com/boardgame/"+t,children:"View on boardgamegeek.com"})}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"https://melodice.org/playlist/"+n.name,children:"Melodice.org"})})]})]})})),Ye=function(){return Object(a.jsx)(ye.Consumer,{children:function(e){var t=e.modalGameId,n=e.setModalGameId;return Object(a.jsx)(De.a,{open:"0"!==t,children:Object(a.jsx)(ze,{id:t,setModalGameId:n})})}})},Je=n(288),Ue=n(289),Ve=n(292),Xe=n(291),qe=n(290),Qe=Object(h.a)((function(e){return Object(x.a)({form:{marginTop:e.spacing(1),marginBottom:e.spacing(1),padding:e.spacing(1)},formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}})})),Ke={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit"},Ze={updatePlayerToStore:function(e,t){return console.log("updatePlayerToStore",e,JSON.stringify(t,null,2)),{type:q,payload:{playerId:e,playerData:t}}},deletePlayerFromStore:function(e){return{type:X,payload:{playerId:e}}},fetchPlayerGames:function(e){return function(){var t=Object(L.a)(_.a.mark((function t(n,a){var r,i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fetchPlayerGames",e.id,e.bggName),r=[],i=[],t.next=5,H()("https://www.boardgamegeek.com/xmlapi2/collection?username=".concat(e.bggName)).then(function(){var t=Object(L.a)(_.a.mark((function t(c){var l,o,s,u;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 202===c.code?console.log("we should retry"):r=Z(c,e.id),t.next=3,H.a.get("https://www.boardgamegeek.com/xmlapi2/collection?username=".concat(e.bggName));case 3:if(t.sent,i=r.filter(ee),l=a().bgg.games.map((function(e){return e.id})),!((o=(o=i.map((function(e){return e.gameId}))).filter((function(e){return void 0===l.find((function(t){return t===e}))}))).length>0)){t.next=15;break}return s=(s=o.reduce((function(e,t){return e+"".concat(t,",")}),"")).slice(0,s.length-1),t.next=13,H.a.get("https://www.boardgamegeek.com/xmlapi2/thing?id=".concat(s));case 13:u=t.sent,Object($.parseString)(u.data,(function(e,t){r=t.items.item.map((function(e,t){var n={id:e.$.id,type:e.$.type,name:e.name[0].$.value,minage:e.minage[0].$.value,min:e.minplayers[0].$.value,max:e.maxplayers[0].$.value,minplaytime:e.minplaytime[0].$.value,maxplaytime:e.maxplaytime[0].$.value,playingtime:e.playingtime[0].$.value,image:e.image[0],thumbnail:e.thumbnail[0],description:Y.a.decode(e.description[0])};return"boardgameexpansion"===n.type&&(n.extends=e.link.reduce((function(e,t){return"boardgameexpansion"===t.$.type&&e.push(t.$.id),e}),[])),n}))}));case 15:n(K(e.id,i,r));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)})).then((function(){}));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},et=Object(o.b)(null,Ze)((function(e){var t=e.player,n=e.updatePlayerToStore,r=e.deletePlayerFromStore,c=e.fetchPlayerGames,l=Qe(),o=i.a.useState(!1),s=Object(p.a)(o,2),u=s[0],d=s[1],m=i.a.useState(t.name),g=Object(p.a)(m,2),j=g[0],b=g[1],f=i.a.useState(t.bggName),h=Object(p.a)(f,2),x=h[0],O=h[1],y=i.a.useState(t.age),v=Object(p.a)(y,2),w=v[0],N=v[1],C=i.a.useState(t.email),I=Object(p.a)(C,2),S=I[0],T=I[1],P=i.a.useMemo((function(){return S?Be(S,85):null}),[S]);return Object(a.jsxs)(a.Fragment,{children:[!u&&Object(a.jsxs)(Je.a,{raised:!0,children:[Object(a.jsx)(Ue.a,{title:t.bggName?t.bggName:t.name?t.name:"no name",subheader:t.name?t.name:"",avatar:Object(a.jsx)(xe.a,{src:P||t.thumbnail}),action:Object(a.jsx)(qe.a,{size:"small",onClick:function(){return r(t.id)},children:"Delete"})}),Object(a.jsxs)(Xe.a,{children:[t.age&&Object(a.jsxs)("p",{children:["Age : ",t.age]})," ",!!t.lastFetch&&Object(a.jsxs)("p",{children:["Last fetch:"," ",new Date(t.lastFetch).toLocaleDateString("fr-FR",Ke)]})]}),Object(a.jsxs)(Ve.a,{children:[Object(a.jsx)(qe.a,{size:"small",onClick:function(){return d(!0)},children:"Edit"}),Object(a.jsx)(qe.a,{size:"small",onClick:function(){return c(t)},children:"Fetch"})]})]}),u&&Object(a.jsxs)(Je.a,{raised:!0,children:[Object(a.jsx)(Ue.a,{title:t.bggName?t.bggName:t.name?t.name:"no name",subheader:t.name?t.name:"",avatar:Object(a.jsx)(xe.a,{src:P||t.thumbnail})}),Object(a.jsxs)(Xe.a,{children:[Object(a.jsx)(te.a,{type:"text",label:"BGG login",value:x,onChange:function(e){return O(e.target.value)},helperText:"",variant:"outlined",fullWidth:!0,color:"secondary",className:l.formControl,required:!0}),Object(a.jsx)(te.a,{type:"text",label:"Name",value:j,onChange:function(e){return b(e.target.value)},helperText:"",variant:"outlined",fullWidth:!0,color:"secondary",className:l.formControl}),Object(a.jsx)(te.a,{type:"text",label:"Email",value:S,onChange:function(e){return T(e.target.value)},helperText:"",variant:"outlined",fullWidth:!0,color:"secondary",className:l.formControl}),Object(a.jsx)(te.a,{type:"number",label:"Age",value:w,onChange:function(e){return N(e.target.value)},helperText:"",variant:"outlined",fullWidth:!0,color:"secondary",className:l.formControl})]}),Object(a.jsxs)(Ve.a,{children:[Object(a.jsx)(qe.a,{size:"small",color:"inherit",onClick:function(){b(t.name),O(t.bggName),N(t.age),T(t.email),d(!1)},style:{marginLeft:"auto"},children:"Cancel"}),Object(a.jsx)(qe.a,{size:"small",color:"secondary",variant:"contained",onClick:function(){n(t.id,{name:j,bggName:x,age:w,email:S}),d(!1)},children:"Valid"})]})]})]})})),tt=Object(h.a)((function(e){return Object(x.a)({player:{marginBottom:e.spacing(2)},players:{"&:last-child":{marginTop:e.spacing(2)}}})})),nt=Object(o.b)((function(e,t){return{players:e.bgg.players}}),null)((function(e){var t=tt();return Object(a.jsx)("div",{className:t.players,children:e.players.map((function(e){return Object(a.jsx)("div",{className:t.player,children:Object(a.jsx)(et,{player:e})},e.id)}))})})),at=n(106),rt=Object(h.a)((function(e){return Object(x.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{top:"auto",bottom:0,"& > div":{alignItems:"flex-start"}},grow:{flexGrow:1},canvasesContainer:{position:"absolute"},fab:{bottom:e.spacing(2),right:e.spacing(2),top:"auto",left:"auto",position:"fixed",zIndex:1500}})})),it={addPlayerToStore:function(e){return{type:V,payload:{player:e}}}},ct=Object(o.b)(null,it)((function(e){var t=e.addPlayerToStore,n=rt(),i=Object(r.useState)("0"),c=Object(p.a)(i,2),l=c[0],o=c[1],s=Object(r.useState)(Se),u=Object(p.a)(s,2),d=u[0],m=u[1],g=Object(f.a)("addingPlayer",(function(){fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(e){var n=e.results[0];console.log("addPlayer testNewPlayer",n);var a={id:n.login.uuid,name:n.name.first,bggName:"",age:n.dob.age,color:"blue",lastFetch:null,email:"",thumbnail:n.picture.thumbnail};t(a)}))}),{enabled:!1}),j=(g.isLoading,g.error,g.data,g.isFetching),b=g.refetch;return Object(a.jsxs)(ye.Provider,{value:{modalGameId:l,setModalGameId:o},children:[Object(a.jsx)(Ye,{}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{id:"topBar",position:"static",children:Object(a.jsx)(y.a,{children:Object(a.jsx)(v.a,{variant:"h6",className:n.title,children:"".concat(at.a," - ").concat(at.b)})})}),Object(a.jsxs)(w.a,{maxWidth:"sm",style:{paddingBottom:"64px"},disableGutters:!0,children:[d===Se&&Object(a.jsx)("div",{style:{paddingTop:"8px"},children:Object(a.jsx)(B,{})}),d===Te&&Object(a.jsxs)(w.a,{children:[Object(a.jsx)(N.a,{color:"secondary","aria-label":"add",onClick:function(){b()},className:n.fab,disabled:j,children:Object(a.jsx)(R.a,{})}),Object(a.jsx)(nt,{})]}),d===Pe&&Object(a.jsx)(Re,{}),d===Fe&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(re,{}),Object(a.jsx)(Ie,{})]})]}),Object(a.jsx)(O.a,{id:"bottomBar",position:"fixed",color:"primary",className:n.appBar,children:Object(a.jsxs)(y.a,{children:[Object(a.jsx)("div",{className:n.grow}),Object(a.jsx)(C.a,{color:d===Se?"secondary":"inherit",onClick:function(){return m(Se)},children:Object(a.jsx)(S.a,{})}),Object(a.jsx)(C.a,{color:d===Te?"secondary":"inherit",onClick:function(){return m(Te)},children:Object(a.jsx)(P.a,{})}),Object(a.jsx)(C.a,{color:d===Pe?"secondary":"inherit",onClick:function(){return m(Pe)},children:Object(a.jsx)(k.a,{})}),Object(a.jsx)(C.a,{color:d===Fe?"secondary":"inherit",onClick:function(){return m(Fe)},children:Object(a.jsx)(G.a,{})}),Object(a.jsx)("div",{className:n.grow})]})})]})]})})),lt=n(23),ot=n(150),st=n(107),ut=n(151),dt=n.n(ut),mt=n(62),gt=n(42),jt={players:[{id:1,bggName:"Bratac",name:"Matthias",email:"bratac@free.fr",lastFetch:null},{id:2,bggName:"Wallice35",name:"Caroline",email:"wallice35@free.fr",lastFetch:null}],ownership:[],games:[],party:{nbPlayers:2,minAge:8},gamesFilter:{selectedPlayerId:"0",filterStatus:"-1"}},bt={key:"root",storage:dt.a,whitelist:["bgg"]},pt=Object(lt.c)({bgg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(gt.a)(e,(function(e){e.players.push(t.payload.player)}));case X:return Object(gt.a)(e,(function(e){e.players=e.players.filter((function(e){return e.id!==t.payload.playerId}))}));case q:return Object(gt.a)(e,(function(e){e.players=e.players.map((function(e){return e.id!==t.payload.playerId?e:Object(mt.a)(Object(mt.a)({},e),t.payload.playerData)}))}));case J:return Object(gt.a)(e,(function(e){e.party=t.payload.party}));case U:return Object(gt.a)(e,(function(e){e.gamesFilter=t.payload.gamesFilter}));case Q:return Object(gt.a)(e,(function(e){e.games=e.games.concat(t.payload.games),e.players=e.players.map((function(e){return e.id!==t.payload.playerId?e:Object(mt.a)(Object(mt.a)({},e),{},{lastFetch:(new Date).toString()})})),e.ownership=e.ownership.filter((function(e){return e.playerId!==t.payload.playerId})).concat(t.payload.ownership)}));default:return e}}}),ft=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||lt.d,ht=Object(lt.e)(Object(st.a)(bt,pt),ft(Object(lt.a)(ot.a))),xt=Object(st.b)(ht);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ot=Object(s.a)({palette:{primary:{main:"#4D774E",dark:"#164A41",light:"#9DC88D"},secondary:{main:"#F1B24A"}}},d.frFR),yt=new g.a;l.a.render(Object(a.jsxs)(j.a,{client:yt,children:[Object(a.jsx)(u.a,{theme:Ot,children:Object(a.jsx)(o.a,{store:ht,children:Object(a.jsx)(m.a,{loading:null,persistor:xt,children:Object(a.jsx)(ct,{})})})}),Object(a.jsx)(b.ReactQueryDevtools,{initialIsOpen:!1})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[222,1,2]]]);
//# sourceMappingURL=main.000f91b3.chunk.js.map