import{_ as w,c as x,a as b,w as C,e as N,b as n,d as s,r as D,o as h,V as _}from"./app.a5b2d336.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveComponent:f,withCtx:p,createVNode:l,createElementVNode:i,openBlock:E,createElementBlock:k}=_,e=o("\u76F8\u4F3C"),r=o("NaN");function d(F,m){const a=f("xl-button");return E(),k("div",null,[i("div",null,[l(a,{onClick:F.btn,type:"primary"},{default:p(()=>[e]),_:1},8,["onClick"]),l(a,{onClick:F.btn2,type:"success"},{default:p(()=>[r]),_:1},8,["onClick"])])])}return{render:d,...{setup(F,{expose:m}){m();let a,t=null;function u(){console.log("undefined is false"),console.log("null is false"),console.log(null==null),console.log(void 0===null)}function c(){console.log(Number(a)),console.log(5+a),console.log("========="),console.log(Number(t)),console.log(5+t)}const g={a,b:t,btn:u,btn2:c};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}}}(),"render-demo-1":function(){const{createTextVNode:o,resolveComponent:f,withCtx:p,createVNode:l,toDisplayString:i,createElementVNode:E,openBlock:k,createElementBlock:e}=_,r=o("add(null)"),d=o("add()");function B(a,t){const u=f("xl-button");return k(),e("div",null,[E("div",null,[l(u,{onClick:t[0]||(t[0]=c=>a.add(null)),type:"warning"},{default:p(()=>[r]),_:1}),o(i(a.num)+" ",1),l(u,{onClick:t[1]||(t[1]=c=>a.add()),type:"danger"},{default:p(()=>[d]),_:1}),o(i(a.num),1)])])}const{ref:F}=_;return{render:B,...{setup(a,{expose:t}){t();let u=F(0);function c(v){u.value+=v}const g={num:u,add:c,ref:F};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}}}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:f,withCtx:p,createVNode:l,toDisplayString:i,createElementVNode:E,openBlock:k,createElementBlock:e}=_,r=o("log");function d(m,a){const t=f("xl-button");return k(),e("div",null,[E("div",null,[l(t,{onClick:a[0]||(a[0]=u=>m.log()),type:"warning"},{default:p(()=>[r]),_:1}),o(i(m.num),1)])])}const{reactive:B}=_;return{render:d,...{setup(m,{expose:a}){a();var t;function u(A){console.log(A)}var c={name:"wenl",age:18};function g(){console.log(t),u(),console.log(c.name),console.log(c.girlFriend);const A=u("123");console.log(A)}var v=u();const y={i:t,f:u,student:c,log:g,x:v,reactive:B};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}}}()}},I='{"title":"1.null \u548C undefined","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.null \u548C undefined","slug":"_1-null-\u548C-undefined"},{"level":3,"title":"\u76F8\u4F3C\u70B9","slug":"\u76F8\u4F3C\u70B9"},{"level":3,"title":"\u76EE\u524D\u7684\u7528\u6CD5","slug":"\u76EE\u524D\u7684\u7528\u6CD5"}],"relativePath":"blog/01_js/1_null\u548Cundefined.md","lastUpdated":1659348308000}',S=N(`<h2 id="_1-null-\u548C-undefined" tabindex="-1">1.null \u548C undefined</h2><ul><li>\u4E00\u822C\u672A\u6307\u5B9A\u6307\u5411\u5BF9\u8C61\u7684\u6307\u9488\u4F1A\u88AB\u9ED8\u8BA4\u4E3A<code>Null</code>\u7C7B\u578B\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u503C\u4E3A<code>Null</code>\u7684\u53D8\u91CF\u5176\u5B9E\u9645\u7C7B\u578B\u4E3A<code>object</code>\uFF0C\u56E0\u4E3A\u7CFB\u7EDF\u4F1A\u5C06\u5176\u89C6\u4E3A\u4E00\u4E2A\u4FDD\u5B58\u5BF9\u8C61\u7684\u53D8\u91CF\uFF0C\u53EA\u4E0D\u8FC7\u8FD8\u672A\u521D\u59CB\u5316\u3002</li><li>Java\u7406\u89E3\u5C31\u662F\uFF1Anull\u50CF\u5728Java\u91CC\u4E00\u6837\uFF0C\u88AB\u5F53\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u4E8E Java \u6765\u8BF4\u4E0D\u53EF\u80FD\u5B58\u5728\u4E00\u4E2A\u201C\u4E0D\u5B58\u5728\u201D\u7684\u6210\u5458\uFF08\u4E0D\u5B58\u5728\u7684\u8BDD\u76F4\u63A5\u5C31\u7F16\u8BD1\u5931\u8D25\u4E86\uFF09\uFF0C\u6240\u4EE5\u53EA\u7528 null \u6765\u8868\u793A\u8BED\u4E49\u4E0A\u7684\u7A7A\u503C\u3002</li><li>\u5728JavaScript\u4E2D\uFF0C\u5C06\u4E00\u4E2A\u53D8\u91CF\u8D4B\u503C\u4E3A<code>undefined</code>\u6216<code>null</code>\uFF0C\u51E0\u4E4E\u6CA1\u533A\u522B\u3002</li><li>\u51FA\u73B0<code>undefined</code>\u539F\u56E0\uFF1A <ul><li>JavaScript\u7684\u6700\u521D\u7248\u672C\u6CA1\u6709\u5305\u62EC\u9519\u8BEF\u5904\u7406\u673A\u5236\uFF0C\u53D1\u751F\u6570\u636E\u7C7B\u578B\u4E0D\u5339\u914D\u65F6\uFF0C\u5F80\u5F80\u662F\u81EA\u52A8\u8F6C\u6362\u7C7B\u578B\u6216\u8005\u9ED8\u9ED8\u5730\u5931\u8D25</li><li>Brendan Eich\uFF08\u5F00\u53D1\u8005\uFF09\u89C9\u5F97\uFF0C\u5982\u679C<code>null</code>\u81EA\u52A8\u8F6C\u4E3A0\uFF0C<strong><code>\u5F88\u4E0D\u5BB9\u6613\u53D1\u73B0\u9519\u8BEF</code></strong>\u3002\u6240\u4EE5\u6574\u4E86\u4E2A<code>undefined </code></li></ul></li></ul><h3 id="\u76F8\u4F3C\u70B9" tabindex="-1">\u76F8\u4F3C\u70B9</h3><ul><li>undefined\u548Cnull\u5728if\u8BED\u53E5\u4E2D\uFF0C\u90FD\u4F1A\u88AB\u81EA\u52A8\u8F6C\u4E3Afalse\uFF0C\u76F8\u7B49\u8FD0\u7B97\u7B26\u751A\u81F3\u76F4\u63A5\u62A5\u544A\u4E24\u8005\u76F8\u7B49\u3002</li></ul><div class="language-js line-numbers-mode"><pre><code>
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
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,5),q=n("div",null,"\u76F8\u4F3C\u70B9",-1),j=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
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
`)])])],-1),T=n("h3",{id:"\u76EE\u524D\u7684\u7528\u6CD5",tabindex:"-1"},"\u76EE\u524D\u7684\u7528\u6CD5",-1),$=n("p",null,[n("strong",null,'null\u8868\u793A"\u6CA1\u6709\u5BF9\u8C61"\uFF0C\u5373\u8BE5\u5904\u4E0D\u5E94\u8BE5\u6709\u503C\u3002\u5178\u578B\u7528\u6CD5\u662F\uFF1A')],-1),J=n("blockquote",null,[n("p",null,[s("\uFF081\uFF09 \u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u8868\u793A\u8BE5\u51FD\u6570\u7684\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u3002"),n("br"),s(" \uFF082\uFF09 \u4F5C\u4E3A\u5BF9\u8C61\u539F\u578B\u94FE\u7684\u7EC8\u70B9\u3002")])],-1),P=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
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
`)])])],-1),O=n("p",null,[n("strong",null,'undefined\u8868\u793A"\u7F3A\u5C11\u503C"\uFF0C\u5C31\u662F\u6B64\u5904\u5E94\u8BE5\u6709\u4E00\u4E2A\u503C\uFF0C\u4F46\u662F\u8FD8\u6CA1\u6709\u5B9A\u4E49\u3002\u5178\u578B\u7528\u6CD5\u662F\uFF1A')],-1),U=n("blockquote",null,[n("p",null,[s("\uFF081\uFF09\u53D8\u91CF\u88AB\u58F0\u660E\u4E86\uFF0C\u4F46\u6CA1\u6709\u8D4B\u503C\u65F6\uFF0C\u5C31\u7B49\u4E8Eundefined\u3002"),n("br"),s(" \uFF082) \u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u5E94\u8BE5\u63D0\u4F9B\u7684\u53C2\u6570\u6CA1\u6709\u63D0\u4F9B\uFF0C\u8BE5\u53C2\u6570\u7B49\u4E8Eundefined\u3002"),n("br"),s(" \uFF083\uFF09\u5BF9\u8C61\u6CA1\u6709\u8D4B\u503C\u7684\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u4E3Aundefined\u3002"),n("br"),s(" \uFF084\uFF09\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u9ED8\u8BA4\u8FD4\u56DEundefined\u3002")])],-1),z=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
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
`)])])],-1);function G(o,f,p,l,i,E){const k=D("render-demo-0"),e=D("demo"),r=D("render-demo-1"),d=D("render-demo-2");return h(),x("div",null,[S,b(e,{sourceCode:`<template>
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
`},{description:C(()=>[q]),highlight:C(()=>[j]),default:C(()=>[b(k)]),_:1}),T,$,J,b(e,{sourceCode:`<template>
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
`},{highlight:C(()=>[P]),default:C(()=>[b(r)]),_:1}),O,U,b(e,{sourceCode:`<template>
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
`},{highlight:C(()=>[z]),default:C(()=>[b(d)]),_:1})])}var K=w(V,[["render",G]]);export{I as __pageData,K as default};
