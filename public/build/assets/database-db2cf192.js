import{F as q}from"./bootstrap-c2e23f29.js";import{_ as s}from"./currency-feccde3d.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{r as b,o as i,c as d,a as t,t as r,e as n,F as h,b as F,g as f,w as p,A as y,i as P,f as w}from"./runtime-core.esm-bundler-d74bfa4d.js";import"./chart-2ccf8ff7.js";const C={data:()=>({formValidation:new q,firstPartFields:[],secondPartFields:[],fields:[],isLoading:!1,isCheckingDatabase:!1,__:s}),computed:{form(){return this.formValidation.extractFields([...this.firstPartFields,...this.secondPartFields])},isMySQL(){return this.form.database_driver==="mysql"},isMariaDB(){return this.form.database_driver==="mariadb"},isSqlite(){return this.form.database_driver==="sqlite"}},methods:{validate(){if(this.formValidation.validateFields(this.firstPartFields)&&this.formValidation.validateFields(this.secondPartFields)){this.isLoading=!0,this.formValidation.disableFields(this.firstPartFields),this.formValidation.disableFields(this.secondPartFields);const e={...this.formValidation.getValue(this.firstPartFields),...this.formValidation.getValue(this.secondPartFields)};this.checkDatabase(e).subscribe(o=>{this.formValidation.enableFields(this.firstPartFields),this.formValidation.enableFields(this.secondPartFields),nsRouter.push("configuration"),nsSnackBar.success(o.message,s("OKAY"),{duration:5e3}).subscribe()},o=>{this.formValidation.enableFields(this.firstPartFields),this.formValidation.enableFields(this.secondPartFields),this.isLoading=!1,nsSnackBar.error(o.message,s("OKAY")).subscribe()})}},checkDatabase(e){return nsHttpClient.post("/api/setup/database",e)},checkExisting(){return nsHttpClient.get("/api/setup/check-database")},sliceRange(e,l,o){const v=e.length,u=Math.ceil(v/l);return e.splice(o*u,u)},loadFields(){this.fields=this.formValidation.createFields([{label:s("Driver"),description:s("Set the database driver"),name:"database_driver",value:"mysql",type:"select",options:[{label:"MySQL",value:"mysql"},{label:"MariaDB",value:"mariadb"},{label:"SQLite",value:"sqlite"}],validation:"required"},{label:s("Hostname"),description:s("Provide the database hostname"),name:"hostname",value:"localhost",show:e=>["mysql","mariadb"].includes(e.database_driver)},{label:s("Username"),description:s("Username required to connect to the database."),name:"username",value:"root",show:e=>["mysql","mariadb"].includes(e.database_driver)},{label:s("Password"),description:s("The username password required to connect."),name:"password",value:"",show:e=>["mysql","mariadb"].includes(e.database_driver)},{label:s("Database Name"),description:s("Provide the database name. Leave empty to use default file for SQLite Driver."),name:"database_name",value:"nexopos_v4",show:e=>["mysql","mariadb"].includes(e.database_driver)},{label:s("Database Prefix"),description:s("Provide the database prefix."),name:"database_prefix",value:"ns_",validation:"required",show:e=>["mysql","mariadb"].includes(e.database_driver)},{label:s("Port"),description:s("Provide the hostname port."),name:"database_port",value:"3306",validation:"required",show:e=>["mysql","mariadb"].includes(e.database_driver)}]),this.firstPartFields=Object.values(this.sliceRange([...this.fields],2,0)),this.secondPartFields=Object.values(this.sliceRange([...this.fields],2,1))}},mounted(){this.isCheckingDatabase=!0,this.checkExisting().subscribe({next:e=>{nsRouter.push("configuration")},error:e=>{this.isCheckingDatabase=!1,this.loadFields()}})}},D={key:0,class:"bg-white rounded shadow my-4"},L={class:"welcome-box border-b border-gray-300 p-3 text-gray-600"},x={class:"border-b pb-4 mb-4"},B={key:0},M={class:"font-bold text-lg"},N={key:1},Q={class:"font-bold text-lg"},O={class:"md:-mx-4 md:flex"},R={class:"md:px-4 md:w-1/2 w-full"},j={class:"md:px-4 md:w-1/2 w-full"},H={class:"bg-gray-200 p-3 flex justify-end"},$={key:1,class:"bg-white shadow rounded p-3 flex justify-center items-center"},A={class:"flex items-center"},E={class:"ml-3"};function Y(e,l,o,v,u,c){const _=b("ns-field"),g=b("ns-spinner"),k=b("ns-button");return i(),d(h,null,[e.isCheckingDatabase?n("",!0):(i(),d("div",D,[t("div",L,[t("div",x,[c.isMySQL?(i(),d("div",B,[t("h3",M,r(e.__("MySQL is selected as database driver")),1),t("p",null,r(e.__("Please provide the credentials to ensure NexoPOS can connect to the database.")),1)])):n("",!0),c.isSqlite?(i(),d("div",N,[t("h3",Q,r(e.__("Sqlite is selected as database driver")),1),t("p",null,r(e.__("Make sure Sqlite module is available for PHP. Your database will be located on the database directory.")),1)])):n("",!0)]),t("div",O,[t("div",R,[(i(!0),d(h,null,F(e.firstPartFields,(a,m)=>(i(),d(h,{key:m},[a.show===void 0||a.show!==void 0&&a.show(c.form)?(i(),f(_,{key:0,field:a,onChange:V=>e.formValidation.validateField(a)},{default:p(()=>[t("span",null,r(a.label),1),y(e.$slots,"description",{},()=>[P(r(a.description),1)])]),_:2},1032,["field","onChange"])):n("",!0)],64))),128))]),t("div",j,[(i(!0),d(h,null,F(e.secondPartFields,(a,m)=>(i(),d(h,{key:m},[a.show===void 0||a.show!==void 0&&a.show(c.form)?(i(),f(_,{key:0,field:a,onChange:V=>e.formValidation.validateField(a)},{default:p(()=>[t("span",null,r(a.label),1),y(e.$slots,"description",{},()=>[P(r(a.description),1)])]),_:2},1032,["field","onChange"])):n("",!0)],64))),128))])])]),t("div",H,[w(k,{disabled:e.isLoading,onClick:l[0]||(l[0]=a=>c.validate()),type:"info"},{default:p(()=>[e.isLoading?(i(),f(g,{key:0,class:"mr-2",size:6})):n("",!0),t("span",null,r(e.__("Save Settings")),1)]),_:1},8,["disabled"])])])),e.isCheckingDatabase?(i(),d("div",$,[t("div",A,[w(g,{size:10}),t("span",E,r(e.__("Checking database connectivity...")),1)])])):n("",!0)],64)}const I=S(C,[["render",Y]]);export{I as default};
