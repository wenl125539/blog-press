import{_ as b,c as v,a as y,w as _,b as n,r as w,o as B,V as h,d as t}from"./app.a5b2d336.js";const f={name:"component-doc",components:{"render-demo-0":function(){const{renderList:p,Fragment:c,openBlock:s,createElementBlock:a,toDisplayString:l,createElementVNode:u}=h,i={class:"blog"},r=["onClick"];function E(k,d){return s(),a("div",null,[(s(!0),a(c,null,p(k.list,(e,m)=>(s(),a("div",{key:m},[u("p",null,l(e.title),1),u("div",i,[(s(!0),a(c,null,p(e.tags,(o,g)=>(s(),a("div",{class:"tab",key:g,onClick:j=>k.toLink(o.link)},l(o.name),9,r))),128))])]))),128))])}return{render:E,...{setup(k,{expose:d}){d();function e(g){window.open(g)}const o={toLink:e,list:[{title:"\u7F51\u7AD9",tags:[{name:"\u8BD5\u4E00\u8BD5",link:"https://jsrun.net/new"},{name:"\u5DE5\u5177\u96C6\u5408\u7F51\u7AD9",link:"https://www.toolhelper.cn/"},{name:"json\u6821\u9A8C",link:"https://www.bejson.com/json/format/"}]},{title:"\u6587\u6863",tags:[{name:"webpack5",link:"https://wenl125539.github.io/webpack-start-atguigu/base/#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7"}]}]};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}}}()}},L='{"title":"Blog","description":"","frontmatter":{},"headers":[],"relativePath":"blog/00_Blog.md","lastUpdated":1661321464000}',x=n("h1",{id:"blog",tabindex:"-1"},"Blog",-1),A=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item,i) in list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{item.title}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("blog"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tab"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item,i) in item.tags"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toLink(item.link)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{item.name}}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token comment"},"// \u8DF3\u8F6C\u94FE\u63A5"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toLink"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"link"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),t("link"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// \u6570\u636E\u5217\u8868"),t(`
`),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u7F51\u7AD9'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"tags"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u8BD5\u4E00\u8BD5'"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'https://jsrun.net/new'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u5DE5\u5177\u96C6\u5408\u7F51\u7AD9'"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'https://www.toolhelper.cn/'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'json\u6821\u9A8C'"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'https://www.bejson.com/json/format/'"),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6587\u6863'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"tags"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'webpack5'"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'https://wenl125539.github.io/webpack-start-atguigu/base/#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7'"),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"]"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".blog"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"flex-wrap"),n("span",{class:"token punctuation"},":"),t(" wrap"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".tab"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 15px 30px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" #1a1a1a"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" aliceblue"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".tab:hover"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" #434447"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function D(p,c,s,a,l,u){const i=w("render-demo-0"),r=w("demo");return B(),v("div",null,[x,y(r,{sourceCode:`<template>
  <div v-for="(item,i) in list" :key="i">
    <p>{{item.title}}</p>
    <div class="blog">
      <div class="tab" v-for="(item,i) in item.tags" :key="i" @click="toLink(item.link)">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script setup>
// \u8DF3\u8F6C\u94FE\u63A5
function toLink(link) {
  window.open(link)
}
// \u6570\u636E\u5217\u8868
const list = [
  {
    title:'\u7F51\u7AD9',
    tags:[
        {name:'\u8BD5\u4E00\u8BD5',link:'https://jsrun.net/new'},
        {name:'\u5DE5\u5177\u96C6\u5408\u7F51\u7AD9',link:'https://www.toolhelper.cn/'},
        {name:'json\u6821\u9A8C',link:'https://www.bejson.com/json/format/'}
    ]
  },
  {
    title:'\u6587\u6863',
    tags:[
        {name:'webpack5',link:'https://wenl125539.github.io/webpack-start-atguigu/base/#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7'}
    ]
  }
]
<\/script>

<style scoped>
.blog{
  display: flex;
  flex-wrap: wrap;
}
.tab{
  margin: 10px;
  padding: 15px 30px;
  background-color: #1a1a1a;
  color: aliceblue;
  border-radius: 10px;
}
.tab:hover{
  cursor: pointer;
  background-color: #434447;
}
</style>
`},{highlight:_(()=>[A]),default:_(()=>[y(i)]),_:1})])}var q=b(f,[["render",D]]);export{L as __pageData,q as default};
