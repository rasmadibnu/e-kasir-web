import{_ as Q,O as V,r as d,P as f,Q as v,R as C,S as l,$ as t,T as s,Z as p,W as r,V as c,B as S}from"./index.1269dd09.js";import{a as m,Q as h}from"./QCard.e3f529fd.js";import{h as k,Q as D,d as b,a as $}from"./moment.25a5e129.js";import{V as T,Q as A,a as g,b as B,c as w}from"./vue3-apexcharts.common.9a138ecd.js";import{m as Y,j as M}from"./QDialog.807becb1.js";import{Q as N}from"./QTd.4671367d.js";import{Q as q}from"./QInput.cb57774e.js";import{Q as z,C as I}from"./ClosePopup.583f2f67.js";import{_ as P}from"./VxIcon.aa3f9ac6.js";import"./use-key-composition.501918c1.js";import"./touch.bd17aad0.js";const U=V({props:["user"],components:{VueApexCharts:T,VxIcon:P},setup(){return{columns:[{name:"index",label:"#",align:"center"},{name:"action",label:"Action",align:"left",field:"type",sortable:!0},{name:"value",label:"Value",align:"left",field:"value",sortable:!0},{name:"stok",label:"Stok",align:"left",field:"stok",sortable:!0},{name:"ca",label:"At",align:"left",field:"created_at",format:a=>k(a).format("YYYY-MM-DD hh:mm:ss"),sortable:!0},{name:"by",label:"By",align:"left",field:a=>a.user_create.name,sortable:!0}],moment:k,produk:d(null),tab:d("table"),confirm:d(!1),new_stok:d(),series:d([{name:"Stok",data:[]}]),chartOptions:d({chart:{type:"area",height:350,zoom:{enabled:!1}},dataLabels:{enabled:!1},colors:["#1976D2"],labels:[],xaxis:{type:"datetime"},yaxis:{labels:{formatter:a=>a.toFixed(0)}},legend:{horizontalAlign:"left"}})}},mounted(){this.getData()},methods:{getData(){this.$api.get("/produk/"+this.$route.params.id).then(e=>{this.produk=e.data.data,this.produk.history_stok.forEach(a=>{this.series[0].data.push(a.stok),this.chartOptions.labels.push(a.created_at)}),console.log(this.series)})},submit(){this.loading=!0;var e=[];e.push({produk_id:this.produk.id,stok:this.produk.stok.stok+this.new_stok,value:this.new_stok,type:"Re-Stok",created_by:this.user.id}),this.$api.post("/stoks",e).then(a=>{this.$q.notify({message:"Stok successfully updated",color:"positive"}),this.confirm=!1,this.new_stok=d(),this.getData()}).catch(a=>{console.log(a)})}}}),L={class:"tw-flex tw-items-center"},O=t("div",{class:"tw-text-xl tw-font-semibold"},"Back",-1),R={class:"tw-text-lg"},j=t("td",{class:"text-left"},"Kategori",-1),H=t("td",{class:"text-left"},":",-1),W={class:"text-left"},E=t("td",{class:"text-left"},"Supplier",-1),F=t("td",{class:"text-left"},":",-1),K={class:"text-left"},Z=t("td",{class:"text-left"},"Harga",-1),G=t("td",{class:"text-left"},":",-1),J={class:"text-left"},X=t("td",{class:"text-left"},"Created By",-1),tt=t("td",{class:"text-left"},":",-1),et={class:"text-left"},st=t("td",{class:"text-left"},"Stok",-1),at=t("td",{class:"text-left"},":",-1),ot={class:"text-left"},lt=t("td",{class:"text-left"},"Last Update Stok",-1),nt=t("td",{class:"text-left"},":",-1),rt={class:"text-left"},dt=t("td",{class:"text-left"},"Last Stok Action",-1),it=t("td",{class:"text-left"},":",-1),ut={class:"text-left"},ct=t("td",{class:"text-left"},"Created At",-1),mt=t("td",{class:"text-left"},":",-1),pt={class:"text-left"},ft=t("div",{class:"tw-text-lg tw-mb-2"},"History Stok",-1),_t={class:"text-h6 tw-flex tw-items-center"},ht={class:"tw-mb-3"};function kt(e,a,bt,gt,wt,yt){const _=f("vx-icon"),y=f("vue-apex-charts"),x=f("VxIcon");return v(),C(D,{class:"tw-p-4 tw-space-y-6"},{default:l(()=>[t("div",L,[s(p,{"no-caps":"",dense:"",flat:"",to:{name:e.$route.params.from}},{default:l(()=>[s(_,{iconName:"ArrowLeft2",size:24}),O]),_:1},8,["to"])]),s(h,{flat:""},{default:l(()=>[s(m,{class:"tw-flex tw-justify-between"},{default:l(()=>{var o;return[t("div",R,r((o=e.produk)==null?void 0:o.name),1),s(p,{"no-caps":"",outline:"",color:"primary",onClick:a[0]||(a[0]=n=>e.confirm=!0)},{default:l(()=>[s(_,{iconName:"BoxAdd",class:"tw-mr-2",size:18}),c(" Re-Stok ")]),_:1})]}),_:1}),s(m,{class:"q-pt-none tw-grid tw-grid-cols-2"},{default:l(()=>[s(b,{flat:"",separator:"none",dense:"","wrap-cells":!0},{default:l(()=>{var o,n,i,u;return[t("tbody",null,[t("tr",null,[j,H,t("td",W,r((o=e.produk)==null?void 0:o.kategori.name),1)]),t("tr",null,[E,F,t("td",K,r((n=e.produk)==null?void 0:n.supplier.name),1)]),t("tr",null,[Z,G,t("td",J,r((i=e.produk)==null?void 0:i.harga_rp),1)]),t("tr",null,[X,tt,t("td",et,r((u=e.produk)==null?void 0:u.user_create.name),1)])])]}),_:1}),s(b,{flat:"",separator:"none",dense:"","wrap-cells":!0},{default:l(()=>{var o,n,i,u;return[t("tbody",null,[t("tr",null,[st,at,t("td",ot,r((o=e.produk)==null?void 0:o.stok.stok),1)]),t("tr",null,[lt,nt,t("td",rt,r((n=e.produk)==null?void 0:n.stok.user_create.name),1)]),t("tr",null,[dt,it,t("td",ut,r((i=e.produk)==null?void 0:i.stok.type),1)]),t("tr",null,[ct,mt,t("td",pt,r(e.moment((u=e.produk)==null?void 0:u.created_at).format("YYYY-MM-DD hh:mm:ss")),1)])])]}),_:1})]),_:1}),s(m,{class:"q-pt-none"},{default:l(()=>[ft,s(A,{"no-caps":"",modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=o=>e.tab=o),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},{default:l(()=>[s(g,{name:"table",label:"Table"}),s(g,{name:"chart",label:"Chart"})]),_:1},8,["modelValue"]),s(Y),s(B,{modelValue:e.tab,"onUpdate:modelValue":a[2]||(a[2]=o=>e.tab=o),animated:""},{default:l(()=>[s(w,{name:"table"},{default:l(()=>{var o;return[s($,{flat:"",rows:(o=e.produk)==null?void 0:o.history_stok,columns:e.columns},{"body-cell-index":l(n=>[s(N,{props:n},{default:l(()=>[c(r(n.rowIndex+1),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]}),_:1}),s(w,{name:"chart"},{default:l(()=>[s(y,{type:"area",height:"350",options:e.chartOptions,series:e.series},null,8,["options","series"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),s(M,{modelValue:e.confirm,"onUpdate:modelValue":a[4]||(a[4]=o=>e.confirm=o)},{default:l(()=>[s(h,{style:{width:"400px"}},{default:l(()=>[s(m,null,{default:l(()=>[t("div",_t,[s(x,{iconName:"Warning2",class:"tw-mr-2",size:22}),c(" Re-Stok ")])]),_:1}),s(m,{class:"q-py-none"},{default:l(()=>{var o;return[t("div",ht,[c(" Anda yakin ingin mengupdate stok "),t("b",null,r((o=e.produk)==null?void 0:o.name),1),c("? ")]),s(q,{filled:"",rules:[n=>!!n||"This field required"],label:"Stok",modelValue:e.new_stok,"onUpdate:modelValue":a[3]||(a[3]=n=>e.new_stok=n),modelModifiers:{number:!0}},null,8,["rules","modelValue"])]}),_:1}),s(z,{align:"right"},{default:l(()=>[S(s(p,{flat:"",label:"Cancel","no-caps":""},null,512),[[I]]),s(p,{flat:"",label:"Yes",color:"primary","no-caps":"",onClick:e.submit},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Yt=Q(U,[["render",kt]]);export{Yt as default};