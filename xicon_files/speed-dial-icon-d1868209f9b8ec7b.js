(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51368],{667442:function(e,n,o){var s={"./speed-dial-icon-pt.json":188395,"./speed-dial-icon-zh.json":120164,"./speed-dial-icon.json":180073,"docs/translations/api-docs/speed-dial-icon/speed-dial-icon-pt.json":188395,"docs/translations/api-docs/speed-dial-icon/speed-dial-icon-zh.json":120164,"docs/translations/api-docs/speed-dial-icon/speed-dial-icon.json":180073};function t(e){return o(i(e))}function i(e){if(!o.o(s,e)){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}t.keys=function(){return Object.keys(s)},t.resolve=i,e.exports=t,t.id=667442},927171:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return c}}),o(827378);var s=o(538648),t=o(689176),i=JSON.parse('{"props":{"classes":{"type":{"name":"object"}},"icon":{"type":{"name":"node"}},"openIcon":{"type":{"name":"node"}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"}}},"name":"SpeedDialIcon","styles":{"classes":["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"],"globalClasses":{},"name":"MuiSpeedDialIcon"},"spread":true,"forwardsRefTo":"HTMLSpanElement","filename":"/packages/mui-material/src/SpeedDialIcon/SpeedDialIcon.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-speed-dial/\\">Speed Dial</a></li></ul>","cssComponent":false}'),a=o(824246);function c(e){var n=e.descriptions,o=e.pageContent;return(0,a.jsx)(s.Z,{descriptions:n,pageContent:o})}c.getInitialProps=function(){var e=o(667442);return{descriptions:(0,t.Z)(e),pageContent:i}}},538648:function(e,n,o){"use strict";o.d(n,{Z:function(){return M}});var s,t,i,a,c,r,p,d,l,h,m,u,f,x,j,S=o(823315),y=o(696138),g=o.n(y),N=o(827378),I=o(439827),v=o(543375),b=o(551159),_=o(815398),T=o(286277),D=o(732127),w=o(745931),O=o(824246);function C(e){var n=e.componentStyles,o=e.classDescriptions,s=(0,v.useTranslate)();return(0,O.jsxs)("table",{children:[(0,O.jsx)("thead",{children:(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{align:"left",children:s("api-docs.ruleName")}),(0,O.jsx)("th",{align:"left",children:s("api-docs.globalClass")}),(0,O.jsx)("th",{align:"left",children:s("api-docs.description")})]})}),(0,O.jsx)("tbody",{children:n.classes.map(function(e){return(0,O.jsxs)("tr",{children:[(0,O.jsx)("td",{align:"left",children:(0,O.jsx)("span",{className:"prop-name",children:e})}),(0,O.jsx)("td",{align:"left",children:(0,O.jsxs)("span",{className:"prop-name",children:[".",n.globalClasses[e]||"".concat(n.name,"-").concat(e)]})}),(0,O.jsx)("td",{align:"left",dangerouslySetInnerHTML:{__html:o[e]&&o[e].description.replace(/{{conditions}}/,o[e].conditions).replace(/{{nodeName}}/,o[e].nodeName)}})]},e)})})]})}function H(e,n){var o={demos:e("api-docs.demos"),import:e("api-docs.import"),"component-name":e("api-docs.componentName"),props:e("api-docs.props"),inheritance:e("api-docs.inheritance"),css:"CSS"};if(!o.hasOwnProperty(n))throw TypeError("Unable to translate header '".concat(n,"'. Did you mean one of '").concat(g()(o).join("', '"),"'"));return o[n]||n}function E(e){var n=e.hash,o=e.level,t=(0,v.useTranslate)();return(0,O.jsxs)(void 0===o?"h2":o,{id:n,children:[H(t,n),(0,O.jsx)("a",{"aria-labelledby":n,className:"anchor-link",href:"#".concat(n),tabIndex:-1,children:s||(s=(0,O.jsx)("svg",{children:(0,O.jsx)("use",{xlinkHref:"#anchor-link-icon"})}))})]})}function M(e){var n=e.descriptions,o=e.disableAd,s=void 0!==o&&o,y=e.pageContent,M=(0,v.useTranslate)(),L=(0,v.useUserLanguage)(),k=y.cssComponent,A=y.demos,F=y.filename,P=y.forwardsRefTo,Z=y.inheritance,B=y.name,z=y.props,J=y.spread,R=y.styles,U=n[L],W=U.componentDescription,V=U.componentDescriptionToc,X=U.classDescriptions,$=U.propDescriptions,q=M("api-docs.pageDescription").replace(/{{name}}/,B),G=F.replace(/\/packages\/mui(-(.+?))?\/src/,function(e,n,o){return"@mui/".concat(o)}).replace(/\/([^/]+)\/\1\.(js|tsx)$/,""),K=F.replace(".js",".d.ts");function Q(e){return{text:H(M,e),hash:e,children:(0,S.Z)("props"===e&&Z?[{text:M("api-docs.inheritance"),hash:"inheritance",children:[]}]:[])}}var Y=[Q("demos"),Q("import")].concat((0,S.Z)(void 0===V?[]:V),[R.name&&Q("component-name"),Q("props"),R.classes.length>0&&Q("css")]).filter(Boolean),ee=M("api-docs.refRootElement");null==P&&(ee=M("api-docs.refNotHeld"));var en="";J&&(en=M("api-docs.spreadHint").replace(/{{spreadHintElement}}/,Z?'<a href="'.concat(Z.pathname,'">').concat(Z.component,"</a>"):M("api-docs.nativeElement")));var eo="";return Z&&"Transition"===Z.component&&(eo=M("api-docs.inheritanceSuffixTransition")),(0,O.jsxs)(D.Z,{description:q,disableAd:s,disableToc:!1,location:K,title:"".concat(B," API"),toc:Y,children:[(0,O.jsxs)(T.default,{children:[(0,O.jsxs)("h1",{children:[B," API"]}),(0,O.jsxs)(I.Z,{variant:"h5",component:"p",className:"description".concat(s?"":" ad"),gutterBottom:!0,children:[q,s?null:t||(t=(0,O.jsx)(w.Z,{}))]}),i||(i=(0,O.jsx)(E,{hash:"demos"})),(0,O.jsx)("div",{className:"MuiCallout-root MuiCallout-info",dangerouslySetInnerHTML:{__html:"<p>For examples and details on the usage of this React component, visit the component demo pages:</p>\n              ".concat(A)}}),a||(a=(0,O.jsx)(E,{hash:"import"})),(0,O.jsx)(_.default,{code:"\nimport ".concat(B," from '").concat(G,"/").concat(B,"';\n// ").concat(M("or"),"\nimport { ").concat(B," } from '").concat(G,"';"),language:"jsx"}),(0,O.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.importDifference")}}),W?(0,O.jsxs)(N.Fragment,{children:[c||(c=(0,O.jsx)("br",{})),r||(r=(0,O.jsx)("br",{})),(0,O.jsx)("span",{dangerouslySetInnerHTML:{__html:W}})]}):null,R.name&&(0,O.jsxs)(N.Fragment,{children:[p||(p=(0,O.jsx)(E,{hash:"component-name"})),(0,O.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.styleOverrides").replace(/{{componentStyles\.name}}/,R.name)}})]}),d||(d=(0,O.jsx)(E,{hash:"props"})),(0,O.jsx)("p",{dangerouslySetInnerHTML:{__html:en}}),(0,O.jsx)(b.Z,{properties:z,propertiesDescriptions:$}),l||(l=(0,O.jsx)("br",{})),k&&(0,O.jsxs)(N.Fragment,{children:[(0,O.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.cssComponent").replace(/{{name}}/,B)}}),h||(h=(0,O.jsx)("br",{})),m||(m=(0,O.jsx)("br",{}))]}),(0,O.jsx)("span",{dangerouslySetInnerHTML:{__html:ee}}),Z&&(0,O.jsxs)(N.Fragment,{children:[u||(u=(0,O.jsx)(E,{hash:"inheritance",level:"h3"})),(0,O.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.inheritanceDescription").replace(/{{component}}/,Z.component).replace(/{{pathname}}/,Z.pathname).replace(/{{suffix}}/,eo).replace(/{{componentName}}/,B)}})]}),g()(R.classes).length?(0,O.jsxs)(N.Fragment,{children:[f||(f=(0,O.jsx)(E,{hash:"css"})),(0,O.jsx)(C,{componentStyles:R,classDescriptions:X}),x||(x=(0,O.jsx)("br",{})),(0,O.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.overrideStyles")}}),(0,O.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.overrideStylesStyledComponent")}})]}):null]}),(0,O.jsx)("svg",{style:{display:"none"},xmlns:"http://www.w3.org/2000/svg",children:j||(j=(0,O.jsx)("symbol",{id:"anchor-link-icon",viewBox:"0 0 16 16",children:(0,O.jsx)("path",{d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})}))})]})}},886593:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/speed-dial-icon",function(){return o(927171)}])},188395:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"classes":"Sobrescreve ou extende os estilos aplicados para o componente. Veja a <a href=\\"#css\\">API CSS</a> abaixo para maiores detalhes.","icon":"The icon element.","openIcon":"The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open.","sx":"The system prop that allows defining system overrides as well as additional CSS styles. See the <a href=\\"/system/getting-started/the-sx-prop/\\">`sx` page</a> for more details."},"classDescriptions":{"root":{"description":"Estilos aplicados ao elemento raiz."},"icon":{"description":"Estilos aplicados a {{nodeName}}.","nodeName":"the icon component"},"iconOpen":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"the icon component","conditions":"<code>open={true}</code>"},"iconWithOpenIconOpen":{"description":"Styles applied to {{nodeName}} when {{conditions}}.","nodeName":"the icon","conditions":"an <code>openIcon</code> is provided and if <code>open={true}</code>"},"openIcon":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"the `openIcon`","conditions":"fornecido"},"openIconOpen":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"the `openIcon`","conditions":"provided and if <code>open={true}</code>"}}}')},120164:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"classes":"Override or extend the styles applied to the component. See <a href=\\"#css\\">CSS API</a> below for more details.","icon":"The icon element.","openIcon":"The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open.","sx":"The system prop that allows defining system overrides as well as additional CSS styles. See the <a href=\\"/system/getting-started/the-sx-prop/\\">`sx` page</a> for more details."},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"icon":{"description":"Styles applied to {{nodeName}}.","nodeName":"the icon component"},"iconOpen":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the icon component","conditions":"<code>open={true}</code>"},"iconWithOpenIconOpen":{"description":"Styles applied to {{nodeName}} when {{conditions}}.","nodeName":"the icon","conditions":"an <code>openIcon</code> is provided and if <code>open={true}</code>"},"openIcon":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the `openIcon`","conditions":"已提供"},"openIconOpen":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the `openIcon`","conditions":"provided and if <code>open={true}</code>"}}}')},180073:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"classes":"Override or extend the styles applied to the component. See <a href=\\"#css\\">CSS API</a> below for more details.","icon":"The icon to display.","openIcon":"The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open.","sx":"The system prop that allows defining system overrides as well as additional CSS styles. See the <a href=\\"/system/getting-started/the-sx-prop/\\">`sx` page</a> for more details."},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"icon":{"description":"Styles applied to {{nodeName}}.","nodeName":"the icon component"},"iconOpen":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the icon component","conditions":"<code>open={true}</code>"},"iconWithOpenIconOpen":{"description":"Styles applied to {{nodeName}} when {{conditions}}.","nodeName":"the icon","conditions":"an <code>openIcon</code> is provided and if <code>open={true}</code>"},"openIcon":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the `openIcon`","conditions":"provided"},"openIconOpen":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the `openIcon`","conditions":"provided and if <code>open={true}</code>"}}}')}},function(e){e.O(0,[75760,36634,39152,35408,85992,59771,41253,46888,21829,81125,68256,96387,46324,70116,73793,16402,86277,49983,18956,58156,93893,49774,92888,40179],function(){return e(e.s=886593)}),_N_E=e.O()}]);