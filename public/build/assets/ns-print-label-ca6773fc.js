import{_ as x}from"./currency-feccde3d.js";import{m as P,r as y,o as n,c as l,a as t,C as h,n as k,F as u,b as p,t as o,e as a,B as S,f as v,w as g,i as C,g as w}from"./runtime-core.esm-bundler-d74bfa4d.js";import{v as $}from"./bootstrap-c2e23f29.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import"./chart-2ccf8ff7.js";const F=defineComponent({name:"ns-print-label-settings",props:["popup"],template:`
    <div>
        <div class="shadow-lg ns-box w-95vw md:w-2/5-screen">
            <div class="border-b ns-box-body p-2 flex justify-between items-center">
                <h3>{{ __( 'Settings' ) }}</h3>
                <div>
                    <ns-close-button  @click="closePopup()"></ns-close-button>
                </div>
            </div>
            <div class="p-2">
                <ns-field :field="field" :key="index" :ref="field.name" v-for="(field, index) of fields"></ns-field>
            </div>
            <div class="border-t ns-box-footer p-2 flex justify-between">
                <div></div>
                <div>
                    <ns-button type="info" @click="saveSettings()">{{ __( 'Save' ) }}</ns-button>
                </div>
            </div>
        </div>
    </div>
    `,data(){return{fields:[],validation:new FormValidation}},methods:{__,saveSettings(){this.popup.close();const e=this.validation.extractFields(this.fields);this.popup.params.resolve(e)},closePopup(){this.popup.close(),this.popup.params.reject(!1)}},mounted(){const e=this.popup.params.product;this.fields=this.validation.createFields([{label:"Unit",type:"select",name:"selectedUnitQuantity",description:"Choose the unit to apply for the item",options:e.unit_quantities.map(i=>({label:i.unit.name,value:i})),value:e.selectedUnitQuantity||e.unit_quantities[0]},{label:"Unit",type:"select",name:"procurement_id",description:"Choose quantity from procurement",options:e.unit_quantities.map(i=>({label:i.unit.name,value:i})),value:e.procurement_id},{label:"Quantity",type:"number",name:"times",description:"Define how many time the product will be printed",value:e.times||1}]),setTimeout(()=>{this.$refs.times[0].$el.parentNode.querySelector("input").addEventListener("focus",function(){this.select()})},100)}}),T=F,j=P({name:"ns-print-label",props:{barcodeurl:{type:String,required:!0},storename:{type:String,required:!0}},computed:{form(){return new FormValidation().extractFields(this.fields)},visibility(){return new FormValidation().extractFields(this.visibilityFields)},itemsStyle(){return{padding:`${this.form.veritcal_padding||0}px ${this.form.horizontal_padding||0}px`}}},data(){return{product_field:[{label:"Product Field",name:"product_barcode",description:"Load Product By barcode"}],resultSuggestions:[],fields:[],search_product:"",searchTimer:null,products:[],itemsToPrint:[],visibilityFields:[],printingPopup:null}},watch:{search_product(){this.search_product.length>0?(clearTimeout(this.searchTimer),this.searchTimer=setTimeout(()=>{this.searchProduct()},500)):this.resultSuggestions=[]}},mounted(){const e=new FormValidation;this.fields=e.createFields([{type:"select",label:"Items Per Row",name:"max_columns",value:1,options:new Array(6).fill("").map((i,r)=>({label:r+1,value:r+1}))},{type:"number",label:"Vertical Padding (pixels)",name:"veritcal_padding"},{type:"number",label:"Horizontal Padding (pixels)",name:"horizontal_padding"},{type:"number",label:"Barcode Height (pixels)",name:"barcode_height",value:30},{type:"number",label:"Document Size (pixels)",name:"document_size",value:""}]),this.visibilityFields=[{type:"checkbox",label:"Show Store Name",name:"show_store_name",value:!0},{type:"checkbox",label:"Show Barcode Text",name:"show_barcode_text",value:!0},{type:"checkbox",label:"Show Product Price",name:"show_product_price",value:!0},{type:"checkbox",label:"Show Product Name",name:"show_product_name",value:!0}]},methods:{__:x,nsCurrency,removeProduct(e){const i=this.products.indexOf(e);this.products.splice(i,1)},print(){const e="menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";this.printingPopup&&this.printingPopup.close(),this.printingPopup=window.open("","printPopup",e);const i=Array.from(document.querySelectorAll("link")).map(c=>c.outerHTML).join(`
