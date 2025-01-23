import{_ as k,n as L,a as N}from"./currency-Dtag6qPd.js";import{a as C,B as R,r as F}from"./chart-Ozef1QaY.js";import{m as P,s as B,x as w,bj as M,h as V,H as q,I as K,z as U,b6 as W,l as z,au as I,r as O,o as S,c as H,a as r,t as c,f as J,g as G,e as Q}from"./runtime-core.esm-bundler-VrNrzzXC.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},Y={ariaLabel:{type:String},ariaDescribedby:{type:String}},Z={type:{type:String,required:!0},destroyDelay:{type:Number,default:0},...j,...Y},$=M[0]==="2"?(t,s)=>Object.assign(t,{attrs:s}):(t,s)=>Object.assign(t,s);function f(t){return I(t)?W(t):t}function ee(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return I(s)?new Proxy(t,{}):t}function te(t,s){const o=t.options;o&&s&&Object.assign(o,s)}function T(t,s){t.labels=s}function E(t,s,o){const l=[];t.datasets=s.map(a=>{const e=t.datasets.find(n=>n[o]===a[o]);return!e||!a.data||l.includes(e)?{...a}:(l.push(e),Object.assign(e,a),e)})}function se(t,s){const o={labels:[],datasets:[]};return T(o,t.labels),E(o,t.datasets,s),o}const ae=P({props:Z,setup(t,s){let{expose:o,slots:l}=s;const a=V(null),e=B(null);o({chart:e});const n=()=>{if(!a.value)return;const{type:i,data:x,options:_,plugins:h,datasetIdKey:b}=t,y=se(x,b),u=ee(y,x);e.value=new C(a.value,{type:i,data:u,options:{..._},plugins:h})},d=()=>{const i=W(e.value);i&&(t.destroyDelay>0?setTimeout(()=>{i.destroy(),e.value=null},t.destroyDelay):(i.destroy(),e.value=null))},D=i=>{i.update(t.updateMode)};return q(n),K(d),U([()=>t.options,()=>t.data],(i,x)=>{let[_,h]=i,[b,y]=x;const u=W(e.value);if(!u)return;let m=!1;if(_){const p=f(_),v=f(b);p&&p!==v&&(te(u,p),m=!0)}if(h){const p=f(h.labels),v=f(y.labels),g=f(h.datasets),A=f(y.datasets);p!==v&&(T(u.config.data,p),m=!0),g&&g!==A&&(E(u.config.data,g,t.datasetIdKey),m=!0)}m&&z(()=>{D(u)})},{deep:!0}),()=>w("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:a},[w("p",{},[l.default?l.default():""])])}});function re(t,s){return C.register(s),P({props:j,setup(o,l){let{expose:a}=l;const e=B(null),n=d=>{e.value=d==null?void 0:d.chart};return a({chart:e}),()=>w(ae,$({ref:n},{type:t,...o}))}})}const oe=re("bar",R);C.register(...F);const ne={name:"ns-orders-chart",components:{Bar:oe},data(){return{totalWeeklySales:0,totalWeekTaxes:0,totalWeekExpenses:0,totalWeekIncome:0,chartData:{labels:["January","February","March"],datasets:[{data:[40,20,12]}]},chartOptions:{theme:{mode:window.ns.theme},chart:{id:"vuechart-example",width:"100%",height:"100%"},stroke:{curve:"smooth",dashArray:[0,8]},xaxis:{categories:[]},colors:["#5f83f3","#AAA"]},series:[{label:k("Current Week"),data:[]},{label:k("Previous Week"),data:[]}],reportSubscription:null,report:null}},methods:{__:k,nsCurrency:L,nsRawCurrency:N},mounted(){this.reportSubscription=Dashboard.weeksSummary.subscribe(t=>{t.result!==void 0&&(this.chartOptions.xaxis.categories=t.result.map(s=>s.label),this.report=t,this.totalWeeklySales=0,this.totalWeekIncome=0,this.totalWeekExpenses=0,this.totalWeekTaxes=0,this.report.result.forEach((s,o)=>{if(s.current!==void 0){const l=s.current.entries.map(e=>e.day_paid_orders);let a=0;l.length>0&&(a=l.reduce((e,n)=>e+n)),this.totalWeekExpenses+=s.current.entries.map(e=>parseFloat(e.day_expenses)).reduce((e,n)=>e+n),this.totalWeekTaxes+=s.current.entries.map(e=>parseFloat(e.day_taxes)).reduce((e,n)=>e+n),this.totalWeekIncome+=s.current.entries.map(e=>parseFloat(e.day_income)).reduce((e,n)=>e+n),this.series[0].data.push(a)}else this.series[0].data.push(0);if(s.previous!==void 0){const l=s.previous.entries.map(e=>e.day_paid_orders);let a=0;l.length>0&&(a=l.reduce((e,n)=>e+n)),this.series[1].data.push(a)}else this.series[1].data.push(0)}),this.totalWeeklySales=this.series[0].data.reduce((s,o)=>s+o),this.chartData.labels=this.report.result.map(s=>s.label),this.chartData.datasets=this.series)})}},le={id:"ns-orders-chart",class:"flex flex-auto flex-col shadow ns-box rounded-lg overflow-hidden"},ie={class:"p-2 flex ns-box-header items-center justify-between border-b"},ce={class:"font-semibold"},de={class:"p-2"},ue={class:"foot -mx-4 flex flex-wrap"},pe={class:"flex w-full lg:w-full border-b"},fe={class:"px-4 w-1/2 lg:w-1/2 flex flex-col items-center justify-center"},he={class:"text-xs"},xe={class:"text-lg xl:text-xl font-bold"},_e={class:"px-4 w-1/2 lg:w-1/2 flex flex-col items-center justify-center"},ye={class:"text-xs"},me={class:"text-lg xl:text-xl font-bold"},be={class:"flex w-full lg:w-full"},ve={class:"px-4 w-full lg:w-1/2 flex flex-col items-center justify-center"},ge={class:"text-xs"},ke={class:"text-lg xl:text-xl font-bold"},we={class:"px-4 w-full lg:w-1/2 flex flex-col items-center justify-center"},We={class:"text-xs"},Ce={class:"text-lg xl:text-xl font-bold"};function De(t,s,o,l,a,e){const n=O("ns-close-button"),d=O("Bar");return S(),H("div",le,[r("div",ie,[r("h3",ce,c(e.__("Recents Orders")),1),r("div",null,[J(n,{onClick:s[0]||(s[0]=D=>t.$emit("onRemove"))})])]),r("div",de,[a.report?(S(),G(d,{key:0,id:"chart",options:a.chartOptions,data:a.chartData},null,8,["options","data"])):Q("",!0)]),r("div",ue,[r("div",pe,[r("div",fe,[r("span",he,c(e.__("Weekly Sales")),1),r("h2",xe,c(e.nsCurrency(a.totalWeeklySales,"abbreviate")),1)]),r("div",_e,[r("span",ye,c(e.__("Week Taxes")),1),r("h2",me,c(e.nsCurrency(a.totalWeekTaxes,"abbreviate")),1)])]),r("div",be,[r("div",ve,[r("span",ge,c(e.__("Net Income")),1),r("h2",ke,c(e.nsCurrency(a.totalWeekIncome,"abbreviate")),1)]),r("div",we,[r("span",We,c(e.__("Week Expenses")),1),r("h2",Ce,c(e.nsCurrency(a.totalWeekExpenses,"abbreviate")),1)])])])])}const Ie=X(ne,[["render",De]]);export{Ie as default};
