import{t as _,aJ as g,G as B,P as j,cC as w,s as a,at as L,cB as O,ap as T,aX as S,au as A,x as C,ag as D,ad as G}from"./desk-2d9c1d72-104187fa.js";import{P as W}from"./PaneItem-61ee1040-a16aab17.js";import{useDeskTool as z}from"./index-def00177-689523d7.js";import"./index-f4b23916.js";var r;function H(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const E=_.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function U(n){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=n,{features:h}=z(),{collapsed:m}=g(),{defaultLayout:y,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=u,P=c==null?void 0:c.showIcons,x=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return B(j,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[w,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:b}),a(C,{overflow:m?void 0:"auto",children:a(D,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(G,{paddingY:1,children:a(E,{})},"divider-".concat(o));const s=!d&&t===e.id,k=d&&t===e.id;return a(W,{icon:x(e)?e.icon:!1,id:e.id,layout:y,pressed:s,schemaType:e.schemaType,selected:k,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{U as default};
