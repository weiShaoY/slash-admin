import{ck as e,b as t,r as s,j as i,I as r}from"./index-adbc297b.js";import{C as o}from"./index-799e732d.js";import n from"./connections-tab-f483f3a6.js";import l from"./profile-tab-f187804a.js";import m from"./projects-tab-29af8ebd.js";import c from"./teams-tab-7aa35afd.js";import"./row-3052e149.js";import"./utils-bb84ccfc.js";import"./Timeline-201b8362.js";import"./Table-41c14068.js";import"./addEventListener-a08b4908.js";import"./List-489e496c.js";import"./index-ec854b6d.js";import"./Pagination-331bc15c.js";import"./index-d62a0209.js";import"./index-504ec023.js";import"./index-c6f386e6.js";import"./index-01b89e52.js";import"./index-43f259b3.js";import"./iconUtil-c71794a5.js";import"./extendsObject-8d078517.js";import"./index-98049299.js";import"./index-21cd6078.js";import"./progress-7d77d8da.js";import"./dayjs.min-d414a6b6.js";const a=""+new URL("cover_4-3feb85f5.jpg",import.meta.url).href;function d(){const{avatar:d,username:j}=e(),{colorTextBase:x}=t(),[p,f]=s.useState(0),u={background:`linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8)) center center / cover no-repeat, url(${a})`,backgroundRepeat:"no-repeat",backgroundPosition:"center center"},b=[{icon:i.jsx(r,{icon:"solar:user-id-bold",size:24,className:"mr-2"}),title:"Profile",content:i.jsx(l,{})},{icon:i.jsx(r,{icon:"mingcute:profile-fill",size:24,className:"mr-2"}),title:"Teams",content:i.jsx(c,{})},{icon:i.jsx(r,{icon:"mingcute:profile-fill",size:24,className:"mr-2"}),title:"Projects",content:i.jsx(m,{})},{icon:i.jsx(r,{icon:"mingcute:profile-fill",size:24,className:"mr-2"}),title:"Connections",content:i.jsx(n,{})}];return i.jsxs(i.Fragment,{children:[i.jsxs(o,{className:"relative mb-6 h-[290px] flex-col rounded-2xl !p-0",children:[i.jsx("div",{style:u,className:"h-full w-full",children:i.jsxs("div",{className:"flex flex-col items-center justify-center pt-12 md:absolute md:bottom-6 md:left-6 md:flex-row md:pt-0",children:[i.jsx("img",{src:d,className:"h-16 w-16 rounded-full md:h-32 md:w-32",alt:""}),i.jsxs("div",{className:"ml-6 mt-6 flex flex-col justify-center md:mt-0",style:{color:"#fff"},children:[i.jsx("span",{className:"mb-2 text-2xl font-medium",children:j}),i.jsx("span",{className:"text-center opacity-50 md:text-left",children:"TS FullStack"})]})]})}),i.jsx("div",{className:"z-10 min-h-[48px] w-full",children:i.jsx("div",{className:"mx-6 flex h-full justify-center md:justify-end",children:b.map(((e,t)=>i.jsxs("button",{onClick:()=>f(t),type:"button",style:{marginRight:t>=b.length-1?"0px":"40px",opacity:t===p?1:.5,borderBottom:t===p?`2px solid ${x}`:""},children:[e.icon,e.title]},e.title)))})})]}),i.jsx("div",{children:b[p].content})]})}export{d as default};