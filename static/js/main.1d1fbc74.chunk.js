(this["webpackJsonpreact-to-do-app"]=this["webpackJsonpreact-to-do-app"]||[]).push([[0],{19:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){},28:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(2),r=a.n(s),i=a(9),d=a.n(i),c=(a(19),a(3)),o=a(10),j=a(11),l=a(13),b=a(12),h=(a(20),a(21),function(){return Object(n.jsxs)("div",{className:"headerLogo section",children:[Object(n.jsx)("span",{children:"ToDo "})," ",Object(n.jsx)("span",{children:"App"})]})}),u=(a(22),a(6)),x=a(8),k=function(t){var e,a=Object(c.a)(t.tasksArr),s=t.handleAddTaskEvents;return e=0===(a=a.map((function(t){return!1===t.done?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"eachActiveTask",children:[Object(n.jsxs)("div",{className:"informations",children:[Object(n.jsx)("div",{style:{color:"grey"},children:t.date}),!0===t.priority?Object(n.jsx)("div",{style:{color:"red"},children:t.text}):Object(n.jsx)("div",{children:t.text})]}),Object(n.jsxs)("div",{className:"actions",children:[Object(n.jsx)("button",{name:"makeTaskDone",id:t.id,onClick:s,children:Object(n.jsx)(u.a,{icon:x.a})}),Object(n.jsx)("button",{name:"removeTask",id:t.id,onClick:s,children:Object(n.jsx)(u.a,{icon:x.b})})]})]},t.id),Object(n.jsx)("hr",{})]}):null}))).length?"Brak zada\u0144 do wy\u015bwietlenia":Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{style:{marginBottom:"15px",fontSize:"24px"},children:["Lista zada\u0144:",Object(n.jsx)("hr",{})]})," ",a]}),Object(n.jsxs)("div",{className:"section",children:[e," "]})},m=(a(28),function(t){var e=t.handleAddTaskEvents,a=t.priority,s=t.minDate,r=t.date,i=t.taskText;return Object(n.jsxs)("div",{className:"addTask_Wrapper section",children:[Object(n.jsxs)("label",{htmlFor:"addTask_Task",children:["Data zadania:",Object(n.jsx)("input",{type:"date",id:"addTask_Date",name:"addTask_Date",value:r,min:s,onChange:e})]}),Object(n.jsxs)("label",{htmlFor:"addTask_Priority",children:["Dodaj wysoki priorytet:",Object(n.jsx)("input",{type:"checkbox",id:"addTask_Priority",name:"addTask_Priority",checked:a,onChange:e})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"addTask_Btn",name:"addTask_Btn",onClick:e,children:"Dodaj"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"addTask_Text",children:" Tre\u015b\u0107 zadania:"}),Object(n.jsx)("input",{type:"text",name:"addTask_Text",id:"addTask_Text",placeholder:"Wpisz tre\u015b\u0107 zadania...",onChange:e,value:i})]})]})}),O=function(t){var e=Object(c.a)(t.tasksArr);return e=e.map((function(t){var e=null;return!0===t.done&&(e=Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:t.date}),Object(n.jsx)("div",{children:t.text}),Object(n.jsx)("hr",{})]})),e})),Object(n.jsxs)("div",{className:"section",children:[Object(n.jsxs)("div",{children:["Zadania zako\u0144czone: ",Object(n.jsx)("hr",{})]}),e]})},T=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleAddTaskEvents=function(t){if("addTask_Text"===t.currentTarget.name&&n.setState({taskText:t.target.value}),"addTask_Date"===t.currentTarget.name&&n.setState({date:t.target.value}),"addTask_Priority"===t.currentTarget.name&&n.setState({priority:!n.state.priority}),"removeTask"===t.currentTarget.name){var e=Object(c.a)(n.state.tasksArr);console.log(e);var a=t.currentTarget.id;console.log(a),e=e.filter((function(t){return Number(t.id)!==Number(a)})),n.setState({tasksArr:e})}if("makeTaskDone"===t.currentTarget.name){var s=Object(c.a)(n.state.tasksArr);console.log(s);var r=t.currentTarget.id;console.log(r),s=s.map((function(t){return Number(t.id)===Number(r)&&(t.done=!0),t})),n.setState({tasksArr:s})}if("addTask_Btn"===t.currentTarget.name){var i={id:"",date:"",priority:!1,text:"",done:!1};i.id=(new Date).getTime()+Math.floor(1e3*Math.random()),i.date=n.state.date,i.priority=n.state.priority,i.text=n.state.taskText,""===i.text?window.alert("tre\u015b\u0107 zadania nie mo\u017ce by\u0107 pusta!"):n.setState({tasksArr:[].concat(Object(c.a)(n.state.tasksArr),[i]),priority:!1,taskText:"",date:n.state.minDate})}},n.state={tasksArr:[],date:"",priority:!1,taskText:"",minDate:""},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var t=new Date;t=t.toISOString().substr(0,10),this.setState({date:t,minDate:t})}},{key:"render",value:function(){var t=this.state,e=t.date,a=t.priority,s=t.taskText,r=t.minDate;return Object(n.jsxs)("div",{className:"appWrapper",children:[Object(n.jsx)(h,{}),Object(n.jsx)(m,{handleAddTaskEvents:this.handleAddTaskEvents,date:e,priority:a,taskText:s,minDate:r}),Object(n.jsx)(k,{tasksArr:this.state.tasksArr,handleAddTaskEvents:this.handleAddTaskEvents}),Object(n.jsx)(O,{tasksArr:this.state.tasksArr})]})}}]),a}(s.Component),v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),r(t),i(t)}))};d.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.1d1fbc74.chunk.js.map