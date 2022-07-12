import{_ as b,c as w,b as v,w as l,a as n,d as V,r as E,o as N,V as B,e as t}from"./app.dd1ad7f2.js";const R={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:g,withCtx:u,createVNode:c,toDisplayString:i,createElementVNode:o,openBlock:k,createElementBlock:p}=B,r=e("A++"),F=e("B++"),m=e("\u67E5\u770BB\u5C5E\u6027");function y(s,f){const a=g("xl-button");return k(),p("div",null,[o("div",null,[o("div",null,[c(a,{onClick:s.addA,type:"primary"},{default:u(()=>[r]),_:1},8,["onClick"]),e(i(s.A)+" \u975E\u54CD\u5E94\u5F0F",1)]),o("div",null,[c(a,{onClick:s.addB,type:"primary"},{default:u(()=>[F]),_:1},8,["onClick"]),e(i(s.B)+" \u54CD\u5E94\u5F0F",1)]),o("div",null,[c(a,{onClick:s.showB,type:"primary"},{default:u(()=>[m]),_:1},8,["onClick"])])])])}const{ref:d}=B;return{render:y,...{setup(s,{expose:f}){f();let a=0,_=d(0);function x(){a++,console.log(`\u5F53\u524DA\u7684\u503C\u4E3A\uFF1A${a}`)}function A(){_.value++,console.log(`\u5F53\u524DB\u7684\u503C\u4E3A\uFF1A${_.value}`)}function h(){console.log(_)}const C={A:a,B:_,addA:x,addB:A,showB:h,ref:d};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}}}(),"render-demo-1":function(){const{createElementVNode:e,createTextVNode:g,resolveComponent:u,withCtx:c,createVNode:i,openBlock:o,createElementBlock:k}=B,p={ref:"myRef",class:"box"},r=g("\u83B7\u53D6DOM\u5143\u7D20");function F(d,D){const s=u("xl-button");return o(),k("div",null,[e("div",p,"DOM\u5143\u7D20",512),i(s,{onClick:d.getRef,type:"primary"},{default:c(()=>[r]),_:1},8,["onClick"])])}const{ref:m}=B;return{render:F,...{setup(d,{expose:D}){D();const s=m(null);function f(){console.log(s.value)}const a={myRef:s,getRef:f,ref:m};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}}}()}},z='{"title":"\u4EC0\u4E48\u662F ref","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F ref","slug":"\u4EC0\u4E48\u662F-ref"},{"level":2,"title":"ref \u83B7\u53D6\u5143\u7D20","slug":"ref-\u83B7\u53D6\u5143\u7D20"}],"relativePath":"blog/02_vue3/1_ref.md","lastUpdated":1656928523000}',q=n("h2",{id:"\u4EC0\u4E48\u662F-ref",tabindex:"-1"},"\u4EC0\u4E48\u662F ref",-1),O=n("ul",null,[n("li",null,"ref \u548C reactive \u4E00\u6837,\u4E5F\u662F\u7528\u6765\u5B9E\u73B0\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u65B9\u6CD5"),n("li",null,"ref \u5E95\u5C42\u5176\u5B9E\u8FD8\u662F reactive,\u6240\u4EE5\u5F53\u8FD0\u884C\u65F6\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u6839\u636E\u4F20\u5165\u7684 ref \u8F6C\u6362\u6210 reactive."),n("li",null,"\u5728 vue \u4E2D\u4F7F\u7528 ref \u7684\u503C\u4E0D\u7528\u901A\u8FC7 value \u83B7\u53D6"),n("li",null,"\u5728 js \u4E2D\u4F7F\u7528 ref \u7684\u503C\u5FC5\u987B\u901A\u8FC7 value \u83B7\u53D6 \u{1F447}")],-1),M=n("div",null,"ref",-1),$=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addA"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("A++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t("{{ A }} \u975E\u54CD\u5E94\u5F0F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token comment"},"<!-- \u5728vue\u4E2D\u4F7F\u7528ref\u7684\u503C\u4E0D\u7528\u901A\u8FC7value\u83B7\u53D6 -->"),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addB"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("B++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t("{{ B }} \u54CD\u5E94\u5F0F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showB"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u67E5\u770BB\u5C5E\u6027"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token comment"},"// \u5B9A\u4E49A B"),t(`
`),n("span",{class:"token keyword"},"let"),t(),n("span",{class:"token constant"},"A"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),t(`
`),n("span",{class:"token keyword"},"let"),t(),n("span",{class:"token constant"},"B"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"addA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token constant"},"A"),n("span",{class:"token operator"},"++"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5F53\u524DA\u7684\u503C\u4E3A\uFF1A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token constant"},"A"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// \u6CE8\u610F\u5728js\u4E2D\u4F7F\u7528ref\u7684\u503C\u5FC5\u987B\u901A\u8FC7value\u83B7\u53D6"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"addB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token constant"},"B"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"++"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5F53\u524DB\u7684\u503C\u4E3A\uFF1A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token constant"},"B"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"B"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),j=V(`<h2 id="ref-\u83B7\u53D6\u5143\u7D20" tabindex="-1">ref \u83B7\u53D6\u5143\u7D20</h2><p><strong>vue2.x \u83B7\u53D6 DOM \u5143\u7D20</strong></p><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
this.$refs.myRef
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><p><strong>vue3.x \u83B7\u53D6 DOM \u5143\u7D20</strong></p>`,5),S=n("div",null,"vue3 ref \u83B7\u53D6 DOM \u5143\u7D20",-1),T=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("myRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("DOM\u5143\u7D20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u83B7\u53D6DOM\u5143\u7D20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token comment"},"// \u50A8\u5B58DOM\u5BF9\u8C61"),t(`
`),n("span",{class:"token keyword"},"const"),t(" myRef "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("myRef"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".box"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 50px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" pink"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function P(e,g,u,c,i,o){const k=E("render-demo-0"),p=E("demo"),r=E("render-demo-1");return N(),w("div",null,[q,O,v(p,{sourceCode:`<template>
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
`},{description:l(()=>[M]),highlight:l(()=>[$]),default:l(()=>[v(k)]),_:1}),j,v(p,{sourceCode:`<template>
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
`},{description:l(()=>[S]),highlight:l(()=>[T]),default:l(()=>[v(r)]),_:1})])}var G=b(R,[["render",P]]);export{z as __pageData,G as default};
