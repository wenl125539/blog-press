import{_ as w,c as x,a as d,w as D,e as h,b as n,r as b,o as $,V as C,d as s}from"./app.348d2e61.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:i,withCtx:u,createVNode:e,createElementVNode:r,openBlock:k,createElementBlock:c}=C,l=t("\u5168\u5C40\u53D8\u91CF"),g=t("\u5C40\u90E8\u53D8\u91CF"),v=t("\u5176\u4ED6\u51FD\u6570\u5185\u90E8\u53D8\u91CF");function f(p,m){const a=i("xl-button");return k(),c("div",null,[r("div",null,[e(a,{type:"primary",onClick:p.btn1},{default:u(()=>[l]),_:1},8,["onClick"]),e(a,{type:"primary",onClick:p.btn2},{default:u(()=>[g]),_:1},8,["onClick"]),e(a,{type:"primary",onClick:p.btn3},{default:u(()=>[v]),_:1},8,["onClick"])])])}const{reactive:_}=C;return{render:f,...{setup(p,{expose:m}){m();const a=0;function y(){alert(`privateNum:${a}`)}function B(){alert(`privateNum2:${2}`)}function E(){let o=3;function A(){return o}return A}function N(){const o=E();alert(`privateNum3:${o()}`)}const F={privateNum:a,btn1:y,btn2:B,fn3:E,btn3:N,reactive:_};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}}}()}},O='{"title":"\u7406\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7406\u89E3","slug":"\u7406\u89E3"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"}],"relativePath":"blog/01_js/5_\u95ED\u5305.md","lastUpdated":1659431111000}',j=h(`<h2 id="\u7406\u89E3" tabindex="-1">\u7406\u89E3</h2><ol><li>\u95ED\u5305\u5C31\u662F\u80FD\u591F\u8BFB\u53D6\u5176\u4ED6\u51FD\u6570\u5185\u90E8\u53D8\u91CF\u7684\u51FD\u6570\u3002\u5728js\u4E2D\uFF0C\u53EF\u4EE5\u5C06\u95ED\u5305\u7406\u89E3\u6210\u201C\u51FD\u6570\u4E2D\u7684\u51FD\u6570\u201C\u3002</li><li>\u95ED\u5305\u53EF\u4EE5\u91CD\u7528\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4E14\u4FDD\u8BC1\u8FD9\u4E2A\u53D8\u91CF\u4E0D\u4F1A\u88AB\u6C61\u67D3\u7684\u4E00\u79CD\u673A\u5236\u3002\u8FD9\u4E9B\u53D8\u91CF\u7684\u503C\u59CB\u7EC8\u4FDD\u6301\u5728\u5185\u5B58\u4E2D\uFF0C\u4E0D\u4F1A\u88AB\u5783\u573E\u56DE\u6536\u673A\u5236\u5904\u7406</li><li>\u95ED\u5305\u7684\u7F3A\u70B9\uFF1A\u7531\u4E8E\u95ED\u5305\u4F1A\u4F7F\u5F97\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\u90FD\u88AB\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u5185\u5B58\u6D88\u8017\u5F88\u5927\uFF0C\u6240\u4EE5\u4E0D\u80FD\u6EE5\u7528\u95ED\u5305\uFF0C\u5426\u5219\u4F1A\u9020\u6210\u7F51\u9875\u7684\u6027\u80FD\u95EE\u9898\uFF0C\u5728IE\u4E2D\u53EF\u80FD\u5BFC\u81F4\u5185\u5B58\u6CC4\u9732\u3002\u89E3\u51B3\u65B9\u6CD5\u662F\uFF0C\u5728\u9000\u51FA\u51FD\u6570\u4E4B\u524D\uFF0C\u5C06\u4E0D\u4F7F\u7528\u7684\u5C40\u90E8\u53D8 \u91CF\u5168\u90E8\u5220\u9664\u3002</li><li>\u4E3A\u4EC0\u4E48\u8981\u7528\u95ED\u5305\uFF1A\u4F7F\u7528\u573A\u666F : \u9632\u6296\u3001\u8282\u6D41\u3001\u51FD\u6570\u5957\u51FD\u6570\u907F\u514D\u5168\u5C40\u6C61\u67D3</li><li>\u53EF\u4EE5\u7C7B\u6BD4java\u4E2D\u7684\u79C1\u6709\u53D8\u91CF\uFF0Cprivate</li></ol><p><code> eg:</code></p><blockquote><p>\u5982\u679C\u628Aage\u653E\u5728\u51FD\u6570\u5916\uFF0C\u8FBE\u4E0D\u5230\u4F7F\u7528\u95ED\u5305\u7684\u76EE\u7684<code>\u9690\u85CF\u53D8\u91CF</code>\u3002<br> \u800C\u8FD4\u56DE\u4E00\u4E2A\u5185\u5C42\u51FD\u6570\u662F\u56E0\u4E3A\u5982\u679C\u4E0D return\uFF0C\u4F60\u5C31\u65E0\u6CD5\u4F7F\u7528\u8FD9\u4E2A\u95ED\u5305\u3002</p></blockquote><div class="language-java line-numbers-mode"><pre><code><span class="token class-name">Class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">Studen</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//18</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">function</span> <span class="token function">student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//\u58F0\u660E\u4E00\u4E2A\u51FD\u6570\u5185\u7684\u5C40\u90E8\u53D8\u91CF</span>
  <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">18</span>
  <span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> age
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> getAge
<span class="token punctuation">}</span>

