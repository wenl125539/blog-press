import{_ as n,c as s,o as a,e as p}from"./app.f182fb68.js";const d='{"title":"pm2\u7684\u4ECB\u7ECD\u548C\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"pm2\u7684\u4ECB\u7ECD\u548C\u4F7F\u7528","slug":"pm2\u7684\u4ECB\u7ECD\u548C\u4F7F\u7528"},{"level":2,"title":"\u4EC0\u4E48\u662FPM2","slug":"\u4EC0\u4E48\u662Fpm2"}],"relativePath":"blog/09_\u670D\u52A1\u5668/02_pm2.md","lastUpdated":1657272567000}',e={},t=p(`<h2 id="pm2\u7684\u4ECB\u7ECD\u548C\u4F7F\u7528" tabindex="-1">pm2\u7684\u4ECB\u7ECD\u548C\u4F7F\u7528</h2><div class="language-js line-numbers-mode"><pre><code>\u5B89\u88C5
npm install <span class="token operator">-</span>g pm2

\u4F7F\u7528
pm2 start app<span class="token punctuation">.</span>js <span class="token operator">-</span>i <span class="token number">4</span> 
# \u540E\u53F0\u8FD0\u884Cpm2\uFF0C\u542F\u52A8<span class="token number">4</span>\u4E2Aapp<span class="token punctuation">.</span>js  
# \u4E5F\u53EF\u4EE5\u628A<span class="token string">&#39;max&#39;</span> \u53C2\u6570\u4F20\u9012\u7ED9 start    
# \u6B63\u786E\u7684\u8FDB\u7A0B\u6570\u76EE\u4F9D\u8D56\u4E8ECpu\u7684\u6838\u5FC3\u6570\u76EE
\u5E38\u7528\u547D\u4EE4
 npm install pm2 <span class="token operator">-</span>g # \u547D\u4EE4\u884C\u5B89\u88C5 pm2
 pm2 start app<span class="token punctuation">.</span>js <span class="token operator">-</span>i <span class="token number">4</span> #\u540E\u53F0\u8FD0\u884Cpm2\uFF0C\u542F\u52A8<span class="token number">4</span>\u4E2Aapp<span class="token punctuation">.</span>js
               # \u4E5F\u53EF\u4EE5\u628A<span class="token string">&quot;max&quot;</span> \u53C2\u6570\u4F20\u9012\u7ED9 start
               # \u6B63\u786E\u7684\u8FDB\u7A0B\u6570\u76EE\u4F9D\u8D56\u4E8ECpu\u7684\u6838\u5FC3\u6570\u76EE
 pm2 start app<span class="token punctuation">.</span>js <span class="token operator">--</span>name my<span class="token operator">-</span>api # \u547D\u540D\u8FDB\u7A0B
 pm2 list # \u663E\u793A\u6240\u6709\u8FDB\u7A0B\u72B6\u6001
 pm2 monit # \u76D1\u89C6\u6240\u6709\u8FDB\u7A0B
 pm2 logs # \u663E\u793A\u6240\u6709\u8FDB\u7A0B\u65E5\u5FD7
 pm2 stop all # \u505C\u6B62\u6240\u6709\u8FDB\u7A0B
 pm2 restart all # \u91CD\u542F\u6240\u6709\u8FDB\u7A0B
 pm2 reload all # <span class="token number">0</span><span class="token function">\u79D2\u505C\u673A\u91CD\u8F7D\u8FDB\u7A0B</span> <span class="token punctuation">(</span>\u7528\u4E8E <span class="token constant">NETWORKED</span> \u8FDB\u7A0B<span class="token punctuation">)</span>
 pm2 stop <span class="token number">0</span> # \u505C\u6B62\u6307\u5B9A\u7684\u8FDB\u7A0B
 pm2 restart <span class="token number">0</span> # \u91CD\u542F\u6307\u5B9A\u7684\u8FDB\u7A0B
 pm2 startup # \u4EA7\u751F init \u811A\u672C \u4FDD\u6301\u8FDB\u7A0B\u6D3B\u7740
 pm2 web # \u8FD0\u884C\u5065\u58EE\u7684 computer <span class="token constant">API</span> <span class="token function">endpoint</span> <span class="token punctuation">(</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">9615</span><span class="token punctuation">)</span>
 pm2 <span class="token keyword">delete</span> <span class="token number">0</span> # \u6740\u6B7B\u6307\u5B9A\u7684\u8FDB\u7A0B
 pm2 <span class="token keyword">delete</span> all # \u6740\u6B7B\u5168\u90E8\u8FDB\u7A0B

\u8FD0\u884C\u8FDB\u7A0B\u7684\u4E0D\u540C\u65B9\u5F0F
 pm2 start app<span class="token punctuation">.</span>js <span class="token operator">-</span>i max # \u6839\u636E\u6709\u6548<span class="token constant">CPU</span>\u6570\u76EE\u542F\u52A8\u6700\u5927\u8FDB\u7A0B\u6570\u76EE
 pm2 start app<span class="token punctuation">.</span>js <span class="token operator">-</span>i <span class="token number">3</span> # \u542F\u52A8<span class="token number">3</span>\u4E2A\u8FDB\u7A0B
 pm2 start app<span class="token punctuation">.</span>js <span class="token operator">-</span>x #\u7528fork\u6A21\u5F0F\u542F\u52A8 app<span class="token punctuation">.</span>js \u800C\u4E0D\u662F\u4F7F\u7528 cluster
 pm2 start app<span class="token punctuation">.</span>js <span class="token operator">-</span>x <span class="token operator">--</span> <span class="token operator">-</span>a <span class="token number">23</span> # \u7528fork\u6A21\u5F0F\u542F\u52A8 app<span class="token punctuation">.</span>js <span class="token function">\u5E76\u4E14\u4F20\u9012\u53C2\u6570</span> <span class="token punctuation">(</span><span class="token operator">-</span>a <span class="token number">23</span><span class="token punctuation">)</span>
 pm2 start app<span class="token punctuation">.</span>js <span class="token operator">--</span>name serverone # \u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B\u5E76\u628A\u5B83\u547D\u540D\u4E3A serverone
 pm2 stop serverone # \u505C\u6B62 serverone \u8FDB\u7A0B
 pm2 start app<span class="token punctuation">.</span>json # \u542F\u52A8\u8FDB\u7A0B<span class="token punctuation">,</span> \u5728 app<span class="token punctuation">.</span>json\u91CC\u8BBE\u7F6E\u9009\u9879
 pm2 start app<span class="token punctuation">.</span>js <span class="token operator">-</span>i max <span class="token operator">--</span> <span class="token operator">-</span>a <span class="token number">23</span> #\u5728<span class="token operator">--</span>\u4E4B\u540E\u7ED9 app<span class="token punctuation">.</span>js \u4F20\u9012\u53C2\u6570
 pm2 start app<span class="token punctuation">.</span>js <span class="token operator">-</span>i max <span class="token operator">-</span>e err<span class="token punctuation">.</span>log <span class="token operator">-</span>o out<span class="token punctuation">.</span>log # \u542F\u52A8 \u5E76 \u751F\u6210\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="\u4EC0\u4E48\u662Fpm2" tabindex="-1">\u4EC0\u4E48\u662FPM2</h2><p>\u4E0D\u4F5C\u4ECB\u7ECD\u4E86 <a href="https://www.baidu.com/s?ie=UTF-8&amp;wd=pm2" target="_blank" rel="noopener noreferrer">PM2</a></p><blockquote><p>\u7406\u89E3 \u4F7F\u7528pm2\u6765\u7BA1\u7406\u9879\u76EE\u7684\u542F\u52A8 \u53EF\u4EE5\u76D1\u63A7\u5230\u9879\u76EE\u7684</p></blockquote>`,5),o=[t];function r(l,c,u,m,i,b){return a(),s("div",null,o)}var _=n(e,[["render",r]]);export{d as __pageData,_ as default};
