import{_ as e,o as a,c as o,Q as s}from"./chunks/framework.jBbNkKut.js";const y=JSON.parse('{"title":"Hello World!","description":"","frontmatter":{"prev":{"text":"Getting Started","link":"/guide/getting-started/getting-started"},"next":{"text":"Hello WhirlPKG!","link":"/guide/getting-started/hello-whirlpkg"}},"headers":[],"relativePath":"guide/getting-started/hello-world.md","filePath":"guide/getting-started/hello-world.md"}'),t={name:"guide/getting-started/hello-world.md"},n=s(`<h1 id="hello-world" tabindex="-1">Hello World! <a class="header-anchor" href="#hello-world" aria-label="Permalink to &quot;Hello World!&quot;">​</a></h1><p>Now I assume you have installed WhirlScript.</p><p>Next, let&#39;s write a simple program to output <code>Hello World!</code>.</p><h2 id="initialization" tabindex="-1">Initialization <a class="header-anchor" href="#initialization" aria-label="Permalink to &quot;Initialization&quot;">​</a></h2><p>You need to find an empty directory for this project, and open the terminal here, enter:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wrp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wrp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p>After answering a series of questions, your project is initialized.</p><h2 id="write-some-code" tabindex="-1">Write Some Code <a class="header-anchor" href="#write-some-code" aria-label="Permalink to &quot;Write Some Code&quot;">​</a></h2><p>Next, create a file called <code>main.wrs</code>. This will be the entry point file for this project.</p><p>Open this file and enter these:</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">println(&quot;Hello world!&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">println(&quot;Hello world!&quot;);</span></span></code></pre></div><h2 id="compilation-and-running" tabindex="-1">Compilation and Running <a class="header-anchor" href="#compilation-and-running" aria-label="Permalink to &quot;Compilation and Running&quot;">​</a></h2><h3 id="compilation-configuration" tabindex="-1">Compilation Configuration <a class="header-anchor" href="#compilation-configuration" aria-label="Permalink to &quot;Compilation Configuration&quot;">​</a></h3><p>Before compiling, we need to write the compilation configuration first.</p><p>Create a new file called <code>build.json</code> in the project root directory, and enter:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;entrypoint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;main&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;entrypoint&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;main&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>The <code>entrypoint</code> here refers to the <code>main.wrs</code> file we created earlier. If you used a different filename or put it in a folder, please modify it accordingly.</p><h3 id="compile" tabindex="-1">Compile! <a class="header-anchor" href="#compile" aria-label="Permalink to &quot;Compile!&quot;">​</a></h3><p>The compilation command is very simple. We have written the information that the compiler needs to know in the configuration, so just open the terminal here and enter:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wrsc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wrsc</span></span></code></pre></div><p>The compiled script is located under the <code>build</code> folder in the project directory, you can find it there.</p><p>Corresponding to your operating system, you can find <code>hello-world.bat</code> or <code>hello-world.sh</code>.</p><p>Next, simply open a terminal and run it!</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ ./hello-world</span></span>
<span class="line"><span style="color:#e1e4e8;">Hello World!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ ./hello-world</span></span>
<span class="line"><span style="color:#24292e;">Hello World!</span></span></code></pre></div><p>Looking at the <code>Hello World!</code> printed on the screen, we have taken a big step forward!</p>`,25),l=[n];function i(p,r,c,d,h,u){return a(),o("div",null,l)}const m=e(t,[["render",i]]);export{y as __pageData,m as default};
