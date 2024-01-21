import{_ as s,o as a,c as n,Q as t}from"./chunks/framework.jBbNkKut.js";const E=JSON.parse('{"title":"目标限定","description":"","frontmatter":{"prev":{"text":"命名空间","link":"/zh/guide/getting-started/namespace"},"next":{"text":"注解","link":"/zh/guide/getting-started/annotation"}},"headers":[],"relativePath":"zh/guide/getting-started/target-specify.md","filePath":"zh/guide/getting-started/target-specify.md"}'),e={name:"zh/guide/getting-started/target-specify.md"},l=t(`<h1 id="目标限定" tabindex="-1">目标限定 <a class="header-anchor" href="#目标限定" aria-label="Permalink to &quot;目标限定&quot;">​</a></h1><p>在一些特定情况下，你会要求某段代码只在特定的编译目标中存在。</p><p>最简单的方式是在语句前加上 <code>@sh</code> 或 <code>@bat</code> 注解。</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@sh println(&quot;Hello SH!&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">@bat println(&quot;Hello BAT!&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@sh println(&quot;Hello SH!&quot;);</span></span>
<span class="line"><span style="color:#24292E;">@bat println(&quot;Hello BAT!&quot;);</span></span></code></pre></div><p>对于语句块，你可以这样子限定：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@sh {</span></span>
<span class="line"><span style="color:#E1E4E8;">    println(&quot;SH only block.&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">@bat {</span></span>
<span class="line"><span style="color:#E1E4E8;">    println(&quot;BAT only block.&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@sh {</span></span>
<span class="line"><span style="color:#24292E;">    println(&quot;SH only block.&quot;);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">@bat {</span></span>
<span class="line"><span style="color:#24292E;">    println(&quot;BAT only block.&quot;);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>注解相关内容详见 <a href="/zh/guide/getting-started/annotation">注解</a> 。</p>`,7),p=[l];function o(c,i,r,d,h,u){return a(),n("div",null,p)}const y=s(e,[["render",o]]);export{E as __pageData,y as default};