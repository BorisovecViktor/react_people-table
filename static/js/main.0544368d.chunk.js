(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),o=a(7),m=a(1),s=function(){return l.a.createElement("h1",null,"Home page")},p=a(8),u=a.n(p),i=a(15),E=a(10),h=a(20),f=function(){var e=Object(E.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=a(12),b=a.n(d),v=function(e){var t=e.people,a=Object(m.g)(),n=Object(m.h)().personSlug;return l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement("tr",{className:b()("person",{"table-active":e.slug===n}),key:e.id,onClick:function(){return t=e.slug,void a.push({pathname:"/people/".concat(t)});var t}},l.a.createElement("th",{scope:"row"},e.id),l.a.createElement("td",null,e.name),l.a.createElement("td",{className:b()({person__male:"m"===e.sex,person__female:"f"===e.sex})},e.sex),l.a.createElement("td",null,e.born),l.a.createElement("td",null,e.died),l.a.createElement("td",{className:"person__female"},e.motherName),l.a.createElement("td",{className:"person__male"},e.fatherName))})))},_=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(E.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,c(t.map((function(e,t){return Object(i.a)(Object(i.a)({},e),{},{id:t+1})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("table",{className:"PeopleTable table"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"thead-light"},l.a.createElement("th",{scope:"col"},"ID"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Sex"),l.a.createElement("th",{scope:"col"},"Born"),l.a.createElement("th",{scope:"col"},"Died"),l.a.createElement("th",{scope:"col"},"Mother"),l.a.createElement("th",{scope:"col"},"Father"))),l.a.createElement("tbody",null,l.a.createElement(v,{people:a})))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"People page"),l.a.createElement(_,null))},g=(a(32),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"header"},l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",{className:"nav__list"},l.a.createElement("li",{className:"nav__item"},l.a.createElement(o.b,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"Home page")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(o.b,{to:"/people",className:"nav__link",activeClassName:"nav__link--active"},"People page"))))),l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",exact:!0,component:s}),l.a.createElement(m.a,{from:"/home",to:"/"}),l.a.createElement(m.b,{path:"/people/:personSlug?",component:N}),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Page not found"))))});r.a.render(l.a.createElement(o.a,null,l.a.createElement(g,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0544368d.chunk.js.map