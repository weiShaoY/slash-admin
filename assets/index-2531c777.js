import{_ as e,d1 as t,u as i,r as s,j as n,g as o,af as r,d2 as a,d3 as d,ac as l,z as c,I as m,cj as x}from"./index-e852e44b.js";import{T as j}from"./Table-1274c4d4.js";import p from"./permission-modal-9ecd4f0b.js";import{P as u}from"./index-7d9cff51.js";import"./addEventListener-129b265f.js";import"./List-7c7cb1f8.js";import"./index-f3621f3e.js";import"./Pagination-14ce1e94.js";import"./index-951e222d.js";import"./index-fa2f426d.js";import"./index-65e4d254.js";import"./index-094cd22b.js";import"./index-80257b1a.js";import"./iconUtil-dc5e739f.js";import"./extendsObject-8d078517.js";import"./index-8492b184.js";import"./row-6638fc96.js";import"./index-43a119f1.js";import"./index-009a3a75.js";const h=e((function(e){return null==e})),w={id:"",parentId:"",name:"",label:"",route:"",component:"",icon:"",hide:!1,status:a.ENABLE,type:d.CATALOGUE};function f(){const e=t(),{t:f}=i(),[I,y]=s.useState({formValue:{...w},title:"New",show:!1,onOk:()=>{y((e=>({...e,show:!1})))},onCancel:()=>{y((e=>({...e,show:!1})))}}),N=[{title:"Name",dataIndex:"name",width:300,render:(e,t)=>n.jsx("div",{children:f(t.label)})},{title:"Type",dataIndex:"type",width:60,render:(e,t)=>n.jsx(l,{color:"processing",children:d[t.type]})},{title:"Icon",dataIndex:"icon",width:60,render:e=>h(e)?"":e.startsWith("ic")?n.jsx(c,{icon:e,size:18,className:"ant-menu-item-icon"}):n.jsx(m,{icon:e,size:18,className:"ant-menu-item-icon"})},{title:"Component",dataIndex:"component"},{title:"Status",dataIndex:"status",align:"center",width:120,render:e=>n.jsx(l,{color:e===a.DISABLE?"error":"success",children:e===a.DISABLE?"Disable":"Enable"})},{title:"Order",dataIndex:"order",width:60},{title:"Action",key:"operation",align:"center",width:100,render:(e,t)=>n.jsxs("div",{className:"flex w-full justify-end text-gray",children:[t?.type===d.CATALOGUE&&n.jsx(x,{onClick:()=>g(t.id),children:n.jsx(m,{icon:"gridicons:add-outline",size:18})}),n.jsx(x,{onClick:()=>A(t),children:n.jsx(m,{icon:"solar:pen-bold-duotone",size:18})}),n.jsx(u,{title:"Delete the Permission",okText:"Yes",cancelText:"No",placement:"left",children:n.jsx(x,{children:n.jsx(m,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}],g=e=>{y((t=>({...t,show:!0,...w,title:"New",formValue:{...w,parentId:e??""}})))},A=e=>{y((t=>({...t,show:!0,title:"Edit",formValue:e})))};return n.jsxs(o,{title:"Permission List",extra:n.jsx(r,{type:"primary",onClick:()=>g(),children:"New"}),children:[n.jsx(j,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:N,dataSource:e}),n.jsx(p,{...I})]})}export{f as default};