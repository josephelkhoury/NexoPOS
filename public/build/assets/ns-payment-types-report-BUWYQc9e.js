import{h as l,d,b as h}from"./bootstrap-AnITgN8s.js";import{c as f,e as x}from"./components-3Sw5wp8u.js";import{_ as i,n as y}from"./currency-Dtag6qPd.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as D,o as c,c as _,a as e,f as u,t as s,F as g,b as k}from"./runtime-core.esm-bundler-VrNrzzXC.js";import"./chart-Ozef1QaY.js";import"./ns-prompt-popup-CngPOI71.js";import"./ns-avatar-image-DN1kzNwi.js";import"./index.es-CL3uzDSn.js";const w={name:"ns-payment-types-report",props:["storeName","storeLogo"],data(){return{startDateField:{type:"datetimepicker",value:l(ns.date.current).startOf("day").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:l(ns.date.current).endOf("day").format("YYYY-MM-DD HH:mm:ss")},report:[],ns:window.ns,field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:f,nsDateTimePicker:x},computed:{},mounted(){},methods:{__:i,nsCurrency:y,printSaleReport(){this.$htmlToPaper("sale-report")},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return d.error(i("Unable to proceed. Select a correct time range.")).subscribe();const p=l(this.startDateField.value);if(l(this.endDateField.value).isBefore(p))return d.error(i("Unable to proceed. The current time range is not valid.")).subscribe();h.post("/api/reports/payment-types",{startDate:this.startDateField.value,endDate:this.endDateField.value}).subscribe({next:o=>{this.report=o},error:o=>{d.error(o.message).subscribe()}})}}},F={id:"report-section",class:"px-4"},Y={class:"flex -mx-2"},C={class:"px-2"},M={class:"px-2"},T={class:"px-2"},B={class:"pl-2"},S={class:"px-2"},H={class:"pl-2"},P={id:"sale-report",class:"anim-duration-500 fade-in-entrance"},R={class:"flex w-full"},L={class:"my-4 flex justify-between w-full"},N={class:"text-secondary"},j={class:"pb-1 border-b border-dashed"},O={class:"pb-1 border-b border-dashed"},U={class:"pb-1 border-b border-dashed"},V=["src","alt"],E={class:"bg-box-background shadow rounded my-4"},q={class:"border-b border-box-edge"},z={class:"table ns-table w-full"},A={class:"text-primary"},G={class:"text-primary border p-2 text-left"},I={width:"150",class:"text-primary border p-2 text-right"},J={class:"text-primary"},K={class:"p-2 border border-box-edge"},Q={class:"p-2 border text-right"},W={class:"text-primary font-semibold"},X={class:"p-2 border border-box-edge text-primary"},Z={class:"p-2 border text-right"};function $(p,r,o,ee,a,t){const m=D("ns-field");return c(),_("div",F,[e("div",Y,[e("div",C,[u(m,{field:a.startDateField},null,8,["field"])]),e("div",M,[u(m,{field:a.endDateField},null,8,["field"])]),e("div",T,[e("button",{onClick:r[0]||(r[0]=n=>t.loadReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[r[2]||(r[2]=e("i",{class:"las la-sync-alt text-xl"},null,-1)),e("span",B,s(t.__("Load")),1)])]),e("div",S,[e("button",{onClick:r[1]||(r[1]=n=>t.printSaleReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[r[3]||(r[3]=e("i",{class:"las la-print text-xl"},null,-1)),e("span",H,s(t.__("Print")),1)])])]),e("div",P,[e("div",R,[e("div",L,[e("div",N,[e("ul",null,[e("li",j,s(t.__("Date : {date}").replace("{date}",a.ns.date.current)),1),e("li",O,s(t.__("Document : Payment Type")),1),e("li",U,s(t.__("By : {user}").replace("{user}",a.ns.user.username)),1)])]),e("div",null,[e("img",{class:"w-24",src:o.storeLogo,alt:o.storeName},null,8,V)])])]),e("div",E,[e("div",q,[e("table",z,[e("thead",A,[e("tr",null,[e("th",G,s(t.__("Summary")),1),e("th",I,s(t.__("Total")),1)])]),e("tbody",J,[(c(!0),_(g,null,k(a.report.summary,(n,b)=>(c(),_("tr",{key:b,class:"font-semibold"},[e("td",K,s(n.label),1),e("td",Q,s(t.nsCurrency(n.total)),1)]))),128))]),e("tfoot",W,[e("tr",null,[e("td",X,s(t.__("Total")),1),e("td",Z,s(t.nsCurrency(a.report.total)),1)])])])])])])])}const ce=v(w,[["render",$]]);export{ce as default};
