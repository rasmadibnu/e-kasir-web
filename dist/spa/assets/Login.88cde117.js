import{Q as m}from"./QImg.43cfe3c3.js";import{_ as p,O as u,r,P as c,Q as f,X as w,$ as t,T as s,S as i,an as _,cg as g,Z as h}from"./index.1269dd09.js";import{Q as d}from"./QInput.cb57774e.js";import{Q as v}from"./QForm.fed7aa7b.js";import{Q as y,a as Q}from"./QCard.e3f529fd.js";import{_ as $}from"./VxIcon.aa3f9ac6.js";import{u as b}from"./auth.b03a7904.js";import"./use-key-composition.501918c1.js";var k="/assets/undraw_empty_cart.2259c300.svg";const V=u({components:{VsxIcon:$},setup(){return{auth:b(),is_password:r(!0),username:r(""),password:r(""),loading:r(!1)}},mounted(){sessionStorage.getItem("access_token")&&this.$router.push({name:"Home"})},methods:{login(){let e=this;e.loading=!0;let a={username:this.username,password:this.password};e.$api.post("/login",a).then(function(n){sessionStorage.setItem("access_token",n.data.data),e.auth.token=n.data.data,e.auth.user.role!="Kasir"?e.$router.push({name:"Home"}):(e.$q.notify({type:"negative",message:"User dengan role Kasir tidak memiliki akses pada web ini"}),sessionStorage.removeItem("access_token")),e.loading=!1}).catch(n=>{e.loading=!1,e.$q.notify({type:"negative",message:n.response.data.message})})}}}),x={class:"tw-grid tw-grid-cols-2 tw-h-screen tw-font-['Poppins']"},S={class:"bg-primary text-white tw-flex"},I={class:"tw-m-auto"},C=t("h1",{class:"text-center tw-text-2xl tw-font-semibold"},"E-Kasir WebApp",-1),q=t("p",{class:"text-center tw-text-lg tw-mt-4"},"Kelompok 6",-1),N={class:"tw-flex"},U={class:"tw-m-auto"},B=t("div",null,[t("div",{class:"tw-text-2xl tw-font-semibold"},"Welcome"),t("div",null,"Please login into an account")],-1);function E(e,a,n,K,P,z){const l=c("VsxIcon");return f(),w("div",x,[t("div",S,[t("div",I,[C,s(_,{size:"400px",square:""},{default:i(()=>[s(m,{src:k})]),_:1}),q])]),t("div",N,[t("div",U,[s(y,{class:"tw-w-96",flat:""},{default:i(()=>[s(Q,{class:"tw-space-y-4"},{default:i(()=>[B,s(v,{onSubmit:g(e.login,["prevent"]),class:"tw-space-y-2"},{default:i(()=>[s(d,{filled:"",label:"Username",rules:[o=>!!o||"This field is required"],modelValue:e.username,"onUpdate:modelValue":a[0]||(a[0]=o=>e.username=o)},{prepend:i(()=>[s(l,{iconName:"User",size:22})]),_:1},8,["rules","modelValue"]),s(d,{filled:"",label:"Password",type:e.is_password?"password":"texe",rules:[o=>!!o||"This field is required"],modelValue:e.password,"onUpdate:modelValue":a[2]||(a[2]=o=>e.password=o)},{prepend:i(()=>[s(l,{class:"tw-cursor-pointer",onClick:a[1]||(a[1]=o=>e.is_password=!e.is_password),iconName:e.is_password?"Eye":"EyeSlash",size:22},null,8,["iconName"])]),_:1},8,["type","rules","modelValue"]),s(h,{type:"submit",unelevated:"",color:"primary",label:"Login",class:"tw-w-full",loading:e.loading},null,8,["loading"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])])}var X=p(V,[["render",E]]);export{X as default};
