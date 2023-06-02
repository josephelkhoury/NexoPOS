import{b as x}from"./components-7a04ba45.js";import"./npm~vue-6a0d7c4c.js";import{_ as u}from"./currency-47ec5b79.js";import{n as m,a as h}from"./bootstrap-f2d81cbc.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as y,a6 as n,z as d,A as e,y as a,x as _,ax as f}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as s}from"./npm~@vue~shared_-82b01912.js";import{c as b}from"./npm~@vue~runtime-dom_-a668b91e.js";import"./ns-alert-popup-883dcb0b.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./npm~moment-fbc5633a.js";import"./ns-switch-0a4d4345.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./ns-pos-confirm-popup-268ffc19.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./ns-paginate-965aeeab.js";import"./npm~vue-upload-component-9e5d4563.js";import"./npm~lodash-f7a36ac5.js";import"./ns-numpad-plus-f3ffaa01.js";import"./ns-pos-loading-popup-f38cabd2.js";import"./ns-prompt-popup-64b67141.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";const w={name:"ns-database-update",data(){return{files:Update.files,returnLink:Update.returnLink,modules:Update.modules,updating:!1,xXsrfToken:null,updatingModule:!1,error:!1,lastErrorMessage:"",index:0}},computed:{totalModules(){return Object.values(this.modules).length}},mounted(){m.get("/sanctum/csrf-cookie").subscribe(r=>{try{this.xXsrfToken=m.response.config.headers["X-XSRF-TOKEN"],this.proceedUpdate()}catch(o){h.error(o.message).subscribe()}})},methods:{__:u,async proceedUpdate(){this.updating=!0;for(let r in this.files)try{this.index=parseInt(r)+1;const o=await new Promise((p,l)=>{m.post("/api/update",{file:this.files[r]},{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:p,error:l})})}catch(o){return this.updating=!1,this.error=!0,this.lastErrorMessage=o.message||u("An unexpected error occurred"),h.error(o.message).subscribe()}if(this.index=0,Object.values(this.modules).length>0){this.updatingModule=!0;let r=0;for(let o in this.modules)try{r+=1,this.index=r;const p=await new Promise((l,t)=>{m.post("/api/update",{module:this.modules[o]},{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:l,error:t})})}catch(p){return this.updating=!1,this.error=!0,this.lastErrorMessage=p.message||u("An unexpected error occurred"),h.error(p.message).subscribe()}}this.error=!1,this.updating=!1,document.location=this.returnLink}}},k={class:"container mx-auto flex-auto items-center justify-center flex"},v={id:"database-update",class:"w-full md:w-2/3 lg:w-1/3"},U=e("div",{class:"flex justify-center items-center py-6"},[e("img",{class:"w-32",src:"/svg/nexopos-variant-1.svg",alt:"NexoPOS"})],-1),M={class:"my-3 rounded shadow ns-box"},X={class:"border-b ns-box-header py-4 flex items-center justify-center"},E={class:"text-xl font-bold"},T={class:"p-2 ns-box-body"},j={class:"text-center text-sm py-4"},N={key:0,class:"border-l-4 text-sm ns-notice error p-4"},O={class:"rounded whitespace-pre-wrap my-2 p-2"},S={class:"border-t ns-box-footer p-2 flex justify-between"},C=e("i",{class:"las la-sync"},null,-1),A={class:"ml-1"},B={class:"flex"},L=e("i",{class:"las la-sync animate-spin"},null,-1),P={key:0},R={key:1,class:"mr-1"},D={key:2},F={key:3,class:"mr-1"},I=e("i",{class:"las la-undo"},null,-1),K={class:"ml-1"};function H(r,o,p,l,t,i){const c=y("ns-button");return n(),d("div",k,[e("div",v,[U,e("div",M,[e("div",X,[e("h3",E,s(i.__("Database Update")),1)]),e("div",T,[e("p",j,s(i.__("In order to keep NexoPOS running smoothly with updates, we need to proceed to the database migration. In fact you don't need to do any action, just wait until the process is done and you'll be redirected.")),1),t.error?(n(),d("div",N,[e("p",null,s(i.__("Looks like an error has occurred during the update. Usually, giving another shot should fix that. However, if you still don't get any chance."))+" "+s(i.__("Please report this message to the support : ")),1),e("pre",O,s(t.lastErrorMessage),1)])):a("",!0)]),e("div",S,[e("div",null,[t.error?(n(),_(c,{key:0,onClick:o[0]||(o[0]=z=>i.proceedUpdate()),type:"error",class:"rounded shadow-inner"},{default:f(()=>[C,e("span",A,s(i.__("Try Again")),1)]),_:1})):a("",!0)]),e("div",B,[t.updating?(n(),_(c,{key:0,type:"info",class:"rounded shadow-inner"},{default:f(()=>[L,t.updatingModule?a("",!0):(n(),d("span",P,s(i.__("Updating"))+"...",1)),t.updatingModule?a("",!0):(n(),d("span",R,s(t.index)+"/"+s(t.files.length),1)),t.updatingModule?(n(),d("span",D,s(i.__("Updating Modules"))+"...",1)):a("",!0),t.updatingModule?(n(),d("span",F,s(t.index)+"/"+s(i.totalModules),1)):a("",!0)]),_:1})):a("",!0),t.updating?a("",!0):(n(),_(c,{key:1,type:"info",href:t.returnLink,class:"rounded shadow-inner"},{default:f(()=>[I,e("span",K,s(i.__("Return")),1)]),_:1},8,["href"]))])])])])])}const V=g(w,[["render",H]]);window.nsUpdate=b({components:{nsDatabaseUpdate:V}});for(let r in x)window.nsUpdate.component(r,x[r]);window.nsUpdate.mount("#main-container");
