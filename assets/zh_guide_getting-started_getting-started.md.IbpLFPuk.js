import{_ as s,o as a,c as l,Q as e}from"./chunks/framework.jBbNkKut.js";const E=JSON.parse('{"title":"立即开始","description":"","frontmatter":{"prev":{"text":"什么是 WhirlScript？","link":"/zh/guide/introduction/what-is-whirlscript"},"next":{"text":"Hello World!","link":"/zh/guide/getting-started/hello-world"}},"headers":[],"relativePath":"zh/guide/getting-started/getting-started.md","filePath":"zh/guide/getting-started/getting-started.md"}'),n={name:"zh/guide/getting-started/getting-started.md"},o=e('<h1 id="立即开始" tabindex="-1">立即开始 <a class="header-anchor" href="#立即开始" aria-label="Permalink to &quot;立即开始&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="先决条件" tabindex="-1">先决条件 <a class="header-anchor" href="#先决条件" aria-label="Permalink to &quot;先决条件&quot;">​</a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 版本需为 18 或更高。</li><li>用于通过命令行界面（CLI）访问 WhirlScript 的终端。</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uaBVH" id="tab-fcHgv5j" checked="checked"><label for="tab-fcHgv5j">npm</label><input type="radio" name="group-uaBVH" id="tab-Gd4givt"><label for="tab-Gd4givt">pnpm</label><input type="radio" name="group-uaBVH" id="tab-HVsDw49"><label for="tab-HVsDw49">yarn</label><input type="radio" name="group-uaBVH" id="tab-f70l9WI"><label for="tab-f70l9WI">npm</label><input type="radio" name="group-uaBVH" id="tab-d3KjnUe"><label for="tab-d3KjnUe">npm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">whirlscript</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">whirlscript</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">whirlscript</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">whirlscript</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">whirlscript</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">whirlscript</span></span></code></pre></div><h3 id="设置向导" tabindex="-1">设置向导 <a class="header-anchor" href="#设置向导" aria-label="Permalink to &quot;设置向导&quot;">​</a></h3><p>WhirlScript 使用其包管理器 <code>WhirlPool</code>。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wrp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wrp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><ul><li>文件 whirlpool.json 用于存储包的配置；</li><li>文件 wrsconfig.json 用于存储构建的配置。</li></ul><h2 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;">​</a></h2><p>只要完成了配置，就可以像下面这样编译你的源代码：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wrsc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wrsc</span></span></code></pre></div></div></div>',5),p=[o];function t(r,c,i,d,h,y){return a(),l("div",null,p)}const u=s(n,[["render",t]]);export{E as __pageData,u as default};