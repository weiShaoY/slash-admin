import{t as e,b as s,j as i,T as l,y as a,ac as r,z as c,ae as d}from"./index-adbc297b.js";import{d as n}from"./dayjs.min-d414a6b6.js";import{A as t}from"./index-98049299.js";import{D as x}from"./index-10dbca09.js";import{R as m}from"./index-01b89e52.js";import{I as o}from"./index-6a52d661.js";import"./index-21cd6078.js";import"./index-504ec023.js";import"./addEventListener-a08b4908.js";function j({task:e}){const{title:j,reporter:p,assignee:f=[],tags:v=[],date:g,priority:N,description:u,attachments:b,comments:w=[]}=e,{colorInfo:y,colorWarning:z,colorSuccess:T}=s();return i.jsxs(i.Fragment,{children:[i.jsxs(h,{children:[i.jsx("div",{className:"item",children:i.jsx(l.Title,{level:4,children:j})}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Reporter"}),i.jsx(t,{shape:"circle",src:p,size:40})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Assignee"}),i.jsx(a,{children:f.map(((e,s)=>i.jsx(t,{shape:"circle",src:e,size:40},s)))})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Tag"}),i.jsx(a,{wrap:!0,children:v.map((e=>i.jsx(r,{color:y,children:e},e)))})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Due Date"}),i.jsx(x,{bordered:!1,value:n(g)})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Priority"}),i.jsx("div",{children:i.jsx(m.Group,{defaultValue:N,children:i.jsxs(a,{children:[i.jsxs(m.Button,{value:"High",children:[i.jsx(c,{icon:"ic_rise",size:20,color:z}),i.jsx("span",{children:"High"})]}),i.jsxs(m.Button,{value:"Medium",children:[i.jsx(c,{icon:"ic_rise",size:20,color:T,className:"rotate-90"}),i.jsx("span",{children:"Medium"})]}),i.jsxs(m.Button,{value:"Low",children:[i.jsx(c,{icon:"ic_rise",size:20,color:y,className:"rotate-180"}),i.jsx("span",{children:"Low"})]})]})})})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Description"}),i.jsx(d.TextArea,{defaultValue:u})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Attachments"}),i.jsx(a,{wrap:!0,children:b?.map((e=>i.jsx(o,{src:e,width:62,height:62,className:"rounded-lg"},e)))})]})]}),i.jsx("div",{className:"flex flex-col gap-4",style:{padding:"24px 20px 40px"},children:w?.map((({avatar:e,username:s,content:a,time:r})=>i.jsxs("div",{className:"flex gap-4",children:[i.jsx(t,{src:e,size:40,className:"flex-shrink-0"}),i.jsxs("div",{className:"flex flex-grow flex-col flex-wrap gap-1 text-gray",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx(l.Text,{children:s}),i.jsx(l.Text,{children:n(r).format("DD/MM/YYYY HH:mm")})]}),i.jsx("p",{children:a})]})]},s)))})]})}const h=e.div`
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
