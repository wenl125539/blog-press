import{_ as n,c as s,o as a,e as p}from"./app.f182fb68.js";const d='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/\u5DE5\u5177\u7C7B\u5C01\u88C5/3_Storage.md","lastUpdated":1665491640000}',e={},t=p(`<div class="language-js line-numbers-mode"><pre><code><span class="token comment">/*
 * localStorage \u4E00\u4E2A\u6709\u8FC7\u671F\u7279\u6027\u7684localStorage\u7C7B
 */</span>

<span class="token keyword">class</span> <span class="token class-name">Storage</span> <span class="token punctuation">{</span>
  <span class="token comment">/*
   * \u83B7\u53D6\u7F13\u5B58
   * @param { String } key \u672C\u5730\u7F13\u5B58\u4E2D\u7684\u6307\u5B9A\u7684 key
   */</span>
  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token comment">// \u5DF2\u8FC7\u671F</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">validExpire</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>writeTime<span class="token punctuation">,</span> data<span class="token punctuation">.</span>durationTime<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>data
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u5C06\u6570\u636E\u5B58\u50A8\u5728\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 key \u4E2D\uFF0C\u4F1A\u8986\u76D6\u6389\u539F\u6765\u8BE5 key \u5BF9\u5E94\u7684\u5185\u5BB9
   * @param { String } key \u672C\u5730\u7F13\u5B58\u4E2D\u7684\u6307\u5B9A\u7684 key
   * @param { Any } data \u9700\u8981\u5B58\u50A8\u7684\u5185\u5BB9\uFF0C\u53EA\u652F\u6301\u539F\u751F\u7C7B\u578B\u3001\u53CA\u80FD\u591F\u901A\u8FC7 JSON.stringify \u5E8F\u5217\u5316\u7684\u5BF9\u8C61
   * @param { Number } duraction \u6709\u6548\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2
   */</span>
  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> data<span class="token punctuation">,</span> duraction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span> <span class="token comment">// \u5B58\u50A8\u6570\u636E</span>
      <span class="token literal-property property">writeTime</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u5199\u5165\u65F6\u95F4</span>
      <span class="token literal-property property">durationTime</span><span class="token operator">:</span> duraction <span class="token comment">// \u6709\u6548\u65F6\u957F \u5355\u4F4D\u6BEB\u79D2</span>
    <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u4ECE\u672C\u5730\u7F13\u5B58\u4E2D\u5F02\u6B65\u79FB\u9664\u6307\u5B9A key
   * @param { String } key \u672C\u5730\u7F13\u5B58\u4E2D\u7684\u6307\u5B9A\u7684 key
   */</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*
   * \u6E05\u7406\u672C\u5730\u6570\u636E\u7F13\u5B58
   */</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u9A8C\u8BC1\u662F\u5426\u8FC7\u671F
   * @param { Number } nowTime \u5F53\u524D\u65F6\u95F4
   * @param { Number } writeTime \u7F13\u5B58\u5199\u5165\u65F6\u95F4
   * @param { Number } expireTime \u7F13\u5B58\u6709\u6548\u65F6\u957F
   */</span>
  <span class="token function">validExpire</span><span class="token punctuation">(</span><span class="token parameter">nowTime<span class="token punctuation">,</span> writeTime<span class="token punctuation">,</span> durationTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>durationTime <span class="token operator">&amp;&amp;</span> durationTime <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nowTime <span class="token operator">&gt;</span> writeTime <span class="token operator">+</span> durationTime
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Storage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/*
 * localStorage \u4E00\u4E2A\u6709\u8FC7\u671F\u7279\u6027\u7684localStorage\u7C7B
 */</span>

<span class="token keyword">class</span> <span class="token class-name">Storage</span><span class="token punctuation">{</span>
  <span class="token comment">/*
   * \u83B7\u53D6\u7F13\u5B58
   * @param { String } key \u672C\u5730\u7F13\u5B58\u4E2D\u7684\u6307\u5B9A\u7684 key
   */</span>
  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span>string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> _data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token comment">// \u5DF2\u8FC7\u671F</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">validExpire</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> _data<span class="token operator">?.</span>writeTime<span class="token punctuation">,</span> _data<span class="token punctuation">.</span>durationTime<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> _data<span class="token punctuation">.</span>data
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u5C06\u6570\u636E\u5B58\u50A8\u5728\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 key \u4E2D\uFF0C\u4F1A\u8986\u76D6\u6389\u539F\u6765\u8BE5 key \u5BF9\u5E94\u7684\u5185\u5BB9
   * @param { String } key \u672C\u5730\u7F13\u5B58\u4E2D\u7684\u6307\u5B9A\u7684 key
   * @param { Any } data \u9700\u8981\u5B58\u50A8\u7684\u5185\u5BB9\uFF0C\u53EA\u652F\u6301\u539F\u751F\u7C7B\u578B\u3001\u53CA\u80FD\u591F\u901A\u8FC7 JSON.stringify \u5E8F\u5217\u5316\u7684\u5BF9\u8C61
   * @param { Number } duraction \u6709\u6548\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2
   */</span>
  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span>string<span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span>any<span class="token punctuation">,</span> duraction<span class="token operator">?</span><span class="token operator">:</span>number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span> <span class="token comment">// \u5B58\u50A8\u6570\u636E</span>
      <span class="token literal-property property">writeTime</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u5199\u5165\u65F6\u95F4</span>
      <span class="token literal-property property">durationTime</span><span class="token operator">:</span> duraction <span class="token comment">// \u6709\u6548\u65F6\u957F \u5355\u4F4D\u6BEB\u79D2</span>
    <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u4ECE\u672C\u5730\u7F13\u5B58\u4E2D\u5F02\u6B65\u79FB\u9664\u6307\u5B9A key
   * @param { String } key \u672C\u5730\u7F13\u5B58\u4E2D\u7684\u6307\u5B9A\u7684 key
   */</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*
   * \u6E05\u7406\u672C\u5730\u6570\u636E\u7F13\u5B58
   */</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u9A8C\u8BC1\u662F\u5426\u8FC7\u671F
   * @param { Number } nowTime \u5F53\u524D\u65F6\u95F4
   * @param { Number } writeTime \u7F13\u5B58\u5199\u5165\u65F6\u95F4
   * @param { Number } expireTime \u7F13\u5B58\u6709\u6548\u65F6\u957F
   */</span>
  <span class="token function">validExpire</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">nowTime</span><span class="token operator">:</span>number<span class="token punctuation">,</span> <span class="token literal-property property">writeTime</span><span class="token operator">:</span>number<span class="token punctuation">,</span> <span class="token literal-property property">durationTime</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>durationTime <span class="token operator">&amp;&amp;</span> durationTime <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nowTime <span class="token operator">&gt;</span> writeTime <span class="token operator">+</span> durationTime
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Storage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div>`,2),o=[t];function c(l,r,u,i,k,b){return a(),s("div",null,o)}var y=n(e,[["render",c]]);export{d as __pageData,y as default};
