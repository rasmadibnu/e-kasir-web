import{_ as $,O as N,r as i,P as b,Q as d,X as z,T as l,S as a,Y as I,$ as p,Z as o,V as r,W as w,D as u,R as c,ap as U,aq as _}from"./index.6a46384e.js";import{Q as h,a as q}from"./QForm.fef47790.js";import{Q as B,h as T,a as Y,b as C,c as A}from"./moment.7856589a.js";import{j as D,k as M,l as P,Q as m,i as y,m as E,n as k,C as v}from"./ClosePopup.ceb416f6.js";import{_ as j,Q as V,b as f}from"./VxIcon.9b935379.js";const x=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"name",sortable:!0},{name:"Deskripsi",label:"Deskripsi",align:"left",field:"deskripsi",sortable:!0},{name:"Created",label:"Created By",align:"left",field:e=>{var t;return(t=e.user_create)==null?void 0:t.name},sortable:!0},{name:"Updated",label:"Updated At",align:"left",field:e=>T(e.updated_at).format("YYYY-MM-DD hh:mm:ss"),sortable:!0},{name:"action",label:"Action",align:"right"}],g={name:null,deskripsi:null},F=N({props:["user"],components:{VxIcon:j},setup(){return{columns:x,rows:i([]),loading:i(!1),search:i(""),is_edit:i(!1),confirm:i(!1),form_dialog:i(!1),id:i(""),form:i(structuredClone(g))}},mounted(){this.getData()},methods:{getData(){this.loading=!0,this.$api.get("/suppliers").then(e=>{this.rows=e.data.data,this.loading=!1}).catch(e=>{console.log(e)})},openDialog(e){e?(this.is_edit=!0,this.id=e.id,this.form={...e}):(this.form={...g},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...g},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/suppliers/"+this.id,{...this.form,updated_by:this.user.id}).then(e=>{this.$q.notify({message:"Supplier successfully updated",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/suppliers",{...this.form,created_by:this.user.id}).then(e=>{this.$q.notify({message:"Supplier successfully created",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/suppliers/"+this.id).then(e=>{this.$q.notify({message:"Supplier successfully deleted",color:"positive"}),this.getData(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),R=p("div",{class:"tw-text-xl tw-font-semibold"},"Supplier",-1),W={class:"tw-flex tw-justify-between tw-w-full"},L={class:"text-h6"},O={class:"text-h6 text-negative tw-flex tw-items-center"};function X(e,t,Z,G,H,J){const n=b("vx-icon"),Q=b("VxIcon");return d(),z(I,null,[l(B,{class:"tw-p-4 tw-space-y-6"},{default:a(()=>[R,l(Y,{color:"primary",columns:e.columns,rows:e.rows,loading:e.loading,filter:e.search,pagination:{rowsPerPage:10},flat:""},{top:a(()=>[p("div",W,[l(o,{outline:"","no-caps":"",color:"primary",onClick:t[0]||(t[0]=s=>e.openDialog(null))},{default:a(()=>[l(n,{iconName:"AddCircle",class:"tw-mr-2",size:20}),r(" Create New ")]),_:1}),l(h,{dense:"",placeholder:"Search...",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=s=>e.search=s),filled:""},{prepend:a(()=>[l(n,{iconName:"SearchStatus",size:20})]),_:1},8,["modelValue"])])]),"body-cell-index":a(s=>[l(C,{props:s},{default:a(()=>[r(w(s.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":a(s=>[l(C,{props:s},{default:a(()=>[l(o,{flat:"",dense:"",size:"sm",color:"primary"},{default:a(()=>[l(n,{iconName:"More",size:18}),l(M,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:a(()=>[l(P,{style:{"min-width":"100px"}},{default:a(()=>[u((d(),c(y,{clickable:"",class:"text-primary",onClick:S=>e.openDialog(s.row)},{default:a(()=>[l(m,{avatar:""},{default:a(()=>[l(n,{iconName:"Edit",size:20})]),_:1}),l(m,null,{default:a(()=>[r("Edit")]),_:1})]),_:2},1032,["onClick"])),[[_]]),l(E),u((d(),c(y,{clickable:"",class:"text-negative",onClick:S=>e.confirmDelete(s.row.id)},{default:a(()=>[l(m,{avatar:""},{default:a(()=>[l(n,{iconName:"Trash",size:20})]),_:1}),l(m,null,{default:a(()=>[r("Delete")]),_:1})]),_:2},1032,["onClick"])),[[_]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","loading","filter"])]),_:1}),l(D,{modelValue:e.form_dialog,"onUpdate:modelValue":t[4]||(t[4]=s=>e.form_dialog=s)},{default:a(()=>[l(V,{style:{"min-width":"400px"}},{default:a(()=>[l(f,{class:"row items-center"},{default:a(()=>[p("div",L,w(e.is_edit?"Edit":"Create")+" Supplier",1),l(A),u((d(),c(o,{flat:"",round:"",dense:""},{default:a(()=>[l(n,{iconName:"CloseCircle",size:20})]),_:1})),[[v]])]),_:1}),l(q,{onSubmit:U(e.submit,["prevent"])},{default:a(()=>[l(f,{class:"tw-space-y-2"},{default:a(()=>[l(h,{modelValue:e.form.name,"onUpdate:modelValue":t[2]||(t[2]=s=>e.form.name=s),filled:"",label:"Nama",rules:[s=>!!s||"This field is required"]},null,8,["modelValue","rules"]),l(h,{modelValue:e.form.deskripsi,"onUpdate:modelValue":t[3]||(t[3]=s=>e.form.deskripsi=s),filled:"",label:"Deskripsi"},null,8,["modelValue"])]),_:1}),l(k,{align:"right"},{default:a(()=>[l(o,{label:"Cancel","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),l(o,{label:"Submit",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),l(D,{modelValue:e.confirm,"onUpdate:modelValue":t[5]||(t[5]=s=>e.confirm=s)},{default:a(()=>[l(V,null,{default:a(()=>[l(f,null,{default:a(()=>[p("div",O,[l(Q,{iconName:"Warning2",class:"tw-mr-2",size:22}),r(" Confirmation ")])]),_:1}),l(f,{class:"q-pt-none"},{default:a(()=>[r(" Are you sure want to delete this data? ")]),_:1}),l(k,{align:"right"},{default:a(()=>[u(l(o,{flat:"",label:"Cancel","no-caps":""},null,512),[[v]]),l(o,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var te=$(F,[["render",X]]);export{te as default};