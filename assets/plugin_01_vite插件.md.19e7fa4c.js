import{_ as n,c as s,o as a,e as p}from"./app.1db836fe.js";var t="/blog-press/assets/image.be1f073f.png";const d='{"title":"\u76EE\u5F55\u7ED3\u6784","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784"},{"level":3,"title":"\u56FE\u7247\u538B\u7F29 vite-plugin-imagemin","slug":"\u56FE\u7247\u538B\u7F29-vite-plugin-imagemin"},{"level":3,"title":"\u5F00\u53D1\u73AF\u5883\u8C03\u8BD5 vite-plugin-vue-devtools","slug":"\u5F00\u53D1\u73AF\u5883\u8C03\u8BD5-vite-plugin-vue-devtools"},{"level":3,"title":"\u81EA\u52A8\u5BFC\u5165api unplugin-auto-import/vite","slug":"\u81EA\u52A8\u5BFC\u5165api-unplugin-auto-import-vite"},{"level":3,"title":"\u81EA\u52A8\u5BFC\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6 unplugin-vue-components","slug":"\u81EA\u52A8\u5BFC\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6-unplugin-vue-components"},{"level":3,"title":"\u751F\u6210svg\u96EA\u78A7\u56FE vite-plugin-svg-icons","slug":"\u751F\u6210svg\u96EA\u78A7\u56FE-vite-plugin-svg-icons"},{"level":3,"title":"log\u6253\u5370\u53EF\u8DF3\u8F6C unplugin-turbo-console","slug":"log\u6253\u5370\u53EF\u8DF3\u8F6C-unplugin-turbo-console"},{"level":3,"title":"\u6784\u5EFA\u65F6\u538B\u7F29\u8D44\u6E90\u63D2\u4EF6 vite-plugin-compression","slug":"\u6784\u5EFA\u65F6\u538B\u7F29\u8D44\u6E90\u63D2\u4EF6-vite-plugin-compression"},{"level":3,"title":"\u6784\u5EFA\u8FDB\u5EA6\u6761 vite-plugin-progress","slug":"\u6784\u5EFA\u8FDB\u5EA6\u6761-vite-plugin-progress"},{"level":3,"title":"\u62C6\u5206\u7A97\u683C\u63D2\u4EF6 Splitpanes","slug":"\u62C6\u5206\u7A97\u683C\u63D2\u4EF6-splitpanes"}],"relativePath":"plugin/01_vite\u63D2\u4EF6.md","lastUpdated":1736912583000}',e={},o=p('<h3 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784</h3><p><img src="'+t+`" alt=""></p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// vite.config.ts</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> createVitePlugins <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vite/plugins&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> command<span class="token punctuation">,</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> ConfigEnv<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">UserConfig</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token function">createVitePlugins</span><span class="token punctuation">(</span>env<span class="token punctuation">,</span> isBuild<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u56FE\u7247\u538B\u7F29-vite-plugin-imagemin" tabindex="-1">\u56FE\u7247\u538B\u7F29 vite-plugin-imagemin</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/*
 * @Date: 2024-10-13 15:08:32
 * @LastEditors: wenl125539 49814642+wenl125539@users.noreply.github.com
 * @LastEditTime: 2024-10-13 15:38:31
 * @FilePath: /vite/plugins/imagemin.ts
 * @Description: \u56FE\u7247\u538B\u7F29
 */</span>
<span class="token keyword">import</span> Imagemin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-imagemin&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ImageminPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
	<span class="token function">Imagemin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token comment">// // gif\u56FE\u7247\u538B\u7F29</span>
		<span class="token literal-property property">gifsicle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u9009\u62E91\u52303\u4E4B\u95F4\u7684\u4F18\u5316\u7EA7\u522B</span>
			<span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// \u9694\u884C\u626B\u63CFgif\u8FDB\u884C\u6E10\u8FDB\u5F0F\u6E32\u67D3</span>
			<span class="token literal-property property">interlaced</span><span class="token operator">:</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// png</span>
		<span class="token literal-property property">optipng</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u9009\u62E90\u52307\u4E4B\u95F4\u7684\u4F18\u5316\u7EA7\u522B</span>
			<span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">7</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// jpeg</span>
		<span class="token literal-property property">mozjpeg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u538B\u7F29\u8D28\u91CF\uFF0C\u8303\u56F4\u4ECE0(\u6700\u5DEE)\u5230100(\u6700\u4F73)</span>
			<span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">20</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// png</span>
		<span class="token literal-property property">pngquant</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// Min\u548Cmax\u662F\u4ECB\u4E8E0(\u6700\u5DEE)\u52301(\u6700\u4F73)\u4E4B\u95F4\u7684\u6570\u5B57\uFF0C\u7C7B\u4F3C\u4E8EJPEG\u3002\u8FBE\u5230\u6216\u8D85\u8FC7\u6700\u9AD8\u8D28\u91CF\u6240\u9700\u7684\u6700\u5C11\u91CF\u7684\u989C\u8272\u3002\u5982\u679C\u8F6C\u6362\u5BFC\u81F4\u8D28\u91CF\u4F4E\u4E8E\u6700\u4F4E\u8D28\u91CF\uFF0C\u56FE\u50CF\u5C06\u4E0D\u4F1A\u88AB\u4FDD\u5B58</span>
			<span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u538B\u7F29\u901F\u5EA6\uFF0C1(\u5F3A\u529B)\u523011(\u6700\u5FEB)</span>
			<span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">4</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// svg\u538B\u7F29</span>
		<span class="token literal-property property">svgo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;removeViewBox&#39;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;removeEmptyAttrs&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="\u5F00\u53D1\u73AF\u5883\u8C03\u8BD5-vite-plugin-vue-devtools" tabindex="-1">\u5F00\u53D1\u73AF\u5883\u8C03\u8BD5 vite-plugin-vue-devtools</h3><div class="language-js line-numbers-mode"><pre><code>\u76F4\u63A5\u5F15\u5165\u5230vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts vitePlugins\u5373\u53EF
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u81EA\u52A8\u5BFC\u5165api-unplugin-auto-import-vite" tabindex="-1">\u81EA\u52A8\u5BFC\u5165api unplugin-auto-import/vite</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/*
 * @Date: 2024-10-05 19:24:10
 * @LastEditors: wenl125539 49814642+wenl125539@users.noreply.github.com
 * @LastEditTime: 2024-10-10 22:16:46
 * @FilePath: /vite/plugins/auto-import-api.ts
 * @Description: \u6309\u9700\u81EA\u52A8\u5BFC\u5165api
 */</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">AutoImportPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
	<span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token comment">// eslint\u62A5\u9519\u89E3\u51B3</span>
		<span class="token literal-property property">eslintrc</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u9ED8\u8BA4 \`false\` \u9ED8\u8BA4false, \u9700\u8981\u751F\u6210,\u4FEE\u6539\u6587\u4EF6\u7684\u65F6\u5019\u6539\u4E3A true, \u6CA1\u6709\u6587\u4EF6, \u81EA\u52A8\u6309\u9700\u5F15\u5165 eslint \u4F1A\u62A5\u9519</span>
			<span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token comment">// \u9ED8\u8BA4 \`./.eslintrc-auto-import.json\`</span>
			<span class="token literal-property property">filepath</span><span class="token operator">:</span> <span class="token string">&#39;./.eslintrc-auto-import.json&#39;</span>
			<span class="token comment">// filepath: &#39;./.eslintrc-auto-import.mjs&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// \u53EF\u4EE5\u9009\u62E9auto-import.d.ts\u751F\u6210\u7684\u4F4D\u7F6E\uFF0C\u4F7F\u7528ts\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A&#39;src/auto-import.d.ts&#39;</span>
		<span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token string">&#39;./types/auto-import.d.ts&#39;</span><span class="token punctuation">,</span>
		<span class="token comment">// \u81EA\u52A8\u5BFC\u5165\u76EE\u5F55\u4E0B\u7684\u6A21\u5757\u5BFC\u51FA</span>
		<span class="token comment">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u53EA\u626B\u63CF\u76EE\u5F55\u4E0B\u7684\u4E00\u5C42\u6A21\u5757</span>
		<span class="token literal-property property">dirs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/store&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/api&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/hooks&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token comment">// \u8981\u6CE8\u518C\u7684\u5168\u5C40\u5BFC\u5165</span>
		<span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
			<span class="token comment">// &#39;vue-i18n&#39;,</span>
			<span class="token string">&#39;pinia&#39;</span><span class="token punctuation">,</span>
			<span class="token string">&#39;@vueuse/core&#39;</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">radash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;shake&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;assign&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token string-property property">&#39;vue-router&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;useRouter&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;useRoute&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token literal-property property">alova</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;useRequest&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token string-property property">&#39;ant-design-vue&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;App&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token string-property property">&#39;alova/scene-vue&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;useForm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usePagination&#39;</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
		<span class="token comment">// resolvers: []</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="\u81EA\u52A8\u5BFC\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6-unplugin-vue-components" tabindex="-1">\u81EA\u52A8\u5BFC\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6 unplugin-vue-components</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/*
 * @Date: 2024-10-05 19:24:10
 * @LastEditors: wenl125539 49814642+wenl125539@users.noreply.github.com
 * @LastEditTime: 2024-10-06 13:05:42
 * @FilePath: /vite/plugins/auto-import-com.ts
 * @Description: \u6309\u9700\u5BFC\u5165\u7EC4\u4EF6
 */</span>

<span class="token keyword">import</span> AutoImportComponents <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AntDesignVueResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">AutoImportComponentsPlugins</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
	<span class="token function">AutoImportComponents</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token comment">// \u751F\u6210 \`components.d.ts\` \u5168\u5C40\u58F0\u660E</span>
		<span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token string">&#39;./types/components.d.ts&#39;</span><span class="token punctuation">,</span>
		<span class="token comment">// \u7EC4\u4EF6\u7684\u6709\u6548\u6587\u4EF6\u6269\u5C55\u540D</span>
		<span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token comment">// \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u89E3\u6790\u5668</span>
		<span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token function">AntDesignVueResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">importStyle</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// css in js</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="\u751F\u6210svg\u96EA\u78A7\u56FE-vite-plugin-svg-icons" tabindex="-1">\u751F\u6210svg\u96EA\u78A7\u56FE vite-plugin-svg-icons</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/*
 * @Date: 2024-10-05 19:24:10
 * @LastEditors: wenl125539 49814642+wenl125539@users.noreply.github.com
 * @LastEditTime: 2024-10-05 19:36:50
 * @FilePath: /src/router/router-config.ts
 * @Description: \u7528\u4E8E\u751F\u6210 svg \u96EA\u78A7\u56FE
 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createSvgIconsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-svg-icons&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">SvgIconsPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">isBuild</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
	<span class="token function">createSvgIconsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token comment">// \u6307\u5B9A\u9700\u8981\u7F13\u5B58\u7684\u56FE\u6807\u6587\u4EF6\u5939</span>
		<span class="token literal-property property">iconDirs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;src/assets/icons/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token comment">// \u6307\u5B9AsymbolId\u683C\u5F0F</span>
		<span class="token literal-property property">symbolId</span><span class="token operator">:</span> <span class="token string">&#39;icon-[dir]-[name]&#39;</span><span class="token punctuation">,</span>
		<span class="token comment">// \u662F\u5426\u538B\u7F29 svg</span>
		<span class="token literal-property property">svgoOptions</span><span class="token operator">:</span> isBuild
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-vue line-numbers-mode"><pre><code><span class="token comment">&lt;!--
 * @Date: 2024-10-05 19:24:10
 * @LastEditors: wenl125539 49814642+wenl125539@users.noreply.github.com
 * @LastEditTime: 2024-10-05 20:15:58
 * @FilePath: /src/components/svg-icon/index.vue
 * @Description:  svg \u751F\u6210\u56FE\u6807\u7EC4\u4EF6
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
	prefix<span class="token operator">?</span><span class="token operator">:</span> string
	<span class="token literal-property property">name</span><span class="token operator">:</span> string
	color<span class="token operator">?</span><span class="token operator">:</span> string
	className<span class="token operator">?</span><span class="token operator">:</span> string
	size<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> number
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span>defineProps<span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> symbolId <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> className <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>className<span class="token punctuation">)</span>

<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> iconStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">fontSize</span><span class="token operator">:</span>
			props<span class="token punctuation">.</span>size <span class="token operator">&amp;&amp;</span>
			<span class="token punctuation">(</span><span class="token keyword">typeof</span> props<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span>
				<span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
				<span class="token operator">:</span> props<span class="token punctuation">.</span>size<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">)</span>
					<span class="token operator">?</span> props<span class="token punctuation">.</span>size
					<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> iconStyle
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
		<span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>className<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">:style</span>
		<span class="token attr-name">relative</span>
		<span class="token attr-name">h</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[1em]<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">w</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[1em]<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">flex-inline</span>
		<span class="token attr-name">items-center</span>
		<span class="token attr-name">justify-center</span>
		<span class="token attr-name">fill-current</span>
		<span class="token attr-name">leading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[1em]<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">h-1em</span> <span class="token attr-name">w-1em</span> <span class="token attr-name">fill-current</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>symbolId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>props.color<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h3 id="log\u6253\u5370\u53EF\u8DF3\u8F6C-unplugin-turbo-console" tabindex="-1">log\u6253\u5370\u53EF\u8DF3\u8F6C unplugin-turbo-console</h3><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> TurboConsole <span class="token keyword">from</span> <span class="token string">&#39;unplugin-turbo-console/vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">TurboConsolePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
	<span class="token function">TurboConsole</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&#39;\u{1F680}\u{1F680}\u{1F680}\u{1F680}\u{1F680}\u70B9\u51FB\u8DF3\u8F6C\u{1F680}\u{1F680}\u{1F680}\u{1F680}\u{1F680}&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u6784\u5EFA\u65F6\u538B\u7F29\u8D44\u6E90\u63D2\u4EF6-vite-plugin-compression" tabindex="-1">\u6784\u5EFA\u65F6\u538B\u7F29\u8D44\u6E90\u63D2\u4EF6 vite-plugin-compression</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/*
 * @Date: 2024-10-13 15:20:31
 * @LastEditors: wenl125539 49814642+wenl125539@users.noreply.github.com
 * @LastEditTime: 2024-10-13 16:05:12
 * @FilePath: /vite/plugins/compression.ts
 * @Description:\u6784\u5EFA\u65F6\u538B\u7F29\u8D44\u6E90\u63D2\u4EF6
 */</span>
<span class="token keyword">import</span> Compression <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PluginOption <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">CompressionPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">compress</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> compressList <span class="token operator">=</span> compress<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>

	<span class="token keyword">const</span> <span class="token literal-property property">plugins</span><span class="token operator">:</span> PluginOption<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>compressList<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;gzip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
			<span class="token function">Compression</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">&#39;.gz&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">deleteOriginFile</span><span class="token operator">:</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>compressList<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;brotli&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
			<span class="token function">Compression</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">&#39;.br&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">&#39;brotliCompress&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">deleteOriginFile</span><span class="token operator">:</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> plugins
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="\u6784\u5EFA\u8FDB\u5EA6\u6761-vite-plugin-progress" tabindex="-1">\u6784\u5EFA\u8FDB\u5EA6\u6761 vite-plugin-progress</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/*
 * @Date: 2024-10-13 15:27:15
 * @LastEditors: wenl125539 49814642+wenl125539@users.noreply.github.com
 * @LastEditTime: 2024-10-13 15:27:24
 * @FilePath: /vite/plugins/progress.ts
 * @Description:
 */</span>
<span class="token keyword">import</span> Progress <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-progress&#39;</span>
<span class="token keyword">import</span> picocolors <span class="token keyword">from</span> <span class="token string">&#39;picocolors&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ProgressPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
	<span class="token function">Progress</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>picocolors<span class="token punctuation">.</span><span class="token function">green</span><span class="token punctuation">(</span>picocolors<span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token string">&#39;Building&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>picocolors<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span>
			<span class="token string">&#39;[:bar]&#39;</span>
		<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> :percent | Time: :elapseds</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u62C6\u5206\u7A97\u683C\u63D2\u4EF6-splitpanes" tabindex="-1">\u62C6\u5206\u7A97\u683C\u63D2\u4EF6 Splitpanes</h3>`,21),l=[o];function c(r,i,u,k,b,m){return a(),s("div",null,l)}var v=n(e,[["render",c]]);export{d as __pageData,v as default};
