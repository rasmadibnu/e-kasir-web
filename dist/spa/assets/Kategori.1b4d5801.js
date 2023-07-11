import{_ as N,O as S,r as i,P as w,Q as d,X as z,T as a,S as l,Y as I,$ as c,Z as s,V as n,W as b,B as m,R as p,aI as B,aA as _}from"./index.a450bba7.js";import{Q as g}from"./QInput.0d92f8bb.js";import{Q as U,h as A,b as K,a as k}from"./moment.d48c2d66.js";import{j as C,k as P,l as T,Q as f,i as D,m as Y}from"./QDialog.bc836854.js";import{Q as q}from"./QSpace.915ed7ef.js";import{Q as y,a as u}from"./QCard.c2c939f4.js";import{Q,C as v}from"./ClosePopup.a6c7e2f5.js";import{Q as M}from"./QForm.263480b5.js";import{_ as E}from"./VxIcon.c7b7c2a9.js";const j=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"name",sortable:!0},{name:"Deskripsi",label:"Deskripsi",align:"left",field:"deskripsi",sortable:!0},{name:"Created",label:"Created By",align:"left",field:e=>{var o;return(o=e.user_create)==null?void 0:o.name},sortable:!0},{name:"Updated",label:"Updated At",align:"left",field:e=>A(e.updated_at).format("YYYY-MM-DD hh:mm:ss"),sortable:!0},{name:"action",label:"Action",align:"right"}],h={name:null,deskripsi:null},x=S({props:["user"],components:{VxIcon:E},setup(){return{columns:j,rows:i([]),loading:i(!1),search:i(""),is_edit:i(!1),confirm:i(!1),form_dialog:i(!1),id:i(""),form:i(structuredClone(h))}},mounted(){this.getData()},methods:{getData(){this.loading=!0,this.$api.get("/kategori").then(e=>{this.rows=e.data.data,this.loading=!1}).catch(e=>{console.log(e)})},openDialog(e){e?(this.is_edit=!0,this.id=e.id,this.form={...e}):(this.form={...h},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...h},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/kategori/"+this.id,{...this.form,updated_by:this.user.id}).then(e=>{this.$q.notify({message:"Kategori successfully updated",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/kategori",{...this.form,created_by:this.user.id}).then(e=>{this.$q.notify({message:"Kategori successfully created",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/kategori/"+this.id).then(e=>{this.$q.notify({message:"Kategori successfully deleted",color:"positive"}),this.getData(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),F=c("div",{class:"tw-text-xl tw-font-semibold"},"Kategori Produk",-1),R={class:"tw-flex tw-justify-between tw-w-full"},W={class:"text-h6"},L={class:"text-h6 text-negative tw-flex tw-items-center"};function O(e,o,X,Z,G,H){const r=w("vx-icon"),V=w("VxIcon");return d(),z(I,null,[a(U,{class:"tw-p-4 tw-space-y-6"},{default:l(()=>[F,a(K,{color:"primary",columns:e.columns,rows:e.rows,loading:e.loading,filter:e.search,pagination:{rowsPerPage:10},flat:""},{top:l(()=>[c("div",R,[a(s,{outline:"","no-caps":"",color:"primary",onClick:o[0]||(o[0]=t=>e.openDialog(null))},{default:l(()=>[a(r,{iconName:"AddCircle",class:"tw-mr-2",size:20}),n(" Create New ")]),_:1}),a(g,{dense:"",placeholder:"Search...",modelValue:e.search,"onUpdate:modelValue":o[1]||(o[1]=t=>e.search=t),filled:""},{prepend:l(()=>[a(r,{iconName:"SearchStatus",size:20})]),_:1},8,["modelValue"])])]),"body-cell-index":l(t=>[a(k,{props:t},{default:l(()=>[n(b(t.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":l(t=>[a(k,{props:t},{default:l(()=>[a(s,{flat:"",dense:"",size:"sm",color:"primary"},{default:l(()=>[a(r,{iconName:"More",size:18}),a(P,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:l(()=>[a(T,{style:{"min-width":"100px"}},{default:l(()=>[m((d(),p(D,{clickable:"",class:"text-primary",onClick:$=>e.openDialog(t.row)},{default:l(()=>[a(f,{avatar:""},{default:l(()=>[a(r,{iconName:"Edit",size:20})]),_:1}),a(f,null,{default:l(()=>[n("Edit")]),_:1})]),_:2},1032,["onClick"])),[[_]]),a(Y),m((d(),p(D,{clickable:"",class:"text-negative",onClick:$=>e.confirmDelete(t.row.id)},{default:l(()=>[a(f,{avatar:""},{default:l(()=>[a(r,{iconName:"Trash",size:20})]),_:1}),a(f,null,{default:l(()=>[n("Delete")]),_:1})]),_:2},1032,["onClick"])),[[_]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","loading","filter"])]),_:1}),a(C,{modelValue:e.form_dialog,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form_dialog=t)},{default:l(()=>[a(y,{style:{"min-width":"400px"}},{default:l(()=>[a(u,{class:"row items-center"},{default:l(()=>[c("div",W,b(e.is_edit?"Edit":"Create")+" Kategori",1),a(q),m((d(),p(s,{flat:"",round:"",dense:""},{default:l(()=>[a(r,{iconName:"CloseCircle",size:20})]),_:1})),[[v]])]),_:1}),a(M,{onSubmit:B(e.submit,["prevent"])},{default:l(()=>[a(u,{class:"tw-space-y-2"},{default:l(()=>[a(g,{modelValue:e.form.name,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.name=t),filled:"",label:"Nama",rules:[t=>!!t||"This field is required"]},null,8,["modelValue","rules"]),a(g,{modelValue:e.form.deskripsi,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.deskripsi=t),filled:"",label:"Deskripsi"},null,8,["modelValue"])]),_:1}),a(Q,{align:"right"},{default:l(()=>[a(s,{label:"Cancel","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),a(s,{label:"Submit",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a(C,{modelValue:e.confirm,"onUpdate:modelValue":o[5]||(o[5]=t=>e.confirm=t)},{default:l(()=>[a(y,null,{default:l(()=>[a(u,null,{default:l(()=>[c("div",L,[a(V,{iconName:"Warning2",class:"tw-mr-2",size:22}),n(" Confirmation ")])]),_:1}),a(u,{class:"q-pt-none"},{default:l(()=>[n(" Are you sure want to delete this data? ")]),_:1}),a(Q,{align:"right"},{default:l(()=>[m(a(s,{flat:"",label:"Cancel","no-caps":""},null,512),[[v]]),a(s,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var ne=N(x,[["render",O]]);export{ne as default};
