import{_ as n,c as s,o as a,e as p}from"./app.a5b2d336.js";const d='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/\u5DE5\u5177\u7C7B\u5C01\u88C5/1_\u6570\u636E\u6821\u9A8C.md","lastUpdated":1659431111000}',e={},t=p(`<div class="language-js line-numbers-mode"><pre><code><span class="token comment">// valid.js</span>
<span class="token comment">/*
* \u9A8C\u8BC1\u624B\u673A\u53F7
* */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">checkPhone</span><span class="token punctuation">(</span><span class="token parameter">phone</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[1-9]\\d{9}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
* \u9A8C\u8BC1\u5BC6\u7801\u5F3A\u5EA6
* 6-16\u4F4D\uFF0C\u5305\u62EC\u81F3\u5C111\u4E2A\u5B57\u6BCD\uFF0C1\u4E2A\u6570\u5B57
* */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token parameter">password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.*(?=.{6,16})(?=.*\\d)(?=.*[A-Za-z]).*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
* \u9A8C\u8BC1\u662F\u5426\u6570\u7EC4
* */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isArray</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;Array&#39;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,1),c=[t];function o(l,r,u,i,k,b){return a(),s("div",null,c)}var _=n(e,[["render",o]]);export{d as __pageData,_ as default};
