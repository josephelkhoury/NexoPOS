import{_ as e}from"./preload-helper-41c905a7.js";import"./time-64f73058.js";import{b as w,n as I,a as L}from"./components-0b7f3d5e.js";import{c as m,n as y}from"./bootstrap-c2e23f29.js";import{N as V}from"./ns-hotpress-fbaed768.js";import{d as t}from"./runtime-core.esm-bundler-d74bfa4d.js";import"./ns-alert-popup-eb00e755.js";import"./currency-feccde3d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ns-avatar-image-762bed1e.js";import"./index.es-25aa42ee.js";import"./ns-prompt-popup-d96b6813.js";import"./chart-2ccf8ff7.js";function O(o,_){_.forEach(a=>{let r=o.document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",a),o.document.getElementsByTagName("head")[0].appendChild(r)})}const S={install(o,_={}){o.config.globalProperties.$htmlToPaper=(a,r,D=()=>!0)=>{let P="_blank",v=["fullscreen=yes","titlebar=yes","scrollbars=yes"],R=!0,A=[],{name:u=P,specs:i=v,replace:T=R,styles:p=A}=_;r&&(r.name&&(u=r.name),r.specs&&(i=r.specs),r.replace&&(T=r.replace),r.styles&&(p=r.styles)),i=i.length?i.join(","):"";const l=window.document.getElementById(a);if(!l){alert(`Element to print #${a} not found!`);return}const f="",s=window.open(f,u,i);return s.document.write(`
          <html>
            <head>
              <title>${window.document.title}</title>
            </head>
            <body>
              ${l.innerHTML}
            </body>
          </html>
        `),O(s,p),setTimeout(()=>{s.document.close(),s.focus(),s.print(),s.close(),D()},1e3),!0}}},g=t(()=>e(()=>import("./rewards-system-ed593cf5.js"),["./rewards-system-ed593cf5.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),C=t(()=>e(()=>import("./create-coupons-acc5b80f.js"),["./create-coupons-acc5b80f.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),k=t(()=>e(()=>import("./ns-settings-7bce4383.js"),["./ns-settings-7bce4383.js","./currency-feccde3d.js","./bootstrap-c2e23f29.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),H=t(()=>e(()=>import("./reset-1d57cde5.js"),["./reset-1d57cde5.js","./currency-feccde3d.js","./bootstrap-c2e23f29.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),M=t(()=>e(()=>import("./modules-f9e76cab.js"),["./modules-f9e76cab.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),j=t(()=>e(()=>import("./ns-permissions-bff51252.js"),["./ns-permissions-bff51252.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),N=t(()=>e(()=>import("./ns-procurement-b453f9b2.js"),["./ns-procurement-b453f9b2.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./manage-products-81c18528.js","./ns-prompt-popup-d96b6813.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./select-api-entities-d12a4acf.js","./join-array-28744963.js","./index.es-25aa42ee.js"],import.meta.url)),q=t(()=>e(()=>import("./manage-products-81c18528.js"),["./manage-products-81c18528.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./ns-prompt-popup-d96b6813.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),x=t(()=>e(()=>import("./ns-procurement-invoice-b9a1ca34.js"),[],import.meta.url)),$=t(()=>e(()=>import("./ns-notifications-ad1f0088.js"),["./ns-notifications-ad1f0088.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./ns-prompt-popup-d96b6813.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js"],import.meta.url)),B=t(()=>e(()=>import("./components-0b7f3d5e.js").then(o=>o.i),["./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./currency-feccde3d.js","./_plugin-vue_export-helper-c27b6911.js","./runtime-core.esm-bundler-d74bfa4d.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./bootstrap-c2e23f29.js","./chart-2ccf8ff7.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),F=t(()=>e(()=>import("./ns-transaction-d9482540.js"),["./ns-transaction-d9482540.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),Y=t(()=>e(()=>import("./ns-dashboard-f8223137.js"),["./ns-dashboard-f8223137.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),z=t(()=>e(()=>import("./ns-low-stock-report-05650812.js"),["./ns-low-stock-report-05650812.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css","./join-array-28744963.js"],import.meta.url)),G=t(()=>e(()=>import("./ns-sale-report-64a1fe9d.js"),["./ns-sale-report-64a1fe9d.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css","./join-array-28744963.js"],import.meta.url)),J=t(()=>e(()=>import("./ns-sold-stock-report-13a33192.js"),["./ns-sold-stock-report-13a33192.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css","./select-api-entities-d12a4acf.js","./join-array-28744963.js"],import.meta.url)),K=t(()=>e(()=>import("./ns-profit-report-86c1bbde.js"),["./ns-profit-report-86c1bbde.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css","./select-api-entities-d12a4acf.js","./join-array-28744963.js"],import.meta.url)),Q=t(()=>e(()=>import("./ns-stock-combined-report-18ede66a.js"),["./ns-stock-combined-report-18ede66a.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./select-api-entities-d12a4acf.js","./ns-prompt-popup-d96b6813.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./join-array-28744963.js"],import.meta.url)),U=t(()=>e(()=>import("./ns-cash-flow-report-1fd66643.js"),["./ns-cash-flow-report-1fd66643.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),W=t(()=>e(()=>import("./ns-yearly-report-1a3e3dbd.js"),["./ns-yearly-report-1a3e3dbd.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),X=t(()=>e(()=>import("./ns-best-products-report-802f4552.js"),["./ns-best-products-report-802f4552.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),Z=t(()=>e(()=>import("./ns-payment-types-report-347b6d7a.js"),["./ns-payment-types-report-347b6d7a.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./components-0b7f3d5e.js","./ns-alert-popup-eb00e755.js","./_plugin-vue_export-helper-c27b6911.js","./ns-avatar-image-762bed1e.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),ee=t(()=>e(()=>import("./ns-customers-statement-report-c2f2f695.js"),["./ns-customers-statement-report-c2f2f695.js","./currency-feccde3d.js","./_plugin-vue_export-helper-c27b6911.js","./runtime-core.esm-bundler-d74bfa4d.js"],import.meta.url)),te=t(()=>e(()=>import("./ns-stock-adjustment-93be0600.js"),["./ns-stock-adjustment-93be0600.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./ns-procurement-quantity-338cbe62.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),oe=t(()=>e(()=>import("./ns-order-invoice-ea2bb769.js"),["./ns-order-invoice-ea2bb769.js","./currency-feccde3d.js","./_plugin-vue_export-helper-c27b6911.js","./runtime-core.esm-bundler-d74bfa4d.js"],import.meta.url)),re=t(()=>e(()=>import("./ns-print-label-ca6773fc.js"),["./ns-print-label-ca6773fc.js","./currency-feccde3d.js","./runtime-core.esm-bundler-d74bfa4d.js","./bootstrap-c2e23f29.js","./chart-2ccf8ff7.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),n=window.nsState,se=window.nsScreen;nsExtraComponents.nsToken=t(()=>e(()=>import("./ns-token-f81cbcdd.js"),["./ns-token-f81cbcdd.js","./bootstrap-c2e23f29.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-d74bfa4d.js","./_plugin-vue_export-helper-c27b6911.js","./index.es-25aa42ee.js","./ns-prompt-popup-d96b6813.js","./ns-prompt-popup-6013118d.css"],import.meta.url));window.nsHotPress=new V;const d=Object.assign({nsModules:M,nsRewardsSystem:g,nsCreateCoupons:C,nsManageProducts:q,nsSettings:k,nsReset:H,nsPermissions:j,nsProcurement:N,nsProcurementInvoice:x,nsMedia:B,nsTransaction:F,nsDashboard:Y,nsPrintLabel:re,nsNotifications:$,nsSaleReport:G,nsSoldStockReport:J,nsProfitReport:K,nsStockCombinedReport:Q,nsCashFlowReport:U,nsYearlyReport:W,nsPaymentTypesReport:Z,nsBestProductsReport:X,nsLowStockReport:z,nsCustomersStatementReport:ee,nsStockAdjustment:te,nsOrderInvoice:oe,...w},nsExtraComponents);window.nsDashboardAside=m({data(){return{sidebar:"visible",popups:[]}},components:{nsMenu:I,nsSubmenu:L},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardOverlay=m({data(){return{sidebar:null,popups:[]}},components:d,mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})},methods:{closeMenu(){n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}}});window.nsDashboardHeader=m({data(){return{menuToggled:!1,sidebar:null}},components:d,methods:{toggleMenu(){this.menuToggled=!this.menuToggled},toggleSideMenu(){["lg","xl"].includes(se.breakpoint)?n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"}):n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardContent=m({});for(let o in d)window.nsDashboardContent.component(o,d[o]);window.nsDashboardContent.use(S,{styles:Object.values(window.ns.cssFiles)});window.nsComponents=Object.assign(d,w);y.doAction("ns-before-mount");const c=document.querySelector("#dashboard-aside");window.nsDashboardAside&&c&&window.nsDashboardAside.mount(c);const b=document.querySelector("#dashboard-overlay");window.nsDashboardOverlay&&b&&window.nsDashboardOverlay.mount(b);const E=document.querySelector("#dashboard-header");window.nsDashboardHeader&&E&&window.nsDashboardHeader.mount(E);const h=document.querySelector("#dashboard-content");window.nsDashboardContent&&h&&window.nsDashboardContent.mount(h);
