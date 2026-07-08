// @ts-nocheck
/* Ported verbatim from the original single-file build. Runs once on mount. */
export function initHome(){

  const root=document.documentElement;
  /* theme */
  const tBtn=document.getElementById('themeBtn'), tIcon=document.getElementById('themeIcon');
  const sun='<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  const moon='<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>';
  const setIcon=()=>tIcon.innerHTML=root.getAttribute('data-theme')==='dark'?sun:moon; setIcon();
  tBtn.addEventListener('click',()=>{root.setAttribute('data-theme',root.getAttribute('data-theme')==='dark'?'light':'dark'); setIcon();});

  /* palette */
  const PALETTES=[
    {n:'Azure', a1:'#4F8DFF', a2:'#6E7CFF'},
    {n:'Ember', a1:'#F59E5B', a2:'#FF7A6B'},
    {n:'Aqua',  a1:'#3FD9C2', a2:'#2FB6FF'},
    {n:'Iris',  a1:'#8B7BFF', a2:'#B07BFF'},
    {n:'Rose',  a1:'#FF6FA5', a2:'#C77BFF'}
  ];
  function applyPalette(p){ root.style.setProperty('--accent',p.a1); root.style.setProperty('--accent-2',p.a2); }
  applyPalette(PALETTES[0]);
  const palBtn=document.getElementById('paletteBtn'), palPop=document.getElementById('palettePop');
  palPop.innerHTML=PALETTES.map((p,i)=>`<button class="pal-sw" data-i="${i}" title="${p.n}" style="background:linear-gradient(135deg,${p.a1},${p.a2})"></button>`).join('');
  palBtn.addEventListener('click',e=>{e.stopPropagation(); palPop.classList.toggle('open');});
  document.addEventListener('click',()=>palPop.classList.remove('open'));
  palPop.addEventListener('click',e=>{const b=e.target.closest('.pal-sw'); if(b){applyPalette(PALETTES[+b.dataset.i]); palPop.classList.remove('open');}});

  /* cursor glow */
  const glow=document.getElementById('glow'); const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduce && matchMedia('(pointer:fine)').matches){
    addEventListener('mousemove',e=>{ glow.style.opacity='1'; glow.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`; });
  }

  /* reveal */
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ const el=e.target;
    el.querySelectorAll('.chip').forEach((c,i)=>c.style.transitionDelay=(i*0.035)+'s');
    el.querySelectorAll('li').forEach((c,i)=>c.style.transitionDelay=(i*0.06)+'s');
    el.classList.add('in'); io.unobserve(el); } }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%3)*.07+'s'; io.observe(el);});

  /* scrollspy */
  const navLinks=[...document.querySelectorAll('#nav a')];
  const spy=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ const id=e.target.id; navLinks.forEach(a=>a.classList.toggle('active', a.dataset.sec===id)); } }),{rootMargin:'-45% 0px -50% 0px'});
  ['about','experience','projects','stack','education','contact'].forEach(id=>spy.observe(document.getElementById(id)));

  /* ===== render tool stack (icons from Simple Icons CDN; text-only fallback) ===== */
  const STACK=[
    {cat:'Languages', items:[['Python','python'],['TypeScript','typescript'],['JavaScript','javascript'],['Java','openjdk'],['Go','go'],['C++','cplusplus']]},
    {cat:'Frameworks & Libraries', items:[['Node.js','nodedotjs'],['React','react'],['Next.js','nextdotjs','w'],['FastAPI','fastapi'],['NestJS','nestjs'],['Spring Boot','springboot'],['Express','express','w'],['GraphQL','graphql'],['Prisma','prisma','w'],['Streamlit','streamlit'],['REST APIs'],['WebSocket'],['Microservices']]},
    {cat:'Databases', items:[['PostgreSQL','postgresql'],['MongoDB','mongodb'],['MySQL','mysql'],['DynamoDB','amazondynamodb'],['Redis','redis'],['ChromaDB']]},
    {cat:'AI / LLM Stack', items:[['LangChain','langchain','w'],['LangGraph','langchain','w'],['Multi-Agent Systems'],['Agentic Workflows'],['Tool Calling'],['MCP'],['RAG'],['FAISS'],['Databricks','databricks'],['Anthropic API','anthropic','w'],['OpenAI API','openai','w'],['Gemini API','googlegemini'],['vLLM'],['Pydantic AI','pydantic'],['OpenAI Agents SDK'],['Vector Search'],['Prompt Engineering']]},
    {cat:'Infrastructure & DevOps', items:[['AWS'],['GCP','googlecloud'],['Docker','docker'],['Kubernetes','kubernetes'],['Terraform','terraform'],['Kafka','apachekafka'],['Jenkins','jenkins'],['ArgoCD','argo'],['GitHub Actions','githubactions'],['Git','git'],['Grafana','grafana'],['Bash','gnubash'],['Vercel','vercel','w'],['CI/CD'],['CloudWatch'],['Model Monitoring'],['Locust']]}
  ];
  // Brands the Simple Icons CDN no longer hosts (e.g. AWS) are embedded directly so they always render.
  const ICON_SVG={
    'AWS':'<svg class="chip-svg" viewBox="0 0 24 24" fill="none" stroke="#FF9900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13c5 3.4 13 3.4 18 0"/><path d="M16.4 11.2l4.1 1.8-1.8 4.1"/></svg>'
  };
  const sg=document.getElementById('stackGrid');
  sg.innerHTML = STACK.map(c=>`<div class="stack-cat"><div class="skill-cat">${c.cat}</div><div class="chips">${
    c.items.map(([name,slug,w])=>{
      const icon = ICON_SVG[name] ? ICON_SVG[name]
        : slug ? `<img src="https://cdn.simpleicons.org/${slug}${w?'/white':''}" alt="" loading="lazy" onerror="this.remove()">` : '';
      return `<span class="chip">${icon}${name}</span>`;
    }).join('')
  }</div></div>`).join('');

  /* ===== AI ASSISTANT ===== */
  const AI={ endpoint:'', model:'claude-sonnet-4-6', history:[],
    system:`You are the friendly AI assistant on Hritik Hassani's portfolio. Answer questions about him warmly and concisely (under 80 words), in the third person.
FACTS: Software & AI Engineer based in the United States; Master's in Computer Software Engineering at Northeastern (Aug 2026). Builds production AI agents + the distributed systems that run them.
CodaMetrix (SWE Co-op, 2025): built a clinical-coding AI agent (LangGraph, Databricks) that analyzes Jira tickets, retrieves rules via vector search, detects conflicts, auto-opens GitHub PRs (cut engineering effort 48%); designed an event-driven Kafka/Redis platform (refresh 30->5 min); RAG accuracy +30% sub-3s; sub-200ms responses via SNS/Lambda; migrated deploys to Jenkins->ArgoCD GitOps on EKS (release steps -54%).
Kritexco (Co-founder, 2021-24): Web3 studio; NFT marketplace (500+ users, 10+ countries); contracts on Ethereum/Polygon/Solana; led a 10-engineer team; 20% revenue growth.
Projects: NORA (LangChain multi-agent advising platform, ChromaDB RAG, 92% accuracy), ApplyStack (Chrome MV3 job-tracker), Kritexco.
Stack: Python, TypeScript, Java, Go; LangChain/LangGraph, MCP, RAG; React/Next.js; Node/FastAPI/NestJS; AWS, Kafka, Redis, Docker, Kubernetes, ArgoCD.
Open to full-time roles Aug 2026. Contact: hassani.hritik@gmail.com, linkedin.com/in/hritik-hassani. If unsure, suggest emailing him. Never invent facts.` };
  const KB=[
    {k:['hire','hiring','available','open to','job','recruit','role'],a:"Yes, Hritik is open to full-time Software / AI Engineering roles starting August 2026. Reach him at hassani.hritik@gmail.com or on LinkedIn."},
    {k:['codametrix','coda','co-op','clinical','recent'],a:"At CodaMetrix, Hritik built a clinical-coding AI agent (LangGraph, Databricks) that analyzes Jira tickets, retrieves rules via vector search, and auto-opens GitHub PRs cutting engineering effort 48%. He also designed an event-driven Kafka/Redis platform (refresh 30→5 min) and migrated deploys to a Jenkins→ArgoCD GitOps pipeline on EKS."},
    {k:['kritexco','nft','web3','blockchain','ethereum','solana','founder'],a:"Hritik co-founded Kritexco, a Web3 studio. He shipped a secure NFT marketplace (500+ users, 10+ countries), deployed contracts across Ethereum, Polygon, and Solana, and led a 10-engineer team driving 20% revenue growth."},
    {k:['nora','student','gemini','advising'],a:"NORA is an end-to-end AI advising platform a LangChain multi-agent pipeline on Gemini 2.0 Flash that guides international students through CPT/OPT and coursework, grounded in university policy via a ChromaDB RAG layer with 92% accuracy."},
    {k:['applystack','extension','chrome'],a:"ApplyStack is Hritik's Chrome MV3 extension: a Kanban job-tracker with a cross-frame autofill engine mapping 18 fields across 8 job boards, real-time multi-tab sync, and in-sandbox PDF export."},
    {k:['project','built','build','portfolio'],a:"Hritik has built NORA (an AI advising platform), ApplyStack (a Chrome job-tracker), and Kritexco (a Web3 marketplace). Ask about any of them!"},
    {k:['stack','skill','tech','language','tool'],a:"Hritik works in Python, TypeScript, Java, and Go; LangChain/LangGraph, MCP, and RAG for AI; React/Next.js; Node, FastAPI, NestJS; and AWS, Kafka, Redis, Docker, Kubernetes, and ArgoCD for systems and infra."},
    {k:['education','study','school','northeastern','degree'],a:"Hritik is finishing a Master's in Computer Software Engineering at Northeastern University (Aug 2026), with a Bachelor's in Electronics & Telecommunication from Mumbai University."},
    {k:['who','about','summary','background','experience'],a:"Hritik is a Software & AI Engineer in the United States finishing a Master's at Northeastern. He builds production AI agents and the distributed systems behind them most recently a clinical-coding agent at CodaMetrix and co-founded the Web3 studio Kritexco."},
    {k:['contact','email','reach','linkedin','github'],a:"Reach Hritik at hassani.hritik@gmail.com, on LinkedIn (linkedin.com/in/hritik-hassani), or GitHub (github.com/hritikhassaniNU)."},
    {k:['hi','hello','hey','sup'],a:"Hi! I'm Hritik's AI assistant. Ask me about his experience, projects, tech stack, or how to get in touch."}
  ];
  function localAnswer(t){ const q=t.toLowerCase(); for(const e of KB){ if(e.k.some(w=>q.includes(w))) return e.a; } return "I can tell you about Hritik's experience, projects (NORA, ApplyStack, Kritexco), tech stack, or how to reach him. What would you like to know? You can also email him at hassani.hritik@gmail.com."; }
  async function askAI(text){
    AI.history.push({role:'user',content:text});
    if(AI.endpoint){ try{
      const r=await fetch(AI.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:AI.model,max_tokens:1000,system:AI.system,messages:AI.history})});
      if(r.ok){ const d=await r.json(); const reply=(d.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n').trim(); if(reply){ AI.history.push({role:'assistant',content:reply}); return reply; } }
    }catch(e){} }
    const reply=localAnswer(text); AI.history.push({role:'assistant',content:reply}); return reply;
  }

  const aiFab=document.getElementById('aiFab'), aiPanel=document.getElementById('aiPanel'), aiClose=document.getElementById('aiClose'),
        aiBody=document.getElementById('aiBody'), aiInput=document.getElementById('aiInput'), aiSend=document.getElementById('aiSend'),
        aiMic=document.getElementById('aiMic'), aiChips=document.getElementById('aiChips'), aiVoice=document.getElementById('aiVoice'), aiStatus=document.getElementById('aiStatus');
  let greeted=false, voiceOn=false, busy=false;
  function addMsg(t,w){ const d=document.createElement('div'); d.className='msg '+w; d.textContent=t; aiBody.appendChild(d); aiBody.scrollTop=aiBody.scrollHeight; return d; }
  function addTyping(){ const d=document.createElement('div'); d.className='msg bot'; d.innerHTML='<span class="typing"><i></i><i></i><i></i></span>'; aiBody.appendChild(d); aiBody.scrollTop=aiBody.scrollHeight; return d; }
  function openAI(){ aiPanel.classList.add('open'); aiFab.style.display='none'; if(!greeted){greeted=true; addMsg("Hi! I'm Hritik's AI assistant 👋 Ask me about his work, or tap the waveform to talk live.","bot");} setTimeout(()=>aiInput.focus(),50); }
  function closeAI(){ aiPanel.classList.remove('open'); aiFab.style.display='inline-flex'; if(window.speechSynthesis) speechSynthesis.cancel(); }
  aiFab.addEventListener('click',openAI); aiClose.addEventListener('click',closeAI);
  async function send(text){ text=(text||aiInput.value).trim(); if(!text||busy) return; aiInput.value=''; aiInput.style.height='auto'; addMsg(text,'user'); aiChips.style.display='none'; busy=true; aiSend.disabled=true; const ty=addTyping(); const reply=await askAI(text); ty.remove(); addMsg(reply,'bot'); if(voiceOn) speak(reply); busy=false; aiSend.disabled=false; aiInput.focus(); }
  aiSend.addEventListener('click',()=>send());
  aiInput.addEventListener('keydown',e=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault(); send();} });
  aiInput.addEventListener('input',()=>{ aiInput.style.height='auto'; aiInput.style.height=Math.min(aiInput.scrollHeight,80)+'px'; });
  [...aiChips.querySelectorAll('.ai-chip')].forEach(c=>c.addEventListener('click',()=>send(c.textContent)));
  function speak(t){ if(!('speechSynthesis' in window)) return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(t); u.rate=1.03; u.lang='en-US'; speechSynthesis.speak(u); }
  if(!('speechSynthesis' in window)) aiVoice.style.display='none';
  aiVoice.addEventListener('click',()=>{ voiceOn=!voiceOn; aiVoice.classList.toggle('on',voiceOn); aiStatus.textContent=voiceOn?'Voice replies on':'Chat, or go live with voice'; if(!voiceOn&&window.speechSynthesis) speechSynthesis.cancel(); });
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition; let rec=null, listening=false;
  if(SR){ rec=new SR(); rec.lang='en-US'; rec.interimResults=false; rec.onresult=e=>{aiInput.value=e.results[0][0].transcript;}; rec.onend=()=>{listening=false; aiMic.classList.remove('rec'); if(aiInput.value.trim()) send();}; rec.onerror=()=>{listening=false; aiMic.classList.remove('rec');};
    aiMic.addEventListener('click',()=>{ if(listening){rec.stop();return;} try{rec.start(); listening=true; aiMic.classList.add('rec');}catch(e){} });
  } else { aiMic.style.opacity=.4; aiMic.addEventListener('click',()=>aiStatus.textContent='Voice needs Chrome/Edge/Safari'); }

  /* ===== LIVE VOICE AGENT (wake word + navigation) ===== */
  const AGENT_NAME='Nova';
  const WAKE=['hey nova','hello nova','hi nova','ok nova','okay nova'];
  const vaHud=document.getElementById('vaHud'), vaOrb=document.getElementById('vaOrb'), vaStatus=document.getElementById('vaStatus'),
        vaCaption=document.getElementById('vaCaption'), vaEnd=document.getElementById('vaEnd'), aiLive=document.getElementById('aiLive');
  let va=null, vaActive=false, vaAwake=false, vaSpeaking=false;
  function vaSpeak(text,then){ vaSpeaking=true; vaOrb.classList.add('speaking'); vaOrb.classList.remove('listening'); vaStatus.textContent=AGENT_NAME+' is speaking…'; try{va&&va.stop();}catch(e){}
    if('speechSynthesis' in window){ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.rate=1.03; u.lang='en-US'; u.onend=()=>{vaSpeaking=false; vaOrb.classList.remove('speaking'); then?then():vaResume();}; u.onerror=()=>{vaSpeaking=false; then?then():vaResume();}; speechSynthesis.speak(u); } else { vaSpeaking=false; then?then():vaResume(); } }
  function vaResume(){ if(!vaActive) return; vaOrb.classList.add('listening'); vaStatus.textContent=vaAwake?'Listening…':'Say "Hey '+AGENT_NAME+'" to start'; try{va.start();}catch(e){} }
  function scrollTo(sel){ document.querySelector(sel)?.scrollIntoView({behavior:'smooth',block:'start'}); }
  function flashProject(name){ scrollTo('#projects'); const c=[...document.querySelectorAll('#projects .item')].find(x=>x.querySelector('h3').textContent.toLowerCase().includes(name)); if(c){ setTimeout(()=>{c.style.outline='2px solid var(--accent)'; c.style.background='var(--surface-h)'; setTimeout(()=>{c.style.outline='';},1600);},450); } }
  async function vaRoute(text){ const q=text.toLowerCase();
    if(/\b(bye|goodbye|that'?s all|stop listening|end session|see you)\b/.test(q)){ vaSpeak("Thanks for visiting reach Hritik anytime by email. Goodbye!", endVA); return; }
    for(const k of ['nora','applystack','kritexco']){ if(q.includes(k)){ flashProject(k); vaSpeak(localAnswer(k)); return; } }
    if(/\b(project|portfolio|your work|built)\b/.test(q)){ scrollTo('#projects'); vaSpeak("Here's his work. "+localAnswer('project')); return; }
    if(/\b(experience|codametrix|kritexco|worked|job|career)\b/.test(q)){ scrollTo('#experience'); vaSpeak(localAnswer('experience')); return; }
    if(/\b(skill|stack|tech|about|who)\b/.test(q)){ scrollTo('#about'); vaSpeak(localAnswer('about')); return; }
    if(/\b(contact|hire|available|email|reach|open to)\b/.test(q)){ scrollTo('#about'); vaSpeak(localAnswer('hire')); return; }
    if(/\b(resume|cv)\b/.test(q)){ vaSpeak("Opening his résumé now."); window.open('https://drive.google.com/file/d/1_HMBrIqGwd9hyqeFlsxjLMb7pHX-BnH0/view?usp=sharing','_blank'); return; }
    vaSpeak(await askAI(text));
  }
  function handleVA(q,raw){ if(vaSpeaking) return;
    if(!vaAwake){ if(WAKE.some(w=>q.includes(w))){ vaAwake=true; let rest=raw; WAKE.forEach(w=>rest=rest.replace(new RegExp(w,'i'),'')); rest=rest.replace(/^[\s,!.?]+/,'').trim(); rest.length>2?vaRoute(rest):vaSpeak("Hi! I can tell you about Hritik's experience, show his projects, or answer questions. What would you like?"); } return; }
    vaRoute(raw);
  }
  function startVA(){ if(!SR){ vaHud.classList.add('open'); vaStatus.textContent='Voice needs Chrome, Edge, or Safari'; return; }
    aiPanel.classList.remove('open'); aiFab.style.display='none'; vaHud.classList.add('open'); vaActive=true; vaAwake=false; vaCaption.textContent='';
    va=new SR(); va.lang='en-US'; va.continuous=true; va.interimResults=true;
    va.onresult=e=>{ let interim='',fin=''; for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i]; r.isFinal?fin+=r[0].transcript:interim+=r[0].transcript;} if(interim) vaCaption.textContent=interim; if(fin){vaCaption.textContent=fin; handleVA(fin.toLowerCase().trim(),fin.trim());} };
    va.onend=()=>{ if(vaActive&&!vaSpeaking){try{va.start();}catch(e){}} };
    va.onerror=ev=>{ if(ev.error==='not-allowed'||ev.error==='service-not-allowed'){vaStatus.textContent='Microphone blocked allow mic access'; vaActive=false;} };
    vaOrb.classList.add('listening'); try{va.start();}catch(e){}
    vaSpeak("Hi, I'm "+AGENT_NAME+", Hritik's assistant. Say 'Hey "+AGENT_NAME+"' whenever you're ready, and I'll walk you through his work.");
  }
  function endVA(){ vaActive=false; vaAwake=false; try{va&&va.stop();}catch(e){} if(window.speechSynthesis) speechSynthesis.cancel(); vaHud.classList.remove('open'); vaOrb.classList.remove('listening','speaking'); aiFab.style.display='inline-flex'; }
  aiLive.addEventListener('click',startVA); vaEnd.addEventListener('click',endVA);

  /* ===== extra animation: rotator, progress, magnetic ===== */
  const roles=["Software & AI Engineer","AI Agent Systems Builder","Distributed Systems Engineer","Full-Stack Engineer"];
  const rEl=document.getElementById('roleRotate'); let ri=0, ci=0, del=false;
  function tick(){ const w=roles[ri]; rEl.textContent = del ? w.slice(0,ci--) : w.slice(0,ci++);
    if(!del && ci>w.length){ del=true; return setTimeout(tick,1500); }
    if(del && ci<0){ del=false; ci=0; ri=(ri+1)%roles.length; return setTimeout(tick,260); }
    setTimeout(tick, del?42:72);
  }
  if(reduce){ rEl.textContent=roles[0]; } else { tick(); }

  const prog=document.getElementById('progress');
  addEventListener('scroll',()=>{ const h=document.documentElement.scrollHeight-innerHeight; prog.style.width=(h>0?Math.min(scrollY/h*100,100):0)+'%'; }, {passive:true});

  if(!reduce && matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('.resume-btn,.socials a').forEach(el=>{
      el.addEventListener('mousemove',e=>{ const r=el.getBoundingClientRect(); el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*0.25}px,${(e.clientY-r.top-r.height/2)*0.25}px)`; });
      el.addEventListener('mouseleave',()=>{ el.style.transform=''; });
    });
  }

  /* ===== experience timeline scroll fill ===== */
  (function(){
    const tl=document.getElementById('expTimeline'); if(!tl) return;
    const track=tl.querySelector('.tl-track'), fill=tl.querySelector('.tl-fill');
    const items=[...tl.querySelectorAll('.item')]; if(!items.length||!track||!fill) return;
    const dots=items.map(()=>{ const d=document.createElement('div'); d.className='tl-dot'; tl.appendChild(d); return d; });
    let centers=[], top0=0, h=0;
    function centerOf(it){ const m=it.querySelector('.tl-meta'); const mo=m?(m.offsetTop+m.offsetHeight/2):14; return it.offsetTop+mo; }
    function geom(){
      centers=items.map(centerOf);
      top0=centers[0]; h=Math.max(0,centers[centers.length-1]-top0);
      track.style.top=top0+'px'; track.style.height=h+'px';
      dots.forEach((d,i)=>{ d.style.top=centers[i]+'px'; });
    }
    function update(){
      const t=tl.getBoundingClientRect().top, ref=innerHeight*0.62;
      let p=h>0?(ref-(t+top0))/h:0; p=Math.max(0,Math.min(1,p));
      fill.style.height=(p*h)+'px';
      centers.forEach((c,i)=>{ dots[i].classList.toggle('active',(t+c)<=ref+2); });
    }
    function refresh(){ geom(); update(); }
    refresh();
    addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});
    addEventListener('resize',()=>requestAnimationFrame(refresh));
    setTimeout(refresh,300); setTimeout(refresh,1300); // settle after fonts/preloader
  })();

  /* ===== preloader: counter + network canvas + curtain reveal ===== */
  (function(){
    const pre=document.getElementById('preloader'); if(!pre) return;
    const numEl=document.getElementById('plNum'), fillEl=document.getElementById('plFill'), stEl=document.getElementById('plStatus');
    const stages=[[0,'initializing systems'],[26,'loading agents'],[52,'connecting services'],[78,'warming caches'],[97,'ready']];
    const cv=document.getElementById('plCanvas'), ctx=cv&&cv.getContext('2d');
    const dpr=()=>Math.min(window.devicePixelRatio||1,2);
    let raf, W, H, nodes=[], accent='#4F8DFF';
    function size(){ W=cv.width=innerWidth*dpr(); H=cv.height=innerHeight*dpr(); cv.style.width=innerWidth+'px'; cv.style.height=innerHeight+'px'; }
    function init(){ accent=(getComputedStyle(document.documentElement).getPropertyValue('--accent')||'#4F8DFF').trim(); size();
      const n=Math.min(48, Math.round(innerWidth/26)); nodes=[];
      for(let i=0;i<n;i++) nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3*dpr(),vy:(Math.random()-.5)*.3*dpr()});
    }
    function draw(){ ctx.clearRect(0,0,W,H); const R=150*dpr();
      for(const p of nodes){ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1; }
      for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++){ const a=nodes[i],b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);
        if(d<R){ ctx.strokeStyle=accent; ctx.globalAlpha=(1-d/R)*0.16; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); } }
      ctx.globalAlpha=.65; ctx.fillStyle=accent; for(const p of nodes){ ctx.beginPath(); ctx.arc(p.x,p.y,1.7*dpr(),0,6.283); ctx.fill(); }
      ctx.globalAlpha=1; raf=requestAnimationFrame(draw);
    }
    function finish(){ if(pre.classList.contains('done')) return; pre.classList.add('done'); setTimeout(()=>{ if(raf)cancelAnimationFrame(raf); pre.style.display='none'; }, 1200); }
    const dur=2200, t0=performance.now();
    function step(now){ const p=Math.min((now-t0)/dur,1), v=Math.round((1-Math.pow(1-p,3))*100);
      numEl.textContent=v; fillEl.style.width=v+'%';
      let s=stages[0][1]; for(const [thr,label] of stages) if(v>=thr) s=label; stEl.textContent=s;
      if(p<1) requestAnimationFrame(step); else setTimeout(finish,260);
    }
    if(reduce){ numEl.textContent=100; fillEl.style.width='100%'; stEl.textContent='ready'; setTimeout(finish,200); }
    else { if(ctx){ init(); addEventListener('resize',()=>{ if(pre.style.display!=='none') init(); }); draw(); } requestAnimationFrame(step); }
    setTimeout(finish, 6000); // safety
  })();


  /* project cards -> case study pages */
  document.querySelectorAll('#projects .item').forEach(function(card){
    var link=card.querySelector('.proj-link'); if(!link) return;
    card.style.cursor='pointer';
    card.addEventListener('click', function(e){ if(e.target.closest('a')) return; window.location.href=link.getAttribute('href'); });
  });
}