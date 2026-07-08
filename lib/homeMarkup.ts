export const homeMarkup = `
<div class="preloader" id="preloader">
  <div class="pl-panels"><span></span><span></span><span></span><span></span><span></span><span></span></div>
  <canvas class="pl-canvas" id="plCanvas"></canvas>
  <div class="pl-center">
    <div class="pl-name">HRITIK HASSANI</div>
    <div class="pl-count"><span id="plNum">0</span>%</div>
    <div class="pl-track"><span id="plFill"></span></div>
    <div class="pl-status"><span id="plStatus">initializing systems</span><i class="pl-cur"></i></div>
  </div>
</div>
<div class="glow" id="glow"></div>
<div class="progress" id="progress"></div>

<div class="shell">
  <!-- ===== INTRO (sticky left) ===== -->
  <header class="intro">
    <div>
      <span class="mono-label avail load l1"><span class="dot"></span>BASED IN THE UNITED STATES · OPEN TO WORK</span>
      <div class="id-row load l2">
        <div class="avatar-wrap"><div class="avatar"><div class="avatar-inner"><img src="me.png" alt="Hritik Hassani" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"><span class="initials">HH</span></div></div></div>
        <div class="id-text">
          <h1>Hritik Hassani</h1>
          <div class="title"><span id="roleRotate"></span><span class="caret"></span></div>
        </div>
      </div>
      <p class="tagline load l3">I build production AI agents and the distributed systems that run them from architecture through CI/CD to live production.</p>
      <nav class="nav load l4" id="nav">
        <a href="#about" data-sec="about"><span class="ln"></span>About</a>
        <a href="#experience" data-sec="experience"><span class="ln"></span>Experience</a>
        <a href="#projects" data-sec="projects"><span class="ln"></span>Projects</a>
        <a href="#stack" data-sec="stack"><span class="ln"></span>Stack</a>
        <a href="#education" data-sec="education"><span class="ln"></span>Education</a>
        <a href="#contact" data-sec="contact"><span class="ln"></span>Contact</a>
      </nav>
    </div>
    <div class="intro-foot load l7">
      <div class="socials">
        <a href="https://github.com/hritikhassaniNU" target="_blank" rel="noopener" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg></a>
        <a href="https://www.linkedin.com/in/hritik-hassani/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 22 10.3 22 13.4V21h-4v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.6 1.76-2.6 3.58V21H9V9Z"/></svg></a>
        <a href="mailto:hassani.hritik@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg></a>
        <a href="https://hritikhassani.bio.link/" target="_blank" rel="noopener" aria-label="All links"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M3.5 15h17M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18"/></svg></a>
      </div>
      <div class="ctrl-row">
        <a class="resume-btn" href="https://drive.google.com/file/d/1_HMBrIqGwd9hyqeFlsxjLMb7pHX-BnH0/view?usp=sharing" target="_blank" rel="noopener">Résumé
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a>
        <div class="pal-wrap"><button class="mini" id="paletteBtn" aria-label="Change accent"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="17" cy="11" r="1.3" fill="currentColor" stroke="none"/><circle cx="8" cy="7" r="1.3" fill="currentColor" stroke="none"/><circle cx="6.5" cy="12" r="1.3" fill="currentColor" stroke="none"/><path d="M12 2a10 10 0 1 0 0 20c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1-.25-.27-.4-.62-.4-1 0-.83.67-1.5 1.5-1.5H16a6 6 0 0 0 6-6c0-4.97-4.48-9-10-9Z"/></svg></button><div class="pal-pop" id="palettePop"></div></div>
        <button class="mini" id="themeBtn" aria-label="Toggle theme"><svg id="themeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></svg></button>
      </div>
    </div>
  </header>

  <!-- ===== CONTENT (right) ===== -->
  <main class="content">
    <section id="about" class="reveal">
      <div class="sec-head"><span class="num">01</span><h2>About</h2><span class="rule"></span></div>
      <div class="about-headline">I build AI agents<br><span>and the systems that run them.</span></div>
      <div class="about-body">
        <p>I'm a Software &amp; AI Engineer who ships production agent systems end to end from model behavior to the distributed infrastructure that keeps them fast, observable, and reliable. My focus is LLM agents, RAG, and event-driven backends that stay measurable under real traffic, enterprise constraints, and messy data.</p>
        <p>Most recently at CodaMetrix, I took a clinical-coding AI agent from architecture to live production and designed the Kafka/Redis platform behind it. Before that I co-founded Kritexco, a Web3 studio, where I led a 10-engineer team shipping blockchain products for clients worldwide. I'm finishing a Master's in Computer Software Engineering at Northeastern (Aug 2026), and I own what I ship.</p>
      </div>
      <div class="about-beyond reveal">
        <span class="about-beyond-label">Beyond the work</span>
        <div class="chips">
          <span class="chip">Building side projects</span>
          <span class="chip">Open source</span>
          <span class="chip">Sneakers</span>
          <span class="chip">Travel</span>
          <span class="chip">Coffee</span>
        </div>
      </div>
    </section>

    <section id="experience">
      <div class="sec-head reveal"><span class="num">02</span><h2>Experience</h2><span class="rule"></span></div>
      <div class="timeline" id="expTimeline">
        <div class="tl-track"><div class="tl-fill"></div></div>
        <div class="item reveal">
          <div class="tl-meta">JUN 2025 — DEC 2025</div>
          <h3>Software Engineer Co-op <span class="at">· CodaMetrix</span></h3>
          <ul>
            <li>Built an AI agent for clinical-coding rule generation (LangGraph, Streamlit, Databricks) that analyzes Jira tickets, retrieves rules via Vector Search, detects conflicts, generates Drools-style rule JSON, and auto-opens GitHub PRs <b>cutting engineering effort 48%</b>.</li>
            <li>Designed an <b>event-driven architecture (Kafka, Redis)</b> for the coding-review platform, replacing synchronous DB reads with async processing and cache-aside reads with a refresh time of <b>30 min → 5 min</b> under concurrent load.</li>
            <li>Improved rule-retrieval accuracy <b>30%</b> at sub-3s with a RAG pipeline over Databricks Vector Search; held agent responses <b>sub-200ms</b> via async SNS/Lambda workers.</li>
            <li>Migrated production deploys to a <b>Jenkins → ArgoCD GitOps</b> pipeline on AWS EKS with health-monitored rollouts and automated rollback, cutting manual release steps <b>54%</b>.</li>
          </ul>
          <div class="tags"><span class="tag">Python</span><span class="tag">LangGraph</span><span class="tag">Databricks</span><span class="tag">Kafka</span><span class="tag">Redis</span><span class="tag">AWS EKS</span><span class="tag">ArgoCD</span></div>
        </div>

        <div class="item reveal">
          <div class="tl-meta">JUN 2021 — JAN 2024</div>
          <h3>Co-Founder &amp; Software Engineer <span class="at">· Kritexco</span></h3>
          <ul>
            <li>Co-founded a Web3 studio; shipped a secure <b>NFT marketplace DApp</b> end to end (<b>500+ users, 10+ countries</b>) React/TypeScript/Redux client, Node/MongoDB services, custom smart contracts.</li>
            <li>Architected and deployed contracts across <b>Ethereum, Polygon (ERC-721/1155), and Solana</b>, plus a custom ERC-20 launch; automated testnet→mainnet deploys with secure patterns that <b>cut audit-flagged vulnerabilities 60%</b>.</li>
            <li>Led a <b>10-engineer team</b> across 10+ global client engagements direction, scoping, budgets, delivery driving <b>20% revenue growth</b>.</li>
          </ul>
          <div class="tags"><span class="tag">React</span><span class="tag">TypeScript</span><span class="tag">Solidity</span><span class="tag">Web3.js</span><span class="tag">Node.js</span><span class="tag">IPFS</span></div>
        </div>

        <div class="item reveal">
          <div class="tl-meta">JUN 2020 — AUG 2020</div>
          <h3>Software Developer Intern <span class="at">· Synergy Technology</span></h3>
          <ul>
            <li>Built 15 modular React + TailwindCSS components with client-side validation, cutting form error rates <b>25%</b> and cross-browser issues <b>40%</b>.</li>
            <li>Built Node/Express REST APIs for onboarding submissions with server-side validation mirroring client checks to keep malformed data out.</li>
          </ul>
          <div class="tags"><span class="tag">React</span><span class="tag">TailwindCSS</span><span class="tag">Node.js</span><span class="tag">Express</span></div>
        </div>
      </div>
    </section>


    <section id="projects">
      <div class="sec-head reveal"><span class="num">03</span><h2>Projects</h2><span class="rule"></span></div>

      <div class="item reveal">
        <div class="proj-top">
          <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg></span>
          <div class="proj-links"><a href="https://github.com/hritikhassaniNU" target="_blank" rel="noopener" aria-label="Repo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a></div>
        </div>
        <h3><a class="proj-link" href="projects/nora/">NORA — AI Student Success Platform</a></h3>
        <ul><li>An end-to-end AI advising platform for students and advisors: a dual-mode <b>LangChain multi-agent pipeline (Gemini 2.0 Flash)</b> behind university login that guides international students through CPT/OPT and coursework, grounding answers in official policy via a <b>ChromaDB RAG layer with 92% accuracy</b> on a 50-question eval set. Ships with a companion Chrome extension.</li></ul>
        <div class="tags"><span class="tag">LangChain</span><span class="tag">Gemini</span><span class="tag">ChromaDB</span><span class="tag">RAG</span><span class="tag">Next.js</span></div>
      </div>

      <div class="item reveal">
        <div class="proj-top">
          <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h4M7 13h4M15 9h2M15 13h2"/></svg></span>
          <div class="proj-links"><a href="https://github.com/hritikhassaniNU" target="_blank" rel="noopener" aria-label="Repo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a></div>
        </div>
        <h3><a class="proj-link" href="projects/applystack/">ApplyStack — Chrome Job-Tracking Extension</a></h3>
        <ul><li>A Chrome MV3 extension with a Kanban dashboard and a background service worker. Its <b>cross-frame autofill engine</b> traverses shadow DOM and nested forms to map <b>18 fields across 8 job boards</b>, with real-time WebSocket multi-tab sync over IndexedDB and secure in-sandbox PDF export.</li></ul>
        <div class="tags"><span class="tag">TypeScript</span><span class="tag">Chrome MV3</span><span class="tag">WebSocket</span><span class="tag">IndexedDB</span></div>
      </div>

      <div class="item reveal">
        <div class="proj-top">
          <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 7v10l8 5 8-5V7Z"/><path d="m12 7 4 2.5v5L12 17l-4-2.5v-5Z"/></svg></span>
          <div class="proj-links"><a href="https://github.com/hritikhassaniNU" target="_blank" rel="noopener" aria-label="Repo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a></div>
        </div>
        <h3><a class="proj-link" href="projects/kritexco/">Kritexco — Web3 Marketplace &amp; Studio</a></h3>
        <ul><li>A secure NFT marketplace and Web3 studio: custom <b>ERC-721/1155 contracts across Ethereum, Polygon, and Solana</b>, a generative NFT engine pinning thousands of assets to IPFS via Pinata, and reusable Web3.js modules serving 500+ users across 10+ countries.</li></ul>
        <div class="tags"><span class="tag">Solidity</span><span class="tag">Ethereum</span><span class="tag">Polygon</span><span class="tag">Web3.js</span><span class="tag">IPFS</span></div>
      </div>
    </section>

    <section id="stack">
      <div class="sec-head reveal"><span class="num">04</span><h2>Tools I build with</h2><span class="rule"></span></div>
      <div class="stack reveal" id="stackGrid"></div>
    </section>

    <section id="education">
      <div class="sec-head reveal"><span class="num">05</span><h2>Education</h2><span class="rule"></span></div>

      <div class="item reveal">
        <div class="edu-head">
          <div>
            <h3>Master of Science in Computer Software Engineering</h3>
            <div class="edu-school">Northeastern University</div>
          </div>
          <div class="edu-meta">2024 – 2026<br>Boston, MA</div>
        </div>
        <div class="edu-cw-label">Relevant Coursework</div>
        <div class="chips">
          <span class="chip">Prompt Engineering &amp; AI Agents</span>
          <span class="chip">Application Engineering</span>
          <span class="chip">Algorithms</span>
          <span class="chip">Web Design &amp; UX</span>
          <span class="chip">Data Management &amp; Database Design</span>
        </div>
      </div>

      <div class="item reveal">
        <div class="edu-head">
          <div>
            <h3>Bachelor of Engineering in Electronics &amp; Telecommunication</h3>
            <div class="edu-school">University of Mumbai</div>
          </div>
          <div class="edu-meta">2019 – 2023<br>Mumbai, India</div>
        </div>
        <div class="edu-cw-label">Relevant Coursework</div>
        <div class="chips">
          <span class="chip">Data Structures &amp; Algorithms</span>
          <span class="chip">Object-Oriented Programming</span>
          <span class="chip">Big Data Analysis</span>
          <span class="chip">Neural Networks</span>
          <span class="chip">Software Engineering</span>
          <span class="chip">Python</span>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="sec-head reveal"><span class="num">06</span><h2>Contact</h2><span class="rule"></span></div>
      <div class="reveal">
        <div class="contact-headline">Let's build something<br><span>that ships.</span></div>
        <p class="contact-sub">I'm open to full-time Software / AI Engineering roles starting August 2026. The fastest way to reach me is email,I read every message and reply quickly.</p>
        <a class="contact-mail" href="mailto:hassani.hritik@gmail.com">hassani.hritik@gmail.com <span>↗</span></a>
        <div class="contact-links">
          <a href="https://www.linkedin.com/in/hritik-hassani/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/hritikhassaniNU" target="_blank" rel="noopener">GitHub</a>
          <a href="Hritik_Hassani_Resume.pdf" target="_blank" rel="noopener">Résumé</a>
          <a href="https://hritikhassani.bio.link/" target="_blank" rel="noopener">All Links</a>
        </div>
      </div>
    </section>

    <footer>
      Designed &amp; built by Hritik Hassani · United States · <a href="mailto:hassani.hritik@gmail.com">hassani.hritik@gmail.com</a>
    </footer>
  </main>
</div>

<!-- AI ASSISTANT -->
<button class="ai-fab" id="aiFab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 8.5 12.1L21 21l-2.9-1.5A9 9 0 0 0 12 3Z"/><circle cx="8.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="15.5" cy="12" r="1"/></svg> Ask AI</button>
<div class="ai-panel" id="aiPanel">
  <div class="ai-head">
    <span class="mo"></span>
    <div><div class="tt">Ask Hritik's AI</div><div class="ss" id="aiStatus">Chat, or go live with voice</div></div>
    <span class="sp"></span>
    <button class="ai-mb" id="aiLive" title="Live voice agent" aria-label="Live voice"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h2M7 8v8M11 4v16M15 7v10M19 9v6M22 11v2"/></svg></button>
    <button class="ai-mb" id="aiVoice" title="Voice replies" aria-label="Voice replies"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/></svg></button>
    <button class="ai-mb" id="aiClose" title="Close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
  </div>
  <div class="ai-body" id="aiBody"></div>
  <div class="ai-chips" id="aiChips">
    <span class="ai-chip">What does Hritik build?</span>
    <span class="ai-chip">Tell me about CodaMetrix</span>
    <span class="ai-chip">His tech stack?</span>
    <span class="ai-chip">Is he open to work?</span>
  </div>
  <div class="ai-foot">
    <textarea id="aiInput" rows="1" placeholder="Ask about Hritik…"></textarea>
    <button class="ai-m" id="aiMic" aria-label="Speak"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg></button>
    <button class="ai-s" id="aiSend" aria-label="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/></svg></button>
  </div>
</div>

<div class="va-hud" id="vaHud"><div class="va-card">
  <div class="va-orb" id="vaOrb"></div>
  <div class="va-st" id="vaStatus">Say "Hey Nova" to start</div>
  <div class="va-cap" id="vaCaption"></div>
  <button class="va-end" id="vaEnd">End session</button>
  <div class="va-hint">Try: "show me your projects" · "tell me about CodaMetrix" · "is he open to work?"</div>
</div></div>


`;
