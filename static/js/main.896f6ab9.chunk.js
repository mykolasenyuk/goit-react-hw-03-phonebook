(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={section:"Section_section__21AHL",title:"Section_title__mnqzG"}},12:function(t,e,n){t.exports={filterInput:"Filter_filterInput__3m-XR"}},2:function(t,e,n){t.exports={contactList:"ContactList_contactList__3rW8-",contactItem:"ContactList_contactItem__18IzU",contactDescription:"ContactList_contactDescription__1hFzJ",deleteBtn:"ContactList_deleteBtn__3Q3Bl",icon:"ContactList_icon__1JjAf"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(13),o=n.n(c),r=n(15),i=n(4),s=n(5),l=n(7),u=n(6),m=n(10),d=n.n(m),h=n(0),b=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:d.a.section,children:[Object(h.jsx)("h2",{className:d.a.title,children:e}),n]})},j=n(14),p=n(11),f=n.n(p),O=n(8),v=n.n(O),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=f.a.generate(),t.numInputId=f.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{htmlFor:this.nameInputId,children:Object(h.jsx)("input",{className:v.a.formInput,placeholder:"Name",id:this.nameInputId,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})}),Object(h.jsx)("label",{htmlFor:this.numInputId,children:Object(h.jsx)("input",{className:v.a.formInput,placeholder:"Tel",id:this.numInputId,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})}),Object(h.jsx)("button",{className:v.a.formBtn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),_=n(2),x=n.n(_),I=n(16),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:x.a.contactItem,children:[Object(h.jsxs)("p",{className:x.a.contactDescription,children:[Object(h.jsx)(I.a,{className:x.a.icon}),a,": ",c]}),Object(h.jsx)("button",{className:x.a.deleteBtn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},S=n(12),L=n.n(S),y=function(t){var e=t.value,n=t.onChange;return Object(h.jsx)("label",{className:L.a.label,children:Object(h.jsx)("input",{className:L.a.filterInput,placeholder:"Find contacts by name",type:"text",value:e,onChange:n})})},N=n(32),A=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.isInList=function(t,e){return e.find((function(e){return e.name.toLocaleLowerCase().includes(t.name.toLocaleLowerCase())}))},t.addContact=function(e){var n=t.state.contacts;console.log({contacts:n});var a={id:Object(N.a)(),name:e.name,number:e.number};t.isInList(a,n)?alert("".concat(a.name," is already in your list")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(r.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLocaleLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(t)})),n=this.state.filter;return Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{title:"Phonebook",children:Object(h.jsx)(C,{onSubmit:this.addContact})}),Object(h.jsxs)(b,{title:"Contacts",children:[Object(h.jsx)(y,{value:n,onChange:this.changeFilter}),Object(h.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);o.a.render(Object(h.jsx)(A,{}),document.querySelector("#root"))},8:function(t,e,n){t.exports={formInput:"Form_formInput__1FiZ4",formBtn:"Form_formBtn__2FSI8"}}},[[30,1,2]]]);
//# sourceMappingURL=main.896f6ab9.chunk.js.map