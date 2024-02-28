import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.jBbNkKut.js";const g=JSON.parse('{"title":"Struct","description":"","frontmatter":{"prev":{"text":"Expressions and Operators","link":"/en/guide/getting-started/expressions-and-operators"},"next":{"text":"Namespace","link":"/en/guide/getting-started/namespace"}},"headers":[],"relativePath":"guide/getting-started/struct/index.md","filePath":"guide/getting-started/struct.md"}'),t={name:"guide/getting-started/struct/index.md"},l=e(`<h1 id="struct" tabindex="-1">Struct <a class="header-anchor" href="#struct" aria-label="Permalink to &quot;Struct&quot;">​</a></h1><p>Struct(structure) are another user-defined data type available in WhirlScript, allowing you to store different types of data items.</p><p>Data members in a struct can be basic data types (<code>boolean</code>, <code>int</code>, and <code>string</code>), or other struct types.</p><h2 id="declaration" tabindex="-1">Declaration <a class="header-anchor" href="#declaration" aria-label="Permalink to &quot;Declaration&quot;">​</a></h2><p>Struct are declared using the <code>struct</code> keyword:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">struct MyStruct {</span></span>
<span class="line"><span style="color:#E1E4E8;">    number: int,</span></span>
<span class="line"><span style="color:#E1E4E8;">    used: boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">struct MyStruct {</span></span>
<span class="line"><span style="color:#24292E;">    number: int,</span></span>
<span class="line"><span style="color:#24292E;">    used: boolean</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Struct do not allow self-nesting, including direct and indirect nesting. For example, the following definitions are incorrect.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FLOCa" id="tab-6eL8GoQ" checked="checked"><label for="tab-6eL8GoQ">Direct nesting</label><input type="radio" name="group-FLOCa" id="tab-_MjeRsE"><label for="tab-_MjeRsE">Indirect nesting</label></div><div class="blocks"><div class="language-Whirlscript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">Whirlscript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">struct MyStruct {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: int,</span></span>
<span class="line highlighted error"><span style="color:#E1E4E8;">    next: MyStruct </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">struct MyStruct {</span></span>
<span class="line"><span style="color:#24292E;">    id: int,</span></span>
<span class="line highlighted error"><span style="color:#24292E;">    next: MyStruct </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-Whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Whirlscript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">struct MyStruct1 {</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="assignment" tabindex="-1">Assignment <a class="header-anchor" href="#assignment" aria-label="Permalink to &quot;Assignment&quot;">​</a></h2><p>Use braces to represent a structure:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">var v = {</span></span>
<span class="line"><span style="color:#E1E4E8;">     id: 2,</span></span>
<span class="line"><span style="color:#E1E4E8;">     used: false</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">var v = {</span></span>
<span class="line"><span style="color:#24292E;">     id: 2,</span></span>
<span class="line"><span style="color:#24292E;">     used: false</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="transfer" tabindex="-1">transfer <a class="header-anchor" href="#transfer" aria-label="Permalink to &quot;transfer&quot;">​</a></h2><p>Use <code>.</code> to call the quantity in the structure:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">println(v.id); // 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">println(v.id); // 2</span></span></code></pre></div>`,14),p=[l];function c(i,r,o,d,h,u){return a(),n("div",null,p)}const y=s(t,[["render",c]]);export{g as __pageData,y as default};
