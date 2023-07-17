import{_ as N,O as S,r as i,P as w,Q as d,X as z,T as a,S as t,Y as B,$ as c,Z as s,V as n,W as _,B as m,R as p,cg as I,ci as b}from"./index.1269dd09.js";import{Q as g}from"./QInput.cb57774e.js";import{Q as k}from"./QTd.4671367d.js";import{j as C,k as U,l as K,Q as f,i as D,m as P}from"./QDialog.807becb1.js";import{Q as T,h as Y,a as q}from"./moment.25a5e129.js";import{Q as A}from"./QSpace.45e418f1.js";import{Q,a as u}from"./QCard.e3f529fd.js";import{Q as y,C as v}from"./ClosePopup.583f2f67.js";import{Q as M}from"./QForm.fed7aa7b.js";import{_ as E}from"./VxIcon.aa3f9ac6.js";import"./use-key-composition.501918c1.js";const j=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"name",sortable:!0},{name:"Deskripsi",label:"Deskripsi",align:"left",field:"deskripsi",sortable:!0},{name:"Created",label:"Created By",align:"left",field:e=>{var o;return(o=e.user_create)==null?void 0:o.name},sortable:!0},{name:"Updated",label:"Updated At",align:"left",field:e=>Y(e.updated_at).format("YYYY-MM-DD hh:mm:ss"),sortable:!0},{name:"action",label:"Action",align:"right"}],h={name:null,deskripsi:null},x=S({props:["user"],components:{VxIcon:E},setup(){return{columns:j,rows:i([]),loading:i(!1),search:i(""),is_edit:i(!1),confirm:i(!1),form_dialog:i(!1),id:i(""),form:i(structuredClone(h))}},mounted(){this.getData()},methods:{getData(){this.loading=!0,this.$api.get("/kategori").then(e=>{this.rows=e.data.data,this.loading=!1}).catch(e=>{console.log(e)})},openDialog(e){e?(this.is_edit=!0,this.id=e.id,this.form={...e}):(this.form={...h},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...h},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/kategori/"+this.id,{...this.form,updated_by:this.user.id}).then(e=>{this.$q.notify({message:"Kategori successfully updated",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/kategori",{...this.form,created_by:this.user.id}).then(e=>{this.$q.notify({message:"Kategori successfully created",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/kategori/"+this.id).then(e=>{this.$q.notify({message:"Kategori successfully deleted",color:"positive"}),this.getData(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),F=c("div",{class:"tw-text-xl tw-font-semibold"},"Kategori Produk",-1),R={class:"tw-flex tw-justify-between tw-w-full"},W={class:"text-h6"},L={class:"text-h6 text-negative tw-flex tw-items-center"};function O(e,o,X,Z,G,H){const r=w("vx-icon"),V=w("VxIcon");return d(),z(B,null,[a(T,{class:"tw-p-4 tw-space-y-6"},{default:t(()=>[F,a(q,{color:"primary",columns:e.columns,rows:e.rows,loading:e.loading,filter:e.search,pagination:{rowsPerPage:10},flat:""},{top:t(()=>[c("div",R,[a(s,{outline:"","no-caps":"",color:"primary",onClick:o[0]||(o[0]=l=>e.openDialog(null))},{default:t(()=>[a(r,{iconName:"AddCircle",class:"tw-mr-2",size:20}),n(" Create New ")]),_:1}),a(g,{dense:"",placeholder:"Search...",modelValue:e.search,"onUpdate:modelValue":o[1]||(o[1]=l=>e.search=l),filled:""},{prepend:t(()=>[a(r,{iconName:"SearchStatus",size:20})]),_:1},8,["modelValue"])])]),"body-cell-index":t(l=>[a(k,{props:l},{default:t(()=>[n(_(l.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":t(l=>[a(k,{props:l},{default:t(()=>[a(s,{flat:"",dense:"",size:"sm",color:"primary"},{default:t(()=>[a(r,{iconName:"More",size:18}),a(U,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:t(()=>[a(K,{style:{"min-width":"100px"}},{default:t(()=>[m((d(),p(D,{clickable:"",class:"text-primary",onClick:$=>e.openDialog(l.row)},{default:t(()=>[a(f,{avatar:""},{default:t(()=>[a(r,{iconName:"Edit",size:20})]),_:1}),a(f,null,{default:t(()=>[n("Edit")]),_:1})]),_:2},1032,["onClick"])),[[b]]),a(P),m((d(),p(D,{clickable:"",class:"text-negative",onClick:$=>e.confirmDelete(l.row.id)},{default:t(()=>[a(f,{avatar:""},{default:t(()=>[a(r,{iconName:"Trash",size:20})]),_:1}),a(f,null,{default:t(()=>[n("Delete")]),_:1})]),_:2},1032,["onClick"])),[[b]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","loading","filter"])]),_:1}),a(C,{modelValue:e.form_dialog,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form_dialog=l)},{default:t(()=>[a(Q,{style:{"min-width":"400px"}},{default:t(()=>[a(u,{class:"row items-center"},{default:t(()=>[c("div",W,_(e.is_edit?"Edit":"Create")+" Kategori",1),a(A),m((d(),p(s,{flat:"",round:"",dense:""},{default:t(()=>[a(r,{iconName:"CloseCircle",size:20})]),_:1})),[[v]])]),_:1}),a(M,{onSubmit:I(e.submit,["prevent"])},{default:t(()=>[a(u,{class:"tw-space-y-2"},{default:t(()=>[a(g,{modelValue:e.form.name,"onUpdate:modelValue":o[2]||(o[2]=l=>e.form.name=l),filled:"",label:"Nama",rules:[l=>!!l||"This field is required"]},null,8,["modelValue","rules"]),a(g,{modelValue:e.form.deskripsi,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.deskripsi=l),filled:"",label:"Deskripsi"},null,8,["modelValue"])]),_:1}),a(y,{align:"right"},{default:t(()=>[a(s,{label:"Cancel","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),a(s,{label:"Submit",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a(C,{modelValue:e.confirm,"onUpdate:modelValue":o[5]||(o[5]=l=>e.confirm=l)},{default:t(()=>[a(Q,null,{default:t(()=>[a(u,null,{default:t(()=>[c("div",L,[a(V,{iconName:"Warning2",class:"tw-mr-2",size:22}),n(" Confirmation ")])]),_:1}),a(u,{class:"q-pt-none"},{default:t(()=>[n(" Are you sure want to delete this data? ")]),_:1}),a(y,{align:"right"},{default:t(()=>[m(a(s,{flat:"",label:"Cancel","no-caps":""},null,512),[[v]]),a(s,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var me=N(x,[["render",O]]);export{me as default};
