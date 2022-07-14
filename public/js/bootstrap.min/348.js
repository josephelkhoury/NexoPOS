"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[348],{6348:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var o=n(7757),r=n.n(o),s=(n(381),n(1544)),i=n(9671),a=n(2744),u=n(7389),l=n(7266),c=n(3472),p=n(3506);function v(t,e,n,o,r,s,i){try{var a=t[s](i),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}const f={name:"ns-low-stock-report",mounted:function(){this.reportType=this.options[0].value,this.loadRelevantReport()},components:{nsDatepicker:s.Z,nsDateTimePicker:a.Z,nsPaginate:p.Z},data:function(){return{products:[],options:[{label:(0,u.__)("Stock Report"),value:"stock_report"},{label:(0,u.__)("Low Stock Report"),value:"low_stock"}],stockReportResult:{},reportType:"",reportTypeName:"",validation:new l.Z}},watch:{reportType:function(){var t=this,e=this.options.filter((function(e){return e.value===t.reportType}));e.length>0?this.reportTypeName=e[0].label:this.reportTypeName=(0,u.__)("N/A")}},methods:{__:u.__,selectReport:function(){var t,e=this;return(t=r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(t,n){Popup.show(c.Z,{label:(0,u.__)("Report Type"),options:e.options,resolve:t,reject:n})}));case 3:n=t.sent,e.reportType=n[0].value,e.loadRelevantReport(),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var e=this,n=arguments;return new Promise((function(o,r){var s=t.apply(e,n);function i(t){v(s,o,r,i,a,"next",t)}function a(t){v(s,o,r,i,a,"throw",t)}i(void 0)}))})()},loadRelevantReport:function(){switch(this.reportType){case"stock_report":this.loadStockReport();break;case"low_stock":this.loadReport()}},printSaleReport:function(){this.$htmlToPaper("low-stock-report")},loadStockReport:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i.ih.get(e||"/api/nexopos/v4/reports/stock-report").subscribe({next:function(e){t.stockReportResult=e},error:function(t){i.kX.error(t.message).subscribe()}})},totalSum:function(t,e,n){if(void 0!==t.data){var o=t.data.map((function(t){return t.unit_quantities})).map((function(t){var o=t.map((function(t){return t[e]*t[n]}));return o.length>0?o.reduce((function(t,e){return parseFloat(t)+parseFloat(e)})):0}));if(o.length>0)return o.reduce((function(t,e){return parseFloat(t)+parseFloat(e)}))}return 0},sum:function(t,e){if(void 0!==t.data){var n=t.data.map((function(t){return t.unit_quantities})).map((function(t){var n=t.map((function(t){return t[e]}));return n.length>0?n.reduce((function(t,e){return parseFloat(t)+parseFloat(e)})):0}));if(n.length>0)return n.reduce((function(t,e){return parseFloat(t)+parseFloat(e)}))}return 0},loadReport:function(){var t=this;i.ih.get("/api/nexopos/v4/reports/low-stock").subscribe({next:function(e){t.products=e},error:function(t){i.kX.error(t.message).subscribe()}})}}};const d=(0,n(1900).Z)(f,undefined,undefined,!1,null,null,null).exports},3472:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(8603),r=n(7389);const s={data:function(){return{value:[],options:[],label:null,type:"select"}},computed:{},mounted:function(){this.popupCloser(),this.value=this.$popupParams.value||[],this.options=this.$popupParams.options,this.label=this.$popupParams.label,this.type=this.$popupParams.type||this.type},methods:{popupCloser:o.Z,__:r.__,toggle:function(t){var e=this.value.indexOf(t);-1===e?this.value.unshift(t):this.value.splice(e,1)},isSelected:function(t){return this.value.indexOf(t)>=0},close:function(){this.$popupParams.reject(!1),this.$popup.close()},select:function(t){void 0!==t&&(this.value=[t]),this.$popupParams.resolve(this.value),this.close()}}};const i=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shadow-xl ns-box w-6/7-screen md:w-4/7-screen lg:w-3/7-screen overflow-hidden"},[n("div",{staticClass:"p-2 flex justify-between border-b items-center ns-box-header"},[n("span",{staticClass:"text-semibold text-primary"},[t._v("\n            "+t._s(t.label)+"\n        ")]),t._v(" "),n("div",[n("ns-close-button",{on:{click:function(e){return t.close()}}})],1)]),t._v(" "),n("div",{staticClass:"flex-auto overflow-y-auto"},[n("ul",{staticClass:"ns-vertical-menu"},["select"===t.type?t._l(t.options,(function(e){return n("li",{key:e.value,staticClass:"p-2 border-b border-box-edge text-primary cursor-pointer",on:{click:function(n){return t.select(e)}}},[t._v(t._s(e.label))])})):t._e(),t._v(" "),"multiselect"===t.type?t._l(t.options,(function(e){return n("li",{key:e.value,staticClass:"p-2 border-b text-primary cursor-pointer",class:t.isSelected(e)?"active":"",on:{click:function(n){return t.toggle(e)}}},[t._v(t._s(e.label))])})):t._e()],2)]),t._v(" "),"multiselect"===t.type?n("div",{staticClass:"flex justify-between"},[n("div"),t._v(" "),n("div",[n("ns-button",{attrs:{type:"info"},on:{click:function(e){return t.select()}}},[t._v(t._s(t.__("Select")))])],1)]):t._e()])}),[],!1,null,null,null).exports}}]);