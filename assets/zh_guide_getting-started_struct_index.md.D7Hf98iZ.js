import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.jBbNkKut.js";const g=JSON.parse('{"title":"结构体","description":"","frontmatter":{"prev":{"text":"表达式与运算符","link":"/zh/guide/getting-started/expressions-and-operators"},"next":{"text":"命名空间","link":"/zh/guide/getting-started/namespace"}},"headers":[],"relativePath":"zh/guide/getting-started/struct/index.md","filePath":"zh/guide/getting-started/struct.md"}'),l={name:"zh/guide/getting-started/struct/index.md"},p=e(`<h1 id="结构体" tabindex="-1">结构体 <a class="header-anchor" href="#结构体" aria-label="Permalink to &quot;结构体&quot;">​</a></h1><p>结构是 WhirlScript 中另一种用户自定义的可用的数据类型，它允许您存储不同类型的数据项。</p><p>结构体中的数据成员可以是基本数据类型（<code>boolean</code>、<code>int</code> 和 <code>string</code>），也可以是其他结构体类型。</p><h2 id="声明" tabindex="-1">声明 <a class="header-anchor" href="#声明" aria-label="Permalink to &quot;声明&quot;">​</a></h2><p>结构体使用 <code>struct</code> 关键字声明：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">struct MyStruct {</span></span>
<span class="line"><span style="color:#E1E4E8;">    number: int,</span></span>
<span class="line"><span style="color:#E1E4E8;">    used: boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">struct MyStruct {</span></span>
<span class="line"><span style="color:#24292E;">    number: int,</span></span>
<span class="line"><span style="color:#24292E;">    used: boolean</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>结构体不允许出现自我嵌套，包括直接嵌套和间接嵌套。例如，以下的定义是错误的。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-A7Gvx" id="tab-xMWYxGx" checked="checked"><label for="tab-xMWYxGx">直接嵌套</label><input type="radio" name="group-A7Gvx" id="tab-EijErlr"><label for="tab-EijErlr">间接嵌套</label></div><div class="blocks"><div class="language-WhirlScript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">struct MyStruct {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: int,</span></span>
<span class="line highlighted error"><span style="color:#E1E4E8;">    next: MyStruct </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">struct MyStruct {</span></span>
<span class="line"><span style="color:#24292E;">    id: int,</span></span>
<span class="line highlighted error"><span style="color:#24292E;">    next: MyStruct </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">struct MyStruct1 {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: int,</span></span>
<span class="line"><span style="color:#E1E4E8;">    next: MyStruct2</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">struct MyStruct2 {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: int,</span></span>
<span class="line highlighted error"><span style="color:#E1E4E8;">    next: MyStruct1 </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">struct MyStruct1 {</span></span>
<span class="line"><span style="color:#24292E;">    id: int,</span></span>
<span class="line"><span style="color:#24292E;">    next: MyStruct2</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">struct MyStruct2 {</span></span>
<span class="line"><span style="color:#24292E;">    id: int,</span></span>
<span class="line highlighted error"><span style="color:#24292E;">    next: MyStruct1 </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="赋值" tabindex="-1">赋值 <a class="header-anchor" href="#赋值" aria-label="Permalink to &quot;赋值&quot;">​</a></h2><p>使用大括号来表示一个结构体量：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">var v = {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: 2,</span></span>
<span class="line"><span style="color:#E1E4E8;">    used: false</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">var v = {</span></span>
<span class="line"><span style="color:#24292E;">    id: 2,</span></span>
<span class="line"><span style="color:#24292E;">    used: false</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="调用" tabindex="-1">调用 <a class="header-anchor" href="#调用" aria-label="Permalink to &quot;调用&quot;">​</a></h2><p>使用 <code>.</code> 来调用结构体内的量：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">println(v.id); // 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">println(v.id); // 2</span></span></code></pre></div>`,14),t=[p];function c(i,o,r,d,h,E){return a(),n("div",null,t)}const y=s(l,[["render",c]]);export{g as __pageData,y as default};
