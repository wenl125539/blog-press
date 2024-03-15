import{_ as n,c as s,o as a,e as p}from"./app.f182fb68.js";const d='{"title":"viper","description":"","frontmatter":{},"headers":[{"level":2,"title":"viper","slug":"viper"},{"level":3,"title":"\u7B80\u5355\u4F7F\u7528\u6848\u4F8B","slug":"\u7B80\u5355\u4F7F\u7528\u6848\u4F8B"},{"level":3,"title":"\u914D\u7F6E\u9879","slug":"\u914D\u7F6E\u9879"},{"level":3,"title":"end","slug":"end"}],"relativePath":"go/01_gin/00_viper.md","lastUpdated":1699952344000}',t={},e=p(`<h2 id="viper" tabindex="-1">viper</h2><blockquote><p>\u914D\u7F6E\u7BA1\u7406\u5DE5\u5177\uFF0C\u63D0\u4F9B\u4E86\u4E00\u79CD\u7B80\u5355\u800C\u7075\u6D3B\u7684\u65B9\u5F0F\u6765\u8BFB\u53D6\u3001\u89E3\u6790\u548C\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u3002</p></blockquote><h3 id="\u7B80\u5355\u4F7F\u7528\u6848\u4F8B" tabindex="-1">\u7B80\u5355\u4F7F\u7528\u6848\u4F8B</h3><ol><li>\u5B89\u88C5\u4F9D\u8D56</li></ol><div class="language-bash line-numbers-mode"><pre><code>go get github.com/spf13/viper
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u521B\u5EFA\u4E00\u4E2A config.yaml \u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-yaml line-numbers-mode"><pre><code><span class="token key atrule">app</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> MyApp
  <span class="token key atrule">version</span><span class="token punctuation">:</span> 1.0.0
<span class="token key atrule">database</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> password123

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3"><li>\u4F7F\u7528viper\u8BFB\u53D6\u6587\u4EF6\u4EE5\u53CA\u4F7F\u7528\u5176\u4E2D\u7684\u503C</li></ol><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/spf13/viper&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6\u540D\u548C\u8DEF\u5F84</span>
	viper<span class="token punctuation">.</span><span class="token function">SetConfigName</span><span class="token punctuation">(</span><span class="token string">&quot;config&quot;</span><span class="token punctuation">)</span>
	viper<span class="token punctuation">.</span><span class="token function">SetConfigType</span><span class="token punctuation">(</span><span class="token string">&quot;yaml&quot;</span><span class="token punctuation">)</span>
	viper<span class="token punctuation">.</span><span class="token function">AddConfigPath</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
	
	<span class="token comment">// \u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6</span>
	err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u65E0\u6CD5\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// \u83B7\u53D6\u914D\u7F6E\u9879\u7684\u503C</span>
	appName <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;app.name&quot;</span><span class="token punctuation">)</span>
	appVersion <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;app.version&quot;</span><span class="token punctuation">)</span>
	dbHost <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;database.host&quot;</span><span class="token punctuation">)</span>
	dbPort <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetInt</span><span class="token punctuation">(</span><span class="token string">&quot;database.port&quot;</span><span class="token punctuation">)</span>
	dbUsername <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;database.username&quot;</span><span class="token punctuation">)</span>
	dbPassword <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;database.password&quot;</span><span class="token punctuation">)</span>
	
	<span class="token comment">// \u4F7F\u7528\u914D\u7F6E\u9879\u7684\u503C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E94\u7528\u540D\u79F0: %s\\n&quot;</span><span class="token punctuation">,</span> appName<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E94\u7528\u7248\u672C: %s\\n&quot;</span><span class="token punctuation">,</span> appVersion<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u5E93\u4E3B\u673A: %s\\n&quot;</span><span class="token punctuation">,</span> dbHost<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u5E93\u7AEF\u53E3: %d\\n&quot;</span><span class="token punctuation">,</span> dbPort<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u5E93\u7528\u6237\u540D: %s\\n&quot;</span><span class="token punctuation">,</span> dbUsername<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u5E93\u5BC6\u7801: %s\\n&quot;</span><span class="token punctuation">,</span> dbPassword<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="\u914D\u7F6E\u9879" tabindex="-1">\u914D\u7F6E\u9879</h3><h4 id="\u628A\u914D\u7F6E\u503C\u8BFB\u5165-viper" tabindex="-1">\u628A\u914D\u7F6E\u503C\u8BFB\u5165 Viper</h4><ul><li><strong>Viper \u652F\u6301\u591A\u79CD\u65B9\u5F0F\u8BFB\u5165\u914D\u7F6E\uFF1A</strong><ul><li><a href="#input1">\u8BBE\u7F6E\u9ED8\u8BA4\u914D\u7F6E\u503C</a></li><li><a href="#input2">\u4ECE\u914D\u7F6E\u6587\u4EF6\u8BFB\u53D6\u914D\u7F6E</a></li><li>\u4ECE\u73AF\u5883\u53D8\u91CF\u8BFB\u53D6\u914D\u7F6E</li><li>\u76D1\u63A7\u5E76\u91CD\u65B0\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6</li><li>\u4ECE io.Reader \u8BFB\u53D6\u914D\u7F6E</li><li>\u4ECE\u547D\u4EE4\u884C\u53C2\u6570\u8BFB\u53D6\u914D\u7F6E</li><li>\u4ECE\u8FDC\u7A0B key/value \u5B58\u50A8\u8BFB\u53D6\u914D\u7F6E</li></ul></li></ul><h3 id="input1">\u8BBE\u7F6E\u9ED8\u8BA4\u914D\u7F6E\u503C</h3><blockquote><p>Viper \u652F\u6301\u4F7F\u7528 viper.SetDefault(key, value) \u4E3A key \u8BBE\u7F6E\u9ED8\u8BA4\u503C value\uFF0C\u5728\u6CA1\u6709\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u3001\u73AF\u5883\u53D8\u91CF\u3001 <code>\u8FDC\u7A0B\u914D\u7F6E\u6216\u547D\u4EE4\u884C\u6807\u5FD7\u8BBE\u7F6E key \u6240\u5BF9\u5E94\u503C\u7684\u60C5\u51B5\u4E0B</code></p></blockquote><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/spf13/viper&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u914D\u7F6E</span>
  
	viper<span class="token punctuation">.</span><span class="token function">SetDefault</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wenl&quot;</span><span class="token punctuation">)</span>
	viper<span class="token punctuation">.</span><span class="token function">SetDefault</span><span class="token punctuation">(</span><span class="token string">&quot;server&quot;</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;ip&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;port&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;8080&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// \u8BFB\u53D6\u914D\u7F6E\u503C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;username: %s\\n&quot;</span><span class="token punctuation">,</span> viper<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// key \u4E0D\u533A\u5206\u5927\u5C0F\u5199</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;server: %+v\\n&quot;</span><span class="token punctuation">,</span> viper<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="input2">\u4ECE\u914D\u7F6E\u6587\u4EF6\u8BFB\u53D6\u914D\u7F6E</h3><blockquote><p>**Viper \u53EF\u4EE5\u641C\u7D22\u591A\u4E2A\u8DEF\u5F84\uFF0C\u4F46\u76EE\u524D\u5355\u4E2A Viper \u5B9E\u4F8B<code>\u53EA\u652F\u6301\u5355\u4E2A\u914D\u7F6E\u6587\u4EF6</code>\u3002Viper <code>\u4E0D\u4F1A\u9ED8\u8BA4\u914D\u7F6E\u4EFB\u4F55\u641C\u7D22\u8DEF\u5F84</code>\uFF0C\u5C06\u9ED8\u8BA4\u51B3\u5B9A\u7559\u7ED9\u5E94\u7528\u7A0B\u5E8F\u3002</p></blockquote><ul><li><p>\u5F53\u4F7F\u7528<code>viper.SetConfigFile()</code>\u51FD\u6570\u6765\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u65F6\uFF0C\u5982\u679C\u914D\u7F6E\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u6CA1\u6709\u5305\u542B\u6269\u5C55\u540D\uFF08\u4F8B\u5982.json\u3001.yaml\u7B49\uFF09\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u4F7F\u7528<code>viper.SetConfigType()</code>\u51FD\u6570\u6765\u663E\u5F0F\u5730\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u7684\u683C\u5F0F\u3002\u8FD9\u6837viper\u624D\u80FD\u6B63\u786E\u5730\u89E3\u6790\u914D\u7F6E\u6587\u4EF6\u5E76\u52A0\u8F7D\u76F8\u5E94\u7684\u914D\u7F6E\u4FE1\u606F\u3002</p></li><li><p>\u901A\u8FC7 <code>viper.AddConfigPath() </code>\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u7684\u641C\u7D22\u8DEF\u5F84\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u591A\u6B21\u8C03\u7528\uFF0C\u6765\u8BBE\u7F6E\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6\u641C\u7D22\u8DEF\u5F84\u3002\u7136\u540E\u901A\u8FC7 <code>viper.SetConfigName() </code>\u6307\u5B9A\u4E0D\u5E26\u6269\u5C55\u540D\u7684\u914D\u7F6E\u6587\u4EF6\uFF0CViper \u4F1A\u6839\u636E\u6240\u6DFB\u52A0\u7684\u8DEF\u5F84\u987A\u5E8F\u67E5\u627E\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982\u679C\u627E\u5230\u5C31\u505C\u6B62\u67E5\u627E\u3002</p></li></ul><div class="language-go line-numbers-mode"><pre><code>\u251C\u2500 main<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token operator">|</span>
<span class="token operator">|</span>\u2500config
    \u2514\u2500\u2500config <span class="token comment">//\u914D\u7F6E\u6587\u4EF6</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/spf13/viper&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u65B9\u5F0F1 \u5206\u5F00\u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6\u540D\u548C\u8DEF\u5F84</span>
	viper<span class="token punctuation">.</span><span class="token function">SetConfigName</span><span class="token punctuation">(</span><span class="token string">&quot;config&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6</span>
	viper<span class="token punctuation">.</span><span class="token function">SetConfigType</span><span class="token punctuation">(</span><span class="token string">&quot;yaml&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u5982\u679C\u914D\u7F6E\u6587\u4EF6\u540D\u4E2D\u6CA1\u6709\u6269\u5C55\u540D\uFF0C\u5219\u9700\u8981\u663E\u5F0F\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u7684\u683C\u5F0F  </span>
    viper<span class="token punctuation">.</span><span class="token function">AddConfigPath</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u628A\u5F53\u524D\u76EE\u5F55\u52A0\u5165\u5230\u914D\u7F6E\u6587\u4EF6\u7684\u641C\u7D22\u8DEF\u5F84\u4E2D  </span>
	viper<span class="token punctuation">.</span><span class="token function">AddConfigPath</span><span class="token punctuation">(</span><span class="token string">&quot;./config&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A</span>
  <span class="token comment">// ====================================</span>
  <span class="token comment">// \u65B9\u6CD52 </span>
  viper<span class="token punctuation">.</span><span class="token function">SetConfigName</span><span class="token punctuation">(</span><span class="token string">&quot;./config/config&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u5168\u8DEF\u5F84</span>
  viper<span class="token punctuation">.</span><span class="token function">SetConfigType</span><span class="token punctuation">(</span><span class="token string">&quot;yaml&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u5982\u679C\u914D\u7F6E\u6587\u4EF6\u540D\u4E2D\u6CA1\u6709\u6269\u5C55\u540D\uFF0C\u5219\u9700\u8981\u663E\u5F0F\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u7684\u683C\u5F0F </span>

	<span class="token comment">// \u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6</span>
	err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u65E0\u6CD5\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
  <span class="token comment">// \u6210\u529F\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="end" tabindex="-1">end</h3><h3 id="input3">\u6839\u636E\u8FD0\u884C\u73AF\u5883\u83B7\u53D6\u5BF9\u5E94\u7684\u914D\u7F6E\u6587\u4EF6</h3>`,22),o=[e];function c(l,u,i,r,k,b){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};
