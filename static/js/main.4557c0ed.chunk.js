(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),d=a(3),s=a(4),l=a(6),o=a(5),u=a(7),p=(a(61),a(62),a(8)),v=a(13),f=a(2),h=a.n(f),g=a(12),b=(a(69),a(70),a(71),a(28)),m=(a(72),function(e){var t=e.handleSave,a=e.saveLabel,n=e.handleDelete,i=e.handleCancel;return r.a.createElement("div",{className:"Edit-Buttons"},r.a.createElement("div",{tabIndex:"0",className:"Edit-Button",style:{backgroundColor:"#5aac44"},onClick:t},a),n&&r.a.createElement("div",{tabIndex:"0",className:"Edit-Button",style:{backgroundColor:"#EA2525",marginLeft:0},onClick:n},"Delete"),r.a.createElement("div",{tabIndex:"0",className:"Edit-Button-Cancel",onClick:i},r.a.createElement("ion-icon",{name:"close"})))}),E=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={text:a.props.text||""},a.handleChangeText=function(e){return a.setState({text:e.target.value})},a.onEnter=function(e){var t=a.state.text;13===e.keyCode&&(e.preventDefault(),a.props.onSave(t))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.text,t=this.props,a=t.onSave,n=t.onCancel,i=t.onDelete,c=t.adding;return r.a.createElement("div",{className:"Edit-Card"},r.a.createElement("div",{className:"Card"},r.a.createElement(b.a,{autoFocus:!0,className:"Edit-Card-Textarea",placeholder:"Enter the text for this card...",value:e,onChange:this.handleChangeText,onKeyDown:this.onEnter})),r.a.createElement(m,{handleSave:function(){return a(e)},saveLabel:c?"Add card":"Save",handleDelete:i,handleCancel:n}))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1,editing:!1},a.startHover=function(){return a.setState({hover:!0})},a.endHover=function(){return a.setState({hover:!1})},a.startEditing=function(){return a.setState({hover:!1,editing:!0,text:a.props.card.text})},a.endEditing=function(){return a.setState({hover:!1,editing:!1})},a.editCard=function(){var e=Object(g.a)(h.a.mark(function e(t){var n,r,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.props,r=n.card,i=n.dispatch,a.endEditing(),i({type:"CHANGE_CARD_TEXT",payload:{cardId:r._id,cardText:t}});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.deleteCard=Object(g.a)(h.a.mark(function e(){var t,n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.props,n=t.listId,r=t.card,(0,t.dispatch)({type:"DELETE_CARD",payload:{cardId:r._id,listId:n}});case 2:case"end":return e.stop()}},e)})),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.card,n=t.index,i=this.state,c=i.hover;return i.editing?r.a.createElement(E,{text:a.text,onSave:this.editCard,onDelete:this.deleteCard,onCancel:this.endEditing}):r.a.createElement(v.b,{draggableId:a._id,index:n},function(t,n){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{className:"Card",onMouseEnter:e.startHover,onMouseLeave:e.endHover}),c&&r.a.createElement("div",{className:"Card-Icons"},r.a.createElement("div",{className:"Card-Icon",onClick:e.startEditing},r.a.createElement("ion-icon",{name:"create"}))),a.text)})}}]),t}(n.Component),y=Object(p.b)(function(e,t){return{card:e.cardsById[t.cardId]}})(O),j=(a(110),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).ref=r.a.createRef(),a.onEnter=function(e){13===e.keyCode&&(e.preventDefault(),a.props.saveList())},a.handleClick=function(e){a.ref.current.contains(e.target)||a.props.onClickOutside()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick,!1)}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.handleChangeTitle,n=e.deleteList;return r.a.createElement("div",{className:"List-Title-Edit",ref:this.ref},r.a.createElement(b.a,{autoFocus:!0,className:"List-Title-Textarea",placeholder:"Enter list title...",value:t,onChange:a,onKeyDown:this.onEnter,style:{width:n?220:245}}),n&&r.a.createElement("ion-icon",{name:"trash",onClick:n}))}}]),t}(n.Component)),C=a(14),I=a.n(C),L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={editingTitle:!1,title:a.props.list.title,addingCard:!1},a.toggleAddingCard=function(){return a.setState({addingCard:!a.state.addingCard})},a.addCard=function(){var e=Object(g.a)(h.a.mark(function e(t){var n,r,i,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.props,r=n.listId,i=n.dispatch,a.toggleAddingCard(),c=I.a.generate(),i({type:"ADD_CARD",payload:{cardText:t,cardId:c,listId:r}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.toggleEditingTitle=function(){return a.setState({editingTitle:!a.state.editingTitle})},a.handleChangeTitle=function(e){return a.setState({title:e.target.value})},a.editListTitle=Object(g.a)(h.a.mark(function e(){var t,n,r,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.props,n=t.listId,r=t.dispatch,i=a.state.title,a.toggleEditingTitle(),r({type:"CHANGE_LIST_TITLE",payload:{listId:n,listTitle:i}});case 4:case"end":return e.stop()}},e)})),a.deleteList=Object(g.a)(h.a.mark(function e(){var t,n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.props,n=t.listId,r=t.list,(0,t.dispatch)({type:"DELETE_LIST",payload:{listId:n,cards:r.cards}});case 2:case"end":return e.stop()}},e)})),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.index,i=this.state,c=i.editingTitle,d=i.addingCard,s=i.title;return r.a.createElement(v.b,{draggableId:a._id,index:n},function(t,n){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{className:"List"}),c?r.a.createElement(j,{list:a,title:s,handleChangeTitle:e.handleChangeTitle,saveList:e.editListTitle,onClickOutside:e.editListTitle,deleteList:e.deleteList}):r.a.createElement("div",{className:"List-Title",onClick:e.toggleEditingTitle},a.title),r.a.createElement(v.c,{droppableId:a._id},function(e,t){return r.a.createElement("div",{ref:e.innerRef},a.cards&&a.cards.map(function(e,t){return r.a.createElement(y,{key:e,cardId:e,index:t,listId:a._id})}),e.placeholder)}),d?r.a.createElement(E,{onSave:e.addCard,onCancel:e.toggleAddingCard,adding:!0}):r.a.createElement("div",{className:"Toggle-Add-Card",onClick:e.toggleAddingCard},r.a.createElement("ion-icon",{name:"add"})," Add a card"))})}}]),t}(n.Component),T=Object(p.b)(function(e,t){return{list:e.listsById[t.listId]}})(L),x=(a(119),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={title:""},a.handleChangeTitle=function(e){return a.setState({title:e.target.value})},a.createList=Object(g.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state.title,n=a.props.dispatch,a.props.toggleAddingList(),n({type:"ADD_LIST",payload:{listId:I.a.generate(),listTitle:t}});case 4:case"end":return e.stop()}},e)})),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.toggleAddingList,t=this.state.title;return r.a.createElement("div",{className:"Add-List-Editor"},r.a.createElement(j,{title:t,handleChangeTitle:this.handleChangeTitle,onClickOutside:e,saveList:this.createList}),r.a.createElement(m,{handleSave:this.createList,saveLabel:"Add list",handleCancel:e}))}}]),t}(n.Component)),A=Object(p.b)()(x),D=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={addingList:!1},a.toggleAddingList=function(){return a.setState({addingList:!a.state.addingList})},a.handleDragEnd=function(e){var t=e.source,n=e.destination,r=e.type;if(n){var i=a.props.dispatch;"COLUMN"!==r?t.index===n.index&&t.droppableId===n.droppableId||i({type:"MOVE_CARD",payload:{sourceListId:t.droppableId,destListId:n.droppableId,oldCardIndex:t.index,newCardIndex:n.index}}):t.index!==n.index&&i({type:"MOVE_LIST",payload:{oldListIndex:t.index,newListIndex:n.index}})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.board,a=this.state.addingList;return r.a.createElement(v.a,{onDragEnd:this.handleDragEnd},r.a.createElement(v.c,{droppableId:"board",direction:"horizontal",type:"COLUMN"},function(n,i){return r.a.createElement("div",{className:"Board",ref:n.innerRef},t.lists.map(function(e,t){return r.a.createElement(T,{listId:e,key:e,index:t})}),n.placeholder,r.a.createElement("div",{className:"Add-List"},a?r.a.createElement(A,{toggleAddingList:e.toggleAddingList}):r.a.createElement("div",{onClick:e.toggleAddingList,className:"Add-List-Button"},r.a.createElement("ion-icon",{name:"add"})," Add a list")))}))}}]),t}(n.Component),k=Object(p.b)(function(e){return{board:e.board}})(D),w=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Header"},"React Trello Clone"),r.a.createElement(k,null))}}]),t}(n.Component),S=a(38),_=a(9),N=a(1),R=a(30),B=a(39),H=a(10),M=a(55),P=a.n(M);function G(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var J=Object(H.c)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lists:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":var a=t.payload.listId;return{lists:[].concat(Object(B.a)(e.lists),[a])};case"MOVE_LIST":var n=t.payload,r=n.oldListIndex,i=n.newListIndex,c=Array.from(e.lists),d=c.splice(r,1),s=Object(R.a)(d,1)[0];return c.splice(i,0,s),{lists:c};case"DELETE_LIST":var l=t.payload.listId;return{lists:e.lists.filter(function(e){return e!==l})};default:return e}},listsById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":var a=t.payload,n=a.listId,r=a.listTitle;return Object(N.a)({},e,Object(_.a)({},n,{_id:n,title:r,cards:[]}));case"CHANGE_LIST_TITLE":var i=t.payload,c=i.listId,d=i.listTitle;return Object(N.a)({},e,Object(_.a)({},c,Object(N.a)({},e[c],{title:d})));case"DELETE_LIST":var s=t.payload.listId;return e[s],Object(S.a)(e,[s].map(G));case"ADD_CARD":var l=t.payload,o=l.listId,u=l.cardId;return Object(N.a)({},e,Object(_.a)({},o,Object(N.a)({},e[o],{cards:[].concat(Object(B.a)(e[o].cards),[u])})));case"MOVE_CARD":var p,v=t.payload,f=v.oldCardIndex,h=v.newCardIndex,g=v.sourceListId,b=v.destListId;if(g===b){var m=Array.from(e[g].cards),E=m.splice(f,1),O=Object(R.a)(E,1)[0];return m.splice(h,0,O),Object(N.a)({},e,Object(_.a)({},g,Object(N.a)({},e[g],{cards:m})))}var y=Array.from(e[g].cards),j=y.splice(f,1),C=Object(R.a)(j,1)[0],I=Array.from(e[b].cards);return I.splice(h,0,C),Object(N.a)({},e,(p={},Object(_.a)(p,g,Object(N.a)({},e[g],{cards:y})),Object(_.a)(p,b,Object(N.a)({},e[b],{cards:I})),p));case"DELETE_CARD":var L=t.payload,T=L.cardId,x=L.listId;return Object(N.a)({},e,Object(_.a)({},x,Object(N.a)({},e[x],{cards:e[x].cards.filter(function(e){return e!==T})})));default:return e}},cardsById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CARD":var a=t.payload,n=a.cardText,r=a.cardId;return Object(N.a)({},e,Object(_.a)({},r,{text:n,_id:r}));case"CHANGE_CARD_TEXT":var i=t.payload,c=i.cardText,d=i.cardId;return Object(N.a)({},e,Object(_.a)({},d,Object(N.a)({},e[d],{text:c})));case"DELETE_CARD":var s=t.payload.cardId;return e[s],Object(S.a)(e,[s].map(G));case"DELETE_LIST":var l=t.payload.cards;return Object.keys(e).filter(function(e){return!l.includes(e)}).reduce(function(t,a){return Object(N.a)({},t,Object(_.a)({},a,e[a]))},{});default:return e}}}),V=(function(){try{var e=localStorage.getItem("state");if(null===e)return;JSON.parse(e)}catch(t){return}}(),Object(H.e)(J));V.subscribe(P()(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(V.getState())},1e3)),console.log(V.getState()),V.getState().board.lists.length||(console.log("SEED"),function(e){console.log("Insert first list");var t=I.a.generate();e.dispatch({type:"ADD_LIST",payload:{listId:t,listTitle:"ToDo"}}),console.log("Insert second list");I.a.generate()}(V));var U=V;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(120);var W=document.getElementById("root");c.a.render(r.a.createElement(p.a,{store:U},r.a.createElement(w,null)),W),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a(121)},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.4557c0ed.chunk.js.map