`),r=document.getElementById("label-printing-paper");this.printingPopup.document.writeln(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ${i}
                <title>Printing Labels</title>
                <style>
                    body {   
                        width: ${this.form.document_size+"px"||"auto"}
                    }
                </style>
            </head>
            <body>
                ${r.outerHTML}
                <script type="text/javascript">window.print()<\/script>
            </body>
            </html>
            `),this.printingPopup.document.writeln(r.outerHTML)},async addProduct(e){try{await this.editProduct(e),this.resultSuggestions=[],this.search_product="",this.products.push(e)}catch(i){console.log(i)}},async editProduct(e){return new Promise(async(i,r)=>{const c=await new Promise((m,b)=>{Popup.show(T,{product:e,resolve:m,reject:b})});return e.selectedUnitQuantity=c.selectedUnitQuantity,e.times=c.times,this.$forceUpdate(),i(e)})},searchProduct(){nsHttpClient.post("/api/products/search",{search:this.search_product}).subscribe(e=>{this.resultSuggestions=e},e=>{nsSnackBar.error(e.message).subscribe()})},applySettings(){this.itemsToPrint=[],this.products.forEach(e=>{const i=new Array(parseInt(e.times)).fill("").map(r=>e);this.itemsToPrint.push(...i)})}}}),Q={class:"flex flex-auto overflow-hidden"},B={class:"flex-auto overflow-y-scroll ns-scrollbar bg-gray-900 p-10"},z={key:0,class:"font-bold text-black text-xl text-center"},V={key:1,class:"flex justify-between py-1"},L={key:2,class:"flex justify-between py-1"},q={key:3,class:"flex justify-between py-1"},N={key:4,class:"flex justify-between py-1"},A={class:"flex justify-center flex-col py-1"},E=["src","alt"],H={class:"flex justify-center w-full"},D={class:"-mt-4 bg-white inline-block p-1"},I={class:"w-1/4 p-4 flex-shrink-0 overflow-y-scroll ns-scrollbar"},M={class:"shadow ns-box mb-4"},O={class:"header border-b ns-box-header p-2"},R={class:"font-semibold"},X={class:"body p-2"},Y={class:"input-group info rounded border-2"},G=["placeholder"],J={key:0,class:"h-0 relative anim-duration-300 fade-in-entrance"},K={class:"shadow-lg ns-vertical-menu absolute w-full z-10"},W=["onClick"],Z={class:"font-semibold"},ee={class:"text-xs"},te={key:1,class:"flex flex-col"},se={class:"font-semibold"},ie={class:"flex flex-col"},oe={class:"font-semibold"},ne={class:"text-xs"},le={class:"flex items-center"},re={class:"flex flex-col"},ae=["onClick"],de=t("i",{class:"las la-cog"},null,-1),ce=[de],ue=["onClick"],pe=t("i",{class:"las la-times"},null,-1),he=[pe],me={class:"border-t ns-box-footer p-2 flex justify-between"},be=t("i",{class:"las la-print"},null,-1),_e={class:"shadow ns-box mb-4"},fe={class:"header border-b ns-box-header p-2"},ye={class:"font-semibold"},ve={class:"body p-2 ns-box-body"},ge={class:"shadow ns-box mb-4"},we={class:"header border-b ns-box-header p-2"},xe={class:"font-semibold"},Pe={class:"body p-2 ns-box-body"};function ke(e,i,r,c,m,b){const _=y("ns-button"),f=y("ns-field");return n(),l("div",Q,[t("div",B,[t("div",{class:"shadow-lg bg-white",id:"label-printing-paper",style:h({width:e.form.document_size+"px"||"auto"})},[t("div",{class:k(["grid","grid-cols-"+(e.form.max_columns||1)])},[(n(!0),l(u,null,p(e.itemsToPrint,s=>(n(),l("div",{class:"item border border-black",style:h(e.itemsStyle)},[e.visibility.show_store_name?(n(),l("h3",z,o(e.storename),1)):a("",!0),e.visibility.show_product_name?(n(),l("div",V,[t("span",null,o(e.__("Product")),1),t("span",null,o(s.name),1)])):a("",!0),e.visibility.show_product_name?(n(),l("div",L,[t("span",null,o(e.__("Unit")),1),t("span",null,o(s.selectedUnitQuantity.unit.name),1)])):a("",!0),e.visibility.show_barcode_text?(n(),l("div",q,[t("span",null,o(e.__("Barcode")),1),t("span",null,o(s.selectedUnitQuantity.barcode),1)])):a("",!0),e.visibility.show_product_price?(n(),l("div",N,[t("span",null,o(e.__("Price")),1),t("span",null,o(e.nsCurrency(s.selectedUnitQuantity.sale_price)),1)])):a("",!0),t("div",A,[t("img",{style:h({height:e.form.barcode_height+"px"}),src:e.barcodeurl+"/"+s.selectedUnitQuantity.barcode+".png",alt:s.selectedUnitQuantity.barcode},null,12,E),t("div",H,[t("span",D,o(s.selectedUnitQuantity.barcode),1)])])],4))),256))],2)],4)]),t("div",I,[t("div",null,[t("div",M,[t("div",O,[t("h3",R,o(e.__("Products")),1)]),t("div",X,[t("div",Y,[S(t("input",{"onUpdate:modelValue":i[0]||(i[0]=s=>e.search_product=s),class:"w-full p-2",placeholder:e.__("Search Products...")},null,8,G),[[$,e.search_product]])]),e.resultSuggestions.length>0?(n(),l("div",J,[t("ul",K,[(n(!0),l(u,null,p(e.resultSuggestions,s=>(n(),l("li",{onClick:d=>e.addProduct(s),class:"border p-2 flex flex-col cursor-pointer",style:{"margin-bottom":"-1px"}},[t("span",Z,o(s.name),1),t("span",ee,o(s.barcode),1)],8,W))),256))])])):a("",!0),e.products.length>0?(n(),l("div",te,[t("h3",se,o(e.__("Included Products")),1),t("ul",null,[(n(!0),l(u,null,p(e.products,s=>(n(),l("li",{key:s.id,class:"border border-box-elevation-edge bg-box-elevation-background p-2 flex justify-between items-center",style:{"margin-bottom":"-1px"}},[t("p",ie,[t("span",oe,o(s.name)+" ("+o(s.selectedUnitQuantity.unit.name)+") x"+o(s.times),1),t("span",ne,o(s.selectedUnitQuantity.barcode),1)]),t("div",le,[t("p",re,[t("button",{onClick:d=>e.editProduct(s),class:"rounded-full flex h-6 w-6 items-center bg-success-primary text-white justify-center"},ce,8,ae)]),t("div",null,[t("span",{onClick:d=>e.removeProduct(s),class:"ml-1 cursor-pointer bg-error-primary text-white rounded-full h-6 w-6 flex items-center justify-center font-bold"},he,8,ue)])])]))),128))])])):a("",!0)]),t("div",me,[v(_,{onClick:i[1]||(i[1]=s=>e.print()),type:"success"},{default:g(()=>[be]),_:1}),v(_,{onClick:i[2]||(i[2]=s=>e.applySettings()),type:"info"},{default:g(()=>[C(o(e.__("Apply Settings")),1)]),_:1})])]),t("div",_e,[t("div",fe,[t("h3",ye,o(e.__("Basic Settings")),1)]),t("div",ve,[(n(!0),l(u,null,p(e.fields,(s,d)=>(n(),w(f,{field:s,key:d},null,8,["field"]))),128))])]),t("div",ge,[t("div",we,[t("h3",xe,o(e.__("Visibility Settings")),1)]),t("div",Pe,[(n(!0),l(u,null,p(e.visibilityFields,(s,d)=>(n(),w(f,{field:s,class:"mb-2",key:d},null,8,["field"]))),128))])])])])])}const Te=U(j,[["render",ke]]);export{Te as default};
