import{_ as U,c as T,b as h,w as B,r as D,o as A,V as F,a as n,e as t}from"./app.8cee1528.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:f,resolveComponent:v,withCtx:l,openBlock:c,createBlock:u,createCommentVNode:C,toDisplayString:i,vShow:r,createElementVNode:k,withDirectives:S,Transition:E,createElementBlock:V}=F,N={class:"box"},j={class:"font-box"},q=f(">");function z(o,b){const s=v("xl-button");return c(),V("div",null,[k("div",N,[k("div",j,[o.btnShow?(c(),u(E,{key:1,name:"slide-fade"},{default:l(()=>[S(k("p",{class:"font"},i(o.title),513),[[r,o.show]])]),_:1})):(c(),u(s,{key:0,type:"primary",onClick:o.start},{default:l(()=>[q]),_:1},8,["onClick"]))])])])}const{ref:e,onBeforeUnmount:y}=F;return{render:z,...{setup(o,{expose:b}){b();const s=[{text:"aaaaa",start:1,end:3},{text:"bbbb",start:5,end:9},{text:"cccc",start:10,end:15}];let x=e(!1),d=null,m=e(!1),a=e(0),g=e(s[a.value].text),p=0;function I(){x.value=!0,d=setInterval(()=>{const _=s[a.value];p<_.end?(m.value=!0,g.value=_.text,p++):(m.value=!1,a.value===s.length-1?(a.value=0,p=0):a.value++),console.log(p)},1e3)}y(()=>{window.clearInterval(d)});const w={list:s,btnShow:x,time:d,show:m,index:a,title:g,timer:p,start:I,ref:e,onBeforeUnmount:y};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}}}()}},H='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"read/00_\u9605\u8BFB.md","lastUpdated":1658312119000}',P=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("font-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("!btnShow"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("start"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(">"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("transition")]),t(),n("span",{class:"token attr-name"},"v-else"),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slide-fade"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("font"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("show"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t("{{title}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("transition")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t("onBeforeUnmount "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
  
  `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'aaaaa'"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"start"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"end"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'bbbb'"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"start"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"end"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'cccc'"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"start"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),n("span",{class:"token literal-property property"},"end"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"]"),t(`
  `),n("span",{class:"token keyword"},"let"),t(" btnShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"//\u6309\u94AE"),t(`
  `),n("span",{class:"token keyword"},"let"),t(" time "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),t(`
  `),n("span",{class:"token keyword"},"let"),t(" show "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"//\u9690\u85CF"),t(`
  `),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"// \u5F53\u524D\u5185\u5BB9\u7D22\u5F15"),t(`
  `),n("span",{class:"token keyword"},"let"),t(" title "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("list"),n("span",{class:"token punctuation"},"["),t("index"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("text"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"//\u5185\u5BB9"),t(`

  `),n("span",{class:"token keyword"},"let"),t(" timer "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),t(`
  
  `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      btnShow`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
      time `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"setInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token comment"},"// \u83B7\u53D6list\u4E2D\u5F53\u524D\u7D22\u5F15\u7684\u65F6\u95F4"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" item "),n("span",{class:"token operator"},"="),t(" list"),n("span",{class:"token punctuation"},"["),t("index"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),t("timer"),n("span",{class:"token operator"},"<"),t("item"),n("span",{class:"token punctuation"},"."),t("end"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
        show`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
        title`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" item"),n("span",{class:"token punctuation"},"."),t(`text
        timer`),n("span",{class:"token operator"},"++"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},"{"),t(`
        show`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),t("index"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"==="),t(" list"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
          index`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),t(`
          timer `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},"{"),t(`
          index`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"++"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("timer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token comment"},"// \u9875\u9762\u9500\u6BC1 \u5173\u95ED\u5B9A\u65F6\u5668"),t(`
  `),n("span",{class:"token function"},"onBeforeUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearInterval"),n("span",{class:"token punctuation"},"("),t("time"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".box"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t("100vh"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t("100%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" black"),n("span",{class:"token punctuation"},";"),t(`
  
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".font-box"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t("100%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t("55px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t("#fff"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".font"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t("500px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"word-wrap"),n("span",{class:"token punctuation"},":"),t(" break-word"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token property"},"word-break"),n("span",{class:"token punctuation"},":"),t(" break-all"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".slide-fade-enter-active"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),t(" all .3s ease-out"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".slide-fade-leave-active"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),t(" all .8s "),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),t("1.0"),n("span",{class:"token punctuation"},","),t(" 0.5"),n("span",{class:"token punctuation"},","),t(" 0.8"),n("span",{class:"token punctuation"},","),t(" 1.0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},`.slide-fade-enter-from,
.slide-fade-leave-to`),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateX"),n("span",{class:"token punctuation"},"("),t("20px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function X(f,v,l,c,u,C){const i=D("render-demo-0"),r=D("demo");return A(),T("div",null,[h(r,{sourceCode:`<template>
  <div class="box">
    
    <div class="font-box">
      <xl-button v-if="!btnShow" type="primary" @click="start">></xl-button>
      <transition v-else name="slide-fade">
        <p class="font" v-show="show" >{{title}}</p>
      </transition>
    </div>
  </div>
</template>

<script setup>
  import { ref,onBeforeUnmount } from 'vue'
  
  const list = [
    {text:'aaaaa',start:1,end:3},
    {text:'bbbb',start:5,end:9},
    {text:'cccc',start:10,end:15}
  ]
  let btnShow = ref(false) //\u6309\u94AE
  let time = null
  let show = ref(false) //\u9690\u85CF
  let index = ref(0) // \u5F53\u524D\u5185\u5BB9\u7D22\u5F15
  let title = ref(list[index.value].text) //\u5185\u5BB9

  let timer = 0
  
  function start(){
      btnShow.value = true
      time = setInterval(() => {
      // \u83B7\u53D6list\u4E2D\u5F53\u524D\u7D22\u5F15\u7684\u65F6\u95F4
      const item = list[index.value]
      if(timer<item.end){
        show.value = true
        title.value = item.text
        timer++
      }else{
        show.value = false
        if(index.value === list.length - 1){
          index.value = 0
          timer = 0
        }else{
          index.value++
        }
      }
      console.log(timer);
    }, 1000);
  }
  // \u9875\u9762\u9500\u6BC1 \u5173\u95ED\u5B9A\u65F6\u5668
  onBeforeUnmount(() => {
    window.clearInterval(time)
  });
<\/script>

<style scoped>
.box{
  height:100vh;
  width:100%;
  background-color: black;
  
}
.font-box{
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:55px;
  color:#fff;
}
.font{
  display: flex;
  align-items: center;
  justify-content: center;
  width:500px;
  word-wrap: break-word;
	word-break: break-all;
}

.slide-fade-enter-active {
  transition: all .3s ease-out;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
`},{highlight:B(()=>[P]),default:B(()=>[h(i)]),_:1})])}var J=U($,[["render",X]]);export{H as __pageData,J as default};
