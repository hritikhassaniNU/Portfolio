export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  overview: string;
  bullets: string[];
  highlights: { label: string; value: string }[];
  stack: string[];
  github: string;
  demo?: string;
  /** Optional cover image/video placed in /public/projects/<slug>/ */
  cover?: string;
  video?: string;
};

export const projects: Project[] = [
  {
    slug: "nora",
    name: "NORA",
    tagline: "AI Student Success Platform",
    year: "2025",
    overview:
      "NORA is an end-to-end AI advising platform for international students and their advisors. It pairs a dual-mode multi-agent pipeline with a retrieval layer grounded in official university policy, so answers about CPT/OPT, course planning, and program requirements are accurate rather than hallucinated.",
    bullets: [
      "Built a dual-mode LangChain multi-agent pipeline on Gemini 2.0 Flash, behind university login, that guides students through CPT/OPT, course planning, and program policy.",
      "Grounded every answer in official university policy through a ChromaDB RAG layer, reaching 92% accuracy on a 50-question evaluation set.",
      "Shipped a companion Chrome extension that surfaces inline guidance directly on university portals.",
      "Designed the agent routing so advisor-facing and student-facing modes share retrieval but diverge on tone, permissions, and available tools.",
    ],
    highlights: [
      { label: "Eval accuracy", value: "92%" },
      { label: "Eval set", value: "50 Q" },
      { label: "Agents", value: "Multi-agent" },
    ],
    stack: ["LangChain", "Gemini 2.0", "Multi-Agent", "ChromaDB", "RAG", "Next.js"],
    github: "https://github.com/hritikhassaniNU",
  },
  {
    slug: "applystack",
    name: "ApplyStack",
    tagline: "Chrome Job-Tracking Extension",
    year: "2025",
    overview:
      "ApplyStack is a Chrome MV3 extension that turns the messy job-application workflow into a single Kanban board, with an autofill engine that works across the fragmented DOM of real job boards and keeps every tab in sync.",
    bullets: [
      "Built a Chrome MV3 extension with a Kanban tracker and a background service worker coordinating state across tabs.",
      "Engineered a cross-frame autofill engine that traverses shadow DOM and nested iframes to map 18 fields across 8 job boards (Greenhouse, Lever, Ashby, Workday, and more).",
      "Added real-time multi-tab sync over IndexedDB with a WebSocket layer, plus secure in-sandbox PDF résumé export.",
    ],
    highlights: [
      { label: "Fields mapped", value: "18" },
      { label: "Job boards", value: "8" },
      { label: "Sync", value: "Real-time" },
    ],
    stack: ["TypeScript", "Chrome MV3", "Service Worker", "WebSocket", "IndexedDB"],
    github: "https://github.com/hritikhassaniNU",
  },
  {
    slug: "kritexco",
    name: "Kritexco",
    tagline: "Web3 Marketplace & Studio",
    year: "2021 – 2024",
    overview:
      "Kritexco is a Web3 studio and secure NFT marketplace shipped end to end — from smart contracts across multiple chains to a generative NFT engine and reusable integration modules — serving a global user base.",
    bullets: [
      "Shipped a secure NFT marketplace serving 500+ users across 10+ countries.",
      "Deployed custom ERC-721/1155 contracts across Ethereum, Polygon, and Solana, plus a custom ERC-20 token launch.",
      "Built a generative NFT engine pinning thousands of assets to IPFS via Pinata, with reusable Web3.js integration modules.",
      "Automated testnet-to-mainnet deploys with secure patterns that cut audit-flagged vulnerabilities by 60%.",
    ],
    highlights: [
      { label: "Users", value: "500+" },
      { label: "Countries", value: "10+" },
      { label: "Chains", value: "3" },
    ],
    stack: ["Solidity", "Ethereum", "Polygon", "Solana", "Web3.js", "IPFS"],
    github: "https://github.com/hritikhassaniNU",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
