(this["webpackJsonpreact-with-typescript"]=this["webpackJsonpreact-with-typescript"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),i=n.n(s),o=(n(14),n(5)),l=(n(15),n(0)),r=function(e){var t=e.people;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsxs)("li",{className:"List",children:[Object(l.jsxs)("div",{className:"List-header",children:[Object(l.jsx)("img",{className:"List-img",src:e.img}),Object(l.jsx)("h2",{children:e.name})]}),Object(l.jsxs)("p",{children:[e.age," years old"]}),Object(l.jsx)("p",{className:"List-note",children:e.note})]})}))})},p=n(9),m=n(4),j=n(7),d=function(e){var t=e.people,n=e.setPeople,c=Object(a.useState)({name:"",age:"",note:"",img:""}),s=Object(o.a)(c,2),i=s[0],r=s[1],d=function(e){r(Object(j.a)(Object(j.a)({},i),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{className:"AddToList",children:[Object(l.jsx)("input",{type:"text",onChange:d,className:"AddToList-input",name:"name",value:i.name,placeholder:"Name"}),Object(l.jsx)("input",{type:"text",onChange:d,className:"AddToList-input",name:"age",value:i.age,placeholder:"Age"}),Object(l.jsx)("input",{type:"text",onChange:d,className:"AddToList-input",name:"img",value:i.img,placeholder:"Image Url"}),Object(l.jsx)("textarea",{onChange:d,className:"AddToList-input",name:"note",value:i.note,placeholder:"Note"}),Object(l.jsx)("button",{onClick:function(){i.name&&i.age&&(n([].concat(Object(p.a)(t),[{name:i.name,age:parseInt(i.age),img:i.img,note:i.note}])),r({name:"",age:"",img:"",note:""}))},className:"AddToList-btn",children:"Add to List"})]})};var g=function(){var e=Object(a.useState)([{name:"LBJ",age:36,img:"https://p.kindpng.com/picc/s/110-1109845_lebron-james-lakers-flex-hd-png-download.png",note:"HI 23"},{name:"KOBE",age:40,img:"https://www.pngitem.com/pimgs/m/1-14685_kobe-png-transparent-png.png",note:"HI 24"}]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"All Start Party"}),Object(l.jsx)(r,{people:n}),Object(l.jsx)(d,{setPeople:c,people:n})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),u()}},[[17,1,2]]]);
//# sourceMappingURL=main.2c834431.chunk.js.map