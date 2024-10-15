import{Q as e,U as o,V as s,r as n,W as l,X as r,Y as t,Z as a,$ as i,a0 as c,a1 as d,a2 as m,a3 as p,a4 as u,a5 as g,a6 as x,a7 as f,a8 as h,a9 as v,aa as y,ab as j,ac as b,u as I,c as $,ad as w,ae as C,af as N,j as S,ag as E,ah as z,ai as k,aj as O,ak as M,al as B}from"./index-657a8674.js";import{F as T}from"./index-93ab40bc.js";import{R as H,C as P}from"./row-d6e9e131.js";import{C as L}from"./index-29b8e509.js";import"./index-4ca02689.js";import"./index-8e429b50.js";const R=(e,o,n,l,r)=>({background:e,border:`${s(l.lineWidth)} ${l.lineType} ${o}`,[`${r}-icon`]:{color:n}}),D=e=>{const{componentCls:s,motionDurationSlow:n,marginXS:l,marginSM:r,fontSize:t,fontSizeLG:a,lineHeight:i,borderRadiusLG:c,motionEaseInOutCirc:d,withDescriptionIconSize:m,colorText:p,colorTextHeading:u,withDescriptionPadding:g,defaultPadding:x}=e;return{[s]:Object.assign(Object.assign({},o(e)),{position:"relative",display:"flex",alignItems:"center",padding:x,wordWrap:"break-word",borderRadius:c,[`&${s}-rtl`]:{direction:"rtl"},[`${s}-content`]:{flex:1,minWidth:0},[`${s}-icon`]:{marginInlineEnd:l,lineHeight:0},"&-description":{display:"none",fontSize:t,lineHeight:i},"&-message":{color:u},[`&${s}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${d}, opacity ${n} ${d},\n        padding-top ${n} ${d}, padding-bottom ${n} ${d},\n        margin-bottom ${n} ${d}`},[`&${s}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${s}-with-description`]:{alignItems:"flex-start",padding:g,[`${s}-icon`]:{marginInlineEnd:r,fontSize:m,lineHeight:0},[`${s}-message`]:{display:"block",marginBottom:l,color:u,fontSize:a},[`${s}-description`]:{display:"block",color:p}},[`${s}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},W=e=>{const{componentCls:o,colorSuccess:s,colorSuccessBorder:n,colorSuccessBg:l,colorWarning:r,colorWarningBorder:t,colorWarningBg:a,colorError:i,colorErrorBorder:c,colorErrorBg:d,colorInfo:m,colorInfoBorder:p,colorInfoBg:u}=e;return{[o]:{"&-success":R(l,n,s,e,o),"&-info":R(u,p,m,e,o),"&-warning":R(a,t,r,e,o),"&-error":Object.assign(Object.assign({},R(d,c,i,e,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},F=e=>{const{componentCls:o,iconCls:n,motionDurationMid:l,marginXS:r,fontSizeIcon:t,colorIcon:a,colorIconHover:i}=e;return{[o]:{"&-action":{marginInlineStart:r},[`${o}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:t,lineHeight:s(t),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:a,transition:`color ${l}`,"&:hover":{color:i}}},"&-close-text":{color:a,transition:`color ${l}`,"&:hover":{color:i}}}}},A=e("Alert",(e=>[D(e),W(e),F(e)]),(e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`})));var G=globalThis&&globalThis.__rest||function(e,o){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)o.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(s[n[l]]=e[n[l]])}return s};const X={success:m,info:p,error:u,warning:g},_=e=>{const{icon:o,prefixCls:s,type:l}=e,t=X[l]||null;return o?c(o,n.createElement("span",{className:`${s}-icon`},o),(()=>({className:r(`${s}-icon`,{[o.props.className]:o.props.className})}))):n.createElement(t,{className:`${s}-icon`})},q=e=>{const{isClosable:o,prefixCls:s,closeIcon:l,handleClose:r,ariaProps:t}=e,a=!0===l||void 0===l?n.createElement(d,null):l;return o?n.createElement("button",Object.assign({type:"button",onClick:r,className:`${s}-close-icon`,tabIndex:0},t),a):null},V=n.forwardRef(((e,o)=>{const{description:s,prefixCls:c,message:d,banner:m,className:p,rootClassName:u,style:g,onMouseEnter:x,onMouseLeave:f,onClick:h,afterClose:v,showIcon:y,closable:j,closeText:b,closeIcon:I,action:$,id:w}=e,C=G(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[N,S]=n.useState(!1),E=n.useRef(null);n.useImperativeHandle(o,(()=>({nativeElement:E.current})));const{getPrefixCls:z,direction:k,alert:O}=n.useContext(l),M=z("alert",c),[B,T,H]=A(M),P=o=>{var s;S(!0),null===(s=e.onClose)||void 0===s||s.call(e,o)},L=n.useMemo((()=>void 0!==e.type?e.type:m?"warning":"info"),[e.type,m]),R=n.useMemo((()=>!("object"!=typeof j||!j.closeIcon)||(!!b||("boolean"==typeof j?j:!1!==I&&null!=I||!!(null==O?void 0:O.closable)))),[b,I,j,null==O?void 0:O.closable]),D=!(!m||void 0!==y)||y,W=r(M,`${M}-${L}`,{[`${M}-with-description`]:!!s,[`${M}-no-icon`]:!D,[`${M}-banner`]:!!m,[`${M}-rtl`]:"rtl"===k},null==O?void 0:O.className,p,u,H,T),F=t(C,{aria:!0,data:!0}),X=n.useMemo((()=>{var e,o;return"object"==typeof j&&j.closeIcon?j.closeIcon:b||(void 0!==I?I:"object"==typeof(null==O?void 0:O.closable)&&(null===(e=null==O?void 0:O.closable)||void 0===e?void 0:e.closeIcon)?null===(o=null==O?void 0:O.closable)||void 0===o?void 0:o.closeIcon:null==O?void 0:O.closeIcon)}),[I,j,b,null==O?void 0:O.closeIcon]),V=n.useMemo((()=>{const e=null!=j?j:null==O?void 0:O.closable;if("object"==typeof e){return G(e,["closeIcon"])}return{}}),[j,null==O?void 0:O.closable]);return B(n.createElement(a,{visible:!N,motionName:`${M}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:v},((o,l)=>{let{className:t,style:a}=o;return n.createElement("div",Object.assign({id:w,ref:i(E,l),"data-show":!N,className:r(W,t),style:Object.assign(Object.assign(Object.assign({},null==O?void 0:O.style),g),a),onMouseEnter:x,onMouseLeave:f,onClick:h,role:"alert"},F),D?n.createElement(_,{description:s,icon:e.icon,prefixCls:M,type:L}):null,n.createElement("div",{className:`${M}-content`},d?n.createElement("div",{className:`${M}-message`},d):null,s?n.createElement("div",{className:`${M}-description`},s):null),$?n.createElement("div",{className:`${M}-action`},$):null,n.createElement(q,{isClosable:R,prefixCls:M,closeIcon:X,handleClose:P,ariaProps:V}))})))}));const Q=function(e){function o(){var e,s,n,l;return j(this,o),s=this,l=arguments,n=x(n=o),(e=f(s,h()?Reflect.construct(n,l||[],x(s).constructor):n.apply(s,l))).state={error:void 0,info:{componentStack:""}},e}return v(o,e),y(o,[{key:"componentDidCatch",value:function(e,o){this.setState({error:e,info:o})}},{key:"render",value:function(){const{message:e,description:o,id:s,children:l}=this.props,{error:r,info:t}=this.state,a=(null==t?void 0:t.componentStack)||null,i=void 0===e?(r||"").toString():e,c=void 0===o?a:o;return r?n.createElement(V,{id:s,type:"error",message:i,description:n.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},c)}):l}}])}(n.Component),U=V;U.ErrorBoundary=Q;const Y=U;function Z(e){return b({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function J(e){return b({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"}}]})(e)}function K(e){return b({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z"}}]})(e)}function ee(){const{t:e}=I(),o=$(),[s,l]=n.useState(!1),{loginState:r,setLoginState:t}=w(),a=C();if(r!==N.LOGIN)return null;return S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"mb-4 text-2xl font-bold xl:text-3xl",children:e("sys.login.signInFormTitle")}),S.jsxs(T,{name:"login",size:"large",initialValues:{remember:!0,username:E.username,password:E.password},onFinish:async({username:e,password:o})=>{l(!0);try{await a({username:e,password:o})}finally{l(!1)}},children:[S.jsx("div",{className:"mb-4 flex flex-col",children:S.jsx(Y,{type:"info",description:S.jsxs("div",{className:"flex flex-col",children:[S.jsxs("div",{className:"flex",children:[S.jsxs(z,{className:"flex-shrink-0",children:["Admin ",e("sys.login.userName"),":"]}),S.jsx("strong",{className:"ml-1",style:{color:o.colorInfoTextHover},children:S.jsx("span",{children:E.username})})]}),S.jsxs("div",{className:"flex",children:[S.jsxs(z,{className:"flex-shrink-0",children:["Test ",e("sys.login.userName"),":"]}),S.jsx("strong",{className:"ml-1",style:{color:o.colorInfoTextHover},children:S.jsx("span",{children:k.username})})]}),S.jsxs("div",{children:[S.jsxs(z,{className:"flex-shrink-0",children:[e("sys.login.password"),":"]}),S.jsx("strong",{className:" ml-1",style:{color:o.colorInfoTextHover},children:E.password})]})]}),showIcon:!0})}),S.jsx(T.Item,{name:"username",rules:[{required:!0,message:e("sys.login.accountPlaceholder")}],children:S.jsx(O,{placeholder:e("sys.login.userName")})}),S.jsx(T.Item,{name:"password",rules:[{required:!0,message:e("sys.login.passwordPlaceholder")}],children:S.jsx(O.Password,{type:"password",placeholder:e("sys.login.password")})}),S.jsx(T.Item,{children:S.jsxs(H,{align:"middle",children:[S.jsx(P,{span:12,children:S.jsx(T.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:S.jsx(L,{children:e("sys.login.rememberMe")})})}),S.jsx(P,{span:12,className:"text-right",children:S.jsx(M,{type:"link",className:"!underline",onClick:()=>t(N.RESET_PASSWORD),size:"small",children:e("sys.login.forgetPassword")})})]})}),S.jsx(T.Item,{children:S.jsx(M,{type:"primary",htmlType:"submit",className:"w-full",loading:s,children:e("sys.login.loginButton")})}),S.jsxs(H,{align:"middle",gutter:8,children:[S.jsx(P,{span:9,flex:"1",children:S.jsx(M,{className:"w-full !text-sm",onClick:()=>t(N.MOBILE),children:e("sys.login.mobileSignInFormTitle")})}),S.jsx(P,{span:9,flex:"1",children:S.jsx(M,{className:"w-full !text-sm",onClick:()=>t(N.QR_CODE),children:e("sys.login.qrSignInFormTitle")})}),S.jsx(P,{span:6,flex:"1",onClick:()=>t(N.REGISTER),children:S.jsx(M,{className:"w-full !text-sm",children:e("sys.login.signUpFormTitle")})})]}),S.jsx(B,{className:"!text-xs",children:e("sys.login.otherSignIn")}),S.jsxs("div",{className:"flex cursor-pointer justify-around text-2xl",children:[S.jsx(Z,{}),S.jsx(K,{}),S.jsx(J,{})]})]})]})}export{ee as default};