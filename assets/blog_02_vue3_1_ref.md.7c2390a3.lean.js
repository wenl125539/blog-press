import{_ as R,c as w,a as B,w as c,b as n,e as D,r as E,o as V,V as F,d as s}from"./app.437044c9.js";const N={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:v,withCtx:p,createVNode:l,toDisplayString:m,createElementVNode:o,openBlock:f,createElementBlock:u}=F,g=e("A++"),i=e("B++"),k=e("\u67E5\u770BB\u5C5E\u6027");function b(t,d){const a=v("xl-button");return f(),u("div",null,[o("div",null,[o("div",null,[l(a,{onClick:t.addA,type:"primary"},{default:p(()=>[g]),_:1},8,["onClick"]),e(m(t.A)+" \u975E\u54CD\u5E94\u5F0F",1)]),o("div",null,[l(a,{onClick:t.addB,type:"primary"},{default:p(()=>[i]),_:1},8,["onClick"]),e(m(t.B)+" \u54CD\u5E94\u5F0F",1)]),o("div",null,[l(a,{onClick:t.showB,type:"primary"},{default:p(()=>[k]),_:1},8,["onClick"])])])])}const{ref:r}=F;return{render:b,...{setup(t,{expose:d}){d();let a=0,_=r(0);function x(){a++,console.log(`\u5F53\u524DA\u7684\u503C\u4E3A\uFF1A${a}`)}function h(){_.value++,console.log(`\u5F53\u524DB\u7684\u503C\u4E3A\uFF1A${_.value}`)}function A(){console.log(_)}const C={A:a,B:_,addA:x,addB:h,showB:A,ref:r};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}}}(),"render-demo-1":function(){const{createElementVNode:e,createTextVNode:v,resolveComponent:p,withCtx:l,createVNode:m,openBlock:o,createElementBlock:f}=F,u={ref:"myRef",class:"box"},g=v("\u83B7\u53D6DOM\u5143\u7D20");function i(r,y){const t=p("xl-button");return o(),f("div",null,[e("div",u,"DOM\u5143\u7D20",512),m(t,{onClick:r.getRef,type:"primary"},{default:l(()=>[g]),_:1},8,["onClick"])])}const{ref:k}=F;return{render:i,...{setup(r,{expose:y}){y();const t=k(null);function d(){console.log(t.value)}const a={myRef:t,getRef:d,ref:k};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}}}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:v,withCtx:p,createVNode:l,createElementVNode:m,openBlock:o,createElementBlock:f}=F,u=e("isRef\u6309\u94AE");function g(r,y){const t=v("xl-button");return o(),f("div",null,[m("div",null,[l(t,{onClick:r.btn,type:"primary"},{default:p(()=>[u]),_:1},8,["onClick"])])])}const{ref:i,isRef:k}=F;return{render:g,...{setup(r,{expose:y}){y();let t=i("\u6211\u662Fref"),d=123;function a(){console.log(t.value,k(t)),console.log(d,k(d))}const _={myRef:t,notRef:d,btn:a,ref:i,isRef:k};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}}}()}},I='{"title":"\u4EC0\u4E48\u662F ref","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F ref","slug":"\u4EC0\u4E48\u662F-ref"},{"level":2,"title":"ref \u83B7\u53D6\u5143\u7D20","slug":"ref-\u83B7\u53D6\u5143\u7D20"},{"level":2,"title":"isRef","slug":"isref"}],"relativePath":"blog/02_vue3/1_ref.md","lastUpdated":1658995367000}',q=n("h2",{id:"\u4EC0\u4E48\u662F-ref",tabindex:"-1"},"\u4EC0\u4E48\u662F ref",-1),O=n("ul",null,[n("li",null,"ref \u548C reactive \u4E00\u6837,\u4E5F\u662F\u7528\u6765\u5B9E\u73B0\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u65B9\u6CD5"),n("li",null,"ref \u5E95\u5C42\u5176\u5B9E\u8FD8\u662F reactive,\u6240\u4EE5\u5F53\u8FD0\u884C\u65F6\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u6839\u636E\u4F20\u5165\u7684 ref \u8F6C\u6362\u6210 reactive."),n("li",null,"\u5728 vue \u4E2D\u4F7F\u7528 ref \u7684\u503C\u4E0D\u7528\u901A\u8FC7 value \u83B7\u53D6"),n("li",null,"\u5728 js \u4E2D\u4F7F\u7528 ref \u7684\u503C\u5FC5\u987B\u901A\u8FC7 value \u83B7\u53D6 \u{1F447}")],-1),M=n("div",null,"ref",-1),$=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("addA"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("A++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s("{{ A }} \u975E\u54CD\u5E94\u5F0F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- \u5728vue\u4E2D\u4F7F\u7528ref\u7684\u503C\u4E0D\u7528\u901A\u8FC7value\u83B7\u53D6 -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("addB"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("B++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s("{{ B }} \u54CD\u5E94\u5F0F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showB"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u67E5\u770BB\u5C5E\u6027"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token comment"},"// \u5B9A\u4E49A B"),s(`
`),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token constant"},"A"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token constant"},"B"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"addA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token constant"},"A"),n("span",{class:"token operator"},"++"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5F53\u524DA\u7684\u503C\u4E3A\uFF1A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token constant"},"A"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// \u6CE8\u610F\u5728js\u4E2D\u4F7F\u7528ref\u7684\u503C\u5FC5\u987B\u901A\u8FC7value\u83B7\u53D6"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"addB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token constant"},"B"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"++"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5F53\u524DB\u7684\u503C\u4E3A\uFF1A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token constant"},"B"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"showB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"B"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),j=D(`<h2 id="ref-\u83B7\u53D6\u5143\u7D20" tabindex="-1">ref \u83B7\u53D6\u5143\u7D20</h2><p><strong>vue2.x \u83B7\u53D6 DOM \u5143\u7D20</strong></p><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
this.$refs.myRef
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><p><strong>vue3.x \u83B7\u53D6 DOM \u5143\u7D20</strong></p>`,5),S=n("div",null,"vue3 ref \u83B7\u53D6 DOM \u5143\u7D20",-1),T=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("myRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("DOM\u5143\u7D20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u83B7\u53D6DOM\u5143\u7D20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token comment"},"// \u50A8\u5B58DOM\u5BF9\u8C61"),s(`
`),n("span",{class:"token keyword"},"const"),s(" myRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("myRef"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" pink"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),P=D(`<h2 id="isref" tabindex="-1">isRef</h2><p>\u5224\u65AD\u662F\u4E0D\u662F\u4E00\u4E2Aref\u5BF9\u8C61</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>ref <span class="token punctuation">,</span>isRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">let</span> myRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662Fref&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> notRef <span class="token operator">=</span> <span class="token number">123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>myRef<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>notRef<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,3),U=n("div",null,"isRef\u6D4B\u8BD5",-1),z=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("isRef\u6309\u94AE"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s("ref "),n("span",{class:"token punctuation"},","),s("isRef"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" myRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6211\u662Fref'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" notRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"123"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"btn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("myRef"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},","),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("myRef"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u6211\u662Fref true"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("notRef"),n("span",{class:"token punctuation"},","),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("notRef"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//123 false"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function G(e,v,p,l,m,o){const f=E("render-demo-0"),u=E("demo"),g=E("render-demo-1"),i=E("render-demo-2");return V(),w("div",null,[q,O,B(u,{sourceCode:`<template>
  <div>
    <div><xl-button @click="addA" type="primary">A++</xl-button>{{ A }} \u975E\u54CD\u5E94\u5F0F</div>
    <!-- \u5728vue\u4E2D\u4F7F\u7528ref\u7684\u503C\u4E0D\u7528\u901A\u8FC7value\u83B7\u53D6 -->
    <div><xl-button @click="addB" type="primary">B++</xl-button>{{ B }} \u54CD\u5E94\u5F0F</div>
    <div>
      <xl-button @click="showB" type="primary">\u67E5\u770BB\u5C5E\u6027</xl-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// \u5B9A\u4E49A B
let A = 0
let B = ref(0)

function addA() {
  A++
  console.log(\`\u5F53\u524DA\u7684\u503C\u4E3A\uFF1A\${A}\`)
}
// \u6CE8\u610F\u5728js\u4E2D\u4F7F\u7528ref\u7684\u503C\u5FC5\u987B\u901A\u8FC7value\u83B7\u53D6
function addB() {
  B.value++
  console.log(\`\u5F53\u524DB\u7684\u503C\u4E3A\uFF1A\${B.value}\`)
}
function showB() {
  console.log(B)
}
<\/script>

<style></style>
`},{description:c(()=>[M]),highlight:c(()=>[$]),default:c(()=>[B(f)]),_:1}),j,B(u,{sourceCode:`<template>
  <div ref="myRef" class="box">DOM\u5143\u7D20</div>
  <xl-button @click="getRef" type="primary">\u83B7\u53D6DOM\u5143\u7D20</xl-button>
</template>

<script setup>
import { ref } from 'vue'
// \u50A8\u5B58DOM\u5BF9\u8C61
const myRef = ref(null)

function getRef() {
  console.log(myRef.value)
}
<\/script>
<style scoped>
.box {
  margin: 10px;
  width: 100%;
  height: 50px;
  background-color: pink;
}
</style>
`},{description:c(()=>[S]),highlight:c(()=>[T]),default:c(()=>[B(g)]),_:1}),P,B(u,{sourceCode:`<template>
  <div>
    <xl-button @click="btn" type="primary">isRef\u6309\u94AE</xl-button>
  </div>
</template>

<script setup>
  import {ref ,isRef} from 'vue'
  let myRef = ref('\u6211\u662Fref')
  let notRef = 123

  function btn(){
    console.log(myRef.value,isRef(myRef)); //\u6211\u662Fref true
    console.log(notRef,isRef(notRef)); //123 false
  }
<\/script>

<style scoped>

</style>
`},{description:c(()=>[U]),highlight:c(()=>[z]),default:c(()=>[B(i)]),_:1})])}var J=R(N,[["render",G]]);export{I as __pageData,J as default};
