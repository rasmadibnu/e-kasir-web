import{i as we,w as D,z as se,o as ae,aq as Ce,j as X,r as j,a as y,ar as Me,a8 as ye,as as Se,y as Re,A as Y,ac as qe,at as Ae,J as Ve,h as k,t as W,au as de,ao as Fe,e as G,ae as _e,av as Ee,m as Be,c as Te,u as fe}from"./index.a450bba7.js";import{c as ke,u as $e,a as Oe,d as Ie}from"./VxIcon.c7b7c2a9.js";function Pe({validate:e,resetValidation:t,requiresQForm:u}){const i=we(Ce,!1);if(i!==!1){const{props:f,proxy:d}=X();Object.assign(d,{validate:e,resetValidation:t}),D(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),se(()=>{f.disable!==!0&&i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ce=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ve=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ge=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,oe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ce.test(e),hexaColor:e=>ve.test(e),hexOrHexaColor:e=>ge.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>ce.test(e)||ee.test(e),hexaOrRgbaColor:e=>ve.test(e)||te.test(e),anyColor:e=>ge.test(e)||ee.test(e)||te.test(e)},je=[!0,!1,"ondemand"],De={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>je.includes(e)}};function ze(e,t){const{props:u,proxy:i}=X(),f=j(!1),d=j(null),c=j(null);Pe({validate:$,resetValidation:_});let x=0,B;const R=y(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),w=y(()=>u.disable!==!0&&R.value===!0),p=y(()=>u.error===!0||f.value===!0),H=y(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);D(()=>u.modelValue,()=>{L()}),D(()=>u.reactiveRules,P=>{P===!0?B===void 0&&(B=D(()=>u.rules,()=>{L(!0)})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),D(e,P=>{P===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,w.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&I())});function _(){x++,t.value=!1,c.value=null,f.value=!1,d.value=null,I.cancel()}function $(P=u.modelValue){if(w.value!==!0)return!0;const A=++x,Q=t.value!==!0?()=>{c.value=!0}:()=>{},N=(S,C)=>{S===!0&&Q(),f.value=S,d.value=C||null,t.value=!1},z=[];for(let S=0;S<u.rules.length;S++){const C=u.rules[S];let E;if(typeof C=="function"?E=C(P,oe):typeof C=="string"&&oe[C]!==void 0&&(E=oe[C](P)),E===!1||typeof E=="string")return N(!0,E),!1;E!==!0&&E!==void 0&&z.push(E)}return z.length===0?(N(!1),!0):(t.value=!0,Promise.all(z).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return A===x&&N(!1),!0;const C=S.find(E=>E===!1||typeof E=="string");return A===x&&N(C!==void 0,C),C===void 0},S=>(A===x&&(console.error(S),N(!0)),!1)))}function L(P){w.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&P!==!0)&&I()}const I=Me($,0);return ae(()=>{B!==void 0&&B(),I.cancel()}),Object.assign(i,{resetValidation:_,validate:$}),ye(i,"hasError",()=>p.value),{isDirtyModel:c,hasRules:R,hasError:p,errorMessage:H,validate:$,resetValidation:_}}const me=/^on[A-Z]/;function Ne(e,t){const u={listeners:j({}),attributes:j({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&me.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)me.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return Se(i),i(),u}let re,ne=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const Le=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),he=4096;function Ue(){(re===void 0||ne+16>he)&&(ne=0,re=Le(he));const e=Array.prototype.slice.call(re,ne,ne+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}function ue(e){return e===void 0?`f_${Ue()}`:e}function ie(e){return e!=null&&(""+e).length!==0}const Ze={...$e,...De,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ke=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function He(){const{props:e,attrs:t,proxy:u,vnode:i}=X();return{isDark:Oe(e,u.$q),editable:y(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:j(!1),focused:j(!1),hasPopupOpen:!1,splitAttrs:Ne(t,i),targetUid:j(ue(e.for)),rootRef:j(null),targetRef:j(null),controlRef:j(null)}}function Qe(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=X(),{$q:c}=d;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>ie(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:r,onControlFocusout:a,focus:C}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:R,hasError:w,errorMessage:p,resetValidation:H}=ze(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),$=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),L=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=y(()=>`q-field row no-wrap items-start q-field--${L.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&$.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),N=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=y(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});D(()=>t.for,n=>{e.targetUid.value=ue(n)});function S(){const n=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(n===null||n.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==n&&h.focus({preventScroll:!0}))}function C(){ke(S)}function E(){Ie(S);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function r(n){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function a(n,h){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),h!==void 0&&h())})}function s(n){Re(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{H(),c.platform.is.mobile!==!0&&(B.value=!1)})}function o(){const n=[];return i.prepend!==void 0&&n.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:W},i.prepend())),n.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),w.value===!0&&t.noErrorIcon===!1&&n.push(M("error",[k(de,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(M("inner-loading-append",i.loading!==void 0?i.loading():[k(Fe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(M("inner-clearable-append",[k(de,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:W},i.append())),e.getInnerAppend!==void 0&&n.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function g(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(N.value))),A.value===!0&&n.push(k("div",{class:Q.value},G(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(G(i.default))}function v(){let n,h;w.value===!0?p.value!==null?(n=[k("div",{role:"alert"},p.value)],h=`q--slot-error-${p.value}`):(n=G(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[k("div",t.hint)],h=`q--slot-hint-${t.hint}`):(n=G(i.hint),h="q--slot-hint"));const Z=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&Z===!1&&n===void 0)return;const b=k("div",{key:h,class:"q-field__messages col"},n);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:W},[t.hideBottomSpace===!0?b:k(_e,{name:"q-transition--field-message"},()=>b),Z===!0?k("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(n,h){return h===null?null:k("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let m=!1;return qe(()=>{m=!0}),Ae(()=>{m===!0&&t.autofocus===!0&&d.focus()}),se(()=>{Ve.value===!0&&t.for===void 0&&(e.targetUid.value=ue()),t.autofocus===!0&&d.focus()}),ae(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:C,blur:E}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return k("label",{ref:e.rootRef,class:[I.value,f.class],style:f.style,...h},[i.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:W},i.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},o()),$.value===!0?v():null]),i.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:W},i.after()):null])}}const pe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},xe=Object.keys(le);xe.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const Ye=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+xe.join("")+"])|(.)","g"),be=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),Je={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function We(e,t,u,i){let f,d,c,x,B,R;const w=j(null),p=j(_());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,L),D(()=>e.mask,r=>{if(r!==void 0)I(p.value,!0);else{const a=C(p.value);L(),e.modelValue!==a&&t("update:modelValue",a)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&I(p.value,!0)}),D(()=>e.unmaskedValue,()=>{w.value===!0&&I(p.value)});function _(){if(L(),w.value===!0){const r=z(C(e.modelValue));return e.fillMask!==!1?E(r):r}return e.modelValue}function $(r){if(r<f.length)return f.slice(-r);let a="",s=f;const o=s.indexOf(V);if(o>-1){for(let g=r-s.length;g>0;g--)a+=V;s=s.slice(0,o)+a+s.slice(o)}return s}function L(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&H(),w.value===!1){x=void 0,f="",d="";return}const r=pe[e.mask]===void 0?e.mask:pe[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(be,"\\$&"),o=[],g=[],v=[];let M=e.reverseFillMask===!0,m="",n="";r.replace(Ye,(F,l,q,K,U)=>{if(K!==void 0){const O=le[K];v.push(O),n=O.negate,M===!0&&(g.push("(?:"+n+"+)?("+O.pattern+"+)?(?:"+n+"+)?("+O.pattern+"+)?"),M=!1),g.push("(?:"+n+"+)?("+O.pattern+")?")}else if(q!==void 0)m="\\"+(q==="\\"?"":q),v.push(q),o.push("([^"+m+"]+)?"+m+"?");else{const O=l!==void 0?l:U;m=O==="\\"?"\\\\\\\\":O.replace(be,"\\\\$&"),v.push(O),o.push("([^"+m+"]+)?"+m+"?")}});const h=new RegExp("^"+o.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),Z=g.length-1,b=g.map((F,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+F):l===Z?new RegExp("^"+F+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+F));c=v,x=F=>{const l=h.exec(e.reverseFillMask===!0?F:F.slice(0,v.length+1));l!==null&&(F=l.slice(1).join(""));const q=[],K=b.length;for(let U=0,O=F;U<K;U++){const J=b[U].exec(O);if(J===null)break;O=O.slice(J.shift().length),q.push(...J)}return q.length!==0?q.join(""):F},f=v.map(F=>typeof F=="string"?F:V).join(""),d=f.split(V).join(a)}function I(r,a,s){const o=i.value,g=o.selectionEnd,v=o.value.length-g,M=C(r);a===!0&&L();const m=z(M),n=e.fillMask!==!1?E(m):m,h=p.value!==n;o.value!==n&&(o.value=n),h===!0&&(p.value=n),document.activeElement===o&&Y(()=>{if(n===d){const b=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(b,b,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const b=o.selectionEnd;let F=g-1;for(let l=B;l<=F&&l<b;l++)f[l]!==V&&F++;A.right(o,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const b=e.reverseFillMask===!0?g===0?n.length>m.length?1:0:Math.max(0,n.length-(n===d?0:Math.min(m.length,v)+1))+1:g;o.setSelectionRange(b,b,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const b=Math.max(0,n.length-(n===d?0:Math.min(m.length,v+1)));b===1&&g===1?o.setSelectionRange(b,b,"forward"):A.rightReverse(o,b)}else{const b=n.length-v;o.setSelectionRange(b,b,"backward")}else if(h===!0){const b=Math.max(0,f.indexOf(V),Math.min(m.length,g)-1);A.right(o,b)}else{const b=g-1;A.right(o,b)}});const Z=e.unmaskedValue===!0?C(n):n;String(e.modelValue)!==Z&&u(Z,!0)}function P(r,a,s){const o=z(C(r.value));a=Math.max(0,f.indexOf(V),Math.min(o.length,a)),B=a,r.setSelectionRange(a,s,"forward")}const A={left(r,a){const s=f.slice(a-1).indexOf(V)===-1;let o=Math.max(0,a-1);for(;o>=0;o--)if(f[o]===V){a=o,s===!0&&a++;break}if(o<0&&f[a]!==void 0&&f[a]!==V)return A.right(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},right(r,a){const s=r.value.length;let o=Math.min(s,a+1);for(;o<=s;o++)if(f[o]===V){a=o;break}else f[o-1]===V&&(a=o);if(o>s&&f[a-1]!==void 0&&f[a-1]!==V)return A.left(r,s);r.setSelectionRange(a,a,"forward")},leftReverse(r,a){const s=$(r.value.length);let o=Math.max(0,a-1);for(;o>=0;o--)if(s[o-1]===V){a=o;break}else if(s[o]===V&&(a=o,o===0))break;if(o<0&&s[a]!==void 0&&s[a]!==V)return A.rightReverse(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},rightReverse(r,a){const s=r.value.length,o=$(s),g=o.slice(0,a+1).indexOf(V)===-1;let v=Math.min(s,a+1);for(;v<=s;v++)if(o[v-1]===V){a=v,a>0&&g===!0&&a--;break}if(v>s&&o[a-1]!==void 0&&o[a-1]!==V)return A.leftReverse(r,s);r.setSelectionRange(a,a,"forward")}};function Q(r){t("click",r),R=void 0}function N(r){if(t("keydown",r),Ee(r)===!0)return;const a=i.value,s=a.selectionStart,o=a.selectionEnd;if(r.shiftKey||(R=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&R===void 0&&(R=a.selectionDirection==="forward"?s:o);const g=A[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),g(a,R===s?o:s),r.shiftKey){const v=a.selectionStart;a.setSelectionRange(Math.min(R,v),Math.max(R,v),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&s===o?(A.left(a,s),a.setSelectionRange(a.selectionStart,o,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&s===o&&(A.rightReverse(a,o),a.setSelectionRange(s,a.selectionEnd,"forward"))}function z(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return S(r);const a=c;let s=0,o="";for(let g=0;g<a.length;g++){const v=r[s],M=a[g];if(typeof M=="string")o+=M,v===M&&s++;else if(v!==void 0&&M.regex.test(v))o+=M.transform!==void 0?M.transform(v):v,s++;else return o}return o}function S(r){const a=c,s=f.indexOf(V);let o=r.length-1,g="";for(let v=a.length-1;v>=0&&o>-1;v--){const M=a[v];let m=r[o];if(typeof M=="string")g=M+g,m===M&&o--;else if(m!==void 0&&M.regex.test(m))do g=(M.transform!==void 0?M.transform(m):m)+g,o--,m=r[o];while(s===v&&m!==void 0&&M.regex.test(m));else return g}return g}function C(r){return typeof r!="string"||x===void 0?typeof r=="number"?x(""+r):r:x(r)}function E(r){return d.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?d.slice(0,-r.length)+r:r+d.slice(r.length)}return{innerValue:p,hasMask:w,moveCursorForPaste:P,updateMaskValue:I,onMaskedKeydown:N,onMaskedClick:Q}}const Xe={name:String};function it(e={}){return(t,u,i)=>{t[u](k("input",{class:"hidden"+(i||""),...e.value}))}}function Ge(e){return y(()=>e.name||e.for)}function et(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return u()}):y(u)}const tt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,nt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,lt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,at=/[a-z0-9_ -]$/i;function ot(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Be.is.firefox===!0?at.test(u.data)===!1:tt.test(u.data)===!0||nt.test(u.data)===!0||lt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var st=Te({name:"QInput",inheritAttrs:!1,props:{...Ze,...Je,...Xe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ke,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=X(),{$q:f}=i,d={};let c=NaN,x,B,R=null,w;const p=j(null),H=Ge(e),{innerValue:_,hasMask:$,moveCursorForPaste:L,updateMaskValue:I,onMaskedKeydown:P,onMaskedClick:A}=We(e,t,m,p),Q=et(e,!0),N=y(()=>ie(_.value)),z=ot(v),S=He(),C=y(()=>e.type==="textarea"||e.autogrow===!0),E=y(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),r=y(()=>{const l={...S.splitAttrs.listeners.value,onInput:v,onPaste:g,onChange:h,onBlur:Z,onFocus:fe};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=z,$.value===!0&&(l.onKeydown=P,l.onClick=A),e.autogrow===!0&&(l.onAnimationend=M),l}),a=y(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});D(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),D(()=>e.modelValue,l=>{if($.value===!0){if(B===!0&&(B=!1,String(l)===c))return;I(l)}else _.value!==l&&(_.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Y(n)}),D(()=>e.autogrow,l=>{l===!0?Y(n):p.value!==null&&u.rows>0&&(p.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Y(n)});function s(){ke(()=>{const l=document.activeElement;p.value!==null&&p.value!==l&&(l===null||l.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function o(){p.value!==null&&p.value.select()}function g(l){if($.value===!0&&e.reverseFillMask!==!0){const q=l.target;L(q,q.selectionStart,q.selectionEnd)}t("paste",l)}function v(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const q=l.target.value;if(l.target.qComposing===!0){d.value=q;return}if($.value===!0)I(q,!1,l.inputType);else if(m(q),E.value===!0&&l.target===document.activeElement){const{selectionStart:K,selectionEnd:U}=l.target;K!==void 0&&U!==void 0&&Y(()=>{l.target===document.activeElement&&q.indexOf(l.target.value)===0&&l.target.setSelectionRange(K,U)})}e.autogrow===!0&&n()}function M(l){t("animationend",l),n()}function m(l,q){w=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&c!==l&&(c=l,q===!0&&(B=!0),t("update:modelValue",l),Y(()=>{c===l&&(c=NaN)})),w=void 0},e.type==="number"&&(x=!0,d.value=l),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=l,R=setTimeout(w,e.debounce)):w()}function n(){requestAnimationFrame(()=>{const l=p.value;if(l!==null){const q=l.parentNode.style,{scrollTop:K}=l,{overflowY:U,maxHeight:O}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),J=U!==void 0&&U!=="scroll";J===!0&&(l.style.overflowY="hidden"),q.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",J===!0&&(l.style.overflowY=parseInt(O,10)<l.scrollHeight?"auto":"hidden"),q.marginBottom="",l.scrollTop=K}})}function h(l){z(l),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),t("change",l.target.value)}function Z(l){l!==void 0&&fe(l),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),x=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=_.value!==void 0?_.value:"")})}function b(){return d.hasOwnProperty("value")===!0?d.value:_.value!==void 0?_.value:""}ae(()=>{Z()}),se(()=>{e.autogrow===!0&&n()}),Object.assign(S,{innerValue:_,fieldClass:y(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:m,hasValue:N,floatingLabel:y(()=>N.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||ie(e.displayValue)),getControl:()=>k(C.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...r.value,...e.type!=="file"?{value:b()}:Q.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},b()),k("span",e.shadowText)])});const F=Qe(S);return Object.assign(i,{focus:s,select:o,getNativeElement:()=>p.value}),ye(i,"nativeEl",()=>p.value),F}});export{st as Q,Ke as a,Qe as b,He as c,Xe as d,Ge as e,ie as f,ot as g,it as h,et as i,Ue as j,Ze as u};
