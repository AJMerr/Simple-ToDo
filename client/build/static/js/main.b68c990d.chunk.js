(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(23),r=c.n(i),s=(c(69),c(70),c(21)),j=c(18),o=c.n(j),d=c(122),l=c(123),b=c(124),h=c(125),x=c(126),O=c(127),u=c(130),p=c(128),m=c(129),v=c(39),f=c.n(v),y=c(20),g=c(2);var _=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){o.a.get("/api/tasks/").then((function(e){a(e.data),console.log(e.data)}))}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{}),Object(g.jsx)(l.a,{position:"relative",children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(f.a,{}),Object(g.jsx)(h.a,{children:"Simple ToDo"})]})}),Object(g.jsxs)("main",{children:[Object(g.jsx)("div",{children:Object(g.jsxs)(x.a,{maxWidth:"sm",children:[Object(g.jsx)(h.a,{variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,children:"All Tasks"}),Object(g.jsx)(h.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"This is a simple ToDo webapp built using the MERN Stack and my first test utilizing React Hooks"}),Object(g.jsx)("div",{children:Object(g.jsx)(O.a,{container:!0,spacing:2,justifyContent:"center",children:Object(g.jsx)(O.a,{item:!0,children:Object(g.jsx)(u.a,{variant:"contained",color:"primary",component:y.b,to:"/create",children:"Create a task"})})})})]})}),Object(g.jsx)(x.a,{maxWidth:"md",children:Object(g.jsxs)("div",{children:[" ",c.map((function(e,t){return Object(g.jsx)("div",{children:Object(g.jsx)(O.a,{container:!0,spacing:4,children:Object(g.jsx)(O.a,{item:!0,children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(m.a,{children:[Object(g.jsx)(h.a,{variant:"h5",color:"textPrimary",gutterBottom:!0,children:e.title}),Object(g.jsx)(h.a,{variant:"h6",color:"textSecondary",children:e.created_by}),Object(g.jsx)(h.a,{variant:"h6",color:"textPrimary",paragraph:!0,children:e.description})]})})})})})}))," "]})})]})]})},k=c(25),C=c(28),S=c(132),T=c(131);var D=function(){var e=Object(n.useState)({_id:"",title:"",created_by:"",description:"",__v:0}),t=Object(s.a)(e,2),c=t[0],a=t[1],i=function(e){var t=e.target,n=t.name,i=t.value;a(Object(C.a)(Object(C.a)({},c),{},Object(k.a)({},n,i)))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{}),Object(g.jsx)(l.a,{position:"relative",children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(f.a,{}),Object(g.jsx)(h.a,{children:"Simple ToDo"})]})}),Object(g.jsx)("main",{children:Object(g.jsx)("div",{children:Object(g.jsxs)(x.a,{maxWidth:"md",children:[Object(g.jsx)(h.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Create a Task"}),Object(g.jsx)(h.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Use this page to create a new task! Once you hit submit, you can return home and you will see your task added to the home page."}),Object(g.jsx)("form",{children:Object(g.jsx)(O.a,{container:!0,spacing:4,justifyContent:"center",children:Object(g.jsxs)(O.a,{item:!0,children:[Object(g.jsx)(S.a,{children:"New Title: "}),Object(g.jsx)(T.a,{type:"text",id:"title",value:c.title,onChange:i,name:"title"}),Object(g.jsx)(S.a,{children:"Created by: "}),Object(g.jsx)(T.a,{type:"text",id:"created_by",value:c.created_by,onChange:i,name:"created_by"}),Object(g.jsx)(S.a,{children:"Description: "}),Object(g.jsx)(T.a,{type:"text",id:"description",value:c.description,onChange:i,name:"description"}),Object(g.jsx)(u.a,{color:"primary",onClick:function(e){e.preventDefault();var t={title:c.title,created_by:c.created_by,description:c.description};o.a.post("/api/tasks",t).then((function(e){a({_id:e.data._id,title:e.data.title,created_by:e.data.created_by,description:e.data.description,__v:e.data.__v})}))},children:"Submit"}),Object(g.jsx)(u.a,{color:"primary",component:y.b,to:"/",children:"Home"})]})})})]})})})]})},w=c(8);var E=function(e){var t=Object(w.f)().id,c=Object(n.useState)({_id:"",title:"",created_by:"",description:"",__v:0}),a=Object(s.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){!function(e){o.a.get("/api/tasks/".concat(e)).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}(t)}),[t]),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:i.title}),Object(g.jsx)("h2",{children:i.created_by}),Object(g.jsx)("p",{children:i.description}),Object(g.jsx)("button",{onClick:function(){return o.a.delete("/api/tasks/".concat(t)).then((function(t){console.log(t.data),e.history.push("/")})).catch((function(e){console.log(e)}))},children:"Delete"})]})};var F=function(e){var t=Object(w.f)().id,c=Object(n.useState)({_id:"",title:"",created_by:"",description:"",__v:0}),a=Object(s.a)(c,2),i=a[0],r=a[1];Object(n.useEffect)((function(){!function(e){o.a.get("/api/tasks/".concat(e)).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}(t)}),[t]);var j=function(e){var t=e.target,c=t.name,n=t.value;r(Object(C.a)(Object(C.a)({},i),{},Object(k.a)({},c,n)))};return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:i.title}),Object(g.jsxs)("form",{children:[Object(g.jsx)("label",{children:"Title: "}),Object(g.jsx)("input",{tpye:"text",id:"tite",name:"title",value:i.title,onChange:j}),Object(g.jsx)("label",{children:"Created by: "}),Object(g.jsx)("input",{tpye:"text",id:"created_by",name:"created_by",value:i.created_by,onChange:j}),Object(g.jsx)("label",{children:"Title"}),Object(g.jsx)("input",{tpye:"text",id:"description",name:"description",value:i.description,onChange:j})]}),Object(g.jsx)("button",{type:"submit",onClick:function(){o.a.put("/api/tasks/".concat(t),i).then((function(t){console.log(t.data),e.history.push("/")})).catch((function(e){console.log(e)}))},children:"Edit"})]})};var P=function(){return Object(g.jsx)(y.a,{children:Object(g.jsx)("div",{children:Object(g.jsxs)(w.c,{children:[Object(g.jsx)(w.a,{exact:!0,path:"/",children:Object(g.jsx)(_,{})}),Object(g.jsx)(w.a,{exact:!0,path:"/create",children:Object(g.jsx)(D,{})}),Object(g.jsx)(w.a,{exact:!0,path:"/task/:id",children:Object(g.jsx)(E,{})}),Object(g.jsx)(w.a,{exact:!0,path:"/task/edit/:id",children:Object(g.jsx)(F,{})})]})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root")),B()},69:function(e,t,c){},70:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.b68c990d.chunk.js.map