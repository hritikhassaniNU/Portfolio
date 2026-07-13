export default function Education() {
  return (
    <section id="education">
      <div className="sec-head reveal">
        <span className="num">05</span>
        <h2>Education</h2>
        <span className="rule" />
      </div>

      <div className="item reveal">
        <div className="edu-head">
          <div>
            <h3>Master of Science in Computer Software Engineering</h3>
            <div className="edu-school">Northeastern University</div>
          </div>
          <div className="edu-meta">
            2024 – 2026
            <br />
            Boston, MA
          </div>
        </div>
        <div className="edu-cw-label">Relevant Coursework</div>
        <div className="chips">
          <span className="chip">Prompt Engineering &amp; AI Agents</span>
          <span className="chip">Application Engineering</span>
          <span className="chip">Algorithms</span>
          <span className="chip">Web Design &amp; UX</span>
          <span className="chip">Data Management &amp; Database Design</span>
        </div>
      </div>

      <div className="item reveal">
        <div className="edu-head">
          <div>
            <h3>Bachelor of Engineering in Electronics &amp; Telecommunication</h3>
            <div className="edu-school">University of Mumbai</div>
          </div>
          <div className="edu-meta">
            2019 – 2023
            <br />
            Mumbai, India
          </div>
        </div>
        <div className="edu-cw-label">Relevant Coursework</div>
        <div className="chips">
          <span className="chip">Data Structures &amp; Algorithms</span>
          <span className="chip">Object-Oriented Programming</span>
          <span className="chip">Big Data Analysis</span>
          <span className="chip">Neural Networks</span>
          <span className="chip">Software Engineering</span>
          <span className="chip">Python</span>
        </div>
      </div>
    </section>
  );
}
