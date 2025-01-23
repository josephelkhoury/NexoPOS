import{b as q,f as M}from"./components-3Sw5wp8u.js";import{d as _,P as k,f as g,b as O,c as T}from"./bootstrap-AnITgN8s.js";import{n as x,c as F,d as N,N as B,b as z}from"./ns-prompt-popup-CngPOI71.js";import{n as W,a as H}from"./ns-orders-preview-popup-C6j92YhY.js";import{n as D}from"./ns-procurement-quantity-DrMFRJao.js";import{_ as u,n as E}from"./currency-Dtag6qPd.js";import"./index.es-CL3uzDSn.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as d,c,F as P,a as e,t as a,f,n as U,b as A,g as S,w,e as h,i as L,s as R}from"./runtime-core.esm-bundler-VrNrzzXC.js";import"./ns-avatar-image-DN1kzNwi.js";import"./chart-Ozef1QaY.js";const I={name:"ns-products-convertion",props:["popup","unitQuantity","product"],data(){return{unitQuantities:[],isLoading:!1,unitPair:{from:{unit:{},unitQuantity:{},selected:!0,quantity:0,realQuantity:0,fields:[{label:u("Assigned Unit"),name:"assigned_unit",value:"",type:"select",options:[]}]},to:{unit:{},unitQuantity:{},selected:!1,quantity:0,fields:[{label:u("Assigned Unit"),name:"assigned_unit",value:"",type:"select",options:[]}]}},selected:""}},mounted(){this.loadProductQuantities(),console.log(this)},methods:{__:u,async submitConvertion(){if(this.unitPair.from.quantity===0)return _.error(u("The quantity should be greater than 0")).subscribe();if(Math.floor(this.unitPair.to.quantity)===0)return _.error(u(`The provided quantity can't result in any convertion for unit "{destination}"`).replace("{destination}",this.unitPair.to.unit.name)).subscribe();if(this.unitPair.from.quantity!==this.unitPair.from.realQuantity)try{const i=await new Promise((t,s)=>{k.show(x,{title:u("Conversion Warning"),message:u("Only {quantity}({source}) can be converted to {destinationCount}({destination}). Would you like to proceed ?").replace("{quantity}",this.unitPair.from.realQuantity).replace("{destinationCount}",Math.floor(this.unitPair.to.quantity)).replace("{source}",this.unitPair.from.unit.name).replace("{destination}",this.unitPair.to.unit.name),onAction:l=>{l?t(!0):s(!1)}})});return this.proceedConversionSubmissions()}catch{return}try{const i=await new Promise((t,s)=>{k.show(x,{title:u("Confirm Conversion"),message:u("You're about to convert {quantity}({source}) to {destinationCount}({destination}). Would you like to proceed?").replace("{quantity}",this.unitPair.from.quantity).replace("{destinationCount}",Math.floor(this.unitPair.to.quantity)).replace("{source}",this.unitPair.from.unit.name).replace("{destination}",this.unitPair.to.unit.name),onAction:l=>{l?t(!0):s(!1)}})});return this.proceedConversionSubmissions()}catch{return}},proceedConversionSubmissions(){this.isLoading=!0,nsHttpClient.post(`/api/products/${this.unitQuantity.product_id}/units/conversion`,{from:this.unitPair.from.unit.id,to:this.unitPair.to.unit.id,quantity:this.unitPair.from.realQuantity}).subscribe({next:i=>(this.isLoading=!1,this.popup.close(),this.popup.params.resolve(i),g.success(u("Conversion Successful"),u("The product {product} has been converted successfully.").replace("{product}",this.product.name))),error:i=>(this.isLoading=!1,this.popup.params.reject(i),g.error(u("An error occured"),i.message||u("An error occured while converting the product {product}").replace("{product}",this.product.name)))})},handlePairUnitUpdated(i){const t=this.selectedUnitPair();t.unitQuantity=this.unitQuantities.filter(l=>l.unit.id===i.value)[0],t.unit=t.unitQuantity.unit,t.fields[0].value=i.value;const s=t===this.unitPair.from?this.unitPair.to:this.unitPair.from;s.unit.id===t.unit.id&&(s.unitQuantity=this.unitQuantities.filter(l=>l.unit.id!==t.unit.id)[0],s.unit=s.unitQuantity.unit,s.fields[0].value=s.unit.id),this.updateFromPairQuantity(this.unitPair.from.quantity)},updateFromPairQuantity(i){i.length===0&&(i=0),i>this.unitPair.from.unitQuantity.quantity&&(i=this.unitPair.from.unitQuantity.quantity,_.info(u("The quantity has been set to the maximum available")).subscribe()),this.unitPair.from.quantity=parseFloat(i);const t=this.unitQuantities.filter(o=>o.unit.base_unit)[0];if(t.length===0)return g.error(u("An error occured"),u("The product {product} has no base unit").replace("{product}",this.product.name));const l=this.unitPair.from.quantity*this.unitPair.from.unit.value*t.unit.value/this.unitPair.to.unit.value;this.unitPair.from.unit.value<this.unitPair.to.unit.value?this.unitPair.from.realQuantity=Math.floor(l)*this.unitPair.to.unit.value:this.unitPair.from.realQuantity=this.unitPair.from.quantity,this.unitPair.to.quantity=l},switchPair(){const i=this.unitPair.from.unit,t=this.unitPair.to.unit;this.unitPair.from.unit=t,this.unitPair.from.unitQuantity=this.unitQuantities.filter(s=>s.unit.id===t.id)[0],this.unitPair.from.quantity=Math.floor(this.unitPair.to.quantity),this.unitPair.to.unit=i,this.unitPair.to.unitQuantity=this.unitQuantities.filter(s=>s.unit.id===i.id)[0],this.updateFromPairQuantity(this.unitPair.from.quantity)},selectedUnitPair(){return this.unitPair[this.unitPair.from.selected?"from":"to"]},setVisible(i,t){const s=t==="from"?"to":"from";i[t].selected=!0,i[s].selected=!1},loadProductQuantities(){nsHttpClient.get("/api/products/"+this.unitQuantity.product_id+"/units/quantities").subscribe({next:i=>{this.unitQuantities=i,this.unitPair.from.unit=this.unitQuantity.unit,this.unitPair.from.unitQuantity=this.unitQuantity,this.unitPair.from.fields[0].value=this.unitQuantity.unit.id,this.unitPair.from.fields[0].options=i.map(t=>({label:t.unit.name,value:t.unit.id})),this.unitPair.to.unit=i.filter(t=>t.unit.id!==this.unitQuantity.unit.id)[0].unit,this.unitPair.to.unitQuantity=i.filter(t=>t.unit.id!==this.unitQuantity.unit.id)[0],this.unitPair.to.fields[0].value=this.unitPair.to.unit.id,this.unitPair.to.fields[0].options=i.map(t=>({label:t.unit.name,value:t.unit.id}))}})}}},Y={class:"shadow-lg w-6/7-screen lg:w-3/5-screen ns-box overflow-hidden flex flex-col"},G={class:"p-2 border-b ns-box-header text-primary text-center font-medium flex justify-between items-center"},J={class:"relative"},K={class:"border-b border-box-edge"},X={class:"flex"},Z={class:"font-bold text-3xl"},$={class:"border-r border-box-edge relative"},tt={class:"font-bold text-3xl"},it={class:"p-2 border-b border-box-edge"},et={class:""},nt={key:0,class:"top-0 left-0 absolute h-full w-full flex items-center justify-center",style:{background:"rgb(121 121 121 / 20%)"}},st={key:1,class:"flex items-center h-full justify-center"};function ot(i,t,s,l,o,n){const b=p("ns-close-button"),y=p("ns-field"),v=p("ns-numpad"),m=p("ns-spinner");return d(),c("div",Y,[o.unitQuantities.length>0?(d(),c(P,{key:0},[e("div",G,[e("div",null,a(n.__("Unit Conversion : {product}").replace("{product}",s.product.name)),1),e("div",null,[f(b,{onClick:t[0]||(t[0]=r=>s.popup.close())})])]),e("div",J,[e("div",K,[e("div",X,[e("div",{class:U(["p-2 w-full md:w-1/2 flex flex-col items-center justify-center",o.unitPair.from.selected?"bg-info-primary text-white":""]),onClick:t[1]||(t[1]=r=>n.setVisible(o.unitPair,"from"))},[e("span",null,a(o.unitPair.from.unit.name),1),e("h3",Z,a(o.unitPair.from.quantity),1)],2),e("div",$,[e("div",{class:"rounded-full h-12 w-12 flex items-center justify-center absolute shadow bg-input-button p-2",onClick:t[2]||(t[2]=r=>n.switchPair()),style:{position:"absolute",left:"-22px",top:"14px"}},t[8]||(t[8]=[e("i",{class:"las la-exchange-alt text-3xl"},null,-1)]))]),e("div",{class:U(["p-2 w-full md:w-1/2 flex flex-col items-center justify-center",o.unitPair.to.selected?"bg-info-primary text-white":""]),onClick:t[3]||(t[3]=r=>n.setVisible(o.unitPair,"to"))},[e("span",null,a(o.unitPair.to.unit.name),1),e("h3",tt,a(Math.floor(o.unitPair.to.quantity)),1)],2)])]),e("div",it,[(d(!0),c(P,null,A(n.selectedUnitPair().fields,r=>(d(),S(y,{onChange:t[4]||(t[4]=C=>n.handlePairUnitUpdated(C)),field:r},null,8,["field"]))),256))]),e("div",et,[f(v,{onNext:t[6]||(t[6]=r=>n.submitConvertion()),value:o.unitPair.from.quantity,onChanged:t[7]||(t[7]=r=>n.updateFromPairQuantity(r))},{"numpad-footer":w(()=>[e("div",{onClick:t[5]||(t[5]=r=>n.updateFromPairQuantity(o.unitPair.from.unitQuantity.quantity)),class:"w-full ns-numpad-key h-24 font-bold flex items-center justify-center cursor-pointer col-span-3"},a(n.__("Convert {quantity} available").replace("{quantity}",o.unitPair.from.unitQuantity.quantity)),1)]),_:1},8,["value"])]),o.isLoading?(d(),c("div",nt,[f(m,{size:"24"})])):h("",!0)])],64)):h("",!0),o.unitQuantities.length===0?(d(),c("div",st,[f(m)])):h("",!0)])}const rt=V(I,[["render",ot]]),ut={name:"ns-products-preview",props:["popup","product"],computed:{product(){return this.popup.params.product}},methods:{__:u,nsCurrency:E,changeActiveTab(i){this.active=i,this.active==="units-quantities"&&this.loadProductQuantities()},loadProductQuantities(){console.log("is loadinfg"),this.hasLoadedUnitQuantities=!1,O.get(`/api/products/${this.product.id}/units/quantities`).subscribe({next:i=>{this.unitQuantities=i,this.hasLoadedUnitQuantities=!0}})},async convert(i,t){try{const s=await new Promise((l,o)=>{Popup.show(rt,{unitQuantity:i,product:t,resolve:l,reject:o})});this.loadProductQuantities()}catch(s){console.log({exception:s})}}},data(){return{active:"units-quantities",unitQuantities:[],hasLoadedUnitQuantities:!1}},mounted(){this.loadProductQuantities()}},at={class:"shadow-lg w-6/7-screen lg:w-3/5-screen h-6/7-screen lg:h-4/5-screen ns-box overflow-hidden flex flex-col"},lt={class:"p-2 border-b ns-box-header text-primary text-center font-medium flex justify-between items-center"},dt={class:"flex-auto overflow-y-auto ns-box-body"},ct={class:"p-2"},pt={key:0,class:"table ns-table w-full"},ft={class:"p-1 border"},ht={width:"150",class:"text-right p-1 border"},mt={width:"150",class:"text-right p-1 border"},Pt={width:"150",class:"text-right p-1 border"},bt={class:"p-1 border text-left"},yt=["onClick"],vt={class:"p-1 border text-right"},_t={class:"p-1 border text-right"},gt={class:"p-1 border text-right"};function xt(i,t,s,l,o,n){const b=p("ns-close-button"),y=p("ns-spinner"),v=p("ns-tabs-item"),m=p("ns-tabs");return d(),c("div",at,[e("div",lt,[e("div",null,a(n.__("Previewing :"))+" "+a(n.product.name),1),e("div",null,[f(b,{onClick:t[0]||(t[0]=r=>s.popup.close())})])]),e("div",dt,[e("div",ct,[f(m,{active:o.active,onActive:t[1]||(t[1]=r=>n.changeActiveTab(r))},{default:w(()=>[f(v,{label:n.__("Units & Quantities"),identifier:"units-quantities"},{default:w(()=>[o.hasLoadedUnitQuantities?(d(),c("table",pt,[e("thead",null,[e("tr",null,[e("th",ft,a(n.__("Unit")),1),e("th",ht,a(n.__("Sale Price")),1),e("th",mt,a(n.__("Wholesale Price")),1),e("th",Pt,a(n.__("Quantity")),1)])]),e("tbody",null,[(d(!0),c(P,null,A(o.unitQuantities,r=>(d(),c("tr",{key:r.id},[e("td",bt,[L(a(r.unit.name)+" ",1),n.product.rawType==="materialized"&&n.product.rawStockManagement==="enabled"?(d(),c(P,{key:0},[t[2]||(t[2]=L(" — ")),e("a",{onClick:C=>n.convert(r,n.product),class:"text-sm text-info-secondary hover:underline border-dashed",href:"javascript:void(0)"},a(n.__("Convert")),9,yt)],64)):h("",!0)]),e("td",vt,a(n.nsCurrency(r.sale_price)),1),e("td",_t,a(n.nsCurrency(r.wholesale_price)),1),e("td",gt,a(r.quantity),1)]))),128))])])):h("",!0),o.hasLoadedUnitQuantities?h("",!0):(d(),S(y,{key:1,size:"16",border:"4"}))]),_:1},8,["label"])]),_:1},8,["active"])])])])}const wt=V(ut,[["render",xt]]),j={nsOrderPreview:W,nsProductPreview:wt,nsAlertPopup:F,nsConfirmPopup:x,nsPromptPopup:N,nsMediaPopup:M,nsProcurementQuantity:D,nsOrdersRefund:H,nsSelectPopup:B,nsPOSLoadingPopup:z};for(let i in j)window[i]=j[i];const Q=T({data(){return{popups:[],defaultClass:"absolute top-0 left-0 w-full h-full items-center flex overflow-y-auto justify-center is-popup"}},mounted(){nsState.subscribe(i=>{i.popups!==void 0&&(document.body.focus(),this.popups=R(i.popups),this.$forceUpdate())})},methods:{closePopup(i,t){(Object.values(t.target.classList).includes("is-popup")&&i.config!==void 0&&[void 0,!0].includes(i.config.closeOnOverlayClick)||Object.keys(i.config).length===0)&&(i.params&&typeof i.params.reject=="function"?(i.params.reject(!1),typeof i.close=="function"&&i.close(),t.stopPropagation()):i.close())},preventPropagation(i){i.stopImmediatePropagation()}}});for(let i in q)Q.component(i,q[i]);document.addEventListener("DOMContentLoaded",()=>{Q.mount("#dashboard-popups"),window.nsPopups=Q});
