import{_ as O,c as U,a as b,w as g,e as z,b as n,d as t,r as V,o as G,V as A}from"./app.f182fb68.js";const H={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:a,createElementVNode:s,createTextVNode:o,resolveComponent:f,withCtx:c,createVNode:p,openBlock:C,createElementBlock:l}=A,m=o("Btn");function v(D,i){const E=f("xl-button");return C(),l("div",null,[s("div",null,[s("p",null,a(D.msg),1),p(E,{type:"primary",onClick:D.add},{default:c(()=>[m]),_:1},8,["onClick"])])])}const{reactive:x}=A;return{render:v,...{setup(D,{expose:i}){i();let E=x(0);function k(){console.log(E),E++}const _={msg:E,add:k,reactive:x};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}}}(),"render-demo-1":function(){const{createElementVNode:a,toDisplayString:s,createTextVNode:o,resolveComponent:f,withCtx:c,createVNode:p,openBlock:C,createElementBlock:l}=A,m={class:"reactive"},v={class:"eg"},x=a("p",null,"json\u3001\u5BF9\u8C61\u7C7B\u578B",-1),h=o("Btn"),D={class:"eg"},i=a("p",null,"\u6570\u7EC4\u7C7B\u578B",-1),E=o("Btn"),k={class:"eg"},_=a("p",null,"Date\u7C7B\u578B",-1),r=o("Btn"),d=o("Btn2");function N(F,M){const B=f("xl-button");return C(),l("div",null,[a("div",m,[a("div",v,[x,a("p",null,s(F.msg.num),1),p(B,{type:"primary",onClick:F.add},{default:c(()=>[h]),_:1},8,["onClick"])]),a("div",D,[i,a("p",null,s(F.arr),1),p(B,{type:"primary",onClick:F.addArr},{default:c(()=>[E]),_:1},8,["onClick"])]),a("div",k,[_,a("p",null,s(F.date),1),a("p",null,s(F.date2.date),1),p(B,{type:"primary",onClick:F.setDate},{default:c(()=>[r]),_:1},8,["onClick"]),p(B,{type:"primary",onClick:F.setDate2},{default:c(()=>[d]),_:1},8,["onClick"])])])])}const{reactive:y}=A;return{render:N,...{setup(F,{expose:M}){M();let B=y({num:0});function j(){console.log(B),B.num++}let w=y([1,100,3]);function P(){console.log(w),w[0]++,w[1]--}let u=y(new Date),e=y({date:new Date});function T(){u.setDate(u.getDate()+1),e.date.setDate(e.date.getDate()+1),console.log("date",u),console.log("date2",e)}function $(){u.setDate(u.getDate()+1),e.date.setDate(e.date.getDate()+1),u.setDate(u.getDate()+1),u=new Date(u),e.date.setDate(e.date.getDate()+1),e.date=new Date(e.date),console.log("date",u),console.log("date2",e)}const S={msg:B,add:j,arr:w,addArr:P,date:u,date2:e,setDate:T,setDate2:$,reactive:y};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}}}}(),"render-demo-2":function(){const{toDisplayString:a,createElementVNode:s,createTextVNode:o,resolveComponent:f,withCtx:c,createVNode:p,vShow:C,withDirectives:l,openBlock:m,createElementBlock:v}=A,x=o("Btn"),h=o("BtnB");function D(k,_){const r=f("xl-button");return m(),v("div",null,[s("div",null,[s("p",null,a(k.proxyMsg),1),p(r,{type:"primary",onClick:k.showA},{default:c(()=>[x]),_:1},8,["onClick"]),l(p(r,{type:"primary",onClick:k.addB},{default:c(()=>[h]),_:1},8,["onClick"]),[[C,k.proxyMsg.B]])])])}const{reactive:i}=A;return{render:D,...{setup(k,{expose:_}){_();const r={a:1};let d=i(r);function N(){console.log("\u539Fvs\u4EE3\u7406:",r===d),console.log("reactive(\u539F)vs\u4EE3\u7406:",i(r)===d),console.log("reactive(\u4EE3\u7406)vs\u4EE3\u7406:",i(d)===d),d.B={b:1},console.log("B b\u5BF9\u8C61\u4E5F\u4F9D\u65E7\u662F\u4EE3\u7406")}function y(){d.B.b++}const q={msg:r,proxyMsg:d,showA:N,addB:y,reactive:i};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}}}}()}},cn='{"title":"\u4EC0\u4E48\u662F reactive","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F reactive","slug":"\u4EC0\u4E48\u662F-reactive"},{"level":2,"title":"reactive\u4F7F\u7528","slug":"reactive\u4F7F\u7528"},{"level":2,"title":"\u54CD\u5E94\u5F0F\u4EE3\u7406 \u4E0E \u539F\u59CB\u5BF9\u8C61","slug":"\u54CD\u5E94\u5F0F\u4EE3\u7406-\u4E0E-\u539F\u59CB\u5BF9\u8C61"}],"relativePath":"blog/02_vue3/2_reactive.md","lastUpdated":1656928523000}',I=z('<h2 id="\u4EC0\u4E48\u662F-reactive" tabindex="-1">\u4EC0\u4E48\u662F reactive</h2><ol><li>reactive \u662F Vue3 \u4E2D\u63D0\u4F9B\u7684\u5B9E\u73B0\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u65B9\u6CD5\u3002</li><li>\u5728 Vue2 \u4E2D\u54CD\u5E94\u5F0F\u6570\u636E\u662F\u901A\u8FC7 <code>defineProperty</code> \u6765\u5B9E\u73B0\u7684</li><li>\u5728 Vue3 \u4E2D\u54CD\u5E94\u5F0F\u6570\u636E\u662F\u901A\u8FC7 <code>ES6</code> \u7684 <code>Proxy</code>\u6765\u5B9E\u73B0\u7684\u3002</li><li>reactive \u53C2\u6570\u5FC5\u987B\u662F\u5BF9\u8C61 (<code>json</code> / <code>arr</code>)</li></ol><ul><li>\u5982\u679C\u7ED9 reactive \u4F20\u9012\u4E86\u5176\u5B83\u5BF9\u8C61 <ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4FEE\u6539\u5BF9\u8C61\u65E0\u6CD5\u5B9E\u73B0\u754C\u9762\u7684\u6570\u636E\u7ED1\u5B9A\u66F4\u65B0\u3002</li><li>\u5982\u679C\u9700\u8981\u66F4\u65B0\uFF0C\u9700\u8981\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C\u3002(\u5373\u4E0D\u5141\u8BB8\u76F4\u63A5\u64CD\u4F5C\u6570\u636E\uFF0C\u9700\u8981\u653E\u4E2A\u65B0\u7684\u6570\u636E\u6765\u66FF\u4EE3\u539F\u6570\u636E)</li></ul></li></ul><h2 id="reactive\u4F7F\u7528" tabindex="-1">reactive\u4F7F\u7528</h2><p><strong>reactive\u9519\u8BEF\u793A\u8303 (\u63A7\u5236\u53F0\u67E5\u770B)</strong></p>',5),J=n("div",null,"\u5728 reactive \u4F7F\u7528\u57FA\u672C\u7C7B\u578B\u53C2\u6570 \u9519\u8BEF\u793A\u8303",-1),K=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`<!-- 
  \u57FA\u672C\u7C7B\u578B(\u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C)\u5728 reactive \u4E2D\u65E0\u6CD5\u88AB\u521B\u5EFA\u6210 proxy \u5BF9\u8C61\uFF0C\u4E5F\u5C31\u65E0\u6CD5\u5B9E\u73B0\u76D1\u542C\u3002
  \u70B9\u51FB button \uFF0C\u6211\u4EEC\u671F\u671B\u7684\u7ED3\u679C\u662F\u6570\u5B57\u4ECE 0 \u53D8\u6210 1\uFF0C\u7136\u800C\u5B9E\u9645\u4E0A\u754C\u9762\u4E0A\u7684\u6570\u5B57\u5E76\u6CA1\u6709\u53D1\u751F\u4EFB\u4F55\u6539\u53D8\u3002 
-->`),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{msg}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Btn"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
 
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" msg "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("msg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      
      msg `),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),L=n("blockquote",null,[n("p",null,"\u8F93\u51FA\u7684\u503C\u786E\u5B9E\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u79CD\u53D8\u5316\u5E76\u6CA1\u6709\u53CD\u9988\u5230\u754C\u9762\u4E0A\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5E76\u6CA1\u6709\u5B9E\u73B0\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u3002\u5F53\u7136\uFF0C\u5982\u679C\u662F ref \u7684\u8BDD\uFF0C\u5C31\u4E0D\u5B58\u5728\u8FD9\u6837\u7684\u95EE\u9898\u3002\u800C\u5982\u679C\u8981\u4F7F\u7528 reactive \uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u53C2\u6570\u4ECE \u57FA\u672C\u7C7B\u578B \u8F6C\u5316\u4E3A \u5BF9\u8C61\u3002")],-1),Q=n("hr",null,null,-1),R=n("hr",null,null,-1),W=n("p",null,[n("strong",null,"reactive \u6B63\u786E\u4F7F\u7528")],-1),X=n("div",null,"\u5728 reactive \u6B63\u786E\u4F7F\u7528",-1),Y=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("reactive"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("eg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("json\u3001\u5BF9\u8C61\u7C7B\u578B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{msg.num}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Btn"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("eg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("\u6570\u7EC4\u7C7B\u578B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{arr}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addArr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Btn"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("eg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Date\u7C7B\u578B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{date}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{date2.date}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setDate"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Btn"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setDate2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Btn2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
 
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
    `),n("span",{class:"token comment"},"// json / \u5BF9\u8C61\u7C7B\u578B"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" msg "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"num"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"0"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("msg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      msg`),n("span",{class:"token punctuation"},"."),t("num "),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token comment"},"// \u6570\u7EC4\u7C7B\u578B"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"addArr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      arr`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),t(`
      arr`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"--"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token comment"},"// Date\u7C7B\u578B"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" date "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" date2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      date`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDate"),n("span",{class:"token punctuation"},"("),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      date2`),n("span",{class:"token punctuation"},"."),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDate"),n("span",{class:"token punctuation"},"("),t("date2"),n("span",{class:"token punctuation"},"."),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t("date"),n("span",{class:"token punctuation"},")"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'date2'"),n("span",{class:"token punctuation"},","),t("date2"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setDate2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      date`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDate"),n("span",{class:"token punctuation"},"("),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      date2`),n("span",{class:"token punctuation"},"."),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDate"),n("span",{class:"token punctuation"},"("),t("date2"),n("span",{class:"token punctuation"},"."),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token comment"},"// \u7279\u6B8A\u5904\u7406\u5C31\u662F\u91CD\u65B0\u8D4B\u503C \u800C\u4E0D\u662F\u76F4\u63A5\u4FEE\u6539\u539F\u6765\u7684\u503C"),t(`
      date`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDate"),n("span",{class:"token punctuation"},"("),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      date `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),t("date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

      date2`),n("span",{class:"token punctuation"},"."),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDate"),n("span",{class:"token punctuation"},"("),t("date2"),n("span",{class:"token punctuation"},"."),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      date2`),n("span",{class:"token punctuation"},"."),t("date "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),t("date2"),n("span",{class:"token punctuation"},"."),t("date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t("date"),n("span",{class:"token punctuation"},")"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'date2'"),n("span",{class:"token punctuation"},","),t("date2"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".reactive"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".eg"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0 100px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=n("blockquote",null,[n("ul",null,[n("li",null,"\u793A\u4F8B\u8BF4\u660E reactive msg \u6210\u529F\u88AB\u521B\u5EFA\u6210\u4E86 proxy \u5BF9\u8C61\uFF0C\u4ED6\u901A\u8FC7\u52AB\u6301\u5BF9\u8C61\u7684 get \u548C set \u65B9\u6CD5\u5B9E\u73B0\u4E86\u5BF9\u8C61\u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u3002"),n("li",null,"\u6570\u7EC4\u53D8\u5316\u4E5F\u540C\u6837\u53EF\u4EE5"),n("li",null,[t("Date \u7565\u663E\u7279\u6B8A "),n("code",null,"\u53C2\u8003\u6848\u4F8Bdate2.date"),t("\u4E0E"),n("code",null,"Btn2\u6309\u94AE")])])],-1),nn=n("h2",{id:"\u54CD\u5E94\u5F0F\u4EE3\u7406-\u4E0E-\u539F\u59CB\u5BF9\u8C61",tabindex:"-1"},"\u54CD\u5E94\u5F0F\u4EE3\u7406 \u4E0E \u539F\u59CB\u5BF9\u8C61",-1),tn=n("p",null,[n("strong",null,"\uFF08\u6848\u4F8B\uFF09\u63A7\u5236\u53F0\u67E5\u770B")],-1),an=n("div",null,"\u5BF9\u8C61\u5BF9\u6BD4",-1),sn=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{proxyMsg}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showA"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Btn"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("proxyMsg.B"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addB"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("BtnB"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
 
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
    `),n("span",{class:"token comment"},"// \u539F\u5BF9\u8C61"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" msg "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"a"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token comment"},"// msg\u4EE3\u7406\u5BF9\u8C61"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" proxyMsg "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("msg"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u539Fvs\u4EE3\u7406:'"),n("span",{class:"token punctuation"},","),t("msg "),n("span",{class:"token operator"},"==="),t(" proxyMsg"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"// false"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'reactive(\u539F)vs\u4EE3\u7406:'"),n("span",{class:"token punctuation"},","),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("msg"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"==="),t(" proxyMsg"),n("span",{class:"token punctuation"},")"),t("  "),n("span",{class:"token comment"},"//true"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'reactive(\u4EE3\u7406)vs\u4EE3\u7406:'"),n("span",{class:"token punctuation"},","),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("proxyMsg"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"==="),t(" proxyMsg"),n("span",{class:"token punctuation"},")"),t("  "),n("span",{class:"token comment"},"//true"),t(`
      proxyMsg`),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"B"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"b"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"}"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'B b\u5BF9\u8C61\u4E5F\u4F9D\u65E7\u662F\u4EE3\u7406'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token comment"},"// \u66F4\u6539\u540E\u9762\u6DFB\u52A0\u7684b\u5C5E\u6027"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"addB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      proxyMsg`),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"B"),n("span",{class:"token punctuation"},"."),t("b"),n("span",{class:"token operator"},"++"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),un=n("ul",null,[n("li",null,[t("reactive() \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u6E90\u5BF9\u8C61\u7684 Proxy\uFF0C\u5B83\u548C\u6E90\u5BF9\u8C61\u662F\u4E0D\u76F8\u7B49\u7684"),n("code",null,"\uFF08\u6848\u4F8B\uFF1A\u539Fvs\u4EE3\u7406\uFF09")]),n("li",null,"\u53EA\u6709\u4EE3\u7406\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u66F4\u6539\u539F\u59CB\u7684\u5BF9\u8C61\u4E0D\u4F1A\u89E6\u53D1\u66F4\u65B0\u3002\u56E0\u6B64\uFF0C\u4F7F\u7528 Vue \u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u6700\u4F73\u5B9E\u8DF5\u662F \u4EC5\u4F7F\u7528\u4EE3\u7406\u4F5C\u4E3A\u72B6\u6001\uFF08\u53EA\u4F7F\u7528\u4EE3\u7406\u540E\u7684\u5BF9\u8C61\uFF09\u3002"),n("li",null,[t("\u4E3A\u4FDD\u8BC1\u8BBF\u95EE\u4EE3\u7406\u7684\u4E00\u81F4\u6027\uFF0C\u5BF9\u540C\u4E00\u4E2A\u5BF9\u8C61\u8C03\u7528 reactive() \u4F1A\u603B\u662F\u8FD4\u56DE\u540C\u6837\u7684\u4EE3\u7406\uFF0C\u800C\u5BF9\u4EE3\u7406\u8C03\u7528 reactive() \u5219\u4F1A\u8FD4\u56DE\u5B83\u81EA\u5DF1"),n("code",null,"\uFF08\u6848\u4F8B\uFF1Areactive(\u539F)vs\u4EE3\u7406\uFF09")]),n("li",null,[t("\u8FD9\u4E2A\u89C4\u5219\u5BF9\u6DF1\u5C42\u7EA7\u7684\u5BF9\u8C61\u4E5F\u9002\u7528\u3002\u4F9D\u9760\u6DF1\u5C42\u54CD\u5E94\u6027\uFF0C\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5185\u7684\u6DF1\u5C42\u7EA7\u5BF9\u8C61\u4F9D\u7136\u662F\u4EE3\u7406"),n("code",null,"(\u4F8B\uFF1AaddB\u51FD\u6570)")])],-1);function en(a,s,o,f,c,p){const C=V("render-demo-0"),l=V("demo"),m=V("render-demo-1"),v=V("render-demo-2");return G(),U("div",null,[I,b(l,{sourceCode:`<!-- 
  \u57FA\u672C\u7C7B\u578B(\u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C)\u5728 reactive \u4E2D\u65E0\u6CD5\u88AB\u521B\u5EFA\u6210 proxy \u5BF9\u8C61\uFF0C\u4E5F\u5C31\u65E0\u6CD5\u5B9E\u73B0\u76D1\u542C\u3002
  \u70B9\u51FB button \uFF0C\u6211\u4EEC\u671F\u671B\u7684\u7ED3\u679C\u662F\u6570\u5B57\u4ECE 0 \u53D8\u6210 1\uFF0C\u7136\u800C\u5B9E\u9645\u4E0A\u754C\u9762\u4E0A\u7684\u6570\u5B57\u5E76\u6CA1\u6709\u53D1\u751F\u4EFB\u4F55\u6539\u53D8\u3002 
-->
<template>
<div>
  <p>{{msg}}</p>
  <xl-button type="primary" @click="add">Btn</xl-button>
</div>
</template>
 
<script setup>
import { reactive } from 'vue'
    let msg = reactive(0)

    function add() {
      console.log(msg);
      
      msg ++;
    }
<\/script>
`},{description:g(()=>[J]),highlight:g(()=>[K]),default:g(()=>[b(C)]),_:1}),L,Q,R,W,b(l,{sourceCode:`<template>
<div class="reactive">
  <div class="eg">
    <p>json\u3001\u5BF9\u8C61\u7C7B\u578B</p>
    <p>{{msg.num}}</p>
    <xl-button type="primary" @click="add">Btn</xl-button>
  </div>
  <div class="eg">
    <p>\u6570\u7EC4\u7C7B\u578B</p>
    <p>{{arr}}</p>
    <xl-button type="primary" @click="addArr">Btn</xl-button>
  </div>
  <div class="eg">
    <p>Date\u7C7B\u578B</p>
    <p>{{date}}</p>
    <p>{{date2.date}}</p>
    <xl-button type="primary" @click="setDate">Btn</xl-button>
    <xl-button type="primary" @click="setDate2">Btn2</xl-button>
  </div>
</div>
</template>
 
<script setup>
import { reactive } from 'vue'
    // json / \u5BF9\u8C61\u7C7B\u578B
    let msg = reactive({
      num:0
    })
    function add() {
      console.log(msg);
      msg.num ++;
    }
    // \u6570\u7EC4\u7C7B\u578B
    let arr = reactive([1,100,3])
    function addArr() {
      console.log(arr);
      arr[0]++
      arr[1]--
    }
    // Date\u7C7B\u578B
    let date = reactive(new Date())
    let date2 = reactive({
      date: new Date()
    })
    function setDate(){
      date.setDate(date.getDate() + 1);
      date2.date.setDate(date2.date.getDate() + 1);
      console.log('date',date)
      console.log('date2',date2)
    }
    function setDate2(){
      date.setDate(date.getDate() + 1);
      date2.date.setDate(date2.date.getDate() + 1);
      // \u7279\u6B8A\u5904\u7406\u5C31\u662F\u91CD\u65B0\u8D4B\u503C \u800C\u4E0D\u662F\u76F4\u63A5\u4FEE\u6539\u539F\u6765\u7684\u503C
      date.setDate(date.getDate() + 1);
      date = new Date(date);

      date2.date.setDate(date2.date.getDate() + 1);
      date2.date = new Date(date2.date);

      console.log('date',date)
      console.log('date2',date2)
    }
<\/script>
<style scoped>
.reactive{
  width: 100%;
  display: flex;
}
.eg{
  margin: 0 100px;
}
</style>
`},{description:g(()=>[X]),highlight:g(()=>[Y]),default:g(()=>[b(m)]),_:1}),Z,nn,tn,b(l,{sourceCode:`<template>
<div>
  <p>{{proxyMsg}}</p>
  <xl-button type="primary" @click="showA">Btn</xl-button>
  <xl-button v-show="proxyMsg.B" type="primary" @click="addB">BtnB</xl-button>
</div>
</template>
 
<script setup>
import { reactive } from 'vue'
    // \u539F\u5BF9\u8C61
    const msg = {a:1}
    // msg\u4EE3\u7406\u5BF9\u8C61
    let proxyMsg = reactive(msg)

    function showA() {
      console.log('\u539Fvs\u4EE3\u7406:',msg === proxyMsg) // false
      console.log('reactive(\u539F)vs\u4EE3\u7406:',reactive(msg) === proxyMsg)  //true
      console.log('reactive(\u4EE3\u7406)vs\u4EE3\u7406:',reactive(proxyMsg) === proxyMsg)  //true
      proxyMsg.B = {b:1}
      console.log('B b\u5BF9\u8C61\u4E5F\u4F9D\u65E7\u662F\u4EE3\u7406')
    }
    // \u66F4\u6539\u540E\u9762\u6DFB\u52A0\u7684b\u5C5E\u6027
    function addB(){
      proxyMsg.B.b++
    }
<\/script>
`},{description:g(()=>[an]),highlight:g(()=>[sn]),default:g(()=>[b(v)]),_:1}),un])}var pn=O(H,[["render",en]]);export{cn as __pageData,pn as default};
