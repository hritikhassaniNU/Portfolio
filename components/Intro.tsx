import { LINKS, NAV } from "@/lib/site";
import { IconGitHub, IconLinkedIn, IconMail, IconLinks, ArrowUpRight } from "./Icons";

export default function Intro() {
  return (
    <header className="intro">
      <div>
        <span className="mono-label avail load l1">
          <span className="dot" />
          BASED IN THE UNITED STATES · OPEN TO WORK
        </span>
        <div className="id-row load l2">
          <div className="avatar-wrap">
            <div className="avatar">
              <div className="avatar-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="me.png"
                  alt="Hritik Hassani"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const n = t.nextElementSibling as HTMLElement | null;
                    if (n) n.style.display = "grid";
                  }}
                />
                <span className="initials">HH</span>
              </div>
            </div>
          </div>
          <div className="id-text">
            <h1>Hritik Hassani</h1>
            <div className="title">
              <span id="roleRotate" />
              <span className="caret" />
            </div>
          </div>
        </div>
        <p className="tagline load l3">
          I build production AI agents and the distributed systems that run them — from architecture through CI/CD to live production.
        </p>
        <nav className="nav load l4" id="nav">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} data-sec={item.id}>
              <span className="ln" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="intro-foot load l7">
        <div className="socials">
          <a href={LINKS.github} target="_blank" rel="noopener" aria-label="GitHub">
            <IconGitHub />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
          <a href={`mailto:${LINKS.email}`} aria-label="Email">
            <IconMail />
          </a>
          <a href={LINKS.bio} target="_blank" rel="noopener" aria-label="All links">
            <IconLinks />
          </a>
        </div>
        <div className="ctrl-row">
          <a className="resume-btn" href={LINKS.resume} target="_blank" rel="noopener">
            Résumé
            <ArrowUpRight size={15} />
          </a>
          <div className="pal-wrap">
            <button className="mini" id="paletteBtn" aria-label="Change accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r="1.3" fill="currentColor" stroke="none" />
                <circle cx="17" cy="11" r="1.3" fill="currentColor" stroke="none" />
                <circle cx="8" cy="7" r="1.3" fill="currentColor" stroke="none" />
                <circle cx="6.5" cy="12" r="1.3" fill="currentColor" stroke="none" />
                <path d="M12 2a10 10 0 1 0 0 20c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1-.25-.27-.4-.62-.4-1 0-.83.67-1.5 1.5-1.5H16a6 6 0 0 0 6-6c0-4.97-4.48-9-10-9Z" />
              </svg>
            </button>
            <div className="pal-pop" id="palettePop" />
          </div>
          <button className="mini" id="themeBtn" aria-label="Toggle theme">
            <svg id="themeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
          </button>
        </div>
      </div>
    </header>
  );
}
