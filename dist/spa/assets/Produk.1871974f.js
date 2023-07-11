import{r as g,a as v,j as me,z as ve,C as ce,t as be,h as z,c as ke,a8 as ye,y as Ve,_ as we,O as Ce,P as G,Q as V,X as Se,T as a,S as n,Y as Fe,$ as I,Z as D,V as Q,W as J,D as x,R as S,ap as De,av as ee,U as ze,aq as le}from"./index.6a46384e.js";import{u as Ne,e as Qe,b as Pe,d as $e,f as _e,j as Ue,c as Ie,g as te,Q as U,a as Te}from"./QForm.fef47790.js";import{d as je,Q as qe,h as Ae,a as Oe,b as ae,c as xe,e as ie}from"./moment.7856589a.js";import{p as Ee,j as se,k as Re,l as Be,Q as E,i as ne,m as Ye,n as oe,C as re}from"./ClosePopup.ceb416f6.js";import{_ as Me,Q as ue,b as R}from"./VxIcon.9b935379.js";import{Q as de}from"./QImg.2484ee0e.js";function P(e,l,f,F){const d=[];return e.forEach(c=>{F(c)===!0?d.push(c):l.push({failedPropValidation:f,file:c})}),d}function B(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),ce(e)}const Le={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ke=["rejected"];function We({editable:e,dnd:l,getFileInput:f,addFilesToQueue:F}){const{props:d,emit:c,proxy:p}=me(),w=g(null),t=v(()=>d.accept!==void 0?d.accept.split(",").map(i=>(i=i.trim(),i==="*"?"*/":(i.endsWith("/*")&&(i=i.slice(0,i.length-1)),i.toUpperCase()))):null),N=v(()=>parseInt(d.maxFiles,10)),T=v(()=>parseInt(d.maxTotalSize,10));function j(i){if(e.value)if(i!==Object(i)&&(i={target:null}),i.target!==null&&i.target.matches('input[type="file"]')===!0)i.clientX===0&&i.clientY===0&&ve(i);else{const k=f();k&&k!==i.target&&k.click(i)}}function q(i){e.value&&i&&F(null,i)}function Y(i,k,$,_){let o=Array.from(k||i.target.files);const b=[],C=()=>{b.length!==0&&c("rejected",b)};if(d.accept!==void 0&&t.value.indexOf("*/")===-1&&(o=P(o,b,"accept",r=>t.value.some(m=>r.type.toUpperCase().startsWith(m)||r.name.toUpperCase().endsWith(m))),o.length===0))return C();if(d.maxFileSize!==void 0){const r=parseInt(d.maxFileSize,10);if(o=P(o,b,"max-file-size",m=>m.size<=r),o.length===0)return C()}if(d.multiple!==!0&&o.length!==0&&(o=[o[0]]),o.forEach(r=>{r.__key=r.webkitRelativePath+r.lastModified+r.name+r.size}),_===!0){const r=$.map(m=>m.__key);o=P(o,b,"duplicate",m=>r.includes(m.__key)===!1)}if(o.length===0)return C();if(d.maxTotalSize!==void 0){let r=_===!0?$.reduce((m,K)=>m+K.size,0):0;if(o=P(o,b,"max-total-size",m=>(r+=m.size,r<=T.value)),o.length===0)return C()}if(typeof d.filter=="function"){const r=d.filter(o);o=P(o,b,"filter",m=>r.includes(m))}if(d.maxFiles!==void 0){let r=_===!0?$.length:0;if(o=P(o,b,"max-files",()=>(r++,r<=N.value)),o.length===0)return C()}if(C(),o.length!==0)return o}function M(i){B(i),l.value!==!0&&(l.value=!0)}function u(i){ce(i),(i.relatedTarget!==null||be.is.safari!==!0?i.relatedTarget!==w.value:document.elementsFromPoint(i.clientX,i.clientY).includes(w.value)===!1)===!0&&(l.value=!1)}function A(i){B(i);const k=i.dataTransfer.files;k.length!==0&&F(null,k),l.value=!1}function L(i){if(l.value===!0)return z("div",{ref:w,class:`q-${i}__dnd absolute-full`,onDragenter:B,onDragover:B,onDragleave:u,onDrop:A})}return Object.assign(p,{pickFiles:j,addFiles:q}),{pickFiles:j,addFiles:q,onDragover:M,onDragleave:u,processFiles:Y,getDndNode:L,maxFilesNumber:N,maxTotalSizeNumber:T}}var fe=ke({name:"QFile",inheritAttrs:!1,props:{...Ne,...Qe,...Le,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Pe,...Ke],setup(e,{slots:l,emit:f,attrs:F}){const{proxy:d}=me(),c=$e(),p=g(null),w=g(!1),t=_e(e),{pickFiles:N,onDragover:T,onDragleave:j,processFiles:q,getDndNode:Y}=We({editable:c.editable,dnd:w,getFileInput:H,addFilesToQueue:Z}),M=Ue(e),u=v(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),A=v(()=>te(u.value)),L=v(()=>u.value.map(s=>s.name).join(", ")),i=v(()=>Ee(u.value.reduce((s,h)=>s+h.size,0))),k=v(()=>({totalSize:i.value,filesNumber:u.value.length,maxFiles:e.maxFiles})),$=v(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:t.value,...F,id:c.targetUid.value,disabled:c.editable.value!==!0})),_=v(()=>"q-file q-field--auto-height"+(w.value===!0?" q-file--dnd":"")),o=v(()=>e.multiple===!0&&e.append===!0);function b(s){const h=u.value.slice();h.splice(s,1),r(h)}function C(s){const h=u.value.indexOf(s);h>-1&&b(h)}function r(s){f("update:modelValue",e.multiple===!0?s:s[0])}function m(s){s.keyCode===13&&Ve(s)}function K(s){(s.keyCode===13||s.keyCode===32)&&N(s)}function H(){return p.value}function Z(s,h){const y=q(s,h,u.value,o.value),W=H();W!=null&&(W.value=""),y!==void 0&&((e.multiple===!0?e.modelValue&&y.every(he=>u.value.includes(he)):e.modelValue===y[0])||r(o.value===!0?u.value.concat(y):y))}function O(){return[z("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function pe(){if(l.file!==void 0)return u.value.length===0?O():u.value.map((h,y)=>l.file({index:y,file:h,ref:this}));if(l.selected!==void 0)return u.value.length===0?O():l.selected({files:u.value,ref:this});if(e.useChips===!0)return u.value.length===0?O():u.value.map((h,y)=>z(je,{key:"file-"+y,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{b(y)}},()=>z("span",{class:"ellipsis",textContent:h.name})));const s=e.displayValue!==void 0?e.displayValue:L.value;return s.length!==0?[z("div",{class:e.inputClass,style:e.inputStyle,textContent:s})]:O()}function ge(){const s={ref:p,...$.value,...M.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:Z};return e.multiple===!0&&(s.multiple=!0),z("input",s)}return Object.assign(c,{fieldClass:_,emitValue:r,hasValue:A,inputRef:p,innerValue:u,floatingLabel:v(()=>A.value===!0||te(e.displayValue)),computedCounter:v(()=>{if(e.counterLabel!==void 0)return e.counterLabel(k.value);const s=e.maxFiles;return`${u.value.length}${s!==void 0?" / "+s:""} (${i.value})`}),getControlChild:()=>Y("file"),getControl:()=>{const s={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(s,{onDragover:T,onDragleave:j,onKeydown:m,onKeyup:K}),z("div",s,[ge()].concat(pe()))}}),Object.assign(d,{removeAtIndex:b,removeFile:C,getNativeElement:()=>p.value}),ye(d,"nativeEl",()=>p.value),Ie(c)}}),Xe="/assets/undraw_images.58b3e46f.svg";const He=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"name",sortable:!0},{name:"Kategori",label:"Kategori",align:"left",field:e=>{var l;return(l=e.kategori)==null?void 0:l.name},sortable:!0},{name:"Stok",label:"Stok",align:"left",field:e=>{var l;return(l=e.stok)==null?void 0:l.stok},sortable:!0},{name:"Supplier",label:"Supplier",align:"left",field:e=>{var l;return(l=e.supplier)==null?void 0:l.name},sortable:!0},{name:"Created",label:"Created By",align:"left",field:e=>{var l;return(l=e.user_create)==null?void 0:l.name},sortable:!0},{name:"Updated",label:"Updated At",align:"left",field:e=>Ae(e.updated_at).format("YYYY-MM-DD hh:mm:ss"),sortable:!0},{name:"action",label:"Action",align:"right"}],X={name:null,deskripsi:"",kategori_id:null,supplier_id:null,harga:null,file:null,stok:null},Ze=Ce({props:["user"],components:{VxIcon:Me},setup(){return{columns:He,rows:g([]),kategori:g([]),supplier:g([]),loading:g(!1),search:g(""),is_edit:g(!1),confirm:g(!1),src:g(""),form_dialog:g(!1),id:g(""),form:g(structuredClone(X))}},mounted(){this.getData(),this.getkategori(),this.getSupplier()},methods:{getData(){this.loading=!0,this.$api.get("/produk").then(e=>{this.rows=e.data.data,this.loading=!1}).catch(e=>{console.log(e)})},getkategori(){this.$api.get("/kategori").then(e=>{this.kategori=e.data.data.map(l=>({label:l.name,value:l.id}))}).catch(e=>{console.log(e)})},getSupplier(){this.$api.get("/suppliers").then(e=>{this.supplier=e.data.data.map(l=>({label:l.name,value:l.id}))}).catch(e=>{console.log(e)})},onFilePicked(e){this.src=e?URL.createObjectURL(e):""},openDialog(e){e?(this.is_edit=!0,this.id=e.id,e.image&&(this.src=this.$urlapi+"/"+e.image),this.form={...e}):(this.src=null,this.form={...X},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...X},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0;var e=new FormData;for(const f in this.form)this.form.hasOwnProperty(f)&&e.append(f,this.form[f]);const l={headers:{"Content-Type":"multipart/form-data"}};this.is_edit?(e.append("updated_by",this.user.id),this.$api.put("/produk/"+this.id,e,l).then(f=>{this.$q.notify({message:"Produk successfully updated",color:"positive"}),this.closeDialog(),this.getData()}).catch(f=>{this.closeDialog(),console.log(f)})):(e.append("created_by",this.user.id),this.$api.post("/produk",e,l).then(f=>{this.$q.notify({message:"Produk successfully created",color:"positive"}),this.closeDialog(),this.getData()}).catch(f=>{this.closeDialog(),console.log(f)}))},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/produk/"+this.id).then(e=>{this.$q.notify({message:"Produk successfully deleted",color:"positive"}),this.getData(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),Ge=I("div",{class:"tw-text-xl tw-font-semibold"},"Produk",-1),Je={class:"tw-flex tw-justify-between tw-w-full"},el={class:"text-h6"},ll={class:"text-h6 text-negative tw-flex tw-items-center"};function tl(e,l,f,F,d,c){const p=G("vx-icon"),w=G("VxIcon");return V(),Se(Fe,null,[a(qe,{class:"tw-p-4 tw-space-y-6"},{default:n(()=>[Ge,a(Oe,{color:"primary",columns:e.columns,rows:e.rows,loading:e.loading,filter:e.search,pagination:{rowsPerPage:10},flat:""},{top:n(()=>[I("div",Je,[a(D,{outline:"","no-caps":"",color:"primary",onClick:l[0]||(l[0]=t=>e.openDialog(null))},{default:n(()=>[a(p,{iconName:"AddCircle",class:"tw-mr-2",size:20}),Q(" Create New ")]),_:1}),a(U,{dense:"",placeholder:"Search...",modelValue:e.search,"onUpdate:modelValue":l[1]||(l[1]=t=>e.search=t),filled:""},{prepend:n(()=>[a(p,{iconName:"SearchStatus",size:20})]),_:1},8,["modelValue"])])]),"body-cell-index":n(t=>[a(ae,{props:t},{default:n(()=>[Q(J(t.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":n(t=>[a(ae,{props:t},{default:n(()=>[a(D,{flat:"",dense:"",size:"sm",color:"primary"},{default:n(()=>[a(p,{iconName:"More",size:18}),a(Re,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:n(()=>[a(Be,{style:{"min-width":"100px"}},{default:n(()=>[x((V(),S(ne,{clickable:"",class:"text-primary",onClick:N=>e.openDialog(t.row)},{default:n(()=>[a(E,{avatar:""},{default:n(()=>[a(p,{iconName:"Edit",size:20})]),_:1}),a(E,null,{default:n(()=>[Q("Edit")]),_:1})]),_:2},1032,["onClick"])),[[le]]),a(Ye),x((V(),S(ne,{clickable:"",class:"text-negative",onClick:N=>e.confirmDelete(t.row.id)},{default:n(()=>[a(E,{avatar:""},{default:n(()=>[a(p,{iconName:"Trash",size:20})]),_:1}),a(E,null,{default:n(()=>[Q("Delete")]),_:1})]),_:2},1032,["onClick"])),[[le]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","loading","filter"])]),_:1}),a(se,{modelValue:e.form_dialog,"onUpdate:modelValue":l[11]||(l[11]=t=>e.form_dialog=t)},{default:n(()=>[a(ue,{style:{"min-width":"600px"}},{default:n(()=>[a(R,{class:"row items-center"},{default:n(()=>[I("div",el,J(e.is_edit?"Edit":"Create")+" Produk",1),a(xe),x((V(),S(D,{flat:"",round:"",dense:""},{default:n(()=>[a(p,{iconName:"CloseCircle",size:20})]),_:1})),[[re]])]),_:1}),a(Te,{onSubmit:De(e.submit,["prevent"])},{default:n(()=>[a(R,{class:"tw-grid tw-grid-cols-6 tw-gap-x-4 tw-gap-y-2"},{default:n(()=>[I("div",{class:"tw-col-span-6 tw-w-full tw-border tw-mb-2 tw-rounded tw-py-4 tw-cursor-pointer",onClick:l[2]||(l[2]=t=>e.$refs.file.pickFiles())},[e.src?(V(),S(de,{key:1,src:e.src,style:{"min-height":"200px"},fit:"fit"},null,8,["src"])):(V(),S(de,{key:0,src:Xe,style:{height:"200px"},fit:"contain"}))]),e.is_edit?(V(),S(fe,{key:1,filled:"",label:"Image",accept:"image/jpeg,.png",ref:"file",class:"tw-col-span-6",modelValue:e.form.file,"onUpdate:modelValue":[l[4]||(l[4]=t=>e.form.file=t),e.onFilePicked],clearable:"",hint:e.form.image.split("\\")[1]},{append:n(()=>[a(ee,{name:"attachment"})]),_:1},8,["modelValue","onUpdate:modelValue","hint"])):(V(),S(fe,{key:0,filled:"",label:"Image",accept:"image/jpeg,.png",ref:"file",class:"tw-col-span-6",modelValue:e.form.file,"onUpdate:modelValue":[l[3]||(l[3]=t=>e.form.file=t),e.onFilePicked],rules:[t=>!!t||"This field is required"],clearable:""},{append:n(()=>[a(ee,{name:"attachment"})]),_:1},8,["modelValue","rules","onUpdate:modelValue"])),a(U,{modelValue:e.form.name,"onUpdate:modelValue":l[5]||(l[5]=t=>e.form.name=t),filled:"",label:"Nama",class:"tw-col-span-3",rules:[t=>!!t||"This field is required"]},null,8,["modelValue","rules"]),a(U,{modelValue:e.form.deskripsi,"onUpdate:modelValue":l[6]||(l[6]=t=>e.form.deskripsi=t),filled:"",label:"Deskripsi",class:"tw-col-span-3"},null,8,["modelValue"]),a(ie,{options:e.kategori,"map-options":"","emit-value":"",modelValue:e.form.kategori_id,"onUpdate:modelValue":l[7]||(l[7]=t=>e.form.kategori_id=t),filled:"",label:"Kategori",rules:[t=>!!t||"This field is required"],class:"tw-col-span-3"},null,8,["options","modelValue","rules"]),a(ie,{options:e.supplier,"map-options":"","emit-value":"",modelValue:e.form.supplier_id,"onUpdate:modelValue":l[8]||(l[8]=t=>e.form.supplier_id=t),filled:"",label:"Supplier",rules:[t=>!!t||"This field is required"],class:"tw-col-span-3"},null,8,["options","modelValue","rules"]),e.is_edit?ze("",!0):(V(),S(U,{key:2,modelValue:e.form.stok,"onUpdate:modelValue":l[9]||(l[9]=t=>e.form.stok=t),filled:"",label:"Stok",mask:"#","reverse-fill-mask":"",rules:[t=>!!t||"This field is required"],class:"tw-col-span-3"},null,8,["modelValue","rules"])),a(U,{modelValue:e.form.harga,"onUpdate:modelValue":l[10]||(l[10]=t=>e.form.harga=t),filled:"",label:"Harga",prefix:"Rp.",mask:"###.###.###.###","reverse-fill-mask":"","unmasked-value":"",rules:[t=>!!t||"This field is required"],class:"tw-col-span-3"},null,8,["modelValue","rules"])]),_:1}),a(oe,{align:"right"},{default:n(()=>[a(D,{label:"Cancel","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),a(D,{label:"Submit",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a(se,{modelValue:e.confirm,"onUpdate:modelValue":l[12]||(l[12]=t=>e.confirm=t)},{default:n(()=>[a(ue,null,{default:n(()=>[a(R,null,{default:n(()=>[I("div",ll,[a(w,{iconName:"Warning2",class:"tw-mr-2",size:22}),Q(" Confirmation ")])]),_:1}),a(R,{class:"q-pt-none"},{default:n(()=>[Q(" Are you sure want to delete this data? ")]),_:1}),a(oe,{align:"right"},{default:n(()=>[x(a(D,{flat:"",label:"Cancel","no-caps":""},null,512),[[re]]),a(D,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var ul=we(Ze,[["render",tl]]);export{ul as default};