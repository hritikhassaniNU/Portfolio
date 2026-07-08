import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Project not found" };
  const title = `${p.name} — ${p.tagline} · Hritik Hassani`;
  return {
    title,
    description: p.overview,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: {
      title,
      description: p.overview,
      url: `https://hritikhassani.me/projects/${p.slug}/`,
      images: [{ url: p.cover ?? "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: p.overview,
      images: [p.cover ?? "/og.png"],
    },
  };
}

// Prefix static-asset paths with the build's basePath so plain <img>/<video>
// (which Next does NOT auto-rewrite) resolve on /Portfolio/ and at the domain root alike.
const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (s?: string) =>
  !s ? s : /^https?:/.test(s) ? s : BP + (s.startsWith("/") ? s : "/" + s);

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  const cover = asset(p.cover);
  const video = asset(p.video);

  return (
    <main className="cs">
      <div className="cs-shell">
        <Link href="/#projects" className="cs-back">
          <span aria-hidden>←</span> Back to work
        </Link>

        <header className="cs-head">
          <div className="cs-meta">{p.year}</div>
          <h1 className="cs-title">{p.name}</h1>
          <p className="cs-tagline">{p.tagline}</p>
          <div className="cs-tags">
            {p.stack.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <div className="cs-actions">
            <a className="cs-btn primary" href={p.github} target="_blank" rel="noopener">
              View on GitHub ↗
            </a>
            {p.demo && (
              <a className="cs-btn" href={p.demo} target="_blank" rel="noopener">
                Live demo ↗
              </a>
            )}
          </div>
        </header>

        {/* Cover media — drop an image or video in /public/projects/<slug>/ and set cover/video in lib/projects.ts */}
        <div className="cs-media">
          {video ? (
            <video src={video} controls playsInline poster={cover} />
          ) : cover ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={cover} alt={`${p.name} preview`} />
          ) : (
            <div className="cs-media-empty">
              <span>Add a screenshot or 30–60s demo clip here</span>
              <code>/public/projects/{p.slug}/cover.png</code>
            </div>
          )}
        </div>

        <section className="cs-section">
          <div className="cs-label">Overview</div>
          <p className="cs-body">{p.overview}</p>
        </section>

        <section className="cs-section">
          <div className="cs-label">What I built</div>
          <ul className="cs-list">
            {p.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>

        <section className="cs-section">
          <div className="cs-label">Highlights</div>
          <div className="cs-stats">
            {p.highlights.map((h) => (
              <div className="cs-stat" key={h.label}>
                <div className="cs-stat-val">{h.value}</div>
                <div className="cs-stat-label">{h.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <div className="cs-label">Tech</div>
          <div className="cs-tags">
            {p.stack.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </section>

        <footer className="cs-foot">
          <Link href="/#projects" className="cs-back">
            <span aria-hidden>←</span> Back to work
          </Link>
          <a href="mailto:hassani.hritik@gmail.com">hassani.hritik@gmail.com</a>
        </footer>
      </div>
    </main>
  );
}
