"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41253],{657611:function(t,e,n){n.d(e,{Z:function(){return h}});var o,r,a,i=n(188038),c=n.n(i),s=n(686677),u=n(260707),l=n(543375),p=n(988858),d=n(824246),m="https://mui.com";function h(t){var e=(0,l.useTranslate)(),n=t.card,i=void 0===n?"/static/social-previews/default-preview.jpg":n,h=t.children,v=t.description,f=void 0===v?e("strapline"):v,g=t.disableAlternateLocale,Z=t.largeCard,y=t.title,x=void 0===y?e("headTitle"):y,b=t.type,w=(0,l.useUserLanguage)(),S=(0,s.useRouter)(),j=(0,p.ln)(S.asPath).canonicalAs,C=i.startsWith("http")?i:"".concat(m).concat(i);return(0,d.jsxs)(c(),{children:[(0,d.jsx)("title",{children:x}),(0,d.jsx)("meta",{name:"description",content:f}),(0,d.jsx)("meta",{name:"twitter:card",content:void 0===Z||Z?"summary_large_image":"summary"}),o||(o=(0,d.jsx)("meta",{name:"twitter:site",content:"@MUI_hq"})),(0,d.jsx)("meta",{name:"twitter:title",content:x}),(0,d.jsx)("meta",{name:"twitter:description",content:f}),(0,d.jsx)("meta",{name:"twitter:image",content:C}),(0,d.jsx)("meta",{property:"og:type",content:void 0===b?"website":b}),(0,d.jsx)("meta",{property:"og:title",content:x}),(0,d.jsx)("meta",{property:"og:url",content:"".concat(m).concat(S.asPath)}),(0,d.jsx)("meta",{property:"og:description",content:f}),(0,d.jsx)("meta",{property:"og:image",content:C}),r||(r=(0,d.jsx)("meta",{property:"og:ttl",content:"604800"})),(0,d.jsx)("meta",{name:"docsearch:language",content:w}),a||(a=(0,d.jsx)("meta",{name:"docsearch:version",content:"master"})),void 0!==g&&g?null:u.LANGUAGES_SSR.map(function(t){return(0,d.jsx)("link",{rel:"alternate",href:"https://mui.com".concat("en"===t?"":"/".concat(t)).concat(j),hrefLang:t},t)}),h]})}},230542:function(t,e,n){var o=n(731548),r=n(284137),a=(0,n(860993).Z)(),i=(0,o.Z)({defaultTheme:a,defaultClassName:"MuiBox-root",generateClassName:r.Z.generate});e.Z=i},404934:function(t,e,n){n.d(e,{d1:function(){return d},dy:function(){return p}});var o=n(25778),r=n(295649),a=n(74968),i=n.n(a),c=n(827378),s=n(576581),u=n(955408),l=n(824246),p=function(t,e){return(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!t.vars&&{colorScheme:t.palette.mode})},d=function(t){return(0,r.Z)((0,r.Z)({color:(t.vars||t).palette.text.primary},t.typography.body1),{},{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}})},m=function(t){var e,n,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c={};a&&t.colorSchemes&&i()(t.colorSchemes).forEach(function(e){var n,r=(0,o.Z)(e,2),a=r[0],i=r[1];c[t.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:null===(n=i.palette)||void 0===n?void 0:n.mode}});var s=(0,r.Z)({html:p(t,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:(0,r.Z)((0,r.Z)({margin:0},d(t)),{},{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},c),u=null===(e=t.components)||void 0===e?void 0:null===(n=e.MuiCssBaseline)||void 0===n?void 0:n.styleOverrides;return u&&(s=[s,u]),s};e.ZP=function(t){var e=(0,s.Z)({props:t,name:"MuiCssBaseline"}),n=e.children,o=e.enableColorScheme,r=void 0!==o&&o;return(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(u.Z,{styles:function(t){return m(t,r)}}),n]})}},955408:function(t,e,n){var o=n(295649);n(827378);var r=n(435255),a=n(723014),i=n(824246);e.Z=function(t){return(0,i.jsx)(r.Z,(0,o.Z)((0,o.Z)({},t),{},{defaultTheme:a.Z}))}},291568:function(t,e,n){n.d(e,{Z:function(){return W}});var o=n(823315),r=n(25778),a=n(481936),i=n(957379),c=n(295649),s=n(696138),u=n.n(s),l=n(374338),p=n.n(l),d=n(827378),m=n(138944),h=n(361747),v=n(167154),f=n(137341),g=n(576581),Z=n(263729),y=n(919970),x=n(439827),b=n(710706),w=n(406583),S=n(279955),j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=function(t){var e,n=t.theme,o=t.ownerState,r=j[e=o.color]||e,a=(0,w.DW)(n,"palette.".concat(r),!1)||o.color,i=(0,w.DW)(n,"palette.".concat(r,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,S.Fq)(a,.4)},k=n(824246),B=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],M=function(t){var e=t.classes,n=t.component,o=t.focusVisible,r=t.underline,a={root:["root","underline".concat((0,v.Z)(r)),"button"===n&&"button",o&&"focusVisible"]};return(0,h.Z)(a,b.w,e)},N=(0,f.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e["underline".concat((0,v.Z)(n.underline))],"button"===n.component&&e.button]}})(function(t){var e=t.theme,n=t.ownerState;return(0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({},"none"===n.underline&&{textDecoration:"none"}),"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}}),"always"===n.underline&&(0,c.Z)((0,c.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:C({theme:e,ownerState:n})}),{},{"&:hover":{textDecorationColor:"inherit"}})),"button"===n.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.Z.focusVisible),{outline:"auto"}))}),W=d.forwardRef(function(t,e){var n=(0,g.Z)({props:t,name:"MuiLink"}),i=n.className,s=n.color,l=void 0===s?"primary":s,h=n.component,v=void 0===h?"a":h,f=n.onBlur,x=n.onFocus,b=n.TypographyClasses,w=n.underline,S=n.variant,C=void 0===S?"inherit":S,W=n.sx,P=(0,a.Z)(n,B),T=(0,Z.Z)(),R=T.isFocusVisibleRef,A=T.onBlur,F=T.onFocus,L=T.ref,_=d.useState(!1),D=(0,r.Z)(_,2),z=D[0],V=D[1],E=(0,y.Z)(e,L),G=(0,c.Z)((0,c.Z)({},n),{},{color:l,component:v,focusVisible:z,underline:void 0===w?"always":w,variant:C}),O=M(G);return(0,k.jsx)(N,(0,c.Z)({color:l,className:(0,m.default)(O.root,i),classes:b,component:v,onBlur:function(t){A(t),!1===R.current&&V(!1),f&&f(t)},onFocus:function(t){F(t),!0===R.current&&V(!0),x&&x(t)},ref:E,ownerState:G,variant:C,sx:[].concat((0,o.Z)(u()(j).includes(l)?[]:[{color:l}]),(0,o.Z)(p()(W)?W:[W]))},P))})},710706:function(t,e,n){n.d(e,{w:function(){return a}});var o=n(554825),r=n(750022);function a(t){return(0,r.Z)("MuiLink",t)}var i=(0,o.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);e.Z=i},439827:function(t,e,n){var o=n(481936),r=n(295649),a=n(827378),i=n(138944),c=n(533259),s=n(361747),u=n(137341),l=n(576581),p=n(167154),d=n(706191),m=n(824246),h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=function(t){var e=t.align,n=t.gutterBottom,o=t.noWrap,r=t.paragraph,a=t.variant,i=t.classes,c={root:["root",a,"inherit"!==t.align&&"align".concat((0,p.Z)(e)),n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,s.Z)(c,d.f,i)},f=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e["align".concat((0,p.Z)(n.align))],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(function(t){var e=t.theme,n=t.ownerState;return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({margin:0},n.variant&&e.typography[n.variant]),"inherit"!==n.align&&{textAlign:n.align}),n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),n.gutterBottom&&{marginBottom:"0.35em"}),n.paragraph&&{marginBottom:16})}),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=a.forwardRef(function(t,e){var n,a=(0,l.Z)({props:t,name:"MuiTypography"}),s=Z[n=a.color]||n,u=(0,c.Z)((0,r.Z)((0,r.Z)({},a),{},{color:s})),p=u.align,d=u.className,y=u.component,x=u.gutterBottom,b=u.noWrap,w=u.paragraph,S=void 0!==w&&w,j=u.variant,C=void 0===j?"body1":j,k=u.variantMapping,B=void 0===k?g:k,M=(0,o.Z)(u,h),N=(0,r.Z)((0,r.Z)({},u),{},{align:void 0===p?"inherit":p,color:s,className:d,component:y,gutterBottom:void 0!==x&&x,noWrap:void 0!==b&&b,paragraph:S,variant:C,variantMapping:B}),W=y||(S?"p":B[C]||g[C])||"span",P=v(N);return(0,m.jsx)(f,(0,r.Z)({as:W,ref:e,ownerState:N,className:(0,i.default)(P.root,d)},M))});e.Z=y},706191:function(t,e,n){n.d(e,{f:function(){return a}});var o=n(554825),r=n(750022);function a(t){return(0,r.Z)("MuiTypography",t)}var i=(0,o.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);e.Z=i},435255:function(t,e,n){n.d(e,{Z:function(){return c}});var o=n(696138),r=n.n(o);n(827378);var a=n(910043),i=n(824246);function c(t){var e=t.styles,n=t.defaultTheme,o=void 0===n?{}:n;return(0,i.jsx)(a.Global,{styles:"function"==typeof e?function(t){return e(null==t||0===r()(t).length?o:t)}:e})}},731548:function(t,e,n){n.d(e,{Z:function(){return m}});var o=n(295649),r=n(481936),a=n(827378),i=n(138944),c=n(162256),s=n(384496),u=n(533259),l=n(988739),p=n(824246),d=["className","component"];function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.defaultTheme,n=t.defaultClassName,m=void 0===n?"MuiBox-root":n,h=t.generateClassName,v=(0,c.ZP)("div",{shouldForwardProp:function(t){return"theme"!==t&&"sx"!==t&&"as"!==t}})(s.Z);return a.forwardRef(function(t,n){var a=(0,l.Z)(e),c=(0,u.Z)(t),s=c.className,f=c.component,g=(0,r.Z)(c,d);return(0,p.jsx)(v,(0,o.Z)({as:void 0===f?"div":f,ref:n,className:(0,i.default)(s,h?h(m):m),theme:a},g))})}},533259:function(t,e,n){n.d(e,{Z:function(){return h}});var o=n(295649),r=n(823315),a=n(481936),i=n(696138),c=n.n(i),s=n(374338),u=n.n(s),l=n(653578),p=n(832739),d=["sx"],m=function(t){var e,n,o={systemProps:{},otherProps:{}},r=null!==(e=null==t?void 0:null===(n=t.theme)||void 0===n?void 0:n.unstable_sxConfig)&&void 0!==e?e:p.Z;return c()(t).forEach(function(e){r[e]?o.systemProps[e]=t[e]:o.otherProps[e]=t[e]}),o};function h(t){var e,n=t.sx,i=m((0,a.Z)(t,d)),c=i.systemProps,s=i.otherProps;return e=u()(n)?[c].concat((0,r.Z)(n)):"function"==typeof n?function(){var t=n.apply(void 0,arguments);return(0,l.P)(t)?(0,o.Z)((0,o.Z)({},c),t):c}:(0,o.Z)((0,o.Z)({},c),n),(0,o.Z)((0,o.Z)({},s),{},{sx:e})}}}]);