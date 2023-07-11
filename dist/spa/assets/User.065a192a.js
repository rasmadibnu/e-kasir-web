import{_ as $,O as S,r as i,P as w,Q as d,X as T,T as a,S as s,Y as P,$ as g,Z as t,V as m,W as b,B as f,R as u,aI as q,aA as V}from"./index.a450bba7.js";import{Q as r}from"./QInput.0d92f8bb.js";import{Q as z,h as I,b as A,a as C,d as y}from"./moment.d48c2d66.js";import{j as k,k as B,l as j,Q as p,i as Q,m as M}from"./QDialog.bc836854.js";import{Q as Y}from"./QSpace.915ed7ef.js";import{Q as D,a as c}from"./QCard.c2c939f4.js";import{Q as v,C as U}from"./ClosePopup.a6c7e2f5.js";import{Q as R}from"./QForm.263480b5.js";import{_ as E}from"./VxIcon.c7b7c2a9.js";const L=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"name",sortable:!0},{name:"Username",label:"Username",align:"left",field:"username",sortable:!0},{name:"Role",label:"Role",align:"left",field:"role",sortable:!0},{name:"PhoneNumber",label:"No Telp",align:"left",field:"phone_number",sortable:!0},{name:"PhoneNumber",label:"Gender",align:"left",field:"jenis_kelamin",sortable:!0},{name:"Created",label:"Created By",align:"left",field:e=>{var o;return(o=e.user_create)==null?void 0:o.name},sortable:!0},{name:"Updated",label:"Updated At",align:"left",field:e=>I(e.updated_at).format("YYYY-MM-DD hh:mm:ss"),sortable:!0},{name:"action",label:"Action",align:"right"}],h={username:null,name:null,role:null,phone_number:null,jenis_kelamin:null,password:null,confirm_password:null},F=S({props:["user"],components:{VxIcon:E},setup(){return{columns:L,rows:i([]),loading:i(!1),search:i(""),is_edit:i(!1),confirm:i(!1),form_dialog:i(!1),id:i(""),form:i(structuredClone(h))}},mounted(){this.getData()},methods:{getData(){this.loading=!0,this.$api.get("/users").then(e=>{this.rows=e.data.data,this.loading=!1}).catch(e=>{console.log(e)})},openDialog(e){e?(this.is_edit=!0,this.id=e.id,delete e.password,this.form={...e}):(this.form={...h},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...h},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/users/"+this.id,{...this.form,updated_by:this.user.id}).then(e=>{this.$q.notify({message:"User successfully updated",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/users",{...this.form,created_by:this.user.id}).then(e=>{this.$q.notify({message:"User successfully created",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/users/"+this.id).then(e=>{this.$q.notify({message:"User successfully deleted",color:"positive"}),this.getData(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),G=g("div",{class:"tw-text-xl tw-font-semibold"},"User",-1),K={class:"tw-flex tw-justify-between tw-w-full"},W={class:"text-h6"},O={class:"text-h6 text-negative tw-flex tw-items-center"};function X(e,o,Z,H,J,x){const n=w("vx-icon"),N=w("VxIcon");return d(),T(P,null,[a(z,{class:"tw-p-4 tw-space-y-6"},{default:s(()=>[G,a(A,{color:"primary",columns:e.columns,rows:e.rows,loading:e.loading,filter:e.search,pagination:{rowsPerPage:10},flat:""},{top:s(()=>[g("div",K,[a(t,{outline:"","no-caps":"",color:"primary",onClick:o[0]||(o[0]=l=>e.openDialog(null))},{default:s(()=>[a(n,{iconName:"AddCircle",class:"tw-mr-2",size:20}),m(" Create New ")]),_:1}),a(r,{dense:"",placeholder:"Search...",modelValue:e.search,"onUpdate:modelValue":o[1]||(o[1]=l=>e.search=l),filled:""},{prepend:s(()=>[a(n,{iconName:"SearchStatus",size:20})]),_:1},8,["modelValue"])])]),"body-cell-index":s(l=>[a(C,{props:l},{default:s(()=>[m(b(l.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":s(l=>[a(C,{props:l},{default:s(()=>[a(t,{flat:"",dense:"",size:"sm",color:"primary"},{default:s(()=>[a(n,{iconName:"More",size:18}),a(B,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:s(()=>[a(j,{style:{"min-width":"100px"}},{default:s(()=>[f((d(),u(Q,{clickable:"",class:"text-primary",onClick:_=>e.openDialog(l.row)},{default:s(()=>[a(p,{avatar:""},{default:s(()=>[a(n,{iconName:"Edit",size:20})]),_:1}),a(p,null,{default:s(()=>[m("Edit")]),_:1})]),_:2},1032,["onClick"])),[[V]]),a(M),f((d(),u(Q,{clickable:"",class:"text-negative",onClick:_=>e.confirmDelete(l.row.id)},{default:s(()=>[a(p,{avatar:""},{default:s(()=>[a(n,{iconName:"Trash",size:20})]),_:1}),a(p,null,{default:s(()=>[m("Delete")]),_:1})]),_:2},1032,["onClick"])),[[V]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","loading","filter"])]),_:1}),a(k,{modelValue:e.form_dialog,"onUpdate:modelValue":o[10]||(o[10]=l=>e.form_dialog=l)},{default:s(()=>[a(D,{style:{"min-width":"600px"}},{default:s(()=>[a(c,{class:"row items-center"},{default:s(()=>[g("div",W,b(e.is_edit?"Edit":"Create")+" User",1),a(Y),f((d(),u(t,{flat:"",round:"",dense:""},{default:s(()=>[a(n,{iconName:"CloseCircle",size:20})]),_:1})),[[U]])]),_:1}),a(R,{onSubmit:q(e.submit,["prevent"])},{default:s(()=>[a(c,{class:"tw-grid tw-grid-cols-6 tw-gap-x-4 tw-gap-y-2"},{default:s(()=>[a(r,{modelValue:e.form.username,"onUpdate:modelValue":o[2]||(o[2]=l=>e.form.username=l),filled:"",class:"tw-col-span-3",label:"Username",rules:[l=>!!l||"This field is required"]},null,8,["modelValue","rules"]),a(r,{modelValue:e.form.name,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.name=l),filled:"",class:"tw-col-span-3",label:"Name",rules:[l=>!!l||"This field is required"]},null,8,["modelValue","rules"]),a(y,{modelValue:e.form.role,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.role=l),filled:"",class:"tw-col-span-2",label:"Role",options:["Admin","Kasir","Manager","Kurir"],rules:[l=>!!l||"This field is required"]},null,8,["modelValue","rules"]),a(y,{modelValue:e.form.jenis_kelamin,"onUpdate:modelValue":o[5]||(o[5]=l=>e.form.jenis_kelamin=l),filled:"",class:"tw-col-span-2",label:"Gender",options:["Laki-Laki","Perempuan"],rules:[l=>!!l||"This field is required"]},null,8,["modelValue","rules"]),a(r,{modelValue:e.form.phone_number,"onUpdate:modelValue":o[6]||(o[6]=l=>e.form.phone_number=l),filled:"",class:"tw-col-span-2",label:"No Telp",mask:"###################",rules:[l=>!!l||"This field is required"]},null,8,["modelValue","rules"]),e.is_edit?(d(),u(r,{key:1,modelValue:e.form.password,"onUpdate:modelValue":o[8]||(o[8]=l=>e.form.password=l),type:"password",filled:"",class:"tw-col-span-3",label:"Password"},null,8,["modelValue"])):(d(),u(r,{key:0,modelValue:e.form.password,"onUpdate:modelValue":o[7]||(o[7]=l=>e.form.password=l),type:"password",filled:"",class:"tw-col-span-3",label:"Password",rules:[l=>!!l||"This field is required"]},null,8,["modelValue","rules"])),a(r,{modelValue:e.form.confirm_password,"onUpdate:modelValue":o[9]||(o[9]=l=>e.form.confirm_password=l),disable:e.form.password==null,type:"password",filled:"",class:"tw-col-span-3",label:"Confirm Password",rules:[l=>l===e.form.password||"Confirm password tidak sama"]},null,8,["modelValue","disable","rules"])]),_:1}),a(v,{align:"right"},{default:s(()=>[a(t,{label:"Cancel","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),a(t,{label:"Submit",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a(k,{modelValue:e.confirm,"onUpdate:modelValue":o[11]||(o[11]=l=>e.confirm=l)},{default:s(()=>[a(D,null,{default:s(()=>[a(c,null,{default:s(()=>[g("div",O,[a(N,{iconName:"Warning2",class:"tw-mr-2",size:22}),m(" Confirmation ")])]),_:1}),a(c,{class:"q-pt-none"},{default:s(()=>[m(" Are you sure want to delete this data? ")]),_:1}),a(v,{align:"right"},{default:s(()=>[f(a(t,{flat:"",label:"Cancel","no-caps":""},null,512),[[U]]),a(t,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var de=$(F,[["render",X]]);export{de as default};
