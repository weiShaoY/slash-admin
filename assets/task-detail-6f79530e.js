import{w as e,c as s,j as i,T as l,z as a,ae as r,B as c,ag as n}from"./index-f7e160de.js";import{d}from"./dayjs.min-73ea4002.js";import{A as t}from"./index-bd6c6af5.js";import{D as x}from"./index-bd4a4497.js";import{R as m}from"./index-58733c8f.js";import{I as o}from"./index-5267389b.js";import"./index-38a335b0.js";import"./useIcons-32d490b7.js";import"./index-2ef89ac8.js";import"./addEventListener-a7f982d8.js";function j({task:e}){const{title:j,reporter:p,assignee:f=[],tags:v=[],date:g,priority:u,description:N,attachments:b,comments:w=[]}=e,{colorInfo:z,colorWarning:y,colorSuccess:D}=s();return i.jsxs(i.Fragment,{children:[i.jsxs(h,{children:[i.jsx("div",{className:"item",children:i.jsx(l.Title,{level:4,children:j})}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Reporter"}),i.jsx(t,{shape:"circle",src:p,size:40})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Assignee"}),i.jsx(a,{children:f.map(((e,s)=>i.jsx(t,{shape:"circle",src:e,size:40},s)))})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Tag"}),i.jsx(a,{wrap:!0,children:v.map((e=>i.jsx(r,{color:z,children:e},e)))})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Due Date"}),i.jsx(x,{bordered:!1,value:d(g)})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Priority"}),i.jsx("div",{children:i.jsx(m.Group,{defaultValue:u,children:i.jsxs(a,{children:[i.jsxs(m.Button,{value:"High",children:[i.jsx(c,{icon:"ic_rise",size:20,color:y}),i.jsx("span",{children:"High"})]}),i.jsxs(m.Button,{value:"Medium",children:[i.jsx(c,{icon:"ic_rise",size:20,color:D,className:"rotate-90"}),i.jsx("span",{children:"Medium"})]}),i.jsxs(m.Button,{value:"Low",children:[i.jsx(c,{icon:"ic_rise",size:20,color:z,className:"rotate-180"}),i.jsx("span",{children:"Low"})]})]})})})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Description"}),i.jsx(n.TextArea,{defaultValue:N})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Attachments"}),i.jsx(a,{wrap:!0,children:b?.map((e=>i.jsx(o,{src:e,width:62,height:62,className:"rounded-lg"},e)))})]})]}),i.jsx("div",{className:"flex flex-col gap-4",style:{padding:"24px 20px 40px"},children:w?.map((({avatar:e,username:s,content:a,time:r})=>i.jsxs("div",{className:"flex gap-4",children:[i.jsx(t,{src:e,size:40,className:"flex-shrink-0"}),i.jsxs("div",{className:"flex flex-grow flex-col flex-wrap gap-1 text-gray",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx(l.Text,{children:s}),i.jsx(l.Text,{children:d(r).format("DD/MM/YYYY HH:mm")})]}),i.jsx("p",{children:a})]})]},s)))})]})}const h=e.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 20px 40px;
  .item {
    display: flex;
    align-items: center;
  }
  .label {
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    width: 100px;
    flex-shrink: 0;
    color: rgb(99, 115, 129);
    height: 40px;
    line-height: 40px;
  }
`;export{j as default};
