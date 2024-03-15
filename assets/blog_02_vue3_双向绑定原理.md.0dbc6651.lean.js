import{_ as m,c as g,a as E,w as i,e as C,r,o as _,V as h,b as u,d as n}from"./app.348d2e61.js";const y={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:F,withCtx:a,createVNode:o,toDisplayString:e,createElementVNode:k,openBlock:c,createElementBlock:p}=h,d=t("A++"),B=t("B++"),D=t("C++");function A(s,N){const l=F("xl-button");return c(),p("div",null,[k("div",null,[o(l,{type:"primary",onClick:s.addA},{default:a(()=>[d]),_:1},8,["onClick"]),t(e(s.num.A)+" ",1),o(l,{type:"primary",onClick:s.addB},{default:a(()=>[B]),_:1},8,["onClick"]),t(e(s.num.B)+" ",1),o(l,{type:"primary",onClick:s.addC},{default:a(()=>[D]),_:1},8,["onClick"]),t(e(s.num.C),1)])])}return{render:A,...{data(){return{num:{A:0}}},create(){this.num.B=0,this.$set(this.num,"C",0)},methods:{addA(){this.num.A++},addB(){this.num.B++},addC(){this.num.C++}}}}}()}},j='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/02_vue3/\u53CC\u5411\u7ED1\u5B9A\u539F\u7406.md","lastUpdated":1659431311000}',v=C('<p>\u53CC\u5411\u7ED1\u5B9A\u539F\u7406(\u672A\u5B8C\u5584)</p><p><strong>\u5B9E\u73B0\u539F\u7406</strong></p><ul><li>vue\u4F7F\u7528\u7684\u662F\u53D1\u5E03\u8005\u8BA2\u9605\u8005\u7684\u6A21\u5F0F+\u6570\u636E\u52AB\u6301\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u7684\uFF0C\u5728\u7EC4\u4EF6\u4E2D\u6211\u4EEC\u5B9A\u4E49data\u65F6\uFF0Cvue\u4F1A\u904D\u5386\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u901A\u8FC7<code>Object.defineProperty()</code>\u7ED9\u6BCF\u4E00\u4E2A\u503C\u90FD\u6DFB\u52A0<code>getter</code>\u548C<code>setter</code>\u65B9\u6CD5\uFF0C\u7136\u540E\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u90FD\u6709\u4E00\u4E2Awatcher\u6765\u76D1\u542C\u6570\u636E\u7684\u53D8\u5316\uFF0C\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u5373\u89E6\u53D1<code>setter</code>\u65F6\uFF0C\u5C31\u4F1A\u53D1\u5E03\u6D88\u606F\u7ED9\u8BA2\u9605\u8005\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u76D1\u542C\u56DE\u8C03</li></ul><p><strong>Vue2.0\u7684\u7F3A\u9677</strong></p><ul><li>\u4E0D\u5177\u5907\u76D1\u542C\u6570\u7EC4\u7684\u80FD\u529B\uFF0C\u9700\u8981\u91CD\u65B0\u5B9A\u4E49\u6570\u7EC4\u7684\u539F\u578B\u6765\u8FBE\u5230\u54CD\u5E94\u5F0F</li><li>\u65E0\u6CD5\u68C0\u6D4B\u5230\u5BF9\u8C61\u5C5E\u6027\u7684\u6DFB\u52A0\u548C\u5220\u9664</li><li>\u53EA\u80FD\u52AB\u6301\u5BF9\u8C61\u7684\u5C5E\u6027\uFF08\u5047\u5982\u9700\u8981\u5BF9\u6BCF\u4E2A\u5BF9\u8C61\u7684\u6BCF\u4E2A\u5C5E\u6027\u8FDB\u884C\u904D\u5386\uFF0C\u5982\u679C\u5C5E\u6027\u503C\u4E5F\u662F\u5BF9\u8C61\u90A3\u4E48\u9700\u8981\u6DF1\u5EA6\u904D\u5386,\u663E\u7136\u80FD\u52AB\u6301\u4E00\u4E2A\u5B8C\u6574\u7684\u5BF9\u8C61\u662F\u66F4\u597D\u7684\u9009\u62E9\uFF09 \u89E3\u51B3\u65B9\u6CD5\uFF1A<code>Vue.set() || this.$set()</code></li><li>\u5982\u679C\u5728\u5B9E\u4F8B\u521B\u5EFA\u4E4B\u540E\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027\u5230\u5B9E\u4F8B\u4E0A\uFF0C\u5B83\u4E0D\u4F1A\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0\uFF0C\u56E0\u4E3A\u6B64\u65F6\u6DFB\u52A0\u7684\u5C5E\u6027\u5E76\u6CA1\u6709\u7ED1\u5B9A\u4E0Agetter\u3001setter\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u5C5E\u6027\u662F\u975E\u54CD\u5E94\u5F0F\u3002\u5982\u679C\u6211\u4EEC\u60F3\u8981\u628A\u8FD9\u4E2A\u5C5E\u6027\u53D8\u6210\u54CD\u5E94\u5F0F\u7684\u8BDD\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>Vue.set()</code>\u6216\u8005<code>this.$set()</code>\u8FD9\u4E24\u79CD\u65B9\u5F0F\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027</li><li>\u9664\u4E86\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027\u4EE5\u5916\uFF0C\u6539\u53D8\u6570\u7EC4\u7684\u4E00\u4E9B\u5C5E\u6027\u4E5F\u4E0D\u4F1A\u4F7F\u5F97\u89C6\u56FE\u66F4\u65B0\uFF0C</li><li>\u5229\u7528\u7D22\u5F15\u76F4\u63A5\u8BBE\u7F6E\u6570\u7EC4\u7684\u67D0\u4E00\u9879 <code>arr[1] = 10</code></li><li>\u76F4\u63A5\u4FEE\u6539\u6570\u7EC4\u7684\u5927\u5C0F <code>arr.length = 10</code></li><li>\u5BF9\u4E8E\u6570\u7EC4\u9664\u4E86\u53EF\u4EE5\u901A\u8FC7<code>Vue.set()</code>\u3001<code>this.$set()</code>\u8FD9\u4E24\u79CD\u65B9\u5F0F\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u7684\u4E00\u4E9BAPI\u6765\u89E6\u53D1\u66F4\u65B0\uFF0C\u5982<code>splice()</code> \u3001<code>concat()</code>\u7B49\u4F1A\u4FEE\u6539\u539F\u59CB\u6570\u7EC4\u7684API</li></ul><p><strong>Vue3.0\u7684\u6539\u8FDB</strong></p><ul><li>\u4F7F\u7528ES6\u4E2D\u7684<a href="./../01_js/9_ES6.html">proxy</a><ul><li>\u53EF\u4EE5\u52AB\u6301\u5230\u6574\u4E2A\u5BF9\u8C61\u800C\u975E\u5C5E\u6027\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61</li><li>\u53EF\u4EE5\u76D1\u542C\u5230\u6570\u7EC4\u7684\u53D8\u5316</li></ul></li></ul><p><strong>\u5BF9\u6BD4\u6848\u4F8B</strong></p><ul><li>vue2</li></ul>',9),b=u("div",null,[n("vue2\u53CC\u5411\u7ED1\u5B9A ("),u("strong",null,"\u8FD9\u91CC\u4F7F\u7528\u4E86vue3\u6240\u4EE5\u6848\u4F8B\u4F1A\u51FAbug"),n(")")],-1),f=u("div",{class:"language-vue line-numbers-mode"},[u("pre",null,[u("code",null,[u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("template")]),u("span",{class:"token punctuation"},">")]),n(`
  `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("div")]),u("span",{class:"token punctuation"},">")]),n(`
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("addA"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("A++"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`{{ num.A }}
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("addB"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("B++"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`{{ num.B }}
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("addC"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("C++"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`{{ num.C }}
  `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("div")]),u("span",{class:"token punctuation"},">")]),n(` 
`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("template")]),u("span",{class:"token punctuation"},">")]),n(`

`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("script")]),u("span",{class:"token punctuation"},">")]),u("span",{class:"token script"},[u("span",{class:"token language-javascript"},[n(`
`),u("span",{class:"token keyword"},"export"),n(),u("span",{class:"token keyword"},"default"),n(),u("span",{class:"token punctuation"},"{"),n(`
  `),u("span",{class:"token function"},"data"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
    `),u("span",{class:"token keyword"},"return"),n(),u("span",{class:"token punctuation"},"{"),n(`
      `),u("span",{class:"token literal-property property"},"num"),u("span",{class:"token operator"},":"),n(),u("span",{class:"token punctuation"},"{"),n(`
        `),u("span",{class:"token constant"},"A"),u("span",{class:"token operator"},":"),n(),u("span",{class:"token number"},"0"),u("span",{class:"token punctuation"},","),n(`
      `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(`
    `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},";"),n(`
  `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(`
  `),u("span",{class:"token function"},"create"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
    `),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},"."),n("num"),u("span",{class:"token punctuation"},"."),u("span",{class:"token constant"},"B"),n(),u("span",{class:"token operator"},"="),n(),u("span",{class:"token number"},"0"),u("span",{class:"token punctuation"},";"),n(`
    `),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"$set"),u("span",{class:"token punctuation"},"("),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},"."),n("num"),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token string"},'"C"'),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token number"},"0"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
  `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(`
  `),u("span",{class:"token literal-property property"},"methods"),u("span",{class:"token operator"},":"),n(),u("span",{class:"token punctuation"},"{"),n(`
    `),u("span",{class:"token function"},"addA"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
      `),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},"."),n("num"),u("span",{class:"token punctuation"},"."),u("span",{class:"token constant"},"A"),u("span",{class:"token operator"},"++"),u("span",{class:"token punctuation"},";"),n(`
    `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(`
    `),u("span",{class:"token function"},"addB"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
      `),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},"."),n("num"),u("span",{class:"token punctuation"},"."),u("span",{class:"token constant"},"B"),u("span",{class:"token operator"},"++"),u("span",{class:"token punctuation"},";"),n(`
    `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(`
    `),u("span",{class:"token function"},"addC"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
      `),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},"."),n("num"),u("span",{class:"token punctuation"},"."),u("span",{class:"token constant"},"C"),u("span",{class:"token operator"},"++"),u("span",{class:"token punctuation"},";"),n(`
    `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(`
  `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(`
`),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},";"),n(`
`)])]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("script")]),u("span",{class:"token punctuation"},">")]),n(`

`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("style")]),n("  "),u("span",{class:"token attr-name"},"scoped"),u("span",{class:"token punctuation"},">")]),u("span",{class:"token style"},[u("span",{class:"token language-css"},`
`)]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("style")]),u("span",{class:"token punctuation"},">")]),n(`

`)])])],-1),x=C("<ul><li>\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5BF9obj\u4E0A\u539F\u672C\u4E0D\u5B58\u5728\u7684B C\u5C5E\u6027\u8FDB\u884C\u4E86\u4E00\u4E2A\u8D4B\u503C\uFF0C\u4F46\u662F\u5728Vue2\u4E2D\uFF0C\u66F4\u6539B\u662F\u4E0D\u4F1A\u89E6\u53D1\u89C6\u56FE\u7684\u54CD\u5E94\u5F0F\u66F4\u65B0\u7684\uFF0C</li><li>\u8FD9\u662F\u56E0\u4E3A<code>Object.defineProperty</code>\u5FC5\u987B\u5BF9\u4E8E\u786E\u5B9A\u7684key\u503C\u8FDB\u884C\u54CD\u5E94\u5F0F\u7684\u5B9A\u4E49\uFF0C</li><li>\u8FD9\u5C31\u5BFC\u81F4\u4E86\u5982\u679C<code>data</code>\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u6CA1\u6709B C\u5C5E\u6027\uFF0C\u90A3\u4E48\u540E\u7EED\u5BF9\u4E8EB\u5C5E\u6027\u7684\u8D4B\u503C\u90FD\u4E0D\u4F1A\u89E6\u53D1<code>Object.defineProperty</code>\u4E2D\u5BF9\u4E8Eset\u7684\u52AB\u6301\uFF0C</li><li>\u5728Vue2\u4E2D\uFF0C\u8FD9\u91CC\u53EA\u80FD\u7528\u4E00\u4E2A\u989D\u5916\u7684api <code>Vue.set</code>\u6765\u89E3\u51B3\uFF0C \u4F8B\u5982C \u53EF\u4EE5\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0</li></ul>",1);function V(t,F,a,o,e,k){const c=r("render-demo-0"),p=r("demo");return _(),g("div",null,[v,E(p,{sourceCode:`<template>
  <div>
    <xl-button type="primary" @click="addA">A++</xl-button>{{ num.A }}
    <xl-button type="primary" @click="addB">B++</xl-button>{{ num.B }}
    <xl-button type="primary" @click="addC">C++</xl-button>{{ num.C }}
  </div> 
</template>

<script>
export default {
  data() {
    return {
      num: {
        A: 0,
      },
    };
  },
  create() {
    this.num.B = 0;
    this.$set(this.num, "C", 0);
  },
  methods: {
    addA() {
      this.num.A++;
    },
    addB() {
      this.num.B++;
    },
    addC() {
      this.num.C++;
    },
  },
};
<\/script>

<style  scoped>
</style>

`},{description:i(()=>[b]),highlight:i(()=>[f]),default:i(()=>[E(c)]),_:1}),x])}var q=m(y,[["render",V]]);export{j as __pageData,q as default};
