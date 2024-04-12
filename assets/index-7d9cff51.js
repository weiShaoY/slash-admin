import{O as e,r as n,U as t,am as l,aL as o,V as a,af as r,cP as s,cQ as i,a2 as c,b5 as p,aQ as m,ak as g,bq as f}from"./index-e852e44b.js";import{g as u,a as d,P as C}from"./index-009a3a75.js";const b=e("Popconfirm",(e=>(e=>{const{componentCls:n,iconCls:t,antCls:l,zIndexPopup:o,colorText:a,colorWarning:r,marginXXS:s,marginXS:i,fontSize:c,fontWeightStrong:p,colorTextHeading:m}=e;return{[n]:{zIndex:o,[`&${l}-popover`]:{fontSize:c},[`${n}-message`]:{marginBottom:i,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${n}-message-icon ${t}`]:{color:r,fontSize:c,lineHeight:1,marginInlineEnd:i},[`${n}-title`]:{fontWeight:p,color:m,"&:only-child":{fontWeight:"normal"}},[`${n}-description`]:{marginTop:s,color:a}},[`${n}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:i}}}}})(e)),(e=>{const{zIndexPopupBase:n}=e;return{zIndexPopup:n+60}}),{resetStyle:!1});var y=globalThis&&globalThis.__rest||function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t};const x=e=>{const{prefixCls:p,okButtonProps:m,cancelButtonProps:g,title:f,description:d,cancelText:C,okText:b,okType:y="primary",icon:x=n.createElement(c,null),showCancel:v=!0,close:O,onConfirm:h,onCancel:P,onPopupClick:E}=e,{getPrefixCls:T}=n.useContext(t),[j]=l("Popconfirm",o.Popconfirm),N=u(f),S=u(d);return n.createElement("div",{className:`${p}-inner-content`,onClick:E},n.createElement("div",{className:`${p}-message`},x&&n.createElement("span",{className:`${p}-message-icon`},x),n.createElement("div",{className:`${p}-message-text`},N&&n.createElement("div",{className:a(`${p}-title`)},N),S&&n.createElement("div",{className:`${p}-description`},S))),n.createElement("div",{className:`${p}-buttons`},v&&n.createElement(r,Object.assign({onClick:P,size:"small"},g),null!=C?C:null==j?void 0:j.cancelText),n.createElement(s,{buttonProps:Object.assign(Object.assign({size:"small"},i(y)),m),actionFn:h,close:O,prefixCls:T("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!=b?b:null==j?void 0:j.okText)))},v=e=>{const{prefixCls:l,placement:o,className:r,style:s}=e,i=y(e,["prefixCls","placement","className","style"]),{getPrefixCls:c}=n.useContext(t),p=c("popconfirm",l),[m]=b(p);return m(n.createElement(d,{placement:o,className:a(p,r),style:s,content:n.createElement(x,Object.assign({prefixCls:p},i))}))};var O=globalThis&&globalThis.__rest||function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t};const h=n.forwardRef(((e,l)=>{const{prefixCls:o,placement:r="top",trigger:s="click",okType:i="primary",icon:u=n.createElement(c,null),children:d,overlayClassName:y,onOpenChange:v,onVisibleChange:h}=e,P=O(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:E}=n.useContext(t),[T,j]=p(!1,{value:e.open,defaultValue:e.defaultOpen}),N=(e,n)=>{j(e,!0),null==h||h(e),null==v||v(e,n)},S=E("popconfirm",o),$=a(S,y),[k]=b(S);return k(n.createElement(C,Object.assign({},m(P,["title"]),{trigger:s,placement:r,onOpenChange:n=>{const{disabled:t=!1}=e;t||N(n)},open:T,ref:l,overlayClassName:$,content:n.createElement(x,Object.assign({okType:i,icon:u},e,{prefixCls:S,close:e=>{N(!1,e)},onConfirm:n=>{var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(globalThis,n)},onCancel:n=>{var t;N(!1,n),null===(t=e.onCancel)||void 0===t||t.call(globalThis,n)}})),"data-popover-inject":!0}),g(d,{onKeyDown:e=>{var t,l;n.isValidElement(d)&&(null===(l=null==d?void 0:(t=d.props).onKeyDown)||void 0===l||l.call(t,e)),(e=>{e.keyCode===f.ESC&&T&&N(!1,e)})(e)}})))}));h._InternalPanelDoNotUseOrYouWillBeFired=v;const P=h;export{P};