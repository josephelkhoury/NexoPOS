import{_ as s}from"./preload-helper-41c905a7.js";import{P as p}from"./bootstrap-f2d81cbc.js";import{_ as m}from"./currency-47ec5b79.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{I as n,a6 as a,z as _,A as r}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as u}from"./npm~@vue~shared_-82b01912.js";import"./npm~lodash-f7a36ac5.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";const c={name:"ns-pos-customers-button",methods:{__:m,openCustomerPopup(){p.show(n({loader:()=>s(()=>import("./ns-pos-customer-select-popup-1475a04a.js").then(o=>o.b),["./ns-pos-customer-select-popup-1475a04a.js","./bootstrap-f2d81cbc.js","./npm~lodash-f7a36ac5.js","./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js","./npm~laravel-echo-7ac8f47a.js","./npm~pusher-js-7b18aad5.js","./npm~axios-0ec1b34a.js","./npm~form-data-87061074.js","./npm~chart.js-3fed1729.js","./npm~rxjs-a7e91008.js","./npm~tslib-f3101d7c.js","./npm~moment-fbc5633a.js","./npm~vue-6a0d7c4c.js","./npm~@vue~runtime-dom_-a668b91e.js","./npm~@vue~runtime-core_-ff0bdc0c.js","./npm~@vue~reactivity_-481192b6.js","./npm~@vue~shared_-82b01912.js","./npm~@vue~compiler-dom_-04241bb4.js","./npm~@vue~compiler-core_-2a2ce8c7.js","./npm~rx-1641e2f8.js","./npm~@wordpress~hooks_-18172e20.js","./currency-47ec5b79.js","./npm~numeral-faf61dd1.js","./npm~currency.js-57f74176.js","./npm~mathjs-1dff8408.js","./npm~@babel~runtime_-34ca84e8.js","./npm~decimal.js-d133ee8e.js","./npm~complex.js-15c479db.js","./npm~fraction.js-52b397f9.js","./npm~typed-function-e88d1f37.js","./npm~seedrandom-b246f2f9.js","./npm~javascript-natural-sort-11e7fc54.js","./npm~escape-latex-404addb9.js","./_plugin-vue_export-helper-c27b6911.js","./ns-paginate-965aeeab.js","./ns-pos-confirm-popup-268ffc19.js","./ns-orders-preview-popup-996b8fa5.js","./ns-numpad-plus-f3ffaa01.js","./print-3c0412fa.js","./npm~@dicebear~avatars_-e73ed2cc.js","./npm~pure-color-28f75675.js","./npm~svgson-a2b86d8a.js","./npm~omit-deep-3a616dcc.js","./npm~is-plain-object-01248184.js","./npm~isobject-2e03973b.js","./npm~isarray-980812a4.js","./npm~unset-value-cf896816.js","./npm~has-value-859045a0.js","./npm~has-values-79b61d1f.js","./npm~get-value-efae0488.js","./npm~deep-rename-keys-9802c842.js","./npm~kind-of-f578382b.js","./npm~is-buffer-793dba8c.js","./npm~rename-keys-8dab041c.js","./npm~xml-reader-1784d248.js","./npm~eventemitter3-c7e30f9c.js","./npm~xml-lexer-6516179a.js","./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js","./ns-switch-0a4d4345.js","./npm~@ckeditor~ckeditor5-vue_-b5744b68.js","./npm~vue2-daterange-picker-f17f6b76.js","./npm~vue2-daterange-picker-b4959dd3.css","./npm~vuedraggable-90a90e9d.js","./npm~sortablejs-9be29f79.js","./npm~vue-upload-component-9e5d4563.js","./ns-prompt-popup-64b67141.js"],import.meta.url)}))}},beforeDestroy(){nsHotPress.destroy("ns_pos_keyboard_create_customer")},mounted(){for(let o in nsShortcuts)["ns_pos_keyboard_create_customer"].includes(o)&&nsHotPress.create("ns_pos_keyboard_create_customer").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[o],t=>{t.preventDefault(),this.openCustomerPopup()})}},l={class:"ns-button default"},d=r("i",{class:"mr-1 text-xl lar la-user-circle"},null,-1);function f(o,t,h,P,b,e){return a(),_("div",l,[r("button",{onClick:t[0]||(t[0]=x=>e.openCustomerPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[d,r("span",null,u(e.__("Customers")),1)])])}const oo=i(c,[["render",f]]);export{oo as default};
