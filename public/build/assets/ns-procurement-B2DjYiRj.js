import{F as L,d as x,b as g,B as q,f as E,T as N,I as j,P as w,v as U,i as B}from"./bootstrap-AnITgN8s.js";import R from"./manage-products-MDL3BoQk.js";import{_ as c,n as D}from"./currency-Dtag6qPd.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as C,o as l,c as u,a as r,t as d,F as v,b as y,g as I,f as F,w as M,i as T,m as K,h as G,H,u as V,e as m,n as k,B as P,A as S}from"./runtime-core.esm-bundler-VrNrzzXC.js";import{b as J,N as A}from"./ns-prompt-popup-CngPOI71.js";import{s as z}from"./select-api-entities-LxXWrw-8.js";import"./index.es-CL3uzDSn.js";import"./chart-Ozef1QaY.js";import"./join-array-NDqpMoMN.js";const Q={name:"ns-procurement-product-options",props:["popup"],data(){return{validation:new L,fields:[],rawFields:[{label:c("Expiration Date"),name:"expiration_date",description:c("Define when that specific product should expire."),type:"datetimepicker"},{label:c("Barcode"),name:"barcode",description:c("Renders the automatically generated barcode."),type:"text",disabled:!0},{label:c("Tax Type"),name:"tax_type",description:c("Adjust how tax is calculated on the item."),type:"select",options:[{label:c("Inclusive"),value:"inclusive"},{label:c("Exclusive"),value:"exclusive"}]}]}},methods:{__:c,applyChanges(){if(this.validation.validateFields(this.fields)){const e=this.validation.extractFields(this.fields);return this.popup.params.resolve(e),this.popup.close()}return x.error(c("Unable to proceed. The form is not valid.")).subscribe()}},mounted(){const t=this.rawFields.map(e=>(e.name==="expiration_date"&&(e.value=this.popup.params.product.procurement.expiration_date),e.name==="tax_type"&&(e.value=this.popup.params.product.procurement.tax_type),e.name==="barcode"&&(e.value=this.popup.params.product.procurement.barcode),e));this.fields=this.validation.createFields(t)}},W={class:"ns-box shadow-lg w-6/7-screen md:w-5/7-screen lg:w-3/7-screen"},X={class:"p-2 border-b ns-box-header"},Y={class:"font-semibold"},Z={class:"p-2 border-b ns-box-body"},$={class:"p-2 flex justify-end ns-box-body"};function ee(t,e,n,o,s,i){const h=C("ns-field"),a=C("ns-button");return l(),u("div",W,[r("div",X,[r("h5",Y,d(i.__("Options")),1)]),r("div",Z,[(l(!0),u(v,null,y(s.fields,(p,b)=>(l(),I(h,{class:"w-full",field:p,key:b},null,8,["field"]))),128))]),r("div",$,[F(a,{onClick:e[0]||(e[0]=p=>i.applyChanges()),type:"info"},{default:M(()=>[T(d(i.__("Save")),1)]),_:1})])])}const te=O(Q,[["render",ee]]),re={class:"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg bg-popup-surface"},se={class:"flex flex-col"},ie={class:"h-24 font-bold text-4xl text-primary flex justify-center items-center"},oe=K({__name:"ns-numpad-popup",props:["popup"],setup(t){let e=G("");const n=t,o=i=>{e.value=i},s=()=>{n.popup.params.resolve(e.value),n.popup.close()};return H(()=>{e.value=n.popup.params.value}),(i,h)=>{const a=C("ns-numpad-plus");return l(),u("div",re,[r("div",se,[r("div",ie,d(V(e)),1),F(a,{onChanged:h[0]||(h[0]=p=>o(p)),onNext:h[1]||(h[1]=p=>s()),value:V(e)},null,8,["value"])])])}}}),ne={name:"ns-procurement",mounted(){this.reloadEntities(),this.shouldPreventAccidentlRefreshSubscriber=this.shouldPreventAccidentalRefresh.subscribe({next:t=>{t?window.addEventListener("beforeunload",this.addAccidentalCloseListener):window.removeEventListener("beforeunload",this.addAccidentalCloseListener)}})},computed:{activeTab(){return this.validTabs.filter(t=>t.active).length>0?this.validTabs.filter(t=>t.active)[0]:!1}},data(){return{totalTaxValues:0,totalPurchasePrice:0,formValidation:new L,form:{},nsSnackBar:x,fields:[],searchResult:[],searchValue:"",debounceSearch:null,nsHttpClient:g,taxes:[],validTabs:[{label:c("Details"),identifier:"details",active:!0},{label:c("Products"),identifier:"products",active:!1}],reloading:!1,shouldPreventAccidentalRefresh:new q(!1),shouldPreventAccidentlRefreshSubscriber:null,showInfo:!1}},watch:{form:{handler(){this.formValidation.isFormUntouched(this.form)?this.shouldPreventAccidentalRefresh.next(!1):this.shouldPreventAccidentalRefresh.next(!0)},deep:!0},searchValue(t){t&&(clearTimeout(this.debounceSearch),this.debounceSearch=setTimeout(()=>{this.doSearch(t)},500))}},components:{nsManageProducts:R},props:["submitMethod","submitUrl","returnUrl","src","rules"],methods:{__:c,nsCurrency:D,addAccidentalCloseListener(t){return t.preventDefault(),!0},async defineConversionOption(t){try{const e=this.form.products[t];if(e.procurement.unit_id===void 0)return E.error(c("An error has occured"),c("Select the procured unit first before selecting the conversion unit."),{actions:{learnMore:{label:c("Learn More"),onClick:o=>{console.log(o)}},close:{label:c("Close"),onClick:o=>{o.close()}}},duration:5e3});const n=await z(`/api/units/${e.procurement.unit_id}/siblings`,c("Convert to unit"),e.procurement.convert_unit_id||null,"select");e.procurement.convert_unit_id=n.values[0],e.procurement.convert_unit_label=n.labels[0]}catch(e){if(e!==!1)return x.error(e.message||c("An unexpected error has occured")).subscribe()}},computeTotal(){this.totalTaxValues=0,this.form.products.length>0&&(this.totalTaxValues=this.form.products.map(t=>t.procurement.tax_value).reduce((t,e)=>t+e)),this.totalPurchasePrice=0,this.form.products.length>0&&(this.totalPurchasePrice=this.form.products.map(t=>parseFloat(t.procurement.total_purchase_price)).reduce((t,e)=>t+e))},updateLine(t){const e=this.form.products[t],n=this.taxes.filter(o=>o.id===e.procurement.tax_group_id);if(parseFloat(e.procurement.purchase_price_edit)>0&&parseFloat(e.procurement.quantity)>0){if(n.length>0){const o=n[0].taxes.map(s=>N.getTaxValue(e.procurement.tax_type,e.procurement.purchase_price_edit,parseFloat(s.rate)));e.procurement.tax_value=o.reduce((s,i)=>s+i),e.procurement.tax_type==="inclusive"?(e.procurement.net_purchase_price=parseFloat(e.procurement.purchase_price_edit)-e.procurement.tax_value,e.procurement.gross_purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.purchase_price=parseFloat(e.procurement.gross_purchase_price)):(e.procurement.gross_purchase_price=parseFloat(e.procurement.purchase_price_edit)+e.procurement.tax_value,e.procurement.net_purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.purchase_price=parseFloat(e.procurement.gross_purchase_price))}else e.procurement.gross_purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.net_purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.tax_value=0;e.procurement.tax_value=e.procurement.tax_value*parseFloat(e.procurement.quantity),e.procurement.total_purchase_price=e.procurement.purchase_price*parseFloat(e.procurement.quantity)}this.computeTotal(),this.$forceUpdate()},fetchLastPurchasePrice(t){const e=this.form.products[t],n=e.unit_quantities.filter(o=>e.procurement.unit_id===o.unit_id);n.length>0&&(e.procurement.purchase_price_edit=n[0].last_purchase_price||0),this.updateLine(t)},switchTaxType(t,e){t.procurement.tax_type=t.procurement.tax_type==="inclusive"?"exclusive":"inclusive",this.updateLine(e)},doSearch(t){g.post("/api/procurements/products/search-product",{search:t}).subscribe(e=>{e.length===1?this.addProductList(e[0]):e.length>1?this.searchResult=e:x.error(c("No result match your query.")).subscribe()})},reloadEntities(){this.reloading=!0,j([g.get("/api/categories"),g.get("/api/products"),g.get(this.src),g.get("/api/taxes/groups")]).subscribe(t=>{this.reloading=!1,this.categories=t[0],this.products=t[1],this.taxes=t[3],this.form.general&&t[2].tabs.general.fieds.forEach((e,n)=>{e.value=this.form.tabs.general.fields[n].value||""}),this.form=Object.assign(JSON.parse(JSON.stringify(t[2])),this.form),this.form=this.formValidation.createForm(this.form),this.form.tabs&&this.form.tabs.general.fields.forEach((e,n)=>{e.options&&(e.options=t[2].tabs.general.fields[n].options)}),this.form.products.length===0&&(this.form.products=this.form.products.map(e=>(["gross_purchase_price","purchase_price_edit","tax_value","net_purchase_price","purchase_price","total_price","total_purchase_price","quantity","tax_group_id"].forEach(n=>{e[n]===void 0&&(e[n]=e[n]===void 0?0:e[n])}),e.$invalid=e.$invalid||!1,e.purchase_price_edit=e.purchase_price,{name:e.name,purchase_units:e.purchase_units,procurement:e,unit_quantities:e.unit_quantities||[]}))),this.$forceUpdate()})},setTabActive(t){this.validTabs.forEach(e=>e.active=!1),this.$forceUpdate(),this.$nextTick().then(()=>{t.active=!0})},addProductList(t){if(t.unit_quantities===void 0)return x.error(c("Unable to add product which doesn't unit quantities defined.")).subscribe();t.procurement=new Object,t.procurement.gross_purchase_price=0,t.procurement.purchase_price_edit=0,t.procurement.tax_value=0,t.procurement.net_purchase_price=0,t.procurement.purchase_price=0,t.procurement.total_price=0,t.procurement.total_purchase_price=0,t.procurement.quantity=1,t.procurement.expiration_date=null,t.procurement.tax_group_id=t.tax_group_id,t.procurement.tax_type=t.tax_type||"inclusive",t.procurement.unit_id=t.unit_quantities[0].unit_id,t.procurement.product_id=t.id,t.procurement.convert_unit_id=t.unit_quantities[0].convert_unit_id,t.procurement.procurement_id=null,t.procurement.$invalid=!1,this.searchResult=[],this.searchValue="",this.form.products.push(t);const e=this.form.products.length-1;this.fetchLastPurchasePrice(e)},submit(){if(this.form.products.length===0)return x.error(c("Unable to proceed, no product were provided."),c("OK")).subscribe();if(this.form.products.forEach(o=>{parseFloat(o.procurement.quantity)>=1?o.procurement.unit_id===0?o.procurement.$invalid=!0:o.procurement.$invalid=!1:o.procurement.$invalid=!0}),this.form.products.filter(o=>o.procurement.$invalid).length>0)return x.error(c("Unable to proceed, one or more product has incorrect values."),c("OK")).subscribe();if(this.formValidation.validateForm(this.form).length>0)return this.setTabActive(this.activeTab),x.error(c("Unable to proceed, the procurement form is not valid."),c("OK")).subscribe();if(this.submitUrl===void 0)return x.error(c("Unable to submit, no valid submit URL were provided."),c("OK")).subscribe();this.formValidation.disableForm(this.form);const e={...this.formValidation.extractForm(this.form),products:this.form.products.map(o=>o.procurement)},n=w.show(J);g[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,e).subscribe({next:o=>{if(o.status==="success")return this.shouldPreventAccidentalRefresh.next(!1),document.location=this.returnUrl;n.close(),this.formValidation.enableForm(this.form)},error:o=>{n.close(),x.error(o.message,void 0,{duration:5e3}).subscribe(),this.formValidation.enableForm(this.form),o.errors&&this.formValidation.triggerError(this.form,o.errors)}})},deleteProduct(t){this.form.products.splice(t,1),this.$forceUpdate()},handleGlobalChange(t){this.globallyChecked=t,this.rows.forEach(e=>e.$checked=t)},setProductOptions(t){new Promise((n,o)=>{w.show(te,{product:this.form.products[t],resolve:n,reject:o})}).then(n=>{for(let o in n)this.form.products[t].procurement[o]=n[o];this.updateLine(t)})},async selectUnitForProduct(t){try{const e=this.form.products[t],n=await new Promise((s,i)=>{w.show(A,{label:c("{product}: Purchase Unit").replace("{product}",e.name),description:c("The product will be procured on that unit."),value:e.unit_id,resolve:s,reject:i,options:e.unit_quantities.map(h=>({label:h.unit.name,value:h.unit.id}))})});e.procurement.unit_id=n;const o=e.unit_quantities.filter(s=>parseInt(s.unit_id)===+n);e.procurement.convert_unit_id=o[0].convert_unit_id||void 0,e.procurement.convert_unit_label=await new Promise((s,i)=>{e.procurement.convert_unit_id!==void 0?g.get(`/api/units/${e.procurement.convert_unit_id}`).subscribe({next:h=>{s(h.name)},error:h=>{s(c("Unkown Unit"))}}):s(c("N/A"))}),this.fetchLastPurchasePrice(t)}catch(e){console.log(e)}},async selectTax(t){try{const e=this.form.products[t],n=await new Promise((o,s)=>{w.show(A,{label:c("Choose Tax"),description:c("The tax will be assigned to the procured product."),resolve:o,reject:s,options:this.taxes.map(i=>({label:i.name,value:i.id}))})});e.procurement.tax_group_id=n,this.updateLine(t)}catch{}},async triggerKeyboard(t,e,n){try{const o=await new Promise((s,i)=>{w.show(oe,{value:t[e],resolve:s,reject:i})});t[e]=o,this.updateLine(n)}catch(o){console.log({exception:o})}},getSelectedTax(t){const e=this.form.products[t],n=this.taxes.filter(o=>!!(e.procurement.tax_group_id&&e.procurement.tax_group_id===o.id));return n.length===1?n[0].name:c("N/A")},getSelectedUnit(t){const e=this.form.products[t],o=e.unit_quantities.map(s=>s.unit).filter(s=>e.procurement.unit_id!==void 0?s.id===e.procurement.unit_id:!1);return o.length===1?o[0].name:c("N/A")},handleSavedEvent(t,e){t.data&&(e.options.push({label:t.data.entry.first_name,value:t.data.entry.id}),e.value=t.data.entry.id)}}},ae={class:"form flex-auto flex flex-col",id:"crud-form"},ce={class:"flex flex-col"},le={class:"flex justify-between items-center"},ue={for:"title",class:"font-bold my-2 text-primary"},de={for:"title",class:"text-sm my-2 -mx-1 flex text-primary"},pe={key:0,class:"cursor-pointer rounded-full ns-inset-button border px-2 py-1"},me={key:1,class:"cursor-pointer rounded-full ns-inset-button border px-2 py-1"},he={class:"px-1"},_e=["href"],fe=["disabled"],be=["disabled"],ve={key:0,class:"text-xs text-primary py-1"},xe={key:0,class:"rounded border-2 bg-info-primary border-info-tertiary flex"},ye={class:"text flex-auto py-4"},ge={class:"font-bold text-lg"},we={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},ke={class:"px-4 w-full"},Ce={id:"tabbed-card",class:"ns-tab"},Pe={id:"card-header",class:"flex flex-wrap"},Te=["onClick"],Fe={key:0,class:"ns-tab-item"},Ue={class:"card-body rounded-br-lg rounded-bl-lg shadow p-2"},Ve={key:0,class:"-mx-4 flex flex-wrap"},Se={key:1,class:"ns-tab-item"},Ae={class:"card-body rounded-br-lg rounded-bl-lg shadow p-2"},Le={class:"mb-2"},Oe={class:"input-group info flex border-2 rounded overflow-hidden"},qe=["placeholder"],Ee={class:"h-0"},Ne={class:"shadow bg-floating-menu relative z-10"},je=["onClick"],Be={class:"block font-bold text-primary"},Re={class:"block text-sm text-priamry"},De={class:"block text-sm text-primary"},Ie={class:"overflow-x-auto"},Me={class:"w-full ns-table"},Ke={class:""},Ge={class:"flex"},He={class:"flex md:flex-row flex-col md:-mx-1"},Je={class:"md:px-1"},ze=["onClick"],Qe={class:"md:px-1"},We=["onClick"],Xe={class:"md:px-1"},Ye=["onClick"],Ze={class:"md:px-1"},$e=["onClick"],et={class:"md:px-1"},tt=["onClick"],rt=["onClick"],st={class:"flex justify-center"},it={key:0,class:"outline-none border-dashed py-1 border-b border-info-primary text-sm"},ot={key:1,class:"outline-none border-dashed py-1 border-b border-info-primary text-sm"},nt={class:"flex items-start"},at={class:"input-group rounded border-2"},ct=["onChange","onUpdate:modelValue"],lt=["value"],ut={class:"flex items-start flex-col justify-end"},dt={class:"text-sm text-primary"},pt={class:"text-primary"},mt=["colspan"],ht={class:"p-2 border"},_t=["colspan"],ft={class:"p-2 border"};function bt(t,e,n,o,s,i){const h=C("ns-field");return l(),u("div",ae,[s.form.main?(l(),u(v,{key:0},[r("div",ce,[r("div",le,[r("label",ue,d(s.form.main.label||i.__("No title is provided")),1),r("div",de,[r("div",{class:"px-1",onClick:e[0]||(e[0]=a=>s.showInfo=!s.showInfo)},[s.showInfo?m("",!0):(l(),u("span",pe,d(i.__("Show Details")),1)),s.showInfo?(l(),u("span",me,d(i.__("Hide Details")),1)):m("",!0)]),r("div",he,[n.returnUrl?(l(),u("a",{key:0,href:n.returnUrl,class:"rounded-full ns-inset-button border px-2 py-1"},d(i.__("Go Back")),9,_e)):m("",!0)])])]),r("div",{class:k([s.form.main.disabled?"disabled":s.form.main.errors.length>0?"error":"","flex border-2 rounded input-group info overflow-hidden"])},[P(r("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.form.main.value=a),onKeypress:e[2]||(e[2]=a=>s.formValidation.checkField(s.form.main)),onBlur:e[3]||(e[3]=a=>s.formValidation.checkField(s.form.main)),onChange:e[4]||(e[4]=a=>s.formValidation.checkField(s.form.main)),disabled:s.form.main.disabled,type:"text",class:k([(s.form.main.disabled,""),"flex-auto outline-none h-10 px-2"])},null,42,fe),[[U,s.form.main.value]]),r("button",{disabled:s.form.main.disabled,onClick:e[5]||(e[5]=a=>i.submit()),class:"outline-none px-4 h-10 border-l"},[S(t.$slots,"save",{},()=>[T(d(i.__("Save")),1)])],8,be),r("button",{onClick:e[6]||(e[6]=a=>i.reloadEntities()),class:"outline-none px-4 h-10"},[r("i",{class:k([s.reloading?"animate animate-spin":"","las la-sync"])},null,2)])],2),s.form.main.description&&s.form.main.errors.length===0?(l(),u("p",ve,d(s.form.main.description),1)):m("",!0),(l(!0),u(v,null,y(s.form.main.errors,(a,p)=>(l(),u("p",{class:"text-xs py-1 text-error-primary",key:p},[r("span",null,[S(t.$slots,"error-required",{},()=>[T(d(a.identifier),1)])])]))),128))]),s.showInfo?(l(),u("div",xe,[e[10]||(e[10]=r("div",{class:"icon w-16 flex py-4 justify-center"},[r("i",{class:"las la-info-circle text-4xl"})],-1)),r("div",ye,[r("h3",ge,d(i.__("Important Notes")),1),r("ul",null,[r("li",null,[e[8]||(e[8]=r("i",{class:"las la-hand-point-right"}," ",-1)),r("span",null,d(i.__("Stock Management Products.")),1)]),r("li",null,[e[9]||(e[9]=r("i",{class:"las la-hand-point-right"}," ",-1)),r("span",null,d(i.__("Doesn't work with Grouped Product.")),1)])])])])):m("",!0),r("div",we,[r("div",ke,[r("div",Ce,[r("div",Pe,[(l(!0),u(v,null,y(s.validTabs,(a,p)=>(l(),u("div",{onClick:b=>i.setTabActive(a),class:k([a.active?"active":"inactive","tab cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg text-primary"]),key:p},d(a.label),11,Te))),128))]),i.activeTab.identifier==="details"?(l(),u("div",Fe,[r("div",Ue,[s.form.tabs?(l(),u("div",Ve,[(l(!0),u(v,null,y(s.form.tabs.general.fields,(a,p)=>(l(),u("div",{class:"flex px-4 w-full md:w-1/2 lg:w-1/3",key:p},[F(h,{onSaved:b=>i.handleSavedEvent(b,a),field:a},null,8,["onSaved","field"])]))),128))])):m("",!0)])])):m("",!0),i.activeTab.identifier==="products"?(l(),u("div",Se,[r("div",Ae,[r("div",Le,[r("div",Oe,[P(r("input",{"onUpdate:modelValue":e[7]||(e[7]=a=>s.searchValue=a),type:"text",placeholder:i.__("SKU, Barcode, Name"),class:"flex-auto text-primary outline-none h-10 px-2"},null,8,qe),[[U,s.searchValue]])]),r("div",Ee,[r("div",Ne,[(l(!0),u(v,null,y(s.searchResult,(a,p)=>(l(),u("div",{onClick:b=>i.addProductList(a),key:p,class:"cursor-pointer border border-b hover:bg-floating-menu-hover border-floating-menu-edge p-2 text-primary"},[r("span",Be,d(a.name),1),r("span",Re,d(i.__("SKU"))+" : "+d(a.sku),1),r("span",De,d(i.__("Barcode"))+" : "+d(a.barcode),1)],8,je))),128))])])]),r("div",Ie,[r("table",Me,[r("thead",null,[r("tr",null,[(l(!0),u(v,null,y(s.form.columns,(a,p)=>(l(),u("td",{width:"200",key:p,class:"text-primary p-2 border"},d(a.label),1))),128))])]),r("tbody",null,[(l(!0),u(v,null,y(s.form.products,(a,p)=>(l(),u("tr",{key:p,class:k(a.procurement.$invalid?"error border-2 border-error-primary":"")},[(l(!0),u(v,null,y(s.form.columns,(b,_)=>(l(),u(v,null,[b.type==="name"?(l(),u("td",{key:_,width:"500",class:"p-2 text-primary border"},[r("span",Ke,d(a.name),1),r("div",Ge,[r("div",He,[r("div",Je,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:f=>i.deleteProduct(p)},d(i.__("Delete")),9,ze)]),r("div",Qe,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:f=>i.setProductOptions(p)},d(i.__("Options")),9,We)]),r("div",Xe,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:f=>i.selectUnitForProduct(p)},d(i.__("Unit"))+": "+d(i.getSelectedUnit(p)),9,Ye)]),r("div",Ze,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:f=>i.selectTax(p)},d(i.__("Tax"))+": "+d(i.getSelectedTax(p)),9,$e)]),r("div",et,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:f=>i.defineConversionOption(p)},d(i.__("Convert"))+": "+d(a.procurement.convert_unit_id?a.procurement.convert_unit_label:i.__("N/A")),9,tt)])])])])):m("",!0),b.type==="text"?(l(),u("td",{key:_,onClick:f=>i.triggerKeyboard(a.procurement,_,p),class:"text-primary border cursor-pointer"},[r("div",st,[["purchase_price_edit"].includes(_)?(l(),u("span",it,d(i.nsCurrency(a.procurement[_])),1)):m("",!0),["purchase_price_edit"].includes(_)?m("",!0):(l(),u("span",ot,d(a.procurement[_]),1))])],8,rt)):m("",!0),b.type==="custom_select"?(l(),u("td",{key:_,class:"p-2 text-primary border"},[r("div",nt,[r("div",at,[P(r("select",{onChange:f=>i.updateLine(p),"onUpdate:modelValue":f=>a.procurement[_]=f,class:"p-2"},[(l(!0),u(v,null,y(b.options,f=>(l(),u("option",{key:f.value,value:f.value},d(f.label),9,lt))),128))],40,ct),[[B,a.procurement[_]]])])])])):m("",!0),b.type==="currency"?(l(),u("td",{key:_,class:"p-2 text-primary border"},[r("div",ut,[r("span",dt,d(i.nsCurrency(a.procurement[_])),1)])])):m("",!0)],64))),256))],2))),128)),r("tr",pt,[r("td",{class:"p-2 border",colspan:Object.keys(s.form.columns).indexOf("tax_value")},null,8,mt),r("td",ht,d(i.nsCurrency(s.totalTaxValues)),1),r("td",{class:"p-2 border",colspan:Object.keys(s.form.columns).indexOf("total_purchase_price")-(Object.keys(s.form.columns).indexOf("tax_value")+1)},null,8,_t),r("td",ft,d(i.nsCurrency(s.totalPurchasePrice)),1)])])])])])])):m("",!0)])])])],64)):m("",!0)])}const Ut=O(ne,[["render",bt]]);export{Ut as default};
