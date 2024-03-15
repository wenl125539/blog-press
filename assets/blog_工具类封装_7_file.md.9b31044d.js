import{_ as n,c as s,o as a,e as p}from"./app.f182fb68.js";const d='{"title":"base64 \u8F6Cfile","description":"","frontmatter":{},"headers":[{"level":3,"title":"base64 \u8F6Cfile","slug":"base64-\u8F6Cfile"}],"relativePath":"blog/\u5DE5\u5177\u7C7B\u5C01\u88C5/7_file.md","lastUpdated":1673403110000}',t={},e=p(`<h3 id="base64-\u8F6Cfile" tabindex="-1">base64 \u8F6Cfile</h3><div class="language-js line-numbers-mode"><pre><code><span class="token function">dataURLtoFile</span><span class="token punctuation">(</span><span class="token parameter">dataurl<span class="token punctuation">,</span> filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u83B7\u53D6\u5230base64\u7F16\u7801</span>
      <span class="token keyword">const</span> arr <span class="token operator">=</span> dataurl<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
      <span class="token comment">// \u5C06base64\u7F16\u7801\u8F6C\u4E3A\u5B57\u7B26\u4E32</span>
      <span class="token keyword">const</span> bstr <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> n <span class="token operator">=</span> bstr<span class="token punctuation">.</span>length
      <span class="token keyword">const</span> u8arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFA\u521D\u59CB\u5316\u4E3A0\u7684\uFF0C\u5305\u542Blength\u4E2A\u5143\u7D20\u7684\u65E0\u7B26\u53F7\u6574\u578B\u6570\u7EC4</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        u8arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> bstr<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span>u8arr<span class="token punctuation">]</span><span class="token punctuation">,</span> filename<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,2),o=[e];function c(l,r,u,i,k,b){return a(),s("div",null,o)}var _=n(t,[["render",c]]);export{d as __pageData,_ as default};
