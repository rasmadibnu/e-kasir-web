import{r as z,J as y,z as f,c as w,o as h,n as O,A as b,h as R,j as T,G as g}from"./index.7b165d1f.js";function E(){const t=z(!y.value);return t.value===!1&&f(()=>{t.value=!0}),t}const p=typeof ResizeObserver!="undefined",m=p===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var j=w({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let r=null,n,u={width:-1,height:-1};function s(i){i===!0||t.debounce===0||t.debounce==="0"?l():r===null&&(r=setTimeout(l,t.debounce))}function l(){if(r!==null&&(clearTimeout(r),r=null),n){const{offsetWidth:i,offsetHeight:o}=n;(i!==u.width||o!==u.height)&&(u={width:i,height:o},e("resize",u))}}const{proxy:d}=T();if(p===!0){let i;const o=a=>{n=d.$el.parentNode,n?(i=new ResizeObserver(s),i.observe(n),l()):a!==!0&&b(()=>{o(!0)})};return f(()=>{o()}),h(()=>{r!==null&&clearTimeout(r),i!==void 0&&(i.disconnect!==void 0?i.disconnect():n&&i.unobserve(n))}),O}else{let a=function(){r!==null&&(clearTimeout(r),r=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",s,g.passive),o=void 0)},v=function(){a(),n&&n.contentDocument&&(o=n.contentDocument.defaultView,o.addEventListener("resize",s,g.passive),l())};const i=E();let o;return f(()=>{b(()=>{n=d.$el,n&&v()})}),h(a),d.trigger=s,()=>{if(i.value===!0)return R("object",{style:m.style,tabindex:-1,type:"text/html",data:m.url,"aria-hidden":"true",onLoad:v})}}}});const c={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},L=Object.keys(c);c.all=!0;function k(t){const e={};for(const r of L)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?c:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const C=["INPUT","TEXTAREA"];function x(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&C.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}export{j as Q,k as g,x as s};
