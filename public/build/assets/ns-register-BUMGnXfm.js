import{F as y,I as F,b as n,n as m,d}from"./bootstrap-AnITgN8s.js";import{_ as h}from"./currency-Dtag6qPd.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as t,c as o,a as s,F as V,b as w,g as X,e as p,f as c,t as f,w as g,i as b}from"./runtime-core.esm-bundler-VrNrzzXC.js";import"./chart-Ozef1QaY.js";const N={name:"ns-register",data(){return{fields:[],xXsrfToken:null,validation:new y}},mounted(){F([n.get("/api/fields/ns.register"),n.get("/sanctum/csrf-cookie")]).subscribe(r=>{this.fields=this.validation.createFields(r[0]),this.xXsrfToken=n.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>m.doAction("ns-register-mounted",this))})},methods:{__:h,register(){if(!this.validation.validateFields(this.fields))return d.error(h("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),m.applyFilters("ns-register-submit",!0)&&n.post("/auth/sign-up",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{d.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},1500)},e=>{this.validation.triggerFieldsErrors(this.fields,e),this.validation.enableFields(this.fields),d.error(e.message).subscribe()})}}},B={class:"ns-box rounded shadow overflow-hidden transition-all duration-100"},C={class:"ns-box-body"},S={class:"p-3 -my-2"},E={key:0,class:"py-2 fade-in-entrance anim-duration-300"},R={key:0,class:"flex items-center justify-center"},j={class:"flex w-full items-center justify-center py-4"},A={href:"/sign-in",class:"link hover:underline text-sm"},H={class:"flex ns-box-footer border-t justify-between items-center p-3"};function I(r,e,K,O,a,i){const v=l("ns-field"),k=l("ns-spinner"),u=l("ns-button");return t(),o("div",B,[s("div",C,[s("div",S,[a.fields.length>0?(t(),o("div",E,[(t(!0),o(V,null,w(a.fields,(_,x)=>(t(),X(v,{key:x,field:_},null,8,["field"]))),128))])):p("",!0)]),a.fields.length===0?(t(),o("div",R,[c(k)])):p("",!0),s("div",j,[s("a",A,f(i.__("Already registered ?")),1)])]),s("div",H,[s("div",null,[c(u,{onClick:e[0]||(e[0]=_=>i.register()),type:"info"},{default:g(()=>[b(f(i.__("Register")),1)]),_:1})]),s("div",null,[c(u,{link:!0,href:"/sign-in",type:"success"},{default:g(()=>[b(f(i.__("Sign In")),1)]),_:1})])])])}const z=T(N,[["render",I]]);export{z as default};
