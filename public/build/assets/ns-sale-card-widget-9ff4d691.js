import{_ as l,n as d}from"./currency-dc6217f5.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{an as a,af as _,G as m,H as e,c as f}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as o}from"./npm~@vue~shared_-951a29c4.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-beabd60a.js";const x={name:"ns-sale-card-widget",methods:{__:l,nsCurrency:d},data(){return{report:{}}},mounted(){Dashboard.day.subscribe(s=>{this.report=s})}},u={class:"flex card-widget flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-info-secondary to-info-tertiary px-3 py-5"},h={class:"flex flex-row md:flex-col flex-auto"},p={class:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},b={class:"flex justify-between w-full items-center"},y={class:"font-bold hidden text-right md:inline-block"},g={class:"text-2xl font-black"},v={class:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},w={class:"font-bold inline-block text-right md:hidden"},k={class:"text-xs text-right"};function C(s,n,j,B,r,t){const c=a("ns-close-button");return _(),m("div",u,[e("div",h,[e("div",p,[e("div",b,[e("h6",y,o(t.__("Income")),1),e("div",null,[f(c,{class:"border-info-secondary",onClick:n[0]||(n[0]=V=>s.$emit("onRemove"))})])]),e("h3",g,o(t.nsCurrency(r.report.total_income||0,"abbreviate")),1)]),e("div",v,[e("h6",w,o(t.__("Income")),1),e("h4",k,"+"+o(t.nsCurrency(r.report.day_income||0))+" "+o(t.__("Today")),1)])])])}const T=i(x,[["render",C]]);export{T as default};
