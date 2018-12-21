(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/layouts/float/Float.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return f});var n=o("./node_modules/react/index.js"),a=o.n(n),p=o("./node_modules/@mdx-js/tag/dist/index.js"),s=o("./node_modules/docz/dist/index.m.js"),r=o("./src/components/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=m(this,u(t).call(this,e))).layout=null,o}var o,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a.a.Component),o=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components,o=l(e,["components"]);return a.a.createElement(p.MDXTag,{name:"wrapper",components:t},a.a.createElement(p.MDXTag,{name:"h1",components:t,props:{id:"layouts-float"}},"Layouts: Float"),a.a.createElement(p.MDXTag,{name:"p",components:t},"Absolute layout for ware-layout components. here you can find the raw css layout menthods"),a.a.createElement(p.MDXTag,{name:"pre",components:t},a.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:null}},"import * as RW from 'reactware';\n")),a.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"position-absolute"}},"Position Absolute"),a.a.createElement(p.MDXTag,{name:"p",components:t},"Depending on its parent the item is absoluted"),a.a.createElement(s.e,{__codesandbox:"undefined",__position:0,__code:'<Rw.Layouts.Float absolute right="10px" bottom="10px">\n  Absolute top 10px, right 10px, left 10px\n</Rw.Layouts.Float>',__scope:{props:this?this.props:o,Rw:r},className:"Rw_Layouts_Absolute"},a.a.createElement(r.Layouts.Float,{absolute:!0,right:"10px",bottom:"10px"},"Absolute top 10px, right 10px, left 10px")),a.a.createElement(s.e,{__codesandbox:"undefined",__position:1,__code:'<Rw.Layouts.Float absolute top="25" left="139px" width="250px" height="50px">\n  Absolute top 139px, left 33px, width 250px, height 50px;\n</Rw.Layouts.Float>',__scope:{props:this?this.props:o,Rw:r},className:"Rw_Layouts_Absolute",style:{width:"250px"}},a.a.createElement(r.Layouts.Float,{absolute:!0,top:"25",left:"139px",width:"250px",height:"50px"},"Absolute top 139px, left 33px, width 250px, height 50px;")),a.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"position-relative"}},"Position Relative"),a.a.createElement(p.MDXTag,{name:"p",components:t},"Passing prop wrap will wrap the container in relative fixing postion issues on inline contents.\nThis create an empty wrapper (seen in example as small box) and postion will be based from this locations."),a.a.createElement(s.e,{__codesandbox:"undefined",__position:2,__code:'<Rw.Layouts.Float absolute wrap top="10px" left="10px" width="200px">\n  Absolute top 10px, bottom 10px\n</Rw.Layouts.Float>',__scope:{props:this?this.props:o,Rw:r},className:"Rw_Layouts_Absolute"},a.a.createElement(r.Layouts.Float,{absolute:!0,wrap:!0,top:"10px",left:"10px",width:"200px"},"Absolute top 10px, bottom 10px")),a.a.createElement(p.MDXTag,{name:"p",components:t},"Even more sence is made when used inline."),a.a.createElement(s.e,{__codesandbox:"undefined",__position:3,__code:'Hello im a sample\n<Rw.Layouts.Float absolute wrap top="25px" left="0px" width="200px">\n  Absolute top 25px, left 0px, width:200px;\n</Rw.Layouts.Float>\nthat likes to play nice.',__scope:{props:this?this.props:o,Rw:r},className:"Rw_Layouts_Absolute"},"Hello im a sample",a.a.createElement(r.Layouts.Float,{absolute:!0,wrap:!0,top:"25px",left:"0px",width:"200px"},"Absolute top 25px, left 0px, width:200px;"),"that likes to play nice."),a.a.createElement(p.MDXTag,{name:"blockquote",components:t},a.a.createElement(p.MDXTag,{name:"p",components:t,parentName:"blockquote"},a.a.createElement(p.MDXTag,{name:"strong",components:t,parentName:"p"}," ",a.a.createElement(p.MDXTag,{name:"em",components:t,parentName:"strong"},"NOTE")," : A width will be required for wrapped components as the parent is 0px and content will colapse "))),a.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"position-fixed"}},"Position Fixed"),a.a.createElement(p.MDXTag,{name:"p",components:t},"A special characteristic of the element with ",a.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"fixed")," is that you can anchor its four sides with the four sides of your browser's viewport. In that case, if the size of the viewport changes, the size of this element changes accordingly"),a.a.createElement(s.e,{__codesandbox:"undefined",__position:4,__code:'<Rw.Utils.Frame>\n  <Rw.Layouts.Float\n    fixed\n    bottom="40px"\n    right="35px"\n    top="25px"\n    style={{ background: \'#eef1f5\', padding: \'10px\' }}\n  >\n    Absolute bottom 40px, right 25px, top 25px;\n  </Rw.Layouts.Float>\n</Rw.Utils.Frame>',__scope:{props:this?this.props:o,Rw:r},className:"Rw_Layouts_Fixed"},a.a.createElement(r.Utils.Frame,null,a.a.createElement(r.Layouts.Float,{fixed:!0,bottom:"40px",right:"35px",top:"25px",style:{background:"#eef1f5",padding:"10px"}},"Absolute bottom 40px, right 25px, top 25px;"))),a.a.createElement(p.MDXTag,{name:"blockquote",components:t},a.a.createElement(p.MDXTag,{name:"p",components:t,parentName:"blockquote"},a.a.createElement(p.MDXTag,{name:"strong",components:t,parentName:"p"}," ",a.a.createElement(p.MDXTag,{name:"em",components:t,parentName:"strong"},"NOTE")," : In example above, item is wraped in a Frame (iframe) for demo. "))),a.a.createElement(s.f,{of:r.Layouts.Float}))}}])&&c(o.prototype,n),i&&c(o,i),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=components-layouts-float-float.62f381ef1723df55fc43.js.map