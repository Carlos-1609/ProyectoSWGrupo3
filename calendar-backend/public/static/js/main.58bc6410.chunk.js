(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{112:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=a(4),s=a(18),u=a(63),i=a(5),m="ui[] Open Modal",d="ui[] Close Modal",p="[event] Set Active",f="[event] Logout",v="[event] Add New",E="[event] Clear Active Event",b="[event] Event Updated",h="[event] Event Deleted",g="[event] Events loaded",O="[auth] Checking Finish Login State",j="[auth] Login",y="[auth] Logout",N={modalOpen:!1},w=a(53),k={events:[],activeEvent:null},S={checking:!0,uid:null,name:null},x=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(i.a)({},e,{modalOpen:!0});case d:return Object(i.a)({},e,{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(i.a)({},e,{activeEvent:t.payload});case v:return Object(i.a)({},e,{events:[].concat(Object(w.a)(e.events),[t.payload])});case b:return Object(i.a)({},e,{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case h:return Object(i.a)({},e,{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case g:return Object(i.a)({},e,{events:Object(w.a)(t.payload)});case E:return Object(i.a)({},e,{activeEvent:null});case f:return Object(i.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)({},e,{},t.payload,{checking:!1});case y:return{checking:!1};case O:return Object(i.a)({},e,{checking:!1});default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,T=Object(s.e)(x,C(Object(s.a)(u.a))),D=a(32),P=a(6),_=a(10),A=a(13),I=a.n(A),R=a(21),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(_.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(i.a)({},r,Object(R.a)({},t.name,t.value)))};return[r,l,o]},U=a(8),G=a.n(U),V=a(17),F="https://calendarmern.herokuapp.com/api",H=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(F,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},J=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(F,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},M=a(15),q=a.n(M),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)({},e,{end:q()(e.end).toDate(),start:q()(e.start).toDate()})}))},K=function(e){return{type:v,payload:e}},W=function(){return{type:E}},X=function(e){return{type:b,payload:e}},z=function(){return{type:h}},Q=function(e){return{type:g,payload:e}},Y=function(){return function(e){localStorage.clear(),e({type:f}),e(ee())}},Z=function(){return{type:O}},$=function(e){return{type:j,payload:e}},ee=function(){return{type:y}},te=(a(76),function(){var e=Object(l.b)(),t=L({lEmail:"Redondo@gmail.com",lPassword:"123456"}),a=Object(_.a)(t,2),n=a[0],c=a[1],o=L({rName:"Redox",rEmail:"Redondo@gmail.com",rPassword:"123456",rPassword2:"123456"}),s=Object(_.a)(o,2),u=s[0],i=s[1],m=n.lEmail,d=n.lPassword,p=u.rName,f=u.rEmail,v=u.rPassword,E=u.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=m,n=d,function(){var e=Object(V.a)(G.a.mark((function e(t){var r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:c.uid,name:c.name}))):I.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:m,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),v!==E)return I.a.fire("Error","Password must be equal","error");var a,n,r;e((a=f,n=v,r=p,function(){var e=Object(V.a)(G.a.mark((function e(t){var c,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/new",{email:a,password:n,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:o.uid,name:o.name}))):I.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:f,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:E,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),ae=a(52),ne=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},t),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e(Y())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},re=function(e){var t=e.event,a=t.title,n=t.user.name;return r.a.createElement("div",null,r.a.createElement("strong",null,a),r.a.createElement("strong",null," - ",n))},ce=a(46),oe=a.n(ce),le=a(47),se=a.n(le),ue=function(){return{type:m}},ie={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};oe.a.setAppElement("#root");var me=q()().minutes(0).seconds(0).add(1,"hours"),de=me.clone().add(1,"hours"),pe={title:"Evento",notes:"",start:me.toDate(),end:de.toDate()},fe=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(me.toDate()),o=Object(_.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(de.toDate()),p=Object(_.a)(m,2),f=p[0],v=p[1],E=Object(n.useState)(!0),b=Object(_.a)(E,2),h=b[0],g=b[1],O=Object(n.useState)(pe),j=Object(_.a)(O,2),y=j[0],N=j[1],w=y.notes,k=y.title,S=y.start,x=y.end;Object(n.useEffect)((function(){N(t||pe)}),[t,N]);var C=function(e){var t=e.target;N(Object(i.a)({},y,Object(R.a)({},t.name,t.value)))},T=function(){a({type:d}),a(W()),N(pe)};return r.a.createElement(oe.a,{isOpen:e,onRequestClose:T,style:ie,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null,t?"Editar":"Nuevo"," evento"),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=q()(S),c=q()(x);return r.isSameOrAfter(c)?I.a.fire("Error","La fecha final debe ser mayor que la inicial","error"):k.trim().length<2?g(!1):(a(t?(n=y,function(){var e=Object(V.a)(G.a.mark((function e(t){var a,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(X(n)):I.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(V.a)(G.a.mark((function t(a,n){var r,c,o,l,s;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,J("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:(s=t.sent).ok&&(e.id=s.event.id,e.user={_id:c,name:o},console.log(e),a(K(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log("Und mistaken");case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(y)),g(!0),void T())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(se.a,{onChange:function(e){u(e),N(Object(i.a)({},y,{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(se.a,{onChange:function(e){v(e),N(Object(i.a)({},y,{end:e}))},value:f,minDate:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},ve=(a(110),function(){var e=Object(l.b)();return r.a.createElement("button",{onClick:function(){e(ue())},className:"btn btn-primary fab"},r.a.createElement("i",{className:"fas fa-plus"}))}),Ee=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(V.a)(G.a.mark((function e(t,a){var n,r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,J("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(z()):I.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar evento "))},be=Object(ae.b)(q.a),he=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).uid,a=Object(l.c)((function(e){return e.calendar})),c=a.events,o=a.activeEvent,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),u=Object(_.a)(s,2),i=u[0],m=u[1];Object(n.useEffect)((function(){e(function(){var e=Object(V.a)(G.a.mark((function e(t){var a,n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=B(n.events),t(Q(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(ne,null),r.a.createElement(ae.a,{localizer:be,events:c,startAccessor:"start",endAccessor:"end",eventPropGetter:function(e,a,n,r){return{style:{backgroundColor:t===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ue())},onSelectEvent:function(t){e({type:p,payload:t})},onView:function(e){m(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(W())},selectable:!0,view:i,components:{event:re}}),r.a.createElement(ve,null),o&&r.a.createElement(Ee,null),r.a.createElement(fe,null))},ge=a(37),Oe=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ge.a)(e,["isAuthenticated","component"]);return r.a.createElement(P.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(P.a,{to:"/"}):r.a.createElement(a,e)}}))},je=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ge.a)(e,["isAuthenticated","component"]);return r.a.createElement(P.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(P.a,{to:"/login"})}}))},ye=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(V.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:n.uid,name:n.name}))):t(Z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Espere..."):r.a.createElement(D.a,null,r.a.createElement("div",null,r.a.createElement(P.d,null,r.a.createElement(Oe,{exact:!0,path:"/login",isAuthenticated:!!c,component:te}),r.a.createElement(je,{exact:!0,path:"/",isAuthenticated:!!c,component:he}),r.a.createElement(P.a,{to:"/"}))))},Ne=function(){return r.a.createElement(l.a,{store:T},r.a.createElement(ye,null))};a(112);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"https://calendarmern.herokuapp.com/api"})),o.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(114)},76:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.58bc6410.chunk.js.map