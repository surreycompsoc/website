(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{323:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("2648fb80",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(323)},328:function(t,e,n){var r=n(33)(!1);r.push([t.i,".event-grid{margin-top:.5rem;padding:16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:16px;gap:16px;align-content:center}.event-card{background-color:#efefef;box-shadow:0 10px 20px rgba(31,45,55,.2),0 2px 6px rgba(31,45,55,.1);margin:10px;padding:16px;border-radius:.4rem;text-align:center;cursor:pointer;h3{font-weight:700}img{border-radius:.3rem;margin-bottom:.5rem}transition:transform .3s ease-in-out;transform:scale(1);&:hover{transform:scale(1.05)}}.status-completed{color:green}.status-ongoing{color:#ff0}.status-upcoming{color:#00f}",""]),t.exports=r},329:function(t,e,n){"use strict";n.r(e);n(38);var r={props:{events:{type:Array,required:!0}},computed:{reversedEvents:function(){return this.events.slice().reverse()}},methods:{getStatusClass:function(t){switch(t){case"Completed":return"status-completed";case"Ongoing":return"status-ongoing";case"Upcoming":return"status-upcoming";default:return""}}}},o=(n(327),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-grid"},t._l(t.reversedEvents,(function(e){return n("div",{key:e.id,staticClass:"event-card"},[n("NuxtLink",{attrs:{to:"/events/"+e.id}},[n("img",{attrs:{src:e.img,alt:e.title}}),t._v(" "),n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v("at: "+t._s(e.date))]),t._v(" "),n("p",[n("span",{class:t.getStatusClass(e.status)},[t._v(t._s(e.status))])])])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("054535de",content,!0,{sourceMap:!1})},345:function(t,e,n){"use strict";n(331)},346:function(t,e,n){var r=n(33)(!1);r.push([t.i,"h2{text-align:center;margin:2rem;color:#374151;font-size:2.3rem;font-weight:700}",""]),t.exports=r},361:function(t,e,n){"use strict";n.r(e);var r={components:{EventsPanel:n(329).default},data:function(){return{events:[{id:1,img:"/icon.png",title:"Refreshers Fair",date:"06/02/2024",location:"PATS Field",status:"Completed",time:"10:00 - 16:00"},{id:2,img:"/icon.png",title:"Node.js Workshop",date:"08/02/2024",location:"AP Lab 2",status:"Completed",time:"18:00 - 20:00"},{id:3,img:"/icon.png",title:"Stem Quiz",date:"15/02/24",location:"LTD",status:"Completed",time:"18:20"},{id:4,img:"/icon.png",title:"Hackathon (Introduction & Briefing)",date:"28/02/24",location:"LTE",status:"Completed",time:"13:00"},{id:5,img:"/icon.png",title:"Hackathon (Presentation & Awards)",date:"06/03/24",location:"TBC",status:"Completed",time:"TBC"}]}}},o=(n(345),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("EventsPanel",{attrs:{events:t.events}}),t._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"2rem"}},[n("LinkButton",{staticStyle:{color:"white"},attrs:{extended:"",to:"/"},scopedSlots:t._u([{key:"prefix",fn:function(){return[n("GlyphIcon",{attrs:{of:"arrow_back"}})]},proxy:!0}])},[t._v("\n      Back\n    ")])],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h2",[t._v("\n      Events Calendar\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{EventsPanel:n(329).default,GlyphIcon:n(210).default,LinkButton:n(211).default})}}]);