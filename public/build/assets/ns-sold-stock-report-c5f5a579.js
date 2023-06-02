import{h as d}from"./npm~moment-fbc5633a.js";import{c as u,e as b}from"./components-7a04ba45.js";import{a as l,n as x}from"./bootstrap-f2d81cbc.js";import{_ as c,n as f}from"./currency-47ec5b79.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as g,a6 as p,z as _,A as t,c as h,F as D,ac as v}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as r}from"./npm~@vue~shared_-82b01912.js";import"./ns-alert-popup-883dcb0b.js";import"./npm~numeral-faf61dd1.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-481192b6.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./ns-switch-0a4d4345.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./ns-pos-confirm-popup-268ffc19.js";import"./npm~lodash-f7a36ac5.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./ns-paginate-965aeeab.js";import"./npm~vue-upload-component-9e5d4563.js";import"./ns-numpad-plus-f3ffaa01.js";import"./ns-pos-loading-popup-f38cabd2.js";import"./ns-prompt-popup-64b67141.js";const w={name:"ns-sold-stock-report",props:["store-logo","store-name"],data(){return{startDate:d(),endDate:d(),products:[],ns:window.ns}},components:{nsDatepicker:u,nsDateTimePicker:b},computed:{totalQuantity(){return this.products.length>0?this.products.map(s=>s.quantity).reduce((s,o)=>s+o):0},totalTaxes(){return this.products.length>0?this.products.map(s=>s.tax_value).reduce((s,o)=>s+o):0},totalPrice(){return this.products.length>0?this.products.map(s=>s.total_price).reduce((s,o)=>s+o):0}},methods:{__:c,nsCurrency:f,printSaleReport(){this.$htmlToPaper("report-printable")},setStartDate(s){this.startDate=s.format()},loadReport(){if(this.startDate===null||this.endDate===null)return l.error(c("Unable to proceed. Select a correct time range.")).subscribe();const s=d(this.startDate);if(d(this.endDate).isBefore(s))return l.error(c("Unable to proceed. The current time range is not valid.")).subscribe();x.post("/api/reports/sold-stock-report",{startDate:this.startDate,endDate:this.endDate}).subscribe({next:n=>{this.products=n},error:n=>{l.error(n.message).subscribe()}})},setEndDate(s){this.endDate=s.format()}}},k={id:"report-section",class:"px-4"},C={class:"flex -mx-2"},S={class:"px-2"},T={class:"px-2"},B={class:"px-2"},P={class:"ns-button"},R=t("i",{class:"las la-sync-alt text-xl"},null,-1),U={class:"pl-2"},j={class:"px-2"},E={class:"ns-button"},L=t("i",{class:"las la-print text-xl"},null,-1),M={class:"pl-2"},N={id:"report-printable",class:"anim-duration-500 fade-in-entrance"},Q={class:"flex w-full"},V={class:"my-4 flex justify-between w-full"},q={class:"text-secondary"},F={class:"pb-1 border-b border-dashed"},z={class:"pb-1 border-b border-dashed"},A={class:"pb-1 border-b border-dashed"},H=["src","alt"],G={class:"shadow rounded my-4"},I={class:"ns-box"},J={class:"border-b ns-box-body p-2"},K={class:"table ns-table w-full"},O={class:""},W={class:"border p-2 text-left"},X={width:"150",class:"text-right border p-2"},Y={width:"150",class:"text-right border p-2"},Z={width:"150",class:"text-right border p-2"},$={width:"150",class:"text-right border p-2"},tt={class:""},et={class:"p-2 border"},st={class:"p-2 border text-right"},rt={class:"p-2 border text-right"},ot={class:"p-2 border text-right"},it={class:"p-2 border text-right"},at={class:"font-semibold"},nt=t("td",{colspan:"2",class:"p-2 border"},null,-1),dt={class:"p-2 border text-right"},lt={class:"p-2 border text-right"},ct={class:"p-2 border text-right"};function pt(s,o,n,_t,a,e){const m=g("ns-date-time-picker");return p(),_("div",k,[t("div",C,[t("div",S,[h(m,{date:a.startDate,onChange:o[0]||(o[0]=i=>e.setStartDate(i))},null,8,["date"])]),t("div",T,[h(m,{date:a.endDate,onChange:o[1]||(o[1]=i=>e.setEndDate(i))},null,8,["date"])]),t("div",B,[t("div",P,[t("button",{onClick:o[2]||(o[2]=i=>e.loadReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[R,t("span",U,r(e.__("Load")),1)])])]),t("div",j,[t("div",E,[t("button",{onClick:o[3]||(o[3]=i=>e.printSaleReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[L,t("span",M,r(e.__("Print")),1)])])])]),t("div",N,[t("div",Q,[t("div",V,[t("div",q,[t("ul",null,[t("li",F,r(e.__("Date : {date}").replace("{date}",a.ns.date.current)),1),t("li",z,r(e.__("Document : Sold Stock Report")),1),t("li",A,r(e.__("By : {user}").replace("{user}",a.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:s.storeLogo,alt:s.storeName},null,8,H)])])]),t("div",G,[t("div",I,[t("div",J,[t("table",K,[t("thead",O,[t("tr",null,[t("th",W,r(e.__("Product")),1),t("th",X,r(e.__("Unit")),1),t("th",Y,r(e.__("Quantity")),1),t("th",Z,r(e.__("Tax Value")),1),t("th",$,r(e.__("Total")),1)])]),t("tbody",tt,[(p(!0),_(D,null,v(a.products,i=>(p(),_("tr",{key:i.id},[t("td",et,r(i.name),1),t("td",st,r(i.unit_name),1),t("td",rt,r(i.quantity),1),t("td",ot,r(e.nsCurrency(i.tax_value)),1),t("td",it,r(e.nsCurrency(i.total_price)),1)]))),128))]),t("tfoot",at,[t("tr",null,[nt,t("td",dt,r(e.totalQuantity),1),t("td",lt,r(e.nsCurrency(e.totalTaxes)),1),t("td",ct,r(e.nsCurrency(e.totalPrice)),1)])])])])])])])])}const Ce=y(w,[["render",pt]]);export{Ce as default};
