import{_ as $,O as N,r as i,P as w,Q as d,X as z,T as l,S as a,Y as B,$ as p,Z as o,V as n,W as _,B as m,R as c,cg as I,ci as b}from"./index.1269dd09.js";import{Q as h}from"./QInput.cb57774e.js";import{Q as C}from"./QTd.4671367d.js";import{j as D,k as U,l as T,Q as u,i as Q,m as Y}from"./QDialog.807becb1.js";import{Q as q,h as A,a as M}from"./moment.25a5e129.js";import{Q as P}from"./QSpace.45e418f1.js";import{Q as y,a as f}from"./QCard.e3f529fd.js";import{Q as k,C as v}from"./ClosePopup.583f2f67.js";import{Q as E}from"./QForm.fed7aa7b.js";import{_ as j}from"./VxIcon.aa3f9ac6.js";import"./use-key-composition.501918c1.js";const x=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"name",sortable:!0},{name:"Deskripsi",label:"Deskripsi",align:"left",field:"deskripsi",sortable:!0},{name:"Created",label:"Created By",align:"left",field:e=>{var s;return(s=e.user_create)==null?void 0:s.name},sortable:!0},{name:"Updated",label:"Updated At",align:"left",field:e=>A(e.updated_at).format("YYYY-MM-DD hh:mm:ss"),sortable:!0},{name:"action",label:"Action",align:"right"}],g={name:null,deskripsi:null},F=N({props:["user"],components:{VxIcon:j},setup(){return{columns:x,rows:i([]),loading:i(!1),search:i(""),is_edit:i(!1),confirm:i(!1),form_dialog:i(!1),id:i(""),form:i(structuredClone(g))}},mounted(){this.getData()},methods:{getData(){this.loading=!0,this.$api.get("/suppliers").then(e=>{this.rows=e.data.data,this.loading=!1}).catch(e=>{console.log(e)})},openDialog(e){e?(this.is_edit=!0,this.id=e.id,this.form={...e}):(this.form={...g},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...g},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/suppliers/"+this.id,{...this.form,updated_by:this.user.id}).then(e=>{this.$q.notify({message:"Supplier successfully updated",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/suppliers",{...this.form,created_by:this.user.id}).then(e=>{this.$q.notify({message:"Supplier successfully created",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/suppliers/"+this.id).then(e=>{this.$q.notify({message:"Supplier successfully deleted",color:"positive"}),this.getData(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),R=p("div",{class:"tw-text-xl tw-font-semibold"},"Supplier",-1),W={class:"tw-flex tw-justify-between tw-w-full"},L={class:"text-h6"},O={class:"text-h6 text-negative tw-flex tw-items-center"};function X(e,s,Z,G,H,J){const r=w("vx-icon"),V=w("VxIcon");return d(),z(B,null,[l(q,{class:"tw-p-4 tw-space-y-6"},{default:a(()=>[R,l(M,{color:"primary",columns:e.columns,rows:e.rows,loading:e.loading,filter:e.search,pagination:{rowsPerPage:10},flat:""},{top:a(()=>[p("div",W,[l(o,{outline:"","no-caps":"",color:"primary",onClick:s[0]||(s[0]=t=>e.openDialog(null))},{default:a(()=>[l(r,{iconName:"AddCircle",class:"tw-mr-2",size:20}),n(" Create New ")]),_:1}),l(h,{dense:"",placeholder:"Search...",modelValue:e.search,"onUpdate:modelValue":s[1]||(s[1]=t=>e.search=t),filled:""},{prepend:a(()=>[l(r,{iconName:"SearchStatus",size:20})]),_:1},8,["modelValue"])])]),"body-cell-index":a(t=>[l(C,{props:t},{default:a(()=>[n(_(t.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":a(t=>[l(C,{props:t},{default:a(()=>[l(o,{flat:"",dense:"",size:"sm",color:"primary"},{default:a(()=>[l(r,{iconName:"More",size:18}),l(U,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:a(()=>[l(T,{style:{"min-width":"100px"}},{default:a(()=>[m((d(),c(Q,{clickable:"",class:"text-primary",onClick:S=>e.openDialog(t.row)},{default:a(()=>[l(u,{avatar:""},{default:a(()=>[l(r,{iconName:"Edit",size:20})]),_:1}),l(u,null,{default:a(()=>[n("Edit")]),_:1})]),_:2},1032,["onClick"])),[[b]]),l(Y),m((d(),c(Q,{clickable:"",class:"text-negative",onClick:S=>e.confirmDelete(t.row.id)},{default:a(()=>[l(u,{avatar:""},{default:a(()=>[l(r,{iconName:"Trash",size:20})]),_:1}),l(u,null,{default:a(()=>[n("Delete")]),_:1})]),_:2},1032,["onClick"])),[[b]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","loading","filter"])]),_:1}),l(D,{modelValue:e.form_dialog,"onUpdate:modelValue":s[4]||(s[4]=t=>e.form_dialog=t)},{default:a(()=>[l(y,{style:{"min-width":"400px"}},{default:a(()=>[l(f,{class:"row items-center"},{default:a(()=>[p("div",L,_(e.is_edit?"Edit":"Create")+" Supplier",1),l(P),m((d(),c(o,{flat:"",round:"",dense:""},{default:a(()=>[l(r,{iconName:"CloseCircle",size:20})]),_:1})),[[v]])]),_:1}),l(E,{onSubmit:I(e.submit,["prevent"])},{default:a(()=>[l(f,{class:"tw-space-y-2"},{default:a(()=>[l(h,{modelValue:e.form.name,"onUpdate:modelValue":s[2]||(s[2]=t=>e.form.name=t),filled:"",label:"Nama",rules:[t=>!!t||"This field is required"]},null,8,["modelValue","rules"]),l(h,{modelValue:e.form.deskripsi,"onUpdate:modelValue":s[3]||(s[3]=t=>e.form.deskripsi=t),filled:"",label:"Deskripsi"},null,8,["modelValue"])]),_:1}),l(k,{align:"right"},{default:a(()=>[l(o,{label:"Cancel","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),l(o,{label:"Submit",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),l(D,{modelValue:e.confirm,"onUpdate:modelValue":s[5]||(s[5]=t=>e.confirm=t)},{default:a(()=>[l(y,null,{default:a(()=>[l(f,null,{default:a(()=>[p("div",O,[l(V,{iconName:"Warning2",class:"tw-mr-2",size:22}),n(" Confirmation ")])]),_:1}),l(f,{class:"q-pt-none"},{default:a(()=>[n(" Are you sure want to delete this data? ")]),_:1}),l(k,{align:"right"},{default:a(()=>[m(l(o,{flat:"",label:"Cancel","no-caps":""},null,512),[[v]]),l(o,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var me=$(F,[["render",X]]);export{me as default};