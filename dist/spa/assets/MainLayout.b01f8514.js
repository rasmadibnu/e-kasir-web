import{c as A,a as f,h as q,e as ie,r as _,i as Xe,o as Y,f as G,n as Te,g as oe,j as U,l as Se,k as $e,m as Q,w as S,p as gt,q as le,s as pt,t as X,u as yt,v as ee,x as me,y as Qe,z as he,A as Le,B as ge,C as bt,D as qe,E as Me,F as Ye,G as wt,H as kt,I as Ct,J as St,K as pe,L as te,M as Lt,N as qt,O as Ge,_ as Je,P as ne,Q as D,R as W,S as w,T as y,U as _t,V as O,W as Ze,X as ye,Y as be,Z as we,$ as Ve,a0 as Ae,a1 as He}from"./index.99d886ce.js";import{c as zt,u as xt,a as Tt,b as $t,d as Bt,e as Pt,f as ae,g as Et,Q as I,h as _e,i as ze,j as Ot,k as Dt,l as Ne,m as Qt,n as Mt,C as Re}from"./ClosePopup.a7d17f40.js";import{u as Vt,a as At,_ as et,Q as Ht,b as Fe}from"./VxIcon.6dd19997.js";import{u as Nt}from"./auth.cc5cc00c.js";var Rt=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const i=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:i.value},ie(n.default))}}),Ft=A({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const i=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:i.value,role:"toolbar"},ie(n.default))}});function Wt(){const e=_(!Xe.value);return e.value===!1&&Y(()=>{e.value=!0}),e}const tt=typeof ResizeObserver!="undefined",We=tt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var xe=A({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let i=null,u,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),u){const{offsetWidth:c,offsetHeight:l}=u;(c!==t.width||l!==t.height)&&(t={width:c,height:l},n("resize",t))}}const{proxy:v}=U();if(tt===!0){let c;const l=r=>{u=v.$el.parentNode,u?(c=new ResizeObserver(a),c.observe(u),s()):r!==!0&&oe(()=>{l(!0)})};return Y(()=>{l()}),G(()=>{i!==null&&clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():u&&c.unobserve(u))}),Te}else{let r=function(){i!==null&&(clearTimeout(i),i=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",a,Se.passive),l=void 0)},C=function(){r(),u&&u.contentDocument&&(l=u.contentDocument.defaultView,l.addEventListener("resize",a,Se.passive),s())};const c=Wt();let l;return Y(()=>{oe(()=>{u=v.$el,u&&C()})}),G(r),v.trigger=a,()=>{if(c.value===!0)return q("object",{style:We.style,tabindex:-1,type:"text/html",data:We.url,"aria-hidden":"true",onLoad:C})}}}}),It=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:i}){const{proxy:{$q:u}}=U(),t=$e(le,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const a=_(parseInt(e.heightHint,10)),s=_(!0),v=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||u.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?a.value:0;const d=a.value-t.scroll.value.position;return d>0?d:0}),l=f(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),r=f(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),C=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=f(()=>{const d=t.rows.value.top,x={};return d[0]==="l"&&t.left.space===!0&&(x[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(x[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),x});function m(d,x){t.update("header",d,x)}function h(d,x){d.value!==x&&(d.value=x)}function B({height:d}){h(a,d),m("size",d)}function z(d){r.value===!0&&h(s,!0),i("focusin",d)}S(()=>e.modelValue,d=>{m("space",d),h(s,!0),t.animate()}),S(c,d=>{m("offset",d)}),S(()=>e.reveal,d=>{d===!1&&h(s,e.modelValue)}),S(s,d=>{t.animate(),i("reveal",d)}),S(t.scroll,d=>{e.reveal===!0&&h(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&m("size",a.value),m("space",e.modelValue),m("offset",c.value),G(()=>{t.instances.header===b&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const d=gt(n.default,[]);return e.elevated===!0&&d.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(q(xe,{debounce:0,onResize:B})),q("header",{class:C.value,style:k.value,onFocusin:z},d)}}});const Be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ut=Object.keys(Be);Be.all=!0;function Ie(e){const n={};for(const i of Ut)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?Be:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const jt=["INPUT","TEXTAREA"];function Ue(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&jt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function ke(e,n,i){const u=Le(e);let t,a=u.left-n.event.x,s=u.top-n.event.y,v=Math.abs(a),c=Math.abs(s);const l=n.direction;l.horizontal===!0&&l.vertical!==!0?t=a<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?t=s<0?"up":"down":l.up===!0&&s<0?(t="up",v>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.down===!0&&s>0?(t="down",v>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.left===!0&&a<0?(t="left",v<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down"))):l.right===!0&&a>0&&(t="right",v<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,r=!0,t==="left"||t==="right"?(u.left-=a,v=0,a=0):(u.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:u,direction:t,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:v,y:c},offset:{x:a,y:s},delta:{x:u.left-n.event.lastX,y:u.top-n.event.lastY}}}}let Kt=0;var Ce=pt({name:"touch-pan",beforeMount(e,{value:n,modifiers:i}){if(i.mouse!==!0&&X.has.touch!==!0)return;function u(a,s){i.mouse===!0&&s===!0?bt(a):(i.stop===!0&&he(a),i.prevent===!0&&Qe(a))}const t={uid:"qvtp_"+Kt++,handler:n,modifiers:i,direction:Ie(i),noop:Te,mouseStart(a){Ue(a,t)&&yt(a)&&(ee(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ue(a,t)){const s=a.target;ee(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(X.is.firefox===!0&&me(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const l=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Qe(l),a.cancelBubble===!0&&he(l),Object.assign(l,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:l}}he(a)}const{left:v,top:c}=Le(a);t.event={x:v,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(a){if(t.event===void 0)return;const s=Le(a),v=s.left-t.event.x,c=s.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=a;const l=t.event.mouse===!0,r=()=>{u(a,l);let m;i.preserveCursor!==!0&&i.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),zt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),l===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{B(),h()},50):B()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:m,synthetic:h}=ke(a,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||l===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(a);return}const C=Math.abs(v),k=Math.abs(c);C!==k&&(t.direction.horizontal===!0&&C>k||t.direction.vertical===!0&&C<k||t.direction.up===!0&&C<k&&c<0||t.direction.down===!0&&C<k&&c>0||t.direction.left===!0&&C>k&&v<0||t.direction.right===!0&&C>k&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ge(t,"temp"),X.is.firefox===!0&&me(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ke(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=ke(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";ee(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}X.has.touch===!0&&ee(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=Ie(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ge(n,"main"),ge(n,"temp"),X.is.firefox===!0&&me(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const je=150;var Xt=A({name:"QDrawer",inheritAttrs:!1,props:{...xt,...Vt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Tt,"onLayout","miniState"],setup(e,{slots:n,emit:i,attrs:u}){const t=U(),{proxy:{$q:a}}=t,s=At(e,a),{preventBodyScroll:v}=Et(),{registerTimeout:c,removeTimeout:l}=$t(),r=$e(le,Q);if(r===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let C,k=null,m;const h=_(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),B=f(()=>e.mini===!0&&h.value!==!0),z=f(()=>B.value===!0?e.miniWidth:e.width),b=_(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),d=f(()=>e.persistent!==!0&&(h.value===!0||at.value===!0));function x(o,g){if(H(),o!==!1&&r.animate(),P(0),h.value===!0){const T=r.instances[J.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),M(1),r.isContainer.value!==!0&&v(!0)}else M(0),o!==!1&&de(!1);c(()=>{o!==!1&&de(!0),g!==!0&&i("show",o)},je)}function p(o,g){j(),o!==!1&&r.animate(),M(0),P(R.value*z.value),fe(),g!==!0?c(()=>{i("hide",o)},je):l()}const{show:L,hide:$}=Bt({showing:b,hideOnRouteChange:d,handleShow:x,handleHide:p}),{addToHistory:H,removeFromHistory:j}=Pt(b,$,d),N={belowBreakpoint:h,hide:$},E=f(()=>e.side==="right"),R=f(()=>(a.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),Pe=_(0),F=_(!1),re=_(!1),Ee=_(z.value*R.value),J=f(()=>E.value===!0?"left":"right"),ue=f(()=>b.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),se=f(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(E.value?"R":"L")>-1||a.platform.is.ios===!0&&r.isContainer.value===!0),K=f(()=>e.overlay===!1&&b.value===!0&&h.value===!1),at=f(()=>e.overlay===!0&&b.value===!0&&h.value===!1),nt=f(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&F.value===!1?" hidden":"")),ot=f(()=>({backgroundColor:`rgba(0,0,0,${Pe.value*.4})`})),Oe=f(()=>E.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),it=f(()=>E.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),lt=f(()=>{const o={};return r.header.space===!0&&Oe.value===!1&&(se.value===!0?o.top=`${r.header.offset}px`:r.header.space===!0&&(o.top=`${r.header.size}px`)),r.footer.space===!0&&it.value===!1&&(se.value===!0?o.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(o.bottom=`${r.footer.size}px`)),o}),rt=f(()=>{const o={width:`${z.value}px`,transform:`translateX(${Ee.value}px)`};return h.value===!0?o:Object.assign(o,lt.value)}),ut=f(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),st=f(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(se.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),ct=f(()=>{const o=a.lang.rtl===!0?e.side:J.value;return[[Ce,mt,void 0,{[o]:!0,mouse:!0}]]}),dt=f(()=>{const o=a.lang.rtl===!0?J.value:e.side;return[[Ce,De,void 0,{[o]:!0,mouse:!0}]]}),ft=f(()=>{const o=a.lang.rtl===!0?J.value:e.side;return[[Ce,De,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){ht(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}S(h,o=>{o===!0?(C=b.value,b.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(b.value===!0?(P(0),M(0),fe()):L(!1))}),S(()=>e.side,(o,g)=>{r.instances[g]===N&&(r.instances[g]=void 0,r[g].space=!1,r[g].offset=0),r.instances[o]=N,r[o].size=z.value,r[o].space=K.value,r[o].offset=ue.value}),S(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),S(()=>e.behavior+e.breakpoint,ce),S(r.isContainer,o=>{b.value===!0&&v(o!==!0),o===!0&&ce()}),S(r.scrollbarWidth,()=>{P(b.value===!0?0:void 0)}),S(ue,o=>{V("offset",o)}),S(K,o=>{i("onLayout",o),V("space",o)}),S(E,()=>{P()}),S(z,o=>{P(),ve(e.miniToOverlay,o)}),S(()=>e.miniToOverlay,o=>{ve(o,z.value)}),S(()=>a.lang.rtl,()=>{P()}),S(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(vt(),r.animate())}),S(B,o=>{i("miniState",o)});function P(o){o===void 0?oe(()=>{o=b.value===!0?0:z.value,P(R.value*o)}):(r.isContainer.value===!0&&E.value===!0&&(h.value===!0||Math.abs(o)===z.value)&&(o+=R.value*r.scrollbarWidth.value),Ee.value=o)}function M(o){Pe.value=o}function de(o){const g=o===!0?"remove":r.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function vt(){k!==null&&clearTimeout(k),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,k=setTimeout(()=>{k=null,re.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function mt(o){if(b.value!==!1)return;const g=z.value,T=ae(o.distance.x,0,g);if(o.isFinal===!0){T>=Math.min(75,g)===!0?L():(r.animate(),M(0),P(R.value*g)),F.value=!1;return}P((a.lang.rtl===!0?E.value!==!0:E.value)?Math.max(g-T,0):Math.min(0,T-g)),M(ae(T/g,0,1)),o.isFirst===!0&&(F.value=!0)}function De(o){if(b.value!==!0)return;const g=z.value,T=o.direction===e.side,Z=(a.lang.rtl===!0?T!==!0:T)?ae(o.distance.x,0,g):0;if(o.isFinal===!0){Math.abs(Z)<Math.min(75,g)===!0?(r.animate(),M(1),P(0)):$(),F.value=!1;return}P(R.value*Z),M(ae(1-Z/g,0,1)),o.isFirst===!0&&(F.value=!0)}function fe(){v(!1),de(!0)}function V(o,g){r.update(e.side,o,g)}function ht(o,g){o.value!==g&&(o.value=g)}function ve(o,g){V("size",o===!0?e.miniWidth:g)}return r.instances[e.side]=N,ve(e.miniToOverlay,z.value),V("space",K.value),V("offset",ue.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),Y(()=>{i("onLayout",K.value),i("miniState",B.value),C=e.showIfAbove===!0;const o=()=>{(b.value===!0?x:p)(!1,!0)};if(r.totalWidth.value!==0){oe(o);return}m=S(r.totalWidth,()=>{m(),m=void 0,b.value===!1&&e.showIfAbove===!0&&h.value===!1?L(!1):o()})}),G(()=>{m!==void 0&&m(),k!==null&&(clearTimeout(k),k=null),b.value===!0&&fe(),r.instances[e.side]===N&&(r.instances[e.side]=void 0,V("size",0),V("offset",0),V("space",!1))}),()=>{const o=[];h.value===!0&&(e.noSwipeOpen===!1&&o.push(qe(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ct.value)),o.push(Me("div",{ref:"backdrop",class:nt.value,style:ot.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>ft.value)));const g=B.value===!0&&n.mini!==void 0,T=[q("div",{...u,key:""+g,class:[ut.value,u.class]},g===!0?n.mini():ie(n.default))];return e.elevated===!0&&b.value===!0&&T.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Me("aside",{ref:"content",class:st.value,style:rt.value},T,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>dt.value)),q("div",{class:"q-drawer-container"},o)}}}),Yt=A({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:i}}=U(),u=$e(le,Q);if(u===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;Ye(wt,!0);const t=f(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>q("div",{class:"q-page-container",style:t.value},ie(n.default))}});const{passive:Ke}=Se,Gt=["both","horizontal","vertical"];var Jt=A({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Gt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;S(()=>e.scrollTarget,()=>{c(),v()});function s(){u!==null&&u();const C=Math.max(0,Ct(t)),k=St(t),m={top:C-i.position.top,left:k-i.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";i.position={top:C,left:k},i.directionChanged=i.direction!==h,i.delta=m,i.directionChanged===!0&&(i.direction=h,i.inflectionPoint=i.position),n("scroll",{...i})}function v(){t=kt(a,e.scrollTarget),t.addEventListener("scroll",l,Ke),l(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",l,Ke),t=void 0)}function l(C){if(C===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[k,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{m(k),u=null}}}const{proxy:r}=U();return S(()=>r.$q.lang.rtl,s),Y(()=>{a=r.$el.parentNode,v()}),G(()=>{u!==null&&u(),c()}),Object.assign(r,{trigger:l,getPosition:()=>i}),Te}}),Zt=A({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:i}){const{proxy:{$q:u}}=U(),t=_(null),a=_(u.screen.height),s=_(e.container===!0?0:u.screen.width),v=_({position:0,direction:"down",inflectionPoint:0}),c=_(0),l=_(Xe.value===!0?0:pe()),r=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=f(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),k=f(()=>l.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),m=f(()=>l.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function h(p){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};v.value=L,e.onScroll!==void 0&&i("scroll",L)}}function B(p){const{height:L,width:$}=p;let H=!1;a.value!==L&&(H=!0,a.value=L,e.onScrollHeight!==void 0&&i("scrollHeight",L),b()),s.value!==$&&(H=!0,s.value=$),H===!0&&e.onResize!==void 0&&i("resize",p)}function z({height:p}){c.value!==p&&(c.value=p,b())}function b(){if(e.container===!0){const p=a.value>c.value?pe():0;l.value!==p&&(l.value=p)}}let d=null;const x={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:l,totalWidth:f(()=>s.value+l.value),rows:f(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:te({size:0,offset:0,space:!1}),right:te({size:300,offset:0,space:!1}),footer:te({size:0,offset:0,space:!1}),left:te({size:300,offset:0,space:!1}),scroll:v,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,L,$){x[p][L]=$}};if(Ye(le,x),pe()>0){let $=function(){p=null,L.classList.remove("hide-scrollbar")},H=function(){if(p===null){if(L.scrollHeight>u.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout($,300)},j=function(N){p!==null&&N==="remove"&&(clearTimeout(p),$()),window[`${N}EventListener`]("resize",H)},p=null;const L=document.body;S(()=>e.container!==!0?"add":"remove",j),e.container!==!0&&j("add"),Lt(()=>{j("remove")})}return()=>{const p=qt(n.default,[q(Jt,{onScroll:h}),q(xe,{onResize:B})]),L=q("div",{class:r.value,style:C.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:t},[q(xe,{onResize:z}),q("div",{class:"absolute-full",style:k.value},[q("div",{class:"scroll",style:m.value},[L])])]):L}}});const ea=Ge({components:{VxIcon:et},name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function ta(e,n,i,u,t,a){const s=ne("vx-icon");return D(),W(ze,{clickable:"",to:{name:e.link}},{default:w(()=>[e.icon?(D(),W(I,{key:0,avatar:""},{default:w(()=>[y(s,{iconName:e.icon,size:20},null,8,["iconName"])]),_:1})):_t("",!0),y(I,null,{default:w(()=>[y(_e,null,{default:w(()=>[O(Ze(e.title),1)]),_:1})]),_:1})]),_:1},8,["to"])}var aa=Je(ea,[["render",ta]]);const na=[{title:"Dashboard",icon:"Chart",link:"Home"},{title:"Transaksi",icon:"Receipt1",link:"Transaksi"},{title:"Stok",icon:"BoxAdd",link:"Stok"},{title:"Kurir",icon:"Car",link:"Kurir"},{title:"Laporan",icon:"DocumentText",link:"Laporan"}],oa=[{title:"Kategori Produk",icon:"Category",link:"Kategori"},{title:"Produk",icon:"Box",link:"Produk"},{title:"Supplier",icon:"Building",link:"Supplier"},{title:"User",icon:"Profile2User",link:"User"}],ia=Ge({name:"MainLayout",components:{EssentialLink:aa,VxIcon:et},setup(){const e=Nt(),n=_(!1);return{auth:e,essentialLinks:na,essentialLinks2:oa,leftDrawerOpen:n,alert:_(!1),toggleLeftDrawer(){n.value=!n.value}}},mounted(){},methods:{logout(){sessionStorage.removeItem("access_token"),this.$router.push("/login")}}}),la={class:"text-h6 text-negative tw-flex tw-items-center"};function ra(e,n,i,u,t,a){const s=ne("VxIcon"),v=ne("EssentialLink"),c=ne("router-view");return D(),ye(be,null,[y(Zt,{view:"lHh Lpr lFf",class:"tw-bg-gray-100 tw-font-['Poppins']"},{default:w(()=>[y(It,{class:"bg-white text-primary"},{default:w(()=>[y(Ft,null,{default:w(()=>[y(we,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),y(Rt,{class:"tw-font-medium"},{default:w(()=>[O(" E-Kasir ")]),_:1}),Ve("div",null,[y(we,{flat:"","no-caps":""},{default:w(()=>[O(Ze(e.auth.user.name)+" ",1),y(s,{class:"tw-ml-2",size:18,iconName:"ArrowDown2"}),y(Dt,{class:"tw-shadow-none tw-border"},{default:w(()=>[y(Ne,{dense:"",style:{"min-width":"100px"}},{default:w(()=>[qe((D(),W(ze,{clickable:""},{default:w(()=>[y(I,null,{default:w(()=>[y(s,{size:18,iconName:"User"})]),_:1}),y(I,{class:"tw-mr-4"},{default:w(()=>[O("Profile")]),_:1})]),_:1})),[[Re]]),y(Qt),qe((D(),W(ze,{clickable:"",class:"text-negative",onClick:n[0]||(n[0]=l=>e.alert=!0)},{default:w(()=>[y(I,null,{default:w(()=>[y(s,{size:18,iconName:"Logout"})]),_:1}),y(I,{class:"tw-mr-4"},{default:w(()=>[O("Logout")]),_:1})]),_:1})),[[Re]])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),y(Xt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[1]||(n[1]=l=>e.leftDrawerOpen=l),"show-if-above":""},{default:w(()=>[y(Ne,null,{default:w(()=>[y(_e,{header:""},{default:w(()=>[O(" Menu ")]),_:1}),(D(!0),ye(be,null,Ae(e.essentialLinks,l=>(D(),W(v,He({key:l.title},l),null,16))),128)),y(_e,{header:""},{default:w(()=>[O(" Master Data ")]),_:1}),(D(!0),ye(be,null,Ae(e.essentialLinks2,l=>(D(),W(v,He({key:l.title},l),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),y(Yt,null,{default:w(()=>[y(c,{user:e.auth.user},null,8,["user"])]),_:1})]),_:1}),y(Ot,{modelValue:e.alert,"onUpdate:modelValue":n[2]||(n[2]=l=>e.alert=l)},{default:w(()=>[y(Ht,null,{default:w(()=>[y(Fe,null,{default:w(()=>[Ve("div",la,[y(s,{iconName:"Logout",class:"tw-mr-2",size:22}),O(" Logout ")])]),_:1}),y(Fe,{class:"q-pt-none"},{default:w(()=>[O(" Are you sure want to logout this time? ")]),_:1}),y(Mt,{align:"right"},{default:w(()=>[y(we,{flat:"",label:"Yes","no-caps":"",color:"negative",onClick:e.logout},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var va=Je(ia,[["render",ra]]);export{va as default};
