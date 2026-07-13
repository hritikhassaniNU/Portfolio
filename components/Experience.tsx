export default function Experience() {
  return (
    <section id="experience">
      <div className="sec-head reveal">
        <span className="num">02</span>
        <h2>Experience</h2>
        <span className="rule" />
      </div>
      <div className="timeline" id="expTimeline">
        <div className="tl-track">
          <div className="tl-fill" />
        </div>

        <div className="item reveal">
          <div className="tl-meta">JUN 2025 — DEC 2025</div>
          <h3>
            Software Engineer Co-op <span className="at">· CodaMetrix</span>
          </h3>
          <ul>
            <li>
              Built an AI agent for clinical-coding rule generation (LangGraph, Streamlit, Databricks) that analyzes Jira tickets, retrieves rules via Vector Search, detects conflicts, generates Drools-style rule JSON, and auto-opens GitHub PRs — <b>cutting engineering effort 48%</b>.
            </li>
            <li>
              Designed an <b>event-driven architecture (Kafka, Redis)</b> for the coding-review platform, replacing synchronous DB reads with async processing and cache-aside reads — refresh time <b>30 min → 5 min</b> under concurrent load.
            </li>
            <li>
              Improved rule-retrieval accuracy <b>30%</b> at sub-3s with a RAG pipeline over Databricks Vector Search; held agent responses <b>sub-200ms</b> via async SNS/Lambda workers.
            </li>
            <li>
              Migrated production deploys to a <b>Jenkins → ArgoCD GitOps</b> pipeline on AWS EKS with health-monitored rollouts and automated rollback, cutting manual release steps <b>54%</b>.
            </li>
          </ul>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">LangGraph</span>
            <span className="tag">Databricks</span>
            <span className="tag">Kafka</span>
            <span className="tag">Redis</span>
            <span className="tag">AWS EKS</span>
            <span className="tag">ArgoCD</span>
          </div>
        </div>

        <div className="item reveal">
          <div className="tl-meta">JUN 2021 — JAN 2024</div>
          <h3>
            Co-Founder &amp; Software Engineer <span className="at">· Kritexco</span>
          </h3>
          <ul>
            <li>
              Co-founded a Web3 studio; shipped a secure <b>NFT marketplace DApp</b> end to end (<b>500+ users, 10+ countries</b>) — React/TypeScript/Redux client, Node/MongoDB services, custom smart contracts.
            </li>
            <li>
              Architected and deployed contracts across <b>Ethereum, Polygon (ERC-721/1155), and Solana</b>, plus a custom ERC-20 launch; automated testnet→mainnet deploys with secure patterns that <b>cut audit-flagged vulnerabilities 60%</b>.
            </li>
            <li>
              Led a <b>10-engineer team</b> across 10+ global client engagements — direction, scoping, budgets, delivery — driving <b>20% revenue growth</b>.
            </li>
          </ul>
          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Solidity</span>
            <span className="tag">Web3.js</span>
            <span className="tag">Node.js</span>
            <span className="tag">IPFS</span>
          </div>
        </div>

        <div className="item reveal">
          <div className="tl-meta">JUN 2020 — AUG 2020</div>
          <h3>
            Software Developer Intern <span className="at">· Synergy Technology</span>
          </h3>
          <ul>
            <li>
              Built 15 modular React + TailwindCSS components with client-side validation, cutting form error rates <b>25%</b> and cross-browser issues <b>40%</b>.
            </li>
            <li>
              Built Node/Express REST APIs for onboarding submissions with server-side validation mirroring client checks to keep malformed data out.
            </li>
          </ul>
          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">TailwindCSS</span>
            <span className="tag">Node.js</span>
            <span className="tag">Express</span>
          </div>
        </div>
      </div>
    </section>
  );
}
