webpackJsonp([0],{"3t51":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"layout-footer"},[n("div",{staticStyle:{"max-width":"800px",margin:"0 auto"}},[n("ul",{staticClass:"copyright"},[n("li",[t._v("© 2018 Lanyue.")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.lanyueos.com"}},[t._v("Home")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.lanyueos.com"}},[t._v("Blog")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/mengdu"}},[t._v("Github")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/mengdu"}},[t._v("About")])])])])])}]};var o=n("VU/8")(null,s,!1,function(t){n("Dt83")},null,null).exports,r={props:{repo:String}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.repo}},[e("img",{staticClass:"fork-img",attrs:{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png",alt:"Fork me on GitHub"}})])},staticRenderFns:[]};var l=n("VU/8")(r,a,!1,function(t){n("g8Ef")},null,null).exports,d=n("G0wi"),c=n.n(d),v=n("7YgM"),u=n.n(v),h={name:"App",components:{LayoutFooter:o,ForkLink:l,Readme:c.a},data:function(){return{pkg:u.a,code:["function say () {",'\tconsole.log("Hello world!");',"}"].join("\n"),theme:"vs-dark",mode:"javascript",showMinimap:!0}},computed:{repo:function(){return u.a.repository.url.replace(/git\+/,"")}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("fork-link",{attrs:{repo:t.repo}}),t._v(" "),i("header",[i("img",{attrs:{src:n("aIDJ")}}),t._v(" "),i("h1",[t._v(t._s(t.pkg.name)+" "),i("span",[t._v(t._s(t.pkg.version))])]),t._v(" "),i("p",[t._v(t._s(t.pkg.description))]),t._v(" "),i("div",{staticClass:"text-center",staticStyle:{padding:"15px"}},[i("a",{attrs:{href:t.repo,target:"_blank"}},[i("m-button",{attrs:{type:"info",size:"large",round:""}},[i("img",{staticClass:"user-img",attrs:{src:"https://avatars1.githubusercontent.com/u/11366654?s=40&v=4",alt:"mengdu"}}),t._v("\n          Github\n        ")])],1),t._v("\n       \n      "),i("a",{attrs:{href:"#example"}},[i("m-button",{attrs:{type:"warning",size:"large",plain:"",round:""}},[t._v("Example")])],1)])]),t._v(" "),i("main",{staticClass:"doc-block"},[i("m-monaco-editor",{attrs:{mode:t.mode,theme:t.theme,"show-minimap":t.showMinimap},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t._v(" "),i("readme")],1),t._v(" "),i("layout-footer")],1)},staticRenderFns:[]},p=n("VU/8")(h,m,!1,null,null,null).exports,g=(n("TMI/"),{name:"DemoBlock",props:{jsfiddle:Object},created:function(){}}),f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-block"},[this._t("source"),this._v(" "),e("div",{ref:"meta",staticClass:"meta"},[this.$slots.default?e("div",{staticClass:"description"},[this._t("default")],2):this._e(),this._v(" "),this._t("highlight")],2)],2)},staticRenderFns:[]};var b=n("VU/8")(g,f,!1,function(t){n("E4G2")},null,null).exports,_=n("HPNY"),k=n.n(_),y=(n("TkPJ"),n("Rv59")),I={name:"MMonacoEditor",props:{value:String,theme:String,mode:String,cdnUrl:{type:String,default:"https://cdn.bootcss.com/monaco-editor/0.13.1/min/vs"},requireConfig:Object,syncInput:Boolean,readOnly:Boolean,fontSize:Number,renderLineHighlight:{type:String,default:"all"},showMinimap:{type:Boolean,default:!0}},data:function(){return{editorDom:null,editor:null,monaco:null,buffer:""}},computed:{loaderUrl:function(){var t=this.requireConfig;return(t&&t.paths&&t.paths.vs?t.paths.vs:this.cdnUrl).replace(/\/$/,"")}},watch:{theme:function(){this.setTheme()},mode:function(){this.setMode()},value:function(t,e){this.buffer.length===t.length&&this.buffer===t||(this.buffer=t,this.editor.setValue(t))},readOnly:function(t){this.editor.updateOptions({readOnly:t})},fontSize:function(t){this.editor.updateOptions({fontSize:t})},renderLineHighlight:function(t){this.editor.updateOptions({renderLineHighlight:t})},showMinimap:function(t){this.editor.updateOptions({minimap:{enabled:t}})}},methods:{initEditor:function(){var t=this;Object(y.loader)({url:this.loaderUrl+"/loader.js",library:"require"}).then(function(e){e.target.config(t.requireConfig||{paths:{vs:t.loaderUrl}}),e.target(["vs/editor/editor.main"],function(){t.monaco=window.monaco,t.editor=window.monaco.editor.create(t.editorDom,{value:t.value,language:t.mode,readOnly:t.readOnly,fontSize:t.fontSize,renderLineHighlight:t.renderLineHighlight,minimap:{enabled:t.showMinimap}}),t.$emit("init",t.editor,t.editorDom,window.monaco),t.setTheme(),t.setMode(),t.listen()})})},setTheme:function(){this.theme&&this.monaco.editor.setTheme(this.theme)},setMode:function(){if(this.mode){var t=this.editor?this.editor.getModel():null,e=this.monaco.editor.createModel(this.value,this.mode);this.editor.setModel(e),t&&t.dispose()}},listen:function(){var t=this;this.editor.onDidBlurEditor(function(){t.$emit("blur")}),this.editor.onDidFocusEditor(function(){t.$emit("focus")}),this.editor.onDidLayoutChange(function(){t.$emit("layout-change")}),this.syncInput&&this.editor.onDidChangeModelContent(function(){t.buffer=t.editor.getValue(),t.$emit("input",t.buffer)})},getValue:function(){return this.editor.getValue()}},mounted:function(){this.editorDom=this.$refs["monaco-editor"],this.initEditor()}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"monaco-editor",staticClass:"m-monaco-editor"})},staticRenderFns:[]};var C=n("VU/8")(I,w,!1,function(t){n("mJK1")},null,null).exports;C.install=function(t){t.component(C.name,C)},i.a.use(k.a),i.a.use(C),i.a.component("DemoBlock",b),i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:p},template:"<App/>"})},"7YgM":function(t,e){t.exports={name:"vue-m-monaco-editor",version:"1.0.0",description:"A monaco-editor component for vue",author:"lanyueos@qq.com",license:"MIT",main:"index.js",repository:{type:"https",url:"git+https://github.com/mengdu/m-monaco-editor"},bugs:{url:"https://github.com/mengdu/m-monaco-editor/issues"},files:["dist","src","example","index.js"],homepage:"https://mengdu.github.io/m-monaco-editor/example/",scripts:{dev:"webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",start:"npm run dev",unit:"jest --config test/unit/jest.conf.js --coverage",e2e:"node test/e2e/runner.js",test:"npm run unit && npm run e2e",lint:"eslint --ext .js,.vue src test/unit test/e2e/specs",docs:"node build/docs.js",build:"node build/build.js"},dependencies:{"monaco-editor":"^0.13.1","vue-m-loader":"^1.0.1"},devDependencies:{autoprefixer:"^7.1.2","babel-core":"^6.22.1","babel-eslint":"^8.2.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-jest":"^21.0.2","babel-loader":"^7.1.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-es2015-modules-commonjs":"^6.26.0","babel-plugin-transform-runtime":"^6.22.0","babel-plugin-transform-vue-jsx":"^3.5.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",chalk:"^2.0.1",cheerio:"^1.0.0-rc.2",chromedriver:"^2.27.2","copy-webpack-plugin":"^4.0.1","cross-spawn":"^5.0.1","css-loader":"^0.28.0",eslint:"^4.15.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.7.1","eslint-plugin-import":"^2.7.0","eslint-plugin-node":"^5.2.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^4.0.0","extract-text-webpack-plugin":"^3.0.0","file-loader":"^1.1.4","friendly-errors-webpack-plugin":"^1.6.1","html-webpack-plugin":"^2.30.1",jest:"^22.0.4","jest-serializer-vue":"^0.3.0",less:"^3.0.1","less-loader":"^4.1.0","markdown-it-anchor":"^4.0.0","markdown-it-container":"^2.0.0",nightwatch:"^0.9.12","node-notifier":"^5.1.2","optimize-css-assets-webpack-plugin":"^3.2.0",ora:"^1.2.0",portfinder:"^1.0.13","postcss-import":"^11.0.0","postcss-loader":"^2.0.8","postcss-url":"^7.2.1",rimraf:"^2.6.0","selenium-server":"^3.0.1",semver:"^5.3.0",shelljs:"^0.7.6",transliteration:"^1.6.2","uglifyjs-webpack-plugin":"^1.1.1","url-loader":"^0.5.8",vue:"^2.5.2","vue-jest":"^1.0.2","vue-loader":"^13.3.0","vue-m-button":"^1.0.0","vue-markdown-loader":"^2.4.1","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.5.2",webpack:"^3.6.0","webpack-bundle-analyzer":"^2.9.0","webpack-dev-server":"^2.9.1","webpack-merge":"^4.1.0"},engines:{node:">= 6.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},Dt83:function(t,e){},E4G2:function(t,e){},G0wi:function(t,e,n){t.exports=n("yKNT")},"TMI/":function(t,e){},TkPJ:function(t,e){},aIDJ:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},g8Ef:function(t,e){},mJK1:function(t,e){},yKNT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{attrs:{id:"m-monaco-editor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#m-monaco-editor","aria-hidden":"true"}},[t._v("¶")]),t._v(" m-monaco-editor")]),t._v(" "),n("p",[t._v("A monaco-editor component for vue.")]),t._v(" "),n("p",[t._v("npm")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"hljs language-ls"}},[n("span",{attrs:{class:"hljs-built_in"}},[t._v("npm")]),t._v(" install -S vue-m-monaco-editor\n")])]),t._v(" "),n("p",[t._v("use")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"hljs language-js"}},[n("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" MMonacoEditor "),n("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"hljs-string"}},[t._v("'vue-m-monaco-editor'")]),t._v("\n\nVue.use(MMonacoEditor) "),n("span",{attrs:{class:"hljs-comment"}},[t._v("// 注册 m-monaco-editor 组件")]),t._v("\n")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[n("span",{attrs:{class:"hljs-tag"}},[t._v("<"),n("span",{attrs:{class:"hljs-name"}},[t._v("m-monaco-editor")]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),n("span",{attrs:{class:"hljs-string"}},[t._v('"code"')]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v(":mode")]),t._v("="),n("span",{attrs:{class:"hljs-string"}},[t._v('"mode"')]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v(":theme")]),t._v("="),n("span",{attrs:{class:"hljs-string"}},[t._v('"theme"')]),t._v(">")]),n("span",{attrs:{class:"hljs-tag"}},[t._v("</"),n("span",{attrs:{class:"hljs-name"}},[t._v("m-monaco-editor")]),t._v(">")]),t._v("\n")])]),t._v(" "),n("h2",{attrs:{id:"mmonacoeditor-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mmonacoeditor-attributes","aria-hidden":"true"}},[t._v("¶")]),t._v(" MMonacoEditor Attributes")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("内容")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("theme")]),t._v(" "),n("td",[t._v("主题")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("vs/vs-dark/hc-dark")]),t._v(" "),n("td",[t._v("vs")])]),t._v(" "),n("tr",[n("td",[t._v("mode")]),t._v(" "),n("td",[t._v("语言类型")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://microsoft.github.io/monaco-editor/api/modules/monaco.languages.html#getlanguages"}},[t._v("languages")])]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("cdnUrl")]),t._v(" "),n("td",[t._v("monaco-editor文件链接")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("https://cdn.bootcss.com/monaco-editor/0.13.1/min/vs")])]),t._v(" "),n("tr",[n("td",[t._v("requireConfig")]),t._v(" "),n("td",[t._v("monaco-editor loader.js 配置")]),t._v(" "),n("td",[t._v("object")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("syncInput")]),t._v(" "),n("td",[t._v("同步内容到value")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("true/false")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("readOnly")]),t._v(" "),n("td",[t._v("仅读")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("true/false")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("fontSize")]),t._v(" "),n("td",[t._v("字体大小")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("renderLineHighlight")]),t._v(" "),n("td",[t._v("高亮当前行")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v('"none"')]),t._v(" "),n("td",[t._v('"gutter"')])])])]),t._v(" "),n("blockquote",[n("p",[t._v("如果是内网的项目，请指定 "),n("code",{pre:!0},[t._v("cdnUrl")]),t._v(" 到内网可以访问的 "),n("code",{pre:!0},[t._v("monaco-editor")]),t._v(" 目录。")])]),t._v(" "),n("h2",{attrs:{id:"mmonacoeditor-event"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mmonacoeditor-event","aria-hidden":"true"}},[t._v("¶")]),t._v(" MMonacoEditor Event")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("init")]),t._v(" "),n("td",[t._v("初始化")]),t._v(" "),n("td",[t._v("editer,editorDom,monaco")])]),t._v(" "),n("tr",[n("td",[t._v("blur")]),t._v(" "),n("td",[t._v("失去焦点")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("focus")]),t._v(" "),n("td",[t._v("获取焦点")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("layout-change")]),t._v(" "),n("td",[t._v("布局改变")]),t._v(" "),n("td",[t._v("—")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("更多配置信息，可以在init事件后使用 "),n("a",{attrs:{href:"https://microsoft.github.io/monaco-editor/api"}},[t._v("monaco-editor api")])])]),t._v(" "),n("h2",{attrs:{id:"other"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other","aria-hidden":"true"}},[t._v("¶")]),t._v(" Other")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://microsoft.github.io"}},[t._v("monaco-editor")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://microsoft.github.io/api"}},[t._v("monaco-editor docs")])])])}]},s=n("VU/8")(null,i,!1,null,null,null);e.default=s.exports}},["3t51"]);
//# sourceMappingURL=app.a1dc059c7b5589c811a4.js.map