import{r as e,j as o,f as n}from"./index-0933da92.js";import r from"./control-panel-fd88e7dd.js";import s from"./container-c5e104cd.js";import t from"./toolbar-5e31955f.js";import{R as a,C as i}from"./row-883d5d59.js";import"./cover_3-01f389ec.js";import"./motion-container-f3daeae4.js";import"./bounce-60412db4.js";import"./transition-8bc41415.js";import"./index-85185b56.js";import"./fade-6abf311c.js";import"./ReloadOutlined-4a7daaf1.js";function p(){const p=e.useMemo((()=>({selectedVariant:"kenburnsTop"})),[]),[l,m]=e.useState(p.selectedVariant);return o.jsxs(n,{children:[o.jsx(a,{children:o.jsx(i,{xs:24,md:18,children:o.jsx(t,{onRefresh:()=>{m(p.selectedVariant)}})})}),o.jsxs(a,{justify:"space-between",children:[o.jsx(i,{xs:24,md:18,children:o.jsx(s,{variant:l})}),o.jsx(i,{xs:24,md:5,children:o.jsx(r,{variantKey:c,selectedVariant:l,onChangeVarient:e=>m(e)})})]})]})}const c=[{type:"kenburns",values:["kenburnsTop","kenburnsBottom","kenburnsLeft","kenburnsRight"]},{type:"pan",values:["panTop","panBottom","panLeft","panRight"]},{type:"color change",values:["color2x","color3x","color4x","color5x"]}];export{p as default};