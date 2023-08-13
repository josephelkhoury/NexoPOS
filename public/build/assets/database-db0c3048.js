import{F as w}from"./bootstrap-9d0e4bdd.js";import{_ as t}from"./currency-d0508508.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as f,a6 as o,z as m,A as a,F as b,ac as v,x as _,ax as p,ad as F,H as c,c as k}from"./npm~@vue~runtime-core_-c1400cf1.js";import{U as l}from"./npm~@vue~shared_-82b01912.js";import"./npm~lodash-f5508214.js";import"./npm~@ckeditor~ckeditor5-build-classic_-5cff4652.js";import"./npm~laravel-echo-8b7e2b1d.js";import"./npm~pusher-js-244b366d.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-d815d99e.js";import"./npm~@vue~runtime-dom_-3cadedeb.js";import"./npm~@vue~reactivity_-46d78a21.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-812d4a49.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-eae2cf2e.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-3f247aa1.js";import"./npm~fraction.js-324b3911.js";import"./npm~typed-function-4896e4f1.js";import"./npm~seedrandom-852a687d.js";import"./npm~javascript-natural-sort-2161c071.js";import"./npm~escape-latex-137e2782.js";import"./npm~numeral-b19ffe25.js";import"./npm~currency.js-57f74176.js";const S={data:()=>({form:new w,firstPartFields:[],secondPartFields:[],fields:[],__:t}),methods:{validate(){if(this.form.validateFields(this.firstPartFields)&&this.form.validateFields(this.secondPartFields)){this.form.disableFields(this.firstPartFields),this.form.disableFields(this.secondPartFields);const e={...this.form.getValue(this.firstPartFields),...this.form.getValue(this.secondPartFields)};this.checkDatabase(e).subscribe(i=>{this.form.enableFields(this.firstPartFields),this.form.enableFields(this.secondPartFields),nsRouter.push("configuration"),nsSnackBar.success(i.message,"OKAY",{duration:5e3}).subscribe()},i=>{this.form.enableFields(this.firstPartFields),this.form.enableFields(this.secondPartFields),nsSnackBar.error(i.message,"OKAY").subscribe()})}},checkDatabase(e){return nsHttpClient.post("/api/setup/database",e)},sliceRange(e,r,i){const h=e.length,n=Math.ceil(h/r);return e.splice(i*n,n)}},mounted(){const e=this.form.createFields([{label:t("Driver"),description:t("Set the database driver"),name:"database_driver",value:"mysql",type:"select",options:[{label:"MySQL",value:"mysql"},{label:"Postgres",value:"pgsql"},{label:"SQLite",value:"sqlite"}],validation:"required"},{label:t("Hostname"),description:t("Provide the database hostname"),name:"hostname",value:"localhost"},{label:t("Username"),description:t("Username required to connect to the database."),name:"username",value:"root"},{label:t("Password"),description:t("The username password required to connect."),name:"password",value:""},{label:t("Database Name"),description:t("Provide the database name. Leave empty to use default file for SQLite Driver."),name:"database_name",value:"nexopos_v4"},{label:t("Database Prefix"),description:t("Provide the database prefix."),name:"database_prefix",value:"ns_",validation:"required"},{label:t("Port"),description:t("Provide the hostname port."),name:"database_port",value:"3306",validation:"required"}]);this.firstPartFields=Object.values(this.sliceRange([...e],2,0)),this.secondPartFields=Object.values(this.sliceRange([...e],2,1))}},q={class:"bg-white rounded shadow my-4"},C={class:"welcome-box border-b border-gray-300 p-3 text-gray-700"},$={class:"md:-mx-4 md:flex"},D={class:"md:px-4 md:w-1/2 w-full"},B={class:"md:px-4 md:w-1/2 w-full"},V={class:"bg-gray-200 p-3 flex justify-end"};function L(e,r,i,h,n,g){const u=f("ns-field"),P=f("ns-button");return o(),m("div",q,[a("div",C,[a("div",$,[a("div",D,[(o(!0),m(b,null,v(e.firstPartFields,(s,d)=>(o(),_(u,{key:d,field:s,onChange:y=>e.form.validateField(s)},{default:p(()=>[a("span",null,l(s.label),1),F(e.$slots,"description",{},()=>[c(l(s.description),1)])]),_:2},1032,["field","onChange"]))),128))]),a("div",B,[(o(!0),m(b,null,v(e.secondPartFields,(s,d)=>(o(),_(u,{key:d,field:s,onChange:y=>e.form.validateField(s)},{default:p(()=>[a("span",null,l(s.label),1),F(e.$slots,"description",{},()=>[c(l(s.description),1)])]),_:2},1032,["field","onChange"]))),128))])])]),a("div",V,[k(P,{onClick:r[0]||(r[0]=s=>g.validate()),type:"info"},{default:p(()=>[c(l(e.__("Save Settings")),1)]),_:1})])])}const ce=x(S,[["render",L]]);export{ce as default};