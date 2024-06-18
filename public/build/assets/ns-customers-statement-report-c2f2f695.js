import{_ as c,n as x}from"./currency-feccde3d.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{r as h,o as l,c as n,a as e,f as _,t as s,e as b,F as f,b as g}from"./runtime-core.esm-bundler-d74bfa4d.js";const y={name:"ns-customers-statement-report",props:["storeLogo","storeName","search-url"],data(){return{startDateField:{type:"datetimepicker",name:"startDate",value:moment(ns.date.current).startOf("day")},endDateField:{type:"datetimepicker",name:"endDate",value:moment(ns.date.current).endOf("day")},selectedCustomer:null,ns:window.ns,report:{total_purchases:0,total_orders:0,account_amount:0,owed_amount:0,credit_limit_amount:0,orders:[],wallet_transactions:[]}}},mounted(){},computed:{selectedCustomerName(){return this.selectedCustomer===null?c("N/A"):`${this.selectedCustomer.first_name} ${this.selectedCustomer.last_name}`}},methods:{__:c,nsCurrency:x,printSaleReport(){this.$htmlToPaper("report")},handleSelectedCustomer(a){this.selectedCustomer=a,nsHttpClient.post(`/api/reports/customers-statement/${a.id}`,{rangeStarts:this.startDateField.value,rangeEnds:this.endDateField.value}).subscribe({next:o=>{this.report=o},error:o=>{nsSnackBar.error(o.message||c("An unexpected error occured")).subscribe()}})}}},v={id:"report-section"},C={class:"flex -mx-2"},w={class:"px-2"},k={class:"px-2"},D={key:0,class:"px-2"},S={class:"ns-button"},F=e("i",{class:"las la-sync-alt text-xl"},null,-1),N={class:"pl-2"},B={class:"px-2"},L={class:"ns-button"},O=e("i",{class:"las la-print text-xl"},null,-1),R={class:"pl-2"},T={id:"report",class:"anim-duration-500 fade-in-entrance"},j={class:"flex w-full"},A={class:"my-4 flex justify-between w-full"},P={class:"text-primary"},V={class:"pb-1 border-b border-dashed border-box-edge"},E={class:"pb-1 border-b border-dashed border-box-edge"},H={class:"pb-1 border-b border-dashed border-box-edge"},U={class:"pb-1 border-b border-dashed border-box-edge"},W=["src","alt"],q={class:"shadow rounded"},z={class:"ns-box"},G={class:"text-center ns-box-header p-2"},I={class:"font-bold"},J={class:"border-b ns-box-body"},K={class:"table ns-table w-full"},M={class:"text-primary"},Q={class:""},X={width:"200",class:"font-semibold p-2 border text-left bg-success-secondary border-box-edge text-white print:text-black"},Y={class:"p-2 border text-right border-box-edge"},Z={class:""},$={width:"200",class:"font-semibold p-2 border text-left bg-warning-secondary border-box-edge text-white print:text-black"},ee={class:"p-2 border text-right border-box-edge"},te={class:""},se={width:"200",class:"font-semibold p-2 border text-left bg-info-secondary border-box-edge text-white print:text-black"},re={class:"p-2 border text-right border-box-edge"},oe={class:""},de={width:"200",class:"font-semibold p-2 border text-left border-box-edge"},le={class:"p-2 border text-right border-box-edge"},ne={class:""},ae={width:"200",class:"font-semibold p-2 border text-left border-box-edge"},ce={class:"p-2 border text-right border-box-edge"},_e=e("br",null,null,-1),ie=e("br",null,null,-1),ue={key:0,class:"shadow rounded overflow-hidden"},he={class:"ns-box"},be={class:"text-center ns-box-header p-2"},me={class:"font-bold"},xe={class:"border-b ns-box-body"},pe={class:"table ns-table w-full"},fe={class:"p-2 border text-left"},ge={class:"p-2 border text-right"},ye={class:"text-primary"},ve={width:"200",class:"font-semibold p-2 border text-left"},Ce={class:"p-2 border text-right"};function we(a,o,i,ke,r,t){const u=h("ns-field"),m=h("ns-search");return l(),n("div",v,[e("div",C,[e("div",w,[_(u,{field:r.startDateField},null,8,["field"])]),e("div",k,[_(u,{field:r.endDateField},null,8,["field"])]),r.selectedCustomer?(l(),n("div",D,[e("div",S,[e("button",{onClick:o[0]||(o[0]=d=>t.handleSelectedCustomer(r.selectedCustomer)),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[F,e("span",N,s(t.__("Load")),1)])])])):b("",!0),e("div",B,[e("div",L,[e("button",{onClick:o[1]||(o[1]=d=>t.printSaleReport()),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[O,e("span",R,s(t.__("Print")),1)])])])]),e("div",null,[_(m,{placeholder:t.__("Search Customer..."),label:["first_name","last_name"],value:"id",onSelect:o[2]||(o[2]=d=>t.handleSelectedCustomer(d)),url:a.searchUrl},null,8,["placeholder","url"])]),e("div",T,[e("div",j,[e("div",A,[e("div",P,[e("ul",null,[e("li",V,s(t.__("Range : {date1} — {date2}").replace("{date1}",this.startDateField.value).replace("{date2}",this.endDateField.value)),1),e("li",E,s(t.__("Document : Customer Statement")),1),e("li",H,s(t.__("Customer : {selectedCustomerName}").replace("{selectedCustomerName}",t.selectedCustomerName)),1),e("li",U,s(t.__("By : {user}").replace("{user}",r.ns.user.username)),1)])]),e("div",null,[e("img",{class:"w-24",src:i.storeLogo,alt:i.storeName},null,8,W)])])]),e("div",q,[e("div",z,[e("div",G,[e("h3",I,s(t.__("Summary")),1)]),e("div",J,[e("table",K,[e("tbody",M,[e("tr",Q,[e("td",X,s(t.__("Total Purchases")),1),e("td",Y,s(t.nsCurrency(r.report.purchases_amount)),1)]),e("tr",Z,[e("td",$,s(t.__("Due Amount")),1),e("td",ee,s(t.nsCurrency(r.report.owed_amount)),1)]),e("tr",te,[e("td",se,s(t.__("Wallet Balance")),1),e("td",re,s(t.nsCurrency(r.report.account_amount)),1)]),e("tr",oe,[e("td",de,s(t.__("Credit Limit")),1),e("td",le,s(t.nsCurrency(r.report.credit_limit_amount)),1)]),e("tr",ne,[e("td",ae,s(t.__("Total Orders")),1),e("td",ce,s(r.report.total_orders),1)])])])])])]),_e,ie,r.report.orders.length>0?(l(),n("div",ue,[e("div",he,[e("div",be,[e("h3",me,s(t.__("Orders")),1)]),e("div",xe,[e("table",pe,[e("thead",null,[e("tr",null,[e("th",fe,s(t.__("Order")),1),e("th",ge,s(t.__("Total")),1)])]),e("tbody",ye,[(l(!0),n(f,null,g(r.report.orders,d=>(l(),n("tr",{class:"",key:d.id},[e("td",ve,s(d.code),1),e("td",Ce,s(t.nsCurrency(d.total)),1)]))),128))])])])])])):b("",!0)])])}const Ne=p(y,[["render",we]]);export{Ne as default};
