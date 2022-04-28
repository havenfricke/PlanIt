import{r as G,c as b,a as w,o as u,b as _,d as s,e as y,F as S,f as F,g as M,t as g,h as $,i as Q,j as Z,k as D,S as V,l as J,w as T,p as X,m as ee,n as j,u as O,q as C,s as te,v as oe,x as I,y as x,z as A,A as se,B as U,C as ae}from"./vendor.87dfeb6d.js";const ne=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};ne();const i=G({user:{},account:{},projects:[],sprints:[],tasks:[],notes:[],otherProjects:[]});var k=(a,e)=>{for(const[o,t]of e)a[o]=t;return a};const re={name:"App",setup(){return{appState:b(()=>i)}}},ie=s("footer",null,[s("div",{class:"bg-gradient text-light text-center p-3"})],-1);function ce(a,e,o,t,n,r){const d=w("Navbar"),v=w("router-view");return u(),_(S,null,[s("header",null,[y(d)]),s("main",null,[y(v)]),ie],64)}var le=k(re,[["render",ce]]);const B=window.location.origin.includes("localhost"),z=B?"http://localhost:3000":"",de="dev-8278vy91.us.auth0.com",ue="6AZlw6clLW8DAvkc8TWB2cvrqWvAruGc",_e="https://justindev.com";function N(a,e){if(B)console[a](`[${a}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(a){case"log":case"assert":return}console[a](`[${a}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const c={log(){N("log",arguments)},error(){N("error",arguments)},warn(){N("warn",arguments)},assert(){N("assert",arguments)},trace(){N("trace",arguments)}},p=F.create({baseURL:z,timeout:8e3});class me{async getTasks(e){const o=await p.get("/api/projects/"+e+"/tasks");i.tasks=o.data,c.log("get tasks",o.data)}async createTask(e,o){c.log("task body is...",o);const t=await p.post("/api/projects/"+e+"/tasks/",o);c.log("task created...",t.data),i.tasks=[...i.tasks,t.data]}async deleteTask(e,o){await p.delete("/api/projects/"+e+"/tasks/"+o),i.tasks=i.tasks.filter(t=>t.id!==o),c.log("task delorted",o)}async editTask(e,o,t){c.log("body is...",t),t.isComplete!=null&&t.isComplete;const n=await p.put("/api/projects/"+e+"/tasks/"+o,t);i.tasks=i.tasks.filter(r=>r.id!==o),i.tasks.push(n.data),c.log("task edited",n.data),c.log("tasks are...",i.tasks)}}const E=new me;const pe={props:{sprint:{type:Object,required:!0},task:{type:Object,required:!0}},setup(a){const e=M({sprintId:a.sprint.id});return{editable:e,async moveTask(){c.log("body is...",e),c.log("task is...",a.task)}}}};function fe(a,e,o,t,n,r){return u(),_("button",{onClick:e[0]||(e[0]=(...d)=>t.moveTask&&t.moveTask(...d)),class:"col-12 hoverable p-2 rounded bg-primary"},g(o.sprint.name),1)}var ge=k(pe,[["render",fe]]),he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge});const ve={},be={class:"modal fade",id:"myModal",tabindex:"-1","aria-labelledby":"myModalLabel","aria-hidden":"true"},ke={class:"modal-dialog"},ye={class:"modal-content"},we={class:"modal-header"},Te={class:"modal-title",id:"myModalLabel"},xe=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Se={class:"modal-body"};function je(a,e,o,t,n,r){return u(),_("div",be,[s("div",ke,[s("div",ye,[s("div",we,[s("h5",Te,[$(a.$slots,"title")]),xe]),s("div",Se,[$(a.$slots,"body")])])])])}var Ce=k(ve,[["render",je]]),Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce});const Ne="modulepreload",H={},Ee="/",q=function(e,o){return!o||o.length===0?e():Promise.all(o.map(t=>{if(t=`${Ee}${t}`,t in H)return;H[t]=!0;const n=t.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":Ne,n||(d.as="script",d.crossOrigin=""),d.href=t,document.head.appendChild(d),n)return new Promise((v,m)=>{d.addEventListener("load",v),d.addEventListener("error",m)})})).then(()=>e())};function $e(a){switch(a){case"./pages/AccountPage.vue":return q(()=>import("./AccountPage.0e382baf.js"),["assets/AccountPage.0e382baf.js","assets/AccountPage.70e01d07.css","assets/vendor.87dfeb6d.js"]);case"./pages/HomePage.vue":return q(()=>import("./HomePage.6f9870e4.js"),["assets/HomePage.6f9870e4.js","assets/HomePage.27b24bc3.css","assets/vendor.87dfeb6d.js","assets/ProjectsService.06843f16.js"]);case"./pages/ProjectsPage.vue":return q(()=>import("./ProjectsPage.d7453b2f.js"),["assets/ProjectsPage.d7453b2f.js","assets/ProjectsPage.3c6b5008.css","assets/vendor.87dfeb6d.js","assets/ProjectsService.06843f16.js"]);default:return new Promise(function(e,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+a)))})}}function L(a){return()=>$e(`./pages/${a}.vue`)}const Oe=[{path:"/",name:"Home",component:L("HomePage"),beforeEnter:D},{path:"/projects/:id",name:"Projects",component:L("ProjectsPage"),beforeEnter:D},{path:"/account",name:"Account",component:L("AccountPage"),beforeEnter:D}],R=Q({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Z(),routes:Oe});class Pe{async getAccount(){try{const e=await p.get("/account");i.account=e.data}catch(e){c.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async editAccount(e){const o=await p.put("/account",e);i.account=o.data,c.log("Account info is...",i.account)}}const Me=new Pe;class h{static async confirm(e="Are you sure?",o="You won't be able to revert this!",t="warning",n="Yes, delete it!"){try{return!!(await V.fire({title:e,text:o,icon:t,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:n})).isConfirmed}catch{return!1}}static toast(e="Warning!",o="warning",t="top-end",n=3e3,r=!0){V.fire({title:e,icon:o,position:t,timer:n,timerProgressBar:r,toast:!0,showConfirmButton:!1})}}const De={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class Ie{constructor(e=!1,o=z){}on(e,o){var t;return(t=this.socket)==null||t.on(e,o.bind(this)),this}onConnected(e){c.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){c.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var o;(o=this.socket)==null||o.emit(De.authenticate,e)}onError(e){c.error("[SOCKET_ERROR]",e)}enqueue(e,o){c.log("[ENQUEING_ACTION]",{action:e,payload:o}),this.queue.push({action:e,payload:o})}playback(){c.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(o=>{this.emit(o.action,o.payload)})}emit(e,o=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,o);if(!this.connected)return this.enqueue(e,o);this.socket.emit(e,o)}}class qe extends Ie{constructor(){super();this.on("error",this.onError)}onError(e){h.toast(e.message,"error")}}const W=new qe;class Le{async getSprints(e){const o=await p.get("/api/projects/"+e+"/sprints");i.sprints=o.data,c.log("get sprints",o.data)}async createSprint(e,o){const t=await p.post("/api/projects/"+e+"/sprints",o);i.sprints=[...i.sprints,t.data],c.log("create sprint",t.data)}async deleteSprint(e,o){await p.delete("/api/projects/"+e+"/sprints/"+o),i.sprints=i.sprints.filter(t=>t.id!==o),c.log("Sprint Delorted...",o)}}const Re=new Le,f=J({domain:de,clientId:ue,audience:_e,useRefreshTokens:!0,onRedirectCallback:a=>{R.push(a&&a.targetUrl?a.targetUrl:window.location.pathname)}});f.on(f.AUTH_EVENTS.AUTHENTICATED,async function(){p.defaults.headers.authorization=f.bearer,p.interceptors.request.use(Ve),i.user=f.user,await Me.getAccount(),W.authenticate(f.bearer)});async function Ve(a){if(!f.isAuthenticated)return a;const e=f.identity.exp*1e3,o=e<Date.now(),t=e<Date.now()+1e3*60*60*12;return o?await f.loginWithPopup():t&&(await f.getTokenSilently(),p.defaults.headers.authorization=f.bearer,W.authenticate(f.bearer)),a}const Ue={setup(){return{user:b(()=>i.user),async login(){f.loginWithPopup()},async logout(){f.logout({returnTo:window.location.origin})}}}},P=a=>(X("data-v-550eb316"),a=a(),ee(),a),Be={class:"navbar navbar-expand-lg navbar-dark bg-gradient px-3"},ze=P(()=>s("div",{class:"d-flex align-items-center justify-content-center flex-column align-items-center"},[s("img",{class:"rounded-circle hoverable",alt:"logo",src:"https://24.media.tumblr.com/f174bf55f62a80d3efe725d248a9d503/tumblr_mvd7dpipMO1s60oo7o1_500.gif",height:"50",label:"home",title:"home"})],-1)),He=P(()=>s("b",{class:"fs-3 text-light"},[s("a",{class:"text-light",href:"#"},"PlanIt")],-1)),We={class:"d-flex justify-content-end collapse navbar-collapse",id:"navbarText"},Ke={class:"navbar-text mx-0"},Ye={key:1,class:"dropdown my-2 my-lg-0"},Ge={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Fe=["src"],Qe={class:"mx-3 text-success lighten-30"},Ze={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},Je=P(()=>s("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),Xe=P(()=>s("i",{class:"mdi mdi-logout"},null,-1)),et=j(" logout "),tt=[Xe,et];function ot(a,e,o,t,n,r){const d=w("router-link");return u(),_("nav",Be,[y(d,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:T(()=>[ze]),_:1}),He,s("div",We,[s("span",Ke,[t.user.isAuthenticated?(u(),_("div",Ye,[s("div",Ge,[s("img",{src:t.user.picture,alt:"user photo",height:"40",class:"rounded-circle"},null,8,Fe),s("span",Qe,g(t.user.name),1)]),s("div",Ze,[y(d,{to:{name:"Account"}},{default:T(()=>[Je]),_:1}),s("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...v)=>t.logout&&t.logout(...v))},tt)])])):(u(),_("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...v)=>t.login&&t.login(...v))}," Login "))])])])}var st=k(Ue,[["render",ot],["__scopeId","data-v-550eb316"]]),at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st});class nt{async getNotes(e){const o=await p.get("/api/projects/"+e+"/notes");i.notes=o.data,c.log("Notes are...",i.notes)}async createNote(e,o){const t=await p.post("/api/projects/"+e+"/notes/",o);i.notes=[...i.notes,t.data],c.log("New note",t.data)}async deleteNote(e,o){await p.delete("/api/projects/"+e+"/notes/"+o),i.notes=i.notes.filter(t=>t.id!==o),c.log("Note Delorted")}}const K=new nt;const rt={props:{note:{type:Object,required:!0}},setup(a){const e=O();return{async deleteNote(){try{await h.confirm()&&await K.deleteNote(e.params.id,a.note.id)}catch(o){c.error(o),h.toast(o.message)}},account:b(()=>i.account)}}},it={class:"row border shadow d-flex justify-content-end p-3 me-3"},ct=["src"],lt={class:"col-12",style:{"word-wrap":"break-word"}};function dt(a,e,o,t,n,r){return u(),_("div",it,[s("div",null,[s("img",{class:"img-fluid rounded-circle p-1",style:{width:"auto",height:"5vh"},src:o.note.creator.picture,alt:"No_picture"},null,8,ct),s("p",null,g(o.note.creator.name),1)]),s("p",lt,g(o.note.body),1),o.note.creatorId==t.account.id?(u(),_("i",{key:0,onClick:e[0]||(e[0]=(...d)=>t.deleteNote&&t.deleteNote(...d)),class:"col-2 fs-5 mdi mdi-delete text-end hoverable mx-3"})):C("",!0)])}var ut=k(rt,[["render",dt]]),_t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ut});const mt={},pt={class:"offcanvas offcanvas-start bg-secondary",tabindex:"-1",id:"offCanvas"},ft={class:"offcanvas-header"},gt={class:"offcanvas-title",id:"offCanvasLabel"},ht=s("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),vt={class:"offcanvas-body"};function bt(a,e,o,t,n,r){return u(),_("div",pt,[s("div",ft,[s("h5",gt,[$(a.$slots,"title")]),ht]),s("div",vt,[$(a.$slots,"body")])])}var kt=k(mt,[["render",bt]]),yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kt});const wt={props:{project:{type:Object,required:!0}},setup(a){const e=te();return{goTo(o){e.push({name:o,params:{id:a.project.id}})},account:b(()=>i.account)}}};function Tt(a,e,o,t,n,r){return t.account.id==o.project.creatorId?(u(),_("p",{key:0,onClick:e[0]||(e[0]=d=>t.goTo("Projects")),type:"button",class:"p-2 hoverable fs-5 col-8 text-center btn btn-primary rounded"},g(o.project.name),1)):C("",!0)}var xt=k(wt,[["render",Tt]]),St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xt});const jt={props:{project:{type:Object,required:!0}},setup(a){return O(),{goTo(){R.push({name:"Projects",params:{id:a.project.id}})}}}};function Ct(a,e,o,t,n,r){return u(),_("p",{class:"hoverable",onClick:e[0]||(e[0]=d=>t.goTo())},g(o.project.name),1)}var At=k(jt,[["render",Ct]]),Nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:At});const Et={props:{sprint:{type:Object,required:!0}},setup(a){const e=O(),o=M({sprintId:a.sprint.id});return oe(async()=>{try{await E.getTasks(e.params.id)}catch(t){c.log(t),h.toast(t.message)}}),{editable:o,async createTask(t){try{o.sprintId=t,await E.createTask(e.params.id,o.value)}catch(n){c.error(n),h.toast(n.message)}},async deleteSprint(){try{await h.confirm()&&await Re.deleteSprint(e.params.id,a.sprint.id)}catch(t){c.log(t),h.toast(t.message)}},theseTasks:b(()=>i.tasks.filter(t=>t.sprintId==a.sprint.id)),totalTaskWeight:b(()=>{let t=i.tasks.filter(r=>r.sprintId==a.sprint.id),n=0;for(let r=0;r<t.length;r++)n+=t[r].weight,c.log(t[r].weight);return n}),account:b(()=>i.account)}}},$t={class:"row p-3"},Ot={class:"col-12"},Pt={class:"row d-flex justify-content-around align-items0center p-3 bg-gradient rounded-top"},Mt={class:"mx-3 col-8 text-light"},Dt={class:"mdi mdi-anvil text-end col-2 text-align-bottom"},It=["data-bs-target"],qt={class:"col-12 d-flex justify-content-end"},Lt=s("p",{class:"col-12 text-end mt-3 text-light"},[s("b")],-1),Rt=j("Add a task"),Vt={class:"p-2 d-flex justify-content-around align-items-center"},Ut=s("i",{class:"col-2 text-end fs-3 mdi mdi-anvil"},null,-1),Bt={class:"d-flex justify-content-end align-items-center"};function zt(a,e,o,t,n,r){const d=w("Task"),v=w("Modal");return u(),_("div",$t,[s("div",Ot,[s("div",Pt,[s("h4",Mt,[j(g(o.sprint.name)+" ",1),s("b",null,[s("i",Dt,g(t.totalTaskWeight),1)])]),s("button",{"data-bs-toggle":"modal","data-bs-target":"#taskModal"+o.sprint.id,class:"col-2 btn hoverable btn-secondary"}," + Task ",8,It),s("div",qt,[t.account.id==o.sprint.creatorId?(u(),_("i",{key:0,onClick:e[0]||(e[0]=(...m)=>t.deleteSprint&&t.deleteSprint(...m)),class:"mdi mx-3 mt-3 hoverable mdi-delete text-light fs-2",title:"delete sprint"})):C("",!0)]),Lt]),(u(!0),_(S,null,I(t.theseTasks,m=>(u(),_("div",{key:m.id},[y(d,{task:m},null,8,["task"])]))),128))]),y(v,{id:"taskModal"+o.sprint.id},{title:T(()=>[Rt]),body:T(()=>[s("form",{onSubmit:e[4]||(e[4]=(...m)=>t.createTask&&t.createTask(...m)),class:"row"},[s("div",Vt,[x(s("input",{required:"","onUpdate:modelValue":e[1]||(e[1]=m=>t.editable.name=m),class:"col-8 p-2 rounded",type:"text",placeholder:"Task name"},null,512),[[A,t.editable.name]]),Ut,x(s("input",{required:"","onUpdate:modelValue":e[2]||(e[2]=m=>t.editable.weight=m),class:"col-2 p-2 rounded",type:"number",placeholder:"1",min:"1",max:"10"},null,512),[[A,t.editable.weight]])]),s("div",Bt,[s("button",{onClick:e[3]||(e[3]=m=>t.createTask(o.sprint.id)),type:"button",class:"btn btn-success"}," Save Changes ")])],32)]),_:1},8,["id"])])}var Ht=k(Et,[["render",zt]]),Wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ht});const Kt={props:{task:{type:Object,required:!0}},setup(a){const e=M({taskId:a.task.id}),o=O();return{editable:e,async deleteTask(){try{await h.confirm()&&await E.deleteTask(o.params.id,a.task.id)}catch(t){c.error(t),h.toast(t.message)}},async editTask(){try{await E.editTask(o.params.id,a.task.id,e.value)}catch(t){c.error(t),h.toast(t.message)}},async moveTask(t){try{e.value.sprintId=t,await E.editTask(o.params.id,a.task.id,e.value)}catch(n){c.error(n),h.toast(n.message)}},async createNote(){try{await K.createNote(o.params.id,e.value)}catch(t){c.error(t),h.toast(t.message)}},theseNotes:b(()=>i.notes.filter(t=>t.taskId==a.task.id)),sprints:b(()=>i.sprints.filter(t=>t.id!=a.task.sprintId)),account:b(()=>i.account)}}},Yt={class:"row d-flex align-items-center justify-content-between bg-secondary fs-5"},Gt={class:"col-6 p-3"},Ft=["checked"],Qt={class:"mdi mdi-anvil col-2 text-align"},Zt=["data-bs-target"],Jt=["data-bs-target"],Xt=s("h1",{class:"row"},"Edit Task",-1),eo={class:"row p-3"},to=s("i",{class:"col-2 text-end fs-4 mdi mdi-anvil"},null,-1),oo={class:"row d-flex justify-content-end mt-3"},so={class:"row p-3"},ao={class:"col-12 p-2"},no=s("span",{class:"col-2 text-center fs-3"},"Move task to",-1),ro={class:"row"},io=["sprint","onClick"],co={class:"p-2",style:{height:"50vh",width:"auto",border:"1px solid #ccc",overflow:"auto"}},lo={class:"row p-3"},uo=j(" Add a Note: "),_o={class:"row d-flex justify-content-end p-2"};function mo(a,e,o,t,n,r){const d=w("OffCanvas"),v=w("Note"),m=w("Modal");return u(),_(S,null,[s("div",Yt,[s("div",Gt,[x(s("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.editable.isComplete=l),onChange:e[1]||(e[1]=(...l)=>t.editTask&&t.editTask(...l)),checked:o.task.isComplete,type:"checkbox"},null,40,Ft),[[se,t.editable.isComplete]]),j(" "+g(o.task.name),1)]),s("i",Qt,g(o.task.weight),1),s("i",{"data-bs-toggle":"modal","data-bs-target":"#notesModal"+o.task.id,title:"view task notes",class:"col-1 hoverable text-end mdi mdi-text"},null,8,Zt),t.account.id==o.task.creatorId?(u(),_("i",{key:0,"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvas"+o.task.id,title:"edit task",class:"col-1 hoverable text-center mdi mdi-cog"},null,8,Jt)):C("",!0),t.account.id==o.task.creatorId?(u(),_("i",{key:1,onClick:e[2]||(e[2]=(...l)=>t.deleteTask&&t.deleteTask(...l)),title:"delete task",class:"col-1 hoverable text-start mdi mdi-delete"})):C("",!0)]),y(d,{id:"offCanvas"+o.task.id},{title:T(()=>[Xt]),body:T(()=>[s("form",{onSubmit:e[6]||(e[6]=U((...l)=>t.editTask&&t.editTask(...l),["prevent"]))},[s("div",eo,[x(s("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>t.editable.name=l),type:"text",class:"col-8 rounded",placeholder:"Edit task name"},null,512),[[A,t.editable.name]]),to,x(s("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>t.editable.weight=l),class:"col-2 rounded",type:"number",placeholder:"1"},null,512),[[A,t.editable.weight]]),s("div",oo,[s("button",{onClick:e[5]||(e[5]=(...l)=>t.editTask&&t.editTask(...l)),class:"col-4 rounded btn-primary"}," Save ")])])],32),s("div",so,[s("div",ao,[no,s("div",ro,[(u(!0),_(S,null,I(t.sprints,l=>(u(),_("ul",{key:l.id},[s("button",{sprint:l,onClick:ho=>t.moveTask(l.id),class:"col-12 hoverable p-2 rounded bg-primary"},g(l.name),9,io)]))),128))])])])]),_:1},8,["id"]),y(m,{id:"notesModal"+o.task.id},{title:T(()=>[s("div",null,g(o.task.name),1)]),body:T(()=>[s("div",co,[(u(!0),_(S,null,I(t.theseNotes,l=>(u(),_("ul",{key:l.id},[y(v,{note:l},null,8,["note"])]))),128))]),s("form",{onSumbit:e[9]||(e[9]=U((...l)=>t.createNote&&t.createNote(...l),["prevent"]))},[s("div",lo,[uo,x(s("input",{"onUpdate:modelValue":e[7]||(e[7]=l=>t.editable.body=l),class:"col-12",type:"text"},null,512),[[A,t.editable.body]])]),s("div",_o,[s("button",{onClick:e[8]||(e[8]=(...l)=>t.createNote&&t.createNote(...l)),class:"col-3 btn btn-success hoverable"}," Add ")])],32)]),_:1},8,["id"])],64)}var po=k(Kt,[["render",mo]]),fo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:po});function go(a){Object.entries({"./components/DropDown.vue":he,"./components/Modal.vue":Ae,"./components/Navbar.vue":at,"./components/Note.vue":_t,"./components/OffCanvas.vue":yt,"./components/ProjectBanner.vue":St,"./components/ProjectList.vue":Nt,"./components/Sprint.vue":Wt,"./components/Task.vue":fo}).forEach(([o,t])=>{const n=t.name||o.substr(o.lastIndexOf("/")+1).replace(/\.\w+$/,"");a.component(n,t.default)})}const Y=ae(le);go(Y);Y.use(R).mount("#app");export{i as A,h as P,k as _,Me as a,p as b,c as l,K as n,R as r,Re as s};