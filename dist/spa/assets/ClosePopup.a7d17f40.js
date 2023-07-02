import{c as A,a as b,h as p,e as N,a2 as nt,a3 as lt,r as _,a4 as ue,C as Le,p as it,j as M,a5 as ot,y as we,g as le,v as pe,w as $,o as Ae,f as Q,B as at,l as be,a6 as ut,a7 as ne,M as st,a8 as rt,a9 as ct,aa as dt,ab as ft,ac as We,ad as De,t as ke,K as vt,A as mt,H as ht,ae as ye,af as ze,ag as Ee,ah as gt,ai as bt,aj as yt,s as xt}from"./index.99d886ce.js";import{u as se,a as re,r as Se,c as qt,d as Re}from"./VxIcon.6dd19997.js";var Kt=A({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:n.value},N(t.default))}}),Ot=A({name:"QItem",props:{...se,...nt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=M(),i=re(e,l),{hasLink:c,linkAttrs:o,linkClass:u,linkTag:r,navigateOnClick:d}=lt(),s=_(null),y=_(null),x=b(()=>e.clickable===!0||c.value===!0||e.tag==="label"),a=b(()=>e.disable!==!0&&x.value===!0),m=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=b(()=>{if(e.insetLevel===void 0)return null;const f=l.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function S(f){a.value===!0&&(y.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===s.value?y.value.focus():document.activeElement===y.value&&s.value.focus()),d(f))}function B(f){if(a.value===!0&&ue(f,13)===!0){Le(f),f.qKeyEvent=!0;const E=new MouseEvent("click",f);E.qKeyEvent=!0,s.value.dispatchEvent(E)}n("keyup",f)}function h(){const f=it(t.default,[]);return a.value===!0&&f.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:y})),f}return()=>{const f={ref:s,class:m.value,style:C.value,role:"listitem",onClick:S,onKeyup:B};return a.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,o.value)):x.value===!0&&(f["aria-disabled"]="true"),p(r.value,f,h())}}});const kt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},he={xs:2,sm:4,md:8,lg:16,xl:24};var Vt=A({name:"QSeparator",props:{...se,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=M(),n=re(e,t.proxy.$q),l=b(()=>e.vertical===!0?"vertical":"horizontal"),i=b(()=>` q-separator--${l.value}`),c=b(()=>e.inset!==!1?`${i.value}-${kt[e.inset]}`:""),o=b(()=>`q-separator${i.value}${c.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),u=b(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const d=e.spaced===!0?`${he.md}px`:e.spaced in he?`${he[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${s[0]}`]=r[`margin${s[1]}`]=d}return r});return()=>p("hr",{class:o.value,style:u.value,"aria-orientation":l.value})}}),It=A({name:"QList",props:{...se,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=M(),l=re(e,n.proxy.$q),i=b(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>p(e.tag,{class:i.value},N(t.default))}});function wt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ot.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const pt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Et({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:i,emit:c}=M(),o=_(null);let u=null;function r(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ue(a,13)===!0&&d.toggle(a)},contextClick(a){i.hide(a),we(a),le(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:we,mobileTouch(a){if(d.mobileCleanup(a),r(a)!==!0)return;i.hide(a),o.value.classList.add("non-selectable");const m=a.target;pe(d,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&wt()}}),n=function(a=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let m;a===!0?i.$q.platform.is.mobile===!0?m=[[o.value,"touchstart","mobileTouch","passive"]]:m=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:m=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],pe(d,"anchor",m)});function s(){at(d,"anchor")}function y(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function x(){if(l.target===!1||l.target===""||i.$el.parentNode===null)o.value=null;else if(l.target===!0)y(i.$el.parentNode);else{let a=l.target;if(typeof l.target=="string")try{a=document.querySelector(l.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,n()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return $(()=>l.contextMenu,a=>{o.value!==null&&(s(),n(a))}),$(()=>l.target,()=>{o.value!==null&&s(),x()}),$(()=>l.noParentEvent,a=>{o.value!==null&&(a===!0?s():n())}),Ae(()=>{x(),t!==!0&&l.modelValue===!0&&o.value===null&&c("update:modelValue",!1)}),Q(()=>{u!==null&&clearTimeout(u),s()}),{anchorEl:o,canShow:r,anchorEvents:d}}function St(e,t){const n=_(null);let l;function i(u,r){const d=`${r!==void 0?"add":"remove"}EventListener`,s=r!==void 0?r:l;u!==window&&u[d]("scroll",s,be.passive),window[d]("scroll",s,be.passive),l=r}function c(){n.value!==null&&(i(n.value),n.value=null)}const o=$(()=>e.noParentEvent,()=>{n.value!==null&&(c(),t())});return Q(o),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:i}}const Fe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Qe=["beforeShow","show","beforeHide","hide"];function Ke({showing:e,canShow:t,hideOnRouteChange:n,handleShow:l,handleHide:i,processOnMount:c}){const o=M(),{props:u,emit:r,proxy:d}=o;let s;function y(h){e.value===!0?m(h):x(h)}function x(h){if(u.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const f=u["onUpdate:modelValue"]!==void 0;f===!0&&(r("update:modelValue",!0),s=h,le(()=>{s===h&&(s=void 0)})),(u.modelValue===null||f===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,r("beforeShow",h),l!==void 0?l(h):r("show",h))}function m(h){if(u.disable===!0)return;const f=u["onUpdate:modelValue"]!==void 0;f===!0&&(r("update:modelValue",!1),s=h,le(()=>{s===h&&(s=void 0)})),(u.modelValue===null||f===!1)&&C(h)}function C(h){e.value!==!1&&(e.value=!1,r("beforeHide",h),i!==void 0?i(h):r("hide",h))}function S(h){u.disable===!0&&h===!0?u["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:C)(s)}$(()=>u.modelValue,S),n!==void 0&&ut(o)===!0&&$(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&m()}),c===!0&&Ae(()=>{S(u.modelValue)});const B={show:x,hide:m,toggle:y};return Object.assign(d,B),B}const I=[];function Ct(e){return I.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Oe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return ne(e)}else if(e.__qPortal===!0){const n=ne(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=ne(e)}while(e!=null)}function Bt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Oe(e,t);continue}e.hide(t)}e=ne(e)}}function Tt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ve(e,t,n,l){const i=_(!1),c=_(!1);let o=null;const u={},r=l==="dialog"&&Tt(e);function d(y){if(y===!0){Se(u),c.value=!0;return}c.value=!1,i.value===!1&&(r===!1&&o===null&&(o=dt(!1,l)),i.value=!0,I.push(e.proxy),qt(u))}function s(y){if(c.value=!1,y!==!0)return;Se(u),i.value=!1;const x=I.indexOf(e.proxy);x!==-1&&I.splice(x,1),o!==null&&(ft(o),o=null)}return st(()=>{s(!0)}),e.proxy.__qPortal=!0,rt(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:s,portalIsActive:i,portalIsAccessible:c,renderPortal:()=>r===!0?n():i.value===!0?[p(ct,{to:o},n())]:void 0}}const Ie={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function je(e,t=()=>{},n=()=>{}){return{transitionProps:b(()=>{const l=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:b(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ne(){let e;const t=M();function n(){e=void 0}return We(n),Q(n),{removeTick:n,registerTick(l){e=l,le(()=>{e===l&&(De(t)===!1&&e(),e=void 0)})}}}function Ue(){let e=null;const t=M();function n(){e!==null&&(clearTimeout(e),e=null)}return We(n),Q(n),{removeTimeout:n,registerTimeout(l,i){n(),De(t)===!1&&(e=setTimeout(l,i))}}}const z=[];let j;function _t(e){j=e.keyCode===27}function Ht(){j===!0&&(j=!1)}function $t(e){j===!0&&(j=!1,ue(e,27)===!0&&z[z.length-1](e))}function Ge(e){window[e]("keydown",_t),window[e]("blur",Ht),window[e]("keyup",$t),j=!1}function Xe(e){ke.is.desktop===!0&&(z.push(e),z.length===1&&Ge("addEventListener"))}function ie(e){const t=z.indexOf(e);t>-1&&(z.splice(t,1),z.length===0&&Ge("removeEventListener"))}const R=[];function Ye(e){R[R.length-1](e)}function Je(e){ke.is.desktop===!0&&(R.push(e),R.length===1&&document.body.addEventListener("focusin",Ye))}function xe(e){const t=R.indexOf(e);t>-1&&(R.splice(t,1),R.length===0&&document.body.removeEventListener("focusin",Ye))}const{notPassiveCapture:oe}=be,F=[];function ae(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=I.length-1;for(;n>=0;){const l=I[n].$;if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=F.length-1;l>=0;l--){const i=F[l];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Pt(e){F.push(e),F.length===1&&(document.addEventListener("mousedown",ae,oe),document.addEventListener("touchstart",ae,oe))}function Ce(e){const t=F.findIndex(n=>n===e);t>-1&&(F.splice(t,1),F.length===0&&(document.removeEventListener("mousedown",ae,oe),document.removeEventListener("touchstart",ae,oe)))}let Be,Te;function _e(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Mt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const qe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{qe[`${e}#ltr`]=e,qe[`${e}#rtl`]=e});function He(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:qe[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Lt(e,t){let{top:n,left:l,right:i,bottom:c,width:o,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],c+=t[1],i+=t[0],o+=t[0],u+=t[1]),{top:n,bottom:c,height:u,left:l,right:i,width:o,middle:l+(i-l)/2,center:n+(c-n)/2}}function At(e,t,n){let{top:l,left:i}=e.getBoundingClientRect();return l+=t.top,i+=t.left,n!==void 0&&(l+=n[1],i+=n[0]),{top:l,bottom:l+1,height:1,left:i,right:i+1,width:1,middle:i,center:l}}function Wt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function $e(e,t,n,l){return{top:e[n.vertical]-t[l.vertical],left:e[n.horizontal]-t[l.horizontal]}}function Ze(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ze(e,t+1)},10);return}const{targetEl:n,offset:l,anchorEl:i,anchorOrigin:c,selfOrigin:o,absoluteOffset:u,fit:r,cover:d,maxHeight:s,maxWidth:y}=e;if(ke.is.ios===!0&&window.visualViewport!==void 0){const L=document.body.style,{offsetLeft:w,offsetTop:T}=window.visualViewport;w!==Be&&(L.setProperty("--q-pe-left",w+"px"),Be=w),T!==Te&&(L.setProperty("--q-pe-top",T+"px"),Te=T)}const{scrollLeft:x,scrollTop:a}=n,m=u===void 0?Lt(i,d===!0?[0,0]:l):At(i,u,l);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:y||"100vw",maxHeight:s||"100vh",visibility:"visible"});const{width:C,height:S}=n.getBoundingClientRect(),{elWidth:B,elHeight:h}=r===!0||d===!0?{elWidth:Math.max(m.width,C),elHeight:d===!0?Math.max(m.height,S):S}:{elWidth:C,elHeight:S};let f={maxWidth:y,maxHeight:s};(r===!0||d===!0)&&(f.minWidth=m.width+"px",d===!0&&(f.minHeight=m.height+"px")),Object.assign(n.style,f);const E=Wt(B,h);let k=$e(m,E,c,o);if(u===void 0||l===void 0)ge(k,m,E,c,o);else{const{top:L,left:w}=k;ge(k,m,E,c,o);let T=!1;if(k.top!==L){T=!0;const H=2*l[1];m.center=m.top-=H,m.bottom-=H+2}if(k.left!==w){T=!0;const H=2*l[0];m.middle=m.left-=H,m.right-=H+2}T===!0&&(k=$e(m,E,c,o),ge(k,m,E,c,o))}f={top:k.top+"px",left:k.left+"px"},k.maxHeight!==void 0&&(f.maxHeight=k.maxHeight+"px",m.height>k.maxHeight&&(f.minHeight=f.maxHeight)),k.maxWidth!==void 0&&(f.maxWidth=k.maxWidth+"px",m.width>k.maxWidth&&(f.minWidth=f.maxWidth)),Object.assign(n.style,f),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==x&&(n.scrollLeft=x)}function ge(e,t,n,l,i){const c=n.bottom,o=n.right,u=vt(),r=window.innerHeight-u,d=document.body.clientWidth;if(e.top<0||e.top+c>r)if(i.vertical==="center")e.top=t[l.vertical]>r/2?Math.max(0,r-c):0,e.maxHeight=Math.min(c,r);else if(t[l.vertical]>r/2){const s=Math.min(r,l.vertical==="center"?t.center:l.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,s),e.top=Math.max(0,s-c)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,r-e.top);if(e.left<0||e.left+o>d)if(e.maxWidth=Math.min(o,d),i.horizontal==="middle")e.left=t[l.horizontal]>d/2?Math.max(0,d-o):0;else if(t[l.horizontal]>d/2){const s=Math.min(d,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(o,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(o,d-e.left)}var jt=A({name:"QMenu",inheritAttrs:!1,props:{...pt,...Fe,...se,...Ie,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:_e},self:{type:String,validator:_e},offset:{type:Array,validator:Mt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Qe,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){let i=null,c,o,u;const r=M(),{proxy:d}=r,{$q:s}=d,y=_(null),x=_(!1),a=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),m=re(e,s),{registerTick:C,removeTick:S}=Ne(),{registerTimeout:B}=Ue(),{transitionProps:h,transitionStyle:f}=je(e),{localScrollTarget:E,changeScrollEvent:k,unconfigureScrollTarget:L}=St(e,V),{anchorEl:w,canShow:T}=Et({showing:x}),{hide:H}=Ke({showing:x,canShow:T,handleShow:X,handleHide:fe,hideOnRouteChange:a,processOnMount:!0}),{showPortal:Y,hidePortal:W,renderPortal:ce}=Ve(r,y,ee,"menu"),U={anchorEl:w,innerRef:y,onClickOutside(v){if(e.persistent!==!0&&x.value===!0)return H(v),(v.type==="touchstart"||v.target.classList.contains("q-dialog__backdrop"))&&Le(v),!0}},J=b(()=>He(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),de=b(()=>e.cover===!0?J.value:He(e.self||"top start",s.lang.rtl)),D=b(()=>(e.square===!0?" q-menu--square":"")+(m.value===!0?" q-menu--dark q-dark":"")),G=b(()=>e.autoClose===!0?{onClick:ve}:{}),K=b(()=>x.value===!0&&e.persistent!==!0);$(K,v=>{v===!0?(Xe(q),Pt(U)):(ie(q),Ce(U))});function O(){Re(()=>{let v=y.value;v&&v.contains(document.activeElement)!==!0&&(v=v.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||v.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||v.querySelector("[autofocus], [data-autofocus]")||v,v.focus({preventScroll:!0}))})}function X(v){if(i=e.noRefocus===!1?document.activeElement:null,Je(g),Y(),V(),c=void 0,v!==void 0&&(e.touchPosition||e.contextMenu)){const me=mt(v);if(me.left!==void 0){const{top:et,left:tt}=w.value.getBoundingClientRect();c={left:me.left-tt,top:me.top-et}}}o===void 0&&(o=$(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,P)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{P(),e.noFocus!==!0&&O()}),B(()=>{s.platform.is.ios===!0&&(u=e.autoClose,y.value.click()),P(),Y(!0),n("show",v)},e.transitionDuration)}function fe(v){S(),W(),Z(!0),i!==null&&(v===void 0||v.qClickOutside!==!0)&&(((v&&v.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),B(()=>{W(!0),n("hide",v)},e.transitionDuration)}function Z(v){c=void 0,o!==void 0&&(o(),o=void 0),(v===!0||x.value===!0)&&(xe(g),L(),Ce(U),ie(q)),v!==!0&&(i=null)}function V(){(w.value!==null||e.scrollTarget!==void 0)&&(E.value=ht(w.value,e.scrollTarget),k(E.value,P))}function ve(v){u!==!0?(Oe(d,v),n("click",v)):u=!1}function g(v){K.value===!0&&e.noFocus!==!0&&ze(y.value,v.target)!==!0&&O()}function q(v){n("escapeKey"),H(v)}function P(){Ze({targetEl:y.value,offset:e.offset,anchorEl:w.value,anchorOrigin:J.value,selfOrigin:de.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(){return p(ye,h.value,()=>x.value===!0?p("div",{role:"menu",...l,ref:y,tabindex:-1,class:["q-menu q-position-engine scroll"+D.value,l.class],style:[l.style,f.value],...G.value},N(t.default)):null)}return Q(Z),Object.assign(d,{focus:O,updatePosition:P}),ce}}),Nt=A({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=b(()=>parseInt(e.lines,10)),l=b(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=b(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>p("div",{style:i.value,class:l.value},N(t.default))}});function Dt(e,t,n){let l;function i(){l!==void 0&&(Ee.remove(l),l=void 0)}return Q(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>n.value===!0,handler:t},Ee.add(l)}}}function zt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,gt(t))}}}function Ut(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function Gt(e,t,n){if(n<=t)return t;const l=n-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}var Xt=A({name:"QCardActions",props:{...bt,vertical:Boolean},setup(e,{slots:t}){const n=yt(e),l=b(()=>`q-card__actions ${n.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>p("div",{class:l.value},N(t.default))}});let te=0;const Rt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Pe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Yt=A({name:"QDialog",inheritAttrs:!1,props:{...Fe,...Ie,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Qe,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){const i=M(),c=_(null),o=_(!1),u=_(!1);let r=null,d=null,s,y;const x=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:a}=zt(),{registerTimeout:m}=Ue(),{registerTick:C,removeTick:S}=Ne(),{transitionProps:B,transitionStyle:h}=je(e,()=>Pe[e.position][0],()=>Pe[e.position][1]),{showPortal:f,hidePortal:E,portalIsAccessible:k,renderPortal:L}=Ve(i,c,ve,"dialog"),{hide:w}=Ke({showing:o,hideOnRouteChange:x,handleShow:J,handleHide:de,processOnMount:!0}),{addToHistory:T,removeFromHistory:H}=Dt(o,w,x),Y=b(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Rt[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),W=b(()=>o.value===!0&&e.seamless!==!0),ce=b(()=>e.autoClose===!0?{onClick:fe}:{}),U=b(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${W.value===!0?"modal":"seamless"}`,l.class]);$(()=>e.maximized,g=>{o.value===!0&&X(g)}),$(W,g=>{a(g),g===!0?(Je(V),Xe(K)):(xe(V),ie(K))});function J(g){T(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,X(e.maximized),f(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),C(D)):S(),m(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:q,bottom:P}=document.activeElement.getBoundingClientRect(),{innerHeight:ee}=window,v=window.visualViewport!==void 0?window.visualViewport.height:ee;q>0&&P>v/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-v,P>=ee?1/0:Math.ceil(document.scrollingElement.scrollTop+P-v/2))),document.activeElement.scrollIntoView()}y=!0,c.value.click(),y=!1}f(!0),u.value=!1,n("show",g)},e.transitionDuration)}function de(g){S(),H(),O(!0),u.value=!0,E(),d!==null&&(((g&&g.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),m(()=>{E(!0),u.value=!1,n("hide",g)},e.transitionDuration)}function D(g){Re(()=>{let q=c.value;q===null||q.contains(document.activeElement)===!0||(q=(g!==""?q.querySelector(g):null)||q.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||q.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||q.querySelector("[autofocus], [data-autofocus]")||q,q.focus({preventScroll:!0}))})}function G(g){g&&typeof g.focus=="function"?g.focus({preventScroll:!0}):D(),n("shake");const q=c.value;q!==null&&(q.classList.remove("q-animate--scale"),q.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,c.value!==null&&(q.classList.remove("q-animate--scale"),D())},170))}function K(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&G():(n("escapeKey"),w()))}function O(g){r!==null&&(clearTimeout(r),r=null),(g===!0||o.value===!0)&&(X(!1),e.seamless!==!0&&(a(!1),xe(V),ie(K))),g!==!0&&(d=null)}function X(g){g===!0?s!==!0&&(te<1&&document.body.classList.add("q-body--dialog"),te++,s=!0):s===!0&&(te<2&&document.body.classList.remove("q-body--dialog"),te--,s=!1)}function fe(g){y!==!0&&(w(g),n("click",g))}function Z(g){e.persistent!==!0&&e.noBackdropDismiss!==!0?w(g):e.noShake!==!0&&G()}function V(g){e.allowFocusOutside!==!0&&k.value===!0&&ze(c.value,g.target)!==!0&&D('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:D,shake:G,__updateRefocusTarget(g){d=g||null}}),Q(O);function ve(){return p("div",{role:"dialog","aria-modal":W.value===!0?"true":"false",...l,class:U.value},[p(ye,{name:"q-transition--fade",appear:!0},()=>W.value===!0?p("div",{class:"q-dialog__backdrop fixed-full",style:h.value,"aria-hidden":"true",tabindex:-1,onClick:Z}):null),p(ye,B.value,()=>o.value===!0?p("div",{ref:c,class:Y.value,style:h.value,tabindex:-1,...ce.value},N(t.default)):null)])}return L}});function Me(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Jt=xt({name:"close-popup",beforeMount(e,{value:t}){const n={depth:Me(t),handler(l){n.depth!==0&&setTimeout(()=>{const i=Ct(e);i!==void 0&&Bt(i,l,n.depth)})},handlerKey(l){ue(l,13)===!0&&n.handler(l)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=Me(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{Jt as C,Kt as Q,Qe as a,Ue as b,wt as c,Ke as d,Dt as e,Ut as f,zt as g,Nt as h,Ot as i,Yt as j,jt as k,It as l,Vt as m,Xt as n,Gt as o,Fe as u};
