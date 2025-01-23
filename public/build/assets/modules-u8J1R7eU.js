import{P as g,b as m,d as c,G as M,v as k}from"./bootstrap-AnITgN8s.js";import{_ as h}from"./currency-Dtag6qPd.js";import{c as C}from"./ns-prompt-popup-CngPOI71.js";import"./index.es-CL3uzDSn.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as P,o as i,c as u,a as e,t as a,B,e as _,F as E,b as N,i as p,g as v,w as b,f as w}from"./runtime-core.esm-bundler-VrNrzzXC.js";import"./chart-Ozef1QaY.js";const D={name:"ns-modules",props:["url","upload"],data(){return{rawModules:[],searchPlaceholder:h('Press "/" to search modules'),total_enabled:0,total_disabled:0,searchText:"",searchTimeOut:null}},mounted(){this.loadModules().subscribe(),document.addEventListener("keypress",s=>{s.key==="/"&&this.$refs.searchField!==null&&setTimeout(()=>{this.$refs.searchField.select()},1)})},watch:{},computed:{noModules(){return Object.values(this.modules).length===0},modules(){if(this.searchText.length>0){const s=Object.values(this.rawModules).filter(l=>{const d=new RegExp(this.searchText,"gi"),n=l.name.match(d);return n!==null?n.length>0:!1}),t=new Object;for(let l=0;l<s.length;l++)t[s[l].namespace]=s[l];return t}return this.rawModules},noModuleMessage(){return h("No module has been uploaded yet.")}},methods:{__:h,openPopupDetails(s){g.show(C,{title:h("{module}").replace("{module}",s.name),message:s.description})},download(s){document.location="/dashboard/modules/download/"+s.namespace},truncateText(s,t,l="..."){let d=s.split(" ");return d.length>t&&(d=d.slice(0,t),d.push(l)),d.join(" ")},countWords(s){return s.split(" ").length},refreshModules(){this.loadModules().subscribe()},enableModule(s){const t=`${this.url}/${s.namespace}/enable`;m.put(t).subscribe({next:async l=>{c.success(l.message).subscribe(),this.loadModules().subscribe({next:d=>{document.location.reload()},error:d=>{c.error(d.message).subscribe()}})},error:l=>{c.error(l.message).subscribe()}})},disableModule(s){const t=`${this.url}/${s.namespace}/disable`;m.put(t).subscribe({next:l=>{c.success(l.message).subscribe(),this.loadModules().subscribe({next:d=>{document.location.reload()},error:d=>{c.error(d.message).subscribe()}})},error:l=>{c.error(l.message).subscribe()}})},loadModules(){return m.get(this.url).pipe(M(s=>(this.rawModules=s.modules,this.total_enabled=s.total_enabled,this.total_disabled=s.total_disabled,s)))},removeModule(s){if(confirm(h('Would you like to delete "{module}"? All data created by the module might also be deleted.').replace("{module}",s.name))){const t=`${this.url}/${s.namespace}/delete`;m.delete(t).subscribe({next:l=>{this.loadModules().subscribe({next:d=>{document.location.reload()}})},error:l=>{c.error(l.message,null,{duration:5e3}).subscribe()}})}}}},F={id:"module-wrapper",class:"flex-auto flex flex-col pb-4"},V={class:"flex flex-col md:flex-row md:justify-between md:items-center"},R={class:"flex flex-col md:flex-row md:justify-between md:items-center -mx-2"},W={class:"px-2"},A={class:"ns-button mb-2"},S={class:"mx-2"},U={class:"px-2"},G={class:"ns-button mb-2"},H=["href"],L={class:"px-2 w-auto"},q={class:"input-group mb-2 shadow border-2 info rounded overflow-hidden"},z=["placeholder"],I={class:"header-tabs flex -mx-4 flex-wrap"},J={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},K={href:"#"},Q={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},X={href:"#"},Y={class:"module-section flex-auto flex flex-wrap -mx-4"},Z={key:0,class:"p-4 flex-auto flex"},j={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},$={class:"font-bold text-xl text-primary text-center"},O={key:1,class:"p-4 flex-auto flex"},ee={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},se={class:"font-bold text-xl text-primary text-center"},te={class:"ns-modules rounded shadow overflow-hidden ns-box"},le={class:"module-head h-32 p-2"},oe={class:"font-semibold text-lg"},re={class:"text-xs flex justify-between"},de={class:"py-2 text-sm"},ae=["onClick"],ne={class:"ns-box-footer border-t p-2 flex justify-between"},ie={class:"flex -mx-1"},ce={class:"px-1 flex -mx-1"},ue={class:"px-1 flex"},he={class:"px-1 flex"};function _e(s,t,l,d,n,o){const x=P("ns-button");return i(),u("div",F,[e("div",V,[e("div",R,[e("span",W,[e("div",A,[e("a",{onClick:t[0]||(t[0]=r=>o.refreshModules()),class:"items-center justify-center rounded cursor-pointer shadow flex px-3 py-1"},[t[2]||(t[2]=e("i",{class:"las la-sync"},null,-1)),e("span",S,a(o.__("Refresh")),1)])])]),e("span",U,[e("div",G,[e("a",{href:l.upload,class:"flex items-center justify-center rounded cursor-pointer shadow px-3 py-1"},[e("span",null,a(o.__("Upload")),1),t[3]||(t[3]=e("i",{class:"las la-angle-right"},null,-1))],8,H)])]),e("div",L,[e("div",q,[B(e("input",{ref:"searchField",placeholder:n.searchPlaceholder,"onUpdate:modelValue":t[1]||(t[1]=r=>n.searchText=r),type:"text",class:"w-full md:w-60 outline-none py-1 px-2"},null,8,z),[[k,n.searchText]])])])]),e("div",I,[e("div",J,[e("a",K,a(o.__("Enabled"))+"("+a(n.total_enabled)+")",1)]),e("div",Q,[e("a",X,a(o.__("Disabled"))+" ("+a(n.total_disabled)+")",1)])])]),e("div",Y,[o.noModules&&n.searchText.length===0?(i(),u("div",Z,[e("div",j,[e("h2",$,a(o.noModuleMessage),1)])])):_("",!0),o.noModules&&n.searchText.length>0?(i(),u("div",O,[e("div",ee,[e("h2",se,a(o.__("No modules matches your search term.")),1)])])):_("",!0),(i(!0),u(E,null,N(o.modules,(r,y)=>(i(),u("div",{class:"px-4 w-full md:w-1/2 lg:w-1/3 xl:1/4 py-4",key:y},[e("div",te,[e("div",le,[e("h3",oe,a(r.name),1),e("p",re,[e("span",null,a(r.author),1),e("strong",null,"v"+a(r.version),1)]),e("p",de,[p(a(o.truncateText(r.description,20,"..."))+" ",1),o.countWords(r.description)>20?(i(),u("a",{key:0,class:"text-xs text-info-tertiary hover:underline",onClick:f=>o.openPopupDetails(r),href:"javascript:void(0)"},"["+a(o.__("Read More"))+"]",9,ae)):_("",!0)])]),e("div",ne,[r.enabled?_("",!0):(i(),v(x,{key:0,disabled:r.autoloaded,onClick:f=>o.enableModule(r),type:"info"},{default:b(()=>[p(a(o.__("Enable")),1)]),_:2},1032,["disabled","onClick"])),r.enabled?(i(),v(x,{key:1,disabled:r.autoloaded,onClick:f=>o.disableModule(r),type:"success"},{default:b(()=>[p(a(o.__("Disable")),1)]),_:2},1032,["disabled","onClick"])):_("",!0),e("div",ie,[e("div",ce,[e("div",ue,[w(x,{disabled:r.autoloaded,onClick:f=>o.download(r),type:"info"},{default:b(()=>t[4]||(t[4]=[e("i",{class:"las la-archive"},null,-1)])),_:2},1032,["disabled","onClick"])]),e("div",he,[w(x,{disabled:r.autoloaded,onClick:f=>o.removeModule(r),type:"error"},{default:b(()=>t[5]||(t[5]=[e("i",{class:"las la-trash"},null,-1)])),_:2},1032,["disabled","onClick"])])])])])])]))),128))])])}const ye=T(D,[["render",_e]]);export{ye as default};
