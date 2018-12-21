(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/ui/tabs/Tabs.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n("./node_modules/react/index.js"),a=n.n(o),r=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),l=n("./src/components/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,m(t).call(this,e))).layout=null,n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=i(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:t},a.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"ui-tabs"}},"UI: Tabs"),a.a.createElement(r.MDXTag,{name:"p",components:t},"Tabs is a graphical control element that allows multiple documents or panels to be contained within a single window."),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:null}},"import * as RW from 'reactware';\n")),a.a.createElement(s.e,{__position:0,__code:"<Rw.UI.Tabs\n  active={0}\n  items={[\n    { label: 'Properties', content: <h1>Heading tab</h1> },\n    { label: 'History', content: <p>Some regular paraghagh text</p> },\n    { label: 'Clone Source', content: 'just test' },\n    { label: 'Events', content: 'just test' },\n  ]}\n  onChange={(item, event) => console.log(item, event)}\n/>",__scope:{props:this?this.props:n,Rw:l},className:"Rw_UI_Tabs dark_theme",style:{background:"#3a3a3a"}},a.a.createElement(l.UI.Tabs,{active:0,items:[{label:"Properties",content:a.a.createElement("h1",null,"Heading tab")},{label:"History",content:a.a.createElement("p",null,"Some regular paraghagh text")},{label:"Clone Source",content:"just test"},{label:"Events",content:"just test"}],onChange:function(e,t){return console.log(e,t)}})),a.a.createElement(r.MDXTag,{name:"p",components:t},"Alternitevely you can space out the tabs with ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"spaced")," attribute."),a.a.createElement(s.e,{__position:1,__code:"<Rw.UI.Tabs\n  active={0}\n  spaced={true}\n  items={[\n    { label: 'Properties', content: <h1>Heading tab</h1> },\n    { label: 'History', content: <p>Some regular paraghagh text</p> },\n    { label: 'Clone Source', content: 'just test' },\n    { label: 'Events', content: 'just test' },\n  ]}\n  onChange={(item, event) => console.log(item, event)}\n/>",__scope:{props:this?this.props:n,Rw:l},className:"Rw_UI_Tabs dark_theme",style:{background:"#3a3a3a"}},a.a.createElement(l.UI.Tabs,{active:0,spaced:!0,items:[{label:"Properties",content:a.a.createElement("h1",null,"Heading tab")},{label:"History",content:a.a.createElement("p",null,"Some regular paraghagh text")},{label:"Clone Source",content:"just test"},{label:"Events",content:"just test"}],onChange:function(e,t){return console.log(e,t)}})),a.a.createElement(s.f,{of:l.UI.Tabs}))}}])&&u(n.prototype,o),c&&u(n,c),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=components-ui-tabs-tabs.62f381ef1723df55fc43.js.map