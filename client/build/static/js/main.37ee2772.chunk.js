(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(t,e,n){},101:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){},179:function(t,e,n){},204:function(t,e){},222:function(t,e,n){},223:function(t,e,n){},229:function(t,e,n){},230:function(t,e,n){},231:function(t,e,n){},232:function(t,e,n){},233:function(t,e,n){},235:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(26),s=n.n(r),i=n(5),o=n(6),u=n(8),l=n(7),j=n(20),p=(n(88),n(1)),b=function(t){t.links,t.location;return Object(p.jsx)("h1",{className:"logo",children:"Blog.app"})},d=n(3),h=n(17),O=(n(90),function(t){var e=t.links,n=t.location;return Object(p.jsx)("ul",{className:"main-menu",children:e.map((function(t,e){return Object(p.jsx)("li",{children:Object(p.jsx)(h.b,{className:n.pathname===t.path?"active":"",to:t.path,children:t.title})},e)}))})}),f=Object(j.e)((function(t){return Object(p.jsx)(O,Object(d.a)({},t))})),x=(n(99),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={links:[{path:"/",title:"Home"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"},{path:"/posts/new",title:"Add post"}]},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.links;return Object(p.jsxs)("nav",{className:"navbar",children:[Object(p.jsx)(b,{}),Object(p.jsx)(f,{links:t})]})}}]),n}(c.a.Component)),v=(n(100),function(t){var e=t.children;return Object(p.jsx)("div",{className:"container-fluid",children:e})}),g=function(t){var e=t.children;return Object(p.jsx)("div",{children:Object(p.jsxs)(v,{children:[Object(p.jsx)(x,{}),e]})})},m=(n(101),function(t){var e=t.children;return Object(p.jsx)("h1",{className:"page-title",children:e})}),P=n(18),y=n(19),_=n.n(y),N=n(29),k=n(39),C="http://localhost:8000/api",w=n(30),A=n.n(w),E=function(t){return"app/".concat("posts","/").concat(t)},S=E("LOAD_POSTS"),q=E("LOAD_POST"),T=(E("ADD_POST"),E("START_REQUEST")),D=E("END_REQUEST"),R=E("ERROR_REQUEST"),B=E("SEND_REQUEST"),I=E("LOAD_POSTS_PAGE"),M=function(t){return{payload:t,type:I}},Q=function(t){return t.posts.request},U=function(t){var e=t.posts;return Math.ceil(e.amount/e.postsPerPage)},L=function(){return{type:T}},J=function(){return{type:D}},F=function(t){return{error:t,type:R}},G={data:[],request:{pending:!1,error:null,success:null,send:null},singlePost:{},amount:0,postsPerPage:10,presentPage:1};var H=n(38),z=(n(177),function(){return Object(p.jsx)(H.Animated,{animationIn:"fadeIn",animationOut:"fadeOut",children:Object(p.jsxs)("div",{className:"lds-ellipsis",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})})}),K=n(15),V=(n(178),function(t){var e=t.variant,n=void 0===e?"":e,a=t.children,c=Object(K.a)(t,["variant","children"]);return Object(p.jsx)("button",Object(d.a)(Object(d.a)({},c),{},{className:"button button--".concat(n),children:a}))}),W=(n(179),function(t){var e=t.children;return Object(p.jsx)("h2",{className:"section-title",children:e})}),X=n(81),Y=n.n(X),Z=function(t){var e=t.children,n=Object(K.a)(t,["children"]);return Object(p.jsx)("div",Object(d.a)(Object(d.a)({},n),{},{className:"html-box",children:Y()(e)}))},$=function(t,e){return t.length<1?"Error":t.length<=e?t:t.substr(0,t.lastIndexOf(" ",e))+"..."},tt=(n(222),function(t){var e=t.id,n=t.title,a=t.content;return Object(p.jsxs)("article",{className:"post-summary",children:[Object(p.jsx)(W,{children:n}),Object(p.jsx)(Z,{children:$(a,250)}),Object(p.jsx)(V,{variant:"primary",children:Object(p.jsx)(h.b,{to:"/posts/".concat(e),children:"Read more"})})]})}),et=function(t){var e=t.posts;return Object(p.jsx)("div",{children:Object(p.jsx)("section",{className:"posts-list",children:e.map((function(t){return Object(p.jsx)(tt,Object(d.a)({},t),t.id)}))})})},nt=n(47),at=(n(223),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={presentPage:t.props.initialPage},t}return Object(o.a)(n,[{key:"changePage",value:function(t){this.setState({presentPage:t}),this.props.onPageChange(t)}},{key:"render",value:function(){var t=this,e=this.props,n=e.pages,a=(e.onPageChange,this.state.presentPage);this.changePage;return Object(p.jsx)("div",{className:"pagination",children:Object(p.jsxs)("ul",{className:"pagination__list",children:[Object(p.jsx)(nt.a,{className:"pagination__list__icon",onClick:function(){return t.changePage(n-1)}}),Object(k.a)(Array(n)).map((function(e,n){return Object(p.jsx)("li",{onClick:function(){t.changePage(n)},className:"pagination__list__item ".concat(n++===a?"pagination__list__item--active":""),children:n},n)})),Object(p.jsx)(nt.b,{className:"pagination__list__icon",onClick:function(){return t.changePage(n)}})]})})}}]),n}(c.a.Component)),ct=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={counter:t.props.counter},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.counter;return Object(p.jsx)("div",{children:Object(p.jsxs)("h3",{children:["Posts number: ",t]})})}}]),n}(c.a.Component),rt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={initialPage:t.props.initialPage||1,postsPerPage:t.props.postsPerPage||10,pagination:t.props.pagination||!0},t.loadPostsPage=function(e){(0,t.props.loadPostsByPage)(e,t.state.postsPerPage)},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.loadPostsByPage)(this.state.initialPage,this.state.postsPerPage)}},{key:"render",value:function(){var t=this.props,e=t.posts,n=t.request,a=t.pages,c=this.state.pagination,r=this.loadPostsPage;return Object(p.jsxs)("div",{children:[n.pending&&null===n.success&&Object(p.jsx)(z,{}),n.pending&&!1===n.success&&Object(p.jsx)("h1",{children:"error"}),null===n.error&&!0===n.success&&Object(p.jsxs)("div",{children:[Object(p.jsx)(ct,{counter:e.length}),Object(p.jsx)(et,{posts:e}),!0===c&&Object(p.jsx)(at,{pages:a,onPageChange:r})]})]})}}]),n}(c.a.Component),st=Object(P.b)((function(t){return{posts:(e=t,e.posts.data),request:Q(t),pages:U(t)};var e}),(function(t){return{loadPostsByPage:function(e,n){return t(function(t,e){return function(){var n=Object(N.a)(_.a.mark((function n(a){var c,r,s,i,o;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(L()),n.prev=1,r=(t-1)*(c=e||10),s=c,n.next=7,A.a.get("".concat(C,"/posts/range/").concat(r,"/").concat(s));case 7:i=n.sent,o={posts:i.data.posts,amount:i.data.amount,postsPerPage:c,presentPage:t},a(M(o)),a(J()),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),a(F(n.t0.message));case 16:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(t){return n.apply(this,arguments)}}()}(e,n))}}}))(rt),it=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{children:"Blog"}),Object(p.jsx)(st,{initialPage:1,postsPerPage:3,pagination:"false"})]})},ot=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{children:"Posts list"}),Object(p.jsx)(st,{initialPage:1,postsPerPage:10})]})},ut=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{children:"Contac "}),Object(p.jsx)("p",{children:"Comapny Name"}),Object(p.jsx)("p",{children:"Street number, street name"}),Object(p.jsx)("p",{children:"Mobile number: xxx-xxx-xxx"})]})},lt=function(){return Object(p.jsx)("div",{children:"NotFound"})},jt=n(37),pt=n(82),bt=n.n(pt),dt=(n(227),n(228),n(229),function(t){var e=t.value,n=t.label,a=t.onChange,c=Object(K.a)(t,["value","label","onChange"]);return Object(p.jsxs)("label",{className:"text-field",children:[Object(p.jsx)("span",{className:"text-field__label ".concat(!e.length>0?"text-field__label--big":""),children:n}),Object(p.jsx)("input",Object(d.a)(Object(d.a)({},c),{},{value:e,onChange:a,className:"text-field__input"}))]})}),ht=n(24),Ot=(n(230),function(t){var e=t.variant,n=void 0===e?"":e,a=t.children,c=Object(K.a)(t,["variant","children"]);return Object(p.jsx)(H.Animated,{animationIn:"fadeIn",animationOut:"fadeOut",children:Object(p.jsxs)("div",Object(d.a)(Object(d.a)({},c),{},{className:"alert alert--".concat(n),children:[function(){switch(n){case"info":return Object(p.jsx)(ht.c,{});case"success":return Object(p.jsx)(ht.a,{});case"warning":case"error":return Object(p.jsx)(ht.b,{});default:return Object(p.jsx)(ht.c,{})}}(),Object(p.jsx)("span",{className:"alert__desc",children:a})]}))})}),ft=(n(231),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={post:{title:"",author:"",content:""}},t.handleChange=function(e){var n=t.state.post;t.setState({post:Object(d.a)(Object(d.a)({},n),{},Object(jt.a)({},e.target.name,e.target.value))})},t.handleEditor=function(e){var n=t.state.post;t.setState({post:Object(d.a)(Object(d.a)({},n),{},{content:e})})},t.addPost=function(e){var n=t.props.addPost,a=t.state.post;e.preventDefault(),n(a)},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.post,e=this.props.request,n=this.handleChange,a=this.handleEditor,c=this.addPost;return e.error?Object(p.jsx)(Ot,{variant:"error",children:e.error}):e.send?Object(p.jsx)(Ot,{variant:"success",children:"Post has been added!"}):e.pending?Object(p.jsx)(z,{}):Object(p.jsxs)("form",{onSubmit:c,children:[Object(p.jsx)(dt,{label:"Title",name:"title",value:t.title,onChange:n}),Object(p.jsx)(dt,{label:"Author",name:"author",value:t.author,onChange:n}),Object(p.jsx)(W,{children:"Edit post content"}),Object(p.jsx)(bt.a,{className:"content-editor",text:t.content,option:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}},onChange:a}),Object(p.jsx)(V,{variant:"primary",children:"Add post"})]})}}]),n}(c.a.Component)),xt=Object(P.b)((function(t){return{request:Q(t)}}),(function(t){return{addPost:function(e){return t(function(t){return function(){var e=Object(N.a)(_.a.mark((function e(n){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(L()),e.prev=1,e.next=4,A.a.post("".concat(C,"/posts"),t);case 4:e.sent,n({type:B}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(F(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(ft),vt=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(xt,{})})},gt=(n(232),function(t){var e=t.children,n=Object(K.a)(t,["children"]);return Object(p.jsx)("h2",Object(d.a)(Object(d.a)({},n),{},{className:"small-title",children:e}))}),mt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this.props;(0,t.loadPost)(t.id)}},{key:"render",value:function(){var t=this.props,e=t.request,n=t.post;return Object(p.jsxs)("div",{children:[e.pending&&null===e.success&&Object(p.jsx)(z,{}),e.pending&&!1===e.success&&Object(p.jsx)("h1",{children:"error"}),null===e.error&&!0===e.success&&Object(p.jsxs)("article",{className:"post-summary",children:[Object(p.jsx)(gt,{children:n.title}),Object(p.jsx)(Z,{children:n.content}),"Author: ",n.author]})]})}}]),n}(c.a.Component),Pt=Object(P.b)((function(t){return{request:Q(t),post:(e=t,e.posts.singlePost)};var e}),(function(t){return{loadPost:function(e){return t(function(t){return function(){var e=Object(N.a)(_.a.mark((function e(n){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(L()),e.prev=1,e.next=4,A.a.get("".concat(C,"/posts/").concat(t));case 4:a=e.sent,n({payload:a.data,type:q}),n(J()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(F(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(mt),yt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props.match.params.id;return Object(p.jsx)("div",{children:Object(p.jsx)(Pt,{id:t})})}}]),n}(c.a.Component),_t=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={posts:[]},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(g,{children:Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/",exact:!0,component:it}),Object(p.jsx)(j.a,{path:"/contact",exact:!0,component:ut}),Object(p.jsx)(j.a,{path:"/posts",exact:!0,component:ot}),Object(p.jsx)(j.a,{path:"/posts/new",exact:!0,component:vt}),Object(p.jsx)(j.a,{path:"/posts/:id",exact:!0,component:yt}),Object(p.jsx)(j.a,{component:lt})]})})}}]),n}(c.a.Component),Nt=n(21),kt=n(83),Ct=Object(Nt.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I:return Object(d.a)(Object(d.a)({},t),{},{postsPerPage:e.payload.postsPerPage,presentPage:e.payload.presentPage,amount:e.payload.amount,data:Object(k.a)(e.payload.posts)});case B:return Object(d.a)(Object(d.a)({},t),{},{request:{pending:!1,error:null,send:!0}});case q:return Object(d.a)(Object(d.a)({},t),{},{singlePost:e.payload});case S:return Object(d.a)(Object(d.a)({},t),{},{data:e.payload});case T:return Object(d.a)(Object(d.a)({},t),{},{request:{pending:!0,error:null,success:null}});case D:return Object(d.a)(Object(d.a)({},t),{},{request:{pending:!1,error:null,success:!0}});case R:return Object(d.a)(Object(d.a)({},t),{},{request:{pending:!1,error:e.error,success:!1}});default:return t}}}),wt=Object(Nt.e)(Ct,Object(Nt.d)(Object(Nt.a)(kt.a))),At=(n(233),n(234),function(){return Object(p.jsx)(P.a,{store:wt,children:Object(p.jsx)(h.a,{children:Object(p.jsx)(_t,{})})})});s.a.render(Object(p.jsx)(At,{}),document.getElementById("root"))},88:function(t,e,n){},90:function(t,e,n){},99:function(t,e,n){}},[[235,1,2]]]);
//# sourceMappingURL=main.37ee2772.chunk.js.map