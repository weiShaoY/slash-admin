import{b7 as o}from"./index-0933da92.js";const r=o=>({color:o.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${o.motionDurationSlow}`,"&:focus, &:hover":{color:o.colorLinkHover},"&:active":{color:o.colorLinkActive}});var n=function(r){if(o()&&window.document.documentElement){var n=Array.isArray(r)?r:[r],t=window.document.documentElement;return n.some((function(o){return o in t.style}))}return!1};function t(o,r){return Array.isArray(o)||void 0===r?n(o):function(o,r){if(!n(o))return!1;var t=document.createElement("div"),e=t.style[o];return t.style[o]=r,t.style[o]!==e}(o,r)}export{t as i,r as o};