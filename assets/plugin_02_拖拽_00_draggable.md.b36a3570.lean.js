import{_ as b,c as C,a as f,w as y,b as n,r as h,o as B,V as D,d as s}from"./app.a5b2d336.js";const S={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:p,createElementVNode:o,resolveComponent:l,withCtx:i,createVNode:k,renderList:r,Fragment:c,openBlock:t,createElementBlock:u}=D,E={class:"itxst"},w={class:"item1"};function x(a,m){const g=l("draggable");return t(),u("div",null,[o("div",E,[o("div",null,[k(g,{list:a.state.list,"ghost-class":"ghost","chosen-class":"chosenClass",animation:"300",onStart:a.onStart,onEnd:a.onEnd},{item:i(({element:e})=>[o("div",w,p(e.name),1)]),_:1},8,["list","onStart","onEnd"])]),(t(!0),u(c,null,r(a.state.list,(e,v)=>(t(),u("span",{key:v},p(e),1))),128))])])}const{reactive:d,ref:F}=D;return{render:x,...{setup(a,{expose:m}){m();const _={state:d({list:[{name:"www.itxst.com",id:0},{name:"www.baidu.com",id:1},{name:"www.google.com",id:2}]}),onStart:()=>{console.log("\u5F00\u59CB\u62D6\u62FD")},onEnd:()=>{console.log("\u7ED3\u675F\u62D6\u62FD")},reactive:d,ref:F};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}}}()}},L='{"title":"\u4E2D\u6587\u6587\u6863","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E2D\u6587\u6587\u6863","slug":"\u4E2D\u6587\u6587\u6863"}],"relativePath":"plugin/02_\u62D6\u62FD/00_draggable.md","lastUpdated":1660643616000}',q=n("h2",{id:"\u4E2D\u6587\u6587\u6863",tabindex:"-1"},[n("a",{href:"https://www.itxst.com/vue-draggable/tutorial.html",target:"_blank",rel:"noopener noreferrer"},"\u4E2D\u6587\u6587\u6863")],-1),V=n("p",null,[n("strong",null,"\u5F85\u5B8C\u5584")],-1),N=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("itxst"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("draggable")]),s(`
        `),n("span",{class:"token attr-name"},":list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("state.list"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"ghost-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ghost"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"chosen-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("chosenClass"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("300"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@start"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onStart"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@end"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onEnd"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#item"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ element }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            {{ element.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("draggable")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(item1,i) of state.list"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ item1 }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s("ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},'// import draggable from "vuedraggable";'),s(`
  
`),n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"//\u9700\u8981\u62D6\u62FD\u7684\u6570\u636E\uFF0C\u62D6\u62FD\u540E\u6570\u636E\u7684\u987A\u5E8F\u4E5F\u4F1A\u53D8\u5316"),s(`
  `),n("span",{class:"token literal-property property"},"list"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"www.itxst.com"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"www.baidu.com"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"www.google.com"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//\u62D6\u62FD\u5F00\u59CB\u7684\u4E8B\u4EF6"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onStart"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u5F00\u59CB\u62D6\u62FD"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//\u62D6\u62FD\u7ED3\u675F\u7684\u4E8B\u4EF6"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onEnd"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u7ED3\u675F\u62D6\u62FD"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".itxst"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 600px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".itxst > div:nth-of-type(1)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".itxst > div:nth-of-type(2)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 270px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".item1"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" solid 1px #eee"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 6px 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".item1:hover"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" move"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".item1 + .item1"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".ghost"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" solid 1px "),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("19"),n("span",{class:"token punctuation"},","),s(" 41"),n("span",{class:"token punctuation"},","),s(" 239"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".chosenClass"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #f1f1f1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function A(p,o,l,i,k,r){const c=h("render-demo-0"),t=h("demo");return B(),C("div",null,[q,V,f(t,{sourceCode:`<template>
  <div class="itxst">
    <div>
      <draggable
        :list="state.list"
        ghost-class="ghost"
        chosen-class="chosenClass"
        animation="300"
        @start="onStart"
        @end="onEnd"
      >
        <template #item="{ element }">
          <div class="item1">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <span v-for="(item1,i) of state.list" :key="i">{{ item1 }}</span>
  </div>
</template>

<script setup>
  import { reactive,ref } from 'vue';
  // import draggable from "vuedraggable";
  
const state = reactive({
  //\u9700\u8981\u62D6\u62FD\u7684\u6570\u636E\uFF0C\u62D6\u62FD\u540E\u6570\u636E\u7684\u987A\u5E8F\u4E5F\u4F1A\u53D8\u5316
  list: [
    { name: "www.itxst.com", id: 0 },
    { name: "www.baidu.com", id: 1 },
    { name: "www.google.com", id: 2 },
  ],
});

//\u62D6\u62FD\u5F00\u59CB\u7684\u4E8B\u4EF6
const onStart = () => {
  console.log("\u5F00\u59CB\u62D6\u62FD");
};

//\u62D6\u62FD\u7ED3\u675F\u7684\u4E8B\u4EF6
const onEnd = () => {
  console.log("\u7ED3\u675F\u62D6\u62FD");
};
<\/script>
<style scoped>
.itxst {
  width: 600px;
  display: flex;
}
.itxst > div:nth-of-type(1) {
  flex: 1;
}
.itxst > div:nth-of-type(2) {
  width: 270px;
  padding-left: 20px;
}
.item1 {
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
}

.item1:hover {
  cursor: move;
}
.item1 + .item1 {
  margin-top: 10px;
}
.ghost {
  border: solid 1px rgb(19, 41, 239);
}
.chosenClass {
  background-color: #f1f1f1;
}
</style>
`},{highlight:y(()=>[N]),default:y(()=>[f(c)]),_:1})])}var P=b(S,[["render",A]]);export{L as __pageData,P as default};
