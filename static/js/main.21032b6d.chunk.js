(this.webpackJsonpcat=this.webpackJsonpcat||[]).push([[0],{40:function(n,e,t){},41:function(n,e,t){},42:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var i,c,a=t(1),r=t.n(a),o=t(21),s=t.n(o),d=(t(40),t.p,t(41),t(5)),h=t(15),l=t(12),b=(t(42),{mobile:"770px",tabletS:"1023px",tabletM:"1220px",tabletL:"1280px",laptop:"1460px",dexktop:"1700px"}),p=t(16),j=t.p+"static/media/paw.89233a66.png",u=t(4),x=l.a.div(i||(i=Object(h.a)(["\n    width: 250px;\n    height: 250px;\n    font-size: 5em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    @media screen and (max-width: ",") {\n        width: 100px;\n        height: 100px;\n    }\n    overflow: visible;\n    \n"])),b.mobile),m=Object(l.a)(p.animated.div)(c||(c=Object(h.a)(["\n    width: 200px;\n    height:200px;\n    display: block;\n    background: url(",");\n    background-size: cover;\n    \n    @media screen and (max-width: ",") {\n        width: 50px;\n        height: 50px;\n    }\n"])),j,b.mobile);var g,f,O=function(){var n=Object(p.useSpring)({from:{y:30},to:{y:0},loop:!0,delay:1e3});return Object(u.jsx)("div",{children:Object(u.jsx)(x,{children:Object(u.jsx)(m,{style:n})})})},v=l.a.div(g||(g=Object(h.a)(["\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    font-size: 5em;\n    display: flex;\n    align-items: center;\n    @media screen and (max-width: ",") {\n        height: 90vh;\n        font-size: 2em;\n    }\n"])),b.mobile),w=l.a.div(f||(f=Object(h.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 1300px;\n    height: 100%;\n    background: skyblue;\n    margin: 0 auto;\n    @media screen and (max-width: ",") {\n        width: 100%;\n        height: 80%;\n    }\n    cursor: pointer;\n"])),b.mobile);var y=function(){var n=Object(a.useState)(),e=Object(d.a)(n,2),t=e[0],i=e[1],c=Object(a.useState)(!1),r=Object(d.a)(c,2),o=r[0],s=r[1],h=function(){fetch("https://api.thecatapi.com/v1/images/search").then((function(n){return n.json()})).then((function(n){return i(n[0].url)})),!1===o&&s(!0)},l=Object(p.useSpring)({from:{opacity:0},to:{opacity:1}});return Object(u.jsx)(v,{children:Object(u.jsxs)(w,{onClick:function(){h()},children:[o?null:Object(u.jsxs)("div",{children:["click",Object(u.jsx)(O,{})]}),Object(u.jsx)(p.animated.img,{style:l,src:t})]})})};var k=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(y,{})})},S=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.21032b6d.chunk.js.map