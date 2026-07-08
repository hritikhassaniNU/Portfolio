import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://hritikhassani.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Hritik Hassani — Software & AI Engineer",
  description:
    "Hritik Hassani — Software & AI Engineer building production AI agents and the distributed systems that run them.",
  keywords: [
    "Hritik Hassani", "Software Engineer", "AI Engineer", "AI agents",
    "LangGraph", "LangChain", "RAG", "distributed systems",
    "Northeastern University", "portfolio",
  ],
  authors: [{ name: "Hritik Hassani" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE + "/",
    title: "Hritik Hassani — Software & AI Engineer",
    description:
      "I build production AI agents and the distributed systems that run them — agents, RAG, and cloud infrastructure from architecture to production.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hritik Hassani — Software & AI Engineer",
    description: "I build production AI agents and the distributed systems that run them.",
    images: ["/og.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hritik Hassani",
  url: SITE + "/",
  image: SITE + "/og.png",
  jobTitle: "Software & AI Engineer",
  description:
    "Software & AI Engineer building production AI agents and the distributed systems that run them.",
  email: "mailto:hassani.hritik@gmail.com",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Northeastern University" },
    { "@type": "CollegeOrUniversity", name: "University of Mumbai" },
  ],
  knowsAbout: [
    "AI Agents", "LangGraph", "LangChain", "RAG", "Vector Search",
    "Distributed Systems", "Apache Kafka", "Redis", "Kubernetes", "AWS",
    "Python", "TypeScript",
  ],
  sameAs: [
    "https://github.com/hritikhassaniNU",
    "https://www.linkedin.com/in/hritik-hassani/",
    "https://hritikhassani.bio.link/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;450;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
