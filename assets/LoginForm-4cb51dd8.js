import{z as K,A as Y,r as l,B as Z,D as T,E as ee,G as ne,J as oe,K as se,M as te,O as re,Q as le,U as ie,V as ae,W as ce,X as de,Y as me,Z as z,u as ue,b as ge,$ as pe,a0 as fe,a1 as $,j as o,a2 as I,a3 as w,a4 as xe,a5 as k,a6 as N,a7 as he}from"./index-00bc0960.js";import{F as y}from"./index-3d9030f5.js";import{R as H,C as b}from"./row-d64c6549.js";import{C as ye}from"./index-c3bb9433.js";import"./index-e28b0098.js";import"./index-057f0045.js";const E=(e,n,t,s,r)=>({backgroundColor:e,border:`${s.lineWidth}px ${s.lineType} ${n}`,[`${r}-icon`]:{color:t}}),Ce=e=>{const{componentCls:n,motionDurationSlow:t,marginXS:s,marginSM:r,fontSize:i,fontSizeLG:m,lineHeight:c,borderRadiusLG:u,motionEaseInOutCirc:d,withDescriptionIconSize:g,colorText:p,colorTextHeading:f,withDescriptionPadding:x,defaultPadding:C}=e;return{[n]:Object.assign(Object.assign({},Y(e)),{position:"relative",display:"flex",alignItems:"center",padding:C,wordWrap:"break-word",borderRadius:u,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:s,lineHeight:0},"&-description":{display:"none",fontSize:i,lineHeight:c},"&-message":{color:f},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${d}, opacity ${t} ${d},
        padding-top ${t} ${d}, padding-bottom ${t} ${d},
        margin-bottom ${t} ${d}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",padding:x,[`${n}-icon`]:{marginInlineEnd:r,fontSize:g,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:s,color:f,fontSize:m},[`${n}-description`]:{display:"block",color:p}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Se=e=>{const{componentCls:n,colorSuccess:t,colorSuccessBorder:s,colorSuccessBg:r,colorWarning:i,colorWarningBorder:m,colorWarningBg:c,colorError:u,colorErrorBorder:d,colorErrorBg:g,colorInfo:p,colorInfoBorder:f,colorInfoBg:x}=e;return{[n]:{"&-success":E(r,s,t,e,n),"&-info":E(x,f,p,e,n),"&-warning":E(c,m,i,e,n),"&-error":Object.assign(Object.assign({},E(g,d,u,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},je=e=>{const{componentCls:n,iconCls:t,motionDurationMid:s,marginXS:r,fontSizeIcon:i,colorIcon:m,colorIconHover:c}=e;return{[n]:{"&-action":{marginInlineStart:r},[`${n}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:i,lineHeight:`${i}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:m,transition:`color ${s}`,"&:hover":{color:c}}},"&-close-text":{color:m,transition:`color ${s}`,"&:hover":{color:c}}}}},ve=e=>[Ce(e),Se(e),je(e)],be=K("Alert",e=>[ve(e)],e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`}));var $e=globalThis&&globalThis.__rest||function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)n.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]]);return t};const Ie={success:te,info:re,error:le,warning:ie},Ne=e=>{const{icon:n,prefixCls:t,type:s}=e,r=Ie[s]||null;return n?oe(n,l.createElement("span",{className:`${t}-icon`},n),()=>({className:T(`${t}-icon`,{[n.props.className]:n.props.className})})):l.createElement(r,{className:`${t}-icon`})},Ee=e=>{const{isClosable:n,prefixCls:t,closeIcon:s,handleClose:r}=e,i=s===!0||s===void 0?l.createElement(se,null):s;return n?l.createElement("button",{type:"button",onClick:r,className:`${t}-close-icon`,tabIndex:0},i):null},we=e=>{const{description:n,prefixCls:t,message:s,banner:r,className:i,rootClassName:m,style:c,onMouseEnter:u,onMouseLeave:d,onClick:g,afterClose:p,showIcon:f,closable:x,closeText:C,closeIcon:S,action:B}=e,A=$e(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[O,D]=l.useState(!1),_=l.useRef(null),{getPrefixCls:R,direction:G,alert:h}=l.useContext(Z),a=R("alert",t),[W,U]=be(a),X=j=>{var v;D(!0),(v=e.onClose)===null||v===void 0||v.call(e,j)},M=l.useMemo(()=>e.type!==void 0?e.type:r?"warning":"info",[e.type,r]),q=l.useMemo(()=>C?!0:typeof x=="boolean"?x:S!==!1&&S!==null&&S!==void 0,[C,S,x]),F=r&&f===void 0?!0:f,V=T(a,`${a}-${M}`,{[`${a}-with-description`]:!!n,[`${a}-no-icon`]:!F,[`${a}-banner`]:!!r,[`${a}-rtl`]:G==="rtl"},h?.className,i,m,U),Q=ee(A,{aria:!0,data:!0});return W(l.createElement(ne,{visible:!O,motionName:`${a}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:j=>({maxHeight:j.offsetHeight}),onLeaveEnd:p},j=>{let{className:v,style:J}=j;return l.createElement("div",Object.assign({ref:_,"data-show":!O,className:T(V,v),style:Object.assign(Object.assign(Object.assign({},h?.style),c),J),onMouseEnter:u,onMouseLeave:d,onClick:g,role:"alert"},Q),F?l.createElement(Ne,{description:n,icon:e.icon,prefixCls:a,type:M}):null,l.createElement("div",{className:`${a}-content`},s?l.createElement("div",{className:`${a}-message`},s):null,n?l.createElement("div",{className:`${a}-description`},n):null),B?l.createElement("div",{className:`${a}-action`},B):null,l.createElement(Ee,{isClosable:q,prefixCls:a,closeIcon:C||S,handleClose:X}))}))},L=we;let Te=function(e){ae(t,e);var n=ce(t);function t(){var s;return de(this,t),s=n.apply(this,arguments),s.state={error:void 0,info:{componentStack:""}},s}return me(t,[{key:"componentDidCatch",value:function(r,i){this.setState({error:r,info:i})}},{key:"render",value:function(){const{message:r,description:i,children:m}=this.props,{error:c,info:u}=this.state,d=u&&u.componentStack?u.componentStack:null,g=typeof r>"u"?(c||"").toString():r,p=typeof i>"u"?d:i;return c?l.createElement(L,{type:"error",message:g,description:l.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},p)}):m}}]),t}(l.Component);const ze=Te,P=L;P.ErrorBoundary=ze;const Be=P;function Oe(e){return z({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function Me(e){return z({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"}}]})(e)}function Fe(e){return z({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z"}}]})(e)}function _e(){const{t:e}=ue(),n=ge(),[t,s]=l.useState(!1),{loginState:r,setLoginState:i}=pe(),m=fe();if(r!==$.LOGIN)return null;const c=async({username:u,password:d})=>{s(!0);try{await m({username:u,password:d})}finally{s(!1)}};return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"mb-4 text-2xl font-bold xl:text-3xl",children:e("sys.login.signInFormTitle")}),o.jsxs(y,{name:"login",size:"large",initialValues:{remember:!0,username:I.username,password:I.password},onFinish:c,children:[o.jsx("div",{className:"mb-4 flex flex-col",children:o.jsx(Be,{type:"info",description:o.jsxs("div",{className:"flex flex-col",children:[o.jsxs("div",{className:"flex",children:[o.jsxs(w,{className:"flex-shrink-0",children:["Admin ",e("sys.login.userName"),":"]}),o.jsx("strong",{className:"ml-1",style:{color:n.colorInfoTextHover},children:o.jsx("span",{children:I.username})})]}),o.jsxs("div",{className:"flex",children:[o.jsxs(w,{className:"flex-shrink-0",children:["Tdmin ",e("sys.login.userName"),":"]}),o.jsx("strong",{className:"ml-1",style:{color:n.colorInfoTextHover},children:o.jsx("span",{children:xe.username})})]}),o.jsxs("div",{children:[o.jsxs(w,{className:"flex-shrink-0",children:[e("sys.login.password"),":"]}),o.jsx("strong",{className:" ml-1",style:{color:n.colorInfoTextHover},children:I.password})]})]}),showIcon:!0})}),o.jsx(y.Item,{name:"username",rules:[{required:!0,message:e("sys.login.accountPlaceholder")}],children:o.jsx(k,{placeholder:e("sys.login.userName")})}),o.jsx(y.Item,{name:"password",rules:[{required:!0,message:e("sys.login.passwordPlaceholder")}],children:o.jsx(k.Password,{type:"password",placeholder:e("sys.login.password")})}),o.jsx(y.Item,{children:o.jsxs(H,{children:[o.jsx(b,{span:12,children:o.jsx(y.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:o.jsx(ye,{children:e("sys.login.rememberMe")})})}),o.jsx(b,{span:12,className:"text-right",children:o.jsx("button",{className:"!underline",children:e("sys.login.forgetPassword")})})]})}),o.jsx(y.Item,{children:o.jsx(N,{type:"primary",htmlType:"submit",className:"w-full",loading:t,children:e("sys.login.loginButton")})}),o.jsxs(H,{align:"middle",gutter:8,children:[o.jsx(b,{span:9,flex:"1",children:o.jsx(N,{className:"w-full !text-sm",onClick:()=>i($.MOBILE),children:e("sys.login.mobileSignInFormTitle")})}),o.jsx(b,{span:9,flex:"1",children:o.jsx(N,{className:"w-full !text-sm",onClick:()=>i($.QR_CODE),children:e("sys.login.qrSignInFormTitle")})}),o.jsx(b,{span:6,flex:"1",onClick:()=>i($.REGISTER),children:o.jsx(N,{className:"w-full !text-sm",children:e("sys.login.signUpFormTitle")})})]}),o.jsx(he,{className:"!text-xs",children:e("sys.login.otherSignIn")}),o.jsxs("div",{className:"flex cursor-pointer justify-around text-2xl",children:[o.jsx(Oe,{}),o.jsx(Fe,{}),o.jsx(Me,{})]})]})]})}export{_e as default};