import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.jBbNkKut.js";const u=JSON.parse('{"title":"命名空间","description":"","frontmatter":{"prev":{"text":"表达式与运算符","link":"/zh/guide/getting-started/expressions-and-operators"},"next":{"text":"模块","link":"/zh/guide/getting-started/modules"}},"headers":[],"relativePath":"zh/guide/getting-started/namespace.md","filePath":"zh/guide/getting-started/namespace.md"}'),l={name:"zh/guide/getting-started/namespace.md"},e=p(`<h1 id="命名空间" tabindex="-1">命名空间 <a class="header-anchor" href="#命名空间" aria-label="Permalink to &quot;命名空间&quot;">​</a></h1><p>WhirlScript 没有类的概念。作为替代，如果你希望将变量和函数按照功能分开，可以使用命名空间。</p><h2 id="定义一个命名空间" tabindex="-1">定义一个命名空间 <a class="header-anchor" href="#定义一个命名空间" aria-label="Permalink to &quot;定义一个命名空间&quot;">​</a></h2><p>你可以使用 <code>namespace</code> 语句定义一个命名空间。例如，以下代码定义了一个命名空间，它包含函数 <code>max</code>：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">namespace Math{</span></span>
<span class="line"><span style="color:#E1E4E8;">    function max(x:int, y:int):int {</span></span>
<span class="line"><span style="color:#E1E4E8;">        if(x &gt;= y){</span></span>
<span class="line"><span style="color:#E1E4E8;">            return x;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        return y;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">namespace Math{</span></span>
<span class="line"><span style="color:#24292E;">    function max(x:int, y:int):int {</span></span>
<span class="line"><span style="color:#24292E;">        if(x &gt;= y){</span></span>
<span class="line"><span style="color:#24292E;">            return x;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        return y;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="调用命名空间中的内容" tabindex="-1">调用命名空间中的内容 <a class="header-anchor" href="#调用命名空间中的内容" aria-label="Permalink to &quot;调用命名空间中的内容&quot;">​</a></h2><p>你可以使用 <code>::</code> 符号调用命名空间中的内容。例如，对于前面定义的 <code>max</code> 函数，可以这样调用：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">println(Math::max(1, 2));// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">println(Math::max(1, 2));// 2</span></span></code></pre></div><h2 id="补充定义" tabindex="-1">补充定义 <a class="header-anchor" href="#补充定义" aria-label="Permalink to &quot;补充定义&quot;">​</a></h2><p><code>::</code> 符号同样可以用于补充定义命名空间中的内容。</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function Math::min(x:int, y:int):int {</span></span>
<span class="line"><span style="color:#E1E4E8;">    if(x &gt;= y){</span></span>
<span class="line"><span style="color:#E1E4E8;">        return x;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    return y;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">function Math::min(x:int, y:int):int {</span></span>
<span class="line"><span style="color:#24292E;">    if(x &gt;= y){</span></span>
<span class="line"><span style="color:#24292E;">        return x;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    return y;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="定义可省性和可重复性" tabindex="-1">定义可省性和可重复性 <a class="header-anchor" href="#定义可省性和可重复性" aria-label="Permalink to &quot;定义可省性和可重复性&quot;">​</a></h2><p>你可以多次定义同一个命名空间，或者根本不定义直接使用 <code>::</code> 语法补充定义。这些情况下，结果都是一样的：你在这个命名空间中定义的所有内容，都属于这个命名空间，不管是何时定义的。例如：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function example::foobar(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    println(&quot;foobar&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">namespace example{</span></span>
<span class="line"><span style="color:#E1E4E8;">    function foo(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        println(&quot;foo&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">namespace example{</span></span>
<span class="line"><span style="color:#E1E4E8;">    function bar(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        println(&quot;bar&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">example::foobar();// foobar</span></span>
<span class="line"><span style="color:#E1E4E8;">example::foo();// foo</span></span>
<span class="line"><span style="color:#E1E4E8;">example::bar();// bar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">function example::foobar(){</span></span>
<span class="line"><span style="color:#24292E;">    println(&quot;foobar&quot;);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">namespace example{</span></span>
<span class="line"><span style="color:#24292E;">    function foo(){</span></span>
<span class="line"><span style="color:#24292E;">        println(&quot;foo&quot;);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">namespace example{</span></span>
<span class="line"><span style="color:#24292E;">    function bar(){</span></span>
<span class="line"><span style="color:#24292E;">        println(&quot;bar&quot;);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">example::foobar();// foobar</span></span>
<span class="line"><span style="color:#24292E;">example::foo();// foo</span></span>
<span class="line"><span style="color:#24292E;">example::bar();// bar</span></span></code></pre></div><h2 id="using-语句" tabindex="-1"><code>using</code> 语句 <a class="header-anchor" href="#using-语句" aria-label="Permalink to &quot;\`using\` 语句&quot;">​</a></h2><p>你可以使用 <code>using</code> 语句使命名空间中的内容可以不经过命名空间直接调用。例如：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">using Math::max;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">println(max(1, 2));// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">using Math::max;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">println(max(1, 2));// 2</span></span></code></pre></div><p>你也可以加上 <code>namespace</code> 限定来打开一个命名空间。</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">using namespace Math;</span></span>
<span class="line"><span style="color:#E1E4E8;">println(max(1, 2))// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">using namespace Math;</span></span>
<span class="line"><span style="color:#24292E;">println(max(1, 2))// 2</span></span></code></pre></div><p>不推荐直接打开一个命名空间，因为这会污染命名空间。</p><div class="warning custom-block"><p class="custom-block-title">⚠️ 警告</p><p>在模块中打开一个命名空间，会影响到调用这个模块的所有内容。</p></div><h2 id="嵌套的命名空间" tabindex="-1">嵌套的命名空间 <a class="header-anchor" href="#嵌套的命名空间" aria-label="Permalink to &quot;嵌套的命名空间&quot;">​</a></h2><p>命名空间可以嵌套。例如：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">namespace foo{</span></span>
<span class="line"><span style="color:#E1E4E8;">    namespace bar{</span></span>
<span class="line"><span style="color:#E1E4E8;">        function foobar(){</span></span>
<span class="line"><span style="color:#E1E4E8;">            println(&quot;foobar&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">foo::bar::foobar();// foobar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">namespace foo{</span></span>
<span class="line"><span style="color:#24292E;">    namespace bar{</span></span>
<span class="line"><span style="color:#24292E;">        function foobar(){</span></span>
<span class="line"><span style="color:#24292E;">            println(&quot;foobar&quot;);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">foo::bar::foobar();// foobar</span></span></code></pre></div>`,24),o=[e];function c(t,i,r,E,d,h){return a(),n("div",null,o)}const g=s(l,[["render",c]]);export{u as __pageData,g as default};
