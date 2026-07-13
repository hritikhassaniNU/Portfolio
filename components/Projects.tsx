import { LINKS } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

export default function Projects() {
  return (
    <section id="projects">
      <div className="sec-head reveal">
        <span className="num">03</span>
        <h2>Projects</h2>
        <span className="rule" />
      </div>

      <div className="item reveal">
        <div className="proj-top">
          <span className="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
            </svg>
          </span>
          <div className="proj-links">
            <a href={LINKS.github} target="_blank" rel="noopener" aria-label="Repo">
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <h3>
          <a className="proj-link" href="projects/nora/">
            NORA — AI Student Success Platform
          </a>
        </h3>
        <ul>
          <li>
            An end-to-end AI advising platform for students and advisors: a dual-mode <b>LangChain multi-agent pipeline (Gemini 2.0 Flash)</b> behind university login that guides international students through CPT/OPT and coursework, grounding answers in official policy via a <b>ChromaDB RAG layer — 92% accuracy</b> on a 50-question eval set. Ships with a companion Chrome extension.
          </li>
        </ul>
        <div className="tags">
          <span className="tag">LangChain</span>
          <span className="tag">Gemini</span>
          <span className="tag">ChromaDB</span>
          <span className="tag">RAG</span>
          <span className="tag">Next.js</span>
        </div>
      </div>

      <div className="item reveal">
        <div className="proj-top">
          <span className="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M7 9h4M7 13h4M15 9h2M15 13h2" />
            </svg>
          </span>
          <div className="proj-links">
            <a href={LINKS.github} target="_blank" rel="noopener" aria-label="Repo">
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <h3>
          <a className="proj-link" href="projects/applystack/">
            ApplyStack — Chrome Job-Tracking Extension
          </a>
        </h3>
        <ul>
          <li>
            A Chrome MV3 extension with a Kanban dashboard and a background service worker. Its <b>cross-frame autofill engine</b> traverses shadow DOM and nested forms to map <b>18 fields across 8 job boards</b>, with real-time WebSocket multi-tab sync over IndexedDB and secure in-sandbox PDF export.
          </li>
        </ul>
        <div className="tags">
          <span className="tag">TypeScript</span>
          <span className="tag">Chrome MV3</span>
          <span className="tag">WebSocket</span>
          <span className="tag">IndexedDB</span>
        </div>
      </div>

      <div className="item reveal">
        <div className="proj-top">
          <span className="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 4 7v10l8 5 8-5V7Z" />
              <path d="m12 7 4 2.5v5L12 17l-4-2.5v-5Z" />
            </svg>
          </span>
          <div className="proj-links">
            <a href={LINKS.github} target="_blank" rel="noopener" aria-label="Repo">
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <h3>
          <a className="proj-link" href="projects/kritexco/">
            Kritexco — Web3 Marketplace &amp; Studio
          </a>
        </h3>
        <ul>
          <li>
            A secure NFT marketplace and Web3 studio: custom <b>ERC-721/1155 contracts across Ethereum, Polygon, and Solana</b>, a generative NFT engine pinning thousands of assets to IPFS via Pinata, and reusable Web3.js modules — serving 500+ users across 10+ countries.
          </li>
        </ul>
        <div className="tags">
          <span className="tag">Solidity</span>
          <span className="tag">Ethereum</span>
          <span className="tag">Polygon</span>
          <span className="tag">Web3.js</span>
          <span className="tag">IPFS</span>
        </div>
      </div>
    </section>
  );
}