<span class="token keyword">var</span> getAge <span class="token operator">=</span> <span class="token function">student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50</h2>`,7),q=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5168\u5C40\u53D8\u91CF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5C40\u90E8\u53D8\u91CF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5176\u4ED6\u51FD\u6570\u5185\u90E8\u53D8\u91CF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// \u8BBF\u95EE\u5168\u5C40\u53D8\u91CF"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" privateNum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"btn1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"privateNum:"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("privateNum"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// \u8BBF\u95EE\u5C40\u90E8\u53D8\u91CF"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"btn2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" privateNum2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),s(`
    `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"privateNum2:"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("privateNum2"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// \u5176\u4ED6\u51FD\u6570\u5B9A\u4E49\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570 \u5F62\u6210\u95ED\u5305  "),s(`
  `),n("span",{class:"token comment"},"// \u7C7B\u4F3Cjava\u4E2D  private int privateNum3 = 3  \u518D\u5199\u4E00\u4E2AgetPrivateNum3\u65B9\u6CD5"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"fn3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" privateNum3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getNum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(` privateNum3
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` getNum
  `),n("span",{class:"token punctuation"},"}"),s(`


  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"btn3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" getNum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"fn3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"privateNum3:"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"getNum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),S=n("p",null,[n("a",{href:"https://jsrun.net/new",target:"_blank",rel:"noopener noreferrer"},"\u8BD5\u4E00\u8BD5"),n("br"),n("strong",null,[n("code",null,"(\u672A\u5B8C)")])],-1);function P(t,i,u,e,r,k){const c=b("render-demo-0"),l=b("demo");return $(),x("div",null,[j,d(l,{sourceCode:`<template>
  <div>
    <xl-button type="primary" @click="btn1">\u5168\u5C40\u53D8\u91CF</xl-button>
    <xl-button type="primary" @click="btn2">\u5C40\u90E8\u53D8\u91CF</xl-button>
    <xl-button type="primary" @click="btn3">\u5176\u4ED6\u51FD\u6570\u5185\u90E8\u53D8\u91CF</xl-button>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  // \u8BBF\u95EE\u5168\u5C40\u53D8\u91CF
  const privateNum = 0
  function btn1(){
    alert(\`privateNum:\${privateNum}\`,)
  }

  // \u8BBF\u95EE\u5C40\u90E8\u53D8\u91CF
  function btn2(){
    let privateNum2 = 2
    alert(\`privateNum2:\${privateNum2}\`,)
  }

  // \u5176\u4ED6\u51FD\u6570\u5B9A\u4E49\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570 \u5F62\u6210\u95ED\u5305  
  // \u7C7B\u4F3Cjava\u4E2D  private int privateNum3 = 3  \u518D\u5199\u4E00\u4E2AgetPrivateNum3\u65B9\u6CD5
  function fn3(){
    let privateNum3 = 3
    function getNum(){
      return privateNum3
    }
    return getNum
  }


  function btn3(){
    const getNum = fn3()
    alert(\`privateNum3:\${getNum()}\`)
  }

  
<\/script>

<style scoped>

</style>
`},{highlight:D(()=>[q]),default:D(()=>[d(c)]),_:1}),S])}var U=w(V,[["render",P]]);export{O as __pageData,U as default};
