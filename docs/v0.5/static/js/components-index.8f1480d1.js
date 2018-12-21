(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/components/index.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./node_modules/docz/dist/index.m.js"),c=t("./src/components/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function l(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=i(this,u(n).call(this,e))).layout=null,t}var t,a,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components,t=m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"introduction"}},"Introduction"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"what-is-reactware-"}},"What is Reactware ?"),o.a.createElement(r.MDXTag,{name:"p",components:n},"reactware is an open source toolkit for developing desktop PWA with HTML, CSS, and JS. It contains a vast selection of ui components, ranging from layout helpers (for flex, grid and floats) to UI components to help you design you next webapp. The focus of this library to to allow users to create dekstop like apps (e.g GIMP) in the browser. "),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"getting-started"}},"Getting Started"),o.a.createElement(r.MDXTag,{name:"p",components:n},"If you have a react project already setup you can simple run this command in your shell or cmd and you will add the pakage to your dependncies."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell",metastring:null}},"yarn add reactware\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"or"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell",metastring:null}},"npm i -S reactware \n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"If you ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"dont")," have a react project setup and want to play around this pakage then we recomend the awsome react pakage called create-react-app. This will install react and all the nessseosry pakages to get you started. Simple run:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell",metastring:null}},"npx create-react-app MySimpleApp\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once this completes, you can run the above comman (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yarn add reactware")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm i -S reactware"),") and this will add reactware library to the create-react-app package. PS: remeber to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cd into MySimpleApp")," else npm/yarn wont work. "),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once you installed above pakage, you can open in your favorite editor and edit ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/App.js")," where you will the create-react-apps sample component. You can remove most of the content from the render and just add a simple reactware component e.g:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metastring:null}},"import React, { Component } from 'react';\nimport * as Rw from './components';\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    return (\n      <div className=\"App\">\n        <Rw.UI.Button>My Button</Rw.UI.Button>\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The above should render a button, just like the one bellow this text. Do you see it?"),o.a.createElement(p.e,{__position:0,__code:"{/* PS: Go ahead, you can edit me! */}\n<Rw.UI.Button>My Button</Rw.UI.Button>",__scope:{props:this?this.props:t,Rw:c},className:"Rw_Utils_Frame dark_theme"},o.a.createElement(c.UI.Button,null,"My Button")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Btw click the button that has ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<>")," and this will show you the code for this component. Where you can ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"EDIT")," the code itself to playaround with it here, in the browser, #fun.")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"components"}},"Components"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Browse the library for the remaining component and best of luck with you app."))}}])&&l(t.prototype,a),s&&l(t,s),n}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=components-index.62f381ef1723df55fc43.js.map
