import{_ as V,c as w,a as _,w as E,r as F,o as x,V as f,b as n,d as t}from"./app.437044c9.js";const A={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,resolveComponent:l,createVNode:i,createTextVNode:k,openBlock:r,createElementBlock:d}=f,o={class:"dark"},u=e("span",null,"\u6697\u9ED1\u6A21\u5F0F",-1),v=k();function h(s,a){const c=l("el-switch");return r(),d("div",null,[e("div",o,[u,v,i(c,{modelValue:s.mode,"onUpdate:modelValue":a[0]||(a[0]=p=>s.mode=p),onChange:s.onChange},null,8,["modelValue","onChange"])])])}const{reactive:C,ref:m}=f;return{render:h,...{setup(s,{expose:a}){a();const c=m(!1);function p(B){B?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}const g={mode:c,onChange:p,reactive:C,ref:m};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}}}()}},T='{"title":"Home","description":"","frontmatter":{"home":true,"heroImage":"/a.png","actionText":"Blog","actionLink":"/blog/00_Blog","altActionText":"Tabs","altActionLink":"https://114.132.122.36/desk/desktop","features":[{"title":"\u{1F4A1} \u7B14\u8BB0","details":null},{"title":"\u26A1\uFE0F \u9047\u5230\u95EE\u9898","details":"\u9047\u5230\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848"},{"title":"\u{1F6E0}\uFE0F \u7EC4\u4EF6","details":"\u5E38\u7528\u7EC4\u4EF6\u5C01\u88C5"},{"title":"\u{1F4E6} \u8F6F\u4EF6","details":"\u8F6F\u4EF6\u5B89\u88C5\u53CA\u4F7F\u7528\u65B9\u5F0F"},{"title":"\u{1F529} \u65E5\u5E38\u8BB0\u5F55","details":"\u3002\u3002\u3002"},{"title":"\u{1F511} \u3002\u3002\u3002","details":"\u3002\u3002\u3002"}],"footer":"MIT Licensed | Copyright \xA9 2022-present wenl"},"headers":[],"relativePath":"index.md","lastUpdated":1679226881000}',L=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dark"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("\u6697\u9ED1\u6A21\u5F0F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-switch")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mode"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive"),n("span",{class:"token punctuation"},","),t("ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" mode "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"onChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token comment"},"// \u4F7F\u7528\u4E86 element-plus \u7684\u6697\u9ED1\u6A21\u5F0F"),t(`
    document`),n("span",{class:"token punctuation"},"."),t("documentElement"),n("span",{class:"token punctuation"},"."),t("classList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dark'"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},"{"),t(`
    document`),n("span",{class:"token punctuation"},"."),t("documentElement"),n("span",{class:"token punctuation"},"."),t("classList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dark'"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function N(e,l,i,k,r,d){const o=F("render-demo-0"),u=F("demo");return x(),w("div",null,[_(u,{sourceCode:`<template>
  <div class="dark">
   <span>\u6697\u9ED1\u6A21\u5F0F</span> <el-switch v-model="mode" @change="onChange" />
  </div>
</template>
<script setup>
import { reactive,ref } from 'vue';
const mode = ref(false)

function onChange(val) {
  if(val){
    // \u4F7F\u7528\u4E86 element-plus \u7684\u6697\u9ED1\u6A21\u5F0F
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')
  }
}
<\/script>
`},{highlight:E(()=>[L]),default:E(()=>[_(o)]),_:1})])}var D=V(A,[["render",N]]);export{T as __pageData,D as default};
