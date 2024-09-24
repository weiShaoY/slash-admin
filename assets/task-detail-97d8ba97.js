import{w as e,c as s,j as i,T as a,z as l,ah as r,B as c,aj as n}from"./index-13a3cc83.js";import{d}from"./dayjs.min-0aac3c3e.js";import{A as t}from"./index-30c1eb97.js";import{D as x}from"./index-6e7e25d4.js";import{R as m}from"./index-0897db24.js";import{I as o}from"./index-6fa5ef20.js";import"./index-7c9f1c68.js";import"./useIcons-51002f6c.js";import"./index-fdbbebf0.js";import"./addEventListener-7461b13a.js";function j({task:e}){const{title:j,reporter:p,assignee:f=[],tags:v=[],date:g,priority:u,description:N,attachments:b,comments:w=[]}=e,{colorInfo:y,colorWarning:z,colorSuccess:T}=s();return i.jsxs(i.Fragment,{children:[i.jsxs(h,{children:[i.jsx("div",{className:"item",children:i.jsx(a.Title,{level:4,children:j})}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Reporter"}),i.jsx(t,{shape:"circle",src:p,size:40})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Assignee"}),i.jsx(l,{children:f.map(((e,s)=>i.jsx(t,{shape:"circle",src:e,size:40},s)))})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Tag"}),i.jsx(l,{wrap:!0,children:v.map((e=>i.jsx(r,{color:y,children:e},e)))})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Due Date"}),i.jsx(x,{variant:"borderless",value:d(g)})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Priority"}),i.jsx("div",{children:i.jsx(m.Group,{defaultValue:u,children:i.jsxs(l,{children:[i.jsxs(m.Button,{value:"High",children:[i.jsx(c,{icon:"ic_rise",size:20,color:z}),i.jsx("span",{children:"High"})]}),i.jsxs(m.Button,{value:"Medium",children:[i.jsx(c,{icon:"ic_rise",size:20,color:T,className:"rotate-90"}),i.jsx("span",{children:"Medium"})]}),i.jsxs(m.Button,{value:"Low",children:[i.jsx(c,{icon:"ic_rise",size:20,color:y,className:"rotate-180"}),i.jsx("span",{children:"Low"})]})]})})})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Description"}),i.jsx(n.TextArea,{defaultValue:N})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Attachments"}),i.jsx(l,{wrap:!0,children:b?.map((e=>i.jsx(o,{src:e,width:62,height:62,className:"rounded-lg"},e)))})]})]}),i.jsx("div",{className:"flex flex-col gap-4",style:{padding:"24px 20px 40px"},children:w?.map((({avatar:e,username:s,content:l,time:r})=>i.jsxs("div",{className:"flex gap-4",children:[i.jsx(t,{src:e,size:40,className:"flex-shrink-0"}),i.jsxs("div",{className:"flex flex-grow flex-col flex-wrap gap-1 text-gray",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx(a.Text,{children:s}),i.jsx(a.Text,{children:d(r).format("DD/MM/YYYY HH:mm")})]}),i.jsx("p",{children:l})]})]},s)))})]})}const h=e.div`
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
