import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.jBbNkKut.js";const y=JSON.parse('{"title":"Namespaces","description":"","frontmatter":{"prev":{"text":"Expressions and Operators","link":"/guide/getting-started/expressions-and-operators"},"next":{"text":"Modules","link":"/guide/getting-started/modules"}},"headers":[],"relativePath":"guide/getting-started/namespace.md","filePath":"guide/getting-started/namespace.md"}'),p={name:"guide/getting-started/namespace.md"},l=e(`<h1 id="namespaces" tabindex="-1">Namespaces <a class="header-anchor" href="#namespaces" aria-label="Permalink to &quot;Namespaces&quot;">​</a></h1><p>WhirlScript does not have the concept of classes. As an alternative, if you wish to separate variables and functions based on functionality, you can use namespaces.</p><h2 id="defining-a-namespace" tabindex="-1">Defining a Namespace <a class="header-anchor" href="#defining-a-namespace" aria-label="Permalink to &quot;Defining a Namespace&quot;">​</a></h2><p>You can use the <code>namespace</code> statement to define a namespace. For example, the following code defines a namespace that contains the function <code>max</code>:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">namespace Math{</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="calling-contents-in-a-namespace" tabindex="-1">Calling Contents in a Namespace <a class="header-anchor" href="#calling-contents-in-a-namespace" aria-label="Permalink to &quot;Calling Contents in a Namespace&quot;">​</a></h2><p>You can use the <code>::</code> symbol to call contents within a namespace. For example, for the previously defined <code>max</code> function, you can call it like this:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">println(Math::max(1, 2));// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">println(Math::max(1, 2));// 2</span></span></code></pre></div><h2 id="supplemental-definition" tabindex="-1">Supplemental Definition <a class="header-anchor" href="#supplemental-definition" aria-label="Permalink to &quot;Supplemental Definition&quot;">​</a></h2><p>The <code>::</code> symbol can also be used to supplementally define contents within a namespace.</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function Math::min(x:int, y:int):int {</span></span>
<span class="line"><span style="color:#E1E4E8;">    if(x &gt;= y){</span></span>
<span class="line"><span style="color:#E1E4E8;">        return x;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    return y;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">function Math::min(x:int, y:int):int {</span></span>
<span class="line"><span style="color:#24292E;">    if(x &gt;= y){</span></span>
<span class="line"><span style="color:#24292E;">        return x;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    return y;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="defining-optionality-and-repeatability" tabindex="-1">Defining Optionality and Repeatability <a class="header-anchor" href="#defining-optionality-and-repeatability" aria-label="Permalink to &quot;Defining Optionality and Repeatability&quot;">​</a></h2><p>You can define the same namespace multiple times, or not define it at all and directly use the <code>::</code> syntax for supplemental definition. In these cases, the result is the same: all the contents you define in this namespace belong to this namespace, regardless of when they were defined. For example:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function example::foobar(){</span></span>
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
<span class="line"><span style="color:#24292E;">example::bar();// bar</span></span></code></pre></div><h2 id="using-statement" tabindex="-1"><code>using</code> Statement <a class="header-anchor" href="#using-statement" aria-label="Permalink to &quot;\`using\` Statement&quot;">​</a></h2><p>You can use the <code>using</code> statement to call contents within a namespace directly without going through the namespace. For example:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">using Math::max;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">println(max(1, 2));// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">using Math::max;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">println(max(1, 2));// 2</span></span></code></pre></div><p>You can also add the <code>namespace</code> qualifier to open a namespace.</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">using namespace Math;</span></span>
<span class="line"><span style="color:#E1E4E8;">println(max(1, 2))// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">using namespace Math;</span></span>
<span class="line"><span style="color:#24292E;">println(max(1, 2))// 2</span></span></code></pre></div><p>Opening a namespace directly is not recommended as it can pollute the namespace.</p><div class="warning custom-block"><p class="custom-block-title">⚠️ Warning</p><p>Opening a namespace within a module will affect all contents that call this module.</p></div><h2 id="nested-namespaces" tabindex="-1">Nested Namespaces <a class="header-anchor" href="#nested-namespaces" aria-label="Permalink to &quot;Nested Namespaces&quot;">​</a></h2><p>Namespaces can be nested. For example:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">namespace foo{</span></span>
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
<span class="line"><span style="color:#24292E;">foo::bar::foobar();// foobar</span></span></code></pre></div>`,24),o=[l];function t(c,i,r,d,E,h){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{y as __pageData,m as default};
