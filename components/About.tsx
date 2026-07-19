export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="sec-head">
        <span className="num">01</span>
        <h2>About</h2>
        <span className="rule" />
      </div>
      <div className="about-headline">
        I build AI agents
        <br />
        <span>and the systems that run them.</span>
      </div>
      <div className="about-body">
        <p>
          I&apos;m a Software &amp; AI Engineer who ships production agent systems end to end, from model behavior to the distributed infrastructure that keeps them fast, observable, and reliable. My focus is LLM agents, RAG, and event-driven backends that stay measurable under real traffic, enterprise constraints, and messy data.
        </p>
        <p>
          Most recently at CodaMetrix, I took a clinical-coding AI agent from architecture to live production and designed the Kafka/Redis platform behind it. Before that I co-founded Kritexco, a Web3 studio, where I led a 10-engineer team shipping blockchain products for clients worldwide. I&apos;m finishing a Master&apos;s in Computer Software Engineering at Northeastern (Aug 2026), and I own what I ship.
        </p>
      </div>
      <div className="about-beyond reveal">
        <span className="about-beyond-label">Beyond the work</span>
        <div className="chips">
          <span className="chip">Building side projects</span>
          <span className="chip">Open source</span>
          <span className="chip">Sneakers</span>
          <span className="chip">Travel</span>
          <span className="chip">Coffee</span>
        </div>
      </div>
    </section>
  );
}
