import{_ as I,c as O,a as j,w as D,e as R,r as T,o as U,V as q,b as n,d as s}from"./app.f182fb68.js";const W={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:e,createTextVNode:k,resolveComponent:c,withCtx:t,createVNode:F,createElementVNode:m,vShow:g,withDirectives:C,openBlock:A,createElementBlock:f}=q,y=k("\u83B7\u53D6\u4EF7\u683Cprice"),N=k("\u91CD\u7F6E\u6C34\u679C"),B=m("span",null,"\u63A7\u5236\u53F0\u67E5\u770B",-1),h=m("br",null,null,-1),p=k("\u8BBE\u7F6E\u6C34\u679C\u539F\u4EF7"),v=["value"];function w(r,a){const o=c("xl-button");return A(),f("div",null,[m("div",null,[F(o,{type:"info",onClick:r.getfruit},{default:t(()=>[k("\u83B7\u53D6"+e(r.isProxy?"\u4EE3\u7406\u540E\u7684":"")+"\u6C34\u679C",1)]),_:1},8,["onClick"]),F(o,{type:"info",onClick:r.getprice},{default:t(()=>[y]),_:1},8,["onClick"]),F(o,{type:"primary",onClick:r.setProxy},{default:t(()=>[k("\u70B9\u51FB\u7ED9\u6C34\u679C\u627E\u4EE3\u7406\u5546\uFF08"+e(r.proxyNum)+"\uFF09",1)]),_:1},8,["onClick"]),F(o,{type:"warning",onClick:r.resetFruit},{default:t(()=>[N]),_:1},8,["onClick"]),B,h,C(m("div",null,[p,m("input",{type:"text",placeholder:"\u7ED9\u897F\u74DC\u8BBE\u7F6E\u4EF7\u683C",value:r.fruit.price,onInput:a[0]||(a[0]=(...d)=>r.changePrice&&r.changePrice(...d))},null,40,v)],512),[[g,r.isProxy]])])])}const{ref:b}=q;return{render:w,...{setup(r,{expose:a}){a();const o=b(!1),d=b(0);let E={name:"\u897F\u74DC",price:15};function _(){E={name:"\u897F\u74DC",price:15},o.value=!1,d.value=0,console.log("\u91CD\u7F6E\u6210\u529F")}function S(){console.log("fruit\uFF1A",E)}function x(){console.log("name\uFF1A",E.name)}function z(){console.log("price\uFF1A",E.price)}function L(M){E.price=Number.parseInt(M.target.value)}function $(){E=new Proxy(E,{get(M,P){let u=M[P];return P==="price"&&(u+=5),u},set(M,P,u){if(P==="price"&&u>100)throw Error("\u53EF\u4E0D\u80FD\u592A\u8D35\u4E86");return console.log(`\u5DF2\u8BBE\u7F6E\u4EF7\u683C\u4E3A${u}`),Reflect.set(M,P,u)}}),o.value=!0,d.value++,console.log("\u4EE3\u7406\u6210\u529F")}const V={isProxy:o,proxyNum:d,fruit:E,resetFruit:_,getfruit:S,getName:x,getprice:z,changePrice:L,setProxy:$,ref:b};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}}}}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:k,withCtx:c,createVNode:t,createElementVNode:F,openBlock:m,createElementBlock:g}=q,C=e("\u62C9\u51FA\u6765\u905B\u905B"),A=F("hr",null,null,-1),f=F("span",null,"\u5B66\u7C4D\uFF1A",-1),y=e("\u5C0F\u5B66\u751F"),N=e("\u5927\u5B66\u751F"),B={style:{margin:"10px 0"}},h=e("Promise\u6821\u9A8C"),p=e("await\u6821\u9A8C"),v=e("\u975EPromise");function w(a,o){const d=k("xl-button"),E=k("el-input"),_=k("el-radio"),S=k("el-radio-group");return m(),g("div",null,[F("div",null,[t(d,{onClick:a.showPromise,type:"primary"},{default:c(()=>[C]),_:1},8,["onClick"]),A,F("div",null,[t(E,{style:{width:"120px",margin:"0 10px 0 0"},modelValue:a.num,"onUpdate:modelValue":o[0]||(o[0]=x=>a.num=x),placeholder:"\u8F93\u5165\u4F60\u7684\u5E74\u9F84"},null,8,["modelValue"]),f,t(S,{modelValue:a.stu,"onUpdate:modelValue":o[1]||(o[1]=x=>a.stu=x),class:"ml-4"},{default:c(()=>[t(_,{label:0,size:"large"},{default:c(()=>[y]),_:1}),t(_,{label:1,size:"large"},{default:c(()=>[N]),_:1})]),_:1},8,["modelValue"])]),F("div",B,[t(d,{onClick:a.newPromise,type:"primary"},{default:c(()=>[h]),_:1},8,["onClick"]),t(d,{onClick:a.newAwait,type:"primary"},{default:c(()=>[p]),_:1},8,["onClick"]),t(d,{onClick:a.noPromise,type:"primary"},{default:c(()=>[v]),_:1},8,["onClick"])])])])}const{reactive:b,ref:l}=q;return{render:w,...{setup(a,{expose:o}){o();function d(){console.dir(Promise),console.log("\u53EF\u4EE5\u770B\u5230Promise\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u81EA\u5DF1\u8EAB\u4E0A\u6709all\u3001reject\u3001resolve\u8FD9\u51E0\u4E2A\u773C\u719F\u7684\u65B9\u6CD5\uFF0C\u539F\u578B\uFF08prototype\uFF09\u4E0A\u6709then\u3001catch\u7B49\u540C\u6837\u5F88\u773C\u719F\u7684\u65B9\u6CD5\u3002")}const E=l(),_=l(0);function S(){return new Promise((u,i)=>{setTimeout(()=>{console.log("\u5E74\u9F84\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86"),E.value>18?u(`\u4F60\u5DF2\u7ECF\u6210\u5E74\u4E86:${E.value}`):i("18\u5C81\u4EE5\u4E0B\u7981\u6B62\u8BBF\u95EE\u5462")},1500)})}function x(u){return new Promise((i,J)=>{setTimeout(()=>{console.log("\u5B66\u7C4D\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86"),u===1?i("\u5927\u5B66\u751F\u53EF\u4EE5\u8BBF\u95EE"):J("\u5C0F\u5B66\u751F\u7981\u6B62\u8BBF\u95EE")},1e3)})}function z(){S().then(u=>{console.log(u),x().then(i=>{console.log(i)}).catch(i=>{console.log(i),console.log("==============")})}).catch(u=>{console.log(u),console.log("==============")})}async function L(){try{const u=await S();console.log(u);const i=await x(_.value);console.log(i)}catch(u){console.log(u)}}function $(u,i){setTimeout(()=>{console.log("\u5E74\u9F84\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86"),i>18?u(`\u4F60\u5DF2\u7ECF\u6210\u5E74\u4E86:${i}`):u("18\u5C81\u4EE5\u4E0B\u7981\u6B62\u8BBF\u95EE\u5462")},1500)}function V(u,i){setTimeout(()=>{console.log("\u5B66\u7C4D\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86"),u(i===1?"\u5927\u5B66\u751F\u53EF\u4EE5\u8BBF\u95EE":"\u5C0F\u5B66\u751F\u7981\u6B62\u8BBF\u95EE")},1e3)}function M(){$(function(u){console.log(u),V(function(i){console.log(i),console.log("==============")},_.value)},E.value)}const P={showPromise:d,num:E,stu:_,checkAge:S,checkStu:x,newPromise:z,newAwait:L,checkAge2:$,checkStu2:V,noPromise:M,reactive:b,ref:l};return Object.defineProperty(P,"__isScriptSetup",{enumerable:!1,value:!0}),P}}}}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:k,withCtx:c,createVNode:t,createElementVNode:F,openBlock:m,createElementBlock:g}=q,C=e("\u6B63\u5E38\u793A\u4F8B"),A=e("\u51FA\u9519\u793A\u4F8B");function f(B,h){const p=k("el-button");return m(),g("div",null,[F("div",null,[t(p,{onClick:B.showPromise,type:"primary"},{default:c(()=>[C]),_:1},8,["onClick"]),t(p,{onClick:B.showErrorPromise,type:"danger"},{default:c(()=>[A]),_:1},8,["onClick"])])])}const{reactive:y}=q;return{render:f,...{setup(B,{expose:h}){h();function p(){return new Promise((l,r)=>{setTimeout(()=>{console.log("\u6267\u884C\u4E86newPromise"),l("123")},1e3)})}function v(){p().then(l=>{console.log(l)}).catch(l=>{console.log(l)})}function w(){p().then(l=>{console.log(l),console.log(xxxxx)}).catch(l=>{console.log("err:",l)})}const b={newPromise:p,showPromise:v,showErrorPromise:w,reactive:y};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}}}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:k,withCtx:c,createVNode:t,createElementVNode:F,openBlock:m,createElementBlock:g}=q,C=e("All\u6267\u884C"),A=e("Race\u6267\u884C");function f(B,h){const p=k("el-button");return m(),g("div",null,[F("div",null,[t(p,{onClick:B.toDoALL,type:"primary"},{default:c(()=>[C]),_:1},8,["onClick"]),t(p,{onClick:B.toDoRace,type:"success"},{default:c(()=>[A]),_:1},8,["onClick"])])])}const{reactive:y}=q;return{render:f,...{setup(B,{expose:h}){h();function p(){return new Promise((a,o)=>{setTimeout(()=>{console.log("asyncMethod1\u6267\u884C"),a("asyncMethod1\u7ED3\u679C")},1500)})}function v(){return new Promise((a,o)=>{setTimeout(()=>{console.log("asyncMethod2\u6267\u884C"),a("asyncMethod2\u7ED3\u679C")},1e3)})}function w(){return new Promise((a,o)=>{setTimeout(()=>{console.log("asyncMethod3\u6267\u884C"),a("asyncMethod3\u7ED3\u679C")},2e3)})}function b(){Promise.all([p(),v(),w()]).then(a=>{console.log(a)}).catch(a=>{console.log(a)})}function l(){Promise.race([p(),v(),w()]).then(a=>{console.log("race:",a)}).catch(a=>{console.log(a)})}const r={asyncMethod1:p,asyncMethod2:v,asyncMethod3:w,toDoALL:b,toDoRace:l,reactive:y};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}}}()}},pn='{"title":"ES6\u65B0\u589E\u65B0\u7279\u6027","description":"","frontmatter":{},"headers":[{"level":2,"title":"ES6\u65B0\u589E\u65B0\u7279\u6027","slug":"es6\u65B0\u589E\u65B0\u7279\u6027"},{"level":2,"title":"1.var let const\u533A\u522B","slug":"_1-var-let-const\u533A\u522B"},{"level":3,"title":"\u63CF\u8FF0","slug":"\u63CF\u8FF0"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"},{"level":2,"title":"2.proxy","slug":"_2-proxy"},{"level":3,"title":"\u7406\u89E3","slug":"\u7406\u89E3"},{"level":3,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"},{"level":2,"title":"3.Promise(`\u2605`)","slug":"_3-promise-\u2605"},{"level":3,"title":"\u89E3\u6790","slug":"\u89E3\u6790"},{"level":3,"title":"Promise\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898?","slug":"promise\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898"},{"level":3,"title":"catch\u7684\u7528\u6CD5","slug":"catch\u7684\u7528\u6CD5"},{"level":3,"title":"all\u3001race\u7684\u7528\u6CD5","slug":"all\u3001race\u7684\u7528\u6CD5"},{"level":2,"title":"4.ES6\u6A21\u5757\u548CCommonJS","slug":"_4-es6\u6A21\u5757\u548Ccommonjs"},{"level":3,"title":"\u5BF9\u6BD4","slug":"\u5BF9\u6BD4"},{"level":3,"title":"\u4F5C\u7528\uFF1A","slug":"\u4F5C\u7528\uFF1A"},{"level":3,"title":"ES6\u548CcommonJS\u7684\u51FA\u73B0","slug":"es6\u548Ccommonjs\u7684\u51FA\u73B0"},{"level":3,"title":"ES6\u6A21\u5757\u5316\u4F7F\u7528","slug":"es6\u6A21\u5757\u5316\u4F7F\u7528"},{"level":3,"title":"1.\u5BFC\u51FA\u5BFC\u5165\u57FA\u672C\u53D8\u91CF","slug":"_1-\u5BFC\u51FA\u5BFC\u5165\u57FA\u672C\u53D8\u91CF"},{"level":3,"title":"2.\u5BFC\u51FA\u5BFC\u5165\u51FD\u6570","slug":"_2-\u5BFC\u51FA\u5BFC\u5165\u51FD\u6570"},{"level":3,"title":"3.\u6574\u4F53\u5BFC\u5165","slug":"_3-\u6574\u4F53\u5BFC\u5165"},{"level":3,"title":"4.\u9ED8\u8BA4\u5BFC\u51FA","slug":"_4-\u9ED8\u8BA4\u5BFC\u51FA"},{"level":3,"title":"5. \u590D\u5408\u5199\u6CD5","slug":"_5-\u590D\u5408\u5199\u6CD5"}],"relativePath":"blog/01_js/9_ES6.md","lastUpdated":1659685079000}',G=R(`<h2 id="es6\u65B0\u589E\u65B0\u7279\u6027" tabindex="-1">ES6\u65B0\u589E\u65B0\u7279\u6027</h2><ol><li><p>\u65B0\u589E\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF(let,const)</p></li><li><p>\u63D0\u4F9B\u4E86\u5B9A\u4E49\u7C7B\u7684\u8BED\u6CD5\u7CD6(class)</p></li><li><p>\u65B0\u589E\u4E86\u4E00\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B(Symbol)</p></li><li><p>\u65B0\u589E\u4E86\u53D8\u91CF\u7684\u89E3\u6784\u8D4B\u503C</p></li><li><p>\u51FD\u6570\u53C2\u6570\u5141\u8BB8\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u5F15\u5165\u4E86 rest \u53C2\u6570\uFF0C\u65B0\u589E\u4E86\u7BAD\u5934\u51FD\u6570</p></li><li><p>\u6570\u7EC4\u65B0\u589E\u4E86\u4E00\u4E9B API\uFF0C\u5982 isArray / from / of \u65B9\u6CD5;\u6570\u7EC4\u5B9E\u4F8B\u65B0\u589E\u4E86entries()\uFF0Ckeys() \u548C values() \u7B49\u65B9\u6CD5</p></li><li><p>\u5BF9\u8C61\u548C\u6570\u7EC4\u65B0\u589E\u4E86\u6269\u5C55\u8FD0\u7B97\u7B26</p></li><li><p>\u65B0\u589E\u4E86\u6A21\u5757\u5316(import/export)</p></li><li><p>\u65B0\u589E\u4E86 Set \u548C Map \u6570\u636E\u7ED3\u6784</p></li><li><p>\u539F\u751F\u63D0\u4F9B Proxy \u6784\u9020\u51FD\u6570\uFF0C\u7528\u6765\u751F\u6210 Proxy \u5B9E\u4F8B</p></li><li><p>\u65B0\u589E\u4E86\u751F\u6210\u5668(Generator)\u548C\u904D\u5386\u5668(Iterator)</p></li></ol><h2 id="_1-var-let-const\u533A\u522B" tabindex="-1">1.var let const\u533A\u522B</h2><table><tbody><tr><th>\u5173\u952E\u5B57</th><th>\u53D8\u91CF\u63D0\u5347</th><th>\u5757\u7EA7\u4F5C\u7528\u57DF</th><th>\u91CD\u590D\u58F0\u660E\u540C\u540D\u53D8\u91CF</th><th>\u91CD\u65B0\u8D4B\u503C</th></tr><tr><td>var</td><td>\u221A</td><td>\xD7</td><td>\u221A</td><td>\u221A</td></tr><tr><td>let</td><td>\xD7</td><td>\u221A</td><td>\xD7</td><td>\u221A</td></tr><tr><td>const</td><td>\xD7</td><td>\u221A</td><td>\xD7</td><td>\xD7</td></tr></tbody></table><h3 id="\u63CF\u8FF0" tabindex="-1">\u63CF\u8FF0</h3><ul><li>var</li></ul><blockquote><ol><li>var\u58F0\u660E\u7684\u53D8\u91CF\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u5373\u53D8\u91CF\u53EF\u4EE5\u5728\u58F0\u660E\u4E4B\u524D\u8C03\u7528\uFF0C\u503C\u4E3Aundefined \u200B</li><li>\u4E00\u4E2A\u53D8\u91CF\u53EF\u591A\u6B21\u58F0\u660E\uFF0C\u540E\u9762\u7684\u58F0\u660E\u4F1A\u8986\u76D6\u524D\u9762\u7684\u58F0\u660E \u200B</li><li>\u5728\u51FD\u6570\u4E2D\u4F7F\u7528var\u58F0\u660E\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u8BE5\u53D8\u91CF\u662F\u5C40\u90E8\u7684\u4F5C\u7528\u57DF\u53EA\u5728\u51FD\u6570\u5185\u90E8\uFF0C\u800C\u5982\u679C\u5728\u51FD\u6570\u5916\u90E8\u4F7F\u7528 var\uFF0C\u8BE5\u53D8\u91CF\u662F\u5168\u5C40\u7684</li></ol></blockquote><ul><li>let</li></ul><blockquote><ol><li>\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0Clet\u58F0\u660E\u53D8\u91CF\u524D\uFF0C\u8BE5\u53D8\u91CF\u4E0D\u80FD\u4F7F\u7528\u3002\u5C31\u662F let \u58F0\u660E\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A \u200B</li><li>let\u547D\u4EE4\u6240\u5728\u7684\u4EE3\u7801\u5757\u5185\u6709\u6548\uFF0C\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u5185\u6709\u6548\uFF0C\u4F5C\u7528\u57DF\u53EA\u662F\u5728\u82B1\u62EC\u53F7\u91CC\u9762 \u200B</li><li>let\u4E0D\u5141\u8BB8\u5728\u76F8\u540C\u4F5C\u7528\u57DF\u4E2D\u91CD\u590D\u58F0\u660E\uFF0C\u6CE8\u610F\u662F\u76F8\u540C\u4F5C\u7528\u57DF\uFF0C\u4E0D\u540C\u4F5C\u7528\u57DF\u6709\u91CD\u590D\u58F0\u660E\u4E0D\u4F1A\u62A5\u9519</li></ol></blockquote><ul><li>const</li></ul><blockquote><ol><li>const\u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\uFF0C\u58F0\u660E\u540E\uFF0C\u503C\u5C31\u4E0D\u80FD\u6539\u53D8 \u200B</li><li>let\u548Cconst\u5728\u540C\u4E00\u4F5C\u7528\u57DF\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E\u53D8\u91CFconst\u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\u3002\u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u503C\u5C31\u4E0D\u80FD\u6539\u53D8\uFF0C\u4F46\u5BF9\u4E8E\u5BF9\u8C61\u548C\u6570\u636E\u8FD9\u79CD \u5F15\u7528\u7C7B\u578B\uFF0C\u5185\u5B58\u5730\u5740\u4E0D\u80FD\u4FEE\u6539\uFF0C\u53EF\u4EE5\u4FEE\u6539\u91CC\u9762\u7684\u503C\u3002 \u200B</li><li>let\u548Cconst\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u5373\u5B83\u4EEC\u6240\u58F0\u660E\u7684\u53D8\u91CF\u4E00\u5B9A\u8981\u5728\u58F0\u660E\u540E\u4F7F\u7528\uFF0C\u5426\u5219\u62A5\u9519</li></ol></blockquote><h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B</h3><ul><li><strong>var</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// var\u58F0\u660E\u7684\u53D8\u91CF\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u5373\u53D8\u91CF\u53EF\u4EE5\u5728\u58F0\u660E\u4E4B\u524D\u8C03\u7528\uFF0C\u503C\u4E3Aundefined \u200B   </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//undefined</span>
<span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//undefined</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u4E00\u4E2A\u53D8\u91CF\u53EF\u591A\u6B21\u58F0\u660E\uFF0C\u540E\u9762\u7684\u58F0\u660E\u4F1A\u8986\u76D6\u524D\u9762\u7684\u58F0\u660E \u200B </span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//123</span>
<span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//123</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;456&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//456</span>
<span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//456</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u8BE5\u53D8\u91CF\u662F\u5C40\u90E8\u7684\u4F5C\u7528\u57DF\u53EA\u5728\u51FD\u6570\u5185\u90E8</span>
<span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Uncaught ReferenceError: a is not defined</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><a href="https://jsrun.net/new" target="_blank" rel="noopener noreferrer">\u8BD5\u4E00\u8BD5</a></p><h2 id="_2-proxy" tabindex="-1">2.proxy</h2><blockquote><p>\u53EA\u505A\u7B80\u5230\u4E0D\u80FD\u518D\u7B80\u7684\u7B80\u4ECB\uFF0C\u8BE6\u7EC6\u7528\u6CD5\u8BF7\u67E5\u9605<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">MDN</a>\u548C<a href="https://es6.ruanyifeng.com/#docs/proxy" target="_blank" rel="noopener noreferrer">\u962E\u4E00\u5CF0ES6</a></p></blockquote><h3 id="\u7406\u89E3" tabindex="-1">\u7406\u89E3</h3><p>Proxy \u53EF\u4EE5\u7406\u89E3\u6210\uFF0C\u5728\u76EE\u6807\u5BF9\u8C61\u4E4B\u524D\u67B6\u8BBE\u4E00\u5C42\u201C\u62E6\u622A\u201D\uFF0C\u5916\u754C\u5BF9\u8BE5\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u90FD\u5FC5\u987B\u5148\u901A\u8FC7\u8FD9\u5C42\u62E6\u622A\uFF0C\u56E0\u6B64\u63D0\u4F9B\u4E86\u4E00\u79CD\u673A\u5236\uFF0C\u53EF\u4EE5\u5BF9\u5916\u754C\u7684\u8BBF\u95EE\u8FDB\u884C\u8FC7\u6EE4\u548C\u6539\u5199\u3002Proxy \u8FD9\u4E2A\u8BCD\u7684\u539F\u610F\u662F\u4EE3\u7406\uFF0C\u7528\u5728\u8FD9\u91CC\u8868\u793A\u7531\u5B83\u6765\u201C\u4EE3\u7406\u201D\u67D0\u4E9B\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u8BD1\u4E3A\u201C\u4EE3\u7406\u5668\u201D\u3002</p><ul><li>\u8BED\u6CD5</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u6C34\u679C\u4EE3\u7406\u5546\u6848\u4EE3\u5165\u7406\u89E3</strong></p>`,24),H=n("div",null,"\u4EE3\u7406 \u7406\u89E3\u7B80\u5355\u6848\u4F8B",-1),K=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("info"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getfruit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u83B7\u53D6{{isProxy?'\u4EE3\u7406\u540E\u7684':''}}\u6C34\u679C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("info"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getprice"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u83B7\u53D6\u4EF7\u683Cprice"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("setProxy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u70B9\u51FB\u7ED9\u6C34\u679C\u627E\u4EE3\u7406\u5546\uFF08{{proxyNum}}\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("warning"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("resetFruit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u91CD\u7F6E\u6C34\u679C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("\u63A7\u5236\u53F0\u67E5\u770B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("isProxy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u8BBE\u7F6E\u6C34\u679C\u539F\u4EF7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("input")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u7ED9\u897F\u74DC\u8BBE\u7F6E\u4EF7\u683C"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fruit.price"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-on:"),s("input")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changePrice"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s("ref"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"const"),s(" isProxy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" proxyNum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"let"),s(" fruit "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u897F\u74DC"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"price"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"//\u91CD\u7F6E\u6C34\u679C"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"resetFruit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  fruit `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u897F\u74DC"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"price"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  isProxy`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
  proxyNum`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u91CD\u7F6E\u6210\u529F"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// \u67E5\u770B\u5F53\u524D\u6C34\u679C\u5C5E\u6027\uFF08\u770B\u770B\u662F\u4E2D\u95F4\u5546\u7684 \u8FD8\u662F\u679C\u519C\u7684\uFF09"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getfruit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"fruit\uFF1A"'),n("span",{class:"token punctuation"},","),s(" fruit"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name\uFF1A"'),n("span",{class:"token punctuation"},","),s(" fruit"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// \u67E5\u770B\u6C34\u679C\u4EF7\u683C"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getprice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price\uFF1A"'),n("span",{class:"token punctuation"},","),s(" fruit"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// \u7ED9\u6C34\u679C\u8BBE\u7F6E\u4EF7\u683C"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"changePrice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  fruit`),n("span",{class:"token punctuation"},"."),s("price "),n("span",{class:"token operator"},"="),s(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// ================\u6838\u5FC3\u4EE3\u7801start===================="),s(`
`),n("span",{class:"token comment"},"// \u7ED9\u6C34\u679C\u627E\u4EE3\u7406\u5546"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"setProxy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u7ED9\u6C34\u679C\u521B\u5EFA\u4E00\u4E2A\u4EE3\u7406 \u4EE3\u7406\u4E4B\u540E \u53EA\u8981\u662F\u8BF7\u6C42\u6C34\u679C\u91CC\u9762\u7684\u5C5E\u6027\u90FD\u5FC5\u987B\u7ECF\u8FC7\u4EE3\u7406 "),s(`
  fruit `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Proxy"),n("span",{class:"token punctuation"},"("),s("fruit"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" result "),n("span",{class:"token operator"},"="),s(" target"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// \u4EE3\u7406\u4E4B\u540E \u9700\u8981\u52A0\u4EF7\u683C \uFF08\u4E2D\u95F4\u5546\u561B \u80AF\u5B9A\u8D5A\u70B9\u5DEE\u4EF7\u5440\uFF09"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"price"'),n("span",{class:"token punctuation"},")"),s(" result"),n("span",{class:"token operator"},"+="),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u7ED9\u4EF7\u683C\u9650\u5236\u8303\u56F4"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"price"'),s(),n("span",{class:"token operator"},"&&"),s("  value "),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u53EF\u4E0D\u80FD\u592A\u8D35\u4E86"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5DF2\u8BBE\u7F6E\u4EF7\u683C\u4E3A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" Reflect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  isProxy`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
  proxyNum`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"++"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u4EE3\u7406\u6210\u529F"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// ================\u6838\u5FC3\u4EE3\u7801end===================="),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`
`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`

`)])])],-1),Q=R('<p><strong><code>\u5F85\u5B8C\u5584</code></strong></p><h3 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599</h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">proxy-MDN</a></p><p><a href="https://github.com/vuejs/core/tree/main/packages/reactivity" target="_blank" rel="noopener noreferrer">vue3-reactivity</a></p><p><a href="https://zhuanlan.zhihu.com/p/148937064" target="_blank" rel="noopener noreferrer">Vue3 \u7684 Proxy \u80FD\u505A\u5230\u54EA\u4E9B\u7CBE\u786E\u7684\u62E6\u622A\u64CD\u4F5C\uFF1F\u539F\u7406\u63ED\u79D8</a></p><h2 id="_3-promise-\u2605" tabindex="-1">3.Promise(<strong><code>\u2605</code></strong>)</h2><h3 id="\u89E3\u6790" tabindex="-1">\u89E3\u6790</h3><blockquote><p>1\u3001Promise \u662F\u5F02\u6B65\u7F16\u7A0B\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\uFF0C\u4E3B\u8981\u7528\u4E8E\u5F02\u6B65\u8BA1\u7B97\uFF0C\u652F\u6301\u94FE\u5F0F\u8C03\u7528\uFF0C\u53EF\u4EE5\u89E3\u51B3\u56DE\u8C03\u5730\u72F1 \u7684\u95EE\u9898\uFF0C\u81EA\u5DF1\u8EAB\u4E0A\u6709all\u3001reject\u3001resolve\u3001race \u7B49\u65B9\u6CD5\uFF0C\u539F\u578B\u4E0A\u6709then\u3001catch\u7B49\u65B9\u6CD5\u3002<br> 2\u3001\u53EF\u4EE5\u5C06\u5F02\u6B65\u64CD\u4F5C\u961F\u5217\u5316\uFF0C\u6309\u7167\u671F\u671B\u7684\u987A\u5E8F\u6267\u884C\uFF0C\u8FD4\u56DE\u7B26\u5408\u9884\u671F\u7684\u7ED3\u679C\uFF0C\u53EF\u4EE5\u5728\u5BF9\u8C61\u4E4B\u95F4\u4F20\u9012\u548C\u64CD\u4F5C promise\uFF0C\u5E2E\u52A9\u6211\u4EEC\u5904\u7406\u961F\u5217<br> 3\u3001promise \u6709\u4E09\u4E2A\u72B6\u6001\uFF1Apending[\u5F85\u5B9A]\u521D\u59CB\u72B6\u6001\uFF0Cfulfilled[\u5B9E\u73B0]\u64CD\u4F5C\u6210\u529F\uFF0Crejected[\u88AB\u5426\u51B3]\u64CD\u4F5C\u5931\u8D25<br> 4\u3001Promise \u5BF9\u8C61\u72B6\u6001\u6539\u53D8\uFF1A\u4ECEpending\u53D8\u4E3Afulfilled\u548C\u4ECEpending\u53D8\u4E3Arejected\u3002\u53EA\u8981\u8FD9\u4E24\u79CD\u60C5\u51B5\u53D1\u751F\uFF0C\u72B6\u6001\u5C31\u51DD\u56FA\u4E86\uFF0C\u4E0D\u4F1A\u518D\u53D8\u4E86<br> 5\u3001\u5982\u679C\u4E0D\u8BBE\u7F6E\u56DE\u8C03\u51FD\u6570\uFF0CPromise\u5185\u90E8\u629B\u51FA\u7684\u9519\u8BEF\uFF0C\u4E0D\u4F1A\u53CD\u5E94\u5230\u5916\u90E8\uFF0C\u4F46\u662F\u5199\u4E86then \u548C catch \uFF0C\u4F1A\u88ABthen\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570 \u6216 catch\u6240\u6355\u83B7</p></blockquote><ul><li>promise \u7684 then \u4E3A\u4EC0\u4E48\u53EF\u4EE5\u652F\u6301\u94FE\u5F0F\u8C03\u7528</li></ul><blockquote><p>promise \u7684then\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 promise \u5BF9\u8C61\uFF0C\u80FD\u4FDD\u8BC1 then \u65B9 \u53EF\u4EE5\u8FDB\u884C\u94FE\u5F0F\u8C03\u7528</p></blockquote><h3 id="promise\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><strong>Promise\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898?</strong></h3>',11),X=n("div",null,"Promise (\u63A7\u5236\u53F0\u67E5\u770B)",-1),Y=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showPromise"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u62C9\u51FA\u6765\u905B\u905B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("hr")]),n("span",{class:"token punctuation"},"/>")]),s(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-input")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("120px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s("0 10px 0 0"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("num"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8F93\u5165\u4F60\u7684\u5E74\u9F84"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("\u5B66\u7C4D\uFF1A"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-radio-group")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stu"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ml-4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-radio")]),s(),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("0"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5C0F\u5B66\u751F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-radio")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-radio")]),s(),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5927\u5B66\u751F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-radio")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-radio-group")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s("10px 0"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("newPromise"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Promise\u6821\u9A8C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("newAwait"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("await\u6821\u9A8C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("xl-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("noPromise"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u975EPromise"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("xl-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s("ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Promise \u5148\u62C9\u51FA\u6765\u905B\u905B"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"showPromise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dir"),n("span",{class:"token punctuation"},"("),s("Promise"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u53EF\u4EE5\u770B\u5230Promise\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u81EA\u5DF1\u8EAB\u4E0A\u6709all\u3001reject\u3001resolve\u8FD9\u51E0\u4E2A\u773C\u719F\u7684\u65B9\u6CD5\uFF0C\u539F\u578B\uFF08prototype\uFF09\u4E0A\u6709then\u3001catch\u7B49\u540C\u6837\u5F88\u773C\u719F\u7684\u65B9\u6CD5\u3002'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// \u521B\u5EFA\u4E00\u4E2APromiss\u73A9\u73A9"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" stu "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// Promise\u6821\u9A8C\u5E74\u9F84\u65B9\u5F0F"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkAge"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s("reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u6A21\u62DF\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5   "),s(`
      `),n("span",{class:"token comment"},"// \u9700\u89811.5\u79D2\u53BB\u6821\u9A8C\u4F60\u8F93\u5165\u7684\u5E74\u9F84\u662F\u5426\u5927\u4E8E18"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5E74\u9F84\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4F60\u5DF2\u7ECF\u6210\u5E74\u4E86:"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("num"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//resolve\u901A\u8FC7\u6821\u9A8C"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'18\u5C81\u4EE5\u4E0B\u7981\u6B62\u8BBF\u95EE\u5462'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//reject\u62D2\u7EDD\u4E86\u5462"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1500"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// Promise\u6821\u9A8C\u5927\u5C0F\u5B66\u751F"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkStu"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"stu"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s("reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u6A21\u62DF\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5   "),s(`
      `),n("span",{class:"token comment"},"// \u9700\u89811\u79D2\u53BB\u6821\u9A8C"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5B66\u7C4D\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("stu "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5927\u5B66\u751F\u53EF\u4EE5\u8BBF\u95EE"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//resolve\u901A\u8FC7\u6821\u9A8C"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5C0F\u5B66\u751F\u7981\u6B62\u8BBF\u95EE'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//reject\u62D2\u7EDD\u4E86\u5462"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`


  `),n("span",{class:"token comment"},"// then catch\u65B9\u5F0F"),s(`
  `),n("span",{class:"token comment"},`/*function newPromise(){
    checkAge()
    .then(res =>{
      console.log(res);
      return checkStu(stu.value)
    })
    .then(stuRes =>{
      console.log(stuRes);
    })
    .catch(err =>{
      console.log(err);
    })
  } */`),s(`
  
  `),n("span",{class:"token comment"},"// then catch\u65B9\u5F0F"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"newPromise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token function"},"checkAge"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u8FD9\u91CC\u80FD\u83B7\u53D6\u5230\u901A\u8FC7\u6821\u9A8C\u7684\u4FE1\u606F"),s(`
      `),n("span",{class:"token comment"},"// \u8FD8\u9700\u8981\u68C0\u6D4B\u5B66\u7C4D\u5462 \u8C03\u7528\u68C0\u6D4B\u5B66\u7C4D\u7684\u5F02\u6B65\u65B9\u6CD5"),s(`
      `),n("span",{class:"token function"},"checkStu"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"stuRes"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("stuRes"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"stuErr"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("stuErr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u5B66\u7C4D\u62D2\u7EDD\u8BBF\u95EE\u7684\u4FE1\u606F"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'=============='"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u5B66\u7C4D\u62D2\u7EDD\u8BBF\u95EE\u7684\u4FE1\u606F"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u8FD9\u91CC\u662F\u5E74\u9F84\u62D2\u7EDD\u8BBF\u95EE\u7684\u4FE1\u606F"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'=============='"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u5B66\u7C4D\u62D2\u7EDD\u8BBF\u95EE\u7684\u4FE1\u606F"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// async await\u65B9\u5F0F \u66F4\u4F18\u96C5\u4E00\u70B9"),s(`
  `),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"newAwait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"checkAge"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" stuRes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"checkStu"),n("span",{class:"token punctuation"},"("),s("stu"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("stuRes"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// \u4E0D\u7528Promise"),s(`

  `),n("span",{class:"token comment"},"// \u5E74\u9F84\u6821\u9A8C\u65B9\u5F0F"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkAge2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("callBack"),n("span",{class:"token punctuation"},","),s("age")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5E74\u9F84\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("age"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"callBack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4F60\u5DF2\u7ECF\u6210\u5E74\u4E86:"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("age"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"callBack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'18\u5C81\u4EE5\u4E0B\u7981\u6B62\u8BBF\u95EE\u5462'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// \u5B66\u7C4D\u6821\u9A8C\u65B9\u5F0F"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkStu2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("callBack"),n("span",{class:"token punctuation"},","),s("stu")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5B66\u7C4D\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("stu "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"callBack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5927\u5B66\u751F\u53EF\u4EE5\u8BBF\u95EE'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"callBack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5C0F\u5B66\u751F\u7981\u6B62\u8BBF\u95EE'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// \u8FD9\u91CC\u4F7F\u7528\u975EPromise\u7684 \u51FA\u73B0\u591A\u91CD\u56DE\u8C03"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"noPromise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"checkAge2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u5E74\u9F84\u7ED3\u679C"),s(`
      `),n("span",{class:"token comment"},"// \u68C0\u6D4B\u5B66\u7C4D"),s(`
      `),n("span",{class:"token function"},"checkStu2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"stuRes"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("stuRes"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u5B66\u7C4D\u7ED3\u679C"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'=============='"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("stu"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("num"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Z=R(`<p>\u6240\u4EE5\uFF0C\u4ECE\u8868\u9762\u4E0A\u770B\uFF0CPromise\u53EA\u662F\u80FD\u591F\u7B80\u5316\u5C42\u5C42\u56DE\u8C03\u7684\u5199\u6CD5.<br> \u800C\u5B9E\u8D28\u4E0A\uFF0CPromise\u7684\u7CBE\u9AD3\u662F\u201C\u72B6\u6001\u201D\uFF0C\u7528\u7EF4\u62A4\u72B6\u6001\u3001\u4F20\u9012\u72B6\u6001\u7684\u65B9\u5F0F\u6765\u4F7F\u5F97\u56DE\u8C03\u51FD\u6570\u80FD\u591F\u53CA\u65F6\u8C03\u7528<br> \u5B83\u6BD4\u4F20\u9012callback\u51FD\u6570\u8981\u7B80\u5355\u3001\u7075\u6D3B\u7684\u591A\u3002\u6240\u4EE5\u4F7F\u7528Promise\u7684\u6B63\u786E\u573A\u666F\u662F\u8FD9\u6837\u7684\uFF1A</p><h3 id="catch\u7684\u7528\u6CD5" tabindex="-1"><strong>catch\u7684\u7528\u6CD5</strong></h3><p>\u4E0A\u9762\u6848\u4F8B\u53EF\u4EE5\u77E5\u9053Promise\u5BF9\u8C61\u9664\u4E86then\u65B9\u6CD5\uFF0C\u8FD8\u6709\u4E00\u4E2Acatch\u65B9\u6CD5\uFF0C\u5B83\u662F\u505A\u4EC0\u4E48\u7528\u7684\u5462\uFF1F\u5176\u5B9E\u5B83\u548Cthen\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E00\u6837\uFF0C\u7528\u6765\u6307\u5B9Areject\u7684\u56DE\u8C03\uFF0C\u7528\u6CD5\u662F\u8FD9\u6837\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token function">methodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;resolve&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD9\u91CCdata\u5C31\u662FmethodName\u91CC\u9762resolve(data)\u7684data</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;rejected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u540C\u7406 //\u8FD9\u91CCreason\u5C31\u662FmethodName\u91CC\u9762reject(reason)\u7684reason</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD8\u6709\u4E00\u4E2A\u4F5C\u7528\uFF08\u597D\u5904\uFF09\u5C31\u662F \u5728\u6267\u884Cresolve\u7684\u56DE\u8C03\uFF08\u4E5F\u5C31\u662F\u4E0A\u9762then\u4E2D\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF09\u65F6\uFF0C\u5982\u679C\u629B\u51FA\u5F02\u5E38\u4E86\uFF08\u4EE3\u7801\u51FA\u9519\u4E86\uFF09\uFF0C\u90A3\u4E48\u5E76\u4E0D\u4F1A\u62A5\u9519\u5361\u6B7Bjs\uFF0C\u800C\u662F\u4F1A\u8FDB\u5230\u8FD9\u4E2Acatch\u65B9\u6CD5\u4E2D\u3002</p><div class="language-js line-numbers-mode"><pre><code><span class="token function">methodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xxxxxx<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u91CC\u4EE3\u7801\u4F1A\u51FA\u9519</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5F02\u5E38\u4F1A\u629B\u51FA\u5230\u8FD9\u91CC \u7A0B\u5E8F\u4E0D\u4F1A\u5361\u6B7B</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// xxxxxx is not defined</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,6),nn=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
     `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showPromise"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u6B63\u5E38\u793A\u4F8B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
     `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showErrorPromise"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u51FA\u9519\u793A\u4F8B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// \u8FD4\u56DEPromise"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"newPromise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s("reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6267\u884C\u4E86newPromise'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'123'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// \u6B63\u5E38\u793A\u4F8B"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"showPromise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"newPromise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"//\u51FA\u9519\u793A\u4F8B"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"showErrorPromise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"newPromise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("xxxxx"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u8FD9\u91CC\u4F1A\u51FA\u9519"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'err:'"),n("span",{class:"token punctuation"},","),s("err"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//xxxxx is not defined"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),sn=R(`<h3 id="all\u3001race\u7684\u7528\u6CD5" tabindex="-1"><strong>all\u3001race\u7684\u7528\u6CD5</strong></h3><ul><li>all\u65B9\u6CD5\u7684\u6548\u679C\u5B9E\u9645\u4E0A\u662F\u300C\u8C01\u8DD1\u7684\u6162\uFF0C\u4EE5\u8C01\u4E3A\u51C6\u6267\u884C\u56DE\u8C03\u300D</li><li>Promise\u7684all\u65B9\u6CD5\u63D0\u4F9B\u4E86\u5E76\u884C\u6267\u884C\u5F02\u6B65\u64CD\u4F5C\u7684\u80FD\u529B\uFF0C\u5E76\u4E14\u5728\u6240\u6709\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u5B8C\u540E\u624D\u6267\u884C\u56DE\u8C03\u3002</li><li>\u4F7F\u7528\u573A\u666F\uFF0C\u6253\u5F00\u8D44\u6E90\u591A\u7684\u7F51\u9875\u65F6\uFF0C\u5148\u52A0\u8F7D\u5904\u9700\u8981\u7684\u8D44\u6E90\uFF0C\u518D\u8FDB\u884C\u9875\u9762\u521D\u59CB\u5316\u3002</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">//  Promise.all([\u5F02\u6B65\u65B9\u6CD51,\u5F02\u6B65\u65B9\u6CD52,\u5F02\u6B65\u65B9\u6CD53])</span>
Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">asyncMethod1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">asyncMethod2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">asyncMethod3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">results</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7ED3\u679C\u4EE5\u4E3A\u6570\u7EC4\u8F93\u51FA</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8F93\u51FA [&#39;asyncMethod1\u7ED3\u679C&#39;, &#39;asyncMethod2\u7ED3\u679C&#39;, &#39;asyncMethod3\u7ED3\u679C&#39;]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u90A3\u4E48\u76F8\u5BF9\u7684\u5C31\u6709\u53E6\u4E00\u4E2A\u65B9\u6CD5\u300C\u8C01\u8DD1\u7684\u5FEB\uFF0C\u4EE5\u8C01\u4E3A\u51C6\u6267\u884C\u56DE\u8C03\u300D</li><li>\u5C31\u662Frace\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u8BCD\u672C\u6765\u5C31\u662F\u8D5B\u8DD1\u7684\u610F\u601D\u3002race\u7684\u7528\u6CD5\u4E0Eall\u4E00\u6837</li><li>\u4F7F\u7528\u573A\u666F\uFF0C\u6682\u65F6\u6CA1\u6709\u9047\u5230 \uFF08\u8D44\u6E90\u52A0\u8F7D\u8D85\u65F6\u53EF\u80FD\u53EF\u4EE5\u7528\u5230\uFF09</li></ul><p><strong>\u4F8B\u5B50</strong></p>`,5),an=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
     `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("toDoALL"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("All\u6267\u884C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
     `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("toDoRace"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Race\u6267\u884C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// \u5F02\u6B65\u65B9\u6CD51 2 3 "),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"asyncMethod1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s("reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'asyncMethod1\u6267\u884C'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'asyncMethod1\u7ED3\u679C'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"asyncMethod2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s("reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'asyncMethod2\u6267\u884C'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'asyncMethod2\u7ED3\u679C'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"asyncMethod3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s("reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'asyncMethod3\u6267\u884C'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'asyncMethod3\u7ED3\u679C'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// \u70B9\u51FB\u6267\u884CPromise.all"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"toDoALL"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    Promise`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"all"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"asyncMethod1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"asyncMethod2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"asyncMethod3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"results"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("results"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// ['asyncMethod1\u7ED3\u679C', 'asyncMethod2\u7ED3\u679C', 'asyncMethod3\u7ED3\u679C']"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// \u70B9\u51FB\u6267\u884CPromise.race "),s(`
  `),n("span",{class:"token comment"},"// \u8FD9\u91CC\u65B9\u6CD52\u7684\u5904\u7406\u65F6\u95F4\u662F1\u79D2 \u662F\u6700\u5FEB\u7684 \u6240\u4EE5\u6700\u5148\u8FD4\u56DE\u7684\u662FasyncMethod2\u7ED3\u679C"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"toDoRace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    Promise`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"race"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"asyncMethod1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"asyncMethod2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"asyncMethod3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"results"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'race:'"),n("span",{class:"token punctuation"},","),s("results"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//race: asyncMethod2\u7ED3\u679C"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`


  
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),un=R(`<h2 id="_4-es6\u6A21\u5757\u548Ccommonjs" tabindex="-1">4.ES6\u6A21\u5757\u548CCommonJS</h2><h3 id="\u5BF9\u6BD4" tabindex="-1">\u5BF9\u6BD4</h3><ol><li>import\u662FES6\u4E2D\u7684\u8BED\u6CD5\u6807\u51C6\u4E5F\u662F\u7528\u6765\u52A0\u8F7D\u6A21\u5757\u6587\u4EF6\u7684\uFF0Cimport\u51FD\u6570\u53EF\u4EE5\u8BFB\u53D6\u5E76\u6267\u884C\u4E00\u4E2AJavaScript\u6587\u4EF6\uFF0C\u7136\u540E\u8FD4\u56DE\u8BE5\u6A21\u5757\u7684export\u547D\u4EE4\u6307\u5B9A\u8F93\u51FA\u7684\u4EE3\u7801\u3002export\u4E0Eexport default\u5747\u53EF\u7528\u4E8E\u5BFC\u51FA\u5E38\u91CF\u3001\u51FD\u6570\u3001\u6587\u4EF6\u3001\u6A21\u5757\uFF0Cexport\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0Cexport default\u53EA\u80FD\u6709\u4E00\u4E2A\u3002</li><li>require \u5B9A\u4E49\u6A21\u5757\uFF1Amodule\u53D8\u91CF\u4EE3\u8868\u5F53\u524D\u6A21\u5757\uFF0C\u5B83\u7684exports\u5C5E\u6027\u662F\u5BF9\u5916\u7684\u63A5\u53E3\u3002\u901A\u8FC7exports\u53EF\u4EE5\u5C06\u6A21\u5757\u4ECE\u6A21\u5757\u4E2D\u5BFC\u51FA\uFF0C\u5176\u4ED6\u6587\u4EF6\u52A0\u8F7D\u8BE5\u6A21\u5757\u5B9E\u9645\u4E0A\u5C31\u662F\u8BFB\u53D6module.exports\u53D8\u91CF\uFF0C\u4ED6\u4EEC\u53EF\u4EE5\u662F\u53D8\u91CF\u3001\u51FD\u6570\u3001\u5BF9\u8C61\u7B49\u3002\u5728node\u4E2D\u5982\u679C\u7528exports\u8FDB\u884C\u5BFC\u51FA\u7684\u8BDD\u7CFB\u7EDF\u4F1A\u7CFB\u7EDF\u5E2E\u60A8\u8F6C\u6210module.exports\u7684\uFF0C\u53EA\u662F\u5BFC\u51FA\u9700\u8981\u5B9A\u4E49\u5BFC\u51FA\u540D\u3002</li></ol><p><strong>require\u4E0Eimport\u7684\u533A\u522B</strong></p><ol><li>require\u662FCommonJS\u89C4\u8303\u7684\u6A21\u5757\u5316\u8BED\u6CD5\uFF0Cimport\u662FECMAScript 6\u89C4\u8303\u7684\u6A21\u5757\u5316\u8BED\u6CD5\uFF1B</li><li>require\u662F\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0Cimport\u662F\u7F16\u8BD1\u65F6\u52A0\u8F7D\uFF1B</li><li>require\u53EF\u4EE5\u5199\u5728\u4EE3\u7801\u7684\u4EFB\u610F\u4F4D\u7F6E\uFF0Cimport\u53EA\u80FD\u5199\u5728\u6587\u4EF6\u7684\u6700\u9876\u7AEF\u4E14\u4E0D\u53EF\u5728\u6761\u4EF6\u8BED\u53E5\u6216\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u4F7F\u7528\uFF1B</li><li>require\u901A\u8FC7module.exports\u5BFC\u51FA\u7684\u503C\u5C31\u4E0D\u80FD\u518D\u53D8\u5316\uFF0Cimport\u901A\u8FC7export\u5BFC\u51FA\u7684\u503C\u53EF\u4EE5\u6539\u53D8\uFF1B</li><li>require\u901A\u8FC7module.exports\u5BFC\u51FA\u7684\u662Fexports\u5BF9\u8C61\uFF0Cimport\u901A\u8FC7export\u5BFC\u51FA\u662F\u6307\u5B9A\u8F93\u51FA\u7684\u4EE3\u7801\uFF1B</li><li>require\u8FD0\u884C\u65F6\u624D\u5F15\u5165\u6A21\u5757\u7684\u5C5E\u6027\u6240\u4EE5\u6027\u80FD\u76F8\u5BF9\u8F83\u4F4E\uFF0Cimport\u7F16\u8BD1\u65F6\u5F15\u5165\u6A21\u5757\u7684\u5C5E\u6027\u6240\u6240\u4EE5\u6027\u80FD\u7A0D\u9AD8\u3002</li></ol><h3 id="\u4F5C\u7528\uFF1A" tabindex="-1">\u4F5C\u7528\uFF1A</h3><ul><li>\u5F7B\u5E95\u89E3\u51B3\u4E86js\u6587\u4EF6\u4F9D\u8D56\u6DF7\u4E71\u548C\u5168\u5C40\u53D8\u91CF\u6C61\u67D3\u7684\u95EE\u9898\u3002</li></ul><h3 id="es6\u548Ccommonjs\u7684\u51FA\u73B0" tabindex="-1">ES6\u548CcommonJS\u7684\u51FA\u73B0</h3><blockquote><p>v8\u5F15\u64CE\u53D1\u5E03\u4E4B\u540E,\u51FA\u73B0\u4E86Node,js\u8FD9\u95E8\u8BED\u8A00\u5E94\u7528\u5230\u4E86\u540E\u7AEF\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u540E\u7AEF\u8BED\u8A00\u8FDE\u6728\u5757\u8BDD\u6280\u672F\u90FD\u6CA1\u6709\uFF0C\u662F\u5F88\u96BE\u53D1\u5C55\u58EE\u5927\u7684\uFF0C\u4E8E\u662F\u793E\u533A\u5C31\u5F00\u59CB\u4E86\u8BA8\u8BBA\u5404\u79CD\u5B9E\u73B0\u6A21\u5757\u5316\u7684\u65B9\u6CD5\uFF0C\u6700\u540EcommonJS\u4E5F\u5C31\u8BDE\u751F\u4E86,\u56E0\u6B64Node\u4E5F\u5E94\u7528\u4E86commonJS\u7684\u6807\u51C6\u548C\u7406\u5FF5\u6765\u5B9E\u73B0\u6A21\u5757\u5316\u3002<br> \u4F46\u662FcommonJS\u548CAMD\u548CCMD\u90FD\u662F\u5C5E\u4E8E\u793E\u533A\u8BA8\u8BBA\u51FA\u6765\u7684\u65B9\u6848\u3002\u76F4\u5230ES6\u7684\u53D1\u5E03\uFF0CECMA\u5B98\u65B9\u624D\u6B63\u5F0F\u53D1\u5E03ES6\u6A21\u5757\u5316\u6807\u51C6\u3002<br><strong><code>\u603B\u7ED3\u4E3A\uFF1AcommonJS\u53EA\u9002\u7528\u4E8ENode,\u800CES6\u6A21\u5757\u5316\u652F\u6301Node\u548C\u6D4F\u89C8\u5668\u7AEF\u3002</code></strong></p></blockquote><h3 id="es6\u6A21\u5757\u5316\u4F7F\u7528" tabindex="-1">ES6\u6A21\u5757\u5316\u4F7F\u7528</h3><ul><li>\u4EE5\u4E0B\u4F8B\u5B50\u4F7F\u7528\uFF08\u5BFC\u51FA<code>export.js</code>\uFF09(\u5BFC\u5165<code>import.js</code>)</li></ul><h3 id="_1-\u5BFC\u51FA\u5BFC\u5165\u57FA\u672C\u53D8\u91CF" tabindex="-1">1.\u5BFC\u51FA\u5BFC\u5165\u57FA\u672C\u53D8\u91CF</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// export.js</span>
<span class="token comment">// \u76F4\u63A5\u5BFC\u51FA\u6574\u53E5\u5BFC\u51FA\uFF0C\u5BFC\u5165\u53D8\u91CF\u540D\u8981\u8DDF\u5BFC\u51FA\u7684\u6A21\u5757\u53D8\u91CF\u540D\u4E00\u4E00\u5BF9\u5E94\u5426\u5219\u62A5\u9519\uFF0C\u5BFC\u5165\u65F6\u7528{}\u5305\u88F9\u7684\u53D8\u91CF\u540D</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;wenl&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>

<span class="token comment">// import.js</span>
<span class="token comment">// \u540D\u79F0\u8981\u8DDF\u5BFC\u51FA\u7684\u6A21\u5757\u540D\u79F0\u4E00\u4E00\u5BF9\u5E94</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u53EB</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">// \u6211\u53EBwenl,\u4ECA\u5E7418\u5C81</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>\u5206\u5272\u7EBF<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token comment">// export.js</span>
<span class="token comment">// \u4E5F\u53EF\u4EE5\u5148\u5B9A\u4E49\u53D8\u91CF\u540D\uFF0C\u518D\u76F4\u63A5\u5BFC\u51FA\u53D8\u91CF\u540D\u3002 (\u63A8\u8350\u8FD9\u79CD \u4E00\u773C\u5C31\u80FD\u770B\u5230\u5BFC\u51FA\u7684\u6709\u4EC0\u4E48\u53C2\u6570)</span>
<span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token string">&#39;wenl2&#39;</span>
<span class="token keyword">const</span> age2 <span class="token operator">=</span> <span class="token number">19</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  name2<span class="token punctuation">,</span>
  age2
<span class="token punctuation">}</span>

<span class="token comment">// import.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> name2 <span class="token punctuation">,</span> age2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u53EB</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">// \u6211\u53EBwenl2,\u4ECA\u5E7419\u5C81</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>\u5206\u5272\u7EBF<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token comment">// export.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;wenl&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>

<span class="token comment">// import.js </span>
<span class="token comment">// as\u5BF9\u53D8\u91CF\u8D77\u522B\u540D\uFF1A</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> name <span class="token keyword">as</span> myName<span class="token punctuation">,</span> age <span class="token keyword">as</span> myAge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u53EB</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myAge<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">// \u6211\u53EBwenl,\u4ECA\u5E7418\u5C81</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>\u5206\u5272\u7EBF\uFF08\u6CE8\u610F\u70B9\uFF09<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token comment">// export.js</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;wenl&#39;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>age
<span class="token punctuation">}</span>
<span class="token comment">// import.js</span>
<span class="token comment">// \u5BFC\u5165\u53D8\u91CF(\u975E\u5F15\u7528\u7C7B\u578B)\u662F\u53EA\u8BFB\u7684\uFF0C\u4E0D\u53EF\u4FEE\u6539\u3002</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span>
age <span class="token operator">=</span> <span class="token number">20</span>  <span class="token comment">//Uncaught TypeError: Assignment to constant variable. \u672A\u6355\u83B7\u7684\u7C7B\u578B\u9519\u8BEF\uFF1A\u8D4B\u503C\u7ED9\u5E38\u91CF\u53D8\u91CF\u3002</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u53EB</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">// \u4E0D\u4F1A\u6253\u5370 \u4E0A\u4E00\u6B65\u5DF2\u7ECF\u62A5\u9519\u4E86</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>\u5206\u5272\u7EBF\uFF08\u6CE8\u610F\u70B9\uFF09<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token comment">// export.js</span>
<span class="token comment">// \u5BFC\u51FA\u5F15\u7528\u7C7B\u578B\uFF08\u5BF9\u8C61\uFF0C\u6570\u7EC4\uFF09\u53EF\u4FEE\u6539\u503C</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;wenl&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
  student<span class="token punctuation">,</span>
  arr
<span class="token punctuation">}</span>
<span class="token comment">// import.js</span>
<span class="token comment">// \u5BFC\u5165\u5F15\u7528\u7C7B\u578B\uFF08\u5BF9\u8C61\uFF0C\u6570\u7EC4\uFF09\u53EF\u4FEE\u6539\u503C</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> student<span class="token punctuation">,</span> arr <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span>
student<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;WENL&#39;</span>
student<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">,</span> student<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// WENL 20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 1</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 10</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h3 id="_2-\u5BFC\u51FA\u5BFC\u5165\u51FD\u6570" tabindex="-1">2.\u5BFC\u51FA\u5BFC\u5165\u51FD\u6570</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// export.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// import.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>\u5206\u5272\u7EBF<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token comment">// export.js</span>
<span class="token comment">// \u5BFC\u51FA\u4E5F\u53EF\u4EE5\u8D77\u522B\u540D(add as myAdd)</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
  add <span class="token keyword">as</span> myAdd<span class="token punctuation">,</span>
  sub
<span class="token punctuation">}</span>
<span class="token comment">// import.js</span>
<span class="token comment">// \u5BFC\u5165\u8D77\u522B\u540D\uFF08sub as mySub\uFF09</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> myAdd<span class="token punctuation">,</span>sub <span class="token keyword">as</span> mySub <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span>
<span class="token function">myAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//3</span>
<span class="token function">mySub</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><strong>\u6A21\u5757\u5BFC\u5165\u662F\u9759\u6001\u5BFC\u5165\u7684\uFF0C\u4E0D\u80FD\u4F7F\u7528\u90A3\u4E9B\u4EC0\u4E48\u9700\u8981\u5224\u65AD\u5440\u4EC0\u4E48\u53D8\u91CF\u4FDD\u5B58\u5440\u7684\u9700\u8981\u8FD0\u884C\u65F6\u624D\u80FD\u786E\u5B9A\u5BFC\u5165\u7684\u3002\u5FC5\u987B\u6309\u89C4\u5B9A\u5199\u6CD5\u3002</strong></p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">&#39;./export.js&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>myAdd<span class="token punctuation">,</span>mySub<span class="token punctuation">}</span> from path<span class="token punctuation">;</span> 

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span>myAdd<span class="token punctuation">,</span>mySub<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4EE5\u4E0A\u8FD9\u4E9B\u5BFC\u5165\u65B9\u5F0F\u90FD\u662F\u9519\u8BEF\u7684</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-\u6574\u4F53\u5BFC\u5165" tabindex="-1">3.<strong>\u6574\u4F53\u5BFC\u5165</strong></h3><p>\u5728\u5BFC\u5165\u7684\u65F6\u5019\u7528*\u53F7\u6307\u5B9A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u540C\u65F6\u7528 as \u7ED9\u8FD9\u4E2A\u5BF9\u8C61\u8D77\u522B\u540D\uFF0C\u90A3\u4E48<code>\u5BFC\u51FA\u7684\u5168\u90E8\u53D8\u91CF\u90FD\u662F\u8FD9\u4E2A\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027</code>\u3002</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// export.js</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>add <span class="token punctuation">,</span> sub <span class="token punctuation">,</span> arr<span class="token punctuation">}</span>

<span class="token comment">// import.js</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> obj <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span>
obj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_4-\u9ED8\u8BA4\u5BFC\u51FA" tabindex="-1">4.<strong>\u9ED8\u8BA4\u5BFC\u51FA</strong></h3><blockquote><p>export default \u6307\u5B9A\u9ED8\u8BA4\u8F93\u51FA\uFF0C\u5C31\u662F\u5BFC\u51FA\u7684\u65F6\u5019\u4E3A\u5BFC\u51FA\u4E00\u4E2A\u533F\u540D\u51FD\u6570\uFF0C\u800C\u5728\u5BFC\u5165\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u6307\u5B9A\u968F\u4FBF\u8D77\u4E00\u4E2A\u540D\u5B57\u90FD\u80FD\u5B9E\u73B0\u5BFC\u5165\u3002\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u77E5\u9053\u539F\u6A21\u5757\u8F93\u51FA\u7684\u51FD\u6570\u540D\uFF0C\u5927\u5927\u65B9\u4FBF\u4F7F\u7528\u3002\u4E14\u5BFC\u5165\u7684\u65F6\u5019\u4E0D\u518D\u9700\u8981{}\u5305\u88F9\u3002\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E00\u4E2Ajs\u6587\u4EF6\uFF08\u6A21\u5757\uFF09<strong><code>\u53EA\u80FD\u5B58\u5728\u4E00\u4E2Aexport default</code></strong> \uFF1A</p></blockquote><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5BFC\u51FA\u51FD\u6570</span>
<span class="token comment">// export.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6216</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> add

<span class="token comment">// import.js</span>
<span class="token keyword">import</span> fn <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>\u5206\u5272\u7EBF<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token comment">// \u5BFC\u51FA\u5BF9\u8C61</span>
<span class="token comment">// export.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;wenl&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6216</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;wenl&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  add<span class="token punctuation">,</span>
  name
<span class="token punctuation">}</span>

<span class="token comment">// import.js</span>
<span class="token keyword">import</span> obj <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span>
obj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//wenl</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>\u5206\u5272\u7EBF<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token comment">// export.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// import.js</span>
<span class="token keyword">import</span> Person <span class="token keyword">from</span> <span class="token string">&#39;./export.js&#39;</span>
<span class="token keyword">var</span> zhangsan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h3 id="_5-\u590D\u5408\u5199\u6CD5" tabindex="-1">5. <strong>\u590D\u5408\u5199\u6CD5</strong></h3><p>\u5982\u679C\u5728\u4E00\u4E2A\u6A21\u5757\u4E2D\uFF0C\u5BFC\u5165\u4E00\u4E2A\u6A21\u5757\u540E\u53C8\u5BFC\u51FA\u540C\u4E00\u4E2A\u6A21\u5757\uFF0C\u53EF\u4EE5\u91C7\u7528\u590D\u5408\u5199\u6CD5\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>add<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./add.js&#39;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>add<span class="token punctuation">}</span>
<span class="token comment">// \u6216</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>add<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./add.js&#39;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><a href="https://www.cnblogs.com/little-oil/p/14705047.html" target="_blank" rel="noopener noreferrer">ES6\u6A21\u5757\u5316\u8BE6\u89E3</a></li></ul>`,27);function tn(e,k,c,t,F,m){const g=T("render-demo-0"),C=T("demo"),A=T("render-demo-1"),f=T("render-demo-2"),y=T("render-demo-3");return U(),O("div",null,[G,j(C,{sourceCode:`<template>
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

`},{description:D(()=>[H]),highlight:D(()=>[K]),default:D(()=>[j(g)]),_:1}),Q,j(C,{sourceCode:`<template>
  <div>
    <xl-button @click="showPromise" type="primary">\u62C9\u51FA\u6765\u905B\u905B</xl-button>
    <hr/>
    
    <div>
      <el-input style="width:120px;margin:0 10px 0 0;" v-model="num" placeholder="\u8F93\u5165\u4F60\u7684\u5E74\u9F84" />
      <span>\u5B66\u7C4D\uFF1A</span>
      <el-radio-group v-model="stu" class="ml-4">
        <el-radio :label="0" size="large">\u5C0F\u5B66\u751F</el-radio>
        <el-radio :label="1" size="large">\u5927\u5B66\u751F</el-radio>
      </el-radio-group>
    </div>
    <div style="margin:10px 0;">
      <xl-button @click="newPromise" type="primary">Promise\u6821\u9A8C</xl-button>
      <xl-button @click="newAwait" type="primary">await\u6821\u9A8C</xl-button>
      <xl-button @click="noPromise" type="primary">\u975EPromise</xl-button>
    </div>
  </div>
</template>

<script setup>
  import { reactive,ref } from 'vue';
  // Promise \u5148\u62C9\u51FA\u6765\u905B\u905B
  function showPromise(){
    console.dir(Promise);
    console.log('\u53EF\u4EE5\u770B\u5230Promise\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u81EA\u5DF1\u8EAB\u4E0A\u6709all\u3001reject\u3001resolve\u8FD9\u51E0\u4E2A\u773C\u719F\u7684\u65B9\u6CD5\uFF0C\u539F\u578B\uFF08prototype\uFF09\u4E0A\u6709then\u3001catch\u7B49\u540C\u6837\u5F88\u773C\u719F\u7684\u65B9\u6CD5\u3002');
  }

  // \u521B\u5EFA\u4E00\u4E2APromiss\u73A9\u73A9
  const num = ref()
  const stu = ref(0)
  // Promise\u6821\u9A8C\u5E74\u9F84\u65B9\u5F0F
  function checkAge(){
     return new Promise((resolve,reject) =>{
      // \u6A21\u62DF\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5   
      // \u9700\u89811.5\u79D2\u53BB\u6821\u9A8C\u4F60\u8F93\u5165\u7684\u5E74\u9F84\u662F\u5426\u5927\u4E8E18
      setTimeout(() => {
        console.log('\u5E74\u9F84\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86');
        if(num.value>18){
          resolve(\`\u4F60\u5DF2\u7ECF\u6210\u5E74\u4E86:\${num.value}\`) //resolve\u901A\u8FC7\u6821\u9A8C
        }else{
          reject('18\u5C81\u4EE5\u4E0B\u7981\u6B62\u8BBF\u95EE\u5462') //reject\u62D2\u7EDD\u4E86\u5462
        }
      }, 1500)
    })
  }
  // Promise\u6821\u9A8C\u5927\u5C0F\u5B66\u751F
  function checkStu(stu){
     return new Promise((resolve,reject) =>{
      // \u6A21\u62DF\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5   
      // \u9700\u89811\u79D2\u53BB\u6821\u9A8C
      setTimeout(() => {
        console.log('\u5B66\u7C4D\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86');
        if(stu === 1){
          resolve(\`\u5927\u5B66\u751F\u53EF\u4EE5\u8BBF\u95EE\`) //resolve\u901A\u8FC7\u6821\u9A8C
        }else{
          reject('\u5C0F\u5B66\u751F\u7981\u6B62\u8BBF\u95EE') //reject\u62D2\u7EDD\u4E86\u5462
        }
      }, 1000)
    })
  }


  // then catch\u65B9\u5F0F
  /*function newPromise(){
    checkAge()
    .then(res =>{
      console.log(res);
      return checkStu(stu.value)
    })
    .then(stuRes =>{
      console.log(stuRes);
    })
    .catch(err =>{
      console.log(err);
    })
  } */
  
  // then catch\u65B9\u5F0F
  function newPromise(){
   checkAge().then(res =>{
      console.log(res); //\u8FD9\u91CC\u80FD\u83B7\u53D6\u5230\u901A\u8FC7\u6821\u9A8C\u7684\u4FE1\u606F
      // \u8FD8\u9700\u8981\u68C0\u6D4B\u5B66\u7C4D\u5462 \u8C03\u7528\u68C0\u6D4B\u5B66\u7C4D\u7684\u5F02\u6B65\u65B9\u6CD5
      checkStu().then(stuRes =>{
        console.log(stuRes);
      }).catch(stuErr =>{
        console.log(stuErr); //\u5B66\u7C4D\u62D2\u7EDD\u8BBF\u95EE\u7684\u4FE1\u606F
        console.log('=============='); //\u5B66\u7C4D\u62D2\u7EDD\u8BBF\u95EE\u7684\u4FE1\u606F
      })
    }).catch(err =>{
      console.log(err); //\u8FD9\u91CC\u662F\u5E74\u9F84\u62D2\u7EDD\u8BBF\u95EE\u7684\u4FE1\u606F
      console.log('=============='); //\u5B66\u7C4D\u62D2\u7EDD\u8BBF\u95EE\u7684\u4FE1\u606F
    })
  }

  // async await\u65B9\u5F0F \u66F4\u4F18\u96C5\u4E00\u70B9
  async function newAwait(){
    try {
      const res = await checkAge()
      console.log(res);
      const stuRes = await checkStu(stu.value)
      console.log(stuRes);
    } catch (error) {
      console.log(error);
    }
  }

  // \u4E0D\u7528Promise

  // \u5E74\u9F84\u6821\u9A8C\u65B9\u5F0F
  function checkAge2(callBack,age){
    setTimeout(() => {
      console.log('\u5E74\u9F84\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86');
      if(age>18){
        callBack(\`\u4F60\u5DF2\u7ECF\u6210\u5E74\u4E86:\${age}\`)
      }else{
        callBack('18\u5C81\u4EE5\u4E0B\u7981\u6B62\u8BBF\u95EE\u5462')
      }
    }, 1500);
  }
  // \u5B66\u7C4D\u6821\u9A8C\u65B9\u5F0F
  function checkStu2(callBack,stu){
    setTimeout(() => {
      console.log('\u5B66\u7C4D\u5DF2\u7ECF\u6821\u9A8C\u597D\u4E86');
      if(stu === 1){
        callBack('\u5927\u5B66\u751F\u53EF\u4EE5\u8BBF\u95EE')
      }else{
        callBack('\u5C0F\u5B66\u751F\u7981\u6B62\u8BBF\u95EE')
      }
    }, 1000);
  }

  // \u8FD9\u91CC\u4F7F\u7528\u975EPromise\u7684 \u51FA\u73B0\u591A\u91CD\u56DE\u8C03
  function noPromise(){
    checkAge2(function(res){
      console.log(res); // \u5E74\u9F84\u7ED3\u679C
      // \u68C0\u6D4B\u5B66\u7C4D
      checkStu2(function(stuRes){
        console.log(stuRes); //\u5B66\u7C4D\u7ED3\u679C
        console.log('==============');
      },stu.value)
    },num.value)
  }
  
<\/script>

<style scoped>

</style>
`},{description:D(()=>[X]),highlight:D(()=>[Y]),default:D(()=>[j(A)]),_:1}),Z,j(C,{sourceCode:`<template>
  <div>
     <el-button @click="showPromise" type="primary">\u6B63\u5E38\u793A\u4F8B</el-button>
     <el-button @click="showErrorPromise" type="danger">\u51FA\u9519\u793A\u4F8B</el-button>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
  // \u8FD4\u56DEPromise
  function newPromise(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
          console.log('\u6267\u884C\u4E86newPromise');
          resolve('123')
        }, 1000);
    })
  }
  // \u6B63\u5E38\u793A\u4F8B
  function showPromise(){
    newPromise().then(res =>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
  //\u51FA\u9519\u793A\u4F8B
  function showErrorPromise(){
    newPromise().then(res =>{
      console.log(res);
      console.log(xxxxx); //\u8FD9\u91CC\u4F1A\u51FA\u9519
    }).catch(err =>{
      console.log('err:',err); //xxxxx is not defined
    })
  }
<\/script>

<style scoped>

</style>
`},{highlight:D(()=>[nn]),default:D(()=>[j(f)]),_:1}),sn,j(C,{sourceCode:`<template>
  <div>
     <el-button @click="toDoALL" type="primary">All\u6267\u884C</el-button>
     <el-button @click="toDoRace" type="success">Race\u6267\u884C</el-button>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  // \u5F02\u6B65\u65B9\u6CD51 2 3 
  function asyncMethod1(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log('asyncMethod1\u6267\u884C');
        resolve('asyncMethod1\u7ED3\u679C')
      }, 1500);
    })
  }
  function asyncMethod2(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log('asyncMethod2\u6267\u884C');
        resolve('asyncMethod2\u7ED3\u679C')
      }, 1000);
    })
  }
  function asyncMethod3(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log('asyncMethod3\u6267\u884C');
        resolve('asyncMethod3\u7ED3\u679C')
      }, 2000);
    })
  }
  // \u70B9\u51FB\u6267\u884CPromise.all
  function toDoALL(){
    Promise.all([asyncMethod1(), asyncMethod2(), asyncMethod3()])
    .then(results => {
        console.log(results); //\xA0['asyncMethod1\u7ED3\u679C', 'asyncMethod2\u7ED3\u679C', 'asyncMethod3\u7ED3\u679C']
    }).catch(err => {
        console.log(err);
    });
  }
  // \u70B9\u51FB\u6267\u884CPromise.race 
  // \u8FD9\u91CC\u65B9\u6CD52\u7684\u5904\u7406\u65F6\u95F4\u662F1\u79D2 \u662F\u6700\u5FEB\u7684 \u6240\u4EE5\u6700\u5148\u8FD4\u56DE\u7684\u662FasyncMethod2\u7ED3\u679C
  function toDoRace(){
    Promise.race([asyncMethod1(), asyncMethod2(), asyncMethod3()])
    .then(results => {
        console.log('race:',results); //race: asyncMethod2\u7ED3\u679C
    }).catch(err => {
        console.log(err);
    });
  }


  
<\/script>

<style scoped>

</style>
`},{highlight:D(()=>[an]),default:D(()=>[j(y)]),_:1}),un])}var en=I(W,[["render",tn]]);export{pn as __pageData,en as default};
