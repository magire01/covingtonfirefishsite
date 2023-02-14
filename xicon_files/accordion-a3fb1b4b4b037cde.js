(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87349],{421394:function(e,o,n){var t={"./accordion-pt.json":816287,"./accordion-zh.json":715788,"./accordion.json":749106,"docs/translations/api-docs/accordion/accordion-pt.json":816287,"docs/translations/api-docs/accordion/accordion-zh.json":715788,"docs/translations/api-docs/accordion/accordion.json":749106};function s(e){return n(a(e))}function a(e){if(!n.o(t,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}s.keys=function(){return Object.keys(t)},s.resolve=a,e.exports=s,s.id=421394},678321:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return r}}),n(827378);var t=n(538648),s=n(689176),a=JSON.parse('{"props":{"children":{"type":{"name":"custom","description":"node"},"required":true},"classes":{"type":{"name":"object"}},"defaultExpanded":{"type":{"name":"bool"},"default":"false"},"disabled":{"type":{"name":"bool"},"default":"false"},"disableGutters":{"type":{"name":"bool"},"default":"false"},"expanded":{"type":{"name":"bool"}},"onChange":{"type":{"name":"func"}},"square":{"type":{"name":"bool"},"default":"false"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"}},"TransitionComponent":{"type":{"name":"elementType"},"default":"Collapse"},"TransitionProps":{"type":{"name":"object"}}},"name":"Accordion","styles":{"classes":["root","rounded","expanded","disabled","gutters","region"],"globalClasses":{"expanded":"Mui-expanded","disabled":"Mui-disabled"},"name":"MuiAccordion"},"spread":true,"forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/Accordion/Accordion.js","inheritance":{"component":"Paper","pathname":"/material-ui/api/paper/"},"demos":"<ul><li><a href=\\"/material-ui/react-accordion/\\">Accordion</a></li></ul>","cssComponent":false}'),i=n(824246);function r(e){var o=e.descriptions,n=e.pageContent;return(0,i.jsx)(t.Z,{descriptions:o,pageContent:n})}r.getInitialProps=function(){var e=n(421394);return{descriptions:(0,s.Z)(e),pageContent:a}}},538648:function(e,o,n){"use strict";n.d(o,{Z:function(){return M}});var t,s,a,i,r,d,c,l,p,m,u,h,x,f,g,b=n(823315),j=n(696138),y=n.n(j),v=n(827378),S=n(439827),N=n(543375),T=n(551159),C=n(815398),_=n(286277),w=n(732127),D=n(745931),I=n(824246);function E(e){var o=e.componentStyles,n=e.classDescriptions,t=(0,N.useTranslate)();return(0,I.jsxs)("table",{children:[(0,I.jsx)("thead",{children:(0,I.jsxs)("tr",{children:[(0,I.jsx)("th",{align:"left",children:t("api-docs.ruleName")}),(0,I.jsx)("th",{align:"left",children:t("api-docs.globalClass")}),(0,I.jsx)("th",{align:"left",children:t("api-docs.description")})]})}),(0,I.jsx)("tbody",{children:o.classes.map(function(e){return(0,I.jsxs)("tr",{children:[(0,I.jsx)("td",{align:"left",children:(0,I.jsx)("span",{className:"prop-name",children:e})}),(0,I.jsx)("td",{align:"left",children:(0,I.jsxs)("span",{className:"prop-name",children:[".",o.globalClasses[e]||"".concat(o.name,"-").concat(e)]})}),(0,I.jsx)("td",{align:"left",dangerouslySetInnerHTML:{__html:n[e]&&n[e].description.replace(/{{conditions}}/,n[e].conditions).replace(/{{nodeName}}/,n[e].nodeName)}})]},e)})})]})}function P(e,o){var n={demos:e("api-docs.demos"),import:e("api-docs.import"),"component-name":e("api-docs.componentName"),props:e("api-docs.props"),inheritance:e("api-docs.inheritance"),css:"CSS"};if(!n.hasOwnProperty(o))throw TypeError("Unable to translate header '".concat(o,"'. Did you mean one of '").concat(y()(n).join("', '"),"'"));return n[o]||o}function H(e){var o=e.hash,n=e.level,s=(0,N.useTranslate)();return(0,I.jsxs)(void 0===n?"h2":n,{id:o,children:[P(s,o),(0,I.jsx)("a",{"aria-labelledby":o,className:"anchor-link",href:"#".concat(o),tabIndex:-1,children:t||(t=(0,I.jsx)("svg",{children:(0,I.jsx)("use",{xlinkHref:"#anchor-link-icon"})}))})]})}function M(e){var o=e.descriptions,n=e.disableAd,t=void 0!==n&&n,j=e.pageContent,M=(0,N.useTranslate)(),k=(0,N.useUserLanguage)(),A=j.cssComponent,O=j.demos,q=j.filename,L=j.forwardsRefTo,F=j.inheritance,z=j.name,Z=j.props,G=j.spread,B=j.styles,R=o[k],J=R.componentDescription,U=R.componentDescriptionToc,V=R.classDescriptions,W=R.propDescriptions,X=M("api-docs.pageDescription").replace(/{{name}}/,z),$=q.replace(/\/packages\/mui(-(.+?))?\/src/,function(e,o,n){return"@mui/".concat(n)}).replace(/\/([^/]+)\/\1\.(js|tsx)$/,""),K=q.replace(".js",".d.ts");function Q(e){return{text:P(M,e),hash:e,children:(0,b.Z)("props"===e&&F?[{text:M("api-docs.inheritance"),hash:"inheritance",children:[]}]:[])}}var Y=[Q("demos"),Q("import")].concat((0,b.Z)(void 0===U?[]:U),[B.name&&Q("component-name"),Q("props"),B.classes.length>0&&Q("css")]).filter(Boolean),ee=M("api-docs.refRootElement");null==L&&(ee=M("api-docs.refNotHeld"));var eo="";G&&(eo=M("api-docs.spreadHint").replace(/{{spreadHintElement}}/,F?'<a href="'.concat(F.pathname,'">').concat(F.component,"</a>"):M("api-docs.nativeElement")));var en="";return F&&"Transition"===F.component&&(en=M("api-docs.inheritanceSuffixTransition")),(0,I.jsxs)(w.Z,{description:X,disableAd:t,disableToc:!1,location:K,title:"".concat(z," API"),toc:Y,children:[(0,I.jsxs)(_.default,{children:[(0,I.jsxs)("h1",{children:[z," API"]}),(0,I.jsxs)(S.Z,{variant:"h5",component:"p",className:"description".concat(t?"":" ad"),gutterBottom:!0,children:[X,t?null:s||(s=(0,I.jsx)(D.Z,{}))]}),a||(a=(0,I.jsx)(H,{hash:"demos"})),(0,I.jsx)("div",{className:"MuiCallout-root MuiCallout-info",dangerouslySetInnerHTML:{__html:"<p>For examples and details on the usage of this React component, visit the component demo pages:</p>\n              ".concat(O)}}),i||(i=(0,I.jsx)(H,{hash:"import"})),(0,I.jsx)(C.default,{code:"\nimport ".concat(z," from '").concat($,"/").concat(z,"';\n// ").concat(M("or"),"\nimport { ").concat(z," } from '").concat($,"';"),language:"jsx"}),(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.importDifference")}}),J?(0,I.jsxs)(v.Fragment,{children:[r||(r=(0,I.jsx)("br",{})),d||(d=(0,I.jsx)("br",{})),(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:J}})]}):null,B.name&&(0,I.jsxs)(v.Fragment,{children:[c||(c=(0,I.jsx)(H,{hash:"component-name"})),(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.styleOverrides").replace(/{{componentStyles\.name}}/,B.name)}})]}),l||(l=(0,I.jsx)(H,{hash:"props"})),(0,I.jsx)("p",{dangerouslySetInnerHTML:{__html:eo}}),(0,I.jsx)(T.Z,{properties:Z,propertiesDescriptions:W}),p||(p=(0,I.jsx)("br",{})),A&&(0,I.jsxs)(v.Fragment,{children:[(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.cssComponent").replace(/{{name}}/,z)}}),m||(m=(0,I.jsx)("br",{})),u||(u=(0,I.jsx)("br",{}))]}),(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:ee}}),F&&(0,I.jsxs)(v.Fragment,{children:[h||(h=(0,I.jsx)(H,{hash:"inheritance",level:"h3"})),(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.inheritanceDescription").replace(/{{component}}/,F.component).replace(/{{pathname}}/,F.pathname).replace(/{{suffix}}/,en).replace(/{{componentName}}/,z)}})]}),y()(B.classes).length?(0,I.jsxs)(v.Fragment,{children:[x||(x=(0,I.jsx)(H,{hash:"css"})),(0,I.jsx)(E,{componentStyles:B,classDescriptions:V}),f||(f=(0,I.jsx)("br",{})),(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.overrideStyles")}}),(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:M("api-docs.overrideStylesStyledComponent")}})]}):null]}),(0,I.jsx)("svg",{style:{display:"none"},xmlns:"http://www.w3.org/2000/svg",children:g||(g=(0,I.jsx)("symbol",{id:"anchor-link-icon",viewBox:"0 0 16 16",children:(0,I.jsx)("path",{d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})}))})]})}},634903:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/accordion",function(){return n(678321)}])},816287:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":"O conte\xfado do componente.","classes":"Sobrescreve ou extende os estilos aplicados para o componente. Veja a <a href=\\"#css\\">API CSS</a> abaixo para maiores detalhes.","defaultExpanded":"Se <code>true</code>, expande o acorde\xe3o por padr\xe3o.","disabled":"Se <code>true</code>, o componente est\xe1 desabilitado.","disableGutters":"Se <code>verdadeiro</code>, ele remove a margem entre dois itens expandidos de acordo e o aumento de altura.","expanded":"Se <code>true</code>, expande o acorde\xe3o, caso contr\xe1rio, comprime ele. Configurar esta propriedade permite controle sobre o acorde\xe3o.","onChange":"Callback acionado quando o estado expandido/comprimido \xe9 alterado.<br><br><strong>Assinatura:</strong><br><code>function(event: object, expanded: boolean) =&gt; void</code><br><em>evento:</em> A fonte do evento de callback. <strong>Aten\xe7\xe3o</strong>: Este evento \xe9 gen\xe9rico e n\xe3o um evento de mudan\xe7a.<br><em>expandido:</em> O estado <code>expandido</code> do acorde\xe3o.","square":"Se <code>true</code>, cantos arredondados s\xe3o desabilitados.","sx":"The system prop that allows defining system overrides as well as additional CSS styles. See the <a href=\\"/system/getting-started/the-sx-prop/\\">`sx` page</a> for more details.","TransitionComponent":"The component used for the transition. <a href=\\"/material-ui/transitions/#transitioncomponent-prop\\">Follow this guide</a> to learn more about the requirements for this component.","TransitionProps":"Propriedades aplicadas ao elemento de transi\xe7\xe3o. Por padr\xe3o, o elemento \xe9 baseado neste componente <a href=\\"http://reactcommunity.org/react-transition-group/transition\\"><code>Transition</code></a>."},"classDescriptions":{"root":{"description":"Estilos aplicados ao elemento raiz."},"rounded":{"description":"Estilos aplicados em {{nodeName}} a menos que {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>square={true}</code>"},"expanded":{"description":"Pseudo-class aplicada a {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>expanded={true}</code>"},"disabled":{"description":"Pseudo-class aplicada a {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>disabled={true}</code>"},"gutters":{"description":"Estilos aplicados em {{nodeName}} a menos que {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>disableGutters={true}</code>"},"region":{"description":"Estilos aplicados para {{nodeName}}, {{conditions}}.","nodeName":"o elemento regi\xe3o","conditions":"o cont\xeainer dos elementos filhos"}}}')},715788:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":"组件的内容","classes":"覆盖或扩展应用于组件的样式。请参阅下面 <a href=\\"#css\\">CSS API</a> 了解更多详情。","defaultExpanded":"如果 <code>true</code>, 自动打开折叠面板。","disabled":"如果被设置为 <code>true</code>，那么该组件将会被禁用。","disableGutters":"如果 <code>true</code>, 它会移除两个打开的折叠面板的边距和增加的高度。","expanded":"如果 <code>true</code>, 则打开折叠面板, 否则关闭折叠面板。 设置此属性允许控制折叠面板.","onChange":"Callback fired when the expand/collapse state is changed.<br><br><strong>Signature:</strong><br><code>function(event: object, expanded: boolean) =&gt; void</code><br><em>event:</em> The event source of the callback. <strong>Warning</strong>: This is a generic event not a change event.<br><em>expanded:</em> The <code>expanded</code> state of the accordion.","square":"如果 <code>true</code>, 圆角将被禁用。","sx":"The system prop that allows defining system overrides as well as additional CSS styles. See the <a href=\\"/system/getting-started/the-sx-prop/\\">`sx` page</a> for more details.","TransitionComponent":"The component used for the transition. <a href=\\"/material-ui/transitions/#transitioncomponent-prop\\">Follow this guide</a> to learn more about the requirements for this component.","TransitionProps":"Props applied to the transition element. By default, the element is based on this <a href=\\"http://reactcommunity.org/react-transition-group/transition/\\"><code>Transition</code></a> component."},"classDescriptions":{"root":{"description":"用于根元素的样式。"},"rounded":{"description":"除非 {{conditions}}，样式适用于 {{nodeName}} 。","nodeName":"根元素","conditions":"<code>square={true}</code>"},"expanded":{"description":"如果满足{{conditions}}，状态类将适用于{{nodeName}}","nodeName":"根元素","conditions":"<code>expanded={true}</code>"},"disabled":{"description":"如果满足{{conditions}}，状态类将适用于{{nodeName}}","nodeName":"根元素","conditions":"<code>disabled={true}</code>"},"gutters":{"description":"除非 {{conditions}}，样式适用于 {{nodeName}} 。","nodeName":"根元素","conditions":"<code>disableGutters={true}</code>"},"region":{"description":"适用于 {{nodeName}}， {{conditions}} 的样式。","nodeName":"区域元素","conditions":"子组件的容器"}}}')},749106:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":"The content of the component.","classes":"Override or extend the styles applied to the component. See <a href=\\"#css\\">CSS API</a> below for more details.","defaultExpanded":"If <code>true</code>, expands the accordion by default.","disabled":"If <code>true</code>, the component is disabled.","disableGutters":"If <code>true</code>, it removes the margin between two expanded accordion items and the increase of height.","expanded":"If <code>true</code>, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.","onChange":"Callback fired when the expand/collapse state is changed.<br><br><strong>Signature:</strong><br><code>function(event: React.SyntheticEvent, expanded: boolean) =&gt; void</code><br><em>event:</em> The event source of the callback. <strong>Warning</strong>: This is a generic event not a change event.<br><em>expanded:</em> The <code>expanded</code> state of the accordion.","square":"If <code>true</code>, rounded corners are disabled.","sx":"The system prop that allows defining system overrides as well as additional CSS styles. See the <a href=\\"/system/getting-started/the-sx-prop/\\">`sx` page</a> for more details.","TransitionComponent":"The component used for the transition. <a href=\\"/material-ui/transitions/#transitioncomponent-prop\\">Follow this guide</a> to learn more about the requirements for this component.","TransitionProps":"Props applied to the transition element. By default, the element is based on this <a href=\\"http://reactcommunity.org/react-transition-group/transition/\\"><code>Transition</code></a> component."},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"rounded":{"description":"Styles applied to {{nodeName}} unless {{conditions}}.","nodeName":"the root element","conditions":"<code>square={true}</code>"},"expanded":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>expanded={true}</code>"},"disabled":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>disabled={true}</code>"},"gutters":{"description":"Styles applied to {{nodeName}} unless {{conditions}}.","nodeName":"the root element","conditions":"<code>disableGutters={true}</code>"},"region":{"description":"Styles applied to {{nodeName}}, {{conditions}}.","nodeName":"the region element","conditions":"the container of the children"}}}')}},function(e){e.O(0,[75760,36634,39152,35408,85992,59771,41253,46888,21829,81125,68256,96387,46324,70116,73793,16402,86277,49983,18956,58156,93893,49774,92888,40179],function(){return e(e.s=634903)}),_N_E=e.O()}]);