import{cx as s,j as a,ae as e,af as r}from"./index-adbc297b.js";import{C as o}from"./index-799e732d.js";import{F as l}from"./index-03d69761.js";import"./row-3052e149.js";function d(){const{notification:d}=s.useApp();return a.jsxs(o,{className:"!h-auto flex-col",children:[a.jsxs(l,{layout:"vertical",initialValues:{oldPassword:"",newPassword:"",confirmPassword:""},labelCol:{span:8},className:"w-full",children:[a.jsx(l.Item,{label:"Old Password",name:"oldPassword",children:a.jsx(e.Password,{})}),a.jsx(l.Item,{label:"New Password",name:"newPassword",children:a.jsx(e.Password,{})}),a.jsx(l.Item,{label:"Confirm New Password",name:"confirmPassword",children:a.jsx(e.Password,{})})]}),a.jsx("div",{className:"flex w-full justify-end",children:a.jsx(r,{type:"primary",onClick:()=>{d.success({message:"Update success!",duration:3})},children:"Save Changes"})})]})}export{d as default};