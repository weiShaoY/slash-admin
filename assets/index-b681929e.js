import{r as e,cx as s,J as a,j as n,g as t,T as r,ae as i,aK as c,cj as l,I as o}from"./index-adbc297b.js";import{R as p,C as x}from"./row-3052e149.js";function u(){const{copyFn:u}=function(){const[a,n]=e.useState(null),{notification:t}=s.useApp();return{copiedText:a,copyFn:async e=>{if(!navigator?.clipboard)return!1;try{return await navigator.clipboard.writeText(e),n(e),t.success({message:"Copied!"}),!0}catch(s){return n(null),!1}}}}(),[d,j]=e.useState("https://www.npmjs.com/package/"),h=a.lorem.paragraphs({min:3,max:5}),m=n.jsx(c,{title:"Copy",children:n.jsx(l,{className:"text-gray",onClick:()=>u(d),children:n.jsx(o,{icon:"eva:copy-fill",size:20})})});return n.jsx(t,{children:n.jsxs(p,{gutter:[16,16],children:[n.jsxs(x,{span:24,md:12,children:[n.jsx(r.Title,{level:5,children:"ON CHANGE"}),n.jsx(i,{suffix:m,value:d,onChange:e=>j(e.target.value)})]}),n.jsxs(x,{span:24,md:12,children:[n.jsx(r.Title,{level:5,children:"ON DOUBLE CLICK"}),n.jsx(r,{onDoubleClick:()=>u(h),children:h})]})]})})}export{u as default};