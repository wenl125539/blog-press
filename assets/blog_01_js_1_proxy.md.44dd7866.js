import{_ as I,c as O,b as B,w as f,d as T,a as n,r as D,o as G,V as v,e as t}from"./app.1593a14f.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:F,createTextVNode:e,resolveComponent:d,withCtx:p,createVNode:l,createElementVNode:o,vShow:C,withDirectives:g,openBlock:x,createElementBlock:_}=v,h=e("\u83B7\u53D6\u4EF7\u683Cprice"),b=e("\u91CD\u7F6E\u6C34\u679C"),A=o("span",null,"\u63A7\u5236\u53F0\u67E5\u770B",-1),w=o("br",null,null,-1),P=e("\u8BBE\u7F6E\u6C34\u679C\u539F\u4EF7"),N=["value"];function q(s,E){const a=d("xl-button");return x(),_("div",null,[o("div",null,[l(a,{type:"info",onClick:s.getfruit},{default:p(()=>[e("\u83B7\u53D6"+F(s.isProxy?"\u4EE3\u7406\u540E\u7684":"")+"\u6C34\u679C",1)]),_:1},8,["onClick"]),l(a,{type:"info",onClick:s.getprice},{default:p(()=>[h]),_:1},8,["onClick"]),l(a,{type:"primary",onClick:s.setProxy},{default:p(()=>[e("\u70B9\u51FB\u7ED9\u6C34\u679C\u627E\u4EE3\u7406\u5546\uFF08"+F(s.proxyNum)+"\uFF09",1)]),_:1},8,["onClick"]),l(a,{type:"warning",onClick:s.resetFruit},{default:p(()=>[b]),_:1},8,["onClick"]),A,w,g(o("div",null,[P,o("input",{type:"text",placeholder:"\u7ED9\u897F\u74DC\u8BBE\u7F6E\u4EF7\u683C",value:s.fruit.price,onInput:E[0]||(E[0]=(...i)=>s.changePrice&&s.changePrice(...i))},null,40,N)],512),[[C,s.isProxy]])])])}const{ref:m}=v;return{render:q,...{setup(s,{expose:E}){E();const a=m(!1),i=m(0);let u={name:"\u897F\u74DC",price:15};function V(){u={name:"\u897F\u74DC",price:15},a.value=!1,i.value=0,console.log("\u91CD\u7F6E\u6210\u529F")}function S(){console.log("fruit\uFF1A",u)}function j(){console.log("name\uFF1A",u.name)}function $(){console.log("price\uFF1A",u.price)}function z(r){u.price=Number.parseInt(r.target.value)}function R(){u=new Proxy(u,{get(r,k){let c=r[k];return k==="price"&&(c+=5),c},set(r,k,c){if(k==="price"&&c>100)throw Error("\u53EF\u4E0D\u80FD\u592A\u8D35\u4E86");return console.log(`\u5DF2\u8BBE\u7F6E\u4EF7\u683C\u4E3A${c}`),Reflect.set(r,k,c)}}),a.value=!0,i.value++,console.log("\u4EE3\u7406\u6210\u529F")}const y={isProxy:a,proxyNum:i,fruit:u,resetFruit:V,getfruit:S,getName:j,getprice:$,changePrice:z,setProxy:R,ref:m};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}}}()}},nn='{"title":"proxy\u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"proxy\u7B80\u4ECB","slug":"proxy\u7B80\u4ECB"},{"level":2,"title":"\u7406\u89E3","slug":"\u7406\u89E3"},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"}],"relativePath":"blog/01_js/1_proxy.md","lastUpdated":1656670641000}',M=T(`<h2 id="proxy\u7B80\u4ECB" tabindex="-1">proxy\u7B80\u4ECB</h2><blockquote><p>\u53EA\u505A\u7B80\u5230\u4E0D\u80FD\u518D\u7B80\u7684\u7B80\u4ECB\uFF0C\u8BE6\u7EC6\u7528\u6CD5\u8BF7\u67E5\u9605<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">MDN</a>\u548C<a href="https://es6.ruanyifeng.com/#docs/proxy" target="_blank" rel="noopener noreferrer">\u962E\u4E00\u5CF0ES6</a></p></blockquote><h2 id="\u7406\u89E3" tabindex="-1">\u7406\u89E3</h2><p>Proxy \u53EF\u4EE5\u7406\u89E3\u6210\uFF0C\u5728\u76EE\u6807\u5BF9\u8C61\u4E4B\u524D\u67B6\u8BBE\u4E00\u5C42\u201C\u62E6\u622A\u201D\uFF0C\u5916\u754C\u5BF9\u8BE5\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u90FD\u5FC5\u987B\u5148\u901A\u8FC7\u8FD9\u5C42\u62E6\u622A\uFF0C\u56E0\u6B64\u63D0\u4F9B\u4E86\u4E00\u79CD\u673A\u5236\uFF0C\u53EF\u4EE5\u5BF9\u5916\u754C\u7684\u8BBF\u95EE\u8FDB\u884C\u8FC7\u6EE4\u548C\u6539\u5199\u3002Proxy \u8FD9\u4E2A\u8BCD\u7684\u539F\u610F\u662F\u4EE3\u7406\uFF0C\u7528\u5728\u8FD9\u91CC\u8868\u793A\u7531\u5B83\u6765\u201C\u4EE3\u7406\u201D\u67D0\u4E9B\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u8BD1\u4E3A\u201C\u4EE3\u7406\u5668\u201D\u3002</p><ul><li>\u8BED\u6CD5</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u6C34\u679C\u4EE3\u7406\u5546\u6848\u4EE3\u5165\u7406\u89E3</strong></p>`,7),W=n("div",null,"\u4EE3\u7406 \u7406\u89E3\u7B80\u5355\u6848\u4F8B",-1),U=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getfruit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u83B7\u53D6{{isProxy?'\u4EE3\u7406\u540E\u7684':''}}\u6C34\u679C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getprice"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u83B7\u53D6\u4EF7\u683Cprice"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setProxy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u70B9\u51FB\u7ED9\u6C34\u679C\u627E\u4EE3\u7406\u5546\uFF08{{proxyNum}}\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("xl-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("resetFruit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u91CD\u7F6E\u6C34\u679C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("xl-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("\u63A7\u5236\u53F0\u67E5\u770B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isProxy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u8BBE\u7F6E\u6C34\u679C\u539F\u4EF7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("input")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u7ED9\u897F\u74DC\u8BBE\u7F6E\u4EF7\u683C"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fruit.price"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-on:"),t("input")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("changePrice"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("ref"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" isProxy "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" proxyNum "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"let"),t(" fruit "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u897F\u74DC"'),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"price"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token comment"},"//\u91CD\u7F6E\u6C34\u679C"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"resetFruit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  fruit `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u897F\u74DC"'),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"price"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  isProxy`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
  proxyNum`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u91CD\u7F6E\u6210\u529F"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// \u67E5\u770B\u5F53\u524D\u6C34\u679C\u5C5E\u6027\uFF08\u770B\u770B\u662F\u4E2D\u95F4\u5546\u7684 \u8FD8\u662F\u679C\u519C\u7684\uFF09"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getfruit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"fruit\uFF1A"'),n("span",{class:"token punctuation"},","),t(" fruit"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name\uFF1A"'),n("span",{class:"token punctuation"},","),t(" fruit"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// \u67E5\u770B\u6C34\u679C\u4EF7\u683C"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getprice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price\uFF1A"'),n("span",{class:"token punctuation"},","),t(" fruit"),n("span",{class:"token punctuation"},"."),t("price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// \u7ED9\u6C34\u679C\u8BBE\u7F6E\u4EF7\u683C"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"changePrice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
  fruit`),n("span",{class:"token punctuation"},"."),t("price "),n("span",{class:"token operator"},"="),t(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),t("event"),n("span",{class:"token punctuation"},"."),t("target"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// ================\u6838\u5FC3\u4EE3\u7801start===================="),t(`
`),n("span",{class:"token comment"},"// \u7ED9\u6C34\u679C\u627E\u4EE3\u7406\u5546"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setProxy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// \u7ED9\u6C34\u679C\u521B\u5EFA\u4E00\u4E2A\u4EE3\u7406 \u4EE3\u7406\u4E4B\u540E \u53EA\u8981\u662F\u8BF7\u6C42\u6C34\u679C\u91CC\u9762\u7684\u5C5E\u6027\u90FD\u5FC5\u987B\u7ECF\u8FC7\u4EE3\u7406 "),t(`
  fruit `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Proxy"),n("span",{class:"token punctuation"},"("),t("fruit"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("target"),n("span",{class:"token punctuation"},","),t(" key"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" result "),n("span",{class:"token operator"},"="),t(" target"),n("span",{class:"token punctuation"},"["),t("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token comment"},"// \u4EE3\u7406\u4E4B\u540E \u9700\u8981\u52A0\u4EF7\u683C \uFF08\u4E2D\u95F4\u5546\u561B \u80AF\u5B9A\u8D5A\u70B9\u5DEE\u4EF7\u5440\uFF09"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("key "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},'"price"'),n("span",{class:"token punctuation"},")"),t(" result"),n("span",{class:"token operator"},"+="),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" result"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),t("target"),n("span",{class:"token punctuation"},","),t(" key"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token comment"},"// \u7ED9\u4EF7\u683C\u9650\u5236\u8303\u56F4"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("key "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},'"price"'),t(),n("span",{class:"token operator"},"&&"),t("  value "),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"throw"),t(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u53EF\u4E0D\u80FD\u592A\u8D35\u4E86"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5DF2\u8BBE\u7F6E\u4EF7\u683C\u4E3A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" Reflect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),t("target"),n("span",{class:"token punctuation"},","),t(" key"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  isProxy`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
  proxyNum`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"++"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u4EE3\u7406\u6210\u529F"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// ================\u6838\u5FC3\u4EE3\u7801end===================="),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`
`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),H=n("h2",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},"\u53C2\u8003\u8D44\u6599",-1),K=n("p",null,[n("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},"proxy-MDN")],-1),L=n("p",null,[n("a",{href:"https://github.com/vuejs/core/tree/main/packages/reactivity",target:"_blank",rel:"noopener noreferrer"},"vue3-reactivity")],-1),Q=n("p",null,[n("a",{href:"https://zhuanlan.zhihu.com/p/148937064",target:"_blank",rel:"noopener noreferrer"},"Vue3 \u7684 Proxy \u80FD\u505A\u5230\u54EA\u4E9B\u7CBE\u786E\u7684\u62E6\u622A\u64CD\u4F5C\uFF1F\u539F\u7406\u63ED\u79D8")],-1);function X(F,e,d,p,l,o){const C=D("render-demo-0"),g=D("demo");return G(),O("div",null,[M,B(g,{sourceCode:`<template>
  <div>
    <xl-button type="info" @click="getfruit">\u83B7\u53D6{{isProxy?'\u4EE3\u7406\u540E\u7684':''}}\u6C34\u679C</xl-button>
    <xl-button type="info" @click="getprice">\u83B7\u53D6\u4EF7\u683Cprice</xl-button>
    <xl-button type="primary" @click="setProxy">\u70B9\u51FB\u7ED9\u6C34\u679C\u627E\u4EE3\u7406\u5546\uFF08{{proxyNum}}\uFF09</xl-button>
    <xl-button type="warning" @click="resetFruit">\u91CD\u7F6E\u6C34\u679C</xl-button>
    <span>\u63A7\u5236\u53F0\u67E5\u770B</span>
    <br>
    <div v-show="isProxy">\u8BBE\u7F6E\u6C34\u679C\u539F\u4EF7<input type="text" placeholder="\u7ED9\u897F\u74DC\u8BBE\u7F6E\u4EF7\u683C" :value="fruit.price" v-on:input="changePrice"></div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const isProxy = ref(false)
const proxyNum = ref(0)
let fruit = {
  name: "\u897F\u74DC",
  price: 15,
};
//\u91CD\u7F6E\u6C34\u679C
function resetFruit() {
  fruit = {
    name: "\u897F\u74DC",
    price: 15,
  };
  isProxy.value = false
  proxyNum.value = 0
  console.log("\u91CD\u7F6E\u6210\u529F");
}
// \u67E5\u770B\u5F53\u524D\u6C34\u679C\u5C5E\u6027\uFF08\u770B\u770B\u662F\u4E2D\u95F4\u5546\u7684 \u8FD8\u662F\u679C\u519C\u7684\uFF09
function getfruit() {
  console.log("fruit\uFF1A", fruit);
}
function getName() {
  console.log("name\uFF1A", fruit.name);
}
// \u67E5\u770B\u6C34\u679C\u4EF7\u683C
function getprice() {
  console.log("price\uFF1A", fruit.price);
}
// \u7ED9\u6C34\u679C\u8BBE\u7F6E\u4EF7\u683C
function changePrice(event){
  fruit.price = Number.parseInt(event.target.value)
}
// ================\u6838\u5FC3\u4EE3\u7801start====================
// \u7ED9\u6C34\u679C\u627E\u4EE3\u7406\u5546
function setProxy() {
  // \u7ED9\u6C34\u679C\u521B\u5EFA\u4E00\u4E2A\u4EE3\u7406 \u4EE3\u7406\u4E4B\u540E \u53EA\u8981\u662F\u8BF7\u6C42\u6C34\u679C\u91CC\u9762\u7684\u5C5E\u6027\u90FD\u5FC5\u987B\u7ECF\u8FC7\u4EE3\u7406 
  fruit = new Proxy(fruit, {
    get(target, key) {
      let result = target[key];
      // \u4EE3\u7406\u4E4B\u540E \u9700\u8981\u52A0\u4EF7\u683C \uFF08\u4E2D\u95F4\u5546\u561B \u80AF\u5B9A\u8D5A\u70B9\u5DEE\u4EF7\u5440\uFF09
      if (key === "price") result+=5;
      return result;
    },
    set(target, key, value) {
      // \u7ED9\u4EF7\u683C\u9650\u5236\u8303\u56F4
      if (key === "price" &&  value >100) {
        throw Error("\u53EF\u4E0D\u80FD\u592A\u8D35\u4E86");
      }
      console.log(\`\u5DF2\u8BBE\u7F6E\u4EF7\u683C\u4E3A\${value}\`);
      return Reflect.set(target, key, value);
    },
  });
  isProxy.value = true
  proxyNum.value++
  console.log("\u4EE3\u7406\u6210\u529F");
}
// ================\u6838\u5FC3\u4EE3\u7801end====================
<\/script>

<style lang="scss" scoped>
</style>

`},{description:f(()=>[W]),highlight:f(()=>[U]),default:f(()=>[B(C)]),_:1}),H,K,L,Q])}var tn=I(J,[["render",X]]);export{nn as __pageData,tn as default};
