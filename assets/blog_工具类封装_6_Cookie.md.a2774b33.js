import{_ as n,c as s,o as a,e as p}from"./app.437044c9.js";const d='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/\u5DE5\u5177\u7C7B\u5C01\u88C5/6_Cookie.md","lastUpdated":1659520307000}',t={},e=p(`<div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5B50cookie</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">SubCookieUtil</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u83B7\u53D6\u5B50cookie
   * @param {String} name cookie\u540D\u79F0
   * @param {*} subName \u5B50cookie\u540D\u79F0
   * @returns
   */</span>
  <span class="token keyword">static</span> <span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> subName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> subCookies <span class="token operator">=</span> SubCookieUtil<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">return</span> subCookies <span class="token operator">?</span> subCookies<span class="token punctuation">[</span>subName<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u83B7\u53D6cookie
   * @param {*} name cookie\u540D\u79F0
   * @returns {Object} \u6240\u6709\u7684\u5B50cookie
   */</span>
  <span class="token keyword">static</span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cookieName <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span>
    <span class="token keyword">const</span> cookieStart <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>cookieName<span class="token punctuation">)</span>
    <span class="token keyword">let</span> cookieValue <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> cookieEnd
    <span class="token keyword">let</span> subCookies
    <span class="token keyword">let</span> parts
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cookieStart <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cookieEnd <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">,</span> cookieStart<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cookieEnd <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cookieEnd <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span>length
      <span class="token punctuation">}</span>
      cookieValue <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>cookieStart <span class="token operator">+</span> cookieName<span class="token punctuation">.</span>length<span class="token punctuation">,</span> cookieEnd<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cookieValue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        subCookies <span class="token operator">=</span> cookieValue<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> subCookies<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          parts <span class="token operator">=</span> subCookies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span>
          result<span class="token punctuation">[</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u5728cookie\u4E2D\u5B58\u5165\u5B50cookie
   * @param {*} name cookie\u540D\u79F0
   * @param {*} subName \u5B50cookie\u540D\u79F0
   * @param {*} value  \u5B50cookie\u503C
   * @param {Object} options \u4F20\u4ED6\u7684cookie\u5176\u4ED6\u53C2\u6570 \u5982\u4E0B
   * options: {
   * expires: \u8FC7\u671F\u65F6\u95F4
   * path: \u8DEF\u5F84
   * domain: \u57DF
   * secure: \u5B89\u5168\u6807\u5FD7
   * }
   */</span>
  <span class="token keyword">static</span> <span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> subName<span class="token punctuation">,</span> value<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> subCookies <span class="token operator">=</span> SubCookieUtil<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    subCookies<span class="token punctuation">[</span>subName<span class="token punctuation">]</span> <span class="token operator">=</span> value
    SubCookieUtil<span class="token punctuation">.</span><span class="token function">setAll</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> subCookies<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   *
   * @param {*} name
   * @param {*} subCookies
   * @param {Object} options \u4F20\u4ED6\u7684cookie\u5176\u4ED6\u53C2\u6570 \u5982\u4E0B
   * options: {
   * expires: \u8FC7\u671F\u65F6\u95F4
   * path: \u8DEF\u5F84
   * domain: \u57DF
   * secure: \u5B89\u5168\u6807\u5FD7
   * }
   */</span>
  <span class="token keyword">static</span> <span class="token function">setAll</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> subCookies<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> expires<span class="token punctuation">,</span> path<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> secure <span class="token punctuation">}</span> <span class="token operator">=</span> options
    <span class="token keyword">let</span> cookieText <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span>
    <span class="token keyword">const</span> subCookieParts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> subName <span class="token keyword">in</span> subCookies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>subName<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>subCookies<span class="token punctuation">,</span> subName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        subCookieParts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>subName<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>subCookies<span class="token punctuation">[</span>subName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>subCookieParts<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cookieText <span class="token operator">+=</span> subCookieParts<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>expires <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cookieText <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">; expires=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>expires<span class="token punctuation">.</span><span class="token function">toGMTString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      cookieText <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">; expires=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toGMTString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cookieText <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">; path=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>domain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cookieText <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">; domain=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>domain<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>secure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cookieText <span class="token operator">+=</span> <span class="token string">&#39;; secure&#39;</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cookieText
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u5220\u9664\u5B50cookie
   * @param {*} name cookie
   * @param {*} subName \u5B50cookie\u540D\u79F0
   * @param {Object} options \u4F20\u4ED6\u7684cookie\u5176\u4ED6\u53C2\u6570 \u5982\u4E0B
   * options: {
   * expires: \u8FC7\u671F\u65F6\u95F4
   * path: \u8DEF\u5F84
   * domain: \u57DF
   * secure: \u5B89\u5168\u6807\u5FD7
   * }
   */</span>
  <span class="token keyword">static</span> <span class="token function">unset</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> subName<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> subCookies <span class="token operator">=</span> SubCookieUtil<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>subCookies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">delete</span> subCookies<span class="token punctuation">[</span>subName<span class="token punctuation">]</span> <span class="token comment">// \u5220\u9664</span>
      SubCookieUtil<span class="token punctuation">.</span><span class="token function">setAll</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> subCookies<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u5220\u9664cookie
   * @param {*} name
   * @param {Object} options \u4F20\u4ED6\u7684cookie\u5176\u4ED6\u53C2\u6570 \u5982\u4E0B
   * options: {
   * expires: \u8FC7\u671F\u65F6\u95F4
   * path: \u8DEF\u5F84
   * domain: \u57DF
   * secure: \u5B89\u5168\u6807\u5FD7
   * }
   */</span>
  <span class="token keyword">static</span> <span class="token function">unsetAll</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    SubCookieUtil<span class="token punctuation">.</span><span class="token function">setAll</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br></div></div>`,1),o=[e];function c(l,u,i,r,k,b){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
