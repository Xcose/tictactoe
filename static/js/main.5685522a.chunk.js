(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(8),o=a.n(l),r=(a(14),a(15),a(6)),i=a(23),s=a(21),d=a(22);function m(){var e=Object(n.useState)(1),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(1),m=Object(r.a)(o,2),u=m[0],f=m[1],g=Object(n.useState)(0),w=Object(r.a)(g,2),h=w[0],E=w[1],y=Object(n.useState)(0),p=Object(r.a)(y,2),b=p[0],v=p[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("player1"),t=window.localStorage.getItem("player2");null!==e&&E(parseInt(e)),null!==t&&v(parseInt(t))}),[]);var I=function(e){""===e.target.innerHTML&&a<=9&&(e.target.value=u,e.target.innerHTML=a%2===0?'<p class="display-1 t-shad font-weight-bold">X</p>':'<p class="display-1 t-shad font-weight-bold">O</p>',l(a+1),j(),k())},j=function(){f(1===u?2:1)},k=function(){N(),S(),x("a1","b2","c3"),x("c1","b2","a3")},N=function(){["a","b","c"].forEach((function(e){var t=document.getElementById(e+"1"),a=document.getElementById(e+"2"),n=document.getElementById(e+"3");B(t,a,n)}))},S=function(){["1","2","3"].forEach((function(e){var t=document.getElementById("a"+e),a=document.getElementById("b"+e),n=document.getElementById("c"+e);B(t,a,n)}))},x=function(e,t,a){var n=document.getElementById(e),c=document.getElementById(t),l=document.getElementById(a);B(n,c,l)},B=function(e,t,n){void 0!==e.value&&e.value===t.value&&t.value===n.value?(e.classList.add("red"),t.classList.add("red"),n.classList.add("red"),alert("Player "+e.value+" is the winner")||window.location.reload(),l(10),1===e.value?window.localStorage.setItem("player1",h+1):window.localStorage.setItem("player2",b+1)):9===a&&(l(10),alert("It's a draw")||window.location.reload())};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{height:"7vh"},className:"d-flex align-items-center"},c.a.createElement("span",{className:"float-left ml-2"},"Player ",u,"'s turn"),c.a.createElement("span",{className:"m-auto"},"Games won 1:",h," 2:",b),c.a.createElement(i.a,{color:"primary",size:"sm",className:"m-auto",onClick:function(){E(0),v(0),window.localStorage.removeItem("player1"),window.localStorage.removeItem("player2"),window.location.reload()}},"RESET")),c.a.createElement(s.a,{style:{height:"30vh"}},c.a.createElement(d.a,{id:"a1",onClick:I,className:"h-100 w-100 border d-flex align-items-center justify-content-center pad"}),c.a.createElement(d.a,{id:"a2",onClick:I,className:"h-100 w-100 border  d-flex align-items-center justify-content-center pad"}),c.a.createElement(d.a,{id:"a3",onClick:I,className:"h-100 w-100 border  d-flex align-items-center justify-content-center pad"})),c.a.createElement(s.a,{style:{height:"30vh"}},c.a.createElement(d.a,{id:"b1",onClick:I,className:"h-100 w-100 border  d-flex align-items-center justify-content-center pad"}),c.a.createElement(d.a,{id:"b2",onClick:I,className:"h-100 w-100 border  d-flex align-items-center justify-content-center pad"}),c.a.createElement(d.a,{id:"b3",onClick:I,className:"h-100 w-100 border  d-flex align-items-center justify-content-center pad"})),c.a.createElement(s.a,{style:{height:"30vh"}},c.a.createElement(d.a,{id:"c1",onClick:I,className:"h-100 w-100 border  d-flex align-items-center justify-content-center pad"}),c.a.createElement(d.a,{id:"c2",onClick:I,className:"h-100 w-100 border  d-flex align-items-center justify-content-center pad"}),c.a.createElement(d.a,{id:"c3",onClick:I,className:"h-100 w-100 border  d-flex align-items-center justify-content-center pad"})))}var u=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.5685522a.chunk.js.map