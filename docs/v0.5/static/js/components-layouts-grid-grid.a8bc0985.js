(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/components/layouts/grid/Grid.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./src/components/index.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,p(t).call(this,e))).layout=null,n}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=m(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"layouts-grid"}},"Layouts: Grid"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Grid layout for ware-layout components. here you can find the raw css layout menthods"),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:null}},"import * as RW from 'reactware';\n")),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"implicit-columns"}},"Implicit Columns"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Implicit uniform columns can define their values at the parent grid element"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Columns: ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"1")," (default), ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"2"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"....")),r.a.createElement(i.e,{__position:0,__code:'<Rw.Layouts.Grid columns="3">\n  <div>One</div>\n  <div>Two</div>\n  <div>Three</div>\n  <div>Four</div>\n  <div>Five</div>\n</Rw.Layouts.Grid>',__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid"},r.a.createElement(s.Layouts.Grid,{columns:"3"},r.a.createElement("div",null,"One"),r.a.createElement("div",null,"Two"),r.a.createElement("div",null,"Three"),r.a.createElement("div",null,"Four"),r.a.createElement("div",null,"Five"))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"fixed-columns"}},"Fixed Columns"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Implicit uniform columns can define their values at the parent grid element"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Widths: ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<value> <value> ....")),r.a.createElement(i.e,{__position:1,__code:'<Rw.Layouts.Grid columns="5" widths="75px 125px auto 100px 135px">\n  <div>75px</div>\n  <div>125px</div>\n  <div>auto</div>\n  <div>100px</div>\n  <div>135px</div>\n</Rw.Layouts.Grid>',__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid"},r.a.createElement(s.Layouts.Grid,{columns:"5",widths:"75px 125px auto 100px 135px"},r.a.createElement("div",null,"75px"),r.a.createElement("div",null,"125px"),r.a.createElement("div",null,"auto"),r.a.createElement("div",null,"100px"),r.a.createElement("div",null,"135px"))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"responsive-grid"}},"Responsive Grid"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Define columns by setting the min width value for a responsive grid system."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Min: ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<value> px/em/%"),"\nMax (optional): ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<value> px/em/%")),r.a.createElement(i.e,{__position:2,__code:'<Rw.Layouts.Grid min="200px">\n  <div>200px</div>\n  <div>Min</div>\n  <div>200px</div>\n  <div>Min</div>\n  <div>200px</div>\n</Rw.Layouts.Grid>',__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid"},r.a.createElement(s.Layouts.Grid,{min:"200px"},r.a.createElement("div",null,"200px"),r.a.createElement("div",null,"Min"),r.a.createElement("div",null,"200px"),r.a.createElement("div",null,"Min"),r.a.createElement("div",null,"200px"))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"explicit-columns"}},"Explicit Columns"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Columns that are not uniform can define their column span value directly on the column element."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Span: ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"1"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"2"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"...."),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"\u221e"),", "),r.a.createElement(i.e,{__position:3,__code:'<Rw.Layouts.Grid columns="12">\n  <Rw.Layouts.Grid span="12">12</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid span="4">4</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid span="3">3</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid span="2">2</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid span="3">3</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid span="6">6</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid span="3">3</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid span="3">3</Rw.Layouts.Grid>\n</Rw.Layouts.Grid>',__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid"},r.a.createElement(s.Layouts.Grid,{columns:"12"},r.a.createElement(s.Layouts.Grid,{span:"12"},"12"),r.a.createElement(s.Layouts.Grid,{span:"4"},"4"),r.a.createElement(s.Layouts.Grid,{span:"3"},"3"),r.a.createElement(s.Layouts.Grid,{span:"2"},"2"),r.a.createElement(s.Layouts.Grid,{span:"3"},"3"),r.a.createElement(s.Layouts.Grid,{span:"6"},"6"),r.a.createElement(s.Layouts.Grid,{span:"3"},"3"),r.a.createElement(s.Layouts.Grid,{span:"3"},"3"))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"alignment"}},"Alignment"),r.a.createElement(o.MDXTag,{name:"p",components:t},"All items can be aligned at the same time if needed in a grid using aligments:"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Alignments: ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"topleft"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"topcenter"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"topright"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"centerleft"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"center"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"centerright"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"bottomleft"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"bottomcenter"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"bottomright")),r.a.createElement(i.e,{__position:4,__code:"<Rw.Layouts.Grid columns={3} gap={'15px'}>\n  <Rw.Layouts.Grid topleft>\n    <div>topleft</div>\n  </Rw.Layouts.Grid>\n  <Rw.Layouts.Grid topcenter>\n    <div>topleft</div>\n  </Rw.Layouts.Grid>\n  <Rw.Layouts.Grid topright>\n    <div>topleft</div>\n  </Rw.Layouts.Grid>\n  <Rw.Layouts.Grid centerleft>\n    <div>centerleft</div>\n  </Rw.Layouts.Grid>\n  <Rw.Layouts.Grid center>\n    <div>center</div>\n  </Rw.Layouts.Grid>\n  <Rw.Layouts.Grid centerright>\n    <div>centerright</div>\n  </Rw.Layouts.Grid>\n\n  <Rw.Layouts.Grid bottomleft>\n    <div>bottomleft</div>\n  </Rw.Layouts.Grid>\n  <Rw.Layouts.Grid bottomcenter>\n    <div>bottomcenter</div>\n  </Rw.Layouts.Grid>\n  <Rw.Layouts.Grid bottomright>\n    <div>bottomright</div>\n  </Rw.Layouts.Grid>\n</Rw.Layouts.Grid>",__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid Rw_Layouts_Grid_Alignments"},r.a.createElement(s.Layouts.Grid,{columns:3,gap:"15px"},r.a.createElement(s.Layouts.Grid,{topleft:!0},r.a.createElement("div",null,"topleft")),r.a.createElement(s.Layouts.Grid,{topcenter:!0},r.a.createElement("div",null,"topleft")),r.a.createElement(s.Layouts.Grid,{topright:!0},r.a.createElement("div",null,"topleft")),r.a.createElement(s.Layouts.Grid,{centerleft:!0},r.a.createElement("div",null,"centerleft")),r.a.createElement(s.Layouts.Grid,{center:!0},r.a.createElement("div",null,"center")),r.a.createElement(s.Layouts.Grid,{centerright:!0},r.a.createElement("div",null,"centerright")),r.a.createElement(s.Layouts.Grid,{bottomleft:!0},r.a.createElement("div",null,"bottomleft")),r.a.createElement(s.Layouts.Grid,{bottomcenter:!0},r.a.createElement("div",null,"bottomcenter")),r.a.createElement(s.Layouts.Grid,{bottomright:!0},r.a.createElement("div",null,"bottomright")))),r.a.createElement(o.MDXTag,{name:"p",components:t},"Single item Example:"),r.a.createElement(i.e,{__position:5,__code:"<Rw.Layouts.Grid centerright>\n  <div>centerright</div>\n</Rw.Layouts.Grid>",__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid"},r.a.createElement(s.Layouts.Grid,{centerright:!0},r.a.createElement("div",null,"centerright"))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"self-alignment"}},"Self alignment"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Child items have the ability to be slef aligned, regardless of the parent aplighment.."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Self alignments: ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"start"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"center"),", ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"end")),r.a.createElement(i.e,{__position:6,__code:"<Rw.Layouts.Grid>\n  <Rw.Layouts.Grid self start>\n    Start\n  </Rw.Layouts.Grid>\n  <Rw.Layouts.Grid self center>\n    Center\n  </Rw.Layouts.Grid>\n  <Rw.Layouts.Grid self end>\n    End\n  </Rw.Layouts.Grid>\n</Rw.Layouts.Grid>",__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid"},r.a.createElement(s.Layouts.Grid,null,r.a.createElement(s.Layouts.Grid,{self:!0,start:!0},"Start"),r.a.createElement(s.Layouts.Grid,{self:!0,center:!0},"Center"),r.a.createElement(s.Layouts.Grid,{self:!0,end:!0},"End"))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"line-based-placement"}},"Line-based placement"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Child items have the ability to be slef aligned, regardless of the parent aplighment.."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Track: ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<value1> <value2>")," (column row) "),r.a.createElement(i.e,{__position:7,__code:'<Rw.Layouts.Grid columns="3">\n  <Rw.Layouts.Grid track="1/3 1">A</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid track="3 1/3">B</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid track="1 2">C</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid track="2 2">D</Rw.Layouts.Grid>\n</Rw.Layouts.Grid>',__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid"},r.a.createElement(s.Layouts.Grid,{columns:"3"},r.a.createElement(s.Layouts.Grid,{track:"1/3 1"},"A"),r.a.createElement(s.Layouts.Grid,{track:"3 1/3"},"B"),r.a.createElement(s.Layouts.Grid,{track:"1 2"},"C"),r.a.createElement(s.Layouts.Grid,{track:"2 2"},"D"))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"nested-grid"}},"Nested Grid"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A simple example of nesting one grid inside another. Any grid Area can become a grid itself."),r.a.createElement(i.e,{__position:8,__code:'<Rw.Layouts.Grid columns="3">\n  <Rw.Layouts.Grid track="1/3 1">A</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid track="3 1/3">B</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid track="1 2">C</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid track="2 2">\n    <Rw.Layouts.Grid min="50px">\n      <div>200px</div>\n      <div>Min</div>\n      <div>200px</div>\n      <div>Min</div>\n      <div>200px</div>\n    </Rw.Layouts.Grid>\n  </Rw.Layouts.Grid>\n</Rw.Layouts.Grid>',__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid"},r.a.createElement(s.Layouts.Grid,{columns:"3"},r.a.createElement(s.Layouts.Grid,{track:"1/3 1"},"A"),r.a.createElement(s.Layouts.Grid,{track:"3 1/3"},"B"),r.a.createElement(s.Layouts.Grid,{track:"1 2"},"C"),r.a.createElement(s.Layouts.Grid,{track:"2 2"},r.a.createElement(s.Layouts.Grid,{min:"50px"},r.a.createElement("div",null,"200px"),r.a.createElement("div",null,"Min"),r.a.createElement("div",null,"200px"),r.a.createElement("div",null,"Min"),r.a.createElement("div",null,"200px"))))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"overlay"}},"Overlay"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A example of two or more items overlaying eachother."),r.a.createElement(i.e,{__position:9,__code:'<Rw.Layouts.Grid columns="3">\n  <Rw.Layouts.Grid track="1/3 1">A</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid track="3 1/3">B</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid track="1 2">C</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid track="2 2">D</Rw.Layouts.Grid>\n  <Rw.Layouts.Grid\n    style={{ background: \'rgba(11,95,255,0.5)\' }}\n    track="1/3 1/3"\n  />\n</Rw.Layouts.Grid>',__scope:{props:this?this.props:n,Rw:s},className:"Rw_Layouts_Grid"},r.a.createElement(s.Layouts.Grid,{columns:"3"},r.a.createElement(s.Layouts.Grid,{track:"1/3 1"},"A"),r.a.createElement(s.Layouts.Grid,{track:"3 1/3"},"B"),r.a.createElement(s.Layouts.Grid,{track:"1 2"},"C"),r.a.createElement(s.Layouts.Grid,{track:"2 2"},"D"),r.a.createElement(s.Layouts.Grid,{style:{background:"rgba(11,95,255,0.5)"},track:"1/3 1/3"}))),r.a.createElement(i.f,{of:s.Layouts.Grid}))}}])&&c(n.prototype,a),l&&c(n,l),t}();y.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=components-layouts-grid-grid.62f381ef1723df55fc43.js.map