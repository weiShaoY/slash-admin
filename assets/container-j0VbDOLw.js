import{j as o,v as i,b as s}from"./index-Cj3L5P2x.js";import{r as n}from"./vendor-react-C12YrPp7.js";import{m}from"./vendor-ui-D5V7SM0_.js";import{g as l}from"./index-okJ8QyqL.js";import{C as p,z as c}from"./vendor-antd-3B35lyCA.js";import"./vendor-utils-DcpWhr7h.js";import"./bounce-DRi8xYdi.js";import"./fade-nkofQwnf.js";function u({children:r,className:t,...e}){return o.jsx(m.div,{initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.3},variants:i(),className:t,...e,children:r})}function C({variant:r}){const{colorBgLayout:t}=s(),e=n.useMemo(()=>l(r),[r]);return o.jsx("div",{className:"h-[480px] overflow-scroll rounded-lg px-20",style:{backgroundColor:t},children:[...Array(40)].map((x,a)=>o.jsx(u,{variants:e,className:"mt-4",children:o.jsx(p,{children:o.jsxs(c,{className:"text-center",children:["Item ",a+1]})})},a))},r)}export{C as default};