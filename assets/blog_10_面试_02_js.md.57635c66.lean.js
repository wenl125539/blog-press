import{_ as h,c as N,b as g,w as C,d as _,a as n,e as s,r as A,o as x,V as D}from"./app.4f88bb76.js";const j={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:E,withCtx:c,createVNode:l,createElementVNode:r,openBlock:B,createElementBlock:i}=D,p=e("\u76F8\u4F3C"),k=e("NaN");function F(m,d){const a=E("xl-button");return B(),i("div",null,[r("div",null,[l(a,{onClick:m.btn,type:"primary"},{default:c(()=>[p]),_:1},8,["onClick"]),l(a,{onClick:m.btn2,type:"success"},{default:c(()=>[k]),_:1},8,["onClick"])])])}return{render:F,...{setup(m,{expose:d}){d();let a,u=null;function t(){console.log("undefined is false"),console.log("null is false"),console.log(void 0==null),console.log(void 0===null)}function o(){console.log(Number(a)),console.log(5+a),console.log("========="),console.log(Number(u)),console.log(5+u)}const b={a,b:u,btn:t,btn2:o};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}}}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:E,withCtx:c,createVNode:l,toDisplayString:r,createElementVNode:B,openBlock:i,createElementBlock:p}=D,k=e("add(null)"),F=e("add()");function f(a,u){const t=E("xl-button");return i(),p("div",null,[B("div",null,[l(t,{onClick:u[0]||(u[0]=o=>a.add(null)),type:"warning"},{default:c(()=>[k]),_:1}),e(r(a.num)+" ",1),l(t,{onClick:u[1]||(u[1]=o=>a.add()),type:"danger"},{default:c(()=>[F]),_:1}),e(r(a.num),1)])])}const{ref:m}=D;return{render:f,...{setup(a,{expose:u}){u();let t=m(0);function o(v){t.value+=v}const b={num:t,add:o,ref:m};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}}}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:E,withCtx:c,createVNode:l,toDisplayString:r,createElementVNode:B,openBlock:i,createElementBlock:p}=D,k=e("log");function F(d,a){const u=E("xl-button");return i(),p("div",null,[B("div",null,[l(u,{onClick:a[0]||(a[0]=t=>d.log()),type:"warning"},{default:c(()=>[k]),_:1}),e(r(d.num),1)])])}const{reactive:f}=D;return{render:F,...{setup(d,{expose:a}){a();var u;function t(y){console.log(y)}var o={name:"wenl",age:18};function b(){console.log(u),t(),console.log(o.name),console.log(o.girlFriend);const y=t("123");console.log(y)}var v=t();const w={i:u,f:t,student:o,log:b,x:v,reactive:f};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}}}()}},K='{"title":"1.null \u548C undefined","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.null \u548C undefined","slug":"_1-null-\u548C-undefined"},{"level":3,"title":"\u76F8\u4F3C\u70B9","slug":"\u76F8\u4F3C\u70B9"},{"level":3,"title":"\u76EE\u524D\u7684\u7528\u6CD5","slug":"\u76EE\u524D\u7684\u7528\u6CD5"},{"level":2,"title":"2.Object.is\u4E0E\\"===\\",\\"==\\"\u533A\u522B","slug":"_2-object-is\u4E0E-\u533A\u522B"},{"level":3,"title":"\u5F02\u540C","slug":"\u5F02\u540C"},{"level":3,"title":"\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26 ===","slug":"\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26"},{"level":3,"title":"\u76F8\u7B49\u8FD0\u7B97\u7B26==","slug":"\u76F8\u7B49\u8FD0\u7B97\u7B26"},{"level":3,"title":"Object.is(value1, value2)","slug":"object-is-value1-value2"},{"level":2,"title":"3.\u7BAD\u5934\u51FD\u6570\u4E2D\u7684this\u6307\u5411","slug":"_3-\u7BAD\u5934\u51FD\u6570\u4E2D\u7684this\u6307\u5411"},{"level":3,"title":"\u5B9A\u4E49","slug":"\u5B9A\u4E49"},{"level":3,"title":"\u793A\u4F8B\uFF1A","slug":"\u793A\u4F8B\uFF1A"}],"relativePath":"blog/10_\u9762\u8BD5/02_js.md","lastUpdated":1659090326000}',q=_(`<h2 id="_1-null-\u548C-undefined" tabindex="-1">1.null \u548C undefined</h2><ul><li>\u4E00\u822C\u672A\u6307\u5B9A\u6307\u5411\u5BF9\u8C61\u7684\u6307\u9488\u4F1A\u88AB\u9ED8\u8BA4\u4E3A<code>Null</code>\u7C7B\u578B\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u503C\u4E3A<code>Null</code>\u7684\u53D8\u91CF\u5176\u5B9E\u9645\u7C7B\u578B\u4E3A<code>object</code>\uFF0C\u56E0\u4E3A\u7CFB\u7EDF\u4F1A\u5C06\u5176\u89C6\u4E3A\u4E00\u4E2A\u4FDD\u5B58\u5BF9\u8C61\u7684\u53D8\u91CF\uFF0C\u53EA\u4E0D\u8FC7\u8FD8\u672A\u521D\u59CB\u5316\u3002</li><li>Java\u7406\u89E3\u5C31\u662F\uFF1Anull\u50CF\u5728Java\u91CC\u4E00\u6837\uFF0C\u88AB\u5F53\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u4E8E Java \u6765\u8BF4\u4E0D\u53EF\u80FD\u5B58\u5728\u4E00\u4E2A\u201C\u4E0D\u5B58\u5728\u201D\u7684\u6210\u5458\uFF08\u4E0D\u5B58\u5728\u7684\u8BDD\u76F4\u63A5\u5C31\u7F16\u8BD1\u5931\u8D25\u4E86\uFF09\uFF0C\u6240\u4EE5\u53EA\u7528 null \u6765\u8868\u793A\u8BED\u4E49\u4E0A\u7684\u7A7A\u503C\u3002</li><li>\u5728JavaScript\u4E2D\uFF0C\u5C06\u4E00\u4E2A\u53D8\u91CF\u8D4B\u503C\u4E3A<code>undefined</code>\u6216<code>null</code>\uFF0C\u51E0\u4E4E\u6CA1\u533A\u522B\u3002</li><li>\u51FA\u73B0<code>undefined</code>\u539F\u56E0\uFF1A <ul><li>JavaScript\u7684\u6700\u521D\u7248\u672C\u6CA1\u6709\u5305\u62EC\u9519\u8BEF\u5904\u7406\u673A\u5236\uFF0C\u53D1\u751F\u6570\u636E\u7C7B\u578B\u4E0D\u5339\u914D\u65F6\uFF0C\u5F80\u5F80\u662F\u81EA\u52A8\u8F6C\u6362\u7C7B\u578B\u6216\u8005\u9ED8\u9ED8\u5730\u5931\u8D25</li><li>Brendan Eich\uFF08\u5F00\u53D1\u8005\uFF09\u89C9\u5F97\uFF0C\u5982\u679C<code>null</code>\u81EA\u52A8\u8F6C\u4E3A0\uFF0C<strong><code>\u5F88\u4E0D\u5BB9\u6613\u53D1\u73B0\u9519\u8BEF</code></strong>\u3002\u6240\u4EE5\u6574\u4E86\u4E2A<code>undefined </code></li></ul></li></ul><h3 id="\u76F8\u4F3C\u70B9" tabindex="-1">\u76F8\u4F3C\u70B9</h3><ul><li>undefined\u548Cnull\u5728if\u8BED\u53E5\u4E2D\uFF0C\u90FD\u4F1A\u88AB\u81EA\u52A8\u8F6C\u4E3Afalse\uFF0C\u76F8\u7B49\u8FD0\u7B97\u7B26\u751A\u81F3\u76F4\u63A5\u62A5\u544A\u4E24\u8005\u76F8\u7B49\u3002</li></ul><div class="language-js line-numbers-mode"><pre><code>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;undefined is false&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// undefined is false</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;null is false&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// null is false</span>
 <span class="token punctuation">}</span>

 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>

 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//NaN</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//NaN</span>

 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,5),V=n("div",null,"\u76F8\u4F3C\u70B9",-1),S=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u76F8\u4F3C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn2"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("NaN"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`

  `),n("span",{class:"token keyword"},"let"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"undefined"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" b "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"btn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'undefined is false'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"// undefined is false"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(` 
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'null is false'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"// null is false"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"undefined"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//true"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"undefined"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//false"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"btn2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Number"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//NaN"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"+"),s(" a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//NaN"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"========="'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Number"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//0"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//5"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),O=n("h3",{id:"\u76EE\u524D\u7684\u7528\u6CD5",tabindex:"-1"},"\u76EE\u524D\u7684\u7528\u6CD5",-1),P=n("p",null,[n("strong",null,'null\u8868\u793A"\u6CA1\u6709\u5BF9\u8C61"\uFF0C\u5373\u8BE5\u5904\u4E0D\u5E94\u8BE5\u6709\u503C\u3002\u5178\u578B\u7528\u6CD5\u662F\uFF1A')],-1),T=n("blockquote",null,[n("p",null,[s("\uFF081\uFF09 \u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u8868\u793A\u8BE5\u51FD\u6570\u7684\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u3002"),n("br"),s(" \uFF082\uFF09 \u4F5C\u4E3A\u5BF9\u8C61\u539F\u578B\u94FE\u7684\u7EC8\u70B9\u3002")])],-1),$=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("add(null)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("add(null)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`{{num}}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("add()"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("add()"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`{{num}}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    num`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"+="),s(`a
  `),n("span",{class:"token punctuation"},"}"),s(`
  
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),J=n("p",null,[n("strong",null,'undefined\u8868\u793A"\u7F3A\u5C11\u503C"\uFF0C\u5C31\u662F\u6B64\u5904\u5E94\u8BE5\u6709\u4E00\u4E2A\u503C\uFF0C\u4F46\u662F\u8FD8\u6CA1\u6709\u5B9A\u4E49\u3002\u5178\u578B\u7528\u6CD5\u662F\uFF1A')],-1),U=n("blockquote",null,[n("p",null,[s("\uFF081\uFF09\u53D8\u91CF\u88AB\u58F0\u660E\u4E86\uFF0C\u4F46\u6CA1\u6709\u8D4B\u503C\u65F6\uFF0C\u5C31\u7B49\u4E8Eundefined\u3002"),n("br"),s(" \uFF082) \u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u5E94\u8BE5\u63D0\u4F9B\u7684\u53C2\u6570\u6CA1\u6709\u63D0\u4F9B\uFF0C\u8BE5\u53C2\u6570\u7B49\u4E8Eundefined\u3002"),n("br"),s(" \uFF083\uFF09\u5BF9\u8C61\u6CA1\u6709\u8D4B\u503C\u7684\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u4E3Aundefined\u3002"),n("br"),s(" \uFF084\uFF09\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u9ED8\u8BA4\u8FD4\u56DEundefined\u3002")])],-1),z=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("log()"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("log"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`{{num}}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"var"),s(" i"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"var"),s(" student "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'wenl'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"18"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  

  `),n("span",{class:"token comment"},"// \u6253\u5370\u7ED3\u679C"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u53D8\u91CF\u88AB\u58F0\u660E\u4E86\uFF0C\u4F46\u6CA1\u6709\u8D4B\u503C\u65F6\uFF0C\u5C31\u7B49\u4E8Eundefined\u3002  "),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"// undefined"),s(`

    `),n("span",{class:"token comment"},"// \u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u5E94\u8BE5\u63D0\u4F9B\u7684\u53C2\u6570\u6CA1\u6709\u63D0\u4F9B\uFF0C\u8BE5\u53C2\u6570\u7B49\u4E8Eundefined\u3002  "),s(`
    `),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// undefined"),s(`

    `),n("span",{class:"token comment"},"// \u5BF9\u8C61\u6CA1\u6709\u8D4B\u503C\u7684\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u4E3Aundefined\u3002"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("student"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//wenl"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("student"),n("span",{class:"token punctuation"},"."),s("girlFriend"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//undefined"),s(`

    `),n("span",{class:"token comment"},"// \u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u9ED8\u8BA4\u8FD4\u56DEundefined\u3002"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" result  "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"123"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 123"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//undefined"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  
  

  

  `),n("span",{class:"token keyword"},"var"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  x `),n("span",{class:"token comment"},"// undefined"),s(`
  
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),G=_(`<h2 id="_2-object-is\u4E0E-\u533A\u522B" tabindex="-1">2.Object.is\u4E0E&quot;===&quot;,&quot;==&quot;\u533A\u522B</h2><h3 id="\u5F02\u540C" tabindex="-1">\u5F02\u540C</h3><blockquote><p>ES5 \u6BD4\u8F83\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u53EA\u6709\u4E24\u4E2A\u8FD0\u7B97\u7B26\uFF1A\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF08<code>==</code>\uFF09\u548C\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF08<code>===</code>\uFF09\u3002\u524D\u8005\u5728\u6BD4\u8F83\u65F6\u5BF9\u4E8E\u4E0D\u540C\u6570\u636E\u7C7B\u578B\u7684\u503C\u4F1A\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF1B\u800C\u540E\u8005\u4E0D\u4F1A\u8F6C\u6362\uFF0C\u4E14\u7ED3\u679C\u66F4\u5BB9\u6613\u9884\u6D4B\uFF0C\u5E76\u4E14\u56E0\u4E3A\u6CA1\u6709\u9690\u5F0F\u8F6C\u6362\uFF0C\u5168\u7B49\u6BD4\u8F83\u7684\u8FD0\u884C\u4F1A\u66F4\u5FEB\u3002\u56E0\u6B64\u5EFA\u8BAE\u4F7F\u7528\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26(<code>===</code>)\u8FDB\u884C\u503C\u7684\u6BD4\u8F83\u3002<br><a href="http://Object.is" target="_blank" rel="noopener noreferrer">Object.is</a> \u7528\u6765\u6BD4\u8F83\u4E24\u4E2A\u503C\u662F\u5426\u4E25\u683C\u76F8\u7B49\uFF0C\u4E0E\u4E25\u683C\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF08===\uFF09\u7684\u884C\u4E3A\u57FA\u672C\u4E00\u81F4\u3002\u89E3\u51B3\u4E86\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF08<code>===</code>\uFF09 NaN \u4E0D\u7B49\u4E8E\u81EA\u8EAB\uFF0C\u4EE5\u53CA +0 \u7B49\u4E8E -0\u7684\u95EE\u9898\u3002</p></blockquote><h3 id="\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26" tabindex="-1"><code>\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26 ===</code></h3><ol><li>\u4E0D\u540C\u7C7B\u578B\u7684\u503C\u6BD4\u8F83 \u5982\u679C\u6BD4\u8F83\u7684\u4E24\u4E2A\u503C\u7684\u7C7B\u578B\u4E0D\u540C\uFF0C\u76F4\u63A5\u8FD4\u56DEfalse\u3002</li></ol><div class="language-js line-numbers-mode"><pre><code><span class="token number">1</span> <span class="token operator">===</span> <span class="token string">&quot;1&quot;</span>          <span class="token comment">// false</span>
<span class="token boolean">true</span> <span class="token operator">===</span> <span class="token string">&quot;true&quot;</span>    <span class="token comment">// false</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u975E\u6570\u503C\u7C7B\u578B\u6BD4\u8F83 (\u503C\u76F8\u540C\u5C31\u8FD4\u56DE true\uFF0C\u503C\u4E0D\u540C\u5C31\u8FD4\u56DE false\u3002)</li></ol><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">null</span>        <span class="token comment">// true</span>
<span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span>   <span class="token comment">// false</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>\u6570\u503C\u7C7B\u578B\u6BD4\u8F83 (\u6B63\u5E38\u60C5\u51B5\u4E0B\u503C\u76F8\u540C\u5C31\u8FD4\u56DE true\uFF0C\u503C\u4E0D\u540C\u5C31\u8FD4\u56DE false\u3002\u4F46\u6709\u4E24\u4E2A\u7279\u6B8A\u60C5\u51B5\uFF1A)</li></ol><div class="language-js line-numbers-mode"><pre><code><span class="token number">1</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">//true</span>
<span class="token comment">// (\u7279\u6B8A) 0\u4E0D\u5206\u6B63\u8D1F</span>
<span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span><span class="token comment">//true</span>
<span class="token comment">// (\u7279\u6B8A) NaN \u672C\u8EAB\u4E0D\u5168\u7B49\u4E8E\u4EFB\u4F55\u503C\u3002</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span>     <span class="token comment">//false</span>
<span class="token number">NaN</span> <span class="token operator">!==</span> <span class="token number">NaN</span>     <span class="token comment">//true</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="4"><li>\u590D\u5408\u7C7B\u578B\u503C\u6BD4\u8F83 \uFF08\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u51FD\u6570 \u6BD4\u8F83\u5B83\u4EEC\u662F\u5426\u6307\u5411\u540C\u4E00\u4E2A\u5730\u5740 \u4E0D\u662F\u6BD4\u8F83\u5B83\u4EEC\u7684\u503C\u662F\u5426\u76F8\u7B49\uFF09</li></ol><div class="language-js line-numbers-mode"><pre><code><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>                             <span class="token comment">// false</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>                             <span class="token comment">// false</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   <span class="token comment">// false</span>
<span class="token comment">// \u4E0A\u9762\u4EE3\u7801\u5206\u522B\u6BD4\u8F83\u4E24\u4E2A\u7A7A\u5BF9\u8C61\u3001\u4E24\u4E2A\u7A7A\u6570\u7EC4\u3001\u4E24\u4E2A\u7A7A\u51FD\u6570\uFF0C\u7ED3\u679C\u90FD\u662F\u4E0D\u76F8\u7B49\u3002\u90A3\u662F\u56E0\u4E3A\u7A7A\u5BF9\u8C61\u3001\u7A7A\u6570\u7EC4\u3001\u7A7A\u51FD\u6570\u7684\u503C\uFF0C\u90FD\u5B58\u653E\u5728\u4E0D\u540C\u7684\u5185\u5B58\u5730\u5740\uFF0C\u56E0\u6B64\u7ED3\u679C\u662F false\u3002</span>
<span class="token keyword">var</span> v1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> v2 <span class="token operator">=</span> v1<span class="token punctuation">;</span>
v1 <span class="token operator">===</span> v2      <span class="token comment">// true</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u76F8\u7B49\u8FD0\u7B97\u7B26" tabindex="-1"><code>\u76F8\u7B49\u8FD0\u7B97\u7B26==</code></h3><blockquote><p>\u76F8\u7B49\u8FD0\u7B97\u7B26(<code>==</code>)\u7528\u6765\u6BD4\u8F83\u76F8\u540C\u7C7B\u578B\u7684\u6570\u636E\u4EE5\u53CA\u590D\u5408\u7C7B\u578B\u6570\u636E\u65F6\uFF0C\u4E0E\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26(<code>===</code>)\u5B8C\u5168\u4E00\u6837\u3002\u6BD4\u8F83\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u65F6\uFF0C\u76F8\u7B49\u8FD0\u7B97\u7B26\u4F1A\u5148\u5C06\u6570\u636E\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF0C\u7136\u540E\u518D\u7528\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\u6BD4\u8F83\u3002</p></blockquote><ol><li>\u539F\u59CB\u7C7B\u578B\u7684\u503C\u4F1A\u8F6C\u6362\u6210\u6570\u503C\u518D\u8FDB\u884C\u6BD4\u8F83\u3002\u8F6C\u6362\u89C4\u5219\u662F\u4F7F\u7528 Number() \u8F6C\u6362\u3002</li></ol><div class="language-js line-numbers-mode"><pre><code> <span class="token number">1</span> <span class="token operator">==</span> <span class="token boolean">true</span>             <span class="token comment">// true   \u7B49\u540C\u4E8E 1 === Number(true)</span>
 <span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span>            <span class="token comment">// true   \u7B49\u540C\u4E8E 0 === Number(false)</span>
 <span class="token string">&#39;true&#39;</span> <span class="token operator">==</span> <span class="token boolean">true</span>        <span class="token comment">// false  \u7B49\u540C\u4E8E Number(&#39;true&#39;) === Number(true)</span>
 <span class="token string">&#39;&#39;</span> <span class="token operator">==</span> <span class="token number">0</span>               <span class="token comment">// true   \u7B49\u540C\u4E8E Number(&#39;&#39;) === 0</span>
 <span class="token string">&#39;&#39;</span> <span class="token operator">==</span> <span class="token boolean">false</span>           <span class="token comment">// true   \u7B49\u540C\u4E8E 0 === 0</span>
 <span class="token string">&#39;\\n  123  \\t&#39;</span> <span class="token operator">==</span> <span class="token number">123</span>  <span class="token comment">// true  \u56E0\u4E3A\u5B57\u7B26\u4E32\u8F6C\u4E3A\u6570\u5B57\u65F6\uFF0C\u7701\u7565\u524D\u7F6E\u548C\u540E\u7F6E\u7684\u7A7A\u683C</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>undefined \u548C null \u4E0E\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u6BD4\u8F83\u65F6\uFF0C\u7ED3\u679C\u90FD\u4E3A false\uFF0C\u5B83\u4EEC\u4E92\u76F8\u6BD4\u8F83\u65F6\u7ED3\u679C\u4E3A true\u3002</li></ol><div class="language-js line-numbers-mode"><pre><code> <span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">null</span>          <span class="token comment">// false</span>
 <span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">undefined</span>     <span class="token comment">// false</span>
 <span class="token number">0</span> <span class="token operator">==</span> <span class="token keyword">null</span>              <span class="token comment">// false</span>
 <span class="token number">0</span> <span class="token operator">==</span> <span class="token keyword">undefined</span>         <span class="token comment">// false</span>
 <span class="token number">NaN</span> <span class="token operator">==</span> <span class="token keyword">undefined</span>       <span class="token comment">// false</span>
 <span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">null</span>      <span class="token comment">// true</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="3"><li>\u5BF9\u8C61\uFF08\u8FD9\u91CC\u6307\u5E7F\u4E49\u7684\u5BF9\u8C61\uFF0C\u5305\u62EC\u6570\u7EC4\u548C\u51FD\u6570\uFF09\u4E0E\u539F\u59CB\u7C7B\u578B\u7684\u503C\u6BD4\u8F83\u65F6\uFF0C\u5BF9\u8C61\u8F6C\u6362\u6210\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u518D\u8FDB\u884C\u6BD4\u8F83\u3002</li></ol><div class="language-js line-numbers-mode"><pre><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span>   <span class="token comment">// true  \u7B49\u540C\u4E8E Number([1]) == 1</span>

<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span>      <span class="token comment">// true  \u7B49\u540C\u4E8E String([1]) == &#39;1&#39;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;1,2&#39;</span> <span class="token comment">// true  \u7B49\u540C\u4E8E String([1, 2]) == &#39;1,2&#39;</span>

<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">true</span>    <span class="token comment">// true  \u7B49\u540C\u4E8E Number([1]) == Number(true)</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">true</span>    <span class="token comment">// false \u7B49\u540C\u4E8E Number([2]) == Number(true)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="object-is-value1-value2" tabindex="-1"><a href="http://Object.is" target="_blank" rel="noopener noreferrer">Object.is</a>(value1, value2)</h3><blockquote><p>\u4E25\u683C\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF08===\uFF09\u7684\u884C\u4E3A\u57FA\u672C\u4E00\u81F4 \u4E0D\u540C\u4E4B\u5904\u53EA\u6709\u4E24\u4E2A\uFF1A\u4E00\u662F+0\u4E0D\u7B49\u4E8E-0\uFF0C\u4E8C\u662FNaN\u7B49\u4E8E\u81EA\u8EAB\u3002</p></blockquote><div class="language-js line-numbers-mode"><pre><code> <span class="token operator">+</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span>            <span class="token comment">//true</span>
 <span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span>          <span class="token comment">// false</span>

 Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span>    <span class="token comment">// false</span>
 Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5BF9\u4E8E\u4E0D\u517C\u5BB9 ES6 \u7684\u6D4F\u89C8\u5668\uFF0C\u53EF\u4EE5\u5728ES5 \u73AF\u5883\u4E0B\u901A\u8FC7\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C<code>\u90E8\u7F72Object.is</code>\u3002</p><div class="language-js line-numbers-mode"><pre><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>Object<span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9488\u5BF9+0 \u4E0D\u7B49\u4E8E -0\u7684\u60C5\u51B5</span>
      <span class="token keyword">return</span> x <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token number">1</span> <span class="token operator">/</span> x <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">/</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u9488\u5BF9NaN\u7684\u60C5\u51B5</span>
    <span class="token keyword">return</span> x <span class="token operator">!==</span> x <span class="token operator">&amp;&amp;</span> y <span class="token operator">!==</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_3-\u7BAD\u5934\u51FD\u6570\u4E2D\u7684this\u6307\u5411" tabindex="-1">3.\u7BAD\u5934\u51FD\u6570\u4E2D\u7684this\u6307\u5411</h2><blockquote><p><code>this</code>\u4F5C\u4E3A\u5173\u952E\u5B57\uFF0C\u5B83\u7684\u4F5C\u7528\u5C31\u662F\u5F15\u7528\uFF0C\u5E76\u4E14\u5B83\u901A\u5E38\u53EA\u5199\u5728\u51FD\u6570\u5185\u90E8\u5C31\u662F\u51FD\u6570\u4F53\u5185</p></blockquote><h3 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49</h3><ul><li><strong>\u666E\u901A\u51FD\u6570\uFF1A</strong> this\u4E0E\u5176\u5B9A\u4E49\u4F4D\u7F6E\u65E0\u5173\uFF0C<strong><code>\u8C01\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0Cthis\u5C31\u6307\u5411\u8C01</code></strong>\u3002</li><li><strong>\u7BAD\u5934\u51FD\u6570\uFF1A</strong> this\u8DDF\u8C03\u7528\u8005\u65E0\u5173\uFF0C<strong><code>\u5B9A\u4E49\u4F4D\u7F6E\u6240\u5728\u7684\u4F5C\u7528\u57DF\u7684this\uFF08\u51FD\u6570\u4F5C\u7528\u57DF\uFF09\u662F\u8C01\uFF0C\u7BAD\u5934\u51FD\u6570\u7684this\u5C31\u6307\u5411\u8C01</code></strong></li></ul><h3 id="\u793A\u4F8B\uFF1A" tabindex="-1">\u793A\u4F8B\uFF1A</h3><blockquote><p>\u666E\u901A\u51FD\u6570(\u5168\u5C40\u4E2D)\uFF1A</p></blockquote><div class="language-js line-numbers-mode"><pre><code> window<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;windowName&#39;</span>
 <span class="token keyword">function</span> <span class="token function">demo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>
 a<span class="token punctuation">.</span>speak <span class="token operator">=</span> demo1

 <span class="token comment">// \u76F4\u63A5\u6267\u884Cdemo1\u51FD\u6570\uFF0C\u867D\u7136\u770B\u4E0A\u53BB\u6CA1\u6709\u5176\u4ED6\u4E1C\u897F\u53BB\u8C03\u7528demo\uFF0C\u5B9E\u9645\u4E0A\u662Fwindow\u5728\u8C03\u7528,\u6240\u4EE5this\u6307\u5411window</span>
 <span class="token function">demo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// windowName</span>
 <span class="token comment">// \u7B2C\u4E8C\u6B21\u6211\u4EEC\u7528a\u53BB\u8C03\u7528\uFF0C\u5219this\u6307\u5411a</span>
 a<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// a</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>\u7BAD\u5934\u51FD\u6570(\u5168\u5C40\u4E2D)\uFF1A</p></blockquote><div class="language-js line-numbers-mode"><pre><code> window<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span>
 <span class="token keyword">let</span> <span class="token function-variable function">demo1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token function">demo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
 <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">speak</span><span class="token operator">:</span> demo1
 <span class="token punctuation">}</span>
 a<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>

 <span class="token comment">//demo1\u5B9A\u4E49\u6240\u5728\u7684\u4F5C\u7528\u57DF\u662F\u5168\u5C40\uFF0C\u800C\u5168\u5C40\u7684this\u6307\u5411window\uFF0C\u6240\u4EE5\u65E0\u8BBA\u662F\u76F4\u63A5\u8C03\u7528\uFF08\u4F7F\u7528window\u8C03\u7528\uFF09\u8FD8\u662F\u7528\u5BF9\u8C61a\u8C03\u7528\uFF0C\u6700\u7EC8this\u90FD\u662Fwindow</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>\u666E\u901A\u51FD\u6570(\u5728\u5BF9\u8C61\u5C5E\u6027\u4E2D)\uFF1A</p></blockquote><div class="language-js line-numbers-mode"><pre><code> <span class="token keyword">let</span> demo2 <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo2&#39;</span><span class="token punctuation">,</span>
   <span class="token function-variable function">speak1</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">speak2</span><span class="token operator">:</span> demo2<span class="token punctuation">.</span>speak1
 <span class="token punctuation">}</span>
 demo2<span class="token punctuation">.</span><span class="token function">speak1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// demo2</span>
 b<span class="token punctuation">.</span><span class="token function">speak2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// b</span>

 <span class="token comment">//demo2\u8C03\u7528\u65F6this\u6307\u5411demo2\uFF0Cb\u8C03\u7528\u65F6this\u6307\u5411b</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote><p>\u7BAD\u5934\u51FD\u6570(\u5728\u5BF9\u8C61\u5C5E\u6027\u4E2D)\uFF1A</p></blockquote><div class="language-js line-numbers-mode"><pre><code> window<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span>
 <span class="token keyword">let</span> demo2 <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo2&#39;</span><span class="token punctuation">,</span>
   <span class="token function-variable function">speak1</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">speak2</span><span class="token operator">:</span> demo2<span class="token punctuation">.</span>speak1
 <span class="token punctuation">}</span>
 demo2<span class="token punctuation">.</span><span class="token function">speak1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
 b<span class="token punctuation">.</span><span class="token function">speak2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>

 <span class="token comment">// \u7BAD\u5934\u51FD\u6570speak1\u5B9A\u4E49\u5728\u5BF9\u8C61demo2\u4E2D\uFF0C\u4F46\u662F\u5BF9\u8C61demo2\u7684this\u4ECD\u7136\u6307\u5411window\uFF0C\u6240\u4EE5\u65E0\u8BBA\u662Fdemo2\u8C03\u7528\u8FD8\u662Fb\u8C03\u7528\uFF0C\u6700\u7EC8this\u90FD\u662F\u6307\u5411window</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>\u666E\u901A\u51FD\u6570(\u5728\u7C7B\u4E2D)\uFF1A</p></blockquote><div class="language-js line-numbers-mode"><pre><code>  <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">speak1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  c<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;c&#39;</span>
  <span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;d&#39;</span>
  <span class="token punctuation">}</span>
  c<span class="token punctuation">.</span><span class="token function">speak1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// c</span>
  d<span class="token punctuation">.</span>speak1 <span class="token operator">=</span> c<span class="token punctuation">.</span>speak1
  d<span class="token punctuation">.</span><span class="token function">speak1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// d</span>

  <span class="token comment">//\u5B9E\u4F8Bc\u8C03\u7528\u65F6this\u6307\u5411\u5B9E\u4F8Bc\uFF0C\u5BF9\u8C61b\u8C03\u7528\u65F6this\u6307\u5411\u5BF9\u8C61b \u8C01\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570 this\u5C31\u6307\u5411\u8C01</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p>\u7BAD\u5934\u51FD\u6570(\u5728\u7C7B\u4E2D)\uFF1A</p></blockquote><div class="language-js line-numbers-mode"><pre><code>  <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">speak1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  c<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;c&#39;</span>
  <span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;d&#39;</span>
  <span class="token punctuation">}</span>
  c<span class="token punctuation">.</span><span class="token function">speak1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// c</span>
  d<span class="token punctuation">.</span>speak1 <span class="token operator">=</span> c<span class="token punctuation">.</span>speak1
  d<span class="token punctuation">.</span><span class="token function">speak1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// c</span>

  <span class="token comment">//\u7BAD\u5934\u51FD\u6570speak1\u5B9A\u4E49\u5728\u7C7BPerson\u4E2D\uFF0CPerson\u7684this\u6307\u5411\u5B83\u7684\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u5373\u5B9E\u4F8B\u5BF9\u8C61c\u3002\u6240\u4EE5\u65E0\u8BBA\u662F\u4F7F\u7528c\u8C03\u7528\u8FD8\u662Fd\u8C03\u7528\uFF0C\u6700\u7EC8this\u90FD\u6307\u5411c</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><a href="https://jsrun.net/new" target="_blank" rel="noopener noreferrer">\u8BD5\u4E00\u8BD5</a></p>`,43);function H(e,E,c,l,r,B){const i=A("render-demo-0"),p=A("demo"),k=A("render-demo-1"),F=A("render-demo-2");return x(),N("div",null,[q,g(p,{sourceCode:`<template>
  <div>
    <xl-button @click="btn" type="primary">\u76F8\u4F3C</xl-button>
    <xl-button @click="btn2" type="success">NaN</xl-button>
  </div>
</template>

<script setup>

  let a = undefined
  let b = null

  function btn(){
    if (!a) {
      console.log('undefined is false');// undefined is false
    }
    if (!b){ 
      console.log('null is false');// null is false
    }
    console.log(undefined == null); //true
    console.log(undefined === null); //false
  }

  function btn2(){
    console.log(Number(a)); //NaN
    console.log(5 + a); //NaN
    console.log("=========");
    console.log(Number(b)); //0
    console.log(5 + b); //5
  }
  
<\/script>

<style scoped>

</style>
`},{description:C(()=>[V]),highlight:C(()=>[S]),default:C(()=>[g(i)]),_:1}),O,P,T,g(p,{sourceCode:`<template>
  <div>
    <xl-button @click="add(null)" type="warning">add(null)</xl-button>{{num}}
    <xl-button @click="add()" type="danger">add()</xl-button>{{num}}
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  let num = ref(0)
  function add(a) {
    num.value+=a
  }
  
<\/script>

<style scoped>

</style>
`},{highlight:C(()=>[$]),default:C(()=>[g(k)]),_:1}),J,U,g(p,{sourceCode:`<template>
  <div>
    <xl-button @click="log()" type="warning">log</xl-button>{{num}}
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  var i;

  function f(x){
    console.log(x)
  }

  var student = {
    name:'wenl',
    age:18
  }
  

  // \u6253\u5370\u7ED3\u679C
  function log(){
    // \u53D8\u91CF\u88AB\u58F0\u660E\u4E86\uFF0C\u4F46\u6CA1\u6709\u8D4B\u503C\u65F6\uFF0C\u5C31\u7B49\u4E8Eundefined\u3002  
    console.log(i);// undefined

    // \u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u5E94\u8BE5\u63D0\u4F9B\u7684\u53C2\u6570\u6CA1\u6709\u63D0\u4F9B\uFF0C\u8BE5\u53C2\u6570\u7B49\u4E8Eundefined\u3002  
    f() // undefined

    // \u5BF9\u8C61\u6CA1\u6709\u8D4B\u503C\u7684\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u4E3Aundefined\u3002
    console.log(student.name); //wenl
    console.log(student.girlFriend); //undefined

    // \u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u9ED8\u8BA4\u8FD4\u56DEundefined\u3002
    const result  = f("123") // 123
    console.log(result); //undefined
  }

  
  

  

  var x = f();
  x // undefined
  
<\/script>

<style scoped>

</style>
`},{highlight:C(()=>[z]),default:C(()=>[g(F)]),_:1}),G])}var L=h(j,[["render",H]]);export{K as __pageData,L as default};
