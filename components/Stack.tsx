// The tool grid is rendered into #stackGrid by initHome() in lib/homeScript.ts.
// (In Stage 2 this becomes a data-driven React list and the JS render is removed.)
export default function Stack() {
  return (
    <section id="stack">
      <div className="sec-head reveal">
        <span className="num">04</span>
        <h2>Tools I build with</h2>
        <span className="rule" />
      </div>
      <div className="stack reveal" id="stackGrid" />
    </section>
  );
}
