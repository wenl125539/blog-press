import{_ as O,c as U,a as v,w as F,e as z,b as u,d as n,r as j,o as G,V as b}from"./app.f182fb68.js";import{l as S}from"./chunks/lodash.5e6bfd3b.js";const H={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:a,resolveComponent:f,withCtx:o,createVNode:e,toDisplayString:y,createElementVNode:g,openBlock:r,createElementBlock:k}=b,d=a("+1(\u6CA1\u6709\u9632\u6296)"),w=a("+1(\u6709\u9632\u6296)"),x=a("+1(\u5C01\u88C5\u9632\u6296)"),T=a("+1(lodash\u9632\u6296)");function q(s,m){const t=f("xl-button");return r(),k("div",null,[g("div",null,[e(t,{onClick:s.add1,type:"primary"},{default:o(()=>[d]),_:1},8,["onClick"]),e(t,{onClick:s.add2,type:"primary"},{default:o(()=>[w]),_:1},8,["onClick"]),e(t,{onClick:s.add3,type:"primary"},{default:o(()=>[x]),_:1},8,["onClick"]),e(t,{onClick:s.add4,type:"primary"},{default:o(()=>[T]),_:1},8,["onClick"]),a(" "+y(s.num),1)])])}const{ref:E}=b;return{render:q,...{setup(s,{expose:m}){m();let t=E(0);function p(){t.value++}let l=null;function _(){l&&clearTimeout(l),l=setTimeout(()=>{t.value++},1e3)}const V=h(p,1e3);function h(C,D){let c;return function(){let i=this,A=arguments;c&&clearTimeout(c),c=setTimeout(()=>{C.apply(i,A)},D)}}const N=S.debounce(p,1e3),B={num:t,add1:p,timer:l,add2:_,add3:V,debounce:h,add4:N,ref:E};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}}}}(),"render-demo-1":function(){const{createTextVNode:a,resolveComponent:f,withCtx:o,createVNode:e,toDisplayString:y,createElementVNode:g,openBlock:r,createElementBlock:k}=b,d=a("+1(\u6CA1\u6709\u8282\u6D41)"),w=a("+1(\u5C01\u88C5\u8282\u6D41)"),x=a("+1(\u5C01\u88C5\u8282\u6D412)"),T=a("+1(lodash\u8282\u6D41)");function q(s,m){const t=f("xl-button");return r(),k("div",null,[g("div",null,[e(t,{onClick:s.add1,type:"primary"},{default:o(()=>[d]),_:1},8,["onClick"]),e(t,{onClick:s.add2,type:"primary"},{default:o(()=>[w]),_:1},8,["onClick"]),e(t,{onClick:s.add3,type:"primary"},{default:o(()=>[x]),_:1},8,["onClick"]),e(t,{onClick:s.add4,type:"primary"},{default:o(()=>[T]),_:1},8,["onClick"]),a(" "+y(s.num),1)])])}const{ref:E}=b;return{render:q,...{setup(s,{expose:m}){m();let t=E(0);function p(){t.value++}function l(C,D){let c=0;return function(){let i=Date.now(),A=this,$=arguments;i-c>D&&(C.apply(A,$),c=i)}}function _(C,D){let c;return function(){let i=this,A=arguments;c||(c=setTimeout(()=>{c=null,C.apply(i,A)},D))}}const V=l(p,1e3),h=_(p,1e3),N=S.throttle(p,1e3),B={num:t,add1:p,throttle:l,throttle2:_,add2:V,add3:h,add4:N,ref:E};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}}}}()}},nu='{"title":"\u9632\u6296","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9632\u6296","slug":"\u9632\u6296"},{"level":2,"title":"\u8282\u6D41","slug":"\u8282\u6D41"}],"relativePath":"blog/01_js/4_\u9632\u6296\u548C\u8282\u6D41.md","lastUpdated":1659431111000}',I=z('<h2 id="\u9632\u6296" tabindex="-1">\u9632\u6296</h2><ul><li>\u5F53\u4E00\u4E2A\u52A8\u4F5C\u8FDE\u7EED\u89E6\u53D1\uFF0C\u53EA\u6267\u884C\u6700\u540E\u4E00\u6B21</li><li>\u{1F450}\uFF1A\u597D\u6BD4\u6E38\u620F\u56DE\u57CE\u6309\u952E\uFF0C\u70B9\u51FB\u56DE\u57CE8\u79D2\u540E\uFF0C\u5C31\u4F1A\u6267\u884C\u56DE\u57CE\u4E8B\u4EF6\uFF08\u56DE\u5230\u6CC9\u6C34\uFF09\uFF0C\u4F46\u662F\u5982\u679C\u5728\u8FD98\u79D2\u5185\uFF0C\u518D\u6B21\u70B9\u51FB\u56DE\u57CE\u6309\u952E\uFF0C\u56DE\u57CE\u5C31\u4F1A\u88AB\u6253\u65AD\uFF0C\u91CD\u65B0\u8BA1\u7B978\u79D2,\u56DE\u57CE\u8FD9\u4E2A\u64CD\u4F5C\u53EA\u6267\u884C\u4E86\u6700\u540E\u4E00\u6B21</li><li>\u4E00\u822C\u4F7F\u7528\u573A\u666F</li></ul><blockquote><p>\u641C\u7D22\u6846\u641C\u7D22 \u7528\u6237\u8F93\u5165<code>\u5B8C\u6210</code>\u4E4B\u540E\uFF0C\u518D\u53D1\u9001\u8BF7\u6C42\uFF0C\u4E0D\u662F\u6BCF\u6B21\u8F93\u5165\u6216\u8005\u6539\u53D8\u90FD\u53D1\u9001\u8BF7\u6C42<br> \u767B\u5F55\u3001\u53D1\u77ED\u4FE1\u7B49\u6309\u94AE \u9632\u6B62\u70B9\u51FB\u592A\u5FEB\uFF0C\u4EE5\u81F3\u4E8E\u53D1\u9001\u591A\u6B21\u8BF7\u6C42</p></blockquote><p><strong>\u6848\u4F8B(<code>\u4E09\u79CD\u65B9\u5F0F</code>)</strong></p>',4),J=u("div",null,"\u9632\u6296",-1),K=u("div",{class:"language-vue line-numbers-mode"},[u("pre",null,[u("code",null,[u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("template")]),u("span",{class:"token punctuation"},">")]),n(`
  `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("div")]),u("span",{class:"token punctuation"},">")]),n(`
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("add1"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("+1(\u6CA1\u6709\u9632\u6296)"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("add2"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("+1(\u6709\u9632\u6296)"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("add3"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("+1(\u5C01\u88C5\u9632\u6296)"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("add4"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("+1(lodash\u9632\u6296)"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`
    {{num}}
  `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("div")]),u("span",{class:"token punctuation"},">")]),n(`
`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("template")]),u("span",{class:"token punctuation"},">")]),n(`

`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("script")]),n(),u("span",{class:"token attr-name"},"setup"),u("span",{class:"token punctuation"},">")]),u("span",{class:"token script"},[u("span",{class:"token language-javascript"},[n(`
  `),u("span",{class:"token keyword"},"import"),n(),u("span",{class:"token punctuation"},"{"),n(" ref "),u("span",{class:"token punctuation"},"}"),n(),u("span",{class:"token keyword"},"from"),n(),u("span",{class:"token string"},"'vue'"),u("span",{class:"token punctuation"},";"),n(`
  `),u("span",{class:"token keyword"},"let"),n(" num "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token function"},"ref"),u("span",{class:"token punctuation"},"("),u("span",{class:"token number"},"0"),u("span",{class:"token punctuation"},")"),n(`
  
  `),u("span",{class:"token comment"},"// \u6CA1\u6709\u9632\u6296"),n(`
  `),u("span",{class:"token keyword"},"function"),n(),u("span",{class:"token function"},"add1"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},"{"),n(`
    num`),u("span",{class:"token punctuation"},"."),n("value"),u("span",{class:"token operator"},"++"),n(`
  `),u("span",{class:"token punctuation"},"}"),n(`


  `),u("span",{class:"token comment"},`/**
   * \u7B2C\u4E00\u6B21\u70B9\u51FB\u65F6\u8BBE\u7F6E\u4E86\u5B9A\u65F6\u5668 \u5982\u679C\u65F6\u95F4\u5185\u6CA1\u6709\u518D\u6B21\u70B9\u51FB\u6539\u6309\u94AE \u5219\u5B9A\u65F6\u5668\u6CA1\u6709\u88AB\u6E05\u9664 \u65F6\u95F4\u5230\u4E86\u5C31\u4F1A\u6267\u884C
   * \u5982\u679C\u518D\u6B21\u70B9\u51FB\u6309\u94AE\uFF0C\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668\u4F1A\u88AB\u53D6\u6D88\uFF0C\u7136\u540E\u91CD\u65B0\u8BBE\u7F6E\u4E00\u4E2A\u4E00\u79D2\u949F\u7684\u5B9A\u65F6\u5668 \u65F6\u95F4\u5230\u4E86\u5C31\u4F1A\u6267\u884C
   */`),n(`
  `),u("span",{class:"token keyword"},"let"),n(" timer "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token keyword"},"null"),u("span",{class:"token punctuation"},";"),u("span",{class:"token comment"},"//time\u7528\u6765\u63A7\u5236\u4E8B\u4EF6\u7684\u89E6\u53D1"),n(`
  `),u("span",{class:"token keyword"},"function"),n(),u("span",{class:"token function"},"add2"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},"{"),n(`
    `),u("span",{class:"token keyword"},"if"),u("span",{class:"token punctuation"},"("),n("timer"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},"{"),n("  "),u("span",{class:"token comment"},"//\u5224\u65AD\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u5B9A\u65F6\u5668"),n(`
      `),u("span",{class:"token function"},"clearTimeout"),u("span",{class:"token punctuation"},"("),n("timer"),u("span",{class:"token punctuation"},")"),n("  "),u("span",{class:"token comment"},"//\u5B58\u5728 \u5219\u6E05\u9664\u5B9A\u65F6\u5668"),n(`
    `),u("span",{class:"token punctuation"},"}"),n(`
    `),u("span",{class:"token comment"},"// \u8BBE\u7F6E\u5B9A\u65F6\u5668 \u6216\u8005\u91CD\u65B0\u8BBE\u7F6E\u5B9A\u65F6\u5668"),n(`
    timer `),u("span",{class:"token operator"},"="),n(),u("span",{class:"token function"},"setTimeout"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token operator"},"=>"),n(),u("span",{class:"token punctuation"},"{"),n(` 
      num`),u("span",{class:"token punctuation"},"."),n("value"),u("span",{class:"token operator"},"++"),n(`  
    `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token number"},"1000"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
  `),u("span",{class:"token punctuation"},"}"),n(`


  `),u("span",{class:"token comment"},"// \u4F7F\u7528\u81EA\u5DF1\u5C01\u88C5\u7684\u9632\u6296"),n(`
  `),u("span",{class:"token keyword"},"const"),n(" add3 "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token function"},"debounce"),u("span",{class:"token punctuation"},"("),n("add1"),u("span",{class:"token punctuation"},","),u("span",{class:"token number"},"1000"),u("span",{class:"token punctuation"},")"),n(`
  `),u("span",{class:"token comment"},"// \u9632\u6296\u5C01\u88C5"),n(`
    `),u("span",{class:"token comment"},`/*
     * fn : \u56DE\u8C03\u51FD\u6570  \u4F20\u8FDB\u6765\u7684\u662F\u6B63\u771F\u7684\u4E1A\u52A1\u903B\u8F91 
     * delay : \u5EF6\u65F6\u65F6\u95F4
     */`),n(` 
  `),u("span",{class:"token keyword"},"function"),n(),u("span",{class:"token function"},"debounce"),u("span",{class:"token punctuation"},"("),u("span",{class:"token parameter"},[n("func"),u("span",{class:"token punctuation"},","),n(" delay")]),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
    `),u("span",{class:"token keyword"},"let"),n(" timer"),u("span",{class:"token punctuation"},";"),u("span",{class:"token comment"},"// \u8BBE\u7F6E\u5B9A\u65F6\u5668\u6807\u8BC6"),n(`
    
    `),u("span",{class:"token comment"},"// \u96BE\u70B9 \u8FD4\u56DE\u4E8B\u4EF6\u7ED1\u5B9A\u51FD\u6570"),n(`
    `),u("span",{class:"token keyword"},"return"),n(),u("span",{class:"token keyword"},"function"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
      `),u("span",{class:"token keyword"},"let"),n(" context "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},";"),u("span",{class:"token comment"},"// func\u6307\u5B9Athis"),n(`
    	`),u("span",{class:"token keyword"},"let"),n(" args "),u("span",{class:"token operator"},"="),n(" arguments"),u("span",{class:"token punctuation"},";"),u("span",{class:"token comment"},"// func\u53C2\u6570"),n(`
      `),u("span",{class:"token keyword"},"if"),u("span",{class:"token punctuation"},"("),n("timer"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},"{"),n(`
    	  `),u("span",{class:"token function"},"clearTimeout"),u("span",{class:"token punctuation"},"("),n("timer"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),u("span",{class:"token comment"},"// \u5148\u6E05\u9664\u5B9A\u65F6\u5668"),n(`
      `),u("span",{class:"token punctuation"},"}"),n(`
    	`),u("span",{class:"token comment"},"//\u8BBE\u7F6E\u5B9A\u65F6\u5668"),n(`
    	timer `),u("span",{class:"token operator"},"="),n(),u("span",{class:"token function"},"setTimeout"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token operator"},"=>"),n(),u("span",{class:"token punctuation"},"{"),n(`
    		`),u("span",{class:"token comment"},"// \u8C03\u7528\u51FD\u6570 call apply\u7ED1\u5B9Athis\u540E\u4F1A\u81EA\u52A8\u6267\u884C"),n(`
    		`),u("span",{class:"token function"},"func"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"apply"),u("span",{class:"token punctuation"},"("),n("context"),u("span",{class:"token punctuation"},","),n(" args"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
    	`),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(" delay"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
    `),u("span",{class:"token punctuation"},"}"),n(`
  `),u("span",{class:"token punctuation"},"}"),n(`


  `),u("span",{class:"token comment"},"// \u4F7F\u7528lodashjs"),n(`
  `),u("span",{class:"token comment"},"// import lodash from 'lodash'  //\u6211\u8FD9\u91CC\u5DF2\u7ECF\u5168\u5C40\u5F15\u5165 \u6240\u4EE5\u4E0D\u518D\u5F15\u5165\u4E86"),n(`
  `),u("span",{class:"token keyword"},"const"),n(" add4 "),u("span",{class:"token operator"},"="),n(" lodash"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"debounce"),u("span",{class:"token punctuation"},"("),n("add1"),u("span",{class:"token punctuation"},","),u("span",{class:"token number"},"1000"),u("span",{class:"token punctuation"},")"),n(`

  `),u("span",{class:"token comment"},"// vue2 \u4F7F\u7528\u9632\u6296"),n(`
  `),u("span",{class:"token comment"},"// methods: {"),n(`
  `),u("span",{class:"token comment"},"//   add4: lodash.debounce(function() {"),n(`
  `),u("span",{class:"token comment"},"//     // \u4E1A\u52A1\u4EE3\u7801"),n(`
  `),u("span",{class:"token comment"},"//   }, 400)"),n(`
  `),u("span",{class:"token comment"},"// }"),n(`
`)])]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("script")]),u("span",{class:"token punctuation"},">")]),n(`

`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("style")]),n(),u("span",{class:"token attr-name"},"scoped"),u("span",{class:"token punctuation"},">")]),u("span",{class:"token style"},[u("span",{class:"token language-css"},`

`)]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("style")]),u("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),L=u("h2",{id:"\u8282\u6D41",tabindex:"-1"},"\u8282\u6D41",-1),M=u("ul",null,[u("li",null,"\u5F53\u4E00\u4E2A\u52A8\u4F5C\u8FDE\u7EED\u89E6\u53D1\uFF0C\u4F1A\u6309\u7167\u4E00\u5B9A\u9891\u7387\u6267\u884C\uFF0C\u4E0D\u4F1A\u89E6\u53D1\u4E00\u6B21\u5C31\u6267\u884C\u4E00\u6B21"),u("li",null,"\u{1F450}\uFF1A\u597D\u6BD4\u738B\u8005\u8363\u8000\u7684\u6280\u80FD\u6309\u94AE\uFF0C\u8FDE\u7EED\u70B9\u51FB\u6280\u80FD\u6309\u94AE\uFF0C\u5E76\u4E0D\u80FD\u8FDE\u7EED\u7684\u653E\u51FA\u6280\u80FD\uFF0C\u53EA\u80FD\u7B49\u51B7\u5374\u597D\u4E86\u4E4B\u540E\u624D\u80FD\u518D\u6B21\u653E\u51FA\u6280\u80FD\u3002"),u("li",null,"\u4E00\u822C\u4F7F\u7528\u573A\u666F")],-1),Q=u("blockquote",null,[u("p",null,[n("\u61D2\u52A0\u8F7D\u65F6\u8981\u76D1\u542C\u8BA1\u7B97\u6EDA\u52A8\u6761\u7684\u4F4D\u7F6E\uFF0C\u4F46\u4E0D\u5FC5\u6BCF\u6B21\u6ED1\u52A8\u90FD\u89E6\u53D1\uFF0C\u53EF\u4EE5\u964D\u4F4E\u8BA1\u7B97\u7684\u9891\u7387\uFF0C\u800C\u4E0D\u5FC5\u53BB\u6D6A\u8D39 CPU \u8D44\u6E90\uFF1B"),u("br"),n(" \u9F20\u6807\u8FDE\u7EED\u4E0D\u65AD\u5730\u89E6\u53D1\u67D0\u4E8B\u4EF6\uFF08\u5982\u70B9\u51FB\uFF09\uFF0C\u53EA\u5728\u5355\u4F4D\u65F6\u95F4\u5185\u53EA\u89E6\u53D1\u4E00\u6B21\uFF1B")])],-1),R=u("p",null,[u("strong",null,"\u6848\u4F8B")],-1),W=u("div",null,"\u9632\u6296",-1),X=u("div",{class:"language-vue line-numbers-mode"},[u("pre",null,[u("code",null,[u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("template")]),u("span",{class:"token punctuation"},">")]),n(`
  `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("div")]),u("span",{class:"token punctuation"},">")]),n(`
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("add1"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("+1(\u6CA1\u6709\u8282\u6D41)"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("add2"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("+1(\u5C01\u88C5\u8282\u6D41)"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("add3"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("+1(\u5C01\u88C5\u8282\u6D412)"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`
    `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("xl-button")]),n(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("add4"),u("span",{class:"token punctuation"},'"')]),n(),u("span",{class:"token attr-name"},"type"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),n("primary"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),n("+1(lodash\u8282\u6D41)"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("xl-button")]),u("span",{class:"token punctuation"},">")]),n(`
    {{num}}
  `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("div")]),u("span",{class:"token punctuation"},">")]),n(`
`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("template")]),u("span",{class:"token punctuation"},">")]),n(`

`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("script")]),n(),u("span",{class:"token attr-name"},"setup"),u("span",{class:"token punctuation"},">")]),u("span",{class:"token script"},[u("span",{class:"token language-javascript"},[n(`
  `),u("span",{class:"token keyword"},"import"),n(),u("span",{class:"token punctuation"},"{"),n(" ref "),u("span",{class:"token punctuation"},"}"),n(),u("span",{class:"token keyword"},"from"),n(),u("span",{class:"token string"},"'vue'"),u("span",{class:"token punctuation"},";"),n(`
  `),u("span",{class:"token keyword"},"let"),n(" num "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token function"},"ref"),u("span",{class:"token punctuation"},"("),u("span",{class:"token number"},"0"),u("span",{class:"token punctuation"},")"),n(`
  
  `),u("span",{class:"token comment"},"// \u6CA1\u6709\u8282\u6D41"),n(`
  `),u("span",{class:"token keyword"},"function"),n(),u("span",{class:"token function"},"add1"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},"{"),n(`
    num`),u("span",{class:"token punctuation"},"."),n("value"),u("span",{class:"token operator"},"++"),n(`
  `),u("span",{class:"token punctuation"},"}"),n(`


  `),u("span",{class:"token comment"},"// \u65F6\u95F4\u6233\u7248"),n(`
  `),u("span",{class:"token keyword"},"function"),n(),u("span",{class:"token function"},"throttle"),u("span",{class:"token punctuation"},"("),u("span",{class:"token parameter"},[n("func"),u("span",{class:"token punctuation"},","),n(" wait")]),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
      `),u("span",{class:"token keyword"},"let"),n(" previous "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token number"},"0"),u("span",{class:"token punctuation"},";"),n(),u("span",{class:"token comment"},"//\u8BB0\u5F55\u4E0A\u4E00\u6B21\u7684\u5F00\u59CB\u65F6\u95F4"),n(`
      `),u("span",{class:"token keyword"},"return"),n(),u("span",{class:"token keyword"},"function"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
        `),u("span",{class:"token keyword"},"let"),n(" now "),u("span",{class:"token operator"},"="),n(" Date"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"now"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(),u("span",{class:"token comment"},"//\u83B7\u53D6\u5F53\u524D\u65F6\u95F4"),n(`
        `),u("span",{class:"token keyword"},"let"),n(" context "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},";"),n(`
        `),u("span",{class:"token keyword"},"let"),n(" args "),u("span",{class:"token operator"},"="),n(" arguments"),u("span",{class:"token punctuation"},";"),n(`
        `),u("span",{class:"token comment"},"//\u5F53\u524D\u65F6\u95F4-\u4E0A\u4E00\u6B21\u5F00\u59CB\u65F6\u95F4 \u4E0E\u7B49\u5F85\u65F6\u95F4\u4F5C\u5BF9\u6BD4"),n(`
        `),u("span",{class:"token comment"},"// \u5982\u679C\u5927\u4E8E\u7B49\u5F85\u65F6\u95F4\u5C31\u53EF\u4EE5\u6267\u884C\u51FD\u6570\u4E86  \u5E76\u4E14\u8BB0\u5F55\u5F53\u524D\u7684\u65F6\u95F4\uFF08previous\uFF09"),n(`
        `),u("span",{class:"token comment"},"// \u5982\u679C\u5C0F\u4E8E\u7B49\u5F85\u65F6\u95F4 \uFF0C\u5219\u8FD8\u4E0D\u80FD\u6267\u884C\uFF08\u6280\u80FD\u8FD8\u6CA1\u51B7\u5374\u597D\uFF09 \u4E0D\u6267\u884C\uFF08\u653E\u4E0D\u51FA\u6280\u80FD\uFF09"),n(`
        `),u("span",{class:"token keyword"},"if"),n(),u("span",{class:"token punctuation"},"("),n("now "),u("span",{class:"token operator"},"-"),n(" previous "),u("span",{class:"token operator"},">"),n(" wait"),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(` 
          `),u("span",{class:"token function"},"func"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"apply"),u("span",{class:"token punctuation"},"("),n("context"),u("span",{class:"token punctuation"},","),n(" args"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
          previous `),u("span",{class:"token operator"},"="),n(" now"),u("span",{class:"token punctuation"},";"),n(`
        `),u("span",{class:"token punctuation"},"}"),n(`
      `),u("span",{class:"token punctuation"},"}"),n(`
  `),u("span",{class:"token punctuation"},"}"),n(`

  `),u("span",{class:"token comment"},"// \u5B9A\u65F6\u5668\u7248"),n(`
`),u("span",{class:"token keyword"},"function"),n(),u("span",{class:"token function"},"throttle2"),u("span",{class:"token punctuation"},"("),u("span",{class:"token parameter"},[n("func"),u("span",{class:"token punctuation"},","),n(" wait")]),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
    `),u("span",{class:"token keyword"},"let"),n(" timeout"),u("span",{class:"token punctuation"},";"),n(),u("span",{class:"token comment"},"//\u8BBE\u7F6E\u5B9A\u65F6\u5668\u6807\u8BC6"),n(`
    `),u("span",{class:"token keyword"},"return"),n(),u("span",{class:"token keyword"},"function"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(`
      `),u("span",{class:"token keyword"},"let"),n(" context "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},";"),n(`
      `),u("span",{class:"token keyword"},"let"),n(" args "),u("span",{class:"token operator"},"="),n(" arguments"),u("span",{class:"token punctuation"},";"),n(`
      `),u("span",{class:"token comment"},"// \u6807\u8BC6\u662F\u7A7A\u7684\u624D\u80FD\u6267\u884C\u4E0B\u9762\u7684\u65B9\u6CD5"),n(`
      `),u("span",{class:"token keyword"},"if"),n(),u("span",{class:"token punctuation"},"("),u("span",{class:"token operator"},"!"),n("timeout"),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token punctuation"},"{"),n(` 
        `),u("span",{class:"token comment"},"// \u7B2C\u4E00\u6B21\u662F\u7A7A\u7684 \u8BBE\u7F6E\u4E86\u4E00\u4E2A\u5B9A\u65F6\u5668"),n(`
        `),u("span",{class:"token comment"},"// \u5B9A\u65F6\u5668\u65F6\u95F4\u5230\u540E  \u518D\u6B21\u5C06\u6807\u8BC6\u8BBE\u7F6E\u4E3A\u7A7A \u5E76\u6267\u884C\u51FD\u6570\uFF08\u653E\u51FA\u6280\u80FD\uFF09"),n(`
        `),u("span",{class:"token comment"},"// timeout \u5904\u4E8E\u975E\u7A7A\u72B6\u6001\u65F6 \uFF0C\u5C31\u662F \u51B7\u5374\u8FD8\u6CA1\u5B8C\u6210"),n(`
        timeout `),u("span",{class:"token operator"},"="),n(),u("span",{class:"token function"},"setTimeout"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(),u("span",{class:"token operator"},"=>"),n(),u("span",{class:"token punctuation"},"{"),n(`
          timeout `),u("span",{class:"token operator"},"="),n(),u("span",{class:"token keyword"},"null"),u("span",{class:"token punctuation"},";"),n(`
          `),u("span",{class:"token function"},"func"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"apply"),u("span",{class:"token punctuation"},"("),n("context"),u("span",{class:"token punctuation"},","),n(" args"),u("span",{class:"token punctuation"},")"),n(`
        `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(" wait"),u("span",{class:"token punctuation"},")"),n(`
      `),u("span",{class:"token punctuation"},"}"),n(`
    `),u("span",{class:"token punctuation"},"}"),n(`
`),u("span",{class:"token punctuation"},"}"),n(`

  `),u("span",{class:"token comment"},"// \u4F7F\u7528\u81EA\u5DF1\u5C01\u88C5\u7684\u9632\u6296\uFF08\u65F6\u95F4\u6233\u7248\uFF09"),n(`
  `),u("span",{class:"token keyword"},"const"),n(" add2 "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token function"},"throttle"),u("span",{class:"token punctuation"},"("),n("add1"),u("span",{class:"token punctuation"},","),u("span",{class:"token number"},"1000"),u("span",{class:"token punctuation"},")"),n(`


  `),u("span",{class:"token comment"},"// \u4F7F\u7528\u81EA\u5DF1\u5C01\u88C5\u7684\u9632\u6296\uFF08\u5B9A\u65F6\u5668\u7248\uFF09"),n(`
  `),u("span",{class:"token keyword"},"const"),n(" add3 "),u("span",{class:"token operator"},"="),n(),u("span",{class:"token function"},"throttle2"),u("span",{class:"token punctuation"},"("),n("add1"),u("span",{class:"token punctuation"},","),u("span",{class:"token number"},"1000"),u("span",{class:"token punctuation"},")"),n(`



  `),u("span",{class:"token comment"},"// \u4F7F\u7528lodashjs"),n(`
  `),u("span",{class:"token comment"},"// import lodash from 'lodash'  //\u6211\u8FD9\u91CC\u5DF2\u7ECF\u5168\u5C40\u5F15\u5165 \u6240\u4EE5\u4E0D\u518D\u5F15\u5165\u4E86"),n(`
  `),u("span",{class:"token keyword"},"const"),n(" add4 "),u("span",{class:"token operator"},"="),n(" lodash"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"throttle"),u("span",{class:"token punctuation"},"("),n("add1"),u("span",{class:"token punctuation"},","),u("span",{class:"token number"},"1000"),u("span",{class:"token punctuation"},")"),n(`

  `),u("span",{class:"token comment"},"// vue2 \u4F7F\u7528\u9632\u6296"),n(`
  `),u("span",{class:"token comment"},"// methods: {"),n(`
  `),u("span",{class:"token comment"},"//   add4: lodash.throttle(function() {"),n(`
  `),u("span",{class:"token comment"},"//     // \u4E1A\u52A1\u4EE3\u7801"),n(`
  `),u("span",{class:"token comment"},"//   }, 400)"),n(`
  `),u("span",{class:"token comment"},"// }"),n(`
`)])]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("script")]),u("span",{class:"token punctuation"},">")]),n(`

`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),n("style")]),n(),u("span",{class:"token attr-name"},"scoped"),u("span",{class:"token punctuation"},">")]),u("span",{class:"token style"},[u("span",{class:"token language-css"},`

`)]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),n("style")]),u("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function Y(a,f,o,e,y,g){const r=j("render-demo-0"),k=j("demo"),d=j("render-demo-1");return G(),U("div",null,[I,v(k,{sourceCode:`<template>
  <div>
    <xl-button @click="add1" type="primary">+1(\u6CA1\u6709\u9632\u6296)</xl-button>
    <xl-button @click="add2" type="primary">+1(\u6709\u9632\u6296)</xl-button>
    <xl-button @click="add3" type="primary">+1(\u5C01\u88C5\u9632\u6296)</xl-button>
    <xl-button @click="add4" type="primary">+1(lodash\u9632\u6296)</xl-button>
    {{num}}
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  let num = ref(0)
  
  // \u6CA1\u6709\u9632\u6296
  function add1(){
    num.value++
  }


  /**
   * \u7B2C\u4E00\u6B21\u70B9\u51FB\u65F6\u8BBE\u7F6E\u4E86\u5B9A\u65F6\u5668 \u5982\u679C\u65F6\u95F4\u5185\u6CA1\u6709\u518D\u6B21\u70B9\u51FB\u6539\u6309\u94AE \u5219\u5B9A\u65F6\u5668\u6CA1\u6709\u88AB\u6E05\u9664 \u65F6\u95F4\u5230\u4E86\u5C31\u4F1A\u6267\u884C
   * \u5982\u679C\u518D\u6B21\u70B9\u51FB\u6309\u94AE\uFF0C\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668\u4F1A\u88AB\u53D6\u6D88\uFF0C\u7136\u540E\u91CD\u65B0\u8BBE\u7F6E\u4E00\u4E2A\u4E00\u79D2\u949F\u7684\u5B9A\u65F6\u5668 \u65F6\u95F4\u5230\u4E86\u5C31\u4F1A\u6267\u884C
   */
  let timer = null;//time\u7528\u6765\u63A7\u5236\u4E8B\u4EF6\u7684\u89E6\u53D1
  function add2(){
    if(timer){  //\u5224\u65AD\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u5B9A\u65F6\u5668
      clearTimeout(timer)  //\u5B58\u5728 \u5219\u6E05\u9664\u5B9A\u65F6\u5668
    }
    // \u8BBE\u7F6E\u5B9A\u65F6\u5668 \u6216\u8005\u91CD\u65B0\u8BBE\u7F6E\u5B9A\u65F6\u5668
    timer = setTimeout(() => { 
      num.value++  
    }, 1000);
  }


  // \u4F7F\u7528\u81EA\u5DF1\u5C01\u88C5\u7684\u9632\u6296
  const add3 = debounce(add1,1000)
  // \u9632\u6296\u5C01\u88C5
    /*
     * fn : \u56DE\u8C03\u51FD\u6570  \u4F20\u8FDB\u6765\u7684\u662F\u6B63\u771F\u7684\u4E1A\u52A1\u903B\u8F91 
     * delay : \u5EF6\u65F6\u65F6\u95F4
     */ 
  function debounce(func, delay) {
    let timer;// \u8BBE\u7F6E\u5B9A\u65F6\u5668\u6807\u8BC6
    
    // \u96BE\u70B9 \u8FD4\u56DE\u4E8B\u4EF6\u7ED1\u5B9A\u51FD\u6570
    return function() {
      let context = this;// func\u6307\u5B9Athis
    	let args = arguments;// func\u53C2\u6570
      if(timer){
    	  clearTimeout(timer);// \u5148\u6E05\u9664\u5B9A\u65F6\u5668
      }
    	//\u8BBE\u7F6E\u5B9A\u65F6\u5668
    	timer = setTimeout(() => {
    		// \u8C03\u7528\u51FD\u6570 call apply\u7ED1\u5B9Athis\u540E\u4F1A\u81EA\u52A8\u6267\u884C
    		func.apply(context, args);
    	}, delay);
    }
  }


  // \u4F7F\u7528lodashjs
  // import lodash from 'lodash'  //\u6211\u8FD9\u91CC\u5DF2\u7ECF\u5168\u5C40\u5F15\u5165 \u6240\u4EE5\u4E0D\u518D\u5F15\u5165\u4E86
  const add4 = lodash.debounce(add1,1000)

  // vue2 \u4F7F\u7528\u9632\u6296
  // methods: {
  //   add4: lodash.debounce(function() {
  //     // \u4E1A\u52A1\u4EE3\u7801
  //   }, 400)
  // }
<\/script>

<style scoped>

</style>
`},{description:F(()=>[J]),highlight:F(()=>[K]),default:F(()=>[v(r)]),_:1}),L,M,Q,R,v(k,{sourceCode:`<template>
  <div>
    <xl-button @click="add1" type="primary">+1(\u6CA1\u6709\u8282\u6D41)</xl-button>
    <xl-button @click="add2" type="primary">+1(\u5C01\u88C5\u8282\u6D41)</xl-button>
    <xl-button @click="add3" type="primary">+1(\u5C01\u88C5\u8282\u6D412)</xl-button>
    <xl-button @click="add4" type="primary">+1(lodash\u8282\u6D41)</xl-button>
    {{num}}
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  let num = ref(0)
  
  // \u6CA1\u6709\u8282\u6D41
  function add1(){
    num.value++
  }


  // \u65F6\u95F4\u6233\u7248
  function throttle(func, wait) {
      let previous = 0; //\u8BB0\u5F55\u4E0A\u4E00\u6B21\u7684\u5F00\u59CB\u65F6\u95F4
      return function() {
        let now = Date.now(); //\u83B7\u53D6\u5F53\u524D\u65F6\u95F4
        let context = this;
        let args = arguments;
        //\u5F53\u524D\u65F6\u95F4-\u4E0A\u4E00\u6B21\u5F00\u59CB\u65F6\u95F4 \u4E0E\u7B49\u5F85\u65F6\u95F4\u4F5C\u5BF9\u6BD4
        // \u5982\u679C\u5927\u4E8E\u7B49\u5F85\u65F6\u95F4\u5C31\u53EF\u4EE5\u6267\u884C\u51FD\u6570\u4E86  \u5E76\u4E14\u8BB0\u5F55\u5F53\u524D\u7684\u65F6\u95F4\uFF08previous\uFF09
        // \u5982\u679C\u5C0F\u4E8E\u7B49\u5F85\u65F6\u95F4 \uFF0C\u5219\u8FD8\u4E0D\u80FD\u6267\u884C\uFF08\u6280\u80FD\u8FD8\u6CA1\u51B7\u5374\u597D\uFF09 \u4E0D\u6267\u884C\uFF08\u653E\u4E0D\u51FA\u6280\u80FD\uFF09
        if (now - previous > wait) { 
          func.apply(context, args);
          previous = now;
        }
      }
  }

  // \u5B9A\u65F6\u5668\u7248
function throttle2(func, wait) {
    let timeout; //\u8BBE\u7F6E\u5B9A\u65F6\u5668\u6807\u8BC6
    return function() {
      let context = this;
      let args = arguments;
      // \u6807\u8BC6\u662F\u7A7A\u7684\u624D\u80FD\u6267\u884C\u4E0B\u9762\u7684\u65B9\u6CD5
      if (!timeout) { 
        // \u7B2C\u4E00\u6B21\u662F\u7A7A\u7684 \u8BBE\u7F6E\u4E86\u4E00\u4E2A\u5B9A\u65F6\u5668
        // \u5B9A\u65F6\u5668\u65F6\u95F4\u5230\u540E  \u518D\u6B21\u5C06\u6807\u8BC6\u8BBE\u7F6E\u4E3A\u7A7A \u5E76\u6267\u884C\u51FD\u6570\uFF08\u653E\u51FA\u6280\u80FD\uFF09
        // timeout \u5904\u4E8E\u975E\u7A7A\u72B6\u6001\u65F6 \uFF0C\u5C31\u662F \u51B7\u5374\u8FD8\u6CA1\u5B8C\u6210
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args)
        }, wait)
      }
    }
}

  // \u4F7F\u7528\u81EA\u5DF1\u5C01\u88C5\u7684\u9632\u6296\uFF08\u65F6\u95F4\u6233\u7248\uFF09
  const add2 = throttle(add1,1000)


  // \u4F7F\u7528\u81EA\u5DF1\u5C01\u88C5\u7684\u9632\u6296\uFF08\u5B9A\u65F6\u5668\u7248\uFF09
  const add3 = throttle2(add1,1000)



  // \u4F7F\u7528lodashjs
  // import lodash from 'lodash'  //\u6211\u8FD9\u91CC\u5DF2\u7ECF\u5168\u5C40\u5F15\u5165 \u6240\u4EE5\u4E0D\u518D\u5F15\u5165\u4E86
  const add4 = lodash.throttle(add1,1000)

  // vue2 \u4F7F\u7528\u9632\u6296
  // methods: {
  //   add4: lodash.throttle(function() {
  //     // \u4E1A\u52A1\u4EE3\u7801
  //   }, 400)
  // }
<\/script>

<style scoped>

</style>
`},{description:F(()=>[W]),highlight:F(()=>[X]),default:F(()=>[v(d)]),_:1})])}var tu=O(H,[["render",Y]]);export{nu as __pageData,tu as default};
