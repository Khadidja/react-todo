(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(56)},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),c=a.n(r),l=a(24),i=a(6),s=a(7),d=a(9),u=a(8),p=a(10),m=a(59),h=a(58),g=a(12),b=a.n(g),f=a(1),y=a.n(f),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{textDecoration:a.props.todo.completed?"line-through":"none",padding:"6px",textAlign:"center"}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title,n=e.completed;return o.a.createElement("div",{className:"list-group-item"},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("input",{style:E,type:"checkbox",onChange:this.props.toggleComplete.bind(this,t),checked:n}),o.a.createElement("h5",{style:this.getStyle()},a),o.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",style:j,onClick:this.props.deleteTodo.bind(this,t)},"del")))}}]),t}(n.Component);v.prototypes={todo:y.a.object.isRequired,toggleComplete:y.a.func.isRequired,deleteTodo:y.a.func.isRequired};var E={margin:"12px",padding:"0"},j={textAlign:"right"},O=v,C=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return o.a.createElement(O,{key:t.id,todo:t,toggleComplete:e.props.toggleComplete,deleteTodo:e.props.deleteTodo})})}}]),t}(n.Component),T=a(57);function x(){return o.a.createElement("header",{className:"jumbotron text-center"},o.a.createElement("h1",null,"To-Do List"),o.a.createElement(T.a,{style:N,to:"/"},"Home"),o.a.createElement(T.a,{style:N,to:"/about"},"About"))}var N={margin:"16px",borderBottom:"1px solid"},k=a(22),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},a.onChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.addTodo=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"input-group lg-3",onSubmit:this.addTodo},o.a.createElement("div",{className:"input-group input-group-lg"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Add todo...",name:"title",value:this.state.title,onChange:this.onChange}),o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("input",{type:"submit",value:"add",className:"btn btn-primary"}))))}}]),t}(n.Component);w.prototypes={addTodo:y.a.func.isRequired};var A=w;function S(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"page-header"},"About"),o.a.createElement("p",null,"A To-Do list app to learn React."))}a(52);var D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},a.toggleComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.deleteTodo=function(e){b.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(t){return a.setState({todos:a.state.todos.filter(function(t){return t.id!==e})})})},a.addTodo=function(e){b.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then(function(e){return a.setState({todos:[].concat(Object(l.a)(a.state.todos),[e.data])})})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(t){return e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(x,null),o.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(A,{addTodo:e.addTodo}),o.a.createElement(C,{todos:e.state.todos,toggleComplete:e.toggleComplete,deleteTodo:e.deleteTodo}))}}),o.a.createElement(h.a,{path:"/about",component:S}))))}}]),t}(n.Component);c.a.render(o.a.createElement(m.a,{basename:"/react-todo"},o.a.createElement(D,null)),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.bf00c57c.chunk.js.map