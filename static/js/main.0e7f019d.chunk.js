(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(2),c=n.n(r),i=n(11),o=n.n(i),l=(n(19),n(20),n(7)),s=n(8),u=n(3),b=n(4),d=n(6),f=n(5),j=n(9),p=n.n(j),h=(n(21),function(t){var e=t.likedPosts,n=t.allPosts;return Object(a.jsxs)("div",{className:"app-header d-flex",children:[Object(a.jsx)("h1",{children:"Mikhail Liakhovets"}),Object(a.jsxs)("h2",{children:["\u0417\u0430\u043f\u0438\u0441\u0435\u0439: ",n,", \u0438\u0437 \u043d\u0438\u0445 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c: ",e]})]})}),m=(n(22),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={term:""},t.onUpdateSearch=function(e){var n=e.target.value;t.setState({term:n}),t.props.onUpdateSearchPanel(n)},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",className:"form-control searh-input",onChange:this.onUpdateSearch})}}]),n}(r.Component)),O=(n(23),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"}],a}return Object(b.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,r=(e.color,e.label),c=t.props,i=c.filter,o=c.onFilterSelect,l=i===n?"btn-info":"btn-outline-secondary";return Object(a.jsx)("button",{type:"button",className:"btn ".concat(l),onClick:function(){return o(n)},children:r},n)}));return Object(a.jsx)("div",{className:"btn-group",children:e})}}]),n}(r.Component)),x=n(13),v=(n(24),function(t){var e=t.label,n=t.onDelete,r=t.onToggleImportant,c=t.onToggleLiked,i="app-list-item d-flex justify-content-between";return t.important&&(i+=" important"),t.like&&(i+=" like"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("span",{className:"app-list-item-label",onClick:c,children:e}),Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(a.jsx)("button",{type:"button",className:"btn-star btn-sm",onClick:r,children:Object(a.jsx)("i",{className:"fa fa-star"})}),Object(a.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:n,children:Object(a.jsx)("i",{className:"fa fa-trash-o"})}),Object(a.jsx)("i",{className:"fa fa-heart"})]})]})}),g=n(32),k=(n(25),function(t){var e=t.posts,n=t.onDelete,r=t.onToggleImportant,c=t.onToggleLiked,i=e.filter((function(t){return"object"===typeof t&&function(t){for(var e in t)return!0;return!1}(t)})).map((function(t){var e=t.id,i=Object(x.a)(t,["id"]);return Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsx)(v,Object(l.a)(Object(l.a)({},i),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return r(e)},onToggleLiked:function(){return c(e)}}))},e)}));return Object(a.jsx)(g.a,{className:"app-list",children:i})}),y=(n(28),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={text:""},t.onValueChange=function(e){t.setState({text:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onAdd(t.state.text),t.setState({text:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit,children:[Object(a.jsx)("input",{type:"text",placeholder:"\u041e \u0447\u0435\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),Object(a.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(r.Component)),S=(n(29),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={data:[{label:"Start to learn React",important:!1,like:!1,id:p()()},{label:"Now I know about state in React",important:!1,like:!1,id:p()()},{label:"Need a break to play Destiny 2",important:!1,like:!1,id:p()()}],term:"",filter:"all"},t.deleteItem=function(e){t.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n.slice(0,a),c=n.slice(a+1);return{data:[].concat(Object(s.a)(r),Object(s.a)(c))}}))},t.addItem=function(e){var n={label:e,important:!1,id:p()()};t.setState((function(t){var e=t.data;return{data:[].concat(Object(s.a)(e),[n])}}))},t.onToggleImportant=function(e){t.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n[a],c=Object(l.a)(Object(l.a)({},r),{},{important:!r.important});return{data:[].concat(Object(s.a)(n.slice(0,a)),[c],Object(s.a)(n.slice(a+1)))}}))},t.onToggleLiked=function(e){t.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n[a],c=Object(l.a)(Object(l.a)({},r),{},{like:!r.like});return{data:[].concat(Object(s.a)(n.slice(0,a)),[c],Object(s.a)(n.slice(a+1)))}}))},t.searchPosts=function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))},t.filterPosts=function(t,e){return"like"===e?t.filter((function(t){return t.like})):t},t.onUpdateSearchPanel=function(e){t.setState({term:e})},t.onFilterSelect=function(e){t.setState({filter:e})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,r=t.filter,c=e.filter((function(t){return t.like})).length,i=e.length,o=this.filterPosts(this.searchPosts(e,n),r);return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(h,{likedPosts:c,allPosts:i}),Object(a.jsxs)("div",{className:"search-panel d-flex",children:[Object(a.jsx)(m,{onUpdateSearchPanel:this.onUpdateSearchPanel}),Object(a.jsx)(O,{filter:r,onFilterSelect:this.onFilterSelect})]}),Object(a.jsx)(k,{posts:o,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),Object(a.jsx)(y,{onAdd:this.addItem})]})}}]),n}(r.Component));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0e7f019d.chunk.js.map