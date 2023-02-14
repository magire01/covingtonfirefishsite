(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{552364:function(t,e,a){"use strict";a.r(e),a.d(e,{__N_SSG:function(){return T},default:function(){return G}});var r,o,n,i,s,l,c,d,u=a(887628),p=a(25778),v=a(295649),g=a(74968),m=a.n(g),h=a(696138),f=a.n(h),x=a(827378),Z=a(686677),b=a(279955),y=a(521522),k=a(172208),j=a(230542),C=a(301665),w=a(855834),S=a(703558),P=a(439827),z=a(420364),M=a(563818),N=a(126648),R=a(796839),B=a(223007),L=a(657611),F=a(907335),D=a(375989),I=a(139801),O=a(556107),W=a(120399),A=a(928235),q=a(361881),_=a(824246);function E(t){return(0,_.jsxs)(x.Fragment,{children:[(0,_.jsx)(j.Z,{sx:{display:"flex",gap:1,mb:1.5},children:t.tags.map(function(t){return(0,_.jsx)(B.Z,{label:t,size:"small",sx:[function(t){return{fontWeight:500,color:(t.vars||t).palette.grey[700],background:(t.vars||t).palette.grey[100],"&:hover":{background:(t.vars||t).palette.grey[100]}}},function(t){return t.applyDarkStyles({color:(t.vars||t).palette.grey[50],background:(0,b.Fq)(t.palette.grey[700],.5),"&:hover":{background:(0,b.Fq)(t.palette.grey[700],.5)}})}]},t)})}),(0,_.jsx)(P.Z,{component:"h2",fontWeight:"bold",variant:"subtitle1",sx:{mb:.5},children:(0,_.jsx)(q.default,{"aria-describedby":"describe-".concat(t.slug),href:"/blog/".concat(t.slug),sx:{color:"text.primary","&:hover":{textDecoration:"underline"}},children:t.title})}),(0,_.jsx)(P.Z,{color:"text.secondary",sx:{mb:"auto"},children:t.description}),t.authors&&(0,_.jsx)(k.Z,{sx:[function(t){return{mt:2,mb:1,alignSelf:"flex-start","& .MuiAvatar-circular":{width:28,height:28,border:3,borderColor:(t.vars||t).palette.grey[100],backgroundColor:(t.vars||t).palette.grey[100],color:(t.vars||t).palette.grey[800],fontSize:t.typography.pxToRem(13),fontWeight:500}}},function(t){return t.applyDarkStyles({"& .MuiAvatar-circular":{borderColor:(t.vars||t).palette.primaryDark[800],backgroundColor:(t.vars||t).palette.primaryDark[700],color:(t.vars||t).palette.primaryDark[100]}})}],children:t.authors.map(function(t){return(0,_.jsx)(y.Z,{alt:"",src:"".concat(W.o[t].avatar,"?s=",28),srcSet:"".concat(W.o[t].avatar,"?s=").concat(56," 2x")},t)})}),(0,_.jsxs)(j.Z,{sx:{display:{sm:"block",md:"flex"},justifyContent:"space-between",alignItems:"end"},children:[(0,_.jsxs)(j.Z,{sx:{position:"relative"},children:[t.authors&&(0,_.jsxs)(P.Z,{variant:"body2",fontWeight:"500",children:[t.authors.slice(0,3).map(function(e){var a,r=null===(a=W.o[e])||void 0===a?void 0:a.name;return r?t.authors&&t.authors.length>1?r.split(" ")[0]:r:e}).join(", "),t.authors.length>2&&", and more."]}),t.date&&(0,_.jsx)(P.Z,{variant:"caption",fontWeight:"400",color:"text.secondary",children:new Date(t.date).toDateString()})]}),(0,_.jsx)(N.Z,{component:q.default,"aria-describedby":"describe-".concat(t.slug),href:"/blog/".concat(t.slug),id:"describe-".concat(t.slug),size:"small",endIcon:r||(r=(0,_.jsx)(R.default,{})),sx:function(t){return(0,v.Z)({mt:{xs:1,md:0},mb:{xs:-1,md:0},color:(t.vars||t).palette.primary[600],"& .MuiButton-endIcon":{ml:0}},t.applyDarkStyles({color:(t.vars||t).palette.primary[300]}))},children:"Read more"})]})]})}var T=!0;function G(t){var e=(0,Z.useRouter)(),a=x.useRef(null),r=x.useState(0),g=(0,p.Z)(r,2),h=g[0],y=g[1],k=x.useState({}),N=(0,p.Z)(k,2),R=N[0],W=N[1],q=t.allBlogPosts,T=t.tagInfo,G=(0,u.Z)(q),V=G[0],U=G[1],X=G.slice(2),H=(0,v.Z)({},T);[V,U].forEach(function(t){t.tags.forEach(function(t){H[t]&&(H[t]-=1)})}),m()(H).forEach(function(t){var e=(0,p.Z)(t,2),a=e[0];0===e[1]&&delete H[a]});var J=X.filter(function(t){return 0===f()(R).length||t.tags.some(function(t){return f()(R).includes(t)})}),K=5*h,Q=Math.ceil(J.length/5),Y=J.slice(K,K+5),$=x.useCallback(function(){var t=e.query.tags,a=void 0===t?"":t;return("string"==typeof a?a.split(","):a||[]).map(function(t){return t.trim()}).filter(function(t){return!!t})},[e.query]);x.useEffect(function(){var t=$(),e={};t.forEach(function(t){e[t]=!0}),W(e),y(0)},[$]);var tt=function(t){e.push({query:(0,v.Z)((0,v.Z)({},e.query),{},{tags:$().filter(function(e){return e!==t})})},void 0,{shallow:!0})};return(0,_.jsxs)(O.Z,{children:[o||(o=(0,_.jsx)(L.Z,{title:"Blog - MUI",description:"Follow the MUI blog to learn about new product features, latest advancements in UI development, and business initiatives.",disableAlternateLocale:!0})),n||(n=(0,_.jsx)(F.Z,{})),(0,_.jsxs)("main",{id:"main-content",children:[(0,_.jsxs)(w.Z,{bg:"gradient",sx:{backgroundSize:"100% 300px",backgroundRepeat:"no-repeat"},children:[i||(i=(0,_.jsx)(P.Z,{variant:"body2",color:"primary.600",fontWeight:"bold",textAlign:"center",children:"Blog"})),(0,_.jsxs)(P.Z,{component:"h1",variant:"h2",textAlign:"center",sx:{mb:{xs:5,md:10}},children:["The ",s||(s=(0,_.jsx)(I.Z,{children:"latest"}))," about MUI"]}),(0,_.jsx)(j.Z,{component:"ul",sx:{display:"grid",m:0,p:0,gap:2,gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[V,U].map(function(t){return(0,_.jsxs)(z.Z,{component:"li",variant:"outlined",sx:[{p:2,display:"flex",flexDirection:"column",position:"relative",transition:"all ease 120ms","&:hover, &:focus-within":{borderColor:"grey.300",boxShadow:"0px 4px 20px rgba(170, 180, 190, 0.3)"},"&:focus-within":{"& a":{outline:0}}},function(t){return t.applyDarkStyles({"&:hover, &:focus-within":{borderColor:"primary.600",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.5)"}})}],children:[t.image&&(0,_.jsx)(j.Z,{component:"img",src:t.image,sx:{aspectRatio:"16 / 9",width:"100%",height:"auto",objectFit:"cover",borderRadius:"4px"}}),(0,_.jsx)(E,(0,v.Z)({},t))]},t.slug)})})]}),(0,_.jsxs)(C.Z,{ref:a,sx:{mt:-6,display:"grid",gridTemplateColumns:{md:"1fr 380px"},columnGap:8},children:[(0,_.jsxs)(P.Z,{component:"h2",color:"text.primary",variant:"h5",fontWeight:"700",sx:{mb:{xs:1,sm:2},mt:8},children:["Posts"," ",f()(R).length?(0,_.jsxs)("span",{children:["tagged as"," ",(0,_.jsxs)(P.Z,{component:"span",variant:"inherit",color:"primary",noWrap:!0,children:['"',f()(R)[0],'"']})]}):""]}),(0,_.jsx)(j.Z,{sx:{gridRow:"span 2"},children:(0,_.jsxs)(j.Z,{sx:function(t){return(0,v.Z)({position:"sticky",top:100,alignSelf:"start",mb:2,mt:{xs:3,sm:2,md:9},p:2,borderRadius:1,border:"1px solid",background:"rgba(255, 255, 255, 0.2)",borderColor:(t.vars||t).palette.grey[200]},t.applyDarkStyles({background:(0,b.Fq)(t.palette.primaryDark[700],.2),borderColor:(t.vars||t).palette.primaryDark[700]}))},children:[(0,_.jsx)(P.Z,{color:"text.primary",fontWeight:"500",sx:{mb:2},children:"Filter by tag"}),(0,_.jsx)(j.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:f()(H).map(function(t){var r=!!R[t];return(0,_.jsx)(B.Z,(0,v.Z)((0,v.Z)({variant:r?"filled":"outlined"},r?{label:t,onDelete:function(){var e;null===(e=a.current)||void 0===e||e.scrollIntoView(),tt(t)}}:{label:t,onClick:function(){var r;null===(r=a.current)||void 0===r||r.scrollIntoView(),e.push({query:(0,v.Z)((0,v.Z)({},e.query),{},{tags:t})},void 0,{shallow:!0})}}),{},{size:"small",sx:{py:1.2}}),t)})})]})}),(0,_.jsxs)(j.Z,{children:[(0,_.jsx)(j.Z,{component:"ul",sx:{p:0,m:0},children:Y.map(function(t){return(0,_.jsx)(j.Z,{component:"li",sx:function(){return{py:2.5,display:"flex",flexDirection:"column",position:"relative","&:not(:last-of-type)":{borderBottom:"1px solid",borderColor:"divider"}}},children:(0,_.jsx)(E,(0,v.Z)({},t))},t.slug)})}),(0,_.jsx)(M.Z,{page:h+1,count:Q,variant:"outlined",shape:"rounded",onChange:function(t,e){var r;y(e-1),null===(r=a.current)||void 0===r||r.scrollIntoView()},sx:{mt:1,mb:8}})]})]})]}),l||(l=(0,_.jsx)(A.Z,{})),c||(c=(0,_.jsx)(S.Z,{})),d||(d=(0,_.jsx)(D.Z,{}))]})}},139801:function(t,e,a){"use strict";var r=a(295649),o=(0,a(137341).ZP)("span")(function(t){var e=t.theme,a=t.color,o=void 0===a?"primary":a;return(0,r.Z)({background:"linear-gradient(to right, ".concat((e.vars||e).palette[o].main,", ").concat((e.vars||e).palette[o][700],")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},e.applyDarkStyles({background:(e.vars||e).palette.primary[300],WebkitBackgroundClip:"text"}))});e.Z=o},855834:function(t,e,a){"use strict";a.d(e,{Z:function(){return p}});var r=a(295649),o=a(823315),n=a(481936),i=a(374338),s=a.n(i),l=a(301665),c=a(230542),d=a(824246),u=["bg","children","sx"];function p(t){var e=t.bg,a=void 0===e?"white":e,i=t.children,p=t.sx,v=(0,n.Z)(t,u),g={white:{light:"common.white",dark:"primaryDark.800"},comfort:{light:"grey.50",dark:"primaryDark.900"},dim:{light:"primaryDark.700",dark:"primaryDark.700"}};return(0,d.jsx)(c.Z,(0,r.Z)((0,r.Z)({},v),{},{sx:[function(t){return(0,r.Z)((0,r.Z)({},"gradient"===a?(0,r.Z)({background:"linear-gradient(180deg, ".concat((t.vars||t).palette.grey[50]," 0%, #FFFFFF 100%)")},t.applyDarkStyles({background:"linear-gradient(180deg, ".concat((t.vars||t).palette.primaryDark[900]," 0%, #001E3C 100%)")})):(0,r.Z)({bgcolor:g[a].light},t.applyDarkStyles({bgcolor:g[a].dark}))),{},{py:{xs:4,sm:6,md:8},overflow:"hidden"})}].concat((0,o.Z)(s()(p)?p:[p])),children:(0,d.jsx)(l.Z,{children:i})}))}},172208:function(t,e,a){"use strict";var r=a(481936),o=a(957379),n=a(295649),i=a(827378);a(519185);var s=a(138944),l=a(361747),c=a(137341),d=a(576581),u=a(507489),p=a(521522),v=a(848997),g=a(824246),m=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],h={small:-16,medium:null},f=function(t){var e=t.classes;return(0,l.Z)({root:["root"],avatar:["avatar"]},v.m,e)},x=(0,c.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(t,e){return(0,n.Z)((0,o.Z)({},"& .".concat(v.Z.avatar),e.avatar),e.root)}})(function(t){var e,a=t.theme;return e={},(0,o.Z)(e,"& .".concat(u.Z.root),{border:"2px solid ".concat((a.vars||a).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),(0,o.Z)(e,"display","flex"),(0,o.Z)(e,"flexDirection","row-reverse"),e}),Z=(0,c.ZP)(p.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(t,e){return e.avatar}})(function(t){var e=t.theme;return{border:"2px solid ".concat((e.vars||e).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}}),b=i.forwardRef(function(t,e){var a,o=(0,d.Z)({props:t,name:"MuiAvatarGroup"}),l=o.children,c=o.className,u=o.component,p=void 0===u?"div":u,v=o.componentsProps,b=o.max,y=void 0===b?5:b,k=o.slotProps,j=o.spacing,C=void 0===j?"medium":j,w=o.total,S=o.variant,P=void 0===S?"circular":S,z=(0,r.Z)(o,m),M=y<2?2:y,N=(0,n.Z)((0,n.Z)({},o),{},{max:y,spacing:C,component:p,variant:P}),R=f(N),B=i.Children.toArray(l).filter(function(t){return i.isValidElement(t)}),L=w||B.length;L===M&&(M+=1),M=Math.min(L+1,M);var F=Math.min(B.length,M-1),D=Math.max(L-M,L-F,0),I=C&&void 0!==h[C]?h[C]:-C,O=null!==(a=(void 0===k?{}:k).additionalAvatar)&&void 0!==a?a:(void 0===v?{}:v).additionalAvatar;return(0,g.jsxs)(x,(0,n.Z)((0,n.Z)({as:p,ownerState:N,className:(0,s.default)(R.root,c),ref:e},z),{},{children:[D?(0,g.jsxs)(Z,(0,n.Z)((0,n.Z)({ownerState:N,variant:P},O),{},{className:(0,s.default)(R.avatar,null==O?void 0:O.className),style:(0,n.Z)({marginLeft:I},null==O?void 0:O.style),children:["+",D]})):null,B.slice(0,F).reverse().map(function(t,e){return i.cloneElement(t,{className:(0,s.default)(t.props.className,R.avatar),style:(0,n.Z)({marginLeft:e===F-1?void 0:I},t.props.style),variant:t.props.variant||P})})]}))});e.Z=b},848997:function(t,e,a){"use strict";a.d(e,{m:function(){return n}});var r=a(554825),o=a(750022);function n(t){return(0,o.Z)("MuiAvatarGroup",t)}var i=(0,r.Z)("MuiAvatarGroup",["root","avatar"]);e.Z=i},563818:function(t,e,a){"use strict";var r=a(295649),o=a(481936),n=a(827378),i=a(138944),s=a(361747),l=a(576581),c=a(473447),d=a(180363),u=a(30961),p=a(137341),v=a(824246),g=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],m=function(t){var e=t.classes,a=t.variant;return(0,s.Z)({root:["root",a],ul:["ul"]},c.X,e)},h=(0,p.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e[a.variant]]}})({}),f=(0,p.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(t,e){return e.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function x(t,e,a){return"page"===t?"".concat(a?"":"Go to ","page ").concat(e):"Go to ".concat(t," page")}var Z=n.forwardRef(function(t,e){var a=(0,l.Z)({props:t,name:"MuiPagination"}),n=a.boundaryCount,s=a.className,c=a.color,p=void 0===c?"standard":c,Z=a.count,b=a.defaultPage,y=a.disabled,k=a.getItemAriaLabel,j=void 0===k?x:k,C=a.hideNextButton,w=a.hidePrevButton,S=(a.onChange,a.page,a.renderItem),P=void 0===S?function(t){return(0,v.jsx)(u.Z,(0,r.Z)({},t))}:S,z=a.shape,M=void 0===z?"circular":z,N=a.showFirstButton,R=a.showLastButton,B=a.siblingCount,L=a.size,F=void 0===L?"medium":L,D=a.variant,I=void 0===D?"text":D,O=(0,o.Z)(a,g),W=(0,d.Z)((0,r.Z)((0,r.Z)({},a),{},{componentName:"Pagination"})).items,A=(0,r.Z)((0,r.Z)({},a),{},{boundaryCount:void 0===n?1:n,color:p,count:void 0===Z?1:Z,defaultPage:void 0===b?1:b,disabled:void 0!==y&&y,getItemAriaLabel:j,hideNextButton:void 0!==C&&C,hidePrevButton:void 0!==w&&w,renderItem:P,shape:M,showFirstButton:void 0!==N&&N,showLastButton:void 0!==R&&R,siblingCount:void 0===B?1:B,size:F,variant:I}),q=m(A);return(0,v.jsx)(h,(0,r.Z)((0,r.Z)({"aria-label":"pagination navigation",className:(0,i.default)(q.root,s),ownerState:A,ref:e},O),{},{children:(0,v.jsx)(f,{className:q.ul,ownerState:A,children:W.map(function(t,e){return(0,v.jsx)("li",{children:P((0,r.Z)((0,r.Z)({},t),{},{color:p,"aria-label":j(t.type,t.page,t.selected),shape:M,size:F,variant:I}))},e)})})}))});e.Z=Z},473447:function(t,e,a){"use strict";a.d(e,{X:function(){return n}});var r=a(554825),o=a(750022);function n(t){return(0,o.Z)("MuiPagination",t)}var i=(0,r.Z)("MuiPagination",["root","ul","outlined","text"]);e.Z=i},30961:function(t,e,a){"use strict";a.d(e,{Z:function(){return z}});var r=a(481936),o=a(957379),n=a(295649),i=a(827378),s=a(138944),l=a(361747),c=a(279955),d=a(576581),u=a(66354),p=a(34717),v=a(851914),g=a(167154),m=a(244100),h=a(914667),f=a(3498),x=a(824246),Z=(0,f.Z)((0,x.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),b=(0,f.Z)((0,x.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),y=a(137341),k=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],j=function(t,e){var a=t.ownerState;return[e.root,e[a.variant],e["size".concat((0,g.Z)(a.size))],"text"===a.variant&&e["text".concat((0,g.Z)(a.color))],"outlined"===a.variant&&e["outlined".concat((0,g.Z)(a.color))],"rounded"===a.shape&&e.rounded,"page"===a.type&&e.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&e.ellipsis,("previous"===a.type||"next"===a.type)&&e.previousNext,("first"===a.type||"last"===a.type)&&e.firstLast]},C=function(t){var e=t.classes,a=t.color,r=t.disabled,o=t.selected,n=t.size,i=t.shape,s=t.type,c=t.variant,d={root:["root","size".concat((0,g.Z)(n)),c,i,"standard"!==a&&"".concat(c).concat((0,g.Z)(a)),r&&"disabled",o&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,l.Z)(d,u.b,e)},w=(0,y.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:j})(function(t){var e=t.theme,a=t.ownerState;return(0,n.Z)((0,n.Z)((0,n.Z)({},e.typography.body2),{},(0,o.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto"},"&.".concat(u.Z.disabled),{opacity:(e.vars||e).palette.action.disabledOpacity}),"small"===a.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"}),"large"===a.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)})}),S=(0,y.ZP)(v.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:j})(function(t){var e,a,r=t.theme,i=t.ownerState;return(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},r.typography.body2),{},(a={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(r.vars||r).palette.text.primary},(0,o.Z)(a,"&.".concat(u.Z.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,o.Z)(a,"&.".concat(u.Z.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),(0,o.Z)(a,"transition",r.transitions.create(["color","background-color"],{duration:r.transitions.duration.short})),(0,o.Z)(a,"&:hover",{backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,o.Z)(a,"&.".concat(u.Z.selected),(e={backgroundColor:(r.vars||r).palette.action.selected,"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.action.selected," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,c.Fq)(r.palette.action.selected,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(r.vars||r).palette.action.selected}}},(0,o.Z)(e,"&.".concat(u.Z.focusVisible),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.action.selected," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.focusOpacity,"))"):(0,c.Fq)(r.palette.action.selected,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)}),(0,o.Z)(e,"&.".concat(u.Z.disabled),{opacity:1,color:(r.vars||r).palette.action.disabled,backgroundColor:(r.vars||r).palette.action.selected}),e)),a),"small"===i.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"}),"large"===i.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:r.typography.pxToRem(15)}),"rounded"===i.shape&&{borderRadius:(r.vars||r).shape.borderRadius})},function(t){var e=t.theme,a=t.ownerState;return(0,n.Z)((0,n.Z)({},"text"===a.variant&&(0,o.Z)({},"&.".concat(u.Z.selected),(0,n.Z)((0,n.Z)({},"standard"!==a.color&&(0,o.Z)({color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}},"&.".concat(u.Z.focusVisible),{backgroundColor:(e.vars||e).palette[a.color].dark})),{},(0,o.Z)({},"&.".concat(u.Z.disabled),{color:(e.vars||e).palette.action.disabled})))),"outlined"===a.variant&&(0,o.Z)({border:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(u.Z.selected),(0,n.Z)((0,n.Z)({},"standard"!==a.color&&(0,o.Z)({color:(e.vars||e).palette[a.color].main,border:"1px solid ".concat(e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / 0.5)"):(0,c.Fq)(e.palette[a.color].main,.5)),backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / ").concat(e.vars.palette.action.activatedOpacity,")"):(0,c.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,c.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(u.Z.focusVisible),{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,c.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)})),{},(0,o.Z)({},"&.".concat(u.Z.disabled),{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}))))}),P=(0,y.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(t,e){return e.icon}})(function(t){var e=t.theme,a=t.ownerState;return(0,n.Z)((0,n.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===a.size&&{fontSize:e.typography.pxToRem(18)}),"large"===a.size&&{fontSize:e.typography.pxToRem(22)})}),z=i.forwardRef(function(t,e){var a=(0,d.Z)({props:t,name:"MuiPaginationItem"}),o=a.className,i=a.color,l=a.component,c=a.components,u=void 0===c?{}:c,v=a.disabled,g=void 0!==v&&v,f=a.page,y=a.selected,j=a.shape,z=a.size,M=a.slots,N=void 0===M?{}:M,R=a.type,B=void 0===R?"page":R,L=a.variant,F=(0,r.Z)(a,k),D=(0,n.Z)((0,n.Z)({},a),{},{color:void 0===i?"standard":i,disabled:g,selected:void 0!==y&&y,shape:void 0===j?"circular":j,size:void 0===z?"medium":z,type:B,variant:void 0===L?"text":L}),I=(0,p.Z)(),O=C(D),W=("rtl"===I.direction?{previous:N.next||u.next||b,next:N.previous||u.previous||Z,last:N.first||u.first||m.Z,first:N.last||u.last||h.Z}:{previous:N.previous||u.previous||Z,next:N.next||u.next||b,first:N.first||u.first||m.Z,last:N.last||u.last||h.Z})[B];return"start-ellipsis"===B||"end-ellipsis"===B?(0,x.jsx)(w,{ref:e,ownerState:D,className:(0,s.default)(O.root,o),children:"…"}):(0,x.jsxs)(S,(0,n.Z)((0,n.Z)({ref:e,ownerState:D,component:l,disabled:g,className:(0,s.default)(O.root,o)},F),{},{children:["page"===B&&f,W?(0,x.jsx)(P,{as:W,ownerState:D,className:O.icon}):null]}))})},66354:function(t,e,a){"use strict";a.d(e,{b:function(){return n}});var r=a(554825),o=a(750022);function n(t){return(0,o.Z)("MuiPaginationItem",t)}var i=(0,r.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]);e.Z=i},244100:function(t,e,a){"use strict";a(827378);var r=a(3498),o=a(824246);e.Z=(0,r.Z)((0,o.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},914667:function(t,e,a){"use strict";a(827378);var r=a(3498),o=a(824246);e.Z=(0,r.Z)((0,o.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")},180363:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var r=a(295649),o=a(823315),n=a(25778),i=a(481936),s=a(379002),l=a.n(s),c=a(526269),d=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.boundaryCount,a=void 0===e?1:e,s=t.componentName,u=t.count,p=void 0===u?1:u,v=t.defaultPage,g=t.disabled,m=void 0!==g&&g,h=t.hideNextButton,f=t.hidePrevButton,x=t.onChange,Z=t.page,b=t.showFirstButton,y=t.showLastButton,k=t.siblingCount,j=void 0===k?1:k,C=(0,i.Z)(t,d),w=(0,c.Z)({controlled:Z,default:void 0===v?1:v,name:void 0===s?"usePagination":s,state:"page"}),S=(0,n.Z)(w,2),P=S[0],z=S[1],M=function(t,e){Z||z(e),x&&x(t,e)},N=function(t,e){return l()({length:e-t+1},function(e,a){return t+a})},R=N(1,Math.min(a,p)),B=N(Math.max(p-a+1,a+1),p),L=Math.max(Math.min(P-j,p-a-2*j-1),a+2),F=Math.min(Math.max(P+j,a+2*j+2),B.length>0?B[0]-2:p-1),D=[].concat((0,o.Z)(void 0!==b&&b?["first"]:[]),(0,o.Z)(void 0!==f&&f?[]:["previous"]),(0,o.Z)(R),(0,o.Z)(L>a+2?["start-ellipsis"]:a+1<p-a?[a+1]:[]),(0,o.Z)(N(L,F)),(0,o.Z)(F<p-a-1?["end-ellipsis"]:p-a>a?[p-a]:[]),(0,o.Z)(B),(0,o.Z)(void 0!==h&&h?[]:["next"]),(0,o.Z)(void 0!==y&&y?["last"]:[])),I=function(t){switch(t){case"first":return 1;case"previous":return P-1;case"next":return P+1;case"last":return p;default:return null}},O=D.map(function(t){return"number"==typeof t?{onClick:function(e){M(e,t)},type:"page",page:t,selected:t===P,disabled:m,"aria-current":t===P?"true":void 0}:{onClick:function(e){M(e,I(t))},type:t,page:I(t),selected:!1,disabled:m||-1===t.indexOf("ellipsis")&&("next"===t||"last"===t?P>=p:P<=1)}});return(0,r.Z)({items:O},C)}},120206:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return a(552364)}])},887628:function(t,e,a){"use strict";a.d(e,{Z:function(){return s}});var r=a(809118),o=a(954165),n=a(856351),i=a(640564);function s(t){return(0,r.Z)(t)||(0,o.Z)(t)||(0,n.Z)(t)||(0,i.Z)()}}},function(t){t.O(0,[75760,36634,39152,35408,28292,41253,46888,21829,81125,68256,96387,46324,70116,73793,16402,86277,76822,72211,20399,49774,92888,40179],function(){return t(t.s=120206)}),_N_E=t.O()}]);