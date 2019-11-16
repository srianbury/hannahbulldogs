(this["webpackJsonplogin-template"]=this["webpackJsonplogin-template"]||[]).push([[0],{120:function(e,t,a){},122:function(e,t,a){},125:function(e,t,a){},128:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"HOME",(function(){return x})),a.d(n,"PARENTS",(function(){return w})),a.d(n,"PARENTS_EDIT",(function(){return S})),a.d(n,"PUPPIES",(function(){return P})),a.d(n,"GALLERY",(function(){return C})),a.d(n,"LOGIN",(function(){return I})),a.d(n,"SIGN_UP",(function(){return F})),a.d(n,"USER_PROFILE",(function(){return L}));var r={};a.r(r),a.d(r,"ABBR",(function(){return R})),a.d(r,"HOME",(function(){return A})),a.d(r,"PARENTS",(function(){return U})),a.d(r,"PUPPIES",(function(){return D})),a.d(r,"GALLERY",(function(){return T}));var c={};a.r(c),a.d(c,"USER",(function(){return G})),a.d(c,"ADMIN",(function(){return _})),a.d(c,"MINDFLAYER",(function(){return H}));var l={};a.r(l),a.d(l,"USER",(function(){return B}));var o=a(0),u=a.n(o),i=a(144),s=a(18),m=a.n(s),d=a(23),p=a(33),E=a(7),f=a(147),b=a(146),h=a(43),v=function(e){var t=e.to,a=e.value,n=e.activeClassName;return u.a.createElement(h.LinkContainer,{to:t,exact:!0,activeClassName:n},u.a.createElement(b.a.Link,{active:!1},a))};var g=function(e){var t=e.to,a=e.value,n=e.className,r=e.activeClassName;return u.a.createElement(h.LinkContainer,{className:n,exact:!0,activeClassName:r,to:t},u.a.createElement(b.a.Link,{active:!1},a))},O=function(e){var t=e.to,a=e.value,n=e.className,r=e.activeClassName;return u.a.createElement(h.LinkContainer,{className:n,exact:!0,activeClassName:r,to:t,isActive:function(){return!1}},u.a.createElement(b.a.Link,{active:!1},a))},y=function(e){var t=e.navColors,a=e.navItems,n=e.navBrand,r=e.rightSide,c=Object(o.useState)(!1),l=Object(E.a)(c,2),i=l[0],s=l[1],m=Object(o.useRef)();return function(e,t){Object(o.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&"my-toggle-outer"!==a.target.id&&"my-toggle-icon"!==a.target.id&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])}(m,(function(){return s(!1)})),u.a.createElement(f.a,{sticky:"top",expanded:i,onSelect:function(){s(!1)},bg:t.bg,variant:t.variant,expand:t.expand,collapseOnSelect:!0},u.a.createElement(b.a,null,n.highlight?u.a.createElement(g,Object.assign({},n.brand,n.class)):u.a.createElement(O,Object.assign({},n.brand,n.class))),u.a.createElement(f.a.Toggle,{onClick:function(){s((function(e){return!e}))},"aria-controls":"basic-navbar-nav",id:"my-toggle-outer"},u.a.createElement("span",{id:"my-toggle-icon",className:"navbar-toggler-icon"})),u.a.createElement(f.a.Collapse,{id:"basic-navbar-nav",ref:m},u.a.createElement(b.a,{className:"mr-auto"},a.items.map((function(e){return u.a.createElement(v,Object.assign({key:e.value},e,a.class))}))),r))},j=a(145),k=a(35),N=u.a.createContext(null),x="/",w="/parents",S="/parents/edit",P="/puppies",C="/gallery",I="/login",F="/signup",L="/me",R="HB",A="Home",U="Parents",D="Puppies",T="Gallery",G="USER",_="ADMIN",H="MINDFLAYER",B="user",M=function(e){var t=e.children,a=Object(o.useState)(null),n=Object(E.a)(a,2),r=n[0],c=n[1];return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem(l.USER));e&&c(e)}),[]),u.a.createElement(N.Provider,{value:{authUser:r,setAuthUser:c}},t)};var Y=function(e,t){return"production"!==e||!!t},W=function(e){var t=e.handleLogout,a=e.history;return u.a.createElement(u.a.Fragment,null,u.a.createElement(k.a.Item,{onClick:function(){return a.push(n.USER_PROFILE)}},"Profile"),u.a.createElement(k.a.Divider,null),u.a.createElement(k.a.Item,{onClick:t},"Logout"))},J=function(e){var t=e.history;return u.a.createElement(u.a.Fragment,null,u.a.createElement(k.a.Item,{onClick:function(){return t.push(n.LOGIN)}},"Login"))},q=function(){var e=Object(p.k)(),t=Object(o.useContext)(N),a=t.authUser,r=t.setAuthUser;return u.a.createElement(u.a.Fragment,null,Y("production",a)&&u.a.createElement(k.a,{navbar:!0},u.a.createElement(k.a.Toggle,{variant:"primary",id:"dropdown-basic"},a?a.user.username:"Guest"),u.a.createElement(k.a.Menu,{flip:!0},a?u.a.createElement(W,{handleLogout:function(){r(null),localStorage.removeItem(l.USER),e.push(n.HOME)},history:e}):u.a.createElement(J,{history:e}))))},z=(a(120),{variant:"light",bg:"light",expand:"sm"}),K={class:{activeClassName:"text-primary"},items:[{to:n.HOME,value:r.HOME},{to:n.PARENTS,value:r.PARENTS},{to:n.PUPPIES,value:r.PUPPIES},{to:n.GALLERY,value:r.GALLERY}]},V={highlight:!1,brand:{to:n.HOME,value:r.ABBR},class:{className:"navbar-brand",activeClassName:"text-danger"}},$=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(j.a,{inline:!0},u.a.createElement(q,null)))},Q=function(){return u.a.createElement(y,{navItems:K,navColors:z,navBrand:V,rightSide:u.a.createElement($,null)})},X=a(12),Z=a.n(X),ee=a(19),te=a(139),ae=a(140),ne=a(78),re=a(141);var ce=function(e){return e.map((function(e){return"".concat(e.param,": ").concat(e.msg,".")})).join(" ")},le=function(){var e=Object(o.useContext)(N).setAuthUser,t=Object(o.useState)(null),a=Object(E.a)(t,2),n=a[0],r=a[1],c=Object(o.useState)(""),l=Object(E.a)(c,2),i=l[0],s=l[1],m=Object(o.useState)(""),d=Object(E.a)(m,2),f=d[0],b=d[1],h=Object(o.useState)(""),v=Object(E.a)(h,2),g=v[0],O=v[1],y=Object(o.useState)(""),j=Object(E.a)(y,2),k=j[0],x=j[1],w=Object(o.useState)(!1),S=Object(E.a)(w,2),P=S[0],C=S[1],I=Object(p.k)();return u.a.createElement(ae.a,null,u.a.createElement(ne.a,{md:"6"},u.a.createElement("h5",null,"Sign Up"),n&&u.a.createElement("div",{onClick:function(){return r(!1)},class:"text-danger hover"},n.message),u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{htmlFor:"username"},"Username"),u.a.createElement("input",{value:i,onChange:function(e){return s(e.target.value)},disabled:P,type:"text",class:"form-control",id:"username",placeholder:"Username"})),u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{htmlFor:"email"},"Email"),u.a.createElement("input",{value:f,onChange:function(e){return b(e.target.value)},disabled:P,type:"text",class:"form-control",id:"email",placeholder:"Email"})),u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{htmlFor:"password"},"Password"),u.a.createElement("input",{value:g,onChange:function(e){return O(e.target.value)},disabled:P,type:"password",class:"form-control",id:"password",placeholder:"Password"})),u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{htmlFor:"password"},"Confirm Password"),u.a.createElement("input",{value:k,onChange:function(e){return x(e.target.value)},disabled:P,type:"password",class:"form-control",id:"confirmPwd",placeholder:"Confirm Password"})),u.a.createElement("button",{onClick:function(){r(null),C(!0),function(e,t,a,n,r,c){oe.apply(this,arguments)}(i,f,g,k,(function(t){e(t),I.push("/")}),(function(e){C(!1),r(e)}))},className:"btn btn-sm btn-primary"},P&&u.a.createElement(re.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Sign Up")))};function oe(){return(oe=Object(ee.a)(Z.a.mark((function e(t,a,n,r,c,l){var o,u,i;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://bulldogsapi.herokuapp.com/api/prod","/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,email:a,password:n,confirmPassword:r})});case 3:if(o=e.sent,!o.ok){e.next=12;break}return e.next=8,o.json();case 8:u=e.sent,c(u),e.next=21;break;case 12:i=o.status,e.t0=i,e.next=422===e.t0?16:409===e.t0?18:20;break;case 16:return ue(o,l),e.abrupt("break",21);case 18:return se(o,l),e.abrupt("break",21);case 20:throw new Error("Something went wrong...");case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(0),l(new Error("Something went wrong..."));case 26:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}function ue(e,t){return ie.apply(this,arguments)}function ie(){return(ie=Object(ee.a)(Z.a.mark((function e(t,a){var n,r,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,r=n.error,c=ce(r),a(new Error(c));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e,t){return me.apply(this,arguments)}function me(){return(me=Object(ee.a)(Z.a.mark((function e(t,a){var n,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,r=n.error,a(new Error(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(){return u.a.createElement("p",null,"Don't have an account? ",u.a.createElement(d.Link,{to:n.SIGN_UP},"Sign Up"))},pe=function(){return u.a.createElement(te.a,null,u.a.createElement(le,null),u.a.createElement(fe,null))},Ee=(a(122),function(){var e=Object(o.useContext)(N).setAuthUser,t=Object(o.useState)(null),a=Object(E.a)(t,2),n=a[0],r=a[1],c=Object(o.useState)(""),i=Object(E.a)(c,2),s=i[0],m=i[1],d=Object(o.useState)(""),f=Object(E.a)(d,2),b=f[0],h=f[1],v=Object(o.useState)(!1),g=Object(E.a)(v,2),O=g[0],y=g[1],j=Object(o.useState)(!1),k=Object(E.a)(j,2),x=k[0],w=k[1],S=Object(p.k)();function P(){return(P=Object(ee.a)(Z.a.mark((function t(){var a,n,c,o,u;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,fetch("".concat("https://bulldogsapi.herokuapp.com/api/prod","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:b})});case 4:if(a=t.sent,!a.ok){t.next=15;break}return t.next=9,a.json();case 9:n=t.sent,e(n),O&&localStorage.setItem(l.USER,JSON.stringify(n)),S.push("/"),t.next=25;break;case 15:c=a.status,t.t0=c,t.next=404===t.t0?19:401===t.t0?19:24;break;case 19:return t.next=21,a.json();case 21:throw o=t.sent,u=o.error,new Error(u);case 24:throw new Error("Something went wrong...");case 25:t.next=31;break;case 27:t.prev=27,t.t1=t.catch(0),w(!1),r(t.t1);case 31:case"end":return t.stop()}}),t,null,[[0,27]])})))).apply(this,arguments)}return u.a.createElement(ae.a,null,u.a.createElement(ne.a,{md:"6"},n&&u.a.createElement("div",{onClick:function(){return r(!1)},className:"text-danger hover"},n.message),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"username"},"Username"),u.a.createElement("input",{value:s,onChange:function(e){return m(e.target.value)},disabled:x,type:"text",className:"form-control",id:"username",placeholder:"Username"})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"password"},"Password"),u.a.createElement("input",{value:b,onChange:function(e){return h(e.target.value)},disabled:x,type:"password",className:"form-control",id:"password",placeholder:"Password"})),u.a.createElement("div",{className:"form-check"},u.a.createElement("input",{onChange:function(){return y((function(e){return!e}))},className:"form-check-input",type:"checkbox",checked:O,id:"keepmeloggedin"}),u.a.createElement("label",{class:"form-check-label",for:"keepmeloggedin"},"Keep me logged in")),u.a.createElement("button",{onClick:function(){return P.apply(this,arguments)},className:"btn btn-sm btn-primary"},x&&u.a.createElement(re.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Login")))}),fe=function(){return u.a.createElement("p",null,"Already have an account? ",u.a.createElement(d.Link,{to:n.LOGIN},"Sign In"))},be=function(){return u.a.createElement(te.a,null,u.a.createElement(Ee,null),u.a.createElement(de,null))},he=a(30),ve=a(79),ge=a(80),Oe=a(90),ye=a(81),je=a(91),ke=a(20),Ne=function(e){var t=e.eventId,a=e.className;return u.a.createElement("button",{className:a||"btn btn-sm btn-danger",onClick:function(){return i.b({eventId:t})}},"Report feedback")},xe=function(e){function t(e){var a;return Object(ve.a)(this,t),(a=Object(Oe.a)(this,Object(ye.a)(t).call(this,e))).removeErrorAndGoHome=function(e){a.setState({hasError:!1}),e()},a.state={hasError:!1},a}return Object(je.a)(t,e),Object(ge.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;ke.b((function(n){n.setExtras(t);var r=ke.a(e);a.setState({eventId:r})}))}},{key:"render",value:function(){var e=this.state.hasError,t=this.props,a=t.children,n=t.Fallback;return e?n?u.a.createElement(n,{removeErrorAndGoHome:this.removeErrorAndGoHome,eventId:this.state.eventId}):u.a.createElement(we,{removeErrorAndGoHome:this.removeErrorAndGoHome,eventId:this.state.eventId}):a}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(u.a.Component),we=function(e){var t=e.eventId;return u.a.createElement(te.a,{className:"d-flex justify-content-center"},u.a.createElement("div",null,u.a.createElement("h2",null,"Whoops..."),u.a.createElement("div",null,"Something went wrong..."),u.a.createElement(Ne,{eventId:t})))},Se=function(e){return function(t){var a=t.FallbackError,n=Object(he.a)(t,["FallbackError"]);return u.a.createElement(xe,{Fallback:a},u.a.createElement(e,n))}},Pe=(a(125),function(){return u.a.createElement("div",{id:"ht-tm-jumbotron"},u.a.createElement("div",{className:"jumbotron bg-danger text-white mb-0 radius-0 ht-tm-jumbotron"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"ht-tm-header"},u.a.createElement("h1",{className:"display-1 text-chicle text-light"},"Hannah Bulldogs")))))}),Ce=function(e){e.title;var t=e.left,a=e.right;return u.a.createElement("div",{className:"mt-2"},u.a.createElement(te.a,null,u.a.createElement(ae.a,null,u.a.createElement(ne.a,{sm:!0,className:"d-flex flex-wrap align-content-center"},t),u.a.createElement(ne.a,{sm:!0,className:"d-flex flex-wrap align-content-center"},a))))};Ce.Title=function(e){var t=e.title;return u.a.createElement("h3",{className:"mt-1 mb-0"},t)};var Ie=Ce,Fe=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(Ie.Title,{title:"About"}))},Le=function(e){var t=e.description;return u.a.createElement("div",null,t.text)},Re=function(e){var t=e.about;return u.a.createElement(Ie,{title:"About",left:u.a.createElement(Fe,null),right:u.a.createElement(Le,{description:t.description})})},Ae=a(148),Ue=a(142),De=function(e){var t=e.images;return u.a.createElement(Ae.a,{interval:null,slide:!1},t.map((function(e){return u.a.createElement(Ae.a.Item,{key:e._id},u.a.createElement(Ue.a,{fluid:!0,src:e.url,alt:"puppy"}))})))},Te=function(e){var t=e.description;return u.a.createElement(u.a.Fragment,null,u.a.createElement(Ie.Title,{title:"Puppies!"}),u.a.createElement("div",{className:"mb-1"},t.text))},Ge=function(e){var t=e.puppies;return u.a.createElement(Ie,{title:"About",left:u.a.createElement(Te,{description:t.description}),right:u.a.createElement(De,{images:t.images})})},_e=a(85),He=function(e){var t=e.error;return u.a.createElement("div",{className:"text-danger"},t.message)},Be=function(){return u.a.createElement(re.a,{animation:"border",role:"status"},u.a.createElement("span",{className:"sr-only"},"Loading..."))},Me=function(e){var t=e.message,a=e.className;return u.a.createElement("div",{className:a},t||"No items.")},Ye=function(e){return function(t){var a=t.loading,n=t.error,r=t.ErrorFallback,c=t.LoadingFallback,l=t.EmptyFallback,o=Object(he.a)(t,["loading","error","ErrorFallback","LoadingFallback","EmptyFallback"]);return n?u.a.createElement(u.a.Fragment,null,r?u.a.createElement(r,{error:n}):u.a.createElement(He,{error:n})):null===a?u.a.createElement(u.a.Fragment,null,c?u.a.createElement(c,null):u.a.createElement(Be,null)):0===a.length?u.a.createElement(u.a.Fragment,null,l?u.a.createElement(l,null):u.a.createElement(Me,null)):u.a.createElement(e,o)}},We=a(32),Je=u.a.createContext();function qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ze=function(e){var t=e.children,a=Object(o.useState)({home:null,parents:null,puppies:null,gallery:null}),n=Object(E.a)(a,2),r=n[0],c=n[1];return u.a.createElement(Je.Provider,{value:{data:r,updateNode:function(e,t){c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?qe(a,!0).forEach((function(t){Object(We.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):qe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,Object(We.a)({},e,t)))}}},t)},Ke=function(e){return function(t){return u.a.createElement(ze,null,u.a.createElement(e,t))}},Ve=Ye((function(e){var t=e.images;return u.a.createElement(u.a.Fragment,null,t.map((function(e){return u.a.createElement(ne.a,{sm:6,key:e._id},u.a.createElement(_e.a,{url:e.url,maxWidth:200,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}))})))})),$e=function(){var e=Object(o.useContext)(Je),t=e.data,a=e.updateNode;return Object(o.useEffect)((function(){function e(){return(e=Object(ee.a)(Z.a.mark((function e(){var t,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://bulldogsapi.herokuapp.com/api/prod","/gallery"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a("gallery",n.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.gallery||function(){e.apply(this,arguments)}()}),[t.gallery,a]),u.a.createElement(te.a,null,u.a.createElement(ae.a,null,u.a.createElement(Ve,{loading:t.gallery,images:t.gallery})))},Qe=function(e){return function(t){var a=t.loading,n=t.error,r=t.ErrorFallback,c=t.LoadingFallback,l=(t.EmptyFallback,Object(he.a)(t,["loading","error","ErrorFallback","LoadingFallback","EmptyFallback"]));return n?u.a.createElement(u.a.Fragment,null,r?u.a.createElement(r,{error:n}):u.a.createElement(He,{error:n})):null===a?u.a.createElement(u.a.Fragment,null,c?u.a.createElement(c,null):u.a.createElement(Be,null)):u.a.createElement(e,l)}}((function(e){var t=e.data;return u.a.createElement(u.a.Fragment,null,u.a.createElement(Ge,{puppies:t.puppies}),u.a.createElement(Re,{about:t.about}))})),Xe=function(){var e=Object(o.useContext)(Je),t=e.data,a=e.updateNode;return Object(o.useEffect)((function(){function e(){return(e=Object(ee.a)(Z.a.mark((function e(){var t,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://bulldogsapi.herokuapp.com/api/prod","/home"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a("home",n.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.home||function(){e.apply(this,arguments)}()}),[t,a]),u.a.createElement(u.a.Fragment,null,u.a.createElement(Pe,null),u.a.createElement(Qe,{loading:t.home,data:t.home}))},Ze=(a(128),function(e){var t=e.removeErrorAndGoHome,a=e.eventId,n=Object(p.k)();return u.a.createElement("div",{className:"d-flex justify-content-center height-100"},u.a.createElement("div",{className:"d-flex flex-wrap align-content-center"},u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("h2",null,"Whoops...")),u.a.createElement("div",null,u.a.createElement("blockquote",{className:"blockquote"},u.a.createElement("p",{className:"mb-0"},"Something broke and I take full responsibiliy"),u.a.createElement("footer",{className:"blockquote-footer"},"Brian"))),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement("button",{onClick:function(){t((function(){n.push("/")}))},className:"btn btn-sm btn-success mr-1"},"Home"),u.a.createElement(Ne,{className:"btn btn-sm btn-danger",eventId:a})))))}),et=function(){return u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"d-flex justify-content-center height-100"},u.a.createElement("div",{className:"d-flex flex-wrap align-content-center"},u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("h2",{className:"mb-0"},"404")),u.a.createElement("div",null,u.a.createElement("img",{className:"img img-fluid",src:"https://fhsteinbart.com/wp/wp-content/uploads/2017/05/Star-Wars-A-New-Hope-Obi-Wan-Kenobi.jpg",alt:"404"})),u.a.createElement("div",null,"This is not the page you're looking for.")))))},tt=function(){return u.a.createElement(f.a,{bg:"light",variant:"light",className:"mt-2"},u.a.createElement(b.a,{className:"mr-auto"}),u.a.createElement(b.a,null,u.a.createElement("a",{className:"ml-2",href:"https://www.instagram.com/stanleybulldogs/",target:"_blank",rel:"noopener noreferrer"},u.a.createElement("i",{className:"fab fa-instagram fa-2x text-danger"})),u.a.createElement("a",{className:"ml-2",href:"sms:+1-480-310-0538",target:"_blank",rel:"noopener noreferrer"},u.a.createElement("i",{className:"fas fa-phone fa-2x text-danger"})),u.a.createElement("a",{className:"ml-2",href:"sms:+1-480-310-0538",target:"_blank",rel:"noopener noreferrer"},u.a.createElement("i",{className:"fas fa-envelope fa-2x text-danger"}))))},at=a(143),nt=a(149);var rt=function(){return u.a.createElement("div",{className:"text-danger"},"Not Authorized")},ct=function(e){return function(t){var a=t.authUser,n=t.accessLevels,r=t.Fallback,c=Object(he.a)(t,["authUser","accessLevels","Fallback"]);return function(e,t){try{return!!(e&&e.user&&e.user.access&&t.includes(e.user.access))}catch(a){return!1}}(a,n)?u.a.createElement(e,c):"undefined"!==typeof r?null===r?null:u.a.createElement(r,null):u.a.createElement(rt,null)}};function lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ot(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?lt(a,!0).forEach((function(t){Object(We.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):lt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ut=ct((function(e){var t=e.data;return u.a.createElement(d.Link,{to:{pathname:"".concat(n.PARENTS_EDIT,"/").concat(t._id,"}"),state:ot({},t)}},"Edit")}));var it=function(e){var t=Object(o.useContext)(N).authUser,a=e.name,n=e.sex,r=e.breed,c=e.images,l=e.editAccess;return u.a.createElement(nt.a,null,u.a.createElement(Ae.a,null,c.map((function(e){return u.a.createElement(Ae.a.Item,{key:e._id},u.a.createElement("img",{className:"img img-fluid",src:e.url,alt:e.alt}))}))),u.a.createElement(nt.a.Body,null,u.a.createElement(nt.a.Title,{className:"d-flex justify-content-between"},u.a.createElement("div",null,a),u.a.createElement("div",null,function(e){return e?"Female":"Male"}(n))),u.a.createElement(nt.a.Text,null,r),u.a.createElement(ut,{data:e,authUser:t,accessLevels:l,Fallback:null})))},st=Ye((function(e){var t=e.parents;return u.a.createElement(at.a,null,t.sort((function(e,t){return e.birthday.localeCompare(t.birthday)})).map((function(e){return u.a.createElement(it,Object.assign({key:e._id},e))})))})),mt=function(){var e=Object(o.useContext)(Je),t=e.data,a=e.updateNode,n=Object(o.useState)(null),r=Object(E.a)(n,2),c=r[0],l=r[1];return Object(o.useEffect)((function(){function e(){return(e=Object(ee.a)(Z.a.mark((function e(){var t,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://bulldogsapi.herokuapp.com/api/prod","/dogs"));case 3:if(t=e.sent,!t.ok){e.next=12;break}return e.next=8,t.json();case 8:n=e.sent,a("parents",n.data),e.next=13;break;case 12:throw new Error("");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),l(new Error("There was an error loading the data"));case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}t.parents||function(){e.apply(this,arguments)}()}),[t.parents,a]),u.a.createElement(te.a,null,u.a.createElement(st,{loading:t.parents,parents:t.parents,error:c}))},dt=function(e){var t=e.authUser;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,"Username: ",t.user.username),u.a.createElement("div",null,"ID: ",t.user._id),u.a.createElement("div",null,"Access: ",t.user.access),u.a.createElement("div",null,"Email: ",t.user.email))},pt=function(){return u.a.createElement(u.a.Fragment,null,"You are not logged in.")},Et=function(){var e=Object(o.useContext)(N).authUser;return u.a.createElement(te.a,null,e?u.a.createElement(dt,{authUser:e}):u.a.createElement(pt,null))},ft=a(77);function bt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ht(e,t){switch(t.type){case"UPDATE":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?bt(a,!0).forEach((function(t){Object(We.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):bt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t.payload);case"RESET":return t.payload;case"DELETE_ERROR":return delete e.error,e;default:return e}}var vt=function(e){var t=u.a.useReducer(ht,e),a=Object(E.a)(t,2),n=a[0],r=a[1];return{form:n,handleInputChange:function(e){r({type:"UPDATE",payload:Object(We.a)({},e.target.name,e.target.value)})},handleChange:function(e){r({type:"UPDATE",payload:e})},reset:function(){r({type:"RESET",payload:e})},handleError:function(e){r({type:"UPDATE",payload:e})},clearError:function(){r({type:"DELETE_ERROR"})}}},gt=a(66);a(129);function Ot(e,t){gt.b[t](e,yt)}var yt={position:"bottom-center",autoClose:3500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0};Ot.TYPES={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};var jt,kt=function(){return u.a.createElement(gt.a,null)},Nt=a(89),xt=a.n(Nt),wt=ct((function(e){var t=Object(o.useState)(!1),a=Object(E.a)(t,2),n=a[0],r=a[1],c=e.location.state,l=c.birthday,i=c.breed,s=c.name,m=c.sex,d=c.description,p=c.images,f=vt({birthday:l,breed:i,name:s,sex:m?1:0,description:d,images:p}),b=f.form,h=f.handleInputChange,v=f.handleChange;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h5",null,"Edit"),u.a.createElement(j.a,{noValidate:!0,validated:n,onSubmit:function(e){try{if(e.preventDefault(),!1===e.currentTarget.checkValidity())return e.stopPropagation(),void r(!0);throw new Error("TODO")}catch(t){Ot("TODO",Ot.TYPES.ERROR)}}},u.a.createElement(j.a.Group,{controlId:"formBasicEmail"},u.a.createElement(j.a.Label,null,"Name"),u.a.createElement(j.a.Control,{required:!0,name:"name",value:b.name,onChange:h,type:"text",placeholder:"Name"}),u.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Name is required.")),u.a.createElement("div",null,l),u.a.createElement(j.a.Group,{controlId:"breedcontrol"},u.a.createElement(j.a.Label,null,"Breed"),u.a.createElement(j.a.Control,{name:"breed",value:b.breed,onChange:h,as:"textarea",placeholder:"Breed",rows:"2"})),u.a.createElement("fieldset",null,u.a.createElement(j.a.Group,null,u.a.createElement(j.a.Label,{className:"mr-2"},"Gender"),u.a.createElement(j.a.Check,{custom:!0,inline:!0,checked:0===b.sex,onChange:function(){return v({sex:0})},label:"male",type:"radio",id:"gender-male-radio"}),u.a.createElement(j.a.Check,{custom:!0,inline:!0,checked:1===b.sex,onChange:function(){return v({sex:1})},label:"female",type:"radio",id:"gender-female-radio"}))),u.a.createElement(j.a.Group,{controlId:"breedcontrol"},u.a.createElement(j.a.Label,null,"Description"),u.a.createElement(j.a.Control,{name:"description",value:b.description,onChange:h,as:"textarea",placeholder:"Description",rows:"2"})),u.a.createElement(ae.a,{className:"mb-1 mt-1"},b.images.map((function(e){return u.a.createElement(ne.a,{xs:6,key:e._id},u.a.createElement(Pt,{src:e.url,alt:"doggy"}))})),u.a.createElement(ne.a,null,u.a.createElement(Pt,{src:xt.a,alt:"addImage"}))),u.a.createElement(ft.a,{type:"submit",size:"sm",variant:"primary"},"Update")))})),St=[c.ADMIN,c.MINDFLAYER],Pt=function(e){var t=e.src,a=e.alt;return u.a.createElement(nt.a,null,u.a.createElement(nt.a.Header,{className:"text-right"},u.a.createElement(ft.a,{onClick:function(){return console.log("todo")},variant:"link",className:"p-0 text-danger"},"Delete")),u.a.createElement(nt.a.Img,{variant:"bottom",src:t,alt:a}))},Ct=function(e){var t=Object(o.useContext)(N).authUser;return u.a.createElement(te.a,null,u.a.createElement(wt,Object.assign({authUser:t,accessLevels:St},e)))},It=function(e){var t=e.litter;return u.a.createElement(Ae.a,{interval:null,slide:!1},t.images.map((function(e){return u.a.createElement(Ae.a.Item,{key:e._id},u.a.createElement(Ue.a,{fluid:!0,src:e.url}))})))},Ft=function(e){var t=e.litter;return u.a.createElement("div",null,u.a.createElement("h5",null,t.parents.mom," (mom)"),u.a.createElement("h5",null,t.parents.dad," (dad)"),u.a.createElement("h5",null,"Born: ",t.birthday),u.a.createElement("div",{className:"mb-1"},t.description))},Lt=function(e){var t=e.litter;return u.a.createElement(Ie,{title:"",left:u.a.createElement(Ft,{litter:t}),right:u.a.createElement(It,{litter:t})})},Rt=Ye((function(e){var t=e.litters;return u.a.createElement(ae.a,null,t.sort((function(e,t){return e.birthday.localeCompare(t.birthday)})).map((function(e){return u.a.createElement(ne.a,{sm:12,key:e._id},u.a.createElement(Lt,{key:e._id,litter:e}))})))})),At=function(){var e=Object(o.useContext)(Je),t=e.data,a=e.updateNode;return Object(o.useEffect)((function(){function e(){return(e=Object(ee.a)(Z.a.mark((function e(){var t,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://bulldogsapi.herokuapp.com/api/prod","/litters"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a("puppies",n.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.puppies||function(){e.apply(this,arguments)}()}),[t.puppies,a]),u.a.createElement(Rt,{loading:t.puppies,litters:t.puppies})},Ut=(a(132),Se((jt=Ke((function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(Q,null),u.a.createElement(p.g,null,u.a.createElement(p.d,{exact:!0,path:n.HOME,component:Xe}),u.a.createElement(p.d,{path:"".concat(n.PARENTS_EDIT,"/:id"),component:Ct}),u.a.createElement(p.d,{path:n.PARENTS,component:mt}),u.a.createElement(p.d,{path:n.PUPPIES,component:At}),u.a.createElement(p.d,{path:n.GALLERY,component:$e}),u.a.createElement(p.d,{path:n.LOGIN,component:be}),u.a.createElement(p.d,{path:n.SIGN_UP,component:pe}),u.a.createElement(p.d,{path:n.USER_PROFILE,component:Et}),u.a.createElement(p.d,{component:et})),u.a.createElement(kt,null),u.a.createElement(tt,null))})),function(e){return u.a.createElement(M,null,u.a.createElement(jt,e))}))),Dt=function(){return u.a.createElement(d.BrowserRouter,null,u.a.createElement(Ut,{FallbackError:Ze}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a({dsn:"https://da3c4490cf4b44c6afe072bf3465f871@sentry.io/1784954"}),m.a.render(u.a.createElement(Dt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,a){e.exports=a.p+"static/media/add_image.7c83ec83.webp"},92:function(e,t,a){e.exports=a(133)}},[[92,1,2]]]);
//# sourceMappingURL=main.131ddc16.chunk.js.map