(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{24:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=(t(26),t(21)),r=t.n(n),o=(t(30),t(5)),m=t(12),s=t(39),u=t(10);var i=function(e){var a=Object(c.useState)(e.money),t=Object(o.a)(a,2),n=t[0],r=(t[1],Object(c.useState)(4)),i=Object(o.a)(r,2),E=i[0],v=i[1],b=Object(c.useState)("dollar"),d=Object(o.a)(b,2),p=d[0],N=d[1],f=Object(c.useState)(4),O=Object(o.a)(f,2),j=O[0],h=O[1],w=Object(c.useState)("dollar"),y=Object(o.a)(w,2),g=y[0],k=y[1],S=Object(c.useState)(),C=Object(o.a)(S,2),x=C[0],G=C[1],L=Object(c.useState)(e.results),T=Object(o.a)(L,2),A=T[0],B=T[1],F=Object(c.useState)(!1),U=Object(o.a)(F,2),V=U[0],J=U[1];function W(e){var a=e.target.value,t=A.filter((function(e,t){return t!==a}));B(Object(m.a)(t))}var z="";return V&&(z=l.a.createElement("div",{className:"row"},A.map((function(e,a){return l.a.createElement("div",{key:a,className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("label",null,"#",a+1),l.a.createElement("br",null),l.a.createElement("p",null,"From ",p," To ",g),l.a.createElement("br",null),l.a.createElement("p",null,x,"=",e)),l.a.createElement("div",{className:"col-4"},l.a.createElement("button",{onClick:W,value:a},"X")))})))),l.a.createElement("div",{className:"container App"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"}),l.a.createElement("div",{className:"box col-4"},l.a.createElement("h1",null,"Exchange"),l.a.createElement(s.a,{className:"row"},l.a.createElement(s.a.Label,{className:"col-3"},"From: "),l.a.createElement(s.a.Group,{className:"col-4"},l.a.createElement(s.a.Control,{as:"select",id:"fromSelect",onChange:function(e){var a=e.target.value;n.forEach((function(e){e.value.toString()===a&&N(e.type)})),v(a)}},n.map((function(e,a){return l.a.createElement("option",{key:a,value:e.value},e.type)})))),l.a.createElement(s.a.Group,{className:"col-5"},l.a.createElement(s.a.Control,{type:"number",onChange:function(e){var a=e.target.value;G(a)}})),l.a.createElement(s.a.Label,{className:"col-3"},"To: "),l.a.createElement(s.a.Group,{className:"col-4"},l.a.createElement(s.a.Control,{as:"select",id:"fromSelect",onChange:function(e){var a=e.target.value;n.forEach((function(e){e.value.toString()===a&&k(e.type)})),h(a)}},n.map((function(e,a){return l.a.createElement("option",{key:a,value:e.value},e.type)}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"}),l.a.createElement("div",{className:"col-4"}),l.a.createElement("div",{className:"col-4"},l.a.createElement("button",{onClick:function(){if(0!==x.length){var e=E*x/j;B([].concat(Object(m.a)(A),[e])),alert(e)}}},"Start"))),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement(u.b,{to:"/update"},l.a.createElement("button",{className:"btns",onClick:function(){e.update(n,A)}},"Update"))),l.a.createElement("div",{className:"col-4"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com"},l.a.createElement("button",{className:"btns"},"Share On Facebook"))),l.a.createElement("div",{className:"col-4"},l.a.createElement("button",{className:"btns",onClick:function(){J(!V)}},"View Your Exchange list"))),z),l.a.createElement("div",{className:"col-4"})))};var E=function(e){var a=Object(c.useState)(),t=Object(o.a)(a,2),n=t[0],r=t[1],i=Object(c.useState)(),E=Object(o.a)(i,2),v=E[0],b=E[1],d=Object(c.useState)(e.money),p=Object(o.a)(d,2),N=p[0],f=p[1],O=Object(c.useState)(""),j=Object(o.a)(O,2);return j[0],j[1],l.a.createElement("div",{className:"container App"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"}),l.a.createElement("div",{className:"col-4 box"},l.a.createElement("h1",null,"Update"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},"Type"),l.a.createElement("div",{className:"col-6"},"Value")),N.map((function(e,a){return l.a.createElement("div",{className:"row",key:a},l.a.createElement("div",{className:"col-6"},e.type),l.a.createElement("div",{className:"col-6"},e.value))})),l.a.createElement("br",null),l.a.createElement(s.a,{className:"row"},l.a.createElement(s.a.Label,{className:"col-6"},"Type: "),l.a.createElement(s.a.Group,{className:"col-6"},l.a.createElement(s.a.Control,{type:"text",onChange:function(e){var a=e.target.value;r(a)}}))),l.a.createElement(s.a,{className:"row"},l.a.createElement(s.a.Label,{className:"col-6"},"New Value: "),l.a.createElement(s.a.Group,{className:"col-6"},l.a.createElement(s.a.Control,{type:"number",value:v,onChange:function(e){var a=e.target.value;b(a)}}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(u.b,{to:"/"},l.a.createElement("button",{onClick:function(){e.back(N)}},"Back"))),l.a.createElement("div",{className:"col-6"},l.a.createElement("button",{onClick:function(){for(var e=0,a=0;a<n.length;a++)(n[a]<"A"||n[a]>"z")&&e++;if(0!==e)alert("Error");else{for(var t=0,c=0;c<N.length;c++)N[c].type===n&&(N[c].value=v,t++,f(N));0===t&&f([].concat(Object(m.a)(N),[{type:n,value:v}]))}}},"Update")))),l.a.createElement("div",{className:"col-4"})))},v=t(4);t(37);var b=function(){var e=Object(c.useState)([{type:"dollar",value:4},{type:"euro",value:5},{type:"shekel",value:1}]),a=Object(o.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)([]),m=Object(o.a)(r,2),s=m[0],b=m[1];function d(e,a){n(e),b(a)}function p(e){n(e)}return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/",render:function(){return l.a.createElement(i,{update:d,money:t,results:s})}}),l.a.createElement(v.a,{exact:!0,path:"/update",render:function(){return l.a.createElement(E,{money:t,back:p})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.d8174962.chunk.js.map