import{_ as f,c as v,a as d,w as o,b as n,r as m,o as B,V as y,d as t}from"./app.348d2e61.js";const E={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,openBlock:p,createElementBlock:c}=y,l={ref:"echartBox",class:"box"};function r(g,i){return p(),c("div",null,[e("div",l,null,512)])}const{onMounted:a,ref:s}=y;return{render:r,...{setup(g,{expose:i}){i(),a(()=>{});const _={title:[{text:"Tangential Polar Bar Label Position (middle)"}],polar:{radius:[30,"80%"]},angleAxis:{max:4,startAngle:75},radiusAxis:{type:"category",data:["a","b","c","d"]},tooltip:{},series:{type:"bar",data:[2,1.2,2.4,3.6],coordinateSystem:"polar",label:{show:!0,position:"middle",formatter:"{b}: {c}"}}},h=s(null);let x=null;function b(){}const k={option:_,echartBox:h,myEchart:x,initEchart:b,onMounted:a,ref:s};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}}}}()}},M='{"title":"demo1","description":"","frontmatter":{},"headers":[],"relativePath":"plugin/07_echart/0_demo.md","lastUpdated":1667050614000}',w=n("h1",{id:"demo1",tabindex:"-1"},"demo1",-1),A=n("div",null,"echart",-1),P=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("echartBox"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token comment"},"// import echarts from 'echarts'"),t(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// console.log(echarts)"),t(`
  `),n("span",{class:"token comment"},"// initEchart()"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" option "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tangential Polar Bar Label Position (middle)'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"polar"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"radius"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'80%'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"angleAxis"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"max"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"startAngle"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"75"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"radiusAxis"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'category'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"tooltip"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"series"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'bar'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1.2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2.4"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3.6"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"coordinateSystem"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'polar'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"show"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"formatter"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'{b}: {c}'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" echartBox "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"let"),t(" myEchart "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),t(`
`),n("span",{class:"token comment"},"// \u521D\u59CB\u5316echart"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"initEchart"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// myEchart = .init(echartBox)"),t(`
  `),n("span",{class:"token comment"},"// setOptions(option)"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("less"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".box"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px solid #000"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function V(e,p,c,l,r,a){const s=m("render-demo-0"),u=m("demo");return B(),v("div",null,[w,d(u,{sourceCode:`<template>
  <div ref="echartBox" class="box"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// import echarts from 'echarts'
onMounted(() => {
  // console.log(echarts)
  // initEchart()
})

const option = {
  title: [
    {
      text: 'Tangential Polar Bar Label Position (middle)',
    },
  ],
  polar: {
    radius: [30, '80%'],
  },
  angleAxis: {
    max: 4,
    startAngle: 75,
  },
  radiusAxis: {
    type: 'category',
    data: ['a', 'b', 'c', 'd'],
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [2, 1.2, 2.4, 3.6],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}',
    },
  },
}

const echartBox = ref(null)
let myEchart = null
// \u521D\u59CB\u5316echart
function initEchart() {
  // myEchart = .init(echartBox)
  // setOptions(option)
}
<\/script>

<style lang="less" scoped>
.box {
  height: 300px;
  width: 300px;
  border: 1px solid #000;
}
</style>
`},{description:o(()=>[A]),highlight:o(()=>[P]),default:o(()=>[d(s)]),_:1})])}var N=f(E,[["render",V]]);export{M as __pageData,N as default};
