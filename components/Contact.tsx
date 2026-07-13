import { LINKS } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact">
      <div className="sec-head reveal">
        <span className="num">06</span>
        <h2>Contact</h2>
        <span className="rule" />
      </div>
      <div className="reveal">
        <div className="contact-headline">
          Let&apos;s build something
          <br />
          <span>that ships.</span>
        </div>
        <p className="contact-sub">
          I&apos;m open to full-time Software / AI Engineering roles starting August 2026. The fastest way to reach me is email — I read every message and reply quickly.
        </p>
        <a className="contact-mail" href={`mailto:${LINKS.email}`}>
          {LINKS.email} <span>↗</span>
        </a>
        <div className="contact-links">
          <a href={LINKS.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener">
            GitHub
          </a>
          <a href={LINKS.resume} target="_blank" rel="noopener">
            Résumé
          </a>
          <a href={LINKS.bio} target="_blank" rel="noopener">
            All Links
          </a>
        </div>
      </div>
    </section>
  );
}
