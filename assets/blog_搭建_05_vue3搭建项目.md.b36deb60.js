import{_ as n,c as s,o as a,e as p}from"./app.437044c9.js";const d='{"title":"\u4F7F\u7528 vite \u5FEB\u901F\u521B\u5EFA\u811A\u624B\u67B6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528 vite \u5FEB\u901F\u521B\u5EFA\u811A\u624B\u67B6","slug":"\u4F7F\u7528-vite-\u5FEB\u901F\u521B\u5EFA\u811A\u624B\u67B6"},{"level":2,"title":"\u521B\u5EFA\u811A\u624B\u67B6","slug":"\u521B\u5EFA\u811A\u624B\u67B6"},{"level":2,"title":"\u4EE3\u7801\u7EA6\u675F\u98CE\u683C","slug":"\u4EE3\u7801\u7EA6\u675F\u98CE\u683C"},{"level":2,"title":"\u914D\u7F6E\u73AF\u5883env","slug":"\u914D\u7F6E\u73AF\u5883env"},{"level":2,"title":"\u914D\u7F6Escss|less","slug":"\u914D\u7F6Escss-less"}],"relativePath":"blog/\u642D\u5EFA/05_vue3\u642D\u5EFA\u9879\u76EE.md","lastUpdated":1662460262000}',e={},t=p(`<h2 id="\u4F7F\u7528-vite-\u5FEB\u901F\u521B\u5EFA\u811A\u624B\u67B6" tabindex="-1">\u4F7F\u7528 vite \u5FEB\u901F\u521B\u5EFA\u811A\u624B\u67B6</h2><h2 id="\u521B\u5EFA\u811A\u624B\u67B6" tabindex="-1">\u521B\u5EFA\u811A\u624B\u67B6</h2><p><strong>1. \u5728\u9700\u8981\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u76EE\u5F55\u4E0B\u6253\u5F00 cmd \u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4</strong></p><div class="language-js line-numbers-mode"><pre><code>yarn create vite \u9879\u76EE\u540D
pnpm create vite \u9879\u76EE\u540D

# \u4F7F\u7528\u7684\u6A21\u677F
yarn create vite \u9879\u76EE\u540D <span class="token operator">--</span>template vue
pnpm create vite \u9879\u76EE\u540D <span class="token operator">--</span>template vue
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>\u6211\u8FD9\u91CC\u9009\u62E9pnpm</p><ul><li>pnpm create vite \u9879\u76EE\u540D --template vue</li><li>\u9009\u62E9vue =&gt; vue-ts \u56DE\u8F66</li><li>cd \u8FDB\u5165\u9879\u76EE</li><li>code ./ vscode\u6253\u5F00\u9879\u76EE \u7136\u540E\u6253\u5F00\u7EC8\u7AEF</li><li>pnpm install \u5B89\u88C5\u4F9D\u8D56</li><li>pnpm dev \u8FD0\u884C</li></ul></blockquote><h2 id="\u4EE3\u7801\u7EA6\u675F\u98CE\u683C" tabindex="-1">\u4EE3\u7801\u7EA6\u675F\u98CE\u683C</h2><p><a href="./00_\u4EE3\u7801\u98CE\u683C\u7EA6\u675F.html">\u4EE3\u7801\u98CE\u683C\u7EA6\u675F</a></p><div class="language-js line-numbers-mode"><pre><code># \u521B\u5EFA\u6587\u4EF6<span class="token punctuation">.</span>prettierrc
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;jsxBracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-js line-numbers-mode"><pre><code>yarn add eslint <span class="token operator">-</span><span class="token constant">D</span>
# \u521D\u59CB\u5316eslint
yarn  eslint <span class="token operator">--</span>init
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-js line-numbers-mode"><pre><code># \u6587\u4EF6<span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>cjs
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;es2021&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;plugin:vue/vue3-essential&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-eslint-parser&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u{1F448}\u89E3\u6790template</span>
  <span class="token string-property property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u{1F448}\u89E3\u6790script</span>
      <span class="token string-property property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;@typescript-eslint&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@typescript-eslint/ban-types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//\u{1F448}</span>
    <span class="token string-property property">&quot;@typescript-eslint/no-explicit-any&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//\u{1F448}\u5141\u8BB8\u4F7F\u7528any</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-js line-numbers-mode"><pre><code>yarn add prettier <span class="token operator">-</span><span class="token constant">D</span>
# \u6587\u4EF6<span class="token keyword">package</span><span class="token punctuation">.</span>json
<span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write  \\&quot;src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\\&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-js line-numbers-mode"><pre><code># \u521B\u5EFA\u6587\u4EF6<span class="token punctuation">.</span>vscode<span class="token operator">/</span>settings<span class="token punctuation">.</span>json
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;source.fixAll&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.guides.bracketPairs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;active&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-js line-numbers-mode"><pre><code>#\u6587\u4EF6<span class="token punctuation">.</span>eslintignore
<span class="token keyword">public</span>
dist
<span class="token operator">*</span><span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
<span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u914D\u7F6E\u73AF\u5883env" tabindex="-1">\u914D\u7F6E\u73AF\u5883env</h2><div class="language-js line-numbers-mode"><pre><code>\u516C\u5171\u7684 <span class="token punctuation">.</span>env  
\u5F00\u53D1\u73AF\u5883 <span class="token punctuation">.</span>env<span class="token punctuation">.</span>development  
\u751F\u4EA7\u73AF\u5883 <span class="token punctuation">.</span>env<span class="token punctuation">.</span>production  
\u9884\u53D1\u5E03\u73AF\u5883 <span class="token punctuation">.</span>env<span class="token punctuation">.</span>staging  

# \u7AEF\u53E3
<span class="token constant">VITE_PORT</span><span class="token operator">=</span> <span class="token number">3100</span>

# \u5F00\u53D1\u73AF\u5883\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84
<span class="token constant">VITE_PUBLIC_PATH</span> <span class="token operator">=</span> <span class="token operator">/</span>

# \u5F00\u53D1\u73AF\u5883\u4EE3\u7406
<span class="token constant">VITE_PROXY_DOMAIN</span> <span class="token operator">=</span> <span class="token operator">/</span>api

# \u5F00\u53D1\u73AF\u5883\u8DEF\u7531\u5386\u53F2\u6A21\u5F0F
<span class="token constant">VITE_ROUTER_HISTORY</span> <span class="token operator">=</span> <span class="token string">&quot;hash&quot;</span>

# \u5F00\u53D1\u73AF\u5883\u540E\u7AEF\u5730\u5740
<span class="token constant">VITE_PROXY_DOMAIN_REAL</span> <span class="token operator">=</span> <span class="token string">&quot;http://127.0.0.1:3000&quot;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u914D\u7F6Escss-less" tabindex="-1">\u914D\u7F6Escss|less</h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5B89\u88C5scss</span>
yarn add sass<span class="token operator">-</span>loader sass <span class="token operator">-</span><span class="token constant">D</span> 
<span class="token comment">// \u5B89\u88C5node/type</span>
yarn add @node<span class="token operator">/</span>type
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u521B\u5EFA\u5168\u5C40\u6837\u5F0F\u6587\u4EF6 src/styles/main.scss</p><div class="language-js line-numbers-mode"><pre><code># vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts
<span class="token keyword">import</span>  <span class="token punctuation">{</span> UserConfig<span class="token punctuation">,</span> ConfigEnv<span class="token punctuation">,</span>loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">root</span> <span class="token operator">:</span>string <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> command<span class="token punctuation">,</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> ConfigEnv<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">UserConfig</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u73AF\u5883\u7684\u914D\u7F6E</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">VITE_PORT</span><span class="token punctuation">,</span><span class="token constant">VITE_PUBLIC_PATH</span><span class="token punctuation">}</span><span class="token operator">:</span> any <span class="token operator">=</span>  <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span><span class="token constant">VITE_PUBLIC_PATH</span><span class="token punctuation">,</span>
    
    <span class="token comment">// \u670D\u52A1\u76F8\u5173</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">https</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token constant">VITE_PORT</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u89E3\u6790\u76F8\u5173 \u3010\u522B\u540D\u3011</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//\u5B57\u7B26\u4E32\uFF5C\u6B63\u5219</span>
          <span class="token literal-property property">replacement</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token string">&#39;@asset&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//\u5B57\u7B26\u4E32\uFF5C\u6B63\u5219</span>
          <span class="token literal-property property">replacement</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src/assets&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// css\u76F8\u5173</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5F15\u5165\u5168\u5C40scss |less \u6307\u5B9A\u4F20\u9012\u7ED9 CSS \u9884\u5904\u7406\u5668\u7684\u9009\u9879\u3002</span>
      <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token string">&#39;@import &quot;./src/styles/main.scss&quot;;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// .\u6784\u5EFA\u76F8\u5173\u3010\u6253\u5305\u76F8\u5173\u3011</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6D88\u9664\u6253\u5305\u5927\u5C0F\u8D85\u8FC7500kb\u8B66\u544A</span>
      <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">4000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5E38\u91CF</span>
    <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
      <span class="token comment">//\u662F\u5426\u5F00\u53D1\u73AF\u5883 \u53EF\u4F9B\u4E1A\u52A1\u4EE3\u7801\u4E2D\u76F4\u63A5\u4F7F\u7528 const dev = __IS_DEV__ \u5224\u65AD\u5F53\u524D\u662F\u5426\u5F00\u53D1\u73AF\u5883</span>
      <span class="token literal-property property">__IS_DEV__</span><span class="token operator">:</span> mode <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div>`,19),o=[t];function r(l,c,u,i,k,b){return a(),s("div",null,o)}var y=n(e,[["render",r]]);export{d as __pageData,y as default};
