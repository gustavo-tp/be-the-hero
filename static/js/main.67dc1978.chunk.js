(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo.7eea718b.svg"},30:function(e,t,a){e.exports=a.p+"static/media/heroes.1f4b5508.png"},33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=(a(38),a(7)),u=a(12),s=a(5),i=a.n(s),m=a(10),p=a(2),h=a(9),E=a(29),f=a.n(E).a.create({baseURL:"https://be-the-hero-gustavo-tp.herokuapp.com"}),d=(a(57),a(11)),b=a.n(d),v=a(30),g=a.n(v);function O(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(u.f)();function s(){return(s=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f.post("sessions",{id:a});case 4:n=e.sent,localStorage.setItem("ongId",a),localStorage.setItem("ongName",n.data.name),o.push("/profile"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Falha no login tente novamente.");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"logon-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement("h1",null,"Fa\xe7a seu logon"),r.a.createElement("input",{placeholder:"Sua ID",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Entrar"),r.a.createElement(l.b,{className:"back-link",to:"/register"},r.a.createElement(h.b,{size:16,color:"#E02041"}),"N\xe3o tenho cadastro"))),r.a.createElement("img",{src:g.a,alt:"Heroes"}))}a(63);function j(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),E=s[0],d=s[1],v=Object(n.useState)(""),g=Object(p.a)(v,2),O=g[0],j=g[1],N=Object(n.useState)(""),S=Object(p.a)(N,2),y=S[0],k=S[1],C=Object(n.useState)(""),x=Object(p.a)(C,2),w=x[0],I=x[1],z=Object(u.f)();function B(){return(B=Object(m.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:a,email:E,whatsapp:O,city:y,uf:w},e.prev=2,e.next=5,f.post("ongs",n);case 5:r=e.sent,alert("Seu ID de acesso: ".concat(r.data.id)),z.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Erro no cadastro, tente novamente.");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG."),r.a.createElement(l.b,{className:"back-link",to:"/"},r.a.createElement(h.a,{size:16,color:"#E02041"}),"N\xe3o tenho cadastro")),r.a.createElement("form",{onSubmit:function(e){return B.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Nome da ONG",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"E-mail",value:E,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{placeholder:"WhatsApp",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{placeholder:"Cidade",value:y,onChange:function(e){return k(e.target.value)}}),r.a.createElement("input",{placeholder:"UF",style:{width:80},value:w,onChange:function(e){return I(e.target.value)}})),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}a(64);function N(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(u.f)(),s=localStorage.getItem("ongId"),E=localStorage.getItem("ongName");function d(){return(d=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.delete("incidents/".concat(t),{headers:{Authorization:s}});case 3:c(a.filter((function(e){return e.id!==t}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Erro ao deletar caso, tente novamente.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){f.get("profile",{headers:{Authorization:s}}).then((function(e){c(e.data)}))}),[s]),r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("span",null,"Bem vinda, ",E),r.a.createElement(l.b,{className:"button",to:"/incidents/new"},"Cadastrar novo caso"),r.a.createElement("button",{onClick:function(){localStorage.clear(),o.push("/")},type:"button"},r.a.createElement(h.c,{size:18,color:"#E02041"}))),r.a.createElement("h1",null,"Casos cadastrados"),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,"CASO:"),r.a.createElement("p",null,e.title),r.a.createElement("strong",null,"DESCRI\xc7\xc3O:"),r.a.createElement("p",null,e.description),r.a.createElement("strong",null,"VALOR:"),r.a.createElement("p",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value)),r.a.createElement("button",{onClick:function(){return function(e){return d.apply(this,arguments)}(e.id)},type:"button"},r.a.createElement(h.d,{size:20,color:"#a8a8b3"})))}))))}a(65);function S(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),E=s[0],d=s[1],v=Object(n.useState)(""),g=Object(p.a)(v,2),O=g[0],j=g[1],N=Object(u.f)(),S=localStorage.getItem("ongId");function y(){return(y=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:a,description:E,value:O},e.prev=2,e.next=5,f.post("incidents",n,{headers:{Authorization:S}});case 5:N.push("/profile"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert("Erro ao cadastrar caso, tente novamente.");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"new-incident-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastro novo caso"),r.a.createElement("p",null,"Descreva o caso detalhadamente para encontrar um her\xf3i para resolver isso."),r.a.createElement(l.b,{className:"back-link",to:"/profile"},r.a.createElement(h.a,{size:16,color:"#E02041"}),"Voltar para home")),r.a.createElement("form",{onSubmit:function(e){return y.apply(this,arguments)}},r.a.createElement("input",{placeholder:"T\xedtulo do caso",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("textarea",{placeholder:"Descri\xe7\xe3o",value:E,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{placeholder:"Valor em reais",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}function y(){return r.a.createElement(l.a,{basename:"be-the-hero"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:O}),r.a.createElement(u.a,{path:"/register",component:j}),r.a.createElement(u.a,{path:"/profile",component:N}),r.a.createElement(u.a,{path:"/incidents/new",component:S})))}var k=function(){return r.a.createElement(y,null)};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.67dc1978.chunk.js.map