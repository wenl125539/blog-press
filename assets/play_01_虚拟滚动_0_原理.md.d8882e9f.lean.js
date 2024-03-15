import{_ as R,c as z,a as w,w as C,e as P,b as n,r as V,o as U,V as L,d as s}from"./app.348d2e61.js";import{l as G}from"./chunks/lodash.4a69812e.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{renderList:D,Fragment:y,openBlock:m,createElementBlock:E,toDisplayString:A,normalizeStyle:g,createElementVNode:l,createTextVNode:i,resolveComponent:h,withCtx:k,createVNode:F}=L,_={class:"scroll-dmeo"},x={class:"btns"},H=i("+100"),q=i("+1000"),S=i("+10000"),N=i("+100000");function o(a,t){const c=h("el-button");return m(),E("div",null,[l("div",_,[l("div",{onScroll:t[0]||(t[0]=p=>a.wrapperScroll(p)),ref:"scrollRef",class:"scroll-box"},[l("div",{class:"wrapper-scroll",style:g([{height:a.containerHeight+"px"},{position:"relative"}])},[l("div",{style:g([{transform:`translateY(${a.scrollTopWrapper}px)`},{position:"absolute",width:"100%"}])},[(m(!0),E(y,null,D(a.showItem,(p,d)=>(m(),E("div",{key:d,class:"scroll-item",style:g({height:a.itemHeight+"px"})},A(p),5))),128))],4)],4)],544),l("div",x,[F(c,{onClick:t[1]||(t[1]=p=>a.getList(100)),type:"primary"},{default:k(()=>[H]),_:1}),F(c,{onClick:t[2]||(t[2]=p=>a.getList(1e3)),type:"success"},{default:k(()=>[q]),_:1}),F(c,{onClick:t[3]||(t[3]=p=>a.getList(1e4)),type:"warning"},{default:k(()=>[S]),_:1}),F(c,{onClick:t[4]||(t[4]=p=>a.getList(1e5)),type:"danger"},{default:k(()=>[N]),_:1}),l("p",null,A(a.allData.length),1)])])])}const{reactive:u,ref:e,nextTick:r,computed:$}=L;return{render:o,...{setup(a,{expose:t}){t();const c=e([]);function p(v){c.value=[];for(let b=0;b<v;b++)c.value.push(b+1)}const d=e(null),f=e(0),B=e(0),M=50;r(()=>{var v;f.value=(v=d==null?void 0:d.value)==null?void 0:v.clientHeight,console.log(`\u53EF\u89C6\u533A\u57DF\u5BB9\u5668\u9AD8\u5EA6\uFF1A${f.value}px`),B.value=Math.ceil(f.value/M),console.log(`\u89C6\u7A97\u5185\u5E94\u8BE5\u663E\u793A\u7684 DOM \u6570\u91CF\uFF1A${B.value}\u4E2A`)});let K=e(c.value.length*M),T=e(0),I=e(0);const j=G.throttle(v=>{let b=Math.floor(v.target.scrollTop/M);b!==T.value&&(T.value=b,I.value=v.target.scrollTop)},40),Y=$(()=>[...c.value.slice(T.value,B.value+T.value+3)]),W={allData:c,getList:p,scrollRef:d,scrollHeight:f,showItemNum:B,itemHeight:M,containerHeight:K,startKey:T,scrollTopWrapper:I,wrapperScroll:j,showItem:Y,reactive:u,ref:e,nextTick:r,computed:$};return Object.defineProperty(W,"__isScriptSetup",{enumerable:!1,value:!0}),W}}}}(),"render-demo-1":function(){const{renderList:D,Fragment:y,openBlock:m,createElementBlock:E,toDisplayString:A,normalizeStyle:g,createElementVNode:l,createTextVNode:i,resolveComponent:h,withCtx:k,createVNode:F}=L,_={class:"scroll-dmeo"},x={ref:"scrollRef",class:"scroll-box"},H={class:"btns"},q=i("+100"),S=i("+1000"),N=i("+1W(\u5C0F\u5361)"),o=i("+10W\uFF08\u4F1A\u5361\uFF09");function u(a,t){const c=h("el-button");return m(),E("div",null,[l("div",_,[l("div",x,[l("div",{class:"wrapper-scroll",style:g({height:a.containerHeight+"px"})},[(m(!0),E(y,null,D(a.allData,p=>(m(),E("div",{style:g({height:a.itemHeight+"px"}),key:p},A(p),5))),128))],4)],512),l("div",H,[F(c,{onClick:t[0]||(t[0]=p=>a.getList(100)),type:"primary"},{default:k(()=>[q]),_:1}),F(c,{onClick:t[1]||(t[1]=p=>a.getList(1e3)),type:"success"},{default:k(()=>[S]),_:1}),F(c,{onClick:t[2]||(t[2]=p=>a.getList(1e4)),type:"warning"},{default:k(()=>[N]),_:1}),F(c,{onClick:t[3]||(t[3]=p=>a.getList(1e5)),type:"danger"},{default:k(()=>[o]),_:1}),l("p",null,A(a.allData.length),1)])])])}const{reactive:e,ref:r,nextTick:$}=L;return{render:u,...{setup(a,{expose:t}){t();const c=r([]);function p(f){c.value=[];for(let B=0;B<f;B++)c.value.push(B+1)}const d={allData:c,getList:p,reactive:e,ref:r,nextTick:$};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}}}(),"render-demo-2":function(){const{createTextVNode:D,resolveComponent:y,withCtx:m,createVNode:E,renderList:A,Fragment:g,openBlock:l,createElementBlock:i,toDisplayString:h,normalizeStyle:k,createElementVNode:F}=L,_=D("20\u6761"),x=D("\u4E00\u767E\u6761"),H=D("\u4E00\u5343\u6761"),q=D("\u5341\u4E07\u6761");function S(o,u){const e=y("el-button");return l(),i("div",null,[F("div",null,[E(e,{type:"danger",onClick:u[0]||(u[0]=r=>o.virtualScrolling(20))},{default:m(()=>[_]),_:1}),E(e,{type:"primary",onClick:u[1]||(u[1]=r=>o.virtualScrolling(100))},{default:m(()=>[x]),_:1}),E(e,{type:"success",onClick:u[2]||(u[2]=r=>o.virtualScrolling(1e3))},{default:m(()=>[H]),_:1}),E(e,{onClick:u[3]||(u[3]=r=>o.virtualScrolling(1e5))},{default:m(()=>[q]),_:1}),F("div",{class:"wrap",onScroll:u[4]||(u[4]=(...r)=>o.liScroll&&o.liScroll(...r))},[F("ul",{class:"ul_wrap",style:k(`height:${o.ulHei}px`)},[(l(!0),i(g,null,A(o.liList,r=>(l(),i("li",{class:"li_item",style:k(`height:${o.liHei}px;transform:translateY(${o.ScroolNum}px)`),key:r},h(r),5))),128))],4)],32)])])}return{render:S,...{data(){return{liHei:50,ulHei:480,liList:[],scrollHei:0,ScroolNum:0,showList:0,tableData:[],lastTime:0}},mounted(){this.virtualScrolling(100)},methods:{liScroll(o){if(new Date().getTime()-this.lastTime>40){this.ele=o,this.scrollHei=o.target.scrollTop,this.ScroolNum=this.scrollHei-this.scrollHei%this.liHei;let u=this.ScroolNum/this.liHei;this.liList=this.tableData.slice(u,u+this.showList),this.lastTime=new Date().getTime()}},virtualScrolling(o){let u=[];for(let e=0;e<o;e++)u.push(e+1);this.tableData=u,this.showList=Math.floor(this.ulHei/this.liHei)+4,this.liList=this.tableData.slice(0,this.showList),this.lastTime=new Date().getTime(),this.ele&&(this.ele.target.scrollTop=0,this.ScroolNum=0)}}}}}()}},pn='{"title":"\u865A\u62DF\u6ED1\u52A8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u865A\u62DF\u6ED1\u52A8","slug":"\u865A\u62DF\u6ED1\u52A8"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"},{"level":3,"title":"\u6848\u4F8B\u4E8C","slug":"\u6848\u4F8B\u4E8C"},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E"}],"relativePath":"play/01_\u865A\u62DF\u6EDA\u52A8/0_\u539F\u7406.md","lastUpdated":1661354009000}',Q=P('<h2 id="\u865A\u62DF\u6ED1\u52A8" tabindex="-1">\u865A\u62DF\u6ED1\u52A8</h2><p><strong>\u4E00\u3001\u4E3A\u4EC0\u4E48\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8</strong></p><blockquote><ul><li>\u5F53\u6570\u636E\u91CF\u8FC7\u5927\u7684\u65F6\u5019\uFF0C\u65E0\u6CD5\u4E00\u6B21\u6027\u6E32\u67D3\u592A\u591A\u7684 DOM \u5143\u7D20</li><li>\u6BCF\u4E00\u6B21\u6EDA\u52A8\u4E8B\u4EF6\u5C06\u4F1A\u8BA9\u5BF9\u5E94 DOM \u4E2D\u7684\u6240\u6709\u5143\u7D20\u91CD\u65B0\u6E32\u67D3</li></ul></blockquote><p>\u522B\u8BA9\u6D4F\u89C8\u5668\u4E00\u6B21\u6027\u6E32\u67D3\u8FD9\u4E48\u591A\u5143\u7D20\uFF0C\u8FD9\u91CC\u901A\u5E38\u4F1A\u5BF9\u5E94\u4E09\u79CD\u505A\u6CD5\u6765\u51CF\u5C11\u5143\u7D20\u6E32\u67D3\u3002</p><ol><li>\u6570\u636E\u5206\u9875</li></ol><blockquote><ul><li>\u597D\u5904\u662F\u6BCF\u6B21\u53EA\u6E32\u67D3\u4E00\u90E8\u5206\uFF08\u6BD4\u5982 10 \u6761\uFF09\uFF0C\u4E0B\u4E00\u9875\u5728\u91CD\u65B0\u6E32\u67D3\u53E6\u4E00\u90E8\u5206</li><li>\u91C7\u7528sql\u5206\u9875\u7684\u505A\u6CD5\u6765\u5206\u5272\u6570\u636E,\u51CF\u5C11\u4E00\u6B21\u6027\u6E32\u67D3\u7684\u884C\u6570\uFF0C\u4F46\u4E00\u822C\u662F\u540E\u53F0PC\u7AEF\u7684\u5206\u9875\u663E\u793A\u65B9\u5F0F</li><li><p color="red">\u3010\u4E0D\u9002\u7528\u4E8E\u624B\u673A\u3011</p></li></ul></blockquote><ol start="2"><li>\u65E0\u9650\u6EDA\u52A8</li></ol><blockquote><ul><li>\u597D\u5904\u662F\u6BCF\u6B21\u53EA\u6E32\u67D3\u4E00\u90E8\u5206\uFF08\u6BD4\u5982 10 \u6761\uFF09\uFF0C\u7B49\u5269\u4F59\u90E8\u5206\u6EDA\u52A8\u5230\u53EF\u89C1\u533A\u57DF\uFF0C\u5C31\u518D\u6E32\u67D3\u53E6\u4E00\u90E8\u5206\u3002</li><li>\u540C\u6837\u91C7\u7528sql\u5206\u9875\u7684\u505A\u6CD5\u6765\u5206\u5272\u6570\u636E,\u5F53\u6EDA\u52A8\u6761\u62D6\u52A8\u63A5\u8FD1\u5E95\u90E8\uFF08\u6216\u53F3\u90E8\uFF09\u65F6\uFF0C\u518D\u53BB\u8FFD\u52A0\u4E0B\u4E00\u6279\u6240\u9700\u8981\u6E32\u67D3\u7684\u5143\u7D20\uFF0C\u6BCF\u6B21\u6EDA\u52A8\u8FFD\u52A0\u90FD\u4F1A\u89E6\u53D1<p color="red">\u56DE\u6D41</p>,\u5F53\u8FFD\u52A0\u5230\u4E00\u5B9A\u6570\u91CF\uFF0C\u89E6\u53CA\u6D4F\u89C8\u5668\u74F6\u9888\u65F6\uFF0C\u9057\u7559\u7684\u6570\u636E\u5C06\u4F1A\u8D8A\u6765\u8D8A\u591A\u5BFC\u81F4\u6027\u80FD\u96EA\u5D29\u3002</li><li>\u6211\u767E\u4E07\u8BA1\u6570\u91CF\u7684\u7CFB\u7EDF \u7ED9\u6211\u5341\u6761\u4E00\u9875\u7684\u5206\uFF0C\u8FD9\u4E0D\u5BF9\u5427</li></ul></blockquote><ol start="3"><li>\u865A\u62DF\u6ED1\u52A8</li></ol><blockquote><ul><li>\u8FD9\u4E2A\u65B9\u6CD5\u53EA\u6E32\u67D3\u53EF\u89C6\u8303\u56F4\u5185\u9700\u8981\u5C55\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u5C31\u662F\u56FE\u4E2D\u7684\u7EFF\u8272\u533A\u5757\uFF0C\u5728\u53EF\u89C6\u533A\u57DF\u4E4B\u5916\u7684\u5143\u7D20\u5747\u53EF\u4EE5\u4E0D\u505A\u6E32\u67D3\u3002</li><li>\u539F\u7406\u662F\u5728\u6EDA\u52A8\u6761\u6EDA\u52A8\u65F6\u52A8\u6001\u66F4\u65B0\u5217\u8868\u9879\uFF0C\u6240\u4EE5\u53EA\u4F1A\u6E32\u67D3\u51FA\u8BA1\u7B97\u51FA\u6765\u7684\u90A3\u90E8\u5206\u5185\u5BB9\uFF0C\u4EE5\u53CAtranslate\u4E0D\u4F1A\u89E6\u53D1\u56DE\u6D41\u6548\u679C\u3002</li><li><p color="red">[\u6CE8]\uFF1A\u5B9E\u9645\u4E0A\u8003\u8651\u9875\u9762\u6D41\u7545\u6027\uFF0C\u4E0D\u53EF\u80FD\u5B8C\u5168\u4E0D\u6E32\u67D3\u89C6\u533A\u4E4B\u5916\u7684\u5185\u5BB9\uFF0C\u5EFA\u8BAE\u662F\u9884\u75592-3\u5C4F\u3002</p></li></ul></blockquote><p>[\u672A\u5B8C\u6210]</p><h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B</h3><p>\u4F7F\u7528\u865A\u62DF\u6ED1\u52A8</p>',13),X=n("div",null,"\u4F7F\u7528\u865A\u62DF\u6ED1\u52A8",-1),Z=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scroll-dmeo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- \u6ED1\u52A8 \u53EF\u89C6\u533A\u57DF start -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"@scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wrapperScroll($event)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scrollRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scroll-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wrapper-scroll"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ height: containerHeight + 'px' }"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token punctuation"},">")]),s(`                 
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ transform: `translateY(${scrollTopWrapper}px)` }"),n("span",{class:"token punctuation"},'"')]),s("  "),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s("   "),n("span",{class:"token punctuation"},">")]),s(`
           `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s("  "),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(item, key) in showItem"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key"),n("span",{class:"token punctuation"},'"')]),s("  "),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scroll-item"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{height:itemHeight + 'px'}"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
              {{item}}
           `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`        
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`   
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- \u6ED1\u52A8 \u53EF\u89C6\u533A\u57DF end -->"),s(`
    
    `),n("span",{class:"token comment"},"<!-- \u6DFB\u52A0\u6570\u636E\u91CF\u6309\u94AE start -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btns"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getList(100)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("+100"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getList(1000)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("+1000"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getList(10000)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("+10000"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getList(100000)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("+100000"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("{{allData.length}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- \u6DFB\u52A0\u6570\u636E\u91CF\u6309\u94AE end -->"),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s("ref"),n("span",{class:"token punctuation"},","),s("nextTick"),n("span",{class:"token punctuation"},","),s("computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// ======================== \u603B\u6570\u636E\u91CF ========================"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" allData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//\u5168\u90E8\u6570\u636E\u7684\u96C6\u5408 (\u76F8\u5F53\u4E8E\u4E00\u6B21\u6027\u83B7\u53D6\u5230\u6240\u6709\u7684\u5217\u8868\u6570\u636E)"),s(`
  `),n("span",{class:"token comment"},"// \u83B7\u53D6\u6570\u636E\uFF08num\uFF09\u8868\u793A\u6570\u636E\u91CF"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    allData`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token comment"},"//\u521D\u59CB\u5316\u6570\u7EC4"),s(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s("i "),n("span",{class:"token operator"},"<"),s(" num"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      allData`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// ======================== \u53EF\u89C6\u5BB9\u5668\u8BA1\u7B97 ========================"),s(`

  `),n("span",{class:"token comment"},"// \u83B7\u53D6\u53EF\u89C6\u533A\u5BB9\u5668\u9AD8\u5EA6"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" scrollRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" scrollHeight "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//\u5BB9\u5668\u9AD8\u5EA6"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" showItemNum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// \u771F\u662F\u6E32\u67D3DOM\u6570\u91CF"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" itemHeight "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"50"),s("  "),n("span",{class:"token comment"},"// item\u9AD8\u5EA650px"),s(`
  `),n("span",{class:"token comment"},"// \u6E32\u67D3\u5B8C\u6210\u540E \u8BA1\u7B97\u5BB9\u5668\u9AD8\u5EA6 \u4EE5\u53CA\u9700\u8981\u6E32\u67D3\u7684DOM\u6570\u91CF"),s(`
  `),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`  
    scrollHeight`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" scrollRef"),n("span",{class:"token operator"},"?."),s("value"),n("span",{class:"token operator"},"?."),s("clientHeight"),n("span",{class:"token punctuation"},";"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u53EF\u89C6\u533A\u57DF\u5BB9\u5668\u9AD8\u5EA6\uFF1A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("scrollHeight"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    showItemNum`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ceil"),n("span",{class:"token punctuation"},"("),s("scrollHeight"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"/"),s(" itemHeight"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u771F\u5B9EDOM\u6570 = Math.ceil(\u5BB9\u5668\u9AD8\u5EA6 / item\u9AD8\u5EA6)"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u89C6\u7A97\u5185\u5E94\u8BE5\u663E\u793A\u7684 DOM \u6570\u91CF\uFF1A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("showItemNum"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\u4E2A"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"//\u771F\u5B9E\u5BB9\u5668\u9AD8\u5EA6 = item\u603B\u6570 * \u6BCF\u6761item\u7684\u9AD8\u5EA6"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" containerHeight "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("allData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"*"),s(" itemHeight"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// ======================== \u6E32\u67D3\u8BA1\u7B97  ========================"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" startKey "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u5F53\u524D\u72B6\u6001\u7684\u7D22\u5F15"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" scrollTopWrapper "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u7247\u6BB5\u5BB9\u5668\u504F\u79FB\u91CF"),s(`

  `),n("span",{class:"token comment"},"// \u6EDA\u52A8\u76D1\u542C \u4F7F\u7528\u9632\u6296 \u9632\u6B62\u6EDA\u52A8\u4E8B\u4EF6\u9AD8\u9891\u89E6\u53D1\u6D88\u8017\u5185\u5B58\u8D44\u6E90 "),s(`
  `),n("span",{class:"token keyword"},"const"),s("  wrapperScroll "),n("span",{class:"token operator"},"="),s(" lodash"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"throttle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//\u8BA1\u7B97\u5F53\u524D\u72B6\u6001\u7684\u7D22\u5F15  \u5F53\u524D\u72B6\u6001\u7684\u7D22\u5F15 = Math.floor(\u5F53\u524D\u6EDA\u52A8\u9AD8\u5EA6 / \u6BCF\u6761item\u7684\u9AD8\u5EA6);"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" tempNum "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("scrollTop "),n("span",{class:"token operator"},"/"),s(" itemHeight"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
    `),n("span",{class:"token comment"},"//\u5F53\u524D\u72B6\u6001\u7684\u7D22\u5F15\u53D1\u751F\u53D8\u5316\u624D\u89E6\u53D1\u89C6\u56FE\u5C42\u5237\u65B0"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tempNum "),n("span",{class:"token operator"},"!=="),s(" startKey"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`    
      startKey`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` tempNum    
      scrollTopWrapper`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("scrollTop"),n("span",{class:"token punctuation"},";"),s(`  
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// \u8BA1\u7B97\u9700\u8981\u6E32\u67D3item\u7684\u6570\u91CF  \u5BF9\u6570\u636E\u8FDB\u884C\u5207\u7247\u5904\u7406\u65B9\u6CD5"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" showItem "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(` 
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("allData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),s("startKey"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},","),s(" showItemNum"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"+"),s(" startKey"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token comment"},"/* \u6700\u5916\u8FB9\u6846 \u4E0E\u4E1A\u52A1\u65E0\u5173 */"),s(`
`),n("span",{class:"token selector"},".scroll-dmeo"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 600px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #6e6e6e"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" space-between"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"/* \u6DFB\u52A0\u6570\u636E\u6309\u94AE \u4E3B\u4E1A\u52A1\u65E0\u5173*/"),s(`
`),n("span",{class:"token selector"},".btns"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 250px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid skyblue"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" space-around"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),s(" column"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* \u6EDA\u52A8\u53EF\u89C6\u533A\u57DF  \u9700\u8981\u83B7\u53D6\u53EF\u89C6\u533A\u57DF*/"),s(`
`),n("span",{class:"token selector"},".scroll-box"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 502px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #6f6f66"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),s(" hidden scroll"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".scroll-item"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),nn=n("p",{color:"red"},"\u6CA1\u4F7F\u7528\u865A\u62DF\u6ED1\u52A8",-1),sn=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scroll-dmeo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- \u6ED1\u52A8 \u53EF\u89C6\u533A\u57DF start -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scrollRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scroll-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wrapper-scroll"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ height: containerHeight + 'px' }"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},">")]),s(`                 
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{height:itemHeight + 'px'}"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item in allData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{item}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`        
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- \u6ED1\u52A8 \u53EF\u89C6\u533A\u57DF end -->"),s(`
    
    `),n("span",{class:"token comment"},"<!-- \u6DFB\u52A0\u6570\u636E\u91CF\u6309\u94AE start -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btns"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getList(100)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("+100"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getList(1000)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("+1000"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getList(10000)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("+1W(\u5C0F\u5361)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getList(100000)"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("+10W\uFF08\u4F1A\u5361\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("{{allData.length}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- \u6DFB\u52A0\u6570\u636E\u91CF\u6309\u94AE end -->"),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s("ref"),n("span",{class:"token punctuation"},","),s("nextTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// ============ \u603B\u6570\u636E\u91CF"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" allData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//\u5168\u90E8\u6570\u636E\u7684\u96C6\u5408 (\u76F8\u5F53\u4E8E\u4E00\u6B21\u6027\u83B7\u53D6\u5230\u6240\u6709\u7684\u5217\u8868\u6570\u636E)"),s(`
  `),n("span",{class:"token comment"},"// \u83B7\u53D6\u6570\u636E\uFF08num\uFF09\u8868\u793A\u6570\u636E\u91CF"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    allData`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token comment"},"//\u521D\u59CB\u5316\u6570\u7EC4"),s(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s("i "),n("span",{class:"token operator"},"<"),s(" num"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      allData`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),tn=n("h3",{id:"\u6848\u4F8B\u4E8C",tabindex:"-1"},"\u6848\u4F8B\u4E8C",-1),an=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("virtualScrolling(20)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("20\u6761"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("virtualScrolling(100)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4E00\u767E\u6761"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("virtualScrolling(1000)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4E00\u5343\u6761"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("virtualScrolling(100000)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5341\u4E07\u6761"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wrap"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("liScroll"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ul_wrap"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("`height:${ulHei}px`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("li_item"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("`height:${liHei}px;transform:translateY(${ScroolNum}px)`"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item in liList"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                {{item}}
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"liHei"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"//li\u7684\u9AD8\u5EA6"),s(`
        `),n("span",{class:"token literal-property property"},"ulHei"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"//ul\u7684\u9AD8\u5EA6"),s(`
        `),n("span",{class:"token literal-property property"},"liList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"//\u771F\u5B9E\u5C55\u793A\u7684\u5217\u8868"),s(`
        `),n("span",{class:"token literal-property property"},"scrollHei"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"//@scroll\u4E8B\u4EF6\u6EDA\u52A8\u7684top\u503C"),s(`
        `),n("span",{class:"token literal-property property"},"ScroolNum"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"//scrollHei\u80FD\u88ABli\u9AD8\u5EA6\u53D6\u4F59\u6570\u7684\u6574\u6570\u503C\u3002ScroolNum=scrollHei-(scrollHei%liHei)"),s(`
        `),n("span",{class:"token literal-property property"},"showList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"//\u771F\u5B9E\u5C55\u793A\u7684\u6761\u6570"),s(`
        `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"//\u5168\u90E8\u6570\u636E\u7684\u96C6\u5408"),s(`
        `),n("span",{class:"token literal-property property"},"lastTime"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"//\u6700\u540E\u65F6\u95F4"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"mounted"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"virtualScrolling"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"/**\u6EDA\u52A8\u76D1\u542C */"),s(`
       `),n("span",{class:"token function"},"liScroll"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
           `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("lastTime"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"//\u8BBE\u7F6E\u65F6\u95F4\u95F4\u9694\uFF0C\u9632\u6B62\u6EDA\u52A8\u4E8B\u4EF6\u9AD8\u9891\u89E6\u53D1\u6D88\u8017\u5185\u5B58\u8D44\u6E90"),s(`
           `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ele "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u4FDD\u5B58\u5143\u7D20\uFF0C\u65B9\u4FBF\u91CD\u7F6EscrollTop\u503C"),s(`
           `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("scrollHei "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("scrollTop"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u4FDD\u5B58\u6EDA\u52A8\u6761scrollTop\u503C"),s(`
           `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ScroolNum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("scrollHei "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("scrollHei "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("liHei"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u83B7\u53D6\u5DF2\u6EDA\u52A8\u5230\u9875\u9762\u4E0A\u65B9\u4E0D\u53EF\u89C1\u7684li\u5143\u7D20\u7684\u603B\u9AD8\u5EA6\uFF08translateY\u7684\u504F\u79FB\u9AD8\u5EA6\uFF09"),s(`
           `),n("span",{class:"token keyword"},"let"),s(" len "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ScroolNum "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("liHei"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u8BA1\u7B97\u5DF2\u7ECF\u6709\u591A\u5C11\u4E2Ali\u6EDA\u52A8\u5230\u9875\u9762\u4E0A\u65B9\uFF08\u89C6\u56FE\u4E0A\u65B9\u7528\u6237\u4E0D\u53EF\u89C1\u7684\u6570\u91CF\uFF09"),s(`
           `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("liList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tableData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),s("len"),n("span",{class:"token punctuation"},","),s(" len "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u6BCF\u6B21\u6EDA\u52A8\u4E8B\u4EF6\u540E\u91CD\u65B0\u8BA1\u7B97\u5C55\u793A\u5185\u5BB9\uFF08\u622A\u53D6\u7684\u5185\u5BB9\u5BF9\u5E94\u5168\u90E8\u6570\u636E\u96C6\u7684\u90E8\u5206\u5185\u5BB9\uFF09"),s(`
           `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("lastTime"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u8BB0\u5F55\u6700\u540E\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4"),s(`
           `),n("span",{class:"token punctuation"},"}"),s(`
           
       `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"/**\u521D\u59CB\u5316\u6570\u636E*/"),s(`
       `),n("span",{class:"token function"},"virtualScrolling"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
           `),n("span",{class:"token keyword"},"let"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u521D\u59CB\u5316\u6570\u7EC4"),s(`
           `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" num"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"//\u8BA1\u7B97\u7ED9\u5B9A\u6570\u636E\u91CF"),s(`
               arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
           `),n("span",{class:"token punctuation"},"}"),s(`
           `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tableData "),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u5168\u90E8\u6570\u636E\u96C6"),s(`
           `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showList "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ulHei "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("liHei"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u8BA1\u7B97\u771F\u5B9E\u6E32\u67D3\u7684\u5217\u8868\u6570\u91CF"),s(`
           `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("liList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tableData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u521D\u59CB\u5316\u53EF\u89C6\u5217\u8868\u7684\u5185\u5BB9"),s(`
           `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("lastTime"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u8BB0\u5F55\u6700\u540E\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4"),s(`
           `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ele"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"//\u5224\u65AD\u76D1\u542C\u5143\u7D20\u662F\u5426\u4FDD\u5B58\u5230ele\u5B57\u6BB5\u4E2D"),s(`
               `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ele"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("scrollTop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u5982\u679C\u5143\u7D20\u5B58\u5728ele\u4E2D\u5219\u5C06scrollTop\u521D\u59CB\u5316\u4E3A0;"),s(`
               `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ScroolNum"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//\u521D\u59CB\u5316translateY\u7684\u504F\u79FB\u9AD8\u5EA6"),s(`
           `),n("span",{class:"token punctuation"},"}"),s(`
       `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wrap"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #fff"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),s(" scroll"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".li_item"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px red solid"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),un=n("h2",{id:"\u53C2\u8003\u6587\u732E",tabindex:"-1"},"\u53C2\u8003\u6587\u732E",-1),on=n("ul",null,[n("li",null,[n("a",{href:"https://blog.csdn.net/qq_45165744/article/details/124784740",target:"_blank",rel:"noopener noreferrer"},"\u865A\u62DF\u6EDA\u52A8\u6280\u672F")]),n("li",null,[n("a",{href:"https://blog.csdn.net/qq_22146915/article/details/123622524?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-123622524-blog-124320412.t5_layer_eslanding_sa_randoms&spm=1001.2101.3001.4242.1&utm_relevant_index=3",target:"_blank",rel:"noopener noreferrer"},"\u6DF1\u5165\u89E3\u6790vue3\u5B9E\u73B0\u865A\u62DF\u6EDA\u52A8")])],-1);function en(D,y,m,E,A,g){const l=V("render-demo-0"),i=V("demo"),h=V("render-demo-1"),k=V("render-demo-2");return U(),z("div",null,[Q,w(i,{sourceCode:`<template>
  <div class="scroll-dmeo">
    <!-- \u6ED1\u52A8 \u53EF\u89C6\u533A\u57DF start -->
    <div @scroll="wrapperScroll($event)" ref="scrollRef" class="scroll-box">
      <div class="wrapper-scroll" :style="{ height: containerHeight + 'px' }" style="position: relative;" >                 
        <div :style="{ transform: \`translateY(\${scrollTopWrapper}px)\` }"  style="position: absolute; width: 100%;"   >
           <div  v-for="(item, key) in showItem" :key="key"  class="scroll-item" :style="{height:itemHeight + 'px'}">
              {{item}}
           </div>        
        </div>   
      </div>
    </div>
    <!-- \u6ED1\u52A8 \u53EF\u89C6\u533A\u57DF end -->
    
    <!-- \u6DFB\u52A0\u6570\u636E\u91CF\u6309\u94AE start -->
    <div class="btns">
        <el-button @click="getList(100)" type="primary">+100</el-button>
        <el-button @click="getList(1000)" type="success">+1000</el-button>
        <el-button @click="getList(10000)" type="warning">+10000</el-button>
        <el-button @click="getList(100000)" type="danger">+100000</el-button>
        <p>{{allData.length}}</p>
    </div>
    <!-- \u6DFB\u52A0\u6570\u636E\u91CF\u6309\u94AE end -->
  </div>
</template>

<script setup>
  import { reactive,ref,nextTick,computed } from 'vue';

  // ======================== \u603B\u6570\u636E\u91CF ========================

  const allData = ref([]) //\u5168\u90E8\u6570\u636E\u7684\u96C6\u5408 (\u76F8\u5F53\u4E8E\u4E00\u6B21\u6027\u83B7\u53D6\u5230\u6240\u6709\u7684\u5217\u8868\u6570\u636E)
  // \u83B7\u53D6\u6570\u636E\uFF08num\uFF09\u8868\u793A\u6570\u636E\u91CF
  function getList(num){
    allData.value = [] //\u521D\u59CB\u5316\u6570\u7EC4
    for(let i = 0;i < num; i++){
      allData.value.push(i+1)
    }
  }

  // ======================== \u53EF\u89C6\u5BB9\u5668\u8BA1\u7B97 ========================

  // \u83B7\u53D6\u53EF\u89C6\u533A\u5BB9\u5668\u9AD8\u5EA6
  const scrollRef = ref(null)
  const scrollHeight = ref(0) //\u5BB9\u5668\u9AD8\u5EA6
  const showItemNum = ref(0) // \u771F\u662F\u6E32\u67D3DOM\u6570\u91CF
  const itemHeight = 50  // item\u9AD8\u5EA650px
  // \u6E32\u67D3\u5B8C\u6210\u540E \u8BA1\u7B97\u5BB9\u5668\u9AD8\u5EA6 \u4EE5\u53CA\u9700\u8981\u6E32\u67D3\u7684DOM\u6570\u91CF
  nextTick(() => {  
    scrollHeight.value = scrollRef?.value?.clientHeight;
    console.log(\`\u53EF\u89C6\u533A\u57DF\u5BB9\u5668\u9AD8\u5EA6\uFF1A\${scrollHeight.value}px\`);
    showItemNum.value = Math.ceil(scrollHeight.value / itemHeight);//\u771F\u5B9EDOM\u6570 = Math.ceil(\u5BB9\u5668\u9AD8\u5EA6 / item\u9AD8\u5EA6)
    console.log(\`\u89C6\u7A97\u5185\u5E94\u8BE5\u663E\u793A\u7684 DOM \u6570\u91CF\uFF1A\${showItemNum.value}\u4E2A\`);
  });
  //\u771F\u5B9E\u5BB9\u5668\u9AD8\u5EA6 = item\u603B\u6570 * \u6BCF\u6761item\u7684\u9AD8\u5EA6
  let containerHeight = ref(allData.value.length * itemHeight)

  // ======================== \u6E32\u67D3\u8BA1\u7B97  ========================

  let startKey = ref(0); //\u5F53\u524D\u72B6\u6001\u7684\u7D22\u5F15
  let scrollTopWrapper = ref(0); //\u7247\u6BB5\u5BB9\u5668\u504F\u79FB\u91CF

  // \u6EDA\u52A8\u76D1\u542C \u4F7F\u7528\u9632\u6296 \u9632\u6B62\u6EDA\u52A8\u4E8B\u4EF6\u9AD8\u9891\u89E6\u53D1\u6D88\u8017\u5185\u5B58\u8D44\u6E90 
  const  wrapperScroll = lodash.throttle((e) =>{
    //\u8BA1\u7B97\u5F53\u524D\u72B6\u6001\u7684\u7D22\u5F15  \u5F53\u524D\u72B6\u6001\u7684\u7D22\u5F15 = Math.floor(\u5F53\u524D\u6EDA\u52A8\u9AD8\u5EA6 / \u6BCF\u6761item\u7684\u9AD8\u5EA6);
    let tempNum = Math.floor(e.target.scrollTop / itemHeight); 
    //\u5F53\u524D\u72B6\u6001\u7684\u7D22\u5F15\u53D1\u751F\u53D8\u5316\u624D\u89E6\u53D1\u89C6\u56FE\u5C42\u5237\u65B0
    if (tempNum !== startKey.value) {    
      startKey.value = tempNum    
      scrollTopWrapper.value = e.target.scrollTop;  
    }
  },40)

  // \u8BA1\u7B97\u9700\u8981\u6E32\u67D3item\u7684\u6570\u91CF  \u5BF9\u6570\u636E\u8FDB\u884C\u5207\u7247\u5904\u7406\u65B9\u6CD5
  const showItem = computed(() => { 
    return [...allData.value.slice(startKey.value, showItemNum.value + startKey.value + 3)];
  });
<\/script>

<style scoped>
/* \u6700\u5916\u8FB9\u6846 \u4E0E\u4E1A\u52A1\u65E0\u5173 */
.scroll-dmeo{
  width: 100%;
  height: 600px;
  border: 1px solid #6e6e6e;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* \u6DFB\u52A0\u6570\u636E\u6309\u94AE \u4E3B\u4E1A\u52A1\u65E0\u5173*/
.btns{
  height: 400px;
  width: 250px;
  border: 2px solid skyblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

/* \u6EDA\u52A8\u53EF\u89C6\u533A\u57DF  \u9700\u8981\u83B7\u53D6\u53EF\u89C6\u533A\u57DF*/
.scroll-box{
  width: 300px;
  height: 502px;
  border: 1px solid #6f6f66;
  overflow: hidden scroll;

}

.scroll-item{
  display: flex;
  align-items: center;
  border: 1px solid red;
}
</style>
`},{description:C(()=>[X]),highlight:C(()=>[Z]),default:C(()=>[w(l)]),_:1}),nn,w(i,{sourceCode:`<template>
  <div class="scroll-dmeo">
    <!-- \u6ED1\u52A8 \u53EF\u89C6\u533A\u57DF start -->
    <div ref="scrollRef" class="scroll-box">
      <div class="wrapper-scroll" :style="{ height: containerHeight + 'px' }" >                 
          <div :style="{height:itemHeight + 'px'}" v-for="item in allData" :key="item">{{item}}</div>        
      </div>
    </div>
    <!-- \u6ED1\u52A8 \u53EF\u89C6\u533A\u57DF end -->
    
    <!-- \u6DFB\u52A0\u6570\u636E\u91CF\u6309\u94AE start -->
    <div class="btns">
        <el-button @click="getList(100)" type="primary">+100</el-button>
        <el-button @click="getList(1000)" type="success">+1000</el-button>
        <el-button @click="getList(10000)" type="warning">+1W(\u5C0F\u5361)</el-button>
        <el-button @click="getList(100000)" type="danger">+10W\uFF08\u4F1A\u5361\uFF09</el-button>
        <p>{{allData.length}}</p>
    </div>
    <!-- \u6DFB\u52A0\u6570\u636E\u91CF\u6309\u94AE end -->
  </div>
</template>

<script setup>
  import { reactive,ref,nextTick } from 'vue';
  // ============ \u603B\u6570\u636E\u91CF
  const allData = ref([]) //\u5168\u90E8\u6570\u636E\u7684\u96C6\u5408 (\u76F8\u5F53\u4E8E\u4E00\u6B21\u6027\u83B7\u53D6\u5230\u6240\u6709\u7684\u5217\u8868\u6570\u636E)
  // \u83B7\u53D6\u6570\u636E\uFF08num\uFF09\u8868\u793A\u6570\u636E\u91CF
  function getList(num){
    allData.value = [] //\u521D\u59CB\u5316\u6570\u7EC4
    for(let i = 0;i < num; i++){
      allData.value.push(i+1)
    }
  }

<\/script>
`},{highlight:C(()=>[sn]),default:C(()=>[w(h)]),_:1}),tn,w(i,{sourceCode:`<template>
  <div>
    <el-button type="danger" @click="virtualScrolling(20)">20\u6761</el-button>
    <el-button type="primary" @click="virtualScrolling(100)">\u4E00\u767E\u6761</el-button>
    <el-button type="success" @click="virtualScrolling(1000)">\u4E00\u5343\u6761</el-button>
    <el-button @click="virtualScrolling(100000)">\u5341\u4E07\u6761</el-button>
    <div class="wrap" @scroll="liScroll">
        <ul class="ul_wrap" :style="\`height:\${ulHei}px\`">
            <li class="li_item" :style="\`height:\${liHei}px;transform:translateY(\${ScroolNum}px)\`"
                v-for="item in liList" :key="item">
                {{item}}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default{
    data(){
      return {
        liHei: 50,//li\u7684\u9AD8\u5EA6
        ulHei: 480,//ul\u7684\u9AD8\u5EA6
        liList: [],//\u771F\u5B9E\u5C55\u793A\u7684\u5217\u8868
        scrollHei:0,//@scroll\u4E8B\u4EF6\u6EDA\u52A8\u7684top\u503C
        ScroolNum: 0,//scrollHei\u80FD\u88ABli\u9AD8\u5EA6\u53D6\u4F59\u6570\u7684\u6574\u6570\u503C\u3002ScroolNum=scrollHei-(scrollHei%liHei)
        showList: 0,//\u771F\u5B9E\u5C55\u793A\u7684\u6761\u6570
        tableData: [],//\u5168\u90E8\u6570\u636E\u7684\u96C6\u5408
        lastTime:0,//\u6700\u540E\u65F6\u95F4
      }
    },
    mounted () {
      this.virtualScrolling(100)
    },
    methods:{
      /**\u6EDA\u52A8\u76D1\u542C */
       liScroll (e) {
           if(new Date().getTime()-this.lastTime>40){//\u8BBE\u7F6E\u65F6\u95F4\u95F4\u9694\uFF0C\u9632\u6B62\u6EDA\u52A8\u4E8B\u4EF6\u9AD8\u9891\u89E6\u53D1\u6D88\u8017\u5185\u5B58\u8D44\u6E90
           this.ele = e;//\u4FDD\u5B58\u5143\u7D20\uFF0C\u65B9\u4FBF\u91CD\u7F6EscrollTop\u503C
           this.scrollHei = e.target.scrollTop;//\u4FDD\u5B58\u6EDA\u52A8\u6761scrollTop\u503C
           this.ScroolNum = this.scrollHei - (this.scrollHei % this.liHei);//\u83B7\u53D6\u5DF2\u6EDA\u52A8\u5230\u9875\u9762\u4E0A\u65B9\u4E0D\u53EF\u89C1\u7684li\u5143\u7D20\u7684\u603B\u9AD8\u5EA6\uFF08translateY\u7684\u504F\u79FB\u9AD8\u5EA6\uFF09
           let len = this.ScroolNum / this.liHei;//\u8BA1\u7B97\u5DF2\u7ECF\u6709\u591A\u5C11\u4E2Ali\u6EDA\u52A8\u5230\u9875\u9762\u4E0A\u65B9\uFF08\u89C6\u56FE\u4E0A\u65B9\u7528\u6237\u4E0D\u53EF\u89C1\u7684\u6570\u91CF\uFF09
           this.liList = this.tableData.slice(len, len + this.showList);//\u6BCF\u6B21\u6EDA\u52A8\u4E8B\u4EF6\u540E\u91CD\u65B0\u8BA1\u7B97\u5C55\u793A\u5185\u5BB9\uFF08\u622A\u53D6\u7684\u5185\u5BB9\u5BF9\u5E94\u5168\u90E8\u6570\u636E\u96C6\u7684\u90E8\u5206\u5185\u5BB9\uFF09
           this.lastTime=new Date().getTime();//\u8BB0\u5F55\u6700\u540E\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4
           }
           
       },
      /**\u521D\u59CB\u5316\u6570\u636E*/
       virtualScrolling (num) {
           let arr = [];//\u521D\u59CB\u5316\u6570\u7EC4
           for (let i = 0; i < num; i++) {//\u8BA1\u7B97\u7ED9\u5B9A\u6570\u636E\u91CF
               arr.push(i+1)
           }
           this.tableData = arr;//\u5168\u90E8\u6570\u636E\u96C6
           this.showList = Math.floor(this.ulHei / this.liHei) + 4;//\u8BA1\u7B97\u771F\u5B9E\u6E32\u67D3\u7684\u5217\u8868\u6570\u91CF
           this.liList = this.tableData.slice(0, this.showList);//\u521D\u59CB\u5316\u53EF\u89C6\u5217\u8868\u7684\u5185\u5BB9
           this.lastTime=new Date().getTime();//\u8BB0\u5F55\u6700\u540E\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4
           if (!!this.ele) {//\u5224\u65AD\u76D1\u542C\u5143\u7D20\u662F\u5426\u4FDD\u5B58\u5230ele\u5B57\u6BB5\u4E2D
               this.ele.target.scrollTop = 0;//\u5982\u679C\u5143\u7D20\u5B58\u5728ele\u4E2D\u5219\u5C06scrollTop\u521D\u59CB\u5316\u4E3A0;
               this.ScroolNum=0;//\u521D\u59CB\u5316translateY\u7684\u504F\u79FB\u9AD8\u5EA6
           }
       }
    }    
}
<\/script>

<style scoped>
.wrap {
    height: 400px;
    background-color: #fff;
    overflow: scroll;
    margin-top: 20px;
}

.li_item {
    border: 1px red solid;
    line-height: 50px;

}
</style>
`},{highlight:C(()=>[an]),default:C(()=>[w(k)]),_:1}),un,on])}var kn=R(J,[["render",en]]);export{pn as __pageData,kn as default};
