import{u as X,T as Y,S as Z,F as ee,c as te,e as ne,f as re,C as se}from"./iconUtil-5f60fcab.js";import{r as l,ai as F,aj as M,R as m,B as q,aw as oe,D as G,ax as z}from"./index-00bc0960.js";var ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};const ae=ce;var le=function(s,r){return l.createElement(F,M({},s,{ref:r,icon:ae}))};const ie=l.forwardRef(le);var de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};const fe=de;var ue=function(s,r){return l.createElement(F,M({},s,{ref:r,icon:fe}))};const pe=l.forwardRef(ue);var ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"};const xe=ye;var he=function(s,r){return l.createElement(F,M({},s,{ref:r,icon:xe}))};const me=l.forwardRef(he),_=4;function ge(t){const{dropPosition:s,dropLevelOffset:r,prefixCls:n,indent:o,direction:e="ltr"}=t,c=e==="ltr"?"left":"right",p=e==="ltr"?"right":"left",a={[c]:-r*o+_,[p]:0};switch(s){case-1:a.top=-3;break;case 1:a.bottom=-3;break;default:a.bottom=-3,a[c]=o+_;break}return m.createElement("div",{style:a,className:`${n}-drop-indicator`})}const ve=m.forwardRef((t,s)=>{const{getPrefixCls:r,direction:n,virtual:o,tree:e}=m.useContext(q),{prefixCls:c,className:p,showIcon:a=!1,showLine:w,switcherIcon:S,blockNode:v=!1,children:C,checkable:b=!1,selectable:O=!0,draggable:g,motion:E,style:j}=t,f=r("tree",c),$=r(),H=E??Object.assign(Object.assign({},oe($)),{motionAppear:!1}),I=Object.assign(Object.assign({},t),{checkable:b,selectable:O,showIcon:a,motion:H,blockNode:v,showLine:!!w,dropIndicatorRender:ge}),[K,D]=X(f),y=m.useMemo(()=>{if(!g)return!1;let i={};switch(typeof g){case"function":i.nodeDraggable=g;break;case"object":i=Object.assign({},g);break}return i.icon!==!1&&(i.icon=i.icon||m.createElement(me,null)),i},[g]),d=i=>m.createElement(Z,{prefixCls:f,switcherIcon:S,treeNodeProps:i,showLine:w});return K(m.createElement(Y,Object.assign({itemHeight:20,ref:s,virtual:o},I,{style:Object.assign(Object.assign({},e?.style),j),prefixCls:f,className:G({[`${f}-icon-hide`]:!a,[`${f}-block-node`]:v,[`${f}-unselectable`]:!O,[`${f}-rtl`]:n==="rtl"},e?.className,p,D),direction:n,checkable:b&&m.createElement("span",{className:`${f}-checkbox-inner`}),selectable:O,switcherIcon:d,draggable:y}),C))}),J=ve;var h;(function(t){t[t.None=0]="None",t[t.Start=1]="Start",t[t.End=2]="End"})(h||(h={}));function A(t,s){function r(n){const{key:o,children:e}=n;s(o,n)!==!1&&A(e||[],s)}t.forEach(r)}function be(t){let{treeData:s,expandedKeys:r,startKey:n,endKey:o}=t;const e=[];let c=h.None;if(n&&n===o)return[n];if(!n||!o)return[];function p(a){return a===n||a===o}return A(s,a=>{if(c===h.End)return!1;if(p(a)){if(e.push(a),c===h.None)c=h.Start;else if(c===h.Start)return c=h.End,!1}else c===h.Start&&e.push(a);return r.includes(a)}),e}function k(t,s){const r=z(s),n=[];return A(t,(o,e)=>{const c=r.indexOf(o);return c!==-1&&(n.push(e),r.splice(c,1)),!!r.length}),n}var V=globalThis&&globalThis.__rest||function(t,s){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&s.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)s.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r};function Oe(t){const{isLeaf:s,expanded:r}=t;return s?l.createElement(ee,null):r?l.createElement(ie,null):l.createElement(pe,null)}function B(t){let{treeData:s,children:r}=t;return s||re(r)}const Ee=(t,s)=>{var{defaultExpandAll:r,defaultExpandParent:n,defaultExpandedKeys:o}=t,e=V(t,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const c=l.useRef(),p=l.useRef(),a=()=>{const{keyEntities:y}=te(B(e));let d;return r?d=Object.keys(y):n?d=ne(e.expandedKeys||o||[],y):d=e.expandedKeys||o,d},[w,S]=l.useState(e.selectedKeys||e.defaultSelectedKeys||[]),[v,C]=l.useState(()=>a());l.useEffect(()=>{"selectedKeys"in e&&S(e.selectedKeys)},[e.selectedKeys]),l.useEffect(()=>{"expandedKeys"in e&&C(e.expandedKeys)},[e.expandedKeys]);const b=(y,d)=>{var i;return"expandedKeys"in e||C(y),(i=e.onExpand)===null||i===void 0?void 0:i.call(e,y,d)},O=(y,d)=>{var i;const{multiple:R}=e,{node:Q,nativeEvent:x}=d,{key:N=""}=Q,P=B(e),T=Object.assign(Object.assign({},d),{selected:!0}),U=x?.ctrlKey||x?.metaKey,W=x?.shiftKey;let u;R&&U?(u=y,c.current=N,p.current=u,T.selectedNodes=k(P,u)):R&&W?(u=Array.from(new Set([].concat(z(p.current||[]),z(be({treeData:P,expandedKeys:v,startKey:N,endKey:c.current}))))),T.selectedNodes=k(P,u)):(u=[N],c.current=N,p.current=u,T.selectedNodes=k(P,u)),(i=e.onSelect)===null||i===void 0||i.call(e,u,T),"selectedKeys"in e||S(u)},{getPrefixCls:g,direction:E}=l.useContext(q),{prefixCls:j,className:f,showIcon:$=!0,expandAction:H="click"}=e,I=V(e,["prefixCls","className","showIcon","expandAction"]),K=g("tree",j),D=G(`${K}-directory`,{[`${K}-directory-rtl`]:E==="rtl"},f);return l.createElement(J,Object.assign({icon:Oe,ref:s,blockNode:!0},I,{showIcon:$,expandAction:H,prefixCls:K,className:D,expandedKeys:v,selectedKeys:w,onSelect:O,onExpand:b}))},Ke=l.forwardRef(Ee),we=Ke,L=J;L.DirectoryTree=we;L.TreeNode=se;const Ne=L;export{Ne as T};