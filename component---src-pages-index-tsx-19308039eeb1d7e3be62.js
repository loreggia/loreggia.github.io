"use strict";(self.webpackChunklloreggia_ch=self.webpackChunklloreggia_ch||[]).push([[691],{7047:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(7294),l=r(2757),a=r(6554),o=r(8702),i=r(5893),s=(0,a.G)((function(e,t){const{templateAreas:r,gap:n,rowGap:l,columnGap:a,column:s,row:c,autoFlow:m,autoRows:d,templateRows:u,autoColumns:p,templateColumns:f,...g}=e,v={display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:l,gridColumnGap:a,gridAutoColumns:p,gridColumn:s,gridRow:c,gridAutoFlow:m,gridAutoRows:d,gridTemplateRows:u,gridTemplateColumns:f};return(0,i.jsx)(o.m.div,{ref:t,__css:v,...g})}));s.displayName="Grid";var c=r(8940),m=r(7634),d=r(5432);Object.freeze(["base","sm","md","lg","xl","2xl"]);function u(e,t){return Array.isArray(e)?e.map((e=>null===e?null:t(e))):(0,d.Kn)(e)?Object.keys(e).reduce(((r,n)=>(r[n]=t(e[n]),r)),{}):null!=e?t(e):null}var p=(0,a.G)((function(e,t){const{columns:r,spacingX:n,spacingY:l,spacing:a,minChildWidth:o,...d}=e,p=(0,c.F)(),f=o?function(e,t){return u(e,(e=>{const r=(0,m.LP)("sizes",e,"number"==typeof(n=e)?`${n}px`:n)(t);var n;return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`}))}(o,p):u(r,(e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`));return(0,i.jsx)(s,{ref:t,gap:a,columnGap:n,rowGap:l,templateColumns:f,...d})}));p.displayName="SimpleGrid";var f=(0,a.G)((function(e,t){const{isExternal:r,target:n,rel:l,className:a,...s}=e;return(0,i.jsx)(o.m.a,{...s,ref:t,className:(0,d.cx)("chakra-linkbox__overlay",a),rel:r?"noopener noreferrer":l,target:r?"_blank":n,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})})),g=(0,a.G)((function(e,t){const{className:r,...n}=e;return(0,i.jsx)(o.m.div,{ref:t,position:"relative",...n,className:(0,d.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})})),v=r(2741),[x,h]=(0,v.eC)("Card"),_=r(3179),b=r(7030),y=(0,a.G)((function(e,t){const{className:r,children:n,direction:l="column",justify:a,align:s,...c}=(0,_.Lr)(e),m=(0,b.jC)("Card",e);return(0,i.jsx)(o.m.div,{ref:t,className:(0,d.cx)("chakra-card",r),__css:{display:"flex",flexDirection:l,justifyContent:a,alignItems:s,position:"relative",minWidth:0,wordWrap:"break-word",...m.container},...c,children:(0,i.jsx)(x,{value:m,children:n})})})),E=(0,a.G)((function(e,t){const{className:r,...n}=e,l=h();return(0,i.jsx)(o.m.div,{ref:t,className:(0,d.cx)("chakra-card__header",r),__css:l.header,...n})})),k=(0,a.G)((function(e,t){const{className:r,...n}=e,l=h();return(0,i.jsx)(o.m.div,{ref:t,className:(0,d.cx)("chakra-card__body",r),__css:l.body,...n})})),j=r(2675),G=r(9289),w=(0,a.G)((function(e,t){const{className:r,justify:n,...l}=e,a=h();return(0,i.jsx)(o.m.div,{ref:t,className:(0,d.cx)("chakra-card__footer",r),__css:{display:"flex",justifyContent:n,...a.footer},...l})})),C=r(7272);var N=e=>{let{data:t}=e;const r=t.blog.nodes,a=t.projects.nodes;return n.createElement(C.Ar,{title:"Home"},n.createElement(C.pQ,{title:"Home"}),n.createElement(l.X,{as:"h2",mb:4},n.createElement(C.rU,{to:"/projects"},"Projects")),n.createElement(p,{columns:{base:1,md:2,lg:4},spacing:4},a.map((e=>{var t,r,l,a,o;const i=(null===(t=e.frontmatter)||void 0===t?void 0:t.title)||(null===(r=e.fields)||void 0===r?void 0:r.slug);return n.createElement(g,{as:y,key:null===(l=e.fields)||void 0===l?void 0:l.slug},n.createElement(E,{fontSize:"large",fontWeight:"bold"},n.createElement(f,{as:C.rU,to:(null===(a=e.fields)||void 0===a?void 0:a.slug)||""},i)),n.createElement(k,null,n.createElement(j.x,{dangerouslySetInnerHTML:{__html:(null===(o=e.frontmatter)||void 0===o?void 0:o.description)||e.excerpt||""},itemProp:"description"})))}))),n.createElement(G.i,{my:8}),n.createElement(l.X,{as:"h2",mb:4},n.createElement(C.rU,{to:"/blog"},"Blog")),n.createElement(p,{columns:{base:1,md:2,lg:4},spacing:4},r.map((e=>{var t,r,l,a,o;const i=(null===(t=e.frontmatter)||void 0===t?void 0:t.title)||(null===(r=e.fields)||void 0===r?void 0:r.slug);return n.createElement(g,{as:y,key:e.id},n.createElement(E,{fontSize:"large",fontWeight:"bold"},n.createElement(f,{as:C.rU,to:`${null===(l=e.fields)||void 0===l?void 0:l.slug}`},i)),n.createElement(k,null,n.createElement(j.x,{dangerouslySetInnerHTML:{__html:(null===(a=e.frontmatter)||void 0===a?void 0:a.description)||e.excerpt||""},itemProp:"description"})),n.createElement(w,{fontSize:"small"},null===(o=e.frontmatter)||void 0===o?void 0:o.date))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-19308039eeb1d7e3be62.js.map