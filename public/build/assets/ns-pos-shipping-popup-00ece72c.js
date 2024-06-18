import{F as v,p as x,a as w,b as y}from"./bootstrap-c2e23f29.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{r as p,o as n,c as l,a as t,t as u,F as h,b,n as f,f as m,w as F,i as S}from"./runtime-core.esm-bundler-d74bfa4d.js";import"./currency-feccde3d.js";import"./chart-2ccf8ff7.js";const k={name:"ns-pos-shipping-popup",props:["popup"],computed:{activeTabFields(){if(this.tabs!==null){for(let s in this.tabs)if(this.tabs[s].active)return this.tabs[s].fields}return[]},useBillingInfo(){return this.tabs!==null?this.tabs.billing.fields[0].value:new Object},useShippingInfo(){return this.tabs!==null?this.tabs.shipping.fields[0].value:new Object}},unmounted(){this.orderSubscription.unsubscribe()},mounted(){this.orderSubscription=POS.order.subscribe(s=>this.order=s),this.popupCloser(),this.loadForm()},data(){return{tabs:null,orderSubscription:null,order:null,formValidation:new v}},watch:{useBillingInfo(s){s===1&&this.tabs.billing.fields.forEach(e=>{e.name!=="_use_customer_billing"&&(e.value=this.order.customer.billing?this.order.customer.billing[e.name]:e.value)})},useShippingInfo(s){s===1&&this.tabs.shipping.fields.forEach(e=>{e.name!=="_use_customer_shipping"&&(e.value=this.order.customer.shipping?this.order.customer.shipping[e.name]:e.value)})}},methods:{__,popupCloser:x,resolveIfQueued:w,submitInformations(){const s=this.formValidation.extractForm({tabs:this.tabs});for(let e in s.general)["shipping","shipping_rate"].includes(e)&&(s.general[e]=parseFloat(s.general[e]));this.order={...this.order,...s.general},delete s.general,delete s.shipping._use_customer_shipping,delete s.billing._use_customer_billing,this.order.addresses=s,POS.order.next(this.order),POS.refreshCart(),this.resolveIfQueued(!0)},closePopup(){this.resolveIfQueued(!1)},toggle(s){for(let e in this.tabs)this.tabs[e].active=!1;this.tabs[s].active=!0},loadForm(){y.get("/api/forms/ns.pos-addresses").subscribe(({tabs:s})=>{for(let e in s)e==="general"?s[e].fields.forEach(o=>{o.value=this.order[o.name]||""}):s[e].fields.forEach(o=>{o.value=this.order.addresses[e]?this.order.addresses[e][o.name]:""});this.tabs=this.formValidation.initializeTabs(s)})}}},V={class:"ns-box w-6/7-screen md:w-4/5-screen lg:w-3/5-screen h-6/7-screen md:h-4/5-screen shadow-lg flex flex-col overflow-hidden"},I={class:"p-2 border-b ns-box-header flex justify-between items-center"},B={class:"font-bold text-primary"},P={class:"tools"},j=t("i",{class:"las la-times"},null,-1),E=[j],O={class:"flex-auto ns-box-body p-2 overflow-y-auto ns-tab"},T={id:"tabs-container"},N={class:"header flex",style:{"margin-bottom":"-1px"}},Q=["onClick"],z={class:"border ns-tab-item"},D={class:"px-4"},H={class:"-mx-4 flex flex-wrap"},L={class:"p-2 flex justify-between border-t ns-box-footer"},R=t("div",null,null,-1);function q(s,e,o,A,d,r){const _=p("ns-field"),g=p("ns-button");return n(),l("div",V,[t("div",I,[t("h3",B,u(r.__("Shipping & Billing")),1),t("div",P,[t("button",{onClick:e[0]||(e[0]=i=>r.closePopup()),class:"ns-close-button rounded-full h-8 w-8 border items-center justify-center"},E)])]),t("div",O,[t("div",T,[t("div",N,[(n(!0),l(h,null,b(d.tabs,(i,a)=>(n(),l("div",{key:a,onClick:c=>r.toggle(a),class:f([i.active?"border-b-0 active":"inactive","tab rounded-tl rounded-tr border tab px-3 py-2 text-primary cursor-pointer"]),style:{"margin-right":"-1px"}},u(i.label),11,Q))),128))]),t("div",z,[t("div",D,[t("div",H,[(n(!0),l(h,null,b(r.activeTabFields,(i,a)=>(n(),l("div",{key:a,class:f("p-4 w-full md:w-1/2 lg:w-1/3")},[m(_,{onBlur:c=>d.formValidation.checkField(i),onChange:c=>d.formValidation.checkField(i),field:i},null,8,["onBlur","onChange","field"])]))),128))])])])])]),t("div",L,[R,t("div",null,[m(g,{onClick:e[1]||(e[1]=i=>r.submitInformations()),type:"info"},{default:F(()=>[S(u(r.__("Save")),1)]),_:1})])])])}const W=C(k,[["render",q]]);export{W as default};
