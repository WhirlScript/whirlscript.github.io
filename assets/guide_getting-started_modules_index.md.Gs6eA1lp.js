import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.jBbNkKut.js";const g=JSON.parse('{"title":"Modules","description":"","frontmatter":{"prev":{"text":"Namespaces","link":"/guide/getting-started/namespace"},"next":false},"headers":[],"relativePath":"guide/getting-started/modules/index.md","filePath":"guide/getting-started/modules.md"}'),s={name:"guide/getting-started/modules/index.md"},i=o('<h1 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h1><p>WhirlScript programs can be broken down into individual modules that are imported as needed. This is also the foundation of its package management.</p><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>It&#39;s advisable to place all definitions within namespaces in files that act as modules, to avoid namespace pollution after import.</p></div><h2 id="importing-modules" tabindex="-1">Importing Modules <a class="header-anchor" href="#importing-modules" aria-label="Permalink to &quot;Importing Modules&quot;">​</a></h2><p>Use the <code>import</code> statement to import a module.</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import &quot;./module&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import &quot;./module&quot;;</span></span></code></pre></div><p>The imported module is actually a <code>.wrs</code> file. You need to use relative paths (starting with <code>./</code>) to import files in the project directory.</p><p>The import statement needs to be at the outermost level. That is, you cannot import a module within functions, branches, and other statements.</p><p>Importing is essentially a simple string concatenation. Therefore, all content in the imported file will be parsed as part of this file.</p><p>Repeated imports are safe. The second import of the same module will be ignored.</p><h2 id="importing-whirlpkg-packages" tabindex="-1">Importing Whirlpkg Packages <a class="header-anchor" href="#importing-whirlpkg-packages" aria-label="Permalink to &quot;Importing Whirlpkg Packages&quot;">​</a></h2><p>Whirlpkg provides a variety of third-party packages. You can install them to the current project with <code>$ wrp add $pkg</code>, and then use the <code>import</code> statement to import:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import &quot;hello&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import &quot;hello&quot;;</span></span></code></pre></div><p>For packages that provide optional imports, you can import them in this way:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import &quot;hello/hello&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import &quot;hello/hello&quot;;</span></span></code></pre></div>',15),p=[i];function l(n,r,d,c,h,m){return t(),a("div",null,p)}const k=e(s,[["render",l]]);export{g as __pageData,k as default};
