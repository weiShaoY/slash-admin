import{_ as h,cV as j,u as w,r as I,j as t,f as P,a6 as y,cW as n,cX as d,a3 as l,q as N,I as o,cd as c}from"./index-00bc0960.js";import{T as E}from"./Table-ca9a792f.js";import g from"./permission-modal-f3d04d05.js";import{P as T}from"./index-0037fedd.js";import"./styleChecker-cd6b40ad.js";import"./addEventListener-db3041bc.js";import"./List-066cd3b0.js";import"./useIcons-7028c4e8.js";import"./CheckOutlined-ce1b14da.js";import"./Pagination-45944b73.js";import"./index-3b0fbccb.js";import"./index-c3bb9433.js";import"./index-e28b0098.js";import"./index-057f0045.js";import"./index-0570ba04.js";import"./index-150fd04b.js";import"./iconUtil-5f60fcab.js";import"./extendsObject-1e0cd48d.js";import"./index-3d9030f5.js";import"./row-d64c6549.js";import"./index-a10964a0.js";import"./index-e6e2d9b7.js";var C=h(function(r){return r==null});const S=C,m={id:"",parentId:"",name:"",label:"",route:"",component:"",icon:"",hide:!1,status:n.ENABLE,type:d.CATALOGUE};function H(){const a=j(),{t:r}=w(),[p,i]=I.useState({formValue:{...m},title:"New",show:!1,onOk:()=>{i(e=>({...e,show:!1}))},onCancel:()=>{i(e=>({...e,show:!1}))}}),u=[{title:"Name",dataIndex:"name",width:300,render:(e,s)=>t.jsx("div",{children:r(s.label)})},{title:"Type",dataIndex:"type",width:60,render:(e,s)=>t.jsx(l,{color:"processing",children:d[s.type]})},{title:"Icon",dataIndex:"icon",width:60,render:e=>S(e)?"":e.startsWith("ic")?t.jsx(N,{icon:e,size:18,className:"ant-menu-item-icon"}):t.jsx(o,{icon:e,size:18,className:"ant-menu-item-icon"})},{title:"Component",dataIndex:"component"},{title:"Status",dataIndex:"status",align:"center",width:120,render:e=>t.jsx(l,{color:e===n.DISABLE?"error":"success",children:e===n.DISABLE?"Disable":"Enable"})},{title:"Order",dataIndex:"order",width:60},{title:"Action",key:"operation",align:"center",width:100,render:(e,s)=>t.jsxs("div",{className:"flex w-full justify-center text-gray",children:[t.jsx(c,{onClick:()=>f(s),children:t.jsx(o,{icon:"solar:pen-bold-duotone",size:18})}),t.jsx(T,{title:"Delete the Permission",okText:"Yes",cancelText:"No",placement:"left",children:t.jsx(c,{children:t.jsx(o,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}],x=()=>{i(e=>({...e,show:!0,...m}))},f=e=>{i(s=>({...s,show:!0,title:"Edit",formValue:e}))};return t.jsxs(P,{title:"Permission List",extra:t.jsx(y,{type:"primary",onClick:x,children:"New"}),children:[t.jsx(E,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:u,dataSource:a}),t.jsx(g,{...p})]})}export{H as default};