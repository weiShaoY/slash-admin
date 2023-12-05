import{ce as g,b,x as s,j as e,I as l,a3 as i,q as y,cd as m,y as T,p as w}from"./index-00bc0960.js";import{f as I}from"./utils-cc215780.js";import{C as c}from"./index-1b672bfc.js";import{R as d,C as o}from"./row-d64c6549.js";import{T as r}from"./index-e59e4fdc.js";import{T as C}from"./Timeline-a90985ff.js";import{T as P}from"./Table-ca9a792f.js";import{A as j}from"./index-a4e51a61.js";import{P as z}from"./progress-160c53e8.js";import"./CheckOutlined-ce1b14da.js";import"./styleChecker-cd6b40ad.js";import"./addEventListener-db3041bc.js";import"./List-066cd3b0.js";import"./useIcons-7028c4e8.js";import"./Pagination-45944b73.js";import"./index-3b0fbccb.js";import"./index-c3bb9433.js";import"./index-e28b0098.js";import"./index-057f0045.js";import"./index-0570ba04.js";import"./index-150fd04b.js";import"./iconUtil-5f60fcab.js";import"./extendsObject-1e0cd48d.js";import"./index-e6e2d9b7.js";function Z(){const{username:x}=g(),t=b(),f=[{icon:e.jsx(l,{icon:"fa-solid:user",size:18}),label:"Full Name",val:x},{icon:e.jsx(l,{icon:"eos-icons:role-binding",size:18}),label:"Role",val:"Developer"},{icon:e.jsx(l,{icon:"tabler:location-filled",size:18}),label:"Country",val:"USA"},{icon:e.jsx(l,{icon:"ion:language",size:18}),label:"Language",val:"English"},{icon:e.jsx(l,{icon:"ph:phone-fill",size:18}),label:"Contact",val:"(123)456-7890"},{icon:e.jsx(l,{icon:"ic:baseline-email",size:18}),label:"Email",val:x}],p=[{avatar:s.image.avatarLegacy(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()},{avatar:s.image.avatarLegacy(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()},{avatar:s.image.avatarLegacy(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()},{avatar:s.image.avatarLegacy(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()},{avatar:s.image.avatarLegacy(),name:s.person.fullName(),connections:`${s.number.int(100)} Connections`,connected:s.datatype.boolean()}],h=[{avatar:e.jsx(l,{icon:"devicon:react",size:36}),name:"React Developers",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{color:"warning",children:"Developer"})},{avatar:e.jsx(l,{icon:"devicon:figma",size:36}),name:"UI Designer",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{color:"cyan",children:"Designer"})},{avatar:e.jsx(l,{icon:"logos:jest",size:36}),name:"Test Team",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{color:"success",children:"Test"})},{avatar:e.jsx(l,{icon:"logos:nestjs",size:36}),name:"Nest.js Developers",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{color:"warning",children:"Developer"})},{avatar:e.jsx(l,{icon:"logos:twitter",size:36}),name:"Digital Marketing",members:`${s.number.int(100)} Members`,tag:e.jsx(i,{children:"Marketing"})}],v=()=>{const a=[];for(let n=0;n<=25;n+=1)a.push({key:s.string.uuid(),avatar:s.image.urlPicsumPhotos(),name:s.company.buzzPhrase(),date:s.date.past().toDateString(),leader:s.person.fullName(),team:I(s.number.int({min:2,max:5})),status:s.number.int({min:50,max:99})});return a},u=[{title:"NAME",dataIndex:"name",render:(a,n)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:n.avatar,alt:"",className:"h-9 w-9 rounded-full"}),e.jsxs("div",{className:"ml-2 flex flex-col",children:[e.jsx("span",{className:"font-semibold",children:n.name}),e.jsx("span",{className:"text-xs opacity-50",children:n.date})]})]})},{title:"LEADER",dataIndex:"leader",render:a=>e.jsx("span",{className:"opacity-50",children:a})},{title:"TEAM",dataIndex:"team",render:a=>e.jsx(j.Group,{children:a.map((n,N)=>e.jsx(j,{src:n},N))})},{title:"STATUS",dataIndex:"status",render:a=>e.jsx(z,{percent:a,strokeColor:t.colorPrimary,trailColor:"transparent"})},{title:"ACTIONS",dataIndex:"action",render:()=>e.jsx(w,{size:"middle",children:e.jsx(m,{children:e.jsx(l,{icon:"fontisto:more-v-a"})})})}];return e.jsxs(e.Fragment,{children:[e.jsxs(d,{gutter:[16,16],children:[e.jsx(o,{span:24,md:12,lg:8,children:e.jsx(c,{className:"flex-col",children:e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx(r.Title,{level:5,children:"About"}),e.jsx(r.Text,{children:s.lorem.paragraph()}),e.jsx("div",{className:"mt-2 flex flex-col gap-4",children:f.map((a,n)=>e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2",children:a.icon}),e.jsxs("div",{className:"mr-2",children:[a.label,":"]}),e.jsx("div",{className:"opacity-50",children:a.val})]},n))})]})})}),e.jsx(o,{span:24,md:12,lg:16,children:e.jsxs(c,{className:"flex-col !items-start",children:[e.jsx(r.Title,{level:5,children:"Activity Timeline"}),e.jsx(C,{className:"!mt-4 w-full",items:[{color:t.colorError,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r.Text,{strong:!0,children:"8 Invoices have been paid"}),e.jsx("div",{className:"opacity-50",children:"Wednesday"})]}),e.jsx(r.Text,{type:"secondary",className:"text-xs",children:"Invoices have been paid to the company."}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx(y,{icon:"ic_file_pdf",size:30}),e.jsx("span",{className:"font-medium opacity-60",children:"invoice.pdf"})]})]})},{color:t.colorPrimaryActive,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r.Text,{strong:!0,children:"Create a new project for client 😎"}),e.jsx("div",{className:"opacity-50",children:"April, 18"})]}),e.jsx(r.Text,{type:"secondary",className:"text-xs",children:"Invoices have been paid to the company."}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("img",{alt:"",src:s.image.avatarLegacy(),className:"h-8 w-8 rounded-full"}),e.jsxs("span",{className:"font-medium opacity-60",children:[s.person.fullName()," (client)"]})]})]})},{color:t.colorInfo,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r.Text,{strong:!0,children:"Order #37745 from September"}),e.jsx("div",{className:"opacity-50",children:"January, 10"})]}),e.jsx(r.Text,{type:"secondary",className:"text-xs",children:"Invoices have been paid to the company."})]})},{color:t.colorWarning,children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r.Text,{strong:!0,children:"Public Meeting"}),e.jsx("div",{className:"opacity-50",children:"September, 30"})]})})}]})]})})]}),e.jsxs(d,{gutter:[16,16],className:"mt-4",children:[e.jsx(o,{span:24,md:12,children:e.jsxs(c,{className:"flex-col !items-start",children:[e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsx(r.Title,{level:5,children:"Connections"}),e.jsx(m,{children:e.jsx(l,{icon:"fontisto:more-v-a"})})]}),e.jsx("div",{className:"mt-2 flex w-full flex-col gap-4",children:p.map((a,n)=>e.jsxs("div",{className:"flex",children:[e.jsx("img",{alt:"",src:a.avatar,className:"h-10 w-10 flex-none rounded-full"}),e.jsxs("div",{className:"ml-4 flex flex-1 flex-col",children:[e.jsx("span",{className:"font-semibold",children:a.name}),e.jsx("span",{className:"mt-1 text-xs opacity-50",children:a.connections})]}),e.jsx("div",{className:"flex h-9 w-9 flex-none items-center justify-center rounded",style:{backgroundColor:a.connected?t.colorPrimaryText:"transparent",border:a.connected?"":`1px solid ${t.colorPrimaryText}`},children:e.jsx(l,{icon:"tdesign:user",color:a.connected?"#fff":t.colorPrimaryText,size:20})})]},n))}),e.jsx("div",{className:"mt-4 w-full text-center text-lg",style:{color:t.colorPrimaryText},children:"View all connections"})]})}),e.jsx(o,{span:24,md:12,children:e.jsxs(c,{className:"flex-col !items-start",children:[e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsx(r.Title,{level:5,children:"Teams"}),e.jsx(m,{children:e.jsx(l,{icon:"fontisto:more-v-a"})})]}),e.jsx("div",{className:"mt-2 flex w-full flex-col gap-4",children:h.map((a,n)=>e.jsxs("div",{className:"flex",children:[a.avatar,e.jsxs("div",{className:"ml-4 flex flex-1 flex-col",children:[e.jsx("span",{className:"font-semibold",children:a.name}),e.jsx("span",{className:"mt-1 text-xs opacity-50",children:a.members})]}),a.tag]},n))}),e.jsx("div",{className:"mt-4 w-full text-center text-lg",style:{color:t.colorPrimaryText},children:"View all members"})]})})]}),e.jsx(d,{gutter:[16,16],className:"mt-4",children:e.jsx(o,{span:24,children:e.jsxs(c,{className:"flex-col !items-start",children:[e.jsx(r.Title,{level:5,children:"Projects"}),e.jsx("div",{className:"!mt-4 w-full",children:e.jsx(T,{children:e.jsx(P,{rowSelection:{type:"checkbox"},columns:u,dataSource:v()})})})]})})})]})}export{Z as default